var ze=e=>{throw TypeError(e)};var Ct=(e,t,n)=>t.has(e)||ze("Cannot "+n);var A=(e,t,n)=>(Ct(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{o as Te}from"./lhyLtMa1.js";import{w as Ne,a as Nt,H as ve,S as Oe,b as x,R as je}from"./yTaip-1q.js";import{aA as C,q as N,M as O,az as Ot}from"./Bj-i7OMA.js";new URL("sveltekit-internal://");function jt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function $t(e){return e.split("%25").map(decodeURI).join("%25")}function Dt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Re({href:e}){return e.split("#")[0]}function Ft(e,t,n,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];a&&s.push("hash");for(const i of s)Object.defineProperty(r,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return r}const Vt="/__data.json",Bt=".html__data.json";function Mt(e){return e.endsWith(".html")?e.replace(/\.html$/,Bt):e.replace(/\/$/,"")+Vt}function qt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let a=n.length;for(;a;)t=t*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)t=t*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Gt(e){const t=atob(e),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n.buffer}const Ht=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&W.delete($e(e)),Ht(e,t));const W=new Map;function Kt(e,t){const n=$e(e,t),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&W.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Gt(r)),Promise.resolve(new Response(r,s))}return window.fetch(e,t)}function Wt(e,t,n){if(W.size>0){const a=$e(e,n),r=W.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);W.delete(a)}}return window.fetch(t,n)}function $e(e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const r=[];t.headers&&r.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&r.push(t.body),a+=`[data-hash="${qt(...r)}"]`}return a}const Yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function zt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Xt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return Ie(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ie(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const h=Yt.exec(c),[,u,y,d,m]=h;return t.push({name:d,matcher:m,optional:!!u,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Ie(c)}).join("")}).join("")}/?$`),params:t}}function Jt(e){return!/^\([^)]+\)$/.test(e)}function Xt(e){return e.slice(1).split("/").filter(Jt)}function Zt(e,t,n){const a={},r=e.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let f=r[o-i];if(c.chained&&c.rest&&i&&(f=r.slice(o-i,o+1).filter(h=>h).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){a[c.name]=f;const h=t[o+1],u=r[o+1];h&&!h.rest&&h.optional&&u&&c.chained&&(i=0),!h&&!u&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function Ie(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Qt({nodes:e,server_loads:t,dictionary:n,matchers:a}){const r=new Set(t);return Object.entries(n).map(([o,[c,f,h]])=>{const{pattern:u,params:y}=zt(o),d={id:o,exec:m=>{const l=u.exec(m);if(l)return Zt(l,y,a)},errors:[1,...h||[]].map(m=>e[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[r.has(o),e[o]]}}function ct(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Je(e,t,n=JSON.stringify){const a=n(t);try{sessionStorage[e]=a}catch{}}const en="1737317986841",lt="sveltekit:snapshot",ft="sveltekit:scroll",ut="sveltekit:states",tn="sveltekit:pageurl",B="sveltekit:history",z="sveltekit:navigation",fe={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},le=location.origin;function dt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function De(){return{x:pageXOffset,y:pageYOffset}}function V(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Xe={...fe,"":fe.hover};function ht(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function pt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=ht(e)}}function Pe(e,t,n){let a;try{a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,s=!a||!!r||be(a,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===le&&e.hasAttribute("download");return{url:a,external:s,target:r,download:i}}function ue(e){let t=null,n=null,a=null,r=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)a===null&&(a=V(o,"preload-code")),r===null&&(r=V(o,"preload-data")),t===null&&(t=V(o,"keepfocus")),n===null&&(n=V(o,"noscroll")),s===null&&(s=V(o,"reload")),i===null&&(i=V(o,"replacestate")),o=ht(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Xe[a??"off"],preload_data:Xe[r??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ze(e){const t=Ne(e);let n=!0;function a(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}const gt={v:()=>{}};function nn(){const{set:e,subscribe:t}=Ne(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${Nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==en;return i&&(e(!0),gt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:a}}function be(e,t,n){return e.origin!==le||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Qe(e){const t=an(e),n=new ArrayBuffer(t.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,t.charCodeAt(r));return n}const rn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function an(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,a=0;for(let r=0;r<e.length;r++)n<<=6,n|=rn.indexOf(e[r]),a+=6,a===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,t+=String.fromCharCode(n)):a===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const on=-1,sn=-2,cn=-3,ln=-4,fn=-5,un=-6;function dn(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,a=Array(n.length);function r(s,i=!1){if(s===on)return;if(s===cn)return NaN;if(s===ln)return 1/0;if(s===fn)return-1/0;if(s===un)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t==null?void 0:t[c];if(f)return a[s]=f(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const h=new Set;a[s]=h;for(let d=1;d<o.length;d+=1)h.add(r(o[d]));break;case"Map":const u=new Map;a[s]=u;for(let d=1;d<o.length;d+=2)u.set(r(o[d]),r(o[d+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);a[s]=y;for(let d=1;d<o.length;d+=2)y[o[d]]=r(o[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[c],m=o[1],l=Qe(m),g=new d(l);a[s]=g;break}case"ArrayBuffer":{const d=o[1],m=Qe(d);a[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let f=0;f<o.length;f+=1){const h=o[f];h!==sn&&(c[f]=r(h))}}else{const c={};a[s]=c;for(const f in o){const h=o[f];c[f]=r(h)}}return a[s]}return r(0)}const mt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...mt];const hn=new Set([...mt]);[...hn];function pn(e){return e.filter(t=>t!=null)}const gn="x-sveltekit-invalidated",mn="x-sveltekit-trailing-slash";function de(e){return e instanceof ve||e instanceof Oe?e.status:500}function yn(e){return e instanceof Oe?e.text:"Internal Error"}let U,J,Ue;const wn=Te.toString().includes("$$")||/function \w+\(\) \{\}/.test(Te.toString());var Q,ee,te,ne,re,ae,oe,se,ot,ie,st,ce,it;wn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},J={current:null},Ue={current:!1}):(U=new(ot=class{constructor(){P(this,Q,C({}));P(this,ee,C(null));P(this,te,C(null));P(this,ne,C({}));P(this,re,C({id:null}));P(this,ae,C({}));P(this,oe,C(-1));P(this,se,C(new URL("https://example.com")))}get data(){return N(A(this,Q))}set data(t){O(A(this,Q),t)}get form(){return N(A(this,ee))}set form(t){O(A(this,ee),t)}get error(){return N(A(this,te))}set error(t){O(A(this,te),t)}get params(){return N(A(this,ne))}set params(t){O(A(this,ne),t)}get route(){return N(A(this,re))}set route(t){O(A(this,re),t)}get state(){return N(A(this,ae))}set state(t){O(A(this,ae),t)}get status(){return N(A(this,oe))}set status(t){O(A(this,oe),t)}get url(){return N(A(this,se))}set url(t){O(A(this,se),t)}},Q=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ot),J=new(st=class{constructor(){P(this,ie,C(null))}get current(){return N(A(this,ie))}set current(t){O(A(this,ie),t)}},ie=new WeakMap,st),Ue=new(it=class{constructor(){P(this,ce,C(!1))}get current(){return N(A(this,ce))}set current(t){O(A(this,ce),t)}},ce=new WeakMap,it),gt.v=()=>Ue.current=!0);function _n(e){Object.assign(U,e)}const vn=new Set(["icon","shortcut icon","apple-touch-icon"]),F=ct(ft)??{},X=ct(lt)??{},$={url:Ze({}),page:Ze({}),navigating:Ne(null),updated:nn()};function Fe(e){F[e]=De()}function bn(e,t){let n=e+1;for(;F[n];)delete F[n],n+=1;for(n=t+1;X[n];)delete X[n],n+=1}function G(e){return location.href=e.href,new Promise(()=>{})}async function yt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function et(){}let Ae,xe,he,j,Ce,S;const pe=[],ge=[];let L=null;const wt=new Set,An=new Set,M=new Set;let _={branch:[],error:null,url:null},Ve=!1,me=!1,tt=!0,Z=!1,H=!1,_t=!1,Be=!1,vt,I,T,ye;const Y=new Set;async function Bn(e,t,n){var r,s,i,o;document.URL!==location.href&&(location.href=location.href),S=e,await((s=(r=e.hooks).init)==null?void 0:s.call(r)),Ae=Qt(e),j=document.documentElement,Ce=t,xe=e.nodes[0],he=e.nodes[1],xe(),he(),I=(i=history.state)==null?void 0:i[B],T=(o=history.state)==null?void 0:o[z],I||(I=T=Date.now(),history.replaceState({...history.state,[B]:I,[z]:T},""));const a=F[I];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await xn(Ce,n):Ln(S.hash?xt(new URL(location.href)):location.href,{replaceState:!0}),Pn()}function Sn(){pe.length=0,Be=!1}function bt(e){ge.some(t=>t==null?void 0:t.snapshot)&&(X[e]=ge.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function At(e){var t;(t=X[e])==null||t.forEach((n,a)=>{var r,s;(s=(r=ge[a])==null?void 0:r.snapshot)==null||s.restore(n)})}function nt(){Fe(I),Je(ft,F),bt(T),Je(lt,X)}async function Me(e,t,n,a){return K({type:"goto",url:dt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:a,accept:()=>{t.invalidateAll&&(Be=!0),t.invalidate&&t.invalidate.forEach(Tn)}})}async function kn(e){if(e.id!==(L==null?void 0:L.id)){const t={};Y.add(t),L={id:e.id,token:t,promise:kt({...e,preload:t}).then(n=>(Y.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Le(e){const t=Et(e);if(!t)return;const n=Ae.find(a=>a.exec(Rt(t)));n&&await Promise.all([...n.layouts,n.leaf].map(a=>a==null?void 0:a[1]()))}function St(e,t,n){var s;_=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(U,e.props.page),vt=new S.root({target:t,props:{...e.props,stores:$,components:ge},hydrate:n,sync:!1}),At(T);const r={from:null,to:{params:_.params,route:{id:((s=_.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(i=>i(r)),me=!0}function we({url:e,params:t,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(x&&(e.pathname===x||e.pathname===x+"/"))o="always";else for(const d of n)(d==null?void 0:d.slash)!==void 0&&(o=d.slash);e.pathname=jt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:r,route:s},props:{constructors:pn(n).map(d=>d.node.component),page:Ke(U)}};i!==void 0&&(c.props.form=i);let f={},h=!U,u=0;for(let d=0;d<Math.max(n.length,_.branch.length);d+=1){const m=n[d],l=_.branch[d];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(h=!0),m&&(f={...f,...m.data},h&&(c.props[`data_${u}`]=f),u+=1)}return(!_.url||e.href!==_.url.href||_.error!==r||i!==void 0&&i!==U.form||h)&&(c.props.page={error:r,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:h?f:U.data}),c}async function qe({loader:e,parent:t,url:n,params:a,route:r,server_data_node:s}){var h,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((h=f.universal)!=null&&h.load){let d=function(...l){for(const g of l){const{href:w}=new URL(g,n);c.dependencies.add(w)}};const m={route:new Proxy(r,{get:(l,g)=>(o&&(c.route=!0),l[g])}),params:new Proxy(a,{get:(l,g)=>(o&&c.params.add(g),l[g])}),data:(s==null?void 0:s.data)??null,url:Ft(n,()=>{o&&(c.url=!0)},l=>{o&&c.search_params.add(l)},S.hash),async fetch(l,g){let w;l instanceof Request?(w=l.url,g={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...g}):w=l;const R=new URL(w,n);return o&&d(R.href),R.origin===n.origin&&(w=R.href.slice(n.origin.length)),me?Wt(w,R.href,g):Kt(w,g)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(l){o=!1;try{return l()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:e,server:s,universal:(u=f.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function rt(e,t,n,a,r,s){if(Be)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==_.params[i])return!0;for(const i of r.dependencies)if(pe.some(o=>o(new URL(i))))return!0;return!1}function Ge(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function En(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const a of n){const r=e.searchParams.getAll(a),s=t.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}function at({error:e,url:t,route:n,params:a}){return{type:"loaded",state:{error:e,url:t,route:n,params:a,branch:[]},props:{page:Ke(U),constructors:[]}}}async function kt({id:e,invalidating:t,url:n,params:a,route:r,preload:s}){if((L==null?void 0:L.id)===e)return Y.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=r,f=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let h=null;const u=_.url?e!==_e(_.url):!1,y=_.route?r.id!==_.route.id:!1,d=En(_.url,n);let m=!1;const l=f.map((p,v)=>{var D;const k=_.branch[v],E=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||rt(m,y,u,d,(D=k.server)==null?void 0:D.uses,a));return E&&(m=!0),E});if(l.some(Boolean)){try{h=await Lt(n,l)}catch(p){const v=await q(p,{url:n,params:a,route:{id:e}});return Y.has(s)?at({error:v,url:n,params:a,route:r}):Se({status:de(p),error:v,url:n,route:r})}if(h.type==="redirect")return h}const g=h==null?void 0:h.nodes;let w=!1;const R=f.map(async(p,v)=>{var ke;if(!p)return;const k=_.branch[v],E=g==null?void 0:g[v];if((!E||E.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!rt(w,y,u,d,(ke=k.universal)==null?void 0:ke.uses,a))return k;if(w=!0,(E==null?void 0:E.type)==="error")throw E;return qe({loader:p[1],url:n,params:a,route:r,parent:async()=>{var Ye;const We={};for(let Ee=0;Ee<v;Ee+=1)Object.assign(We,(Ye=await R[Ee])==null?void 0:Ye.data);return We},server_data_node:Ge(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of R)p.catch(()=>{});const b=[];for(let p=0;p<f.length;p+=1)if(f[p])try{b.push(await R[p])}catch(v){if(v instanceof je)return{type:"redirect",location:v.location};if(Y.has(s))return at({error:await q(v,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let k=de(v),E;if(g!=null&&g.includes(v))k=v.status??k,E=v.error;else if(v instanceof ve)E=v.body;else{if(await $.updated.check())return await yt(),await G(n);E=await q(v,{params:a,url:n,route:{id:r.id}})}const D=await Rn(p,b,i);return D?we({url:n,params:a,branch:b.slice(0,D.idx).concat(D.node),status:k,error:E,route:r}):await Ut(n,{id:r.id},E,k)}else b.push(void 0);return we({url:n,params:a,branch:b,status:200,error:null,route:r,form:t?void 0:null})}async function Rn(e,t,n){for(;e--;)if(n[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Se({status:e,error:t,url:n,route:a}){const r={};let s=null;if(S.server_loads[0]===0)try{const o=await Lt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==le||n.pathname!==location.pathname||Ve)&&await G(n)}try{const o=await qe({loader:xe,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ge(s)}),c={node:await he(),loader:he,universal:null,server:null,data:null};return we({url:n,params:r,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof je)return Me(new URL(o.location,location.href),{},0);throw o}}function Et(e){let t;try{if(t=S.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);S.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}function He(e,t){if(!e||be(e,x,S.hash))return;const n=Et(e);if(!n)return;const a=Rt(n);for(const r of Ae){const s=r.exec(a);if(s)return{id:_e(e),invalidating:t,route:r,params:Dt(s),url:e}}}function Rt(e){return $t(S.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function _e(e){return(S.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function It({url:e,type:t,intent:n,delta:a}){let r=!1;const s=Pt(_,n,e,t);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return Z||wt.forEach(o=>o(i)),r?null:s}async function K({type:e,url:t,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=et,block:h=et}){const u=He(t,!1),y=It({url:t,type:e,delta:n==null?void 0:n.delta,intent:u});if(!y){h();return}const d=I,m=T;f(),Z=!0,me&&$.navigating.set(J.current=y.navigation),ye=c;let l=u&&await kt(u);if(!l){if(be(t,x,S.hash))return await G(t);l=await Ut(t,{id:null},await q(new Oe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(u==null?void 0:u.url)||t,ye!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(o>=20)l=await Se({status:500,error:await q(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Me(new URL(l.location,t).href,{},o+1,c),!1;else l.props.page.status>=400&&await $.updated.check()&&(await yt(),await G(t));if(Sn(),Fe(d),bt(m),l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const b=s?0:1,p={[B]:I+=b,[z]:T+=b,[ut]:i};(s?history.replaceState:history.pushState).call(history,p,"",t),s||bn(I,T)}if(L=null,l.props.page.state=i,me){_=l.state,l.props.page&&(l.props.page.url=t);const b=(await Promise.all(Array.from(An,p=>p(y.navigation)))).filter(p=>typeof p=="function");if(b.length>0){let p=function(){b.forEach(v=>{M.delete(v)})};b.push(p),b.forEach(v=>{M.add(v)})}vt.$set(l.props),_n(l.props.page),_t=!0}else St(l,Ce,!1);const{activeElement:g}=document;await Ot();const w=n?n.scroll:r?De():null;if(tt){const b=t.hash&&document.getElementById(decodeURIComponent(S.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));w?scrollTo(w.x,w.y):b?b.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==g&&document.activeElement!==document.body;!a&&!R&&Cn(),tt=!0,l.props.page&&Object.assign(U,l.props.page),Z=!1,e==="popstate"&&At(T),y.fulfil(void 0),M.forEach(b=>b(y.navigation)),$.navigating.set(J.current=null)}async function Ut(e,t,n,a){return e.origin===le&&e.pathname===location.pathname&&!Ve?await Se({status:a,error:n,url:e,route:t}):await G(e)}function In(){let e;j.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function t(s){s.defaultPrevented||a(s.composedPath()[0],1)}j.addEventListener("mousedown",t),j.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(Le(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function a(s,i){const o=pt(s,j);if(!o)return;const{url:c,external:f,download:h}=Pe(o,x,S.hash);if(f||h)return;const u=ue(o),y=c&&_e(_.url)===_e(c);if(!u.reload&&!y)if(i<=u.preload_data){const d=He(c,!1);d&&kn(d)}else i<=u.preload_code&&Le(c)}function r(){n.disconnect();for(const s of j.querySelectorAll("a")){const{url:i,external:o,download:c}=Pe(s,x,S.hash);if(o||c)continue;const f=ue(s);f.reload||(f.preload_code===fe.viewport&&n.observe(s),f.preload_code===fe.eager&&Le(i))}}M.add(r),r()}function q(e,t){if(e instanceof ve)return e.body;const n=de(e),a=yn(e);return S.hooks.handleError({error:e,event:t,status:n,message:a})??{message:a}}function Un(e,t){Te(()=>(e.add(t),()=>{e.delete(t)}))}function Mn(e){Un(M,e)}function Ln(e,t={}){return e=new URL(dt(e)),e.origin!==le?Promise.reject(new Error("goto: invalid URL")):Me(e,t,0)}function Tn(e){if(typeof e=="function")pe.push(e);else{const{href:t}=new URL(e,location.href);pe.push(n=>n.href===t)}}function Pn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(nt(),!Z){const r=Pt(_,void 0,null,"leave"),s={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};wt.forEach(i=>i(s))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&nt()}),(t=navigator.connection)!=null&&t.saveData||In(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=pt(n.composedPath()[0],j);if(!a)return;const{url:r,external:s,target:i,download:o}=Pe(a,x,S.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ue(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[h,u]=(S.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=h===Re(location);if(s||c.reload&&(!y||!u)){It({url:r,type:"link"})?Z=!0:n.preventDefault();return}if(u!==void 0&&y){const[,d]=_.url.href.split("#");if(d===u){if(n.preventDefault(),u===""||u==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=a.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(H=!0,Fe(I),e(r),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),K({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(be(o,x,!1))return;const c=n.target,f=ue(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),u=r==null?void 0:r.getAttribute("name");u&&h.append(u,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(h).toString(),K({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[B]){const r=n.state[B];if(ye={},r===I)return;const s=F[r],i=n.state[ut]??{},o=new URL(n.state[tn]??location.href),c=n.state[z],f=_.url?Re(location)===Re(_.url):!1;if(c===T&&(_t||f)){i!==U.state&&(U.state=i),e(o),F[I]=De(),s&&scrollTo(s.x,s.y),I=r;return}const u=r-I;await K({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{I=r,T=c},block:()=>{history.go(-u)},nav_token:ye})}else if(!H){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[B]:++I,[z]:T},"",location.href)):S.hash&&_.url.hash===location.hash&&K({type:"goto",url:xt(_.url)})});for(const n of document.querySelectorAll("link"))vn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(J.current=null)});function e(n){_.url=U.url=n,$.page.set(Ke(U)),$.page.notify()}}async function xn(e,{status:t=200,error:n,node_ids:a,params:r,route:s,data:i,form:o}){Ve=!0;const c=new URL(location.href);({params:r={},route:s={id:null}}=He(c,!1)||{});let f,h=!0;try{const u=a.map(async(m,l)=>{const g=i[l];return g!=null&&g.uses&&(g.uses=Tt(g.uses)),qe({loader:S.nodes[m],url:c,params:r,route:s,parent:async()=>{const w={};for(let R=0;R<l;R+=1)Object.assign(w,(await u[R]).data);return w},server_data_node:Ge(g)})}),y=await Promise.all(u),d=Ae.find(({id:m})=>m===s.id);if(d){const m=d.layouts;for(let l=0;l<m.length;l++)m[l]||y.splice(l,0,void 0)}f=we({url:c,params:r,branch:y,status:t,error:n,form:o,route:d??null})}catch(u){if(u instanceof je){await G(new URL(u.location,location.href));return}f=await Se({status:de(u),error:await q(u,{url:c,params:r,route:s}),url:c,route:s}),e.textContent="",h=!1}f.props.page&&(f.props.page.state={}),St(f,e,h)}async function Lt(e,t){var s;const n=new URL(e);n.pathname=Mt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(mn,"1"),n.searchParams.append(gn,t.map(i=>i?"1":"0").join(""));const a=window.fetch,r=await a(n.href,{});if(!r.ok){let i;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?i=await r.json():r.status===404?i="Not Found":r.status===500&&(i="Internal Error"),new ve(r.status,i)}return new Promise(async i=>{var y;const o=new Map,c=r.body.getReader(),f=new TextDecoder;function h(d){return dn(d,{...S.decoders,Promise:m=>new Promise((l,g)=>{o.set(m,{fulfil:l,reject:g})})})}let u="";for(;;){const{done:d,value:m}=await c.read();if(d&&!u)break;for(u+=!m&&u?`
`:f.decode(m,{stream:!0});;){const l=u.indexOf(`
`);if(l===-1)break;const g=JSON.parse(u.slice(0,l));if(u=u.slice(l+1),g.type==="redirect")return i(g);if(g.type==="data")(y=g.nodes)==null||y.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=Tt(w.uses),w.data=h(w.data))}),i(g);else if(g.type==="chunk"){const{id:w,data:R,error:b}=g,p=o.get(w);o.delete(w),b?p.reject(h(b)):p.fulfil(h(R))}}}})}function Tt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Cn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function Pt(e,t,n,a){var c,f;let r,s;const i=new Promise((h,u)=>{r=h,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((f=t==null?void 0:t.route)==null?void 0:f.id)??null},url:n},willUnload:!t,type:a,complete:i},fulfil:r,reject:s}}function Ke(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function xt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Mn as a,Bn as b,Ln as g,U as p,$ as s,Ue as u};
