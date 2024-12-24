var Mt=t=>{throw TypeError(t)};var Te=(t,e,n)=>e.has(t)||Mt("Cannot "+n);var b=(t,e,n)=>(Te(t,e,"read from private field"),n?n.call(t):e.get(t)),T=(t,e,n)=>e.has(t)?Mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{aA as x,q as C,K as O,az as Pe}from"./runtime.DTQ_9slk.js";import{w as Pt,a as xe,H as wt,S as xt,R as ae,b as P}from"./control.UqgIgW4B.js";import{o as Ht}from"./index-client.Zs5LPVau.js";new URL("sveltekit-internal://");function Ce(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Oe(t){return t.split("%25").map(decodeURI).join("%25")}function Ne(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function St({href:t}){return t.split("#")[0]}const je=["href","pathname","search","toString","toJSON"];function $e(t,e,n){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),a[o](s));e();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of je)Object.defineProperty(r,a,{get(){return e(),t[a]},enumerable:!0,configurable:!0});return r}const De="/__data.json",Fe=".html__data.json";function Ve(t){return t.endsWith(".html")?t.replace(/\.html$/,Fe):t.replace(/\/$/,"")+De}function Be(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function qe(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const oe=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&K.delete(Ct(t)),oe(t,e));const K=new Map;function Ge(t,e){const n=Ct(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&K.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=qe(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function Me(t,e,n){if(K.size>0){const r=Ct(t,n),a=K.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);K.delete(r)}}return window.fetch(e,n)}function Ct(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Be(...a)}"]`}return r}const He=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ke(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ye(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return Et(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Et(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=He.exec(c),[,h,y,u,g]=d;return e.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return Et(c)}).join("")}).join("")}/?$`),params:e}}function We(t){return!/^\([^)]+\)$/.test(t)}function Ye(t){return t.slice(1).split("/").filter(We)}function ze(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const d=e[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Et(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Je({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Ke(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return ze(l,y,r)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function se(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Kt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const Xe="1735060012945",ie="sveltekit:snapshot",ce="sveltekit:scroll",le="sveltekit:states",Ze="sveltekit:pageurl",q="sveltekit:history",Y="sveltekit:navigation",ft={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ct=location.origin;function fe(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Ot(){return{x:pageXOffset,y:pageYOffset}}function V(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Wt={...ft,"":ft.hover};function ue(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function de(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ue(t)}}function Ut(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!r||_t(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(n==null?void 0:n.origin)===ct&&t.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function ut(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=V(s,"preload-code")),a===null&&(a=V(s,"preload-data")),e===null&&(e=V(s,"keepfocus")),n===null&&(n=V(s,"noscroll")),o===null&&(o=V(s,"reload")),i===null&&(i=V(s,"replacestate")),s=ue(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Wt[r??"off"],preload_data:Wt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Yt(t){const e=Pt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const he={v:()=>{}};function Qe(){const{set:t,subscribe:e}=Pt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${xe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Xe;return i&&(t(!0),he.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function _t(t,e){return t.origin!==ct||!t.pathname.startsWith(e)}function zt(t){const e=en(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const tn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function en(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=tn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const nn=-1,rn=-2,an=-3,on=-4,sn=-5,cn=-6;function ln(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===nn)return;if(o===an)return NaN;if(o===on)return 1/0;if(o===sn)return-1/0;if(o===cn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=e==null?void 0:e[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=zt(g),p=new u(l);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=zt(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==rn&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}const pe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...pe];const fn=new Set([...pe]);[...fn];function un(t){return t.filter(e=>e!=null)}const dn="x-sveltekit-invalidated",hn="x-sveltekit-trailing-slash";function dt(t){return t instanceof wt||t instanceof xt?t.status:500}function pn(t){return t instanceof xt?t.text:"Internal Error"}let A,z,Rt;const gn=Ht.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ht.toString());var Z,Q,tt,et,nt,rt,at,ot,ee,st,ne,it,re;gn?(A={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},z={current:null},Rt={current:!1}):(A=new(ee=class{constructor(){T(this,Z,x({}));T(this,Q,x(null));T(this,tt,x(null));T(this,et,x({}));T(this,nt,x({id:null}));T(this,rt,x({}));T(this,at,x(-1));T(this,ot,x(new URL("https://example.com")))}get data(){return C(b(this,Z))}set data(e){O(b(this,Z),e)}get form(){return C(b(this,Q))}set form(e){O(b(this,Q),e)}get error(){return C(b(this,tt))}set error(e){O(b(this,tt),e)}get params(){return C(b(this,et))}set params(e){O(b(this,et),e)}get route(){return C(b(this,nt))}set route(e){O(b(this,nt),e)}get state(){return C(b(this,rt))}set state(e){O(b(this,rt),e)}get status(){return C(b(this,at))}set status(e){O(b(this,at),e)}get url(){return C(b(this,ot))}set url(e){O(b(this,ot),e)}},Z=new WeakMap,Q=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,ee),z=new(ne=class{constructor(){T(this,st,x(null))}get current(){return C(b(this,st))}set current(e){O(b(this,st),e)}},st=new WeakMap,ne),Rt=new(re=class{constructor(){T(this,it,x(!1))}get current(){return C(b(this,it))}set current(e){O(b(this,it),e)}},it=new WeakMap,re),he.v=()=>Rt.current=!0);function mn(t){Object.assign(A,t)}const yn=new Set(["icon","shortcut icon","apple-touch-icon"]),D=se(ce)??{},J=se(ie)??{},j={url:Yt({}),page:Yt({}),navigating:Pt(null),updated:Qe()};function Nt(t){D[t]=Ot()}function wn(t,e){let n=t+1;for(;D[n];)delete D[n],n+=1;for(n=e+1;J[n];)delete J[n],n+=1}function M(t){return location.href=t.href,new Promise(()=>{})}async function ge(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(P||"/");t&&await t.update()}}function Jt(){}let vt,Lt,ht,N,Tt,F;const me=[],pt=[];let U=null;const ye=[],_n=[];let B=[],w={branch:[],error:null,url:null},jt=!1,gt=!1,Xt=!0,X=!1,H=!1,we=!1,$t=!1,Dt,I,L,mt;const W=new Set;async function jn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),F=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),vt=Je(t),N=document.documentElement,Tt=e,Lt=t.nodes[0],ht=t.nodes[1],Lt(),ht(),I=(i=history.state)==null?void 0:i[q],L=(s=history.state)==null?void 0:s[Y],I||(I=L=Date.now(),history.replaceState({...history.state,[q]:I,[Y]:L},""));const r=D[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await In(Tt,n):En(location.href,{replaceState:!0}),Rn()}function vn(){me.length=0,$t=!1}function _e(t){pt.some(e=>e==null?void 0:e.snapshot)&&(J[t]=pt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function ve(t){var e;(e=J[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=pt[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function Zt(){Nt(I),Kt(ce,D),_e(L),Kt(ie,J)}async function be(t,e,n,r){return lt({type:"goto",url:fe(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&($t=!0)}})}async function bn(t){if(t.id!==(U==null?void 0:U.id)){const e={};W.add(e),U={id:t.id,token:e,promise:ke({...t,preload:e}).then(n=>(W.delete(e),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function It(t){const e=vt.find(n=>n.exec(Se(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Ae(t,e,n){var o;w=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(A,t.props.page),Dt=new F.root({target:e,props:{...t.props,stores:j,components:pt},hydrate:n,sync:!1}),ve(L);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};B.forEach(i=>i(a)),gt=!0}function yt({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=Ce(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:un(n).map(u=>u.node.component),page:A}};i!==void 0&&(c.props.form=i);let f={},d=!A,h=0;for(let u=0;u<Math.max(n.length,w.branch.length);u+=1){const g=n[u],l=w.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==A.form||d)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?f:A.data}),c}async function Ft({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:k}=new URL(p,n);c.dependencies.add(k)}};const g={route:new Proxy(a,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(r,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:$e(n,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,p){let k;l instanceof Request?(k=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):k=l;const E=new URL(k,n);return s&&u(E.href),E.origin===n.origin&&(k=E.href.slice(n.origin.length)),gt?Me(k,E.href,p):Ge(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Qt(t,e,n,r,a,o){if($t)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(me.some(s=>s(new URL(i))))return!0;return!1}function Vt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function An(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function te({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:A,constructors:[]}}}async function ke({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((U==null?void 0:U.id)===t)return W.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=a,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?t!==w.url.pathname+w.url.search:!1,y=w.route?a.id!==w.route.id:!1,u=An(w.url,n);let g=!1;const l=f.map((m,v)=>{var $;const S=w.branch[v],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Qt(g,y,h,u,($=S.server)==null?void 0:$.uses,r));return R&&(g=!0),R});if(l.some(Boolean)){try{d=await Ie(n,l)}catch(m){const v=await G(m,{url:n,params:r,route:{id:t}});return W.has(o)?te({error:v,url:n,params:r,route:a}):bt({status:dt(m),error:v,url:n,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let k=!1;const E=f.map(async(m,v)=>{var At;if(!m)return;const S=w.branch[v],R=p==null?void 0:p[v];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Qt(k,y,h,u,(At=S.universal)==null?void 0:At.uses,r))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Ft({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Gt;const qt={};for(let kt=0;kt<v;kt+=1)Object.assign(qt,(Gt=await E[kt])==null?void 0:Gt.data);return qt},server_data_node:Vt(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const _=[];for(let m=0;m<f.length;m+=1)if(f[m])try{_.push(await E[m])}catch(v){if(v instanceof ae)return{type:"redirect",location:v.location};if(W.has(o))return te({error:await G(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=dt(v),R;if(p!=null&&p.includes(v))S=v.status??S,R=v.error;else if(v instanceof wt)R=v.body;else{if(await j.updated.check())return await ge(),await M(n);R=await G(v,{params:r,url:n,route:{id:a.id}})}const $=await kn(m,_,i);return $?yt({url:n,params:r,branch:_.slice(0,$.idx).concat($.node),status:S,error:R,route:a}):await Re(n,{id:a.id},R,S)}else _.push(void 0);return yt({url:n,params:r,branch:_,status:200,error:null,route:a,form:e?void 0:null})}async function kn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function bt({status:t,error:e,url:n,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const f=await Ie(n,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(n.origin!==ct||n.pathname!==location.pathname||jt)&&await M(n)}const s=await Ft({loader:Lt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Vt(o)}),c={node:await ht(),loader:ht,universal:null,server:null,data:null};return yt({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function Bt(t,e){if(!t||_t(t,P))return;let n;try{n=F.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=Se(n);for(const a of vt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:e,route:a,params:Ne(o),url:t}}}function Se(t){return Oe(t.slice(P.length)||"/")}function Ee({url:t,type:e,intent:n,delta:r}){let a=!1;const o=Le(w,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return X||ye.forEach(s=>s(i)),a?null:o}async function lt({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Jt,block:d=Jt}){const h=Bt(e,!1),y=Ee({url:e,type:t,delta:n==null?void 0:n.delta,intent:h});if(!y){d();return}const u=I,g=L;f(),X=!0,gt&&j.navigating.set(z.current=y.navigation),mt=c;let l=h&&await ke(h);if(!l){if(_t(e,P))return await M(e);l=await Re(e,{id:null},await G(new xt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(h==null?void 0:h.url)||e,mt!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await bt({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return be(new URL(l.location,e).href,{},s+1,c),!1;else l.props.page.status>=400&&await j.updated.check()&&(await ge(),await M(e));if(vn(),Nt(u),_e(g),l.props.page.url.pathname!==e.pathname&&(e.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const _=o?0:1,m={[q]:I+=_,[Y]:L+=_,[le]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||wn(I,L)}if(U=null,l.props.page.state=i,gt){w=l.state,l.props.page&&(l.props.page.url=e);const _=(await Promise.all(_n.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){B=B.filter(v=>!_.includes(v))};_.push(m),B.push(..._)}Dt.$set(l.props),mn(l.props.page),we=!0}else Ae(l,Tt,!1);const{activeElement:p}=document;await Pe();const k=n?n.scroll:a?Ot():null;if(Xt){const _=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));k?scrollTo(k.x,k.y):_?_.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!r&&!E&&Un(),Xt=!0,l.props.page&&Object.assign(A,l.props.page),X=!1,t==="popstate"&&ve(L),y.fulfil(void 0),B.forEach(_=>_(y.navigation)),j.navigating.set(z.current=null)}async function Re(t,e,n,r){return t.origin===ct&&t.pathname===location.pathname&&!jt?await bt({status:r,error:n,url:t,route:e}):await M(t)}function Sn(){let t;N.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}N.addEventListener("mousedown",e),N.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(It(i.target.href),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=de(o,N);if(!s)return;const{url:c,external:f,download:d}=Ut(s,P);if(f||d)return;const h=ut(s),y=c&&w.url.pathname+w.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=Bt(c,!1);u&&bn(u)}else i<=h.preload_code&&It(c.pathname)}function a(){n.disconnect();for(const o of N.querySelectorAll("a")){const{url:i,external:s,download:c}=Ut(o,P);if(s||c)continue;const f=ut(o);f.reload||(f.preload_code===ft.viewport&&n.observe(o),f.preload_code===ft.eager&&It(i.pathname))}}B.push(a),a()}function G(t,e){if(t instanceof wt)return t.body;const n=dt(t),r=pn(t);return F.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function En(t,e={}){return t=fe(t),t.origin!==ct?Promise.reject(new Error("goto: invalid URL")):be(t,e,0)}function Rn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(Zt(),!X){const a=Le(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ye.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Zt()}),(e=navigator.connection)!=null&&e.saveData||Sn(),N.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=de(n.composedPath()[0],N);if(!r)return;const{url:a,external:o,target:i,download:s}=Ut(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ut(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===St(location);if(o||c.reload&&(!y||!h)){Ee({url:a,type:"link"})?X=!0:n.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(H=!0,Nt(I),t(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),lt({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),N.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_t(s,P))return;const c=n.target,f=ut(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),lt({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(mt={},a===I)return;const o=D[a],i=n.state[le]??{},s=new URL(n.state[Ze]??location.href),c=n.state[Y],f=St(location)===St(w.url);if(c===L&&(we||f)){t(s),D[I]=Ot(),o&&scrollTo(o.x,o.y),i!==A.state&&(A.state=i,Dt.$set({page:A})),I=a;return}const h=a-I;await lt({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=a,L=c},block:()=>{history.go(-h)},nav_token:mt})}else if(!H){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[q]:++I,[Y]:L},"",location.href))});for(const n of document.querySelectorAll("link"))yn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&j.navigating.set(z.current=null)});function t(n){w.url=A.url=n,j.page.set({data:A.data,error:A.error,form:A.form,params:A.params,route:A.route,state:A.state,status:A.status,url:n}),j.page.notify()}}async function In(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){jt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Bt(c,!1)||{});let f,d=!0;try{const h=r.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=Ue(p.uses)),Ft({loader:F.nodes[g],url:c,params:a,route:o,parent:async()=>{const k={};for(let E=0;E<l;E+=1)Object.assign(k,(await h[E]).data);return k},server_data_node:Vt(p)})}),y=await Promise.all(h),u=vt.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=yt({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(h){if(h instanceof ae){await M(new URL(h.location,location.href));return}f=await bt({status:dt(h),error:await G(h,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",d=!1}f.props.page&&(f.props.page.state={}),Ae(f,t,d)}async function Ie(t,e){var a;const n=new URL(t);n.pathname=Ve(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(hn,"1"),n.searchParams.append(dn,e.map(o=>o?"1":"0").join(""));const r=await oe(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new wt(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(y){return ln(y,{...F.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=Ue(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:k,error:E}=l,_=i.get(p);i.delete(p),E?_.reject(f(E)):_.fulfil(f(k))}}}})}function Ue(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Un(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Le(t,e,n,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((f=e==null?void 0:e.route)==null?void 0:f.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{jn as a,En as g,A as p,j as s,Rt as u};