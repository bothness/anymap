import{ae as ca,b as aa,h as M,s as R,a as Z,j as fa,av as ea,H as ua,r as Y,c as P,f as L,aC as O,d as ta,e as W,p as va,X as F,aD as ha,aE as pa,au as da,aF as ga,aG as ra,af as sa,ar as _a,ak as ba,$ as ma,T as U,aH as ya,aI as wa,aJ as ka,ap as ia,as as Ma,aq as za,Z as Sa,aK as Aa,aL as Ca,z as na,B as w,C as k,x as Ea,y as Ta,A as Ia,q as La,D as S,O as xa,M as q,N as Ha}from"./runtime.D7Av2bsv.js";import{s as $a}from"./entry.DKtkF3fq.js";import{b as K,e as Va,a as V,n as Na,t as D}from"./disclose-version.99O-hdS6.js";import{i as Ra}from"./legacy.DWlfCNZp.js";import{e as X}from"./render.DAZ0GJAO.js";import{i as J}from"./if.Daf_QZpO.js";import{p as x}from"./props.rWO465ez.js";function se(e,a){return a}function Oa(e,a,t,r){for(var s=[],l=a.length,n=0;n<l;n++)pa(a[n].e,s,!0);var h=l>0&&s.length===0&&t!==null;if(h){var v=t.parentNode;da(v),v.append(t),r.clear(),T(e,a[0].prev,a[l-1].next)}ga(s,()=>{for(var p=0;p<l;p++){var d=a[p];h||(r.delete(d.k),T(e,d.prev,d.next)),ra(d.e,!h)}})}function ie(e,a,t,r,s,l=null){var n=e,h={flags:a,items:new Map,first:null};{var v=e;n=M?R(sa(v)):v.appendChild(ca())}M&&Z();var p=null,d=!1;aa(()=>{var i=t(),u=fa(i)?i:i==null?[]:ea(i),o=u.length;if(d&&o===0)return;d=o===0;let c=!1;if(M){var b=n.data===ua;b!==(o===0)&&(n=Y(),R(n),P(!1),c=!0)}if(M){for(var m=null,y,f=0;f<o;f++){if(L.nodeType===8&&L.data===_a){n=L,c=!0,P(!1);break}var g=u[f],z=r(g,f);y=oa(L,h,m,null,g,z,f,s,a),h.items.set(z,y),m=y}o>0&&R(Y())}if(!M){var A=ba;Da(u,h,n,s,a,(A.f&O)!==0,r)}l!==null&&(o===0?p?ta(p):p=W(()=>l(n)):p!==null&&va(p,()=>{p=null})),c&&P(!0),t()}),M&&(n=L)}function Da(e,a,t,r,s,l,n,h){var v=e.length,p=a.items,d=a.first,i=d,u,o=null,c=[],b=[],m,y,f,g;for(g=0;g<v;g+=1){if(m=e[g],y=n(m,g),f=p.get(y),f===void 0){var z=i?i.e.nodes_start:t;o=oa(z,a,o,o===null?a.first:o.next,m,y,g,r,s),p.set(y,o),c=[],b=[],i=o.next;continue}if(Ba(f,m,g),f.e.f&O&&ta(f.e),f!==i){if(u!==void 0&&u.has(f)){if(c.length<b.length){var A=b[0],_;o=A.prev;var N=c[0],C=c[c.length-1];for(_=0;_<c.length;_+=1)Q(c[_],A,t);for(_=0;_<b.length;_+=1)u.delete(b[_]);T(a,N.prev,C.next),T(a,o,N),T(a,C,A),i=A,o=C,g-=1,c=[],b=[]}else u.delete(f),Q(f,i,t),T(a,f.prev,f.next),T(a,f,o===null?a.first:o.next),T(a,o,f),o=f;continue}for(c=[],b=[];i!==null&&i.k!==y;)(l||!(i.e.f&O))&&(u??(u=new Set)).add(i),b.push(i),i=i.next;if(i===null)continue;f=i}c.push(f),o=f,i=f.next}if(i!==null||u!==void 0){for(var $=u===void 0?[]:ea(u);i!==null;)(l||!(i.e.f&O))&&$.push(i),i=i.next;var H=$.length;if(H>0){var B=v===0?t:null;Oa(a,$,B,p)}}F.first=a.first&&a.first.e,F.last=o&&o.e}function Ba(e,a,t,r){ha(e.v,a),e.i=t}function oa(e,a,t,r,s,l,n,h,v,p){var d=(v&wa)!==0,i=(v&ka)===0,u=d?i?ma(s):U(s):s,o=v&ya?U(n):n,c={i:o,v:u,k:l,a:null,e:null,prev:t,next:r};try{return c.e=W(()=>h(e,u,o),M),c.e.prev=t&&t.e,c.e.next=r&&r.e,t===null?a.first=c:(t.next=c,t.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{}}function Q(e,a,t){for(var r=e.next?e.next.e.nodes_start:t,s=a?a.e.nodes_start:t,l=e.e.nodes_start;l!==r;){var n=ia(l);s.before(l),l=n}}function T(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function Ga(e,a,t,r,s){var l=e,n="",h;aa(()=>{if(n===(n=a()??"")){M&&Z();return}h!==void 0&&(ra(h),h=void 0),n!==""&&(h=W(()=>{if(M){L.data;for(var v=Z(),p=v;v!==null&&(v.nodeType!==8||v.data!=="");)p=v,v=ia(v);if(v===null)throw Ma(),za;K(L,p),l=R(v);return}var d=n+"",i=Va(d);K(sa(i),i.lastChild),l.before(i)}))})}function I(e,a,t,r){var s=e.__attributes??(e.__attributes={});M&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||s[a]!==(s[a]=t)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Ca]=t),t==null?e.removeAttribute(a):typeof t!="string"&&Pa(e).includes(a)?e[a]=t:e.setAttribute(a,t))}var j=new Map;function Pa(e){var a=j.get(e.nodeName);if(a)return a;j.set(e.nodeName,a=[]);for(var t,r=e,s=Element.prototype;s!==r;){t=Aa(r);for(var l in t)t[l].set&&a.push(l);r=Sa(r)}return a}function Za(e,a,t){if(t){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}function Wa(e,a,t,r){var s=e.__styles??(e.__styles={});s[a]!==t&&(s[a]=t,t==null?e.style.removeProperty(a):e.style.setProperty(a,t,""))}const Ya=()=>{const e=$a;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},ne={subscribe(e){return Ya().page.subscribe(e)}},oe=[{id:"watercolor",label:"Stamen Watercolor",url:(e,a,t)=>`https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/${t}/${e}/${a}.jpg`,attribution:'Map tiles by <a target="_blank" href="http://maps.stamen.com">Stamen Design</a>. Data by <a target="_blank" href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>.',maxZoom:16},{id:"osm",label:"OpenStreetMap",url:(e,a,t)=>`https://a.tile.openstreetmap.org/${t}/${e}/${a}.png`,attribution:'Map tiles by <a target="_blank" href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>.',maxZoom:19},{id:"aerial",label:"ESRI World Imagery",url:(e,a,t)=>`https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/${t}/${a}/${e}?blankTile=false`,attribution:'<a target="_blank" href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">Aerial imagery</a> by Esri, Maxar, Earthstar Geographics, and the GIS User Community.',maxZoom:19}],le=[{label:"Easy (3 x 3)",gridSize:3},{label:"Medium (4 x 4)",gridSize:4},{label:"Hard (5 x 5)",gridSize:5},{label:"Very hard (6 x 6)",gridSize:6}];var Fa=Na('<svg class="ico svelte-t48n61" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" aria-hidden="true" focusable="false"><path></path></svg>');function E(e,a){let t=x(a,"type",8,"compass"),r=x(a,"rotation",8,0),s=x(a,"margin",8,!1);const l={info:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z",zoomin:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z",zoomout:"M19 13H5v-2h14z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z",share:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",link:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5",twitter:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",facebook:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z",email:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",whatsapp:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z",reddit:"M22 12.14a2.19 2.19 0 0 0-3.71-1.57 10.93 10.93 0 0 0-5.86-1.87l1-4.7 3.27.71a1.56 1.56 0 1 0 .16-.76l-3.64-.77c-.11-.02-.22 0-.29.06-.09.05-.14.14-.16.26l-1.11 5.22c-2.33.07-4.43.78-5.95 1.86A2.2 2.2 0 0 0 4.19 10a2.16 2.16 0 0 0-.9 4.15 3.6 3.6 0 0 0-.05.66c0 3.37 3.92 6.12 8.76 6.12s8.76-2.73 8.76-6.12c0-.21-.01-.44-.05-.66A2.21 2.21 0 0 0 22 12.14M7 13.7c0-.86.68-1.56 1.54-1.56s1.56.7 1.56 1.56a1.56 1.56 0 0 1-1.56 1.56c-.86.02-1.54-.7-1.54-1.56m8.71 4.14C14.63 18.92 12.59 19 12 19c-.61 0-2.65-.1-3.71-1.16a.4.4 0 0 1 0-.57.4.4 0 0 1 .57 0c.68.68 2.14.91 3.14.91s2.47-.23 3.14-.91a.4.4 0 0 1 .57 0c.14.16.14.41 0 .57m-.29-2.56c-.86 0-1.56-.7-1.56-1.56a1.56 1.56 0 0 1 1.56-1.56c.86 0 1.58.7 1.58 1.56a1.6 1.6 0 0 1-1.58 1.56z",bluesky:"M 5.202 2.922 C 7.9545 4.9875 10.914 9.177 12 11.424 c 1.0875 -2.247 4.0455 -6.435 6.798 -8.502 C 20.7825 1.4325 24 0.279 24 3.948 c 0 0.7335 -0.42 6.1575 -0.666 7.038 c -0.858 3.06 -3.9795 3.8415 -6.756 3.369 c 4.854 0.8265 6.09 3.5625 3.4215 6.3 c -5.064 5.196 -7.278 -1.305 -7.845 -2.97 c -0.105 -0.306 -0.1545 -0.45 -0.1545 -0.327 c 0 -0.1215 -0.0495 0.021 -0.153 0.327 c -0.5685 1.665 -2.7825 8.166 -7.8465 2.97 c -2.667 -2.7375 -1.4325 -5.475 3.42 -6.3 c -2.775 0.4725 -5.898 -0.3075 -6.7545 -3.369 C 0.42 10.1055 0 4.68 0 3.948 C 0 0.279 3.2175 1.4325 5.202 2.922 Z"};var n=Fa(),h=w(n);k(n),na(()=>{Za(n,"margin",s()),Wa(n,"transform",`scale(1.2) rotate(${-r()}deg)`),I(h,"d",l[t()])}),V(e,n)}var Ua=D('<div class="share-icons svelte-1hvg8rz"><button class="icon-button" title="Copy sharing link"><!></button> <a target="_blank" class="icon-button" title="Share on Bluesky"><!></a> <a target="_blank" class="icon-button" title="Share on Reddit"><!></a> <a target="_blank" class="icon-button" title="Share on Whatsapp"><!></a> <a target="_blank" class="icon-button" title="Share on Twitter"><!></a> <a target="_blank" class="icon-button" title="Share on Facebook"><!></a> <a target="_blank" class="icon-button" title="Share by Email"><!></a> <button class="icon-button"><!></button></div>'),qa=D('<div class="copied-message svelte-1hvg8rz">Copied to clipboard!</div>'),Ka=D("<!> <!>",1);function ce(e,a){Ea(a,!1);let t=x(a,"open",12,!1),r=x(a,"message",8,""),s=x(a,"url",8,""),l=xa(!1);async function n(){try{await navigator.clipboard.writeText(`${decodeURIComponent(r())} ${s()}`),t(!1),q(l,!0),await new Promise(u=>setTimeout(u,4e3)),q(l,!1)}catch(u){console.error("Failed to copy: ",u)}}Ra();var h=Ka(),v=Ta(h);{var p=u=>{var o=Ua(),c=w(o),b=w(c);E(b,{type:"link",margin:!0}),k(c);var m=S(c,2),y=w(m);E(y,{type:"bluesky",margin:!0}),k(m);var f=S(m,2),g=w(f);E(g,{type:"reddit",margin:!0}),k(f);var z=S(f,2),A=w(z);E(A,{type:"whatsapp",margin:!0}),k(z);var _=S(z,2),N=w(_);E(N,{type:"twitter",margin:!0}),k(_);var C=S(_,2),$=w(C);E($,{type:"facebook",margin:!0}),k(C);var H=S(C,2),B=w(H);E(B,{type:"email",margin:!0}),k(H);var G=S(H,2),la=w(G);E(la,{type:"close"}),k(G),k(o),na(()=>{I(m,"href",`https://bsky.app/intent/compose?text=${r()??""} ${s()??""}`),I(f,"href",`https://reddit.com/submit?title=${r()??""}&url=${s()??""}`),I(z,"href",`whatsapp://send?text=${r()??""} ${s()??""}`),I(_,"href",`https://twitter.com/intent/tweet?text=${r()??""}&url=${s()??""}`),I(C,"href",`https://www.facebook.com/sharer/sharer.php?u=${s()??""}`),I(H,"href",`mailto:?subject=${r()??""}&body=${s()??""}`)}),X("click",c,n),X("click",G,()=>t(!1)),V(u,o)};J(v,u=>{t()&&u(p)})}var d=S(v,2);{var i=u=>{var o=qa();V(u,o)};J(d,u=>{La(l)&&u(i)})}V(e,h),Ia()}var Xa=D(`<p class="credit svelte-n069wr">Any Map Puzzle was designed and coded by <a target="_blank" href="https://bsky.app/profile/bothness.bsky.social">Ahmad Barclay</a>, inspired by Eugene Alvin Villar's <a target="_blank" href="https://seav.github.io/osm-15-puzzle/">OSM 15 Puzzle</a>. Area search
	powered by <a target="_blank" href="https://nominatim.org/">Nominatim</a>. <!>.
	Get the <a target="_blank" href="https://github.com/bothness/anymap/">source code</a> on Github.</p>`);function fe(e,a){let t=x(a,"attribution",8);var r=Xa(),s=S(w(r),7);Ga(s,t),Ha(3),k(r),V(e,r)}export{fe as C,E as I,ce as S,Wa as a,le as d,ie as e,Ga as h,se as i,oe as m,ne as p,I as s,Za as t};
