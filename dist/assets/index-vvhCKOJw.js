const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/stage-DGjCBc-h.js","assets/three-CeX_cU1O.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const se={mark:`<rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" stroke="currentColor" stroke-width="1.4"/>
    <path d="M7.5 8.75h9M7.5 12h6.25M7.5 15.25h3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,arrowRight:'<path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5"/>',arrowDown:'<path d="M12 4.5v11M7.5 11l4.5 4.5 4.5-4.5M4.5 19.5h15"/>',arrowUpRight:'<path d="M7 17 17 7M8.5 7H17v8.5"/>',reset:'<path d="M4.5 9.5A8 8 0 1 1 4 14"/><path d="M4.2 4.6v5h5"/>',copy:'<rect x="9" y="9" width="10.5" height="10.5" rx="2.2"/><path d="M15 6.2A2.2 2.2 0 0 0 12.8 4H6.2A2.2 2.2 0 0 0 4 6.2v6.6A2.2 2.2 0 0 0 6.2 15"/>',check:'<path d="M4.5 12.5 9.5 17.5 19.5 6.5"/>',menu:'<path d="M4 8h16M4 16h16"/>',close:'<path d="M6 6l12 12M18 6 6 18"/>',layers:'<path d="m12 3.5 8.5 4.6L12 12.7 3.5 8.1 12 3.5Z"/><path d="m4.5 12.4 7.5 4 7.5-4M4.5 16.4l7.5 4 7.5-4"/>',sweep:'<circle cx="12" cy="12" r="2"/><path d="M12 4.5a7.5 7.5 0 0 1 7.5 7.5"/><path d="M12 1.5a10.5 10.5 0 0 1 10.5 10.5"/><path d="M4.5 12A7.5 7.5 0 0 1 12 4.5"/>',terminal:'<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="m7 9.5 3 2.5-3 2.5M12.5 15h4.5"/>',shield:'<path d="M12 3.2 19 6v6.2c0 4-3 6.6-7 8.6-4-2-7-4.6-7-8.6V6l7-2.8Z"/><path d="m9.2 12.1 2 2 3.8-4"/>',command:'<path d="M9 7.5a2.5 2.5 0 1 0-2.5 2.5H9V7.5ZM9 16.5A2.5 2.5 0 1 1 6.5 14H9v2.5ZM15 7.5A2.5 2.5 0 1 1 17.5 10H15V7.5ZM15 16.5a2.5 2.5 0 1 0 2.5-2.5H15v2.5Z"/><rect x="9" y="10" width="6" height="4" rx="0.8"/>',file:'<path d="M13.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5.5-5.5Z"/><path d="M13.5 3.5V9H19"/>',clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 1.8"/>',lock:'<rect x="4.5" y="10" width="15" height="10" rx="2.4"/><path d="M8 10V7.8a4 4 0 0 1 8 0V10"/>',code:'<path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.5 5l-3 14"/>',grid:'<rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/>'};function w(e,o=20,s=""){const t=se[e]||"";return`<svg class="icon ${s}" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${t}</svg>`}function X(e=30,o=""){return`<img class="logo ${o}" src="/cracking-mark.png" width="${e}" height="${e}" alt="" decoding="async" />`}function K(e="lg",o=""){return`<span class="product-icon product-icon--${e} ${o}" aria-hidden="true"><img src="/sagacious-icon.png" alt="" decoding="async" /></span>`}function G(e,o={},...s){const t=document.createElement(e);for(const[n,a]of Object.entries(o||{}))a==null||a===!1||(n==="class"?t.className=a:n==="html"?t.innerHTML=a:n==="text"?t.textContent=a:n==="dataset"?Object.assign(t.dataset,a):n==="style"&&typeof a=="object"?Object.assign(t.style,a):n.startsWith("on")&&typeof a=="function"?t.addEventListener(n.slice(2).toLowerCase(),a):a===!0?t.setAttribute(n,""):t.setAttribute(n,String(a)));return ne(t,s),t}function ne(e,o){for(const s of o.flat(1/0))s==null||s===!1||e.append(s instanceof Node?s:document.createTextNode(String(s)))}function oe(e,o,s,t){return e.addEventListener(o,s,t),()=>e.removeEventListener(o,s,t)}function ie(e){let o=!1,s;return(...t)=>{s=t,!o&&(o=!0,requestAnimationFrame(()=>{o=!1,e(...s)}))}}function He(e,o,s){return Math.min(s,Math.max(o,e))}const P=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,W=[{href:"/",label:"Home",match:e=>e==="/"},{href:"/products",label:"Products",match:e=>e.startsWith("/products")},{href:"/about",label:"About",match:e=>e.startsWith("/about")}];function re(){const e=G("header",{class:"site-header",id:"site-header"});e.innerHTML=`
    <div class="nav container">
      <a class="brand" href="/" aria-label="Cracking — home">
        <span class="brand__mark">${X(30)}</span>
        <span class="brand__word">Cracking</span>
      </a>
      <nav class="nav__links" aria-label="Primary">
        <span class="nav__indicator" aria-hidden="true"></span>
        ${W.map(h=>`<a class="nav__link" href="${h.href}">${h.label}</a>`).join("")}
      </nav>
      <div class="nav__actions">
        <a class="btn btn--primary btn--sm nav__cta" href="/products/sagacious">
          Explore product
          ${w("arrowRight",15,"icon--arrow")}
        </a>
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
          <span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <div class="mobile-menu__inner">
        <nav aria-label="Mobile">
          ${W.map((h,y)=>`<a class="mobile-menu__link" href="${h.href}"><span class="mobile-menu__index">0${y+1}</span>${h.label}</a>`).join("")}
        </nav>
        <div class="mobile-menu__foot">
          <a class="btn btn--primary" href="/products/sagacious">Explore Sagacious ${w("arrowRight",16)}</a>
          <p class="mono">Windows 10 / 11 · x64</p>
        </div>
      </div>
    </div>`;const o=e.querySelector(".nav__toggle"),s=e.querySelector(".mobile-menu");document.body.append(s);const t=e.querySelector(".nav__indicator"),n=Array.from(e.querySelectorAll(".nav__link"));let a=!1,d=null;function i(h){if(!h||window.matchMedia("(max-width: 900px)").matches){t.style.opacity="0";return}t.style.opacity="1",t.style.width=`${h.offsetWidth}px`,t.style.transform=`translateX(${h.offsetLeft}px)`}function m(h){let y=null;n.forEach((b,l)=>{const c=W[l].match(h);b.classList.toggle("is-active",c),c?(b.setAttribute("aria-current","page"),y=b):b.removeAttribute("aria-current")}),s.querySelectorAll(".mobile-menu__link").forEach((b,l)=>{W[l]?.match(h)?b.setAttribute("aria-current","page"):b.removeAttribute("aria-current")}),requestAnimationFrame(()=>i(y)),_()}function v(){a=!0,d=document.activeElement,s.hidden=!1,s.classList.add("is-open"),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-label","Close menu"),e.classList.add("is-menu-open"),document.documentElement.classList.add("is-locked"),s.querySelector("a")?.focus({preventScroll:!0})}function _({restoreFocus:h=!1}={}){a&&(a=!1,s.classList.remove("is-open"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label","Open menu"),e.classList.remove("is-menu-open"),document.documentElement.classList.remove("is-locked"),window.setTimeout(()=>{a||(s.hidden=!0)},320),h&&(d||o).focus({preventScroll:!0}))}o.addEventListener("click",()=>a?_({restoreFocus:!0}):v()),s.addEventListener("keydown",h=>{if(h.key==="Escape"){_({restoreFocus:!0});return}if(h.key!=="Tab")return;const y=Array.from(s.querySelectorAll("a, button")).filter(c=>c.offsetParent!==null);if(!y.length)return;const b=y[0],l=y[y.length-1];h.shiftKey&&document.activeElement===b?(h.preventDefault(),l.focus()):!h.shiftKey&&document.activeElement===l&&(h.preventDefault(),b.focus())});const g=()=>e.classList.toggle("is-scrolled",window.scrollY>10);return g(),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",()=>i(e.querySelector(".nav__link.is-active")),{passive:!0}),oe(window,"keydown",h=>{h.key==="Escape"&&a&&_({restoreFocus:!0})}),{el:e,setActive:m}}function le(){const e=G("footer",{class:"site-footer",id:"site-footer"});return e.innerHTML=`
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a class="brand" href="/" aria-label="Cracking — home">
            <span class="brand__mark">${X(30)}</span>
            <span class="brand__word">Cracking</span>
          </a>
          <p class="footer__tagline">Small, precise Windows software.<br />One executable, no account, nothing left behind.</p>
          <span class="footer__status"><i></i>Sagacious · released</span>
        </div>
        <div class="footer__cols">
          <div class="footer__col">
            <p class="footer__heading">Product</p>
            <a href="/products/sagacious">Sagacious</a>
            <a href="/products">All products</a>
            <a href="/products/sagacious#interface">Interface</a>
          </div>
          <div class="footer__col">
            <p class="footer__heading">Reference</p>
            <a href="/products/sagacious#coverage">Artifact coverage</a>
            <a href="/products/sagacious#capabilities">Capabilities</a>
            <a href="/products/sagacious#specs">Specifications</a>
          </div>
          <div class="footer__col">
            <p class="footer__heading">Company</p>
            <a href="/about">About</a>
            <a href="/about#principles">Principles</a>
            <a href="/about#technical">Technical notes</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© 2026 Cracking. Windows 10 / 11 · x64.</p>
        <div class="footer__meta">
          <button class="footer__top-link" type="button" data-top>Back to top ${w("arrowUpRight",13)}</button>
        </div>
      </div>
    </div>`,e.querySelector("[data-top]").addEventListener("click",()=>{window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}),e}const B="Cracking",ce=()=>document.getElementById("route-progress");function de(e,o){const s=e.split("/").filter(Boolean),t=o.split("/").filter(Boolean);if(s.length!==t.length)return null;const n={};for(let a=0;a<s.length;a+=1){const d=s[a];if(d.startsWith(":"))n[d.slice(1)]=decodeURIComponent(t[a]);else if(d!==t[a])return null}return n}function pe({routes:e,notFound:o,main:s,onChange:t,redirects:n={}}){let a=null,d=0;function i(l){const c=l.replace(/\/+$/,"")||"/";return n[c]||null}function m(l){for(const c of e){const p=de(c.path,l);if(p)return{route:c,params:p}}return{route:{path:"*",page:o},params:{}}}function v(l){const c=l.fullTitle||(l.title?`${l.title} â€” ${B}`:B);document.title=c;const p=document.querySelector('meta[name="description"]');p&&l.description&&p.setAttribute("content",l.description)}function _(l,c="smooth"){if(!l)return!1;const p=document.querySelector(l);if(!p)return!1;const S=p.getBoundingClientRect().top+window.scrollY-84;return window.scrollTo({top:S,behavior:P()?"auto":c}),!0}async function g({pathname:l,hash:c,initial:p=!1}){const S=++d,{route:k,params:E}=m(l),$=k.page,u=ce();if(!p&&u&&(u.classList.add("is-active"),window.setTimeout(()=>u.classList.remove("is-active"),620)),a?.page.unmount)try{a.page.unmount()}catch(I){console.error("Page cleanup failed",I)}const R=$.render({params:E,pathname:l,hash:c,initial:p}),T=()=>{c||window.scrollTo({top:0,behavior:"auto"}),s.replaceChildren(R),s.dataset.page=$.id||"page",$.mount&&$.mount(s,{params:E,pathname:l,hash:c}),v($),t?.(l)};!p&&document.startViewTransition&&!P()?await document.startViewTransition(T).finished.catch(()=>{}):T(),S===d&&(c&&requestAnimationFrame(()=>_(c,p?"auto":"smooth")),a={page:$,pathname:l},p||s.focus({preventScroll:!0}))}function h(l,{replace:c=!1}={}){const p=new URL(l,location.href);if(p.origin!==location.origin){location.href=p.href;return}const S=i(p.pathname);if(S){p.pathname=S,history.replaceState({},"",p.href),g({pathname:p.pathname,hash:p.hash});return}c?history.replaceState({},"",p.href):history.pushState({},"",p.href),g({pathname:p.pathname,hash:p.hash})}function y(l){if(l.defaultPrevented||l.button!==0||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey)return;const c=l.target.closest("a[href]");if(!c||c.target==="_blank"||c.hasAttribute("download"))return;const p=new URL(c.href,location.href);if(p.origin===location.origin){if(p.pathname===location.pathname&&p.hash){l.preventDefault(),history.pushState({},"",p.href),_(p.hash);return}if(p.pathname===location.pathname&&!p.hash){l.preventDefault(),window.scrollTo({top:0,behavior:P()?"auto":"smooth"});return}l.preventDefault(),h(p.href)}}function b(){document.addEventListener("click",y),window.addEventListener("popstate",()=>{g({pathname:location.pathname,hash:location.hash})});const l=i(location.pathname);l&&history.replaceState({},"",`${l}${location.hash}`),g({pathname:l||location.pathname,hash:location.hash,initial:!0})}return{start:b,navigate:h,scrollToHash:_}}const he="modulepreload",ue=function(e){return"/"+e},V={},Z=function(o,s,t){let n=Promise.resolve();if(s&&s.length>0){let m=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),i=d?.nonce||d?.getAttribute("nonce");n=m(s.map(v=>{if(v=ue(v),v in V)return;V[v]=!0;const _=v.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${g}`))return;const h=document.createElement("link");if(h.rel=_?"stylesheet":he,_||(h.as="script"),h.crossOrigin="",h.href=v,i&&h.setAttribute("nonce",i),document.head.appendChild(h),_)return new Promise((y,b)=>{h.addEventListener("load",y),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${v}`)))})}))}function a(d){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=d,window.dispatchEvent(i),!i.defaultPrevented)throw d}return n.then(d=>{for(const i of d||[])i.status==="rejected"&&a(i.reason);return o().catch(a)})},C=[{tag:"BAM",name:"Background Activity Moderator",where:"Services\\bam\\State\\UserSettings",note:"Software execution log"},{tag:"SHIM",name:"AppCompatCache",where:"SYSTEM hive",note:"Shim cache entries"},{tag:"AMC",name:"Amcache",where:"Amcache.hve",note:"Installed and executed programs"},{tag:"PF",name:"Prefetch",where:"Windows\\Prefetch\\*.pf",note:"Launch counts, load times"},{tag:"UA",name:"UserAssist",where:"Registry · ROT13 value names",note:"GUI run counts"},{tag:"MUI",name:"MUICache",where:"Registry",note:"Application display names"},{tag:"REC / JMP",name:"RecentDocs, jump lists",where:"Recent\\*.lnk",note:"Per-app file history"},{tag:"PS",name:"PowerShell history",where:"Console host",note:"Command history"},{tag:"DEF",name:"Defender history",where:"Detection log",note:"Detection records"},{tag:"EVT",name:"Event logs",where:"Process and driver starts",note:"Start records"},{tag:"TMP",name:"Temp files",where:"File system",note:"Leftover working files"},{tag:"DRV",name:"Driver services",where:"Registry",note:"Install traces"},{tag:"USN",name:"Change journal",where:"NTFS $UsnJrnl",note:"File system changes"},{tag:"LIVE",name:"Live state",where:"Running processes",note:"Processes and loaded drivers"}],ve=[{index:"01",title:"Enumerate",lead:"Fourteen stores, one list.",body:"Sagacious reads the registry, the file system and the NTFS change journal, then normalises what it finds into rows you can read: artifact tag, file name, full path. No raw hives, no hex.",detail:"BAM · SHIM · AMC · PF · UA · MUI · REC · PS · DEF · EVT · TMP · DRV · USN · LIVE"},{index:"02",title:"Select",lead:"Pre-selected, not blanket.",body:"On load, one optional lookup returns a public list of tracked executables and only matching rows are ticked. Everything else loads unselected, so a stray notepad.exe is never swept by accident.",detail:"Filter by path, file name or artifact tag. SYS narrows the list to software outside \\Windows\\."},{index:"03",title:"Remove",lead:"The trace, and the files behind it.",body:"Deleting a row rewrites or prunes the store in place. Arm DELETE FILES and the software itself goes too: the folder chain, its data folders, the installer, the archive, the shortcut.",detail:"Name matching is token-based — com.solara.v3 goes, Xenoblade.png stays."},{index:"04",title:"Reconcile",lead:"Rebuild the journal.",body:"Every delete ends with a fresh USN journal on each fixed volume, so the file-deleted records produced by the wipe itself are gone as well. The status line reports how many volumes were reset.",detail:"Wipe, journal reset and self-trace cleanup run on a worker thread — the window never freezes."}],me=[{icon:"shield",title:"Stealth, on by default",body:"Sagacious is a trace of itself. Its own BAM, Prefetch, MUICache, UserAssist, Recent, shim cache and Amcache entries are dropped at startup, swept every two seconds while it runs, and removed again on exit.",meta:"Full pass on close"},{icon:"sweep",title:"SMART background sweep",body:"Names involved in a delete stay tracked. A background pass walks every fixed drive by exact name, resuming where it stopped, and removes anything that carries them — including folders an updater rewrites later.",meta:"Idle backoff 1.5 s → 24 s"}],fe=[{key:"Platform",value:"Windows 10 / 11 · x64"},{key:"Runtime",value:"Win32 · DirectX 11"},{key:"Interface",value:"GUI"},{key:"Window",value:"560 × 400, fixed"},{key:"Privileges",value:"Administrator"},{key:"Distribution",value:"Single executable"},{key:"Network",value:"One optional lookup, cached 24 h"}],ye=[{index:"01",title:"Say what it does",body:"The interface names the stores it reads and the volume count it resets. No scores, no shields, no vague promises about being “clean”."},{index:"02",title:"Local by default",body:"Everything runs on the machine. The single network request is a public list lookup that can be skipped with an environment variable and is cached for a day."},{index:"03",title:"Deletion is final",body:"Nothing is backed up, nothing goes to a recycle bin, and the app remembers nothing between runs. The confirmation is the button you pressed."},{index:"04",title:"A small surface",body:"One fixed 560 × 400 window, one executable, one worker thread. There is no tray icon, no service, no updater and no account."}],L=[{tag:"bam",path:"C:\\Program Files (x86)\\Faronics\\Deep Freeze\\Install C-0\\_$D.FrzState2k.exe"},{tag:"bam",path:"Microsoft Windows\\CloudExperienceHost_cw5n1h2txyewy"},{tag:"bam",path:"Microsoft Windows\\StartMenuExperienceHost_cw5n1h2txyewy"},{tag:"bam",path:"Microsoft Windows\\Client CBS_cw5n1h2txyewy"},{tag:"shim",path:"Microsoft Windows\\ShellExperienceHost_cw5n1h2txyewy"},{tag:"pf",path:"windows.immersivecontrolpanel_8wekyb3d8bbwe"},{tag:"ua",path:"Microsoft ScreenSketch_8wekyb3d8bbwe"},{tag:"pf",path:"C:\\Users\\Public\\Downloads\\obs-studio-31.0.1-installer.exe",selected:!0},{tag:"bam",path:"C:\\Users\\Public\\AppData\\Local\\Programs\\Signal\\Signal.exe",selected:!0}];function F(e=document){const o=Array.from(e.querySelectorAll("[data-reveal]"));if(!o.length)return()=>{};if(P())return o.forEach(n=>n.classList.add("is-in")),()=>{};const s=window.innerHeight||800;for(const n of o)n.getBoundingClientRect().top<s*.96&&n.classList.add("is-in");const t=new IntersectionObserver(n=>{for(const a of n)a.isIntersecting&&(a.target.classList.add("is-in"),t.unobserve(a.target))},{rootMargin:"0px 0px -6% 0px",threshold:.06});return o.forEach(n=>{n.classList.contains("is-in")||t.observe(n)}),()=>t.disconnect()}function _e(e=document){const o=Array.from(e.querySelectorAll("[data-parallax]"));if(!o.length||P()||window.matchMedia("(max-width: 860px)").matches)return()=>{};let s=0;const t=ie(()=>{const a=window.innerHeight;for(const d of o){const i=d.getBoundingClientRect();if(i.bottom<-200||i.top>a+200)continue;const m=Number(d.dataset.parallax)||.05,v=(i.top+i.height/2-a/2)*m;d.style.setProperty("--parallax-y",`${v.toFixed(2)}px`)}}),n=()=>{cancelAnimationFrame(s),s=requestAnimationFrame(t)};return window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n,{passive:!0}),t(),()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),cancelAnimationFrame(s)}}const ge=new Intl.NumberFormat("en-US"),we=(e,o)=>`
  <label class="app__row" data-index="${o}">
    <input class="app__check" type="checkbox" ${e.selected?"checked":""} />
    <span class="app__tag">${e.tag}</span>
    <span class="app__path">${e.path}</span>
  </label>`,be=`
  <div class="app__chrome">
    <span class="app__mark">${w("mark",18)}</span>
    <span class="app__name">Sagacious</span>
    <span class="app__controls" aria-hidden="true">
      <span class="app__control"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5h6" stroke="currentColor" stroke-width="1.2"/></svg></span>
      <span class="app__control"><svg width="10" height="10" viewBox="0 0 10 10"><rect x="2.4" y="2.4" width="5.2" height="5.2" fill="none" stroke="currentColor" stroke-width="1.1"/></svg></span>
      <span class="app__control app__control--close"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M2.4 2.4l5.2 5.2M7.6 2.4L2.4 7.6" stroke="currentColor" stroke-width="1.2"/></svg></span>
    </span>
  </div>
  <div class="app__body">
    <header class="app__header" data-region="header">
      <div class="app__title-row">
        <div class="app__brand">Sagacious</div>
        <span class="app__admin"><i></i>Admin</span>
      </div>
      <p class="app__meta" data-meta>
        <b>2,114</b> traces <span aria-hidden="true">·</span> <b>2</b> selected <span aria-hidden="true">·</span> 30 on whatexpsare
      </p>
    </header>
    <div class="app__tools" data-region="tools">
      <div class="app__filter">
        <input type="text" placeholder="filter (path, name, .bam, .pf?)" aria-label="Filter traces" spellcheck="false" autocomplete="off" />
      </div>
      <button class="app__sys is-on" type="button" aria-pressed="true" title="Include system traces">SYS</button>
    </div>
    <div class="app__list" data-region="list" role="group" aria-label="Trace rows">
      ${L.map(we).join("")}
      <div class="app__empty" hidden>no rows match this filter</div>
      <div class="app__busy" hidden>
        <div class="app__busy-card">
          <span class="app__spinner" aria-hidden="true"></span>
          <div class="app__busy-text"><b>deleting files</b><span>worker thread · 0 of 0</span></div>
        </div>
      </div>
    </div>
    <div class="app__actions" data-region="actions">
      <button class="app__icon-btn" type="button" aria-label="Reload the list" title="Reload the list">${w("reset",18)}</button>
      <button class="app__chip" type="button" title="Select every visible row">all</button>
      <span class="app__gap"></span>
      <button class="app__btn" type="button" data-action="files">Delete files</button>
      <button class="app__btn" type="button" data-action="all">Delete all</button>
      <button class="app__btn app__btn--primary" type="button" data-action="selected">Delete selected</button>
    </div>
    <div class="app__foot" data-region="foot">
      <span class="app__status" data-status role="status" aria-live="polite">whatexpsare: 30 known exe name(s), 2 match here</span>
      <span class="app__site">whatexpsare.online</span>
    </div>
  </div>`;function Se({density:e="full",interactive:o=!0,presentation:s=!1}={}){const t=document.createElement("div");t.className="app",t.dataset.density=e,t.setAttribute("role","group"),t.setAttribute("aria-label","Sagacious application interface"),t.innerHTML=be;const n=r=>t.querySelector(r),a=Array.from(t.querySelectorAll(".app__row")),d=a.map(r=>r.querySelector(".app__check")),i=n("[data-meta]"),m=n("[data-status]"),v=n(".app__list"),_=n(".app__empty"),g=n(".app__busy"),h=g.querySelector("b"),y=g.querySelector(".app__busy-text span"),b=n(".app__sys"),l=n(".app__filter input"),c=n('[data-action="files"]'),p=n('[data-action="all"]'),S=n('[data-action="selected"]'),k=n(".app__icon-btn"),E=n(".app__chip"),$=new Set,u={traces:2114,selected:new Set(L.map((r,f)=>r.selected?f:-1).filter(r=>r>=0)),matches:2,sys:!0,files:!1,filter:"",busy:!1,removed:new Set},R=(r,f)=>{const x=window.setTimeout(()=>{$.delete(x),r()},f);return $.add(x),x};function T(){const r=u.filter.trim().toLowerCase();return a.map((f,x)=>x).filter(f=>u.removed.has(f)||!u.sys&&/microsoft windows\\|\\windows\\/i.test(L[f].path)?!1:r?`${L[f].tag} ${L[f].path}`.toLowerCase().includes(r):!0)}function I(){const r=new Set(T());a.forEach((f,x)=>{f.hidden=!r.has(x)}),_.hidden=r.size>0||u.busy}function N(){i.innerHTML=`<b>${ge.format(u.traces)}</b> traces <span aria-hidden="true">·</span> <b>${u.selected.size}</b> selected <span aria-hidden="true">·</span> 30 on whatexpsare`}function q(r){m.textContent=r}function J(){if(u.files)return"files armed · folders, archives and shortcuts are included";if(!u.sys)return"software only · \\Windows\\ rows hidden";if(u.filter.trim()){const r=T().length;return`filter “${u.filter.trim()}” · ${r} match${r===1?"":"es"}`}return`whatexpsare: 30 known exe name(s), ${u.matches} match here`}function A(){I(),N(),b.classList.toggle("is-on",u.sys),b.setAttribute("aria-pressed",String(u.sys)),c.classList.toggle("is-armed",u.files);const r=T().length;E.classList.toggle("is-on",r>0&&r===u.selected.size),q(J())}function Q(r){d[r].checked?u.selected.add(r):u.selected.delete(r),A()}d.forEach((r,f)=>{r.addEventListener("change",()=>Q(f))}),l.addEventListener("input",()=>{u.filter=l.value,A()}),b.addEventListener("click",()=>{u.sys=!u.sys,A()}),c.addEventListener("click",()=>{u.files=!u.files,A()}),E.addEventListener("click",()=>{const r=T(),f=r.every(x=>u.selected.has(x));r.forEach(x=>{f?u.selected.delete(x):u.selected.add(x),d[x].checked=!f}),A()});function O(r){if(u.busy)return;if(!r.length){q("nothing to do: tick a row or type a name");return}u.busy=!0,g.hidden=!1,v.classList.add("is-busy");const f=[["deleting files",`${r.length} target(s) · worker thread`],["wiping traces","rewriting stores in place"],["resetting journal","rebuilding on fixed volumes"]];let x=0;h.textContent=f[0][0],y.textContent=f[0][1];const H=()=>{if(x+=1,x<f.length){h.textContent=f[x][0],y.textContent=f[x][1],R(H,420);return}ee(r)};R(H,460)}function ee(r){r.forEach(f=>{u.removed.add(f),u.selected.delete(f),a[f].classList.add("is-removed")}),u.traces=Math.max(0,u.traces-r.length),u.matches=Math.max(0,u.matches-r.length),R(()=>{u.busy=!1,g.hidden=!0,v.classList.remove("is-busy"),I(),N(),q(`${r.length} trace${r.length===1?"":"s"} removed · journal rebuilt on 3 volume(s)`),E.classList.remove("is-on")},220)}S.addEventListener("click",()=>{O(Array.from(u.selected).filter(r=>!u.removed.has(r)))}),p.addEventListener("click",()=>{const r=T();r.forEach(f=>{u.selected.add(f),d[f].checked=!0}),N(),O(r)}),k.addEventListener("click",()=>{$.forEach(r=>window.clearTimeout(r)),$.clear(),u.selected=new Set(L.map((r,f)=>r.selected?f:-1).filter(r=>r>=0)),u.removed.clear(),u.traces=2114,u.matches=2,u.busy=!1,u.filter="",l.value="",d.forEach((r,f)=>{r.checked=!!L[f].selected}),a.forEach(r=>r.classList.remove("is-removed")),g.hidden=!0,v.classList.remove("is-busy"),A()}),o||(t.setAttribute("inert",""),t.setAttribute("aria-hidden","true"),t.classList.add("is-static"),t.querySelectorAll("input, button").forEach(r=>{r.tabIndex=-1})),s&&(t.setAttribute("aria-hidden","true"),t.querySelectorAll("input, button").forEach(r=>{r.tabIndex=-1}));function te(r){r?t.dataset.highlight=r:delete t.dataset.highlight}function ae(){$.forEach(r=>window.clearTimeout(r)),$.clear()}return A(),{el:t,setHighlight:te,destroy:ae,reset:()=>k.click()}}function j(e,{minWidth:o=0,...s}={}){const t=Se(s),n=document.createElement("div");n.className="window-frame",o&&(n.style.width=`max(100%, ${o}px)`);const a=document.createElement("div");a.className="window-frame__scaler",a.style.width="1120px",a.style.height="800px",a.append(t.el),n.append(a),e.append(n);let d=0;const i=()=>{const v=getComputedStyle(n),_=parseFloat(v.paddingLeft)+parseFloat(v.paddingRight),g=parseFloat(v.paddingTop)+parseFloat(v.paddingBottom),h=n.clientWidth-_;if(!h||Math.abs(h-d)<.5)return;d=h;const y=Math.min(1.2,h/1120);a.style.transform=`scale(${y})`,n.style.height=`${Math.round(800*y+g)}px`,e.style.setProperty("--window-scale",y.toFixed(4)),e.classList.toggle("is-scrollable",o>0&&n.clientWidth>e.clientWidth+1)},m=new ResizeObserver(i);return m.observe(n),i(),{app:t,destroy(){m.disconnect(),t.destroy(),n.remove()}}}const xe=[{index:"01",title:"Header",body:"Trace count, selection count, public-list matches and administrator state."},{index:"02",title:"Filter and SYS",body:"Match a path, a file name or an artifact tag. SYS includes system traces; switch it off for software only."},{index:"03",title:"Trace rows",body:"Every row names its store, its file and its path. Pre-selected rows are the ones the public list tracks."},{index:"04",title:"Actions",body:"Wipe the selection, arm file removal, or reload the list. The status line reports what happened."}];function ke(){const e=document.createElement("div");e.className="page page--home",e.innerHTML=`
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__copy">
          <h1 class="display hero__title" data-reveal style="--reveal-delay: 60ms">
            Windows remembers.
            <span class="dim">You decide what stays.</span>
          </h1>
          <p class="lead hero__lead" data-reveal style="--reveal-delay: 130ms">
            Sagacious reads the execution records that a Windows machine keeps — registry stores,
            Prefetch files, the NTFS change journal — removes the rows you select, and rebuilds
            the journal so the record stays consistent.
          </p>
          <div class="btn-row" data-reveal style="--reveal-delay: 200ms">
            <a class="btn btn--primary" href="/products/sagacious">
              Explore Sagacious ${w("arrowRight",16,"icon--arrow")}
            </a>
            <a class="btn" href="#capabilities">See how it works</a>
          </div>
          <dl class="hero__meta" data-reveal style="--reveal-delay: 270ms">
            <div><dt>Artifact sources</dt><dd>${C.length}</dd></div>
            <div><dt>Change journal</dt><dd>USN</dd></div>
          </dl>
        </div>
        <div class="hero__stage" data-parallax="0.018">
          <div class="stage-meta">
            <span class="stage-meta__label"><i></i>Interactive preview</span>
            <span class="stage-meta__hint">${w("reset",12)}<span>Drag to rotate</span></span>
          </div>
          <div class="hero__stage-inner" id="hero-stage"></div>
        </div>
      </div>
      <div class="container hero__foot">
        <a class="hero__jump" href="#interface">Interface in detail ${w("arrowRight",13)}</a>
        <span class="hero__scroll">Scroll to inspect <i></i></span>
      </div>
    </section>

    <section class="section section--record" id="record">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">A launch is never just a launch.</h2>
            <p class="lead">
              Windows records what ran in more places than most people expect. Each store has its
              own rules, its own format and its own idea of what “deleted” means. Removing a
              registry key is not the same as removing the record.
            </p>
          </div>
          <div class="section-head__aside" data-reveal style="--reveal-delay: 80ms">
            Registry, file system and journal. Read as one list.
          </div>
        </div>

        <div class="record">
          <div class="record__figure" data-reveal>
            <span class="record__number">${C.length}</span>
            <span class="record__caption">artifact stores read on every scan</span>
            <span class="record__rule"></span>
            <p>BAM, shim cache, Amcache, Prefetch, UserAssist, MUICache, recent items, PowerShell history, Defender history, event logs, temp files, driver services, the USN journal and live process state.</p>
          </div>
          <div class="record__table" data-reveal style="--reveal-delay: 90ms">
            <div class="record__head">
              <span>Tag</span><span>Store</span><span>Holds</span>
            </div>
            ${C.slice(0,7).map(a=>`
              <div class="record__row">
                <span class="record__tag">${a.tag}</span>
                <span class="record__name">${a.name}</span>
                <span class="record__note">${a.note}</span>
              </div>`).join("")}
            <a class="record__more" href="/products/sagacious#coverage">
              <span>All ${C.length} sources, with locations</span>
              ${w("arrowRight",15)}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="capabilities">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Four steps, no ceremony.</h2>
            <p class="lead">
              The window does one pass: read the stores, show the rows, remove what you tick,
              rebuild the journal. Everything else is a detail of those four steps.
            </p>
          </div>
          <div class="section-head__aside" data-reveal style="--reveal-delay: 80ms">
            Runs as administrator. No service, no tray icon, no account.
          </div>
        </div>

        <div class="capabilities">
          ${ve.map((a,d)=>`
            <article class="capability" data-reveal style="--reveal-delay: ${d*60}ms">
              <span class="capability__index">${a.index}</span>
              <div class="capability__title">
                <h3 class="h3">${a.title}</h3>
                <p class="capability__lead">${a.lead}</p>
              </div>
              <p class="capability__body">${a.body}</p>
              <p class="capability__detail mono">${a.detail}</p>
            </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--interface" id="interface">
      <div class="container">
        <div class="interface">
          <div class="interface__preview" data-reveal>
            <div class="interface__window" id="home-interface"></div>
          </div>
          <div class="interface__side">
            <h2 class="h2" data-reveal style="--reveal-delay: 50ms">Everything on one screen.</h2>
            <p class="lead" data-reveal style="--reveal-delay: 90ms">
              A fixed 560 × 400 window. The list is the product: every row names its store, its
              file and its path. Nothing important is behind a menu.
            </p>
            <ul class="annotations">
              ${xe.map((a,d)=>`
                <li class="annotation" data-reveal style="--reveal-delay: ${120+d*55}ms">
                  <span class="annotation__index">${a.index}</span>
                  <div>
                    <p class="annotation__title">${a.title}</p>
                    <p class="annotation__body">${a.body}</p>
                  </div>
                </li>`).join("")}
            </ul>
            <a class="link-arrow" href="/products/sagacious#interface" data-reveal>
              Full interface anatomy ${w("arrowUpRight",15)}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="details">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The parts that matter after the first delete.</h2>
          </div>
        </div>
        <div class="highlights">
          ${me.map((a,d)=>`
            <article class="highlight" data-reveal style="--reveal-delay: ${d*70}ms">
              <span class="highlight__icon">${w(a.icon,20)}</span>
              <h3 class="highlight__title">${a.title}</h3>
              <p class="highlight__body">${a.body}</p>
              <span class="highlight__meta mono">${a.meta}</span>
            </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <h2 class="h2 cta__title">Look at the interface,<br />not a screenshot.</h2>
          <p class="lead">
            Rotate the window, tick a row, run a wipe. The preview on the product page is the
            product — same layout, same states, same status line.
          </p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">
              Open the product page ${w("arrowRight",16,"icon--arrow")}
            </a>
            <a class="btn" href="/products">All products</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec">
            <span class="mono">PLATFORM</span>
            <p>Windows 10 / 11 · x64</p>
          </div>
          <div class="cta__spec">
            <span class="mono">DISTRIBUTION</span>
            <p>Single executable</p>
          </div>
          <div class="cta__spec">
            <span class="mono">ACCESS</span>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </section>`;let o,s,t=!1,n=()=>{};return{id:"home",title:"Trace hygiene for Windows",fullTitle:"Cracking — Sagacious, trace hygiene for Windows",description:"Cracking builds Sagacious: it reads fourteen Windows execution-trace stores, removes the rows you select, and rebuilds the change journal so the record stays consistent.",render:()=>e,mount(){const a=F(e),d=_e(e);n=()=>{a(),d()},s=j(e.querySelector("#home-interface"),{interactive:!1,minWidth:640}),Z(async()=>{const{createStage:i}=await import("./stage-DGjCBc-h.js");return{createStage:i}},__vite__mapDeps([0,1])).then(({createStage:i})=>{t||(o=i(e.querySelector("#hero-stage"),{variant:"hero"}))})},unmount(){t=!0,n(),o?.destroy(),s?.destroy(),o=null,s=null}}}const $e=ke(),Y=[{slug:"sagacious",index:"01",name:"Sagacious",category:"Windows utility",status:"Released",platform:"Windows 10 / 11 · x64",tagline:"Trace hygiene for Windows.",summary:"Finds the execution records that a Windows machine keeps, lets you choose which ones go, and rebuilds the change journal so the record stays consistent.",href:"/products/sagacious",meta:["Windows x64","Local"]}];function Ee(){const e=document.createElement("div");e.className="page page--products",e.innerHTML=`
    <section class="page-head">
      <div class="container">
        <h1 class="display page-head__title" data-reveal style="--reveal-delay: 50ms">
          One product.<br /><span class="dim">Built to be used.</span>
        </h1>
        <div class="page-head__row">
          <p class="lead" data-reveal style="--reveal-delay: 100ms">
            Sagacious is Cracking’s first release. The catalogue stays small on purpose: a product
            is listed here when it is finished, documented and supported — not when it is announced.
          </p>
          <dl class="page-head__meta" data-reveal style="--reveal-delay: 140ms">
            <div><dt>Products</dt><dd>${String(Y.length).padStart(2,"0")}</dd></div>
            <div><dt>Platform</dt><dd>Windows</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="product-list">
          ${Y.map((t,n)=>`
            <a class="product-entry" href="${t.href}" data-reveal style="--reveal-delay: ${n*60}ms">
              <div class="product-entry__preview">
                <div class="product-entry__window" data-preview></div>
                <span class="product-entry__index mono">${t.index}</span>
              </div>
              <div class="product-entry__body">
                <div class="product-entry__status">
                  <span class="pill"><i></i>${t.status}</span>
                  <span class="mono">${t.category}</span>
                </div>
                <div class="product-entry__head">
                  ${K("sm")}
                  <h2 class="product-entry__name">${t.name}</h2>
                </div>
                <p class="product-entry__tagline">${t.tagline}</p>
                <p class="product-entry__summary">${t.summary}</p>
                <ul class="product-entry__meta">
                  ${t.meta.map(a=>`<li>${a}</li>`).join("")}
                </ul>
                <span class="product-entry__cta">
                  View product ${w("arrowUpRight",16)}
                </span>
              </div>
            </a>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">How the catalogue works.</h2>
            <p class="lead">
              Every product follows the same rules: it runs locally, it ships as one executable,
              and it explains its own behaviour in the interface.
            </p>
          </div>
        </div>
        <div class="platform-notes">
          <article data-reveal>
            <h3>Local by default</h3>
            <p>No account, no telemetry pipeline, no cloud dependency. Sagacious makes one optional public-list request that can be skipped entirely.</p>
          </article>
          <article data-reveal style="--reveal-delay: 70ms">
            <h3>One executable</h3>
            <p>No installer framework, no runtime to bootstrap, no background service. One binary, Sagacious.exe.</p>
          </article>
          <article data-reveal style="--reveal-delay: 140ms">
            <h3>Documented in the UI</h3>
            <p>Counts, volume resets and skipped system files are reported where the action happens — not in a changelog nobody reads.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <h2 class="h2 cta__title">See the whole product.</h2>
          <p class="lead">The product page covers the interface, every artifact source and the specification sheet.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">Open Sagacious ${w("arrowRight",16,"icon--arrow")}</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">PRODUCT</span><p>Sagacious</p></div>
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
        </div>
      </div>
    </section>`;let o=()=>{},s;return{id:"products",title:"Products",description:"The Cracking catalogue: Sagacious, one Windows utility, documented and supported.",render:()=>e,mount(){o=F(e),s=j(e.querySelector("[data-preview]"),{interactive:!1})},unmount(){o(),s?.destroy(),s=null}}}const Te=Ee();async function Ae(e,{onProgress:o,signal:s}={}){const t=await fetch(e,{signal:s,cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);if((t.headers.get("content-type")||"").includes("text/html"))throw new Error("asset-missing");const a=Number(t.headers.get("content-length"))||0;if(!t.body){const v=await t.blob();return o?.({loaded:v.size,total:v.size}),v}const d=t.body.getReader(),i=[];let m=0;for(;;){const{done:v,value:_}=await d.read();if(v)break;i.push(_),m+=_.byteLength,o?.({loaded:m,total:a})}return new Blob(i,{type:t.headers.get("content-type")||"application/octet-stream"})}function Le(e,o){const s=URL.createObjectURL(e),t=document.createElement("a");t.href=s,t.download=o,t.rel="noopener",document.body.append(t),t.click(),t.remove(),window.setTimeout(()=>URL.revokeObjectURL(s),3e4)}const D=e=>{if(!e)return"0 MB";const o=e/(1024*1024);return o>=.95?`${o.toFixed(1)} MB`:`${Math.max(1,Math.round(e/1024))} KB`},Me="https://github.com/yekigarcia79-arch/Cracking-/releases/download/v1.0.1/Sagacious.exe",z="Windows 10 / 11 · x64";function Ce({url:e="/Sagacious.exe",filename:o="Sagacious.exe"}={}){const s=document.createElement("div");s.className="dl",s.dataset.state="idle",s.innerHTML=`
    <button class="dl__btn" type="button" data-start>
      <span class="dl__fill" data-fill aria-hidden="true"></span>
      <span class="dl__body">
        <span class="dl__icon" data-icon>${w("arrowDown",16)}</span>
        <span class="dl__text">
          <span class="dl__label" data-label>Download Sagacious</span>
          <span class="dl__meta" data-meta>${z}</span>
        </span>
        <span class="dl__pct" data-pct aria-hidden="true"></span>
      </span>
    </button>
    <p class="dl__status" data-status role="status" aria-live="polite"></p>`;const t=s.querySelector("[data-start]"),n=s.querySelector("[data-fill]"),a=s.querySelector("[data-icon]"),d=s.querySelector("[data-label]"),i=s.querySelector("[data-meta]"),m=s.querySelector("[data-pct]"),v=s.querySelector("[data-status]");let _=null,g=0;function h(){s.dataset.state="idle",n.style.width="0%",m.textContent="",d.textContent="Download Sagacious",i.textContent=z,a.innerHTML=w("arrowDown",16),v.textContent=""}function y(l){v.textContent=l}async function b(){if(s.dataset.state!=="busy"){window.clearTimeout(g),s.dataset.state="busy",n.style.width="0%",d.textContent="Starting download",i.textContent="Contacting the release host",m.textContent="",a.innerHTML=w("arrowDown",16),y("Download started."),_=new AbortController;try{const l=await Ae(e,{signal:_.signal,onProgress:({loaded:c,total:p})=>{const S=p?Math.min(1,c/p):0;n.style.width=`${(S*100).toFixed(1)}%`,m.textContent=p?`${Math.round(S*100)}%`:"",d.textContent="Downloading Sagacious",i.textContent=p?`${D(c)} of ${D(p)}`:`${D(c)} downloaded`}});Le(l,o),s.dataset.state="done",n.style.width="100%",m.textContent="",d.textContent="Downloaded",i.textContent=`${D(l.size)} · saved to your downloads`,a.innerHTML=w("check",16),y(`Download complete. ${D(l.size)} saved as ${o}.`),g=window.setTimeout(()=>{s.dataset.state==="done"&&h()},6e3)}catch(l){if(l.name==="AbortError")return;s.dataset.state="error",n.style.width="0%",m.textContent="",d.textContent="Download failed — try again",i.textContent="The file could not be downloaded",a.innerHTML=w("reset",16),v.innerHTML=`If it keeps failing, <a href="${Me}" target="_blank" rel="noopener">download from GitHub</a>.`}}}return t.addEventListener("click",b),{el:s,destroy(){window.clearTimeout(g),_?.abort(),t.removeEventListener("click",b)}}}const M=[{id:"header",index:"01",title:"Header",body:"The state of the list before anything runs: how many traces were found, how many are ticked, and how many match the public list.",points:["Trace, selection and match counts","ADMIN badge reflects elevation"]},{id:"tools",index:"02",title:"Filter and SYS",body:"One field matches a path, a file name or an artifact tag. SYS is a scope switch, not a filter menu: lit means system traces are included.",points:["Matches path, name and tag","SYS off hides \\Windows\\ rows","Filter state is reported in the footer"]},{id:"list",index:"03",title:"Trace rows",body:"Every row carries its store, its file and its full path. Pre-selected rows are the ones the public list tracks; everything else loads unticked.",points:["Stores are labelled, not abbreviated away","Click a row to include or exclude it","Running deletions dim the list, never freeze it"]},{id:"actions",index:"04",title:"Actions",body:"Wipe the selection, arm file removal, or reload the list. The armed state is visible on the button, not buried in a confirmation dialog.",points:["DELETE FILES arms recursive removal","DELETE ALL selects and wipes in one pass","Reload restores the list without restarting"]},{id:"foot",index:"05",title:"Status line",body:"The only place results are reported. Volume resets, skipped system files, background sweep finds and list lookups all land here.",points:["Volume count after a journal rebuild","Files pending at next boot","Public-list state and cache age"]}];function Re(){const e=document.createElement("div");e.className="page page--product",e.innerHTML=`
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__top">
          <div class="product-hero__id">
            ${K("lg")}
            <div>
              <h1 class="display product-hero__name" data-reveal style="--reveal-delay: 50ms">Sagacious</h1>
            </div>
          </div>
          <div class="product-hero__tags" data-reveal style="--reveal-delay: 90ms">
            <span class="pill"><i></i>Released</span>
            <span class="chip mono">Windows x64</span>
          </div>
        </div>
        <div class="product-hero__row">
          <p class="lead product-hero__lead" data-reveal style="--reveal-delay: 120ms">
            Sagacious finds the execution traces that a Windows machine keeps, shows them as one
            readable list, and removes the ones you choose. Then it rebuilds the change journal on
            every fixed volume, so the file-deleted records produced by the wipe are gone too.
          </p>
          <dl class="product-hero__meta" data-reveal style="--reveal-delay: 160ms">
            <div><dt>Artifact sources</dt><dd>${C.length}</dd></div>
            <div><dt>Window</dt><dd>560 × 400</dd></div>
            <div><dt>Interface</dt><dd>GUI</dd></div>
          </dl>
        </div>
        <div class="product-hero__download" data-download data-reveal style="--reveal-delay: 200ms"></div>
      </div>
      <div class="container">
        <div class="stage-meta stage-meta--product">
          <span class="stage-meta__label"><i></i>Interactive preview</span>
          <span class="stage-meta__hint">${w("reset",12)}<span>Drag to rotate</span></span>
        </div>
        <div class="product-stage" id="product-stage" aria-label="Interactive 3D presentation of the Sagacious window"></div>
      </div>
    </section>

    <section class="section section--interface" id="interface">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The window, part by part.</h2>
            <p class="lead">
              Five regions carry every interaction. Select one to outline it in the interface and
              read what it is responsible for.
            </p>
          </div>
          <div class="section-head__aside" data-reveal style="--reveal-delay: 80ms">
            The preview below is live. Rows, filter, SYS and the delete flow all behave.
          </div>
        </div>

        <div class="anatomy">
          <div class="anatomy__window" data-reveal>
            <div class="anatomy__canvas" id="anatomy-window"></div>
            <div class="anatomy__caption">
              <span class="mono" data-anatomy-state></span>
            </div>
          </div>
          <div class="anatomy__panel" data-reveal style="--reveal-delay: 90ms">
            <div class="anatomy__tabs" role="tablist" aria-label="Interface regions" aria-orientation="vertical">
              ${M.map((i,m)=>`
                <button class="anatomy__tab${m===0?" is-active":""}" type="button" role="tab"
                  id="tab-${i.id}" aria-controls="panel-region" aria-selected="${m===0}" tabindex="${m===0?0:-1}"
                  data-region-tab="${i.id}">
                  <span class="anatomy__tab-index mono">${i.index}</span>
                  <span class="anatomy__tab-label">${i.title}</span>
                  <span class="anatomy__tab-mark" aria-hidden="true"></span>
                </button>`).join("")}
            </div>
            <div class="anatomy__detail" id="panel-region" role="tabpanel" aria-labelledby="tab-header" tabindex="0">
              <p class="anatomy__detail-title">${M[0].title}</p>
              <p class="anatomy__detail-body">${M[0].body}</p>
              <ul class="anatomy__points">
                ${M[0].points.map(i=>`<li>${i}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="coverage">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Fourteen places a launch can hide.</h2>
            <p class="lead">
              Each store is read directly, normalised into rows and — when you delete — rewritten or
              pruned in place. A missing key is not the same as a shorter list.
            </p>
          </div>
          <div class="section-head__aside" data-reveal style="--reveal-delay: 80ms">
            Registry · file system · NTFS journal · live process state
          </div>
        </div>

        <div class="coverage" data-reveal>
          <div class="coverage__head">
            <span>Tag</span><span>Store</span><span>Location</span><span>Holds</span>
          </div>
          ${C.map(i=>`
            <div class="coverage__row">
              <span class="coverage__tag">${i.tag}</span>
              <span class="coverage__name">${i.name}</span>
              <span class="coverage__where mono">${i.where}</span>
              <span class="coverage__note">${i.note}</span>
            </div>`).join("")}
        </div>
        <p class="coverage__foot" data-reveal>
          ${w("shield",15)}
          Shim cache, BAM, Amcache and UserAssist are rewritten or pruned in place — not unlinked —
          so the store stays valid after the edit.
        </p>
      </div>
    </section>

    <section class="section" id="capabilities">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Deletion is more than a row disappearing.</h2>
            <p class="lead">
              Two details decide whether a wipe actually holds: what happens to the files behind
              the rows, and what happens to the journal that recorded their removal.
            </p>
          </div>
        </div>

        <div class="dives">
          <article class="dive" data-reveal>
            <div class="dive__text">
              <h3 class="h3">Files, not just rows.</h3>
              <p>
                Arm DELETE FILES and every delete also removes the software behind the ticked rows:
                the executable’s folder chain, its data folders, installers, archives, shortcuts and
                loose files that carry the name.
              </p>
              <ul class="dive__list">
                <li>Matching is token-based, so <span class="mono">com.solara.v3</span> goes and <span class="mono">Xenoblade.png</span> stays.</li>
                <li>A running copy is killed first, including WebView2 and Electron children.</li>
                <li>Anything still locked is queued for deletion at the next boot.</li>
              </ul>
            </div>
            <div class="dive__visual">
              <div class="tree">
                <div class="tree__head mono">DELETE FILES · TOKEN MATCH</div>
                <div class="tree__row tree__row--root"><span class="tree__glyph">▾</span>Xeno-v1.3.65\\</div>
                <div class="tree__row tree__row--child"><span class="tree__glyph">├─</span>Xeno.exe<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--child"><span class="tree__glyph">├─</span>Xeno.dll<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--child"><span class="tree__glyph">└─</span>WebView2\\<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--sibling"><span class="tree__glyph">├─</span>Xeno-v1.3.65.rar<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--sibling"><span class="tree__glyph">├─</span>Setup_Xeno.exe<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--keep"><span class="tree__glyph">└─</span>Xenoblade.png<span class="tree__keep">kept</span></div>
                <div class="tree__foot mono">C:\\Users\\Public\\Downloads</div>
              </div>
            </div>
          </article>

          <article class="dive dive--reverse" data-reveal>
            <div class="dive__text">
              <h3 class="h3">The journal is rebuilt, not edited.</h3>
              <p>
                Deleting a file writes a new record into the NTFS change journal. Wiping traces and
                leaving those records behind is a half-finished job, so every delete ends with a
                fresh journal on each fixed volume.
              </p>
              <ul class="dive__list">
                <li>The status line reports how many volumes were reset.</li>
                <li>The same pass removes the wipe’s own file-deleted records.</li>
              </ul>
            </div>
            <div class="dive__visual">
              <div class="volumes">
                <div class="volumes__head mono">JOURNAL REBUILD · FIXED VOLUMES</div>
                ${["C:","D:","E:"].map((i,m)=>`
                  <div class="volume">
                    <span class="volume__name mono">${i}</span>
                    <span class="volume__track"><i style="--d:${m*120}ms"></i></span>
                    <span class="volume__state mono">REBUILT</span>
                  </div>`).join("")}
                <div class="volumes__foot">
                  <span class="mono">$UsnJrnl</span>
                  <span class="mono">3 / 3 volumes</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="specs">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The whole sheet.</h2>
            <p class="lead">Everything a release note would tell you, in one place.</p>
          </div>
        </div>
        <div class="specs">
          <div class="spec-table">
            ${fe.map((i,m)=>`
              <div class="spec-table__row" data-reveal style="--reveal-delay: ${m*30}ms">
                <span class="spec-table__key">${i.key}</span>
                <span class="spec-table__value">${i.value}</span>
              </div>`).join("")}
          </div>
          <aside class="specs__aside" data-reveal style="--reveal-delay: 100ms">
            <div class="specs__badge">${w("lock",18)}</div>
            <h3>Administrator, by design.</h3>
            <p>
              Reading BAM, Amcache and the SYSTEM hive requires elevation, and so does rewriting
              them. The manifest requests it at launch, so the stores can be read and rewritten.
            </p>
            <div class="specs__note mono">NO SERVICE · NO TRAY ICON · NO ACCOUNT</div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <h2 class="h2 cta__title">That is the whole product.</h2>
          <p class="lead">One window, fourteen stores, a rebuilt journal.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products">All products ${w("arrowRight",16,"icon--arrow")}</a>
            <a class="btn" href="/about">About the product</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
          <div class="cta__spec"><span class="mono">PRIVILEGES</span><p>Administrator</p></div>
        </div>
      </div>
    </section>`;let o,s,t,n=!1,a=()=>{},d=()=>{};return{id:"product",title:"Sagacious",fullTitle:"Sagacious — Trace hygiene for Windows",description:"Sagacious by Cracking: fourteen artifact sources, selective removal and a rebuilt change journal. Explore the interface in 3D.",render:()=>e,mount(){a=F(e),s=j(e.querySelector("#anatomy-window"),{interactive:!0,minWidth:660}),t=Ce(),e.querySelector("[data-download]").append(t.el),Z(async()=>{const{createStage:c}=await import("./stage-DGjCBc-h.js");return{createStage:c}},__vite__mapDeps([0,1])).then(({createStage:c})=>{n||(o=c(e.querySelector("#product-stage"),{variant:"product"}))});const i=Array.from(e.querySelectorAll("[data-region-tab]")),m=e.querySelector("#panel-region"),v=e.querySelector("[data-anatomy-state]"),_=m.querySelector(".anatomy__detail-title"),g=m.querySelector(".anatomy__detail-body"),h=m.querySelector(".anatomy__points");function y(c,{focus:p=!1}={}){const S=M.find(k=>k.id===c)||M[0];i.forEach(k=>{const E=k.dataset.regionTab===c;k.classList.toggle("is-active",E),k.setAttribute("aria-selected",String(E)),k.tabIndex=E?0:-1,E&&p&&k.focus({preventScroll:!0})}),m.setAttribute("aria-labelledby",`tab-${S.id}`),_.textContent=S.title,g.textContent=S.body,h.innerHTML=S.points.map(k=>`<li>${k}</li>`).join(""),v.textContent=`REGION ${S.index} / 05`,s?.app.setHighlight(S.id)}const b=c=>{const p=c.target.closest("[data-region-tab]");p&&y(p.dataset.regionTab)},l=c=>{const p=c.target.closest("[data-region-tab]");if(!p)return;const S=i.indexOf(p);c.key==="ArrowDown"||c.key==="ArrowRight"?(c.preventDefault(),y(i[(S+1)%i.length].dataset.regionTab,{focus:!0})):c.key==="ArrowUp"||c.key==="ArrowLeft"?(c.preventDefault(),y(i[(S-1+i.length)%i.length].dataset.regionTab,{focus:!0})):c.key==="Home"?(c.preventDefault(),y(i[0].dataset.regionTab,{focus:!0})):c.key==="End"&&(c.preventDefault(),y(i[i.length-1].dataset.regionTab,{focus:!0}))};e.querySelector(".anatomy__tabs").addEventListener("click",b),e.querySelector(".anatomy__tabs").addEventListener("keydown",l),d=()=>{e.querySelector(".anatomy__tabs")?.removeEventListener("click",b),e.querySelector(".anatomy__tabs")?.removeEventListener("keydown",l)},y("header")},unmount(){n=!0,a(),d(),o?.destroy(),s?.destroy(),t?.destroy(),o=null,s=null,t=null}}}const Ie=Re(),De=[["Runtime","Win32 · DirectX 11"],["Interface layer","Dear ImGui 1.91.5, vendored"],["Window","560 × 400, fixed, borderless"],["Privileges","Administrator"],["Front ends","Sagacious.exe"],["Network","One optional request, cached for 24 hours"],["Build","MSVC v143 · Windows 10 SDK · x64"]],Pe=[["No backup","Deleted means deleted. There is no vault, no recycle bin and no undo."],["No scheduling","It runs when you open it and stops when you close it. There is no service or tray agent."],["No remote control","No account, no dashboard, no fleet management. The machine is the boundary."],["No silent behaviour","The header states the trace count, the selection and the list matches before anything runs."]];function We(){const e=document.createElement("div");e.className="page page--about",e.innerHTML=`
    <section class="page-head">
      <div class="container">
        <h1 class="display page-head__title" data-reveal style="--reveal-delay: 50ms">
          Software that does<br /><span class="dim">one thing precisely.</span>
        </h1>
        <div class="page-head__row">
          <p class="lead" data-reveal style="--reveal-delay: 100ms">
            Cracking makes small software that does one thing precisely. Sagacious, its first
            release, makes the record Windows keeps legible: it shows what ran, lets you remove
            what you choose, and then reconciles the journal underneath it.
          </p>
          <dl class="page-head__meta" data-reveal style="--reveal-delay: 140ms">
            <div><dt>Platform</dt><dd>Windows</dd></div>
            <div><dt>Interface</dt><dd>GUI</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section" id="principles">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Four rules the product is built around.</h2>
            <p class="lead">They are constraints, not values on a wall. Each one removes a feature that would have made the product easier to sell.</p>
          </div>
        </div>
        <div class="principles">
          ${ye.map((s,t)=>`
            <article class="principle" data-reveal style="--reveal-delay: ${t*60}ms">
              <span class="principle__index mono">${s.index}</span>
              <h3>${s.title}</h3>
              <p>${s.body}</p>
            </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="technical">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Small stack, stated plainly.</h2>
            <p class="lead">No Electron shell, no bundled browser, no runtime installer. The interface is drawn directly with DirectX 11.</p>
          </div>
        </div>
        <div class="spec-table">
          ${De.map(([s,t],n)=>`
            <div class="spec-table__row" data-reveal style="--reveal-delay: ${n*35}ms">
              <span class="spec-table__key">${s}</span>
              <span class="spec-table__value">${t}</span>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="limits">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">What it deliberately does not do.</h2>
            <p class="lead">A tool is defined by its refusals as much as its features. These are the ones that keep Sagacious predictable.</p>
          </div>
        </div>
        <div class="limits">
          ${Pe.map(([s,t],n)=>`
            <div class="limit" data-reveal style="--reveal-delay: ${n*50}ms">
              <span class="limit__mark">${w("close",13)}</span>
              <div>
                <h3>${s}</h3>
                <p>${t}</p>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <h2 class="h2 cta__title">Read the product page.</h2>
          <p class="lead">Interface anatomy, all fourteen artifact sources and the full specification.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">Open Sagacious ${w("arrowRight",16,"icon--arrow")}</a>
            <a class="btn" href="/products">Products</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
          <div class="cta__spec"><span class="mono">DISTRIBUTION</span><p>Single executable</p></div>
        </div>
      </div>
    </section>`;let o=()=>{};return{id:"about",title:"About",description:"The principles, technical notes and deliberate limits behind Cracking and Sagacious, its first release.",render:()=>e,mount(){o=F(e)},unmount(){o()}}}const Fe=We();function Ne(){const e=document.createElement("div");return e.className="page page--notfound",e.innerHTML=`
    <section class="notfound">
      <div class="container">
<p class="notfound__code">404</p>
        <h1 class="h2">This route is not in the record.</h1>
        <p class="lead">The page you asked for does not exist, or it has moved. The product and the catalogue are both one click away.</p>
        <div class="btn-row">
          <a class="btn btn--primary" href="/">Back to home ${w("arrowRight",16,"icon--arrow")}</a>
          <a class="btn" href="/products/sagacious">Sagacious</a>
        </div>
      </div>
    </section>`,{id:"notfound",title:"Page not found",description:"The requested page could not be found.",render:()=>e}}const qe=Ne(),U=re(),je=le();document.getElementById("site-header").replaceWith(U.el);document.getElementById("site-footer").replaceWith(je);const Ue=document.getElementById("main"),Oe=pe({main:Ue,notFound:qe,routes:[{path:"/",page:$e},{path:"/products",page:Te},{path:"/products/sagacious",page:Ie},{path:"/about",page:Fe}],redirects:{"/products/sugacious":"/products/sagacious"},onChange:e=>U.setActive(e)});U.setActive(location.pathname);Oe.start();document.fonts?.ready&&document.fonts.ready.then(()=>document.documentElement.classList.add("fonts-ready"));export{He as a,Se as c,w as i,P as r};
