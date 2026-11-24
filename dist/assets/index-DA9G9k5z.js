const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/stage-ilp7j-ik.js","assets/three-CeX_cU1O.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const ae={mark:`<rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" stroke="currentColor" stroke-width="1.4"/>
    <path d="M7.5 8.75h9M7.5 12h6.25M7.5 15.25h3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,arrowRight:'<path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5"/>',arrowUpRight:'<path d="M7 17 17 7M8.5 7H17v8.5"/>',reset:'<path d="M4.5 9.5A8 8 0 1 1 4 14"/><path d="M4.2 4.6v5h5"/>',copy:'<rect x="9" y="9" width="10.5" height="10.5" rx="2.2"/><path d="M15 6.2A2.2 2.2 0 0 0 12.8 4H6.2A2.2 2.2 0 0 0 4 6.2v6.6A2.2 2.2 0 0 0 6.2 15"/>',check:'<path d="M4.5 12.5 9.5 17.5 19.5 6.5"/>',menu:'<path d="M4 8h16M4 16h16"/>',close:'<path d="M6 6l12 12M18 6 6 18"/>',layers:'<path d="m12 3.5 8.5 4.6L12 12.7 3.5 8.1 12 3.5Z"/><path d="m4.5 12.4 7.5 4 7.5-4M4.5 16.4l7.5 4 7.5-4"/>',sweep:'<circle cx="12" cy="12" r="2"/><path d="M12 4.5a7.5 7.5 0 0 1 7.5 7.5"/><path d="M12 1.5a10.5 10.5 0 0 1 10.5 10.5"/><path d="M4.5 12A7.5 7.5 0 0 1 12 4.5"/>',terminal:'<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="m7 9.5 3 2.5-3 2.5M12.5 15h4.5"/>',shield:'<path d="M12 3.2 19 6v6.2c0 4-3 6.6-7 8.6-4-2-7-4.6-7-8.6V6l7-2.8Z"/><path d="m9.2 12.1 2 2 3.8-4"/>',command:'<path d="M9 7.5a2.5 2.5 0 1 0-2.5 2.5H9V7.5ZM9 16.5A2.5 2.5 0 1 1 6.5 14H9v2.5ZM15 7.5A2.5 2.5 0 1 1 17.5 10H15V7.5ZM15 16.5a2.5 2.5 0 1 0 2.5-2.5H15v2.5Z"/><rect x="9" y="10" width="6" height="4" rx="0.8"/>',file:'<path d="M13.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5.5-5.5Z"/><path d="M13.5 3.5V9H19"/>',clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 1.8"/>',lock:'<rect x="4.5" y="10" width="15" height="10" rx="2.4"/><path d="M8 10V7.8a4 4 0 0 1 8 0V10"/>',code:'<path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.5 5l-3 14"/>',grid:'<rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/>'};function b(e,o=20,n=""){const s=ae[e]||"";return`<svg class="icon ${n}" width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${s}</svg>`}function Y(e=30,o=""){return`<img class="logo ${o}" src="/cracking-mark.png" width="${e}" height="${e}" alt="" decoding="async" />`}function X(e="lg",o=""){return`<span class="product-icon product-icon--${e} ${o}" aria-hidden="true"><img src="/sagacious-icon.png" alt="" decoding="async" /></span>`}function G(e,o={},...n){const s=document.createElement(e);for(const[t,a]of Object.entries(o||{}))a==null||a===!1||(t==="class"?s.className=a:t==="html"?s.innerHTML=a:t==="text"?s.textContent=a:t==="dataset"?Object.assign(s.dataset,a):t==="style"&&typeof a=="object"?Object.assign(s.style,a):t.startsWith("on")&&typeof a=="function"?s.addEventListener(t.slice(2).toLowerCase(),a):a===!0?s.setAttribute(t,""):s.setAttribute(t,String(a)));return te(s,n),s}function te(e,o){for(const n of o.flat(1/0))n==null||n===!1||e.append(n instanceof Node?n:document.createTextNode(String(n)))}function se(e,o,n,s){return e.addEventListener(o,n,s),()=>e.removeEventListener(o,n,s)}function ie(e){let o=!1,n;return(...s)=>{n=s,!o&&(o=!0,requestAnimationFrame(()=>{o=!1,e(...n)}))}}function qe(e,o,n){return Math.min(n,Math.max(o,e))}const P=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,W=[{href:"/",label:"Home",match:e=>e==="/"},{href:"/products",label:"Products",match:e=>e.startsWith("/products")},{href:"/about",label:"About",match:e=>e.startsWith("/about")}];function ne(){const e=G("header",{class:"site-header",id:"site-header"});e.innerHTML=`
    <div class="nav container">
      <a class="brand" href="/" aria-label="Cracking — home">
        <span class="brand__mark">${Y(30)}</span>
        <span class="brand__word">Cracking</span>
      </a>
      <nav class="nav__links" aria-label="Primary">
        <span class="nav__indicator" aria-hidden="true"></span>
        ${W.map(c=>`<a class="nav__link" href="${c.href}">${c.label}</a>`).join("")}
      </nav>
      <div class="nav__actions">
        <span class="nav__version">v1.0.0</span>
        <a class="btn btn--primary btn--sm nav__cta" href="/products/sagacious">
          Explore product
          ${b("arrowRight",15,"icon--arrow")}
        </a>
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
          <span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <div class="mobile-menu__inner">
        <nav aria-label="Mobile">
          ${W.map((c,y)=>`<a class="mobile-menu__link" href="${c.href}"><span class="mobile-menu__index">0${y+1}</span>${c.label}</a>`).join("")}
        </nav>
        <div class="mobile-menu__foot">
          <a class="btn btn--primary" href="/products/sagacious">Explore Sagacious ${b("arrowRight",16)}</a>
          <p class="mono">Version 1.0.0 · Windows 10 / 11 · x64</p>
        </div>
      </div>
    </div>`;const o=e.querySelector(".nav__toggle"),n=e.querySelector(".mobile-menu");document.body.append(n);const s=e.querySelector(".nav__indicator"),t=Array.from(e.querySelectorAll(".nav__link"));let a=!1,i=null;function p(c){if(!c||window.matchMedia("(max-width: 900px)").matches){s.style.opacity="0";return}s.style.opacity="1",s.style.width=`${c.offsetWidth}px`,s.style.transform=`translateX(${c.offsetLeft}px)`}function E(c){let y=null;t.forEach((S,d)=>{const v=W[d].match(c);S.classList.toggle("is-active",v),v?(S.setAttribute("aria-current","page"),y=S):S.removeAttribute("aria-current")}),n.querySelectorAll(".mobile-menu__link").forEach((S,d)=>{W[d]?.match(c)?S.setAttribute("aria-current","page"):S.removeAttribute("aria-current")}),requestAnimationFrame(()=>p(y)),w()}function f(){a=!0,i=document.activeElement,n.hidden=!1,n.classList.add("is-open"),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-label","Close menu"),e.classList.add("is-menu-open"),document.documentElement.classList.add("is-locked"),n.querySelector("a")?.focus({preventScroll:!0})}function w({restoreFocus:c=!1}={}){a&&(a=!1,n.classList.remove("is-open"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label","Open menu"),e.classList.remove("is-menu-open"),document.documentElement.classList.remove("is-locked"),window.setTimeout(()=>{a||(n.hidden=!0)},320),c&&(i||o).focus({preventScroll:!0}))}o.addEventListener("click",()=>a?w({restoreFocus:!0}):f()),n.addEventListener("keydown",c=>{if(c.key==="Escape"){w({restoreFocus:!0});return}if(c.key!=="Tab")return;const y=Array.from(n.querySelectorAll("a, button")).filter(v=>v.offsetParent!==null);if(!y.length)return;const S=y[0],d=y[y.length-1];c.shiftKey&&document.activeElement===S?(c.preventDefault(),d.focus()):!c.shiftKey&&document.activeElement===d&&(c.preventDefault(),S.focus())});const _=()=>e.classList.toggle("is-scrolled",window.scrollY>10);return _(),window.addEventListener("scroll",_,{passive:!0}),window.addEventListener("resize",()=>p(e.querySelector(".nav__link.is-active")),{passive:!0}),se(window,"keydown",c=>{c.key==="Escape"&&a&&w({restoreFocus:!0})}),{el:e,setActive:E}}function oe(){const e=G("footer",{class:"site-footer",id:"site-footer"});return e.innerHTML=`
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a class="brand" href="/" aria-label="Cracking — home">
            <span class="brand__mark">${Y(30)}</span>
            <span class="brand__word">Cracking</span>
          </a>
          <p class="footer__tagline">Small, precise Windows software.<br />One executable, no account, nothing left behind.</p>
          <span class="footer__status"><i></i>Sagacious 1.0.0 · released</span>
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
            <a href="/products/sagacious#cli">Command line</a>
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
          <span class="mono">BUILD 1.0.0</span>
          <button class="footer__top-link" type="button" data-top>Back to top ${b("arrowUpRight",13)}</button>
        </div>
      </div>
    </div>`,e.querySelector("[data-top]").addEventListener("click",()=>{window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}),e}const B="Cracking",re=()=>document.getElementById("route-progress");function le(e,o){const n=e.split("/").filter(Boolean),s=o.split("/").filter(Boolean);if(n.length!==s.length)return null;const t={};for(let a=0;a<n.length;a+=1){const i=n[a];if(i.startsWith(":"))t[i.slice(1)]=decodeURIComponent(s[a]);else if(i!==s[a])return null}return t}function ce({routes:e,notFound:o,main:n,onChange:s,redirects:t={}}){let a=null,i=0;function p(d){const v=d.replace(/\/+$/,"")||"/";return t[v]||null}function E(d){for(const v of e){const h=le(v.path,d);if(h)return{route:v,params:h}}return{route:{path:"*",page:o},params:{}}}function f(d){const v=d.fullTitle||(d.title?`${d.title} — ${B}`:B);document.title=v;const h=document.querySelector('meta[name="description"]');h&&d.description&&h.setAttribute("content",d.description)}function w(d,v="smooth"){if(!d)return!1;const h=document.querySelector(d);if(!h)return!1;const m=h.getBoundingClientRect().top+window.scrollY-84;return window.scrollTo({top:m,behavior:P()?"auto":v}),!0}async function _({pathname:d,hash:v,initial:h=!1}){const m=++i,{route:$,params:k}=E(d),g=$.page,l=re();if(!h&&l&&(l.classList.add("is-active"),window.setTimeout(()=>l.classList.remove("is-active"),620)),a?.page.unmount)try{a.page.unmount()}catch(I){console.error("Page cleanup failed",I)}const R=g.render({params:k,pathname:d,hash:v,initial:h}),A=()=>{v||window.scrollTo({top:0,behavior:"auto"}),n.replaceChildren(R),n.dataset.page=g.id||"page",g.mount&&g.mount(n,{params:k,pathname:d,hash:v}),f(g),s?.(d)};!h&&document.startViewTransition&&!P()?await document.startViewTransition(A).finished.catch(()=>{}):A(),m===i&&(v&&requestAnimationFrame(()=>w(v,h?"auto":"smooth")),a={page:g,pathname:d},h||n.focus({preventScroll:!0}))}function c(d,{replace:v=!1}={}){const h=new URL(d,location.href);if(h.origin!==location.origin){location.href=h.href;return}const m=p(h.pathname);if(m){h.pathname=m,history.replaceState({},"",h.href),_({pathname:h.pathname,hash:h.hash});return}v?history.replaceState({},"",h.href):history.pushState({},"",h.href),_({pathname:h.pathname,hash:h.hash})}function y(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey)return;const v=d.target.closest("a[href]");if(!v||v.target==="_blank"||v.hasAttribute("download"))return;const h=new URL(v.href,location.href);if(h.origin===location.origin){if(h.pathname===location.pathname&&h.hash){d.preventDefault(),history.pushState({},"",h.href),w(h.hash);return}if(h.pathname===location.pathname&&!h.hash){d.preventDefault(),window.scrollTo({top:0,behavior:P()?"auto":"smooth"});return}d.preventDefault(),c(h.href)}}function S(){document.addEventListener("click",y),window.addEventListener("popstate",()=>{_({pathname:location.pathname,hash:location.hash})});const d=p(location.pathname);d&&history.replaceState({},"",`${d}${location.hash}`),_({pathname:d||location.pathname,hash:location.hash,initial:!0})}return{start:S,navigate:c,scrollToHash:w}}const de="modulepreload",pe=function(e){return"/"+e},H={},K=function(o,n,s){let t=Promise.resolve();if(n&&n.length>0){let E=function(f){return Promise.all(f.map(w=>Promise.resolve(w).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),p=i?.nonce||i?.getAttribute("nonce");t=E(n.map(f=>{if(f=pe(f),f in H)return;H[f]=!0;const w=f.endsWith(".css"),_=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${_}`))return;const c=document.createElement("link");if(c.rel=w?"stylesheet":de,w||(c.as="script"),c.crossOrigin="",c.href=f,p&&c.setAttribute("nonce",p),document.head.appendChild(c),w)return new Promise((y,S)=>{c.addEventListener("load",y),c.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(i){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=i,window.dispatchEvent(p),!p.defaultPrevented)throw i}return t.then(i=>{for(const p of i||[])p.status==="rejected"&&a(p.reason);return o().catch(a)})},C=[{tag:"BAM",name:"Background Activity Moderator",where:"Services\\bam\\State\\UserSettings",note:"Software execution log"},{tag:"SHIM",name:"AppCompatCache",where:"SYSTEM hive",note:"Shim cache entries"},{tag:"AMC",name:"Amcache",where:"Amcache.hve",note:"Installed and executed programs"},{tag:"PF",name:"Prefetch",where:"Windows\\Prefetch\\*.pf",note:"Launch counts, load times"},{tag:"UA",name:"UserAssist",where:"Registry · ROT13 value names",note:"GUI run counts"},{tag:"MUI",name:"MUICache",where:"Registry",note:"Application display names"},{tag:"REC / JMP",name:"RecentDocs, jump lists",where:"Recent\\*.lnk",note:"Per-app file history"},{tag:"PS",name:"PowerShell history",where:"Console host",note:"Command history"},{tag:"DEF",name:"Defender history",where:"Detection log",note:"Detection records"},{tag:"EVT",name:"Event logs",where:"Process and driver starts",note:"Start records"},{tag:"TMP",name:"Temp files",where:"File system",note:"Leftover working files"},{tag:"DRV",name:"Driver services",where:"Registry",note:"Install traces"},{tag:"USN",name:"Change journal",where:"NTFS $UsnJrnl",note:"File system changes"},{tag:"LIVE",name:"Live state",where:"Running processes",note:"Processes and loaded drivers"}],he=[{index:"01",title:"Enumerate",lead:"Fourteen stores, one list.",body:"Sagacious reads the registry, the file system and the NTFS change journal, then normalises what it finds into rows you can read: artifact tag, file name, full path. No raw hives, no hex.",detail:"BAM · SHIM · AMC · PF · UA · MUI · REC · PS · DEF · EVT · TMP · DRV · USN · LIVE"},{index:"02",title:"Select",lead:"Pre-selected, not blanket.",body:"On load, one optional lookup returns a public list of tracked executables and only matching rows are ticked. Everything else loads unselected, so a stray notepad.exe is never swept by accident.",detail:"Filter by path, file name or artifact tag. SYS narrows the list to software outside \\Windows\\."},{index:"03",title:"Remove",lead:"The trace, and the files behind it.",body:"Deleting a row rewrites or prunes the store in place. Arm DELETE FILES and the software itself goes too: the folder chain, its data folders, the installer, the archive, the shortcut.",detail:"Name matching is token-based — com.solara.v3 goes, Xenoblade.png stays."},{index:"04",title:"Reconcile",lead:"Rebuild the journal.",body:"Every delete ends with a fresh USN journal on each fixed volume, so the file-deleted records produced by the wipe itself are gone as well. The status line reports how many volumes were reset.",detail:"Wipe, journal reset and self-trace cleanup run on a worker thread — the window never freezes."}],ue=[{icon:"shield",title:"Stealth, on by default",body:"Sagacious is a trace of itself. Its own BAM, Prefetch, MUICache, UserAssist, Recent, shim cache and Amcache entries are dropped at startup, swept every two seconds while it runs, and removed again on exit.",meta:"Full pass on close"},{icon:"sweep",title:"SMART background sweep",body:"Names involved in a delete stay tracked. A background pass walks every fixed drive by exact name, resuming where it stopped, and removes anything that carries them — including folders an updater rewrites later.",meta:"Idle backoff 1.5 s → 24 s"},{icon:"terminal",title:"A real command line",body:"The same engine without the window: list, wipe and kill, with switches for software-only scans, journal resets, stealth cleanup and file removal. Exit codes and counts are printed, not implied.",meta:"sagacious-cli --version"}],ve=[{command:"sagacious-cli list",args:"[query]",note:"print matches, change nothing"},{command:"sagacious-cli wipe",args:"[query]",note:"delete matches"},{command:"sagacious-cli kill",args:"[query]",note:"delete matches, reset journals, clean own traces"}],me=[{flag:"--sys",note:"software only (hide \\Windows\\ paths)"},{flag:"--no-usn",note:"do not rebuild the change journal"},{flag:"--stealth",note:"also scrub this exe’s own traces"},{flag:"--cheats",note:"only rows listed on whatexpsare.online"},{flag:"--files",note:"also delete the files themselves"}],fe=[{key:"Version",value:"1.0.0"},{key:"Platform",value:"Windows 10 / 11 · x64"},{key:"Runtime",value:"Win32 · DirectX 11"},{key:"Interface",value:"GUI and command line"},{key:"Window",value:"560 × 400, fixed"},{key:"Privileges",value:"Administrator"},{key:"Distribution",value:"Single executable"},{key:"Network",value:"One optional lookup, cached 24 h"}],_e=[{index:"01",title:"Say what it does",body:"The interface names the stores it reads and the volume count it resets. No scores, no shields, no vague promises about being “clean”."},{index:"02",title:"Local by default",body:"Everything runs on the machine. The single network request is a public list lookup that can be skipped with an environment variable and is cached for a day."},{index:"03",title:"Deletion is final",body:"Nothing is backed up, nothing goes to a recycle bin, and the app remembers nothing between runs. The confirmation is the button you pressed."},{index:"04",title:"A small surface",body:"One fixed 560 × 400 window, one executable, one worker thread. There is no tray icon, no service, no updater and no account."}],L=[{tag:"bam",path:"C:\\Program Files (x86)\\Faronics\\Deep Freeze\\Install C-0\\_$D.FrzState2k.exe"},{tag:"bam",path:"Microsoft Windows\\CloudExperienceHost_cw5n1h2txyewy"},{tag:"bam",path:"Microsoft Windows\\StartMenuExperienceHost_cw5n1h2txyewy"},{tag:"bam",path:"Microsoft Windows\\Client CBS_cw5n1h2txyewy"},{tag:"shim",path:"Microsoft Windows\\ShellExperienceHost_cw5n1h2txyewy"},{tag:"pf",path:"windows.immersivecontrolpanel_8wekyb3d8bbwe"},{tag:"ua",path:"Microsoft ScreenSketch_8wekyb3d8bbwe"},{tag:"pf",path:"C:\\Users\\Public\\Downloads\\obs-studio-31.0.1-installer.exe",selected:!0},{tag:"bam",path:"C:\\Users\\Public\\AppData\\Local\\Programs\\Signal\\Signal.exe",selected:!0}];function N(e=document){const o=Array.from(e.querySelectorAll("[data-reveal]"));if(!o.length)return()=>{};if(P())return o.forEach(t=>t.classList.add("is-in")),()=>{};const n=window.innerHeight||800;for(const t of o)t.getBoundingClientRect().top<n*.96&&t.classList.add("is-in");const s=new IntersectionObserver(t=>{for(const a of t)a.isIntersecting&&(a.target.classList.add("is-in"),s.unobserve(a.target))},{rootMargin:"0px 0px -6% 0px",threshold:.06});return o.forEach(t=>{t.classList.contains("is-in")||s.observe(t)}),()=>s.disconnect()}function ye(e=document){const o=Array.from(e.querySelectorAll("[data-parallax]"));if(!o.length||P()||window.matchMedia("(max-width: 860px)").matches)return()=>{};let n=0;const s=ie(()=>{const a=window.innerHeight;for(const i of o){const p=i.getBoundingClientRect();if(p.bottom<-200||p.top>a+200)continue;const E=Number(i.dataset.parallax)||.05,f=(p.top+p.height/2-a/2)*E;i.style.setProperty("--parallax-y",`${f.toFixed(2)}px`)}}),t=()=>{cancelAnimationFrame(n),n=requestAnimationFrame(s)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),s(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t),cancelAnimationFrame(n)}}async function ge(e){try{return await navigator.clipboard.writeText(e),!0}catch{const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.cssText="position:fixed;top:-1000px;opacity:0",document.body.append(o),o.select();const n=document.execCommand("copy");return o.remove(),n}}const be=new Intl.NumberFormat("en-US"),we=(e,o)=>`
  <label class="app__row" data-index="${o}">
    <input class="app__check" type="checkbox" ${e.selected?"checked":""} />
    <span class="app__tag">${e.tag}</span>
    <span class="app__path">${e.path}</span>
  </label>`,Se=`
  <div class="app__chrome">
    <span class="app__mark">${b("mark",18)}</span>
    <span class="app__name">Sagacious</span>
    <span class="app__build">v1.0.0</span>
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
      <button class="app__icon-btn" type="button" aria-label="Reload the list" title="Reload the list">${b("reset",18)}</button>
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
  </div>`;function xe({density:e="full",interactive:o=!0,presentation:n=!1}={}){const s=document.createElement("div");s.className="app",s.dataset.density=e,s.setAttribute("role","group"),s.setAttribute("aria-label","Sagacious application interface"),s.innerHTML=Se;const t=r=>s.querySelector(r),a=Array.from(s.querySelectorAll(".app__row")),i=a.map(r=>r.querySelector(".app__check")),p=t("[data-meta]"),E=t("[data-status]"),f=t(".app__list"),w=t(".app__empty"),_=t(".app__busy"),c=_.querySelector("b"),y=_.querySelector(".app__busy-text span"),S=t(".app__sys"),d=t(".app__filter input"),v=t('[data-action="files"]'),h=t('[data-action="all"]'),m=t('[data-action="selected"]'),$=t(".app__icon-btn"),k=t(".app__chip"),g=new Set,l={traces:2114,selected:new Set(L.map((r,u)=>r.selected?u:-1).filter(r=>r>=0)),matches:2,sys:!0,files:!1,filter:"",busy:!1,removed:new Set},R=(r,u)=>{const x=window.setTimeout(()=>{g.delete(x),r()},u);return g.add(x),x};function A(){const r=l.filter.trim().toLowerCase();return a.map((u,x)=>x).filter(u=>l.removed.has(u)||!l.sys&&/microsoft windows\\|\\windows\\/i.test(L[u].path)?!1:r?`${L[u].tag} ${L[u].path}`.toLowerCase().includes(r):!0)}function I(){const r=new Set(A());a.forEach((u,x)=>{u.hidden=!r.has(x)}),w.hidden=r.size>0||l.busy}function D(){p.innerHTML=`<b>${be.format(l.traces)}</b> traces <span aria-hidden="true">·</span> <b>${l.selected.size}</b> selected <span aria-hidden="true">·</span> 30 on whatexpsare`}function F(r){E.textContent=r}function z(){if(l.files)return"files armed · folders, archives and shortcuts are included";if(!l.sys)return"software only · \\Windows\\ rows hidden";if(l.filter.trim()){const r=A().length;return`filter “${l.filter.trim()}” · ${r} match${r===1?"":"es"}`}return`whatexpsare: 30 known exe name(s), ${l.matches} match here`}function T(){I(),D(),S.classList.toggle("is-on",l.sys),S.setAttribute("aria-pressed",String(l.sys)),v.classList.toggle("is-armed",l.files);const r=A().length;k.classList.toggle("is-on",r>0&&r===l.selected.size),F(z())}function Z(r){i[r].checked?l.selected.add(r):l.selected.delete(r),T()}i.forEach((r,u)=>{r.addEventListener("change",()=>Z(u))}),d.addEventListener("input",()=>{l.filter=d.value,T()}),S.addEventListener("click",()=>{l.sys=!l.sys,T()}),v.addEventListener("click",()=>{l.files=!l.files,T()}),k.addEventListener("click",()=>{const r=A(),u=r.every(x=>l.selected.has(x));r.forEach(x=>{u?l.selected.delete(x):l.selected.add(x),i[x].checked=!u}),T()});function O(r){if(l.busy)return;if(!r.length){F("nothing to do: tick a row or type a name");return}l.busy=!0,_.hidden=!1,f.classList.add("is-busy");const u=[["deleting files",`${r.length} target(s) · worker thread`],["wiping traces","rewriting stores in place"],["resetting journal","rebuilding on fixed volumes"]];let x=0;c.textContent=u[0][0],y.textContent=u[0][1];const U=()=>{if(x+=1,x<u.length){c.textContent=u[x][0],y.textContent=u[x][1],R(U,420);return}J(r)};R(U,460)}function J(r){r.forEach(u=>{l.removed.add(u),l.selected.delete(u),a[u].classList.add("is-removed")}),l.traces=Math.max(0,l.traces-r.length),l.matches=Math.max(0,l.matches-r.length),R(()=>{l.busy=!1,_.hidden=!0,f.classList.remove("is-busy"),I(),D(),F(`${r.length} trace${r.length===1?"":"s"} removed · journal rebuilt on 3 volume(s)`),k.classList.remove("is-on")},220)}m.addEventListener("click",()=>{O(Array.from(l.selected).filter(r=>!l.removed.has(r)))}),h.addEventListener("click",()=>{const r=A();r.forEach(u=>{l.selected.add(u),i[u].checked=!0}),D(),O(r)}),$.addEventListener("click",()=>{g.forEach(r=>window.clearTimeout(r)),g.clear(),l.selected=new Set(L.map((r,u)=>r.selected?u:-1).filter(r=>r>=0)),l.removed.clear(),l.traces=2114,l.matches=2,l.busy=!1,l.filter="",d.value="",i.forEach((r,u)=>{r.checked=!!L[u].selected}),a.forEach(r=>r.classList.remove("is-removed")),_.hidden=!0,f.classList.remove("is-busy"),T()}),o||(s.setAttribute("inert",""),s.setAttribute("aria-hidden","true"),s.classList.add("is-static"),s.querySelectorAll("input, button").forEach(r=>{r.tabIndex=-1})),n&&(s.setAttribute("aria-hidden","true"),s.querySelectorAll("input, button").forEach(r=>{r.tabIndex=-1}));function Q(r){r?s.dataset.highlight=r:delete s.dataset.highlight}function ee(){g.forEach(r=>window.clearTimeout(r)),g.clear()}return T(),{el:s,setHighlight:Q,destroy:ee,reset:()=>$.click()}}function j(e,{minWidth:o=0,...n}={}){const s=xe(n),t=document.createElement("div");t.className="window-frame",o&&(t.style.width=`max(100%, ${o}px)`);const a=document.createElement("div");a.className="window-frame__scaler",a.style.width="1120px",a.style.height="800px",a.append(s.el),t.append(a),e.append(t);let i=0;const p=()=>{const f=getComputedStyle(t),w=parseFloat(f.paddingLeft)+parseFloat(f.paddingRight),_=parseFloat(f.paddingTop)+parseFloat(f.paddingBottom),c=t.clientWidth-w;if(!c||Math.abs(c-i)<.5)return;i=c;const y=Math.min(1.2,c/1120);a.style.transform=`scale(${y})`,t.style.height=`${Math.round(800*y+_)}px`,e.style.setProperty("--window-scale",y.toFixed(4)),e.classList.toggle("is-scrollable",o>0&&t.clientWidth>e.clientWidth+1)},E=new ResizeObserver(p);return E.observe(t),p(),{app:s,destroy(){E.disconnect(),s.destroy(),t.remove()}}}const ke=[{index:"01",title:"Header",body:"Trace count, selection count, public-list matches, administrator state and the build number."},{index:"02",title:"Filter and SYS",body:"Match a path, a file name or an artifact tag. SYS includes system traces; switch it off for software only."},{index:"03",title:"Trace rows",body:"Every row names its store, its file and its path. Pre-selected rows are the ones the public list tracks."},{index:"04",title:"Actions",body:"Wipe the selection, arm file removal, or reload the list. The status line reports what happened."}];function Ee(){const e=document.createElement("div");e.className="page page--home",e.innerHTML=`
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__copy">
          <p class="eyebrow" data-reveal>Sagacious 1.0 · Windows x64</p>
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
              Explore Sagacious ${b("arrowRight",16,"icon--arrow")}
            </a>
            <a class="btn" href="#capabilities">See how it works</a>
          </div>
          <dl class="hero__meta" data-reveal style="--reveal-delay: 270ms">
            <div><dt>Artifact sources</dt><dd>${C.length}</dd></div>
            <div><dt>Change journal</dt><dd>USN</dd></div>
            <div><dt>Current release</dt><dd>1.0.0</dd></div>
          </dl>
        </div>
        <div class="hero__stage" data-parallax="0.018">
          <div class="stage-meta">
            <span class="stage-meta__label"><i></i>Interactive preview</span>
            <span class="stage-meta__hint">${b("reset",12)}<span>Drag to rotate</span></span>
          </div>
          <div class="hero__stage-inner" id="hero-stage"></div>
        </div>
      </div>
      <div class="container hero__foot">
        <span class="mono">01 — OVERVIEW</span>
        <a class="hero__jump" href="#interface">Interface in detail ${b("arrowRight",13)}</a>
        <span class="hero__scroll">Scroll to inspect <i></i></span>
      </div>
    </section>

    <section class="section section--record" id="record">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label">
            <p class="eyebrow">01 — The record</p>
          </div>
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
              ${b("arrowRight",15)}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="capabilities">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label">
            <p class="eyebrow">02 — Capabilities</p>
          </div>
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
          ${he.map((a,i)=>`
            <article class="capability" data-reveal style="--reveal-delay: ${i*60}ms">
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
            <div class="interface__caption">
              <span class="mono">SAGACIOUS 1.0 · 560 × 400</span>
              <span class="mono interface__swipe">SWIPE TO INSPECT</span>
              <span class="mono">RENDERED AT 2×</span>
            </div>
          </div>
          <div class="interface__side">
            <p class="eyebrow" data-reveal>03 — Interface</p>
            <h2 class="h2" data-reveal style="--reveal-delay: 50ms">Everything on one screen.</h2>
            <p class="lead" data-reveal style="--reveal-delay: 90ms">
              A fixed 560 × 400 window. The list is the product: every row names its store, its
              file and its path. Nothing important is behind a menu.
            </p>
            <ul class="annotations">
              ${ke.map((a,i)=>`
                <li class="annotation" data-reveal style="--reveal-delay: ${120+i*55}ms">
                  <span class="annotation__index">${a.index}</span>
                  <div>
                    <p class="annotation__title">${a.title}</p>
                    <p class="annotation__body">${a.body}</p>
                  </div>
                </li>`).join("")}
            </ul>
            <a class="link-arrow" href="/products/sagacious#interface" data-reveal>
              Full interface anatomy ${b("arrowUpRight",15)}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="details">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label">
            <p class="eyebrow">04 — Detail</p>
          </div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The parts that matter after the first delete.</h2>
          </div>
        </div>
        <div class="highlights">
          ${ue.map((a,i)=>`
            <article class="highlight" data-reveal style="--reveal-delay: ${i*70}ms">
              <span class="highlight__icon">${b(a.icon,20)}</span>
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
          <p class="eyebrow">05 — Product</p>
          <h2 class="h2 cta__title">Look at the interface,<br />not a screenshot.</h2>
          <p class="lead">
            Rotate the window, tick a row, run a wipe. The preview on the product page is the
            product — same layout, same states, same status line.
          </p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">
              Open the product page ${b("arrowRight",16,"icon--arrow")}
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
            <span class="mono">RELEASE</span>
            <p>1.0.0 · single executable</p>
          </div>
          <div class="cta__spec">
            <span class="mono">ACCESS</span>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </section>`;let o,n,s=!1,t=()=>{};return{id:"home",title:"Trace hygiene for Windows",fullTitle:"Cracking — Sagacious, trace hygiene for Windows",description:"Cracking builds Sagacious: it reads fourteen Windows execution-trace stores, removes the rows you select, and rebuilds the change journal so the record stays consistent.",render:()=>e,mount(){const a=N(e),i=ye(e);t=()=>{a(),i()},n=j(e.querySelector("#home-interface"),{interactive:!1,minWidth:640}),K(async()=>{const{createStage:p}=await import("./stage-ilp7j-ik.js");return{createStage:p}},__vite__mapDeps([0,1])).then(({createStage:p})=>{s||(o=p(e.querySelector("#hero-stage"),{variant:"hero"}))})},unmount(){s=!0,t(),o?.destroy(),n?.destroy(),o=null,n=null}}}const $e=Ee(),V=[{slug:"sagacious",index:"01",name:"Sagacious",category:"Windows utility",version:"1.0.0",status:"Released",platform:"Windows 10 / 11 · x64",tagline:"Trace hygiene for Windows.",summary:"Finds the execution records that a Windows machine keeps, lets you choose which ones go, and rebuilds the change journal so the record stays consistent.",href:"/products/sagacious",meta:["Windows x64","v1.0.0","Local"]}];function Ae(){const e=document.createElement("div");e.className="page page--products",e.innerHTML=`
    <section class="page-head">
      <div class="container">
        <p class="eyebrow" data-reveal>Products</p>
        <h1 class="display page-head__title" data-reveal style="--reveal-delay: 50ms">
          One product.<br /><span class="dim">Built to be used.</span>
        </h1>
        <div class="page-head__row">
          <p class="lead" data-reveal style="--reveal-delay: 100ms">
            Sagacious is Cracking’s first release. The catalogue stays small on purpose: a product
            is listed here when it is finished, documented and supported — not when it is announced.
          </p>
          <dl class="page-head__meta" data-reveal style="--reveal-delay: 140ms">
            <div><dt>Products</dt><dd>${String(V.length).padStart(2,"0")}</dd></div>
            <div><dt>Platform</dt><dd>Windows</dd></div>
            <div><dt>Latest</dt><dd>v1.0.0</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="product-list">
          ${V.map((s,t)=>`
            <a class="product-entry" href="${s.href}" data-reveal style="--reveal-delay: ${t*60}ms">
              <div class="product-entry__preview">
                <div class="product-entry__window" data-preview></div>
                <span class="product-entry__index mono">${s.index}</span>
              </div>
              <div class="product-entry__body">
                <div class="product-entry__status">
                  <span class="pill"><i></i>${s.status}</span>
                  <span class="mono">${s.category}</span>
                </div>
                <div class="product-entry__head">
                  ${X("sm")}
                  <h2 class="product-entry__name">${s.name}</h2>
                </div>
                <p class="product-entry__tagline">${s.tagline}</p>
                <p class="product-entry__summary">${s.summary}</p>
                <ul class="product-entry__meta">
                  ${s.meta.map(a=>`<li>${a}</li>`).join("")}
                </ul>
                <span class="product-entry__cta">
                  View product ${b("arrowUpRight",16)}
                </span>
              </div>
            </a>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Platform</p></div>
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
            <span class="platform-notes__index mono">01</span>
            <h3>Local by default</h3>
            <p>No account, no telemetry pipeline, no cloud dependency. Sagacious makes one optional public-list request that can be skipped entirely.</p>
          </article>
          <article data-reveal style="--reveal-delay: 70ms">
            <span class="platform-notes__index mono">02</span>
            <h3>One executable</h3>
            <p>No installer framework, no runtime to bootstrap, no background service. The command-line front end is a second binary in the same release.</p>
          </article>
          <article data-reveal style="--reveal-delay: 140ms">
            <span class="platform-notes__index mono">03</span>
            <h3>Documented in the UI</h3>
            <p>Counts, volume resets and skipped system files are reported where the action happens — not in a changelog nobody reads.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <p class="eyebrow">Next</p>
          <h2 class="h2 cta__title">See the whole product.</h2>
          <p class="lead">The product page covers the interface, every artifact source, the command line and the specification sheet.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">Open Sagacious ${b("arrowRight",16,"icon--arrow")}</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">PRODUCTS</span><p>01 — Sagacious</p></div>
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
          <div class="cta__spec"><span class="mono">RELEASE</span><p>1.0.0</p></div>
        </div>
      </div>
    </section>`;let o=()=>{},n;return{id:"products",title:"Products",description:"The Cracking catalogue: Sagacious, one Windows utility, documented and supported.",render:()=>e,mount(){o=N(e),n=j(e.querySelector("[data-preview]"),{interactive:!1})},unmount(){o(),n?.destroy(),n=null}}}const Te=Ae(),M=[{id:"header",index:"01",title:"Header",body:"The state of the list before anything runs: how many traces were found, how many are ticked, and how many match the public list.",points:["Trace, selection and match counts","ADMIN badge reflects elevation","Build number sits beside the wordmark"]},{id:"tools",index:"02",title:"Filter and SYS",body:"One field matches a path, a file name or an artifact tag. SYS is a scope switch, not a filter menu: lit means system traces are included.",points:["Matches path, name and tag","SYS off hides \\Windows\\ rows","Filter state is reported in the footer"]},{id:"list",index:"03",title:"Trace rows",body:"Every row carries its store, its file and its full path. Pre-selected rows are the ones the public list tracks; everything else loads unticked.",points:["Stores are labelled, not abbreviated away","Click a row to include or exclude it","Running deletions dim the list, never freeze it"]},{id:"actions",index:"04",title:"Actions",body:"Wipe the selection, arm file removal, or reload the list. The armed state is visible on the button, not buried in a confirmation dialog.",points:["DELETE FILES arms recursive removal","DELETE ALL selects and wipes in one pass","Reload restores the list without restarting"]},{id:"foot",index:"05",title:"Status line",body:"The only place results are reported. Volume resets, skipped system files, background sweep finds and list lookups all land here.",points:["Volume count after a journal rebuild","Files pending at next boot","Public-list state and cache age"]}];function Le(){const e=document.createElement("div");e.className="page page--product",e.innerHTML=`
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__top">
          <div class="product-hero__id">
            ${X("lg")}
            <div>
              <p class="eyebrow" data-reveal>Cracking · Product 01 — Windows utility</p>
              <h1 class="display product-hero__name" data-reveal style="--reveal-delay: 50ms">Sagacious</h1>
            </div>
          </div>
          <div class="product-hero__tags" data-reveal style="--reveal-delay: 90ms">
            <span class="pill"><i></i>Released</span>
            <span class="chip mono">v1.0.0</span>
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
            <div><dt>Interface</dt><dd>GUI + CLI</dd></div>
          </dl>
        </div>
      </div>
      <div class="container">
        <div class="stage-meta stage-meta--product">
          <span class="stage-meta__label"><i></i>Interactive preview</span>
          <span class="stage-meta__hint">${b("reset",12)}<span>Drag to rotate</span></span>
        </div>
        <div class="product-stage" id="product-stage" aria-label="Interactive 3D presentation of the Sagacious window"></div>
        <div class="product-stage__caption">
          <span class="mono">INTERACTIVE · THREE.JS</span>
          <span class="mono">DRAG TO ROTATE · TICK A ROW · RUN A WIPE</span>
        </div>
      </div>
    </section>

    <section class="section section--interface" id="interface">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Interface</p></div>
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
              <span class="mono">560 × 400 · RENDERED AT 2×</span>
              <span class="mono anatomy__swipe">SWIPE TO INSPECT</span>
              <span class="mono" data-anatomy-state>REGION 01 / 05</span>
            </div>
          </div>
          <div class="anatomy__panel" data-reveal style="--reveal-delay: 90ms">
            <div class="anatomy__tabs" role="tablist" aria-label="Interface regions" aria-orientation="vertical">
              ${M.map((i,p)=>`
                <button class="anatomy__tab${p===0?" is-active":""}" type="button" role="tab"
                  id="tab-${i.id}" aria-controls="panel-region" aria-selected="${p===0}" tabindex="${p===0?0:-1}"
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
          <div class="section-head__label"><p class="eyebrow">Coverage</p></div>
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
          ${b("shield",15)}
          Shim cache, BAM, Amcache and UserAssist are rewritten or pruned in place — not unlinked —
          so the store stays valid after the edit.
        </p>
      </div>
    </section>

    <section class="section" id="capabilities">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Behaviour</p></div>
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
              <span class="dive__index mono">01</span>
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
              <span class="dive__index mono">02</span>
              <h3 class="h3">The journal is rebuilt, not edited.</h3>
              <p>
                Deleting a file writes a new record into the NTFS change journal. Wiping traces and
                leaving those records behind is a half-finished job, so every delete ends with a
                fresh journal on each fixed volume.
              </p>
              <ul class="dive__list">
                <li>The status line reports how many volumes were reset.</li>
                <li><span class="mono">--no-usn</span> on the command line skips the rebuild.</li>
                <li>The same pass removes the wipe’s own file-deleted records.</li>
              </ul>
            </div>
            <div class="dive__visual">
              <div class="volumes">
                <div class="volumes__head mono">JOURNAL REBUILD · FIXED VOLUMES</div>
                ${["C:","D:","E:"].map((i,p)=>`
                  <div class="volume">
                    <span class="volume__name mono">${i}</span>
                    <span class="volume__track"><i style="--d:${p*120}ms"></i></span>
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

    <section class="section" id="cli">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Command line</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The same engine, without the window.</h2>
            <p class="lead">
              <span class="mono">sagacious-cli.exe</span> ships in the same release. It prints counts and
              exit codes instead of drawing them.
            </p>
          </div>
        </div>

        <div class="cli">
          <div class="cli__panel" data-reveal>
            <div class="cli__bar">
              <span class="cli__dots" aria-hidden="true"><i></i><i></i><i></i></span>
              <span class="mono">sagacious-cli — powershell</span>
              <button class="cli__copy" type="button" data-copy>
                ${b("copy",14)}<span>Copy</span>
              </button>
            </div>
            <div class="cli__body">
              <p><span class="cli__prompt">PS&gt;</span> sagacious-cli list --sys belat</p>
              <p class="cli__comment"># print matches outside Windows, change nothing</p>
              <p><span class="cli__prompt">PS&gt;</span> sagacious-cli wipe --sys belat</p>
              <p class="cli__comment"># delete the matches</p>
              <p><span class="cli__prompt">PS&gt;</span> sagacious-cli kill --files --stealth belat</p>
              <p class="cli__comment"># delete files, reset journals, clean own traces</p>
              <p class="cli__cursor"><span class="cli__prompt">PS&gt;</span> <span class="cli__caret" aria-hidden="true"></span></p>
            </div>
          </div>
          <div class="cli__side" data-reveal style="--reveal-delay: 90ms">
            <div class="cli__commands">
              ${ve.map(i=>`
                <div class="cli__command">
                  <code>${i.command} <em>${i.args}</em></code>
                  <span>${i.note}</span>
                </div>`).join("")}
            </div>
            <div class="cli__flags">
              <p class="mono">FLAGS</p>
              ${me.map(i=>`<div><code>${i.flag}</code><span>${i.note}</span></div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="specs">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Specification</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The whole sheet.</h2>
            <p class="lead">Everything a release note would tell you, in one place.</p>
          </div>
        </div>
        <div class="specs">
          <div class="spec-table">
            ${fe.map((i,p)=>`
              <div class="spec-table__row" data-reveal style="--reveal-delay: ${p*30}ms">
                <span class="spec-table__key">${i.key}</span>
                <span class="spec-table__value">${i.value}</span>
              </div>`).join("")}
          </div>
          <aside class="specs__aside" data-reveal style="--reveal-delay: 100ms">
            <div class="specs__badge">${b("lock",18)}</div>
            <h3>Administrator, by design.</h3>
            <p>
              Reading BAM, Amcache and the SYSTEM hive requires elevation, and so does rewriting
              them. The GUI manifest requests it at launch; the CLI runs as the user who started it.
            </p>
            <div class="specs__note mono">NO SERVICE · NO TRAY ICON · NO ACCOUNT</div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <p class="eyebrow">Sagacious 1.0</p>
          <h2 class="h2 cta__title">That is the whole product.</h2>
          <p class="lead">One window, fourteen stores, a rebuilt journal and a command line for when the window is in the way.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products">All products ${b("arrowRight",16,"icon--arrow")}</a>
            <a class="btn" href="/about">About the product</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">VERSION</span><p>1.0.0</p></div>
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
          <div class="cta__spec"><span class="mono">PRIVILEGES</span><p>Administrator</p></div>
        </div>
      </div>
    </section>`;let o,n,s=!1,t=()=>{},a=()=>{};return{id:"product",title:"Sagacious",fullTitle:"Sagacious — Trace hygiene for Windows",description:"Sagacious by Cracking: fourteen artifact sources, selective removal, a rebuilt change journal and a real command line. Explore the interface in 3D.",render:()=>e,mount(){t=N(e),n=j(e.querySelector("#anatomy-window"),{interactive:!0,minWidth:660}),K(async()=>{const{createStage:m}=await import("./stage-ilp7j-ik.js");return{createStage:m}},__vite__mapDeps([0,1])).then(({createStage:m})=>{s||(o=m(e.querySelector("#product-stage"),{variant:"product"}))});const i=Array.from(e.querySelectorAll("[data-region-tab]")),p=e.querySelector("#panel-region"),E=e.querySelector("[data-anatomy-state]"),f=p.querySelector(".anatomy__detail-title"),w=p.querySelector(".anatomy__detail-body"),_=p.querySelector(".anatomy__points");function c(m,{focus:$=!1}={}){const k=M.find(g=>g.id===m)||M[0];i.forEach(g=>{const l=g.dataset.regionTab===m;g.classList.toggle("is-active",l),g.setAttribute("aria-selected",String(l)),g.tabIndex=l?0:-1,l&&$&&g.focus({preventScroll:!0})}),p.setAttribute("aria-labelledby",`tab-${k.id}`),f.textContent=k.title,w.textContent=k.body,_.innerHTML=k.points.map(g=>`<li>${g}</li>`).join(""),E.textContent=`REGION ${k.index} / 05`,n?.app.setHighlight(k.id)}const y=m=>{const $=m.target.closest("[data-region-tab]");$&&c($.dataset.regionTab)},S=m=>{const $=m.target.closest("[data-region-tab]");if(!$)return;const k=i.indexOf($);m.key==="ArrowDown"||m.key==="ArrowRight"?(m.preventDefault(),c(i[(k+1)%i.length].dataset.regionTab,{focus:!0})):m.key==="ArrowUp"||m.key==="ArrowLeft"?(m.preventDefault(),c(i[(k-1+i.length)%i.length].dataset.regionTab,{focus:!0})):m.key==="Home"?(m.preventDefault(),c(i[0].dataset.regionTab,{focus:!0})):m.key==="End"&&(m.preventDefault(),c(i[i.length-1].dataset.regionTab,{focus:!0}))};e.querySelector(".anatomy__tabs").addEventListener("click",y),e.querySelector(".anatomy__tabs").addEventListener("keydown",S),a=()=>{e.querySelector(".anatomy__tabs")?.removeEventListener("click",y),e.querySelector(".anatomy__tabs")?.removeEventListener("keydown",S)};const d=e.querySelector("[data-copy]"),v=d.querySelector("span"),h=async()=>{const m=await ge("sagacious-cli wipe --sys belat");v.textContent=m?"Copied":"Copy failed",window.setTimeout(()=>{v.textContent="Copy"},1800)};d.addEventListener("click",h),c("header")},unmount(){s=!0,t(),a(),o?.destroy(),n?.destroy(),o=null,n=null}}}const Me=Le(),Ce=[["Runtime","Win32 · DirectX 11"],["Interface layer","Dear ImGui 1.91.5, vendored"],["Window","560 × 400, fixed, borderless"],["Privileges","Administrator (GUI) · asInvoker (CLI)"],["Front ends","Sagacious.exe · sagacious-cli.exe"],["Network","One optional request, cached for 24 hours"],["Build","MSVC v143 · Windows 10 SDK · x64"]],Re=[["No backup","Deleted means deleted. There is no vault, no recycle bin and no undo."],["No scheduling","It runs when you open it and stops when you close it. There is no service or tray agent."],["No remote control","No account, no dashboard, no fleet management. The machine is the boundary."],["No silent behaviour","The header states the trace count, the selection and the list matches before anything runs."]];function Ie(){const e=document.createElement("div");e.className="page page--about",e.innerHTML=`
    <section class="page-head">
      <div class="container">
        <p class="eyebrow" data-reveal>About Cracking</p>
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
            <div><dt>Release</dt><dd>1.0.0</dd></div>
            <div><dt>Platform</dt><dd>Windows</dd></div>
            <div><dt>Interfaces</dt><dd>GUI + CLI</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section" id="principles">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Principles</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Four rules the product is built around.</h2>
            <p class="lead">They are constraints, not values on a wall. Each one removes a feature that would have made the product easier to sell.</p>
          </div>
        </div>
        <div class="principles">
          ${_e.map((n,s)=>`
            <article class="principle" data-reveal style="--reveal-delay: ${s*60}ms">
              <span class="principle__index mono">${n.index}</span>
              <h3>${n.title}</h3>
              <p>${n.body}</p>
            </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="technical">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Technical notes</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Small stack, stated plainly.</h2>
            <p class="lead">No Electron shell, no bundled browser, no runtime installer. The interface is drawn directly with DirectX 11.</p>
          </div>
        </div>
        <div class="spec-table">
          ${Ce.map(([n,s],t)=>`
            <div class="spec-table__row" data-reveal style="--reveal-delay: ${t*35}ms">
              <span class="spec-table__key">${n}</span>
              <span class="spec-table__value">${s}</span>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="limits">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Limits</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">What it deliberately does not do.</h2>
            <p class="lead">A tool is defined by its refusals as much as its features. These are the ones that keep Sagacious predictable.</p>
          </div>
        </div>
        <div class="limits">
          ${Re.map(([n,s],t)=>`
            <div class="limit" data-reveal style="--reveal-delay: ${t*50}ms">
              <span class="limit__mark">${b("close",13)}</span>
              <div>
                <h3>${n}</h3>
                <p>${s}</p>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <p class="eyebrow">Sagacious 1.0</p>
          <h2 class="h2 cta__title">Read the product page.</h2>
          <p class="lead">Interface anatomy, all fourteen artifact sources, the command line and the full specification.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">Open Sagacious ${b("arrowRight",16,"icon--arrow")}</a>
            <a class="btn" href="/products">Products</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">RELEASE</span><p>1.0.0</p></div>
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
          <div class="cta__spec"><span class="mono">DISTRIBUTION</span><p>Single executable</p></div>
        </div>
      </div>
    </section>`;let o=()=>{};return{id:"about",title:"About",description:"The principles, technical notes and deliberate limits behind Cracking and Sagacious, its first release.",render:()=>e,mount(){o=N(e)},unmount(){o()}}}const Pe=Ie();function We(){const e=document.createElement("div");return e.className="page page--notfound",e.innerHTML=`
    <section class="notfound">
      <div class="container">
        <p class="eyebrow">Error 404</p>
        <p class="notfound__code">404</p>
        <h1 class="h2">This route is not in the record.</h1>
        <p class="lead">The page you asked for does not exist, or it has moved. The product and the catalogue are both one click away.</p>
        <div class="btn-row">
          <a class="btn btn--primary" href="/">Back to home ${b("arrowRight",16,"icon--arrow")}</a>
          <a class="btn" href="/products/sagacious">Sagacious</a>
        </div>
      </div>
    </section>`,{id:"notfound",title:"Page not found",description:"The requested page could not be found.",render:()=>e}}const Ne=We(),q=ne(),De=oe();document.getElementById("site-header").replaceWith(q.el);document.getElementById("site-footer").replaceWith(De);const Fe=document.getElementById("main"),je=ce({main:Fe,notFound:Ne,routes:[{path:"/",page:$e},{path:"/products",page:Te},{path:"/products/sagacious",page:Me},{path:"/about",page:Pe}],redirects:{"/products/sugacious":"/products/sagacious"},onChange:e=>q.setActive(e)});q.setActive(location.pathname);je.start();document.fonts?.ready&&document.fonts.ready.then(()=>document.documentElement.classList.add("fonts-ready"));export{qe as a,xe as c,b as i,P as r};
