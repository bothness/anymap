import{ac as ge,b as te,h as M,s as O,a as Z,j as _e,av as re,H as be,r as F,c as P,f as L,aC as $,d as se,e as Y,p as me,V as K,aD as ye,aE as ke,au as we,aF as Me,aG as ie,ad as ne,ar as ze,ak as Se,Z as Ae,Q as U,aH as Ce,aI as Ee,aJ as Ie,ap as le,as as Te,aq as xe,X as Le,aK as He,aL as Ve,x as oe,ah as Re,ai as Ne,z as ce,A as fe,B as k,C as w,K as W,t as q,q as ue,M as ve,y as Oe,D as S}from"./runtime.DTQ_9slk.js";import{s as $e}from"./entry.XcfkqChI.js";import{b as X,e as De,a as R,n as Be,t as D}from"./disclose-version.CBFeP9qm.js";import{i as pe}from"./legacy.CeR6iruq.js";import{e as J}from"./render.D9G3lN37.js";import{i as Q}from"./if.BUlbJtog.js";import{p as A}from"./props.BkfbzHDM.js";function ia(a,e){return e}function Ge(a,e,t,r){for(var s=[],l=e.length,f=0;f<l;f++)ke(e[f].e,s,!0);var h=l>0&&s.length===0&&t!==null;if(h){var u=t.parentNode;we(u),u.append(t),r.clear(),T(a,e[0].prev,e[l-1].next)}Me(s,()=>{for(var v=0;v<l;v++){var d=e[v];h||(r.delete(d.k),T(a,d.prev,d.next)),ie(d.e,!h)}})}function na(a,e,t,r,s,l=null){var f=a,h={flags:e,items:new Map,first:null};{var u=a;f=M?O(ne(u)):u.appendChild(ge())}M&&Z();var v=null,d=!1;te(()=>{var i=t(),p=_e(i)?i:i==null?[]:re(i),n=p.length;if(d&&n===0)return;d=n===0;let o=!1;if(M){var b=f.data===be;b!==(n===0)&&(f=F(),O(f),P(!1),o=!0)}if(M){for(var m=null,y,c=0;c<n;c++){if(L.nodeType===8&&L.data===ze){f=L,o=!0,P(!1);break}var g=p[c],z=r(g,c);y=he(L,h,m,null,g,z,c,s,e),h.items.set(z,y),m=y}n>0&&O(F())}if(!M){var C=Se;Pe(p,h,f,s,e,(C.f&$)!==0,r)}l!==null&&(n===0?v?se(v):v=Y(()=>l(f)):v!==null&&me(v,()=>{v=null})),o&&P(!0),t()}),M&&(f=L)}function Pe(a,e,t,r,s,l,f,h){var u=a.length,v=e.items,d=e.first,i=d,p,n=null,o=[],b=[],m,y,c,g;for(g=0;g<u;g+=1){if(m=a[g],y=f(m,g),c=v.get(y),c===void 0){var z=i?i.e.nodes_start:t;n=he(z,e,n,n===null?e.first:n.next,m,y,g,r,s),v.set(y,n),o=[],b=[],i=n.next;continue}if(Ze(c,m,g),c.e.f&$&&se(c.e),c!==i){if(p!==void 0&&p.has(c)){if(o.length<b.length){var C=b[0],_;n=C.prev;var N=o[0],E=o[o.length-1];for(_=0;_<o.length;_+=1)j(o[_],C,t);for(_=0;_<b.length;_+=1)p.delete(b[_]);T(e,N.prev,E.next),T(e,n,N),T(e,E,C),i=C,n=E,g-=1,o=[],b=[]}else p.delete(c),j(c,i,t),T(e,c.prev,c.next),T(e,c,n===null?e.first:n.next),T(e,n,c),n=c;continue}for(o=[],b=[];i!==null&&i.k!==y;)(l||!(i.e.f&$))&&(p??(p=new Set)).add(i),b.push(i),i=i.next;if(i===null)continue;c=i}o.push(c),n=c,i=c.next}if(i!==null||p!==void 0){for(var V=p===void 0?[]:re(p);i!==null;)(l||!(i.e.f&$))&&V.push(i),i=i.next;var H=V.length;if(H>0){var B=u===0?t:null;Ge(e,V,B,v)}}K.first=e.first&&e.first.e,K.last=n&&n.e}function Ze(a,e,t,r){ye(a.v,e),a.i=t}function he(a,e,t,r,s,l,f,h,u,v){var d=(u&Ee)!==0,i=(u&Ie)===0,p=d?i?Ae(s):U(s):s,n=u&Ce?U(f):f,o={i:n,v:p,k:l,a:null,e:null,prev:t,next:r};try{return o.e=Y(()=>h(a,p,n),M),o.e.prev=t&&t.e,o.e.next=r&&r.e,t===null?e.first=o:(t.next=o,t.e.next=o.e),r!==null&&(r.prev=o,r.e.prev=o.e),o}finally{}}function j(a,e,t){for(var r=a.next?a.next.e.nodes_start:t,s=e?e.e.nodes_start:t,l=a.e.nodes_start;l!==r;){var f=le(l);s.before(l),l=f}}function T(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function We(a,e,t,r,s){var l=a,f="",h;te(()=>{if(f===(f=e()??"")){M&&Z();return}h!==void 0&&(ie(h),h=void 0),f!==""&&(h=Y(()=>{if(M){L.data;for(var u=Z(),v=u;u!==null&&(u.nodeType!==8||u.data!=="");)v=u,u=le(u);if(u===null)throw Te(),xe;X(L,v),l=O(u);return}var d=f+"",i=De(d);X(ne(i),i.lastChild),l.before(i)}))})}function x(a,e,t,r){var s=a.__attributes??(a.__attributes={});M&&(s[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Ve]=t),t==null?a.removeAttribute(e):typeof t!="string"&&Ye(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var ee=new Map;function Ye(a){var e=ee.get(a.nodeName);if(e)return e;ee.set(a.nodeName,e=[]);for(var t,r=a,s=Element.prototype;s!==r;){t=He(r);for(var l in t)t[l].set&&e.push(l);r=Le(r)}return e}function ae(a,e,t){if(t){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function la(a,e,t,r){var s=a.__styles??(a.__styles={});s[e]!==t&&(s[e]=t,t==null?a.style.removeProperty(e):a.style.setProperty(e,t,""))}const Fe=()=>{const a=$e;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},oa={subscribe(a){return Fe().page.subscribe(a)}},ca=[{id:"watercolor",label:"Stamen Watercolor",url:(a,e,t)=>`https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/${t}/${a}/${e}.jpg`,attribution:'Map tiles by <a target="_blank" href="http://maps.stamen.com">Stamen Design</a>. Data by <a target="_blank" href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>.',maxZoom:16},{id:"osm",label:"OpenStreetMap",url:(a,e,t)=>`https://a.tile.openstreetmap.org/${t}/${a}/${e}.png`,attribution:'Map tiles by <a target="_blank" href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>.',maxZoom:19},{id:"aerial",label:"ESRI World Imagery",url:(a,e,t)=>`https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/${t}/${e}/${a}?blankTile=false`,attribution:'<a target="_blank" href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">Aerial imagery</a> by Esri, Maxar, Earthstar Geographics, and the GIS User Community.',maxZoom:19}],fa=[{label:"Easy (3 x 3)",gridSize:3},{label:"Medium (4 x 4)",gridSize:4},{label:"Hard (5 x 5)",gridSize:5},{label:"Very hard (6 x 6)",gridSize:6}];var Ke=Be('<svg class="ico svelte-175xtay" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true" focusable="false"><path></path></svg>');function I(a,e){oe(e,!1);const t=ve();let r=A(e,"type",8,"compass"),s=A(e,"rotation",8,0),l=A(e,"position",8,"inline"),f=A(e,"clickable",8,!1),h=A(e,"margin",8,!1);const u={info:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z",share:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",link:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5",twitter:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",facebook:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z",email:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",whatsapp:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z",reddit:"M22 12.14a2.19 2.19 0 0 0-3.71-1.57 10.93 10.93 0 0 0-5.86-1.87l1-4.7 3.27.71a1.56 1.56 0 1 0 .16-.76l-3.64-.77c-.11-.02-.22 0-.29.06-.09.05-.14.14-.16.26l-1.11 5.22c-2.33.07-4.43.78-5.95 1.86A2.2 2.2 0 0 0 4.19 10a2.16 2.16 0 0 0-.9 4.15 3.6 3.6 0 0 0-.05.66c0 3.37 3.92 6.12 8.76 6.12s8.76-2.73 8.76-6.12c0-.21-.01-.44-.05-.66A2.21 2.21 0 0 0 22 12.14M7 13.7c0-.86.68-1.56 1.54-1.56s1.56.7 1.56 1.56a1.56 1.56 0 0 1-1.56 1.56c-.86.02-1.54-.7-1.54-1.56m8.71 4.14C14.63 18.92 12.59 19 12 19c-.61 0-2.65-.1-3.71-1.16a.4.4 0 0 1 0-.57.4.4 0 0 1 .57 0c.68.68 2.14.91 3.14.91s2.47-.23 3.14-.91a.4.4 0 0 1 .57 0c.14.16.14.41 0 .57m-.29-2.56c-.86 0-1.56-.7-1.56-1.56a1.56 1.56 0 0 1 1.56-1.56c.86 0 1.58.7 1.58 1.56a1.6 1.6 0 0 1-1.58 1.56z",bluesky:"M 5.202 2.922 C 7.9545 4.9875 10.914 9.177 12 11.424 c 1.0875 -2.247 4.0455 -6.435 6.798 -8.502 C 20.7825 1.4325 24 0.279 24 3.948 c 0 0.7335 -0.42 6.1575 -0.666 7.038 c -0.858 3.06 -3.9795 3.8415 -6.756 3.369 c 4.854 0.8265 6.09 3.5625 3.4215 6.3 c -5.064 5.196 -7.278 -1.305 -7.845 -2.97 c -0.105 -0.306 -0.1545 -0.45 -0.1545 -0.327 c 0 -0.1215 -0.0495 0.021 -0.153 0.327 c -0.5685 1.665 -2.7825 8.166 -7.8465 2.97 c -2.667 -2.7375 -1.4325 -5.475 3.42 -6.3 c -2.775 0.4725 -5.898 -0.3075 -6.7545 -3.369 C 0.42 10.1055 0 4.68 0 3.948 C 0 0.279 3.2175 1.4325 5.202 2.922 Z"};Re(()=>(q(s()),q(l())),()=>{W(t,`transform: scale(1.2) rotate(${-s()}deg);${["left","right"].includes(l())?` position: absolute; ${l()}: 10px;`:""}`)}),Ne(),pe();var v=Ke(),d=k(v);w(v),ce(()=>{x(v,"style",ue(t)),ae(v,"margin",h()),ae(v,"noclick",!f()),x(d,"d",u[r()])}),R(a,v),fe()}var Ue=D('<div class="share-icons svelte-1hvg8rz"><button class="icon-button" title="Copy sharing link"><!></button> <a target="_blank" class="icon-button" title="Share on Bluesky"><!></a> <a target="_blank" class="icon-button" title="Share on Reddit"><!></a> <a target="_blank" class="icon-button" title="Share on Whatsapp"><!></a> <a target="_blank" class="icon-button" title="Share on Twitter"><!></a> <a target="_blank" class="icon-button" title="Share on Facebook"><!></a> <a target="_blank" class="icon-button" title="Share by Email"><!></a> <button class="icon-button"><!></button></div>'),qe=D('<div class="copied-message svelte-1hvg8rz">Copied to clipboard!</div>'),Xe=D("<!> <!>",1);function ua(a,e){oe(e,!1);let t=A(e,"open",12,!1),r=A(e,"message",8,""),s=A(e,"url",8,""),l=ve(!1);async function f(){try{await navigator.clipboard.writeText(`${decodeURIComponent(r())} ${s()}`),t(!1),W(l,!0),await new Promise(p=>setTimeout(p,4e3)),W(l,!1)}catch(p){console.error("Failed to copy: ",p)}}pe();var h=Xe(),u=Oe(h);{var v=p=>{var n=Ue(),o=k(n),b=k(o);I(b,{type:"link",margin:!0}),w(o);var m=S(o,2),y=k(m);I(y,{type:"bluesky",margin:!0}),w(m);var c=S(m,2),g=k(c);I(g,{type:"reddit",margin:!0}),w(c);var z=S(c,2),C=k(z);I(C,{type:"whatsapp",margin:!0}),w(z);var _=S(z,2),N=k(_);I(N,{type:"twitter",margin:!0}),w(_);var E=S(_,2),V=k(E);I(V,{type:"facebook",margin:!0}),w(E);var H=S(E,2),B=k(H);I(B,{type:"email",margin:!0}),w(H);var G=S(H,2),de=k(G);I(de,{type:"close"}),w(G),w(n),ce(()=>{x(m,"href",`https://bsky.app/intent/compose?text=${r()??""} ${s()??""}`),x(c,"href",`https://reddit.com/submit?title=${r()??""}&url=${s()??""}`),x(z,"href",`whatsapp://send?text=${r()??""} ${s()??""}`),x(_,"href",`https://twitter.com/intent/tweet?text=${r()??""}&url=${s()??""}`),x(E,"href",`https://www.facebook.com/sharer/sharer.php?u=${s()??""}`),x(H,"href",`mailto:?subject=${r()??""}&body=${s()??""}`)}),J("click",o,f),J("click",G,()=>t(!1)),R(p,n)};Q(u,p=>{t()&&p(v)})}var d=S(u,2);{var i=p=>{var n=qe();R(p,n)};Q(d,p=>{ue(l)&&p(i)})}R(a,h),fe()}var Je=D(`<p class="credit svelte-1nwfbb5">Any Map Puzzle was designed and coded by <a target="_blank" href="https://bsky.app/profile/bothness.bsky.social">Ahmad Barclay</a>, inspired by Eugene Alvin Villar's <a target="_blank" href="https://seav.github.io/osm-15-puzzle/">OSM 15 Puzzle</a>. Get the <a target="_blank" href="https://github.com/bothness/anymap/">source code</a> on Github. Area search powered by <a target="_blank" href="https://nominatim.org/">Nominatim</a>. <!></p>`);function va(a,e){let t=A(e,"attribution",8);var r=Je(),s=S(k(r),9);We(s,t),w(r),R(a,r)}export{va as C,I,ua as S,la as a,fa as d,na as e,We as h,ia as i,ca as m,oa as p,x as s,ae as t};
