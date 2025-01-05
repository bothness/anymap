var Ht=t=>{throw TypeError(t)};var Te=(t,e,n)=>e.has(t)||Ht("Cannot "+n);var b=(t,e,n)=>(Te(t,e,"read from private field"),n?n.call(t):e.get(t)),T=(t,e,n)=>e.has(t)?Ht("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{o as Ut}from"./index-client.DKpeL2NU.js";import{w as xt,a as Pe,H as _t,S as Ct,R as ae,b as P}from"./control.CGd2nzaH.js";import{aA as x,q as C,M as O,az as xe}from"./runtime.D7Av2bsv.js";new URL("sveltekit-internal://");function Ce(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Oe(t){return t.split("%25").map(decodeURI).join("%25")}function Ne(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function kt({href:t}){return t.split("#")[0]}const je=["href","pathname","search","toString","toJSON"];function $e(t,e,n){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),a[o](s));e();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of je)Object.defineProperty(r,a,{get(){return e(),t[a]},enumerable:!0,configurable:!0});return r}const De="/__data.json",Fe=".html__data.json";function Ve(t){return t.endsWith(".html")?t.replace(/\.html$/,Fe):t.replace(/\/$/,"")+De}function Be(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Me(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const oe=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&K.delete(Ot(t)),oe(t,e));const K=new Map;function qe(t,e){const n=Ot(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&K.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Me(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function Ge(t,e,n){if(K.size>0){const r=Ot(t,n),a=K.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);K.delete(r)}}return window.fetch(e,n)}function Ot(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Be(...a)}"]`}return r}const He=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ke(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ye(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return Et(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Et(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=He.exec(c),[,h,y,u,g]=d;return e.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return Et(c)}).join("")}).join("")}/?$`),params:e}}function We(t){return!/^\([^)]+\)$/.test(t)}function Ye(t){return t.slice(1).split("/").filter(We)}function ze(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const d=e[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Et(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Je({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Ke(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return ze(l,y,r)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function se(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Kt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const Xe="1736115556045",ie="sveltekit:snapshot",ce="sveltekit:scroll",le="sveltekit:states",Ze="sveltekit:pageurl",M="sveltekit:history",Y="sveltekit:navigation",ft={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ct=location.origin;function fe(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Nt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Wt={...ft,"":ft.hover};function ue(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function de(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ue(t)}}function Lt(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!r||wt(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(n==null?void 0:n.origin)===ct&&t.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function ut(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=B(s,"preload-code")),a===null&&(a=B(s,"preload-data")),e===null&&(e=B(s,"keepfocus")),n===null&&(n=B(s,"noscroll")),o===null&&(o=B(s,"reload")),i===null&&(i=B(s,"replacestate")),s=ue(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Wt[r??"off"],preload_data:Wt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Yt(t){const e=xt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const he={v:()=>{}};function Qe(){const{set:t,subscribe:e}=xt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Pe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Xe;return i&&(t(!0),he.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function wt(t,e){return t.origin!==ct||!t.pathname.startsWith(e)}function zt(t){const e=en(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const tn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function en(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=tn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const nn=-1,rn=-2,an=-3,on=-4,sn=-5,cn=-6;function ln(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===nn)return;if(o===an)return NaN;if(o===on)return 1/0;if(o===sn)return-1/0;if(o===cn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=e==null?void 0:e[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=zt(g),p=new u(l);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=zt(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==rn&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}const pe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...pe];const fn=new Set([...pe]);[...fn];function un(t){return t.filter(e=>e!=null)}const dn="x-sveltekit-invalidated",hn="x-sveltekit-trailing-slash";function dt(t){return t instanceof _t||t instanceof Ct?t.status:500}function pn(t){return t instanceof Ct?t.text:"Internal Error"}let A,z,Rt;const gn=Ut.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ut.toString());var Z,Q,tt,et,nt,rt,at,ot,ee,st,ne,it,re;gn?(A={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},z={current:null},Rt={current:!1}):(A=new(ee=class{constructor(){T(this,Z,x({}));T(this,Q,x(null));T(this,tt,x(null));T(this,et,x({}));T(this,nt,x({id:null}));T(this,rt,x({}));T(this,at,x(-1));T(this,ot,x(new URL("https://example.com")))}get data(){return C(b(this,Z))}set data(e){O(b(this,Z),e)}get form(){return C(b(this,Q))}set form(e){O(b(this,Q),e)}get error(){return C(b(this,tt))}set error(e){O(b(this,tt),e)}get params(){return C(b(this,et))}set params(e){O(b(this,et),e)}get route(){return C(b(this,nt))}set route(e){O(b(this,nt),e)}get state(){return C(b(this,rt))}set state(e){O(b(this,rt),e)}get status(){return C(b(this,at))}set status(e){O(b(this,at),e)}get url(){return C(b(this,ot))}set url(e){O(b(this,ot),e)}},Z=new WeakMap,Q=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,ee),z=new(ne=class{constructor(){T(this,st,x(null))}get current(){return C(b(this,st))}set current(e){O(b(this,st),e)}},st=new WeakMap,ne),Rt=new(re=class{constructor(){T(this,it,x(!1))}get current(){return C(b(this,it))}set current(e){O(b(this,it),e)}},it=new WeakMap,re),he.v=()=>Rt.current=!0);function mn(t){Object.assign(A,t)}const yn=new Set(["icon","shortcut icon","apple-touch-icon"]),F=se(ce)??{},J=se(ie)??{},j={url:Yt({}),page:Yt({}),navigating:xt(null),updated:Qe()};function jt(t){F[t]=Nt()}function _n(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;J[n];)delete J[n],n+=1}function G(t){return location.href=t.href,new Promise(()=>{})}async function ge(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(P||"/");t&&await t.update()}}function Jt(){}let vt,Tt,ht,N,Pt,V;const me=[],pt=[];let U=null;const ye=[],wn=[];let D=[],_={branch:[],error:null,url:null},$t=!1,gt=!1,Xt=!0,X=!1,H=!1,_e=!1,Dt=!1,Ft,I,L,mt;const W=new Set;async function $n(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),V=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),vt=Je(t),N=document.documentElement,Pt=e,Tt=t.nodes[0],ht=t.nodes[1],Tt(),ht(),I=(i=history.state)==null?void 0:i[M],L=(s=history.state)==null?void 0:s[Y],I||(I=L=Date.now(),history.replaceState({...history.state,[M]:I,[Y]:L},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Un(Pt,n):Rn(location.href,{replaceState:!0}),In()}function vn(){me.length=0,Dt=!1}function we(t){pt.some(e=>e==null?void 0:e.snapshot)&&(J[t]=pt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function ve(t){var e;(e=J[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=pt[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function Zt(){jt(I),Kt(ce,F),we(L),Kt(ie,J)}async function be(t,e,n,r){return lt({type:"goto",url:fe(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Dt=!0)}})}async function bn(t){if(t.id!==(U==null?void 0:U.id)){const e={};W.add(e),U={id:t.id,token:e,promise:Se({...t,preload:e}).then(n=>(W.delete(e),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function It(t){const e=vt.find(n=>n.exec(ke(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Ae(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(A,t.props.page),Ft=new V.root({target:e,props:{...t.props,stores:j,components:pt},hydrate:n,sync:!1}),ve(L);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(a)),gt=!0}function yt({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=Ce(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:un(n).map(u=>u.node.component),page:A}};i!==void 0&&(c.props.form=i);let f={},d=!A,h=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],l=_.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==A.form||d)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?f:A.data}),c}async function Vt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:S}=new URL(p,n);c.dependencies.add(S)}};const g={route:new Proxy(a,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(r,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:$e(n,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,p){let S;l instanceof Request?(S=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):S=l;const E=new URL(S,n);return s&&u(E.href),E.origin===n.origin&&(S=E.href.slice(n.origin.length)),gt?Ge(S,E.href,p):qe(S,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Qt(t,e,n,r,a,o){if(Dt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(me.some(s=>s(new URL(i))))return!0;return!1}function Bt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function An(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function te({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:A,constructors:[]}}}async function Se({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((U==null?void 0:U.id)===t)return W.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=a,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?t!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=An(_.url,n);let g=!1;const l=f.map((m,v)=>{var $;const k=_.branch[v],R=!!(m!=null&&m[0])&&((k==null?void 0:k.loader)!==m[1]||Qt(g,y,h,u,($=k.server)==null?void 0:$.uses,r));return R&&(g=!0),R});if(l.some(Boolean)){try{d=await Ie(n,l)}catch(m){const v=await q(m,{url:n,params:r,route:{id:t}});return W.has(o)?te({error:v,url:n,params:r,route:a}):bt({status:dt(m),error:v,url:n,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let S=!1;const E=f.map(async(m,v)=>{var At;if(!m)return;const k=_.branch[v],R=p==null?void 0:p[v];if((!R||R.type==="skip")&&m[1]===(k==null?void 0:k.loader)&&!Qt(S,y,h,u,(At=k.universal)==null?void 0:At.uses,r))return k;if(S=!0,(R==null?void 0:R.type)==="error")throw R;return Vt({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Gt;const qt={};for(let St=0;St<v;St+=1)Object.assign(qt,(Gt=await E[St])==null?void 0:Gt.data);return qt},server_data_node:Bt(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?k==null?void 0:k.server:void 0)})});for(const m of E)m.catch(()=>{});const w=[];for(let m=0;m<f.length;m+=1)if(f[m])try{w.push(await E[m])}catch(v){if(v instanceof ae)return{type:"redirect",location:v.location};if(W.has(o))return te({error:await q(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let k=dt(v),R;if(p!=null&&p.includes(v))k=v.status??k,R=v.error;else if(v instanceof _t)R=v.body;else{if(await j.updated.check())return await ge(),await G(n);R=await q(v,{params:r,url:n,route:{id:a.id}})}const $=await Sn(m,w,i);return $?yt({url:n,params:r,branch:w.slice(0,$.idx).concat($.node),status:k,error:R,route:a}):await Re(n,{id:a.id},R,k)}else w.push(void 0);return yt({url:n,params:r,branch:w,status:200,error:null,route:a,form:e?void 0:null})}async function Sn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function bt({status:t,error:e,url:n,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const f=await Ie(n,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(n.origin!==ct||n.pathname!==location.pathname||$t)&&await G(n)}const s=await Vt({loader:Tt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Bt(o)}),c={node:await ht(),loader:ht,universal:null,server:null,data:null};return yt({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function Mt(t,e){if(!t||wt(t,P))return;let n;try{n=V.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=ke(n);for(const a of vt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:e,route:a,params:Ne(o),url:t}}}function ke(t){return Oe(t.slice(P.length)||"/")}function Ee({url:t,type:e,intent:n,delta:r}){let a=!1;const o=Le(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return X||ye.forEach(s=>s(i)),a?null:o}async function lt({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Jt,block:d=Jt}){const h=Mt(e,!1),y=Ee({url:e,type:t,delta:n==null?void 0:n.delta,intent:h});if(!y){d();return}const u=I,g=L;f(),X=!0,gt&&j.navigating.set(z.current=y.navigation),mt=c;let l=h&&await Se(h);if(!l){if(wt(e,P))return await G(e);l=await Re(e,{id:null},await q(new Ct(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(h==null?void 0:h.url)||e,mt!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await bt({status:500,error:await q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return be(new URL(l.location,e).href,{},s+1,c),!1;else l.props.page.status>=400&&await j.updated.check()&&(await ge(),await G(e));if(vn(),jt(u),we(g),l.props.page.url.pathname!==e.pathname&&(e.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const w=o?0:1,m={[M]:I+=w,[Y]:L+=w,[le]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||_n(I,L)}if(U=null,l.props.page.state=i,gt){_=l.state,l.props.page&&(l.props.page.url=e);const w=(await Promise.all(wn.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){D=D.filter(v=>!w.includes(v))};w.push(m),D.push(...w)}Ft.$set(l.props),mn(l.props.page),_e=!0}else Ae(l,Pt,!1);const{activeElement:p}=document;await xe();const S=n?n.scroll:a?Nt():null;if(Xt){const w=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));S?scrollTo(S.x,S.y):w?w.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!r&&!E&&Ln(),Xt=!0,l.props.page&&Object.assign(A,l.props.page),X=!1,t==="popstate"&&ve(L),y.fulfil(void 0),D.forEach(w=>w(y.navigation)),j.navigating.set(z.current=null)}async function Re(t,e,n,r){return t.origin===ct&&t.pathname===location.pathname&&!$t?await bt({status:r,error:n,url:t,route:e}):await G(t)}function kn(){let t;N.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}N.addEventListener("mousedown",e),N.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(It(i.target.href),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=de(o,N);if(!s)return;const{url:c,external:f,download:d}=Lt(s,P);if(f||d)return;const h=ut(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=Mt(c,!1);u&&bn(u)}else i<=h.preload_code&&It(c.pathname)}function a(){n.disconnect();for(const o of N.querySelectorAll("a")){const{url:i,external:s,download:c}=Lt(o,P);if(s||c)continue;const f=ut(o);f.reload||(f.preload_code===ft.viewport&&n.observe(o),f.preload_code===ft.eager&&It(i.pathname))}}D.push(a),a()}function q(t,e){if(t instanceof _t)return t.body;const n=dt(t),r=pn(t);return V.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function En(t,e){Ut(()=>(t.push(e),()=>{const n=t.indexOf(e);t.splice(n,1)}))}function Dn(t){En(D,t)}function Rn(t,e={}){return t=fe(t),t.origin!==ct?Promise.reject(new Error("goto: invalid URL")):be(t,e,0)}function In(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(Zt(),!X){const a=Le(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ye.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Zt()}),(e=navigator.connection)!=null&&e.saveData||kn(),N.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=de(n.composedPath()[0],N);if(!r)return;const{url:a,external:o,target:i,download:s}=Lt(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ut(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===kt(location);if(o||c.reload&&(!y||!h)){Ee({url:a,type:"link"})?X=!0:n.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(H=!0,jt(I),t(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),lt({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),N.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(wt(s,P))return;const c=n.target,f=ut(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),lt({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[M]){const a=n.state[M];if(mt={},a===I)return;const o=F[a],i=n.state[le]??{},s=new URL(n.state[Ze]??location.href),c=n.state[Y],f=kt(location)===kt(_.url);if(c===L&&(_e||f)){t(s),F[I]=Nt(),o&&scrollTo(o.x,o.y),i!==A.state&&(A.state=i,Ft.$set({page:A})),I=a;return}const h=a-I;await lt({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=a,L=c},block:()=>{history.go(-h)},nav_token:mt})}else if(!H){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[M]:++I,[Y]:L},"",location.href))});for(const n of document.querySelectorAll("link"))yn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&j.navigating.set(z.current=null)});function t(n){_.url=A.url=n,j.page.set({data:A.data,error:A.error,form:A.form,params:A.params,route:A.route,state:A.state,status:A.status,url:n}),j.page.notify()}}async function Un(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){$t=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Mt(c,!1)||{});let f,d=!0;try{const h=r.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=Ue(p.uses)),Vt({loader:V.nodes[g],url:c,params:a,route:o,parent:async()=>{const S={};for(let E=0;E<l;E+=1)Object.assign(S,(await h[E]).data);return S},server_data_node:Bt(p)})}),y=await Promise.all(h),u=vt.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=yt({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(h){if(h instanceof ae){await G(new URL(h.location,location.href));return}f=await bt({status:dt(h),error:await q(h,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",d=!1}f.props.page&&(f.props.page.state={}),Ae(f,t,d)}async function Ie(t,e){var a;const n=new URL(t);n.pathname=Ve(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(hn,"1"),n.searchParams.append(dn,e.map(o=>o?"1":"0").join(""));const r=await oe(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new _t(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(y){return ln(y,{...V.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=Ue(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:S,error:E}=l,w=i.get(p);i.delete(p),E?w.reject(f(E)):w.fulfil(f(S))}}}})}function Ue(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Ln(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Le(t,e,n,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((f=e==null?void 0:e.route)==null?void 0:f.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{Dn as a,$n as b,Rn as g,A as p,j as s,Rt as u};