import{a as T,t as C}from"../chunks/disclose-version.CBFeP9qm.js";import{i as ce}from"../chunks/legacy.CeR6iruq.js";import{I as X,k as he,x as ue,y as ye,z as y,A as ve,B as d,C as u,D as _,J as we,ah as N,ai as Se,q as i,K as h,L as xe,M as V,a9 as te,aB as ae}from"../chunks/runtime.DTQ_9slk.js";import{l as ze,s as Q,e as re}from"../chunks/render.D9G3lN37.js";import{i as pe}from"../chunks/if.BUlbJtog.js";import{s as W,a as ke,I as Te,S as Ce,e as le,C as qe,p as De,i as se,m as U,d as G}from"../chunks/Credit.paALa4g2.js";import{i as Oe,p as b,s as je,a as ie}from"../chunks/props.BkfbzHDM.js";import{b as Ae}from"../chunks/control.cx0Pu6wL.js";import{g as Ee}from"../chunks/entry.sYQ-1Cic.js";import{c as Ie}from"../chunks/index-client.Zs5LPVau.js";function Le(e,t,s){X(()=>{var l=he(()=>t(e,s==null?void 0:s())||{});if(l!=null&&l.destroy)return()=>l.destroy()})}function de(e,t,s){if(e.multiple)return Pe(e,t);for(var l of e.options){var n=E(l);if(Oe(n,t)){l.selected=!0;return}}(!s||t!==void 0)&&(e.selectedIndex=-1)}function Me(e,t){X(()=>{var s=new MutationObserver(()=>{var l=e.__value;de(e,l)});return s.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{s.disconnect()}})}function ne(e,t,s=t){var l=!0;ze(e,"change",n=>{var v=n?"[selected]":":checked",p;if(e.multiple)p=[].map.call(e.querySelectorAll(v),E);else{var o=e.querySelector(v)??e.querySelector("option:not([disabled])");p=o&&E(o)}s(p)}),X(()=>{var n=t();if(de(e,n,l),l&&n===void 0){var v=e.querySelector(":checked");v!==null&&(n=E(v),s(n))}e.__value=n,l=!1}),Me(e)}function Pe(e,t){for(var s of e.options)s.selected=~t.indexOf(E(s))}function E(e){return"__value"in e?e.__value:e.value}function Ke(e){return function(...t){var s=t[0];return s.preventDefault(),e==null?void 0:e.apply(this,t)}}function Fe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H,oe;function Ve(){if(oe)return H;oe=1;function e(t,s){if(typeof t!="function")throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof t}\`.`);let l,n=0;return function(...p){clearTimeout(l);const o=Date.now(),q=o-n,f=s-q;f<=0?(n=o,t.apply(this,p)):l=setTimeout(()=>{n=Date.now(),t.apply(this,p)},f)}}return H=e,H}var Be=Ve();const Re=Fe(Be);var $e=C("<label> </label>"),Je=C('<!> <div class="autocomplete-container svelte-w4406e"></div>',1);function Ne(e,t){ue(t,!1);let s=b(t,"value",12,""),l=b(t,"options",24,()=>[]),n=b(t,"id",8,"autocomplete"),v=b(t,"label",8,"Select a place"),p=b(t,"hideLabel",8,!1),o=b(t,"mode",8,"search"),q=b(t,"placeholder",24,()=>o()==="search"?"Type any place name":"Select one"),f=b(t,"labelKey",8,"name"),I=b(t,"groupKey",8,"group"),B=b(t,"suggest",8,(r,g)=>{const S=l().filter(A=>A[f()].match(new RegExp(`\\b${r.replace(/[^\w\s]/gi,"")}`,"i")));g(S)});const D=Ie();function O(r){return(r==null?void 0:r[f()])||r||""}function L(r){return r!=null&&r[f()]?I()?`${r[f()]} <span class="muted-text">${r[I()]}</span>`:r[f()]:r}function z(r){r&&(s(r),D("change",r))}function j(r){window.accessibleAutocomplete({element:r,id:n(),defaultValue:s(),displayMenu:"overlay",source:B(),autoselect:o()==="search",onConfirm:z,placeholder:q(),showAllValues:o()==="default",minLength:o()==="search"?3:0,templates:{inputValue:O,suggestion:L}})}ce();var M=Je(),w=ye(M);{var P=r=>{var g=$e(),S=d(g,!0);u(g),y(()=>{W(g,"for",n()),ke(g,"display",p()?"none":null),Q(S,v())}),T(r,g)};pe(w,r=>{v()&&r(P)})}var K=_(w,2);Le(K,r=>j==null?void 0:j(r)),y(()=>W(K,"id",`${n()??""}-container`)),T(e,M),ve()}var Ue=C("<option> </option>"),Ge=C("<option> </option>"),He=C('<span class="credit">First select a place to start the puzzle</span>'),Qe=C('<main><div class="title-block"><h1 class="title">Any Map Puzzle</h1> <div class="floating-icons"><button class="icon-button svelte-wey0ek"><!>Share</button> <!></div></div> <form><!> <div class="columns svelte-wey0ek"><div><label>Select map tiles<br> <select class="svelte-wey0ek"></select></label> <label>Select difficulty<br> <select class="svelte-wey0ek"></select></label> <p><button type="submit" class="button svelte-wey0ek">Start puzzle</button> <!></p></div> <div class="tile svelte-wey0ek"><img class="tile-img svelte-wey0ek" alt=""></div></div></form> <!></main>');function it(e,t){ue(t,!1);const s=je(),l=()=>ie(q,"$config",s),n=()=>ie(De,"$page",s),v=V(),p=V(),o=V(),q=we("config");let f=V(!1);async function I(a,c){if(a&&a.length<3)return c([]);const m=`https://nominatim.openstreetmap.org/search?q=${a}&format=geojson`,be=(await(await fetch(m)).json()).features.map(x=>({code:x.properties.osm_type[0].toUpperCase()+x.properties.osm_id,name:x.properties.name,group:x.properties.display_name.slice(x.properties.name.length+2).replaceAll("Israel","Palestine"),bbox:x.bbox,centroid:x.geometry.coordinates}));c(be)}function B(a){h(v,a.detail.code)}N(()=>l(),()=>{var a,c;h(v,(c=(a=l())==null?void 0:a.place)==null?void 0:c.code)}),N(()=>l(),()=>{h(p,G.find(a=>a.gridSize===l().gridSize)||G[1])}),N(()=>l(),()=>{h(o,U.find(a=>a.id===l().mapTiles)||U[0])}),Se(),ce();var D=Qe(),O=d(D),L=_(d(O),2),z=d(L),j=d(z);Te(j,{type:"share",margin:!0}),xe(),u(z);var M=_(z,2);Ce(M,{message:"Play map puzzles of any place %23AnyMapPuzzle",get url(){return n().url.href},get open(){return i(f)},set open(a){h(f,a)},$$legacy:!0}),u(L),u(O);var w=_(O,2),P=d(w),K=te(()=>{var a;return((a=l().place)==null?void 0:a.name)||""}),r=te(()=>Re(I,1e3));Ne(P,{get value(){return i(K)},get suggest(){return i(r)},$$events:{change:B}});var g=_(P,2),S=d(g),A=d(S),R=_(d(A),3);y(()=>{i(o),ae(()=>{})}),le(R,5,()=>U,se,(a,c)=>{var m=Ue(),k={},F=d(m,!0);u(m),y(()=>{k!==(k=i(c))&&(m.value=(m.__value=i(c))==null?"":i(c)),Q(F,i(c).label)}),T(a,m)}),u(R),u(A);var $=_(A,2),J=_(d($),3);y(()=>{i(p),ae(()=>{})}),le(J,5,()=>G,se,(a,c)=>{var m=Ge(),k={},F=d(m,!0);u(m),y(()=>{k!==(k=i(c))&&(m.value=(m.__value=i(c))==null?"":i(c)),Q(F,i(c).label)}),T(a,m)}),u(J),u($);var Y=_($,2),Z=d(Y),fe=_(Z,2);{var me=a=>{var c=He();T(a,c)};pe(fe,a=>{i(v)||a(me)})}u(Y),u(S);var ee=_(S,2),_e=d(ee);y(()=>W(_e,"src",i(o).url(19302,24631,16))),u(ee),u(g),u(w);var ge=_(w,2);qe(ge,{get attribution(){return i(o).attribution}}),u(D),y(()=>Z.disabled=!i(v)),re("click",z,()=>h(f,!i(f))),ne(R,()=>i(o),a=>h(o,a)),ne(J,()=>i(p),a=>h(p,a)),re("submit",w,Ke(()=>Ee(`${Ae}/${i(v)}?maptiles=${i(o).id}&gridsize=${i(p).gridSize}`))),T(e,D),ve()}export{it as component};