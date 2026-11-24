import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { createAppWindow } from '../components/app-window.js';
import { clamp, reducedMotion } from '../lib/dom.js';
import { icon } from '../lib/icons.js';

/* Screen and body dimensions in world units. The interface keeps its own
   1120 × 800 pixel layout and is scaled onto the screen plane. */
const SCREEN_W = 3.5;
const SCREEN_H = 2.5;
const BEZEL = 0.07;
const DEPTH = 0.18;
const RADIUS = 0.088;
const BODY_W = SCREEN_W + BEZEL * 2;
const BODY_H = SCREEN_H + BEZEL * 2;

const clampYaw = (v) => clamp(v, -0.52, 0.3);
const clampPitch = (v) => clamp(v, -0.24, 0.24);

function roundedRect(w, h, r) {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r);
  shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  return shape;
}

function createEnvironment(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  const base = ctx.createLinearGradient(0, 0, 0, 256);
  base.addColorStop(0, '#2b3138');
  base.addColorStop(0.42, '#101215');
  base.addColorStop(1, '#040506');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 512, 256);

  const panel = ctx.createRadialGradient(150, 42, 4, 150, 42, 165);
  panel.addColorStop(0, 'rgba(226, 238, 255, 0.9)');
  panel.addColorStop(0.5, 'rgba(180, 205, 240, 0.22)');
  panel.addColorStop(1, 'rgba(160, 190, 230, 0)');
  ctx.fillStyle = panel;
  ctx.fillRect(0, 0, 512, 256);

  const panel2 = ctx.createRadialGradient(420, 75, 5, 420, 75, 125);
  panel2.addColorStop(0, 'rgba(150, 180, 225, 0.4)');
  panel2.addColorStop(1, 'rgba(150, 180, 225, 0)');
  ctx.fillStyle = panel2;
  ctx.fillRect(0, 0, 512, 256);

  const horizon = ctx.createLinearGradient(0, 150, 0, 256);
  horizon.addColorStop(0, 'rgba(60, 72, 88, 0)');
  horizon.addColorStop(1, 'rgba(30, 38, 48, 0.55)');
  ctx.fillStyle = horizon;
  ctx.fillRect(0, 150, 512, 106);

  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const target = pmrem.fromEquirectangular(texture);
  texture.dispose();
  pmrem.dispose();
  return target;
}

function createGlow() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0, 'rgba(150, 180, 220, 0.55)');
  gradient.addColorStop(0.42, 'rgba(95, 120, 158, 0.16)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createEdgeTexture(vertical = false) {
  const canvas = document.createElement('canvas');
  canvas.width = vertical ? 8 : 512;
  canvas.height = vertical ? 512 : 8;
  const ctx = canvas.getContext('2d');
  const gradient = vertical
    ? ctx.createLinearGradient(0, 0, 0, 512)
    : ctx.createLinearGradient(0, 0, 512, 0);
  gradient.addColorStop(0, 'rgba(255,255,255,0)');
  gradient.addColorStop(0.2, 'rgba(255,255,255,0.5)');
  gradient.addColorStop(0.55, 'rgba(255,255,255,0.92)');
  gradient.addColorStop(0.85, 'rgba(255,255,255,0.3)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createContactShadow() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(256, 128, 8, 256, 128, 250);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.72)');
  gradient.addColorStop(0.35, 'rgba(0, 0, 0, 0.42)');
  gradient.addColorStop(0.72, 'rgba(0, 0, 0, 0.12)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.save();
  ctx.translate(256, 128);
  ctx.scale(1, 0.52);
  ctx.translate(-256, -128);
  ctx.fillRect(0, 0, 512, 256);
  ctx.restore();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createStage(container, { variant = 'hero' } = {}) {
  const reduce = reducedMotion();
  const stage = document.createElement('div');
  stage.className = 'stage';
  stage.dataset.variant = variant;
  stage.innerHTML = `
    <div class="stage__grid" aria-hidden="true"></div>
    <div class="stage__css" aria-hidden="true"></div>
    <button class="stage__reset" type="button" aria-label="Reset the camera to its default angle">
      ${icon('reset', 14)}<span>Reset view</span>
    </button>
    <div class="stage__loader" aria-hidden="true">
      <span class="stage__loader-label">Initialising preview</span>
      <span class="stage__loader-track"><i></i></span>
    </div>`;
  container.append(stage);

  const cssLayer = stage.querySelector('.stage__css');
  const resetBtn = stage.querySelector('.stage__reset');
  const loader = stage.querySelector('.stage__loader');

  const app = createAppWindow({ interactive: true, presentation: true });

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
  } catch (error) {
    return fallback(stage, container, app, error);
  }
  if (!renderer.getContext()) return fallback(stage, container, app);

  const screenObject = new CSS3DObject(app.el);
  screenObject.element.classList.add('stage__screen');
  screenObject.scale.set(SCREEN_W / 1120, SCREEN_H / 800, 1);
  screenObject.position.set(0, 0, DEPTH / 2 + 0.004);

  renderer.setClearAlpha(0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.04;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.domElement.className = 'stage__canvas';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  stage.prepend(renderer.domElement);

  const cssRenderer = new CSS3DRenderer();
  cssRenderer.setSize(container.clientWidth || 800, container.clientHeight || 600);
  cssRenderer.domElement.className = 'stage__css-layer';
  cssLayer.append(cssRenderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
  const envTarget = createEnvironment(renderer);
  scene.environment = envTarget.texture;
  scene.environmentIntensity = 1.05;

  /* Window body ---------------------------------------------------------- */
  const windowGroup = new THREE.Group();
  scene.add(windowGroup);

  const bodyGeo = new THREE.ExtrudeGeometry(roundedRect(BODY_W, BODY_H, RADIUS), {
    depth: DEPTH,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.009,
    bevelSegments: 4,
    curveSegments: 28,
  });
  bodyGeo.center();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x24282e,
    metalness: 0.72,
    roughness: 0.28,
    envMapIntensity: 1.2,
  });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.castShadow = true;
  body.receiveShadow = true;
  windowGroup.add(body);

  // Brushed metal bezel around the display, with a recessed black lip inside.
  const outer = roundedRect(BODY_W - 0.004, BODY_H - 0.004, RADIUS - 0.002);
  const inner = roundedRect(SCREEN_W + 0.026, SCREEN_H + 0.026, 0.028);
  outer.holes.push(inner);
  const ring = new THREE.Mesh(
    new THREE.ShapeGeometry(outer, 24),
    new THREE.MeshStandardMaterial({
      color: 0x343a41,
      metalness: 0.9,
      roughness: 0.24,
      envMapIntensity: 1.55,
      side: THREE.DoubleSide,
    })
  );
  ring.position.z = DEPTH / 2 + 0.001;
  windowGroup.add(ring);

  const lipMat = new THREE.MeshStandardMaterial({
    color: 0x030405,
    roughness: 0.9,
    metalness: 0.05,
  });
  const lip = new THREE.Mesh(new THREE.PlaneGeometry(SCREEN_W + 0.03, SCREEN_H + 0.03), lipMat);
  lip.position.z = DEPTH / 2 + 0.0016;
  windowGroup.add(lip);

  windowGroup.add(screenObject);

  // Two restrained specular lines: the top bevel and the left rail catch the key light.
  const topEdge = new THREE.Mesh(
    new THREE.PlaneGeometry(BODY_W - 0.2, 0.007),
    new THREE.MeshBasicMaterial({
      map: createEdgeTexture(false),
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  topEdge.position.set(0, BODY_H / 2 - 0.016, DEPTH / 2 + 0.002);
  windowGroup.add(topEdge);

  const leftEdge = new THREE.Mesh(
    new THREE.PlaneGeometry(0.006, BODY_H - 0.26),
    new THREE.MeshBasicMaterial({
      map: createEdgeTexture(true),
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  leftEdge.position.set(-BODY_W / 2 + 0.014, 0, DEPTH / 2 + 0.002);
  windowGroup.add(leftEdge);

  const bottomEdge = new THREE.Mesh(
    new THREE.PlaneGeometry(BODY_W - 0.5, 0.005),
    new THREE.MeshBasicMaterial({
      map: createEdgeTexture(false),
      transparent: true,
      opacity: 0.26,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  bottomEdge.position.set(0, -BODY_H / 2 + 0.02, DEPTH / 2 + 0.002);
  windowGroup.add(bottomEdge);

  /* Floor and light ------------------------------------------------------ */
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.62 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.66;
  floor.receiveShadow = true;
  scene.add(floor);

  const contact = new THREE.Mesh(
    new THREE.PlaneGeometry(5.2, 2.7),
    new THREE.MeshBasicMaterial({
      map: createContactShadow(),
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })
  );
  contact.rotation.x = -Math.PI / 2;
  contact.position.set(0, -1.652, 0.2);
  scene.add(contact);

  const key = new THREE.DirectionalLight(0xffffff, 2.6);
  key.position.set(3.4, 4.8, 5.4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -3.4;
  key.shadow.camera.right = 3.4;
  key.shadow.camera.top = 3;
  key.shadow.camera.bottom = -3;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 18;
  key.shadow.bias = -0.0009;
  key.shadow.normalBias = 0.018;
  key.shadow.radius = 3;
  scene.add(key);

  const fill = new THREE.DirectionalLight(0x9db6d8, 0.9);
  fill.position.set(-5, 1.2, 2.4);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0xdce8ff, 2.4);
  rim.position.set(-2.4, 2.6, -4.2);
  scene.add(rim);

  const under = new THREE.DirectionalLight(0x8fa6c4, 0.55);
  under.position.set(1.5, -3, 2);
  scene.add(under);

  scene.add(new THREE.HemisphereLight(0x9fb2c8, 0x050607, 0.55));

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(6.8, 5),
    new THREE.MeshBasicMaterial({
      map: createGlow(),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  glow.position.set(0, 0, -0.9);
  scene.add(glow);

  /* Camera + interaction -------------------------------------------------- */
  const state = {
    yaw: 0.25,
    pitch: 0.05,
    targetYaw: 0.25,
    targetPitch: 0.05,
    parallaxYaw: 0,
    parallaxPitch: 0,
    targetParallaxYaw: 0,
    targetParallaxPitch: 0,
    dragging: false,
    hovering: false,
    idleFactor: 1,
    moved: false,
    interacted: false,
    startYaw: 0,
    startPitch: 0,
    startX: 0,
    startY: 0,
    distance: 6.4,
  };

  const fovRad = (camera.fov * Math.PI) / 180;

  function fitCamera(width, height) {
    const aspect = Math.max(0.45, width / height);
    camera.aspect = aspect;
    const marginY = variant === 'product' ? 0.22 : 0.5;
    const marginX = variant === 'product' ? 0.16 : 0.28;
    const fitH = (BODY_H + marginY) / (2 * Math.tan(fovRad / 2));
    const fitW = (BODY_W + marginX) / (2 * Math.tan(fovRad / 2) * aspect);
    const narrow = window.matchMedia('(max-width: 760px)').matches;
    const distance = narrow ? Math.max(fitH * 1.02, fitW * 0.96) : Math.max(fitH, fitW);
    state.distance = distance;
    camera.position.set(0, narrow ? 0.04 : 0.14, distance);
    camera.lookAt(0, variant === 'product' ? 0.16 : 0.14, 0);
    camera.updateProjectionMatrix();
    windowGroup.position.y = 0.02;
  }

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.setSize(width, height, false);
    cssRenderer.setSize(width, height);
    fitCamera(width, height);
    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);

  function pointerDown(event) {
    if (event.button !== 0 && event.pointerType === 'mouse') return;
    const tag = event.target.closest('input, textarea');
    if (tag) return;
    state.dragging = true;
    state.moved = false;
    state.startX = event.clientX;
    state.startY = event.clientY;
    state.startYaw = state.targetYaw;
    state.startPitch = state.targetPitch;
    stage.classList.add('is-grabbing');
  }

  function pointerMove(event) {
    if (state.dragging) {
      const dx = event.clientX - state.startX;
      const dy = event.clientY - state.startY;
      if (!state.moved) {
        // Let a vertical touch gesture scroll the page instead of rotating.
        if (event.pointerType === 'touch' && Math.abs(dy) > Math.abs(dx) * 1.15) {
          state.dragging = false;
          stage.classList.remove('is-grabbing');
          return;
        }
        if (Math.hypot(dx, dy) > 5) {
          state.moved = true;
          state.interacted = true;
          resetBtn.classList.add('is-visible');
        }
      }
      if (state.moved) {
        state.targetYaw = clampYaw(state.startYaw + dx * 0.0029);
        state.targetPitch = clampPitch(state.startPitch + dy * 0.0022);
      }
      return;
    }
    if (event.pointerType === 'touch') return;
    const rect = stage.getBoundingClientRect();
    state.targetParallaxYaw = ((event.clientX - rect.left) / rect.width - 0.5) * 0.055;
    state.targetParallaxPitch = ((event.clientY - rect.top) / rect.height - 0.5) * 0.03;
  }

  function pointerUp() {
    if (!state.dragging) return;
    state.dragging = false;
    stage.classList.remove('is-grabbing');
    if (state.moved) {
      const swallow = (event) => {
        event.preventDefault();
        event.stopPropagation();
      };
      stage.addEventListener('click', swallow, { capture: true, once: true });
      window.setTimeout(() => stage.removeEventListener('click', swallow, true), 60);
    }
  }

  function pointerEnter() {
    state.hovering = true;
  }

  function pointerLeave() {
    state.hovering = false;
    state.targetParallaxYaw = 0;
    state.targetParallaxPitch = 0;
  }

  stage.addEventListener('pointerdown', pointerDown);
  window.addEventListener('pointermove', pointerMove, { passive: true });
  window.addEventListener('pointerup', pointerUp);
  window.addEventListener('pointercancel', pointerUp);
  stage.addEventListener('pointerenter', pointerEnter);
  stage.addEventListener('pointerleave', pointerLeave);

  resetBtn.addEventListener('click', () => {
    state.targetYaw = 0.25;
    state.targetPitch = 0.05;
    state.interacted = false;
    resetBtn.classList.remove('is-visible');
  });

  /* Animation ------------------------------------------------------------- */
  let active = true;
  let firstFrame = true;
  let lastTime = performance.now();
  let elapsed = 0;

  function tick() {
    if (!active) return;
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    elapsed += dt;
    const t = elapsed;
    const ease = 1 - Math.exp(-dt * 7.5);

    state.yaw += (state.targetYaw - state.yaw) * ease;
    state.pitch += (state.targetPitch - state.pitch) * ease;
    state.parallaxYaw += (state.targetParallaxYaw - state.parallaxYaw) * (1 - Math.exp(-dt * 4));
    state.parallaxPitch += (state.targetParallaxPitch - state.parallaxPitch) * (1 - Math.exp(-dt * 4));

    // Settle while the pointer is over the window so controls are easy to hit.
    const idleTarget = state.hovering || state.dragging ? 0 : 1;
    state.idleFactor += (idleTarget - state.idleFactor) * (1 - Math.exp(-dt * 6));
    const idleScale = reduce ? 0 : state.idleFactor;
    const idleYaw = Math.sin(t * 0.22) * 0.012 * idleScale;
    const idlePitch = Math.cos(t * 0.17) * 0.006 * idleScale;

    windowGroup.rotation.y = state.yaw + state.parallaxYaw + idleYaw;
    windowGroup.rotation.x = state.pitch + state.parallaxPitch + idlePitch;
    windowGroup.rotation.z = -0.008;
    windowGroup.position.y = 0.02 + Math.sin(t * 0.55) * 0.012 * idleScale;

    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);

    if (firstFrame) {
      firstFrame = false;
      stage.classList.add('is-ready');
      window.setTimeout(() => {
        loader.setAttribute('hidden', '');
      }, 420);
    }
  }

  renderer.setAnimationLoop(tick);
  resize();

  const visibility = new IntersectionObserver(
    ([entry]) => {
      active = entry.isIntersecting && !document.hidden;
      if (active) {
        lastTime = performance.now();
        renderer.setAnimationLoop(tick);
      } else {
        renderer.setAnimationLoop(null);
      }
    },
    { threshold: 0.01 }
  );
  visibility.observe(stage);

  const onVisibility = () => {
    if (document.hidden) {
      active = false;
      renderer.setAnimationLoop(null);
    } else {
      active = true;
      lastTime = performance.now();
      renderer.setAnimationLoop(tick);
    }
  };
  document.addEventListener('visibilitychange', onVisibility);

  /* Cleanup --------------------------------------------------------------- */
  function destroy() {
    visibility.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pointermove', pointerMove);
    window.removeEventListener('pointerup', pointerUp);
    window.removeEventListener('pointercancel', pointerUp);
    renderer.setAnimationLoop(null);
    app.destroy();

    scene.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => {
          if (material.map) material.map.dispose();
          material.dispose();
        });
      }
    });
    screenObject.removeFromParent();
    envTarget.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
    cssRenderer.domElement.remove();
    stage.remove();
  }

  return { destroy, reset: () => resetBtn.click(), el: stage };
}

function fallback(stage, container, app, error) {
  if (error) console.warn('WebGL unavailable, showing the static preview.', error);
  stage.classList.add('stage--fallback', 'is-ready');
  stage.querySelector('.stage__loader')?.remove();
  const host = stage.closest('.hero__stage, .product-hero, .page');
  const hint = host?.querySelector('.stage-meta__hint span');
  if (hint) hint.textContent = 'Static preview';

  const wrap = document.createElement('div');
  wrap.className = 'stage__fallback';
  const inner = document.createElement('div');
  inner.className = 'stage__fallback-inner';
  inner.append(app.el);
  wrap.append(inner);
  stage.append(wrap);

  const fit = () => {
    const available = Math.max(240, Math.min(container.clientWidth - 32, 1120));
    const scale = Math.min(1, available / 1120, (container.clientHeight - 32) / 800);
    wrap.style.width = `${1120 * scale}px`;
    wrap.style.height = `${800 * scale}px`;
    inner.style.transform = `scale(${scale})`;
  };
  fit();
  const observer = new ResizeObserver(fit);
  observer.observe(container);

  return {
    destroy() {
      observer.disconnect();
      app.destroy();
      stage.remove();
    },
    reset() {},
    el: stage,
  };
}
