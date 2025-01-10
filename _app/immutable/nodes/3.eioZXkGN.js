var Ft=Object.defineProperty;var wt=r=>{throw TypeError(r)};var Nt=(r,a,o)=>a in r?Ft(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o;var $t=(r,a,o)=>Nt(r,typeof a!="symbol"?a+"":a,o),nt=(r,a,o)=>a.has(r)||wt("Cannot "+o);var z=(r,a,o)=>(nt(r,a,"read from private field"),o?o.call(r):a.get(r)),G=(r,a,o)=>a.has(r)?wt("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(r):a.set(r,o),ct=(r,a,o,i)=>(nt(r,a,"write to private field"),i?i.call(r,o):a.set(r,o),o),zt=(r,a,o)=>(nt(r,a,"access private method"),o);import{c as dt,a as T,t as Q}from"../chunks/disclose-version.3Pz46OFs.js";import{i as Rt}from"../chunks/legacy.B7MPNEwZ.js";import{as as Vt,k as jt,y as E,x as Et,at as Ht,ac as yt,ad as Jt,z as R,A as Kt,q as t,M as g,B as b,D as $,C as _,au as lt,av as y,aw as kt}from"../chunks/runtime.Bj-i7OMA.js";import{e as O,s as Mt}from"../chunks/render.w-VL_9bp.js";import{i as ut}from"../chunks/if.4D9V27O5.js";import{s as q,I as V,S as Qt,C as te,p as ee,e as ae,a as k,m as ft,t as j,h as se}from"../chunks/Credit.CPSx_AEO.js";import{p as oe,s as re,a as Xt}from"../chunks/props.B3QeEbwl.js";import{a as ie}from"../chunks/entry.DhvXZNRn.js";import{b as vt}from"../chunks/control.BmD91WI5.js";var M,I,W,J,Yt;const K=class K{constructor(a){G(this,J);G(this,M,new WeakMap);G(this,I);G(this,W);ct(this,W,a)}observe(a,o){var i=z(this,M).get(a)||new Set;return i.add(o),z(this,M).set(a,i),zt(this,J,Yt).call(this).observe(a,z(this,W)),()=>{var x=z(this,M).get(a);x.delete(o),x.size===0&&(z(this,M).delete(a),z(this,I).unobserve(a))}}};M=new WeakMap,I=new WeakMap,W=new WeakMap,J=new WeakSet,Yt=function(){return z(this,I)??ct(this,I,new ResizeObserver(a=>{for(var o of a){K.entries.set(o.target,o);for(var i of z(this,M).get(o.target)||[])i(o)}}))},$t(K,"entries",new WeakMap);let pt=K;var ne=new pt({box:"border-box"});function ce(r,a,o){var i=ne.observe(r,()=>o(r[a]));Vt(()=>(jt(()=>o(r[a])),i))}const le=Math.PI/180;function fe(r,a,o){const i=H(r,a,o);return i[0]=Math.floor(i[0]),i[1]=Math.floor(i[1]),i}function H(r,a,o){const i=Math.sin(a*le),x=Math.pow(2,o);let m=x*(r/360+.5);const u=x*(.5-.25*Math.log((1+i)/(1-i))/Math.PI);return m=m%x,m<0&&(m=m+x),[m,u,o]}var ve=Q('<div class="spinner-container svelte-17inyt6"><div class="spinner-border svelte-17inyt6"><span class="visually-hidden svelte-17inyt6">Loading...</span></div></div>');function de(r,a){let o=oe(a,"isLoading",8,!0);var i=dt(),x=E(i);{var m=u=>{var tt=ve();T(u,tt)};ut(x,u=>{o()&&u(m)})}T(r,i)}var ue=Q('<button tabindex="-1" class="tile svelte-1s20svq"><img class="tile-img svelte-1s20svq" alt=""></button>'),pe=Q(" <!> tiles.",1),me=Q('<main class="svelte-1s20svq"><div class="flex-row svelte-1s20svq"><nav class="flex-left svelte-1s20svq">&lt; <a class="svelte-1s20svq">Any Map Puzzle</a></nav> <div class="flex-right svelte-1s20svq"><a class="icon-button zoom-button svelte-1s20svq" title="Zoom in"><!></a> <a class="icon-button zoom-button svelte-1s20svq" title="Zoom out"><!></a></div></div> <div class="flex-row svelte-1s20svq"><h1 class="flex-left svelte-1s20svq"> </h1> <div class="floating-icons flex-right svelte-1s20svq"><button class="icon-button svelte-1s20svq"><!>Shuffle</button> <button class="icon-button svelte-1s20svq"><!>Share</button> <!></div></div>  <div class="grid svelte-1s20svq"><!></div> <!></main>');function Me(r,a){Et(a,!1);const o=re(),i=()=>Xt(tt,"$config",o),x=()=>Xt(ee,"$page",o),m=y(),u=y(),tt=Ht("config"),d=i().gridSize,et=7-d;let h=y(),v,X=y(),mt=y(),L=y(!1),A=y(!1),B=y(!1),U=y(!1);function qt(e){const c=Math.floor(d/2),l=[e[0]-c,e[1]-c,e[2]].map(s=>s<0?0:s),f=[];for(let s=0;s<d;s++){const n=[];for(let p=0;p<d;p++){const S={i:p*d+s,x:s,y:p,cX:s,cY:p,xyz:[l[0]+s,l[1]+p,l[2]],blank:!1};n.push(S)}f.push(n)}return v=f[d-1][d-1],v.blank=!0,f}async function Tt(){t(h).flat().every(e=>e.x===e.cX&&e.y===e.cY)&&(g(B,!0),await new Promise(e=>setTimeout(e,200)),await window.confetti({particleCount:500,spread:360,scalar:1.5}))}function ht(e,c){const l={cX:e.cX,cY:e.cY};e.cX=c.cX,e.cY=c.cY,c.cX=l.cX,c.cY=l.cY,kt(h,t(h)[e.cX][e.cY]=e),kt(h,t(h)[c.cX][c.cY]=c)}function gt(e){if(t(B))return;const c=[];if(e.cX===v.cX){const l=e.cY-v.cY,f=Math.sign(l);for(let s=1;s<=Math.abs(l);s++)c.push(t(h)[v.cX][v.cY+s*f])}else if(e.cY===v.cY){const l=e.cX-v.cX,f=Math.sign(l);for(let s=1;s<=Math.abs(l);s++)c.push(t(h)[v.cX+s*f][v.cY])}for(const l of c)ht(l,v);Tt()}function At(e){var l,f,s,n,p,P,S,Y;const c=e.code;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(c)){e.preventDefault();let C;switch(c){case"ArrowUp":C=(f=(l=t(h))==null?void 0:l[v.cX])==null?void 0:f[v.cY+1];break;case"ArrowDown":C=(n=(s=t(h))==null?void 0:s[v.cX])==null?void 0:n[v.cY-1];break;case"ArrowLeft":C=(P=(p=t(h))==null?void 0:p[v.cX+1])==null?void 0:P[v.cY];break;case"ArrowRight":C=(Y=(S=t(h))==null?void 0:S[v.cX-1])==null?void 0:Y[v.cY];break}C&&gt(C)}}function Zt(e){let c;for(let l=0;l<e+e%2;l++){const f=[[-1,0],[1,0],[0,-1],[0,1]].map(s=>{var n,p;return(p=(n=t(h))==null?void 0:n[v.cX+s[0]])==null?void 0:p[v.cY+s[1]]}).filter(s=>s&&s.i!==(c==null?void 0:c.i));c=f[Math.floor(Math.random()*f.length)],ht(v,c)}}async function bt(){g(B,!1);const e=H(...i().place.bbox.slice(0,2),0),c=H(...i().place.bbox.slice(2),0);let l=0,f=[c[0]-e[0],e[1]-c[1]];for(;l<t(u).maxZoom&&f[0]<d&&f[1]<d;)f=f.map(n=>n*2),l++;t(m)&&(l=(()=>{let n=l+t(m);return n<2?2:n>t(u).maxZoom?t(u).maxZoom:n})()),g(X,l);const s=d%2===1?fe(...i().place.centroid,l):H(...i().place.centroid,l).map(n=>Math.round(n));if(g(h,qt(s)),Zt(Math.pow(d,3)),!t(L))try{(await fetch(t(u).url(...t(h)[0][0].xyz))).status===200?g(L,!0):g(A,!0)}catch{g(A,!0)}}ie(()=>{g(L,!1),g(A,!1),bt()}),yt(()=>i(),()=>{g(m,i().zoomOffset)}),yt(()=>i(),()=>{g(u,ft.find(e=>e.id===i().mapTiles)||ft[0])}),Jt(),Rt();var at=me(),st=b(at),ot=b(st),Pt=$(b(ot));q(Pt,"href",`${vt??""}/`),_(ot);var _t=$(ot,2),Z=b(_t),St=b(Z);V(St,{type:"zoomin"}),_(Z);var D=$(Z,2),Ct=b(D);V(Ct,{type:"zoomout"}),_(D),_(_t),_(st);var rt=$(st,2),it=b(rt),It=b(it,!0);_(it);var xt=$(it,2),F=b(xt),Lt=b(F);V(Lt,{type:"shuffle",margin:!0}),lt(),_(F);var N=$(F,2),Dt=b(N);V(Dt,{type:"share",margin:!0}),lt(),_(N);var Gt=$(N,2);Qt(Gt,{get message(){return`Try this ${i().place.name??""} map puzzle %23AnyMapPuzzle`},get url(){return x().url.href},get open(){return t(U)},set open(e){g(U,e)},$$legacy:!0}),_(xt),_(rt);var w=$(rt,2),Ot=b(w);{var Wt=e=>{var c=dt(),l=E(c);ae(l,1,()=>t(h).flat().sort((f,s)=>f.i-s.i),f=>f.i,(f,s)=>{var n=ue();k(n,"width",`calc(${100/d}% - ${et??""}px)`),k(n,"height",`calc(${100/d}% - ${et??""}px)`);var p=b(n);R(()=>q(p,"src",t(u).url(...t(s).xyz))),_(n),R(()=>{j(n,"blank",t(s).blank&&!t(B)),j(n,"fade-in",t(s).blank),k(n,"left",`${100*(t(s).cX/d)}%`),k(n,"top",`${100*(t(s).cY/d)}%`)}),O("click",n,()=>gt(t(s))),T(f,n)}),T(e,c)},Bt=e=>{var c=dt(),l=E(c);{var f=n=>{var p=pe(),P=E(p),S=$(P);se(S,()=>ft.filter(Y=>Y.id!==t(u).id).map(Y=>`<a href="${x().url.href.replace(t(u).id,Y.id)}">${Y.label}</a>`).join(" or ")),lt(),R(()=>Mt(P,`${t(u).label??""}
			map tiles not available for this area. Try zooming out or using `)),T(n,p)},s=n=>{de(n,{})};ut(l,n=>{t(A)?n(f):n(s,!1)},!0)}T(e,c)};ut(Ot,e=>{t(L)?e(Wt):e(Bt,!1)})}_(w);var Ut=$(w,2);te(Ut,{get attribution(){return t(u).attribution}}),_(at),R(()=>{q(Z,"tabindex",t(X)>=t(u).maxZoom?"-1":null),q(Z,"href",`${vt??""}/${i().place.code??""}?maptiles=${t(u).id??""}&gridsize=${d??""}${(t(m)+1?`&zoom=${t(m)+1}`:"")??""}`),j(Z,"disabled",t(X)>=t(u).maxZoom),q(D,"tabindex",d<=4&&t(X)<3||d>4&&t(X)<4?"-1":null),q(D,"href",`${vt??""}/${i().place.code??""}?maptiles=${t(u).id??""}&gridsize=${d??""}${(t(m)-1?`&zoom=${t(m)-1}`:"")??""}`),j(D,"disabled",d<=4&&t(X)<3||d>4&&t(X)<4),Mt(It,i().place.name),q(w,"tabindex",t(L)?"0":null),k(w,"height",`${(t(mt)||100)??""}px`),k(w,"margin-right",`-${et??""}px`),k(w,"background",t(A)?"#ddd":null),k(w,"padding",t(A)?"12px":null)}),O("click",F,bt),O("click",N,()=>g(U,!t(U))),ce(w,"clientWidth",e=>g(mt,e)),O("focus",w,e=>e.target.scrollIntoView()),O("keydown",w,At),T(r,at),Kt()}export{Me as component};