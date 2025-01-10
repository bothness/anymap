import{a as T,t as C}from"../chunks/disclose-version.3Pz46OFs.js";import{i as ce}from"../chunks/legacy.B7MPNEwZ.js";import{as as W,k as ye,x as ve,y as Se,z as y,A as fe,B as c,C as o,D as m,at as we,av as V,q as i,M as E,au as xe,a4 as ae,aB as re}from"../chunks/runtime.Bj-i7OMA.js";import{l as ze,s as J,e as le}from"../chunks/render.w-VL_9bp.js";import{i as pe}from"../chunks/if.4D9V27O5.js";import{s as Q,a as Te,d as U,m as G,I as Ce,S as qe,e as se,C as De,p as Oe,i as ie}from"../chunks/Credit.CPSx_AEO.js";import{i as je,p as b,s as ke,a as ne}from"../chunks/props.B3QeEbwl.js";import{b as Ee}from"../chunks/control.BmD91WI5.js";import{g as Me}from"../chunks/entry.DhvXZNRn.js";import{c as Pe}from"../chunks/index-client.BR0MvK8N.js";function Ae(e,t,r){W(()=>{var s=ye(()=>t(e,r==null?void 0:r())||{});if(s!=null&&s.destroy)return()=>s.destroy()})}function de(e,t,r){if(e.multiple)return Fe(e,t);for(var s of e.options){var n=M(s);if(je(n,t)){s.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Le(e,t){W(()=>{var r=new MutationObserver(()=>{var s=e.__value;de(e,s)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function oe(e,t,r=t){var s=!0;ze(e,"change",n=>{var h=n?"[selected]":":checked",v;if(e.multiple)v=[].map.call(e.querySelectorAll(h),M);else{var u=e.querySelector(h)??e.querySelector("option:not([disabled])");v=u&&M(u)}r(v)}),W(()=>{var n=t();if(de(e,n,s),s&&n===void 0){var h=e.querySelector(":checked");h!==null&&(n=M(h),r(n))}e.__value=n,s=!1}),Le(e)}function Fe(e,t){for(var r of e.options)r.selected=~t.indexOf(M(r))}function M(e){return"__value"in e?e.__value:e.value}function Ie(e){return function(...t){var r=t[0];return r.preventDefault(),e==null?void 0:e.apply(this,t)}}function Ke(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H,ue;function Ve(){if(ue)return H;ue=1;function e(t,r){if(typeof t!="function")throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof t}\`.`);let s,n=0;return function(...v){clearTimeout(s);const u=Date.now(),g=u-n,f=r-g;f<=0?(n=u,t.apply(this,v)):s=setTimeout(()=>{n=Date.now(),t.apply(this,v)},f)}}return H=e,H}var Be=Ve();const Re=Ke(Be);var $e=C("<label> </label>"),Ne=C('<!> <div class="autocomplete-container svelte-w4406e"></div>',1);function Ue(e,t){ve(t,!1);let r=b(t,"value",12,""),s=b(t,"options",24,()=>[]),n=b(t,"id",8,"autocomplete"),h=b(t,"label",8,"Select a place"),v=b(t,"hideLabel",8,!1),u=b(t,"mode",8,"search"),g=b(t,"placeholder",24,()=>u()==="search"?"Type any place name":"Select one"),f=b(t,"labelKey",8,"name"),P=b(t,"groupKey",8,"group"),B=b(t,"suggest",8,(a,_)=>{const w=s().filter(j=>j[f()].match(new RegExp(`\\b${a.replace(/[^\w\s]/gi,"")}`,"i")));_(w)});const q=Pe();function D(a){return(a==null?void 0:a[f()])||a||""}function A(a){return a!=null&&a[f()]?P()?`${a[f()]} <span class="muted-text">${a[P()]}</span>`:a[f()]:a}function x(a){a&&(r(a),q("change",a))}function O(a){window.accessibleAutocomplete({element:a,id:n(),defaultValue:r(),displayMenu:"overlay",source:B(),autoselect:u()==="search",onConfirm:x,placeholder:g(),showAllValues:u()==="default",minLength:u()==="search"?3:0,templates:{inputValue:D,suggestion:A}})}ce();var L=Ne(),S=Se(L);{var F=a=>{var _=$e(),w=c(_,!0);o(_),y(()=>{Q(_,"for",n()),Te(_,"display",v()?"none":null),J(w,h())}),T(a,_)};pe(S,a=>{h()&&a(F)})}var I=m(S,2);Ae(I,a=>O==null?void 0:O(a)),y(()=>Q(I,"id",`${n()??""}-container`)),T(e,L),fe()}var Ge=C("<option> </option>"),He=C("<option> </option>"),Je=C('<span class="credit">First select a place to start the puzzle</span>'),Qe=C('<main><div class="flex-row"><h1 class="flex-left">Any Map Puzzle</h1> <div class="floating-icons flex-right"><button class="icon-button svelte-homp7b"><!>Share</button> <!></div></div> <form><!> <div class="columns svelte-homp7b"><div><label>Select map tiles<br> <select class="svelte-homp7b"></select></label> <label>Select difficulty<br> <select class="svelte-homp7b"></select></label> <p><button type="submit" class="button svelte-homp7b">Start puzzle</button> <!></p></div> <div class="tile svelte-homp7b"><img class="tile-img svelte-homp7b" alt=""></div></div></form> <!></main>');function it(e,t){var ee,te;ve(t,!1);const r=ke(),s=()=>ne(h,"$config",r),n=()=>ne(Oe,"$page",r),h=we("config");let v=V((te=(ee=s())==null?void 0:ee.place)==null?void 0:te.code),u=V(U.find(l=>l.gridSize===s().gridSize)||U[1]),g=V(G.find(l=>l.id===s().mapTiles)||G[0]),f=V(!1);async function P(l,p){const d=`https://nominatim.openstreetmap.org/search?q=${l}&format=jsonv2`,be=(await(await fetch(d)).json()).map(k=>({code:k.osm_type[0].toUpperCase()+k.osm_id,name:k.name,group:k.display_name.slice(k.name.length+2).replace(/israel$/i,"Palestine")}));p(be)}function B(l){E(v,l.detail.code)}ce();var q=Qe(),D=c(q),A=m(c(D),2),x=c(A),O=c(x);Ce(O,{type:"share",margin:!0}),xe(),o(x);var L=m(x,2);qe(L,{message:"Play map puzzles of any place %23AnyMapPuzzle",get url(){return n().url.href},get open(){return i(f)},set open(l){E(f,l)},$$legacy:!0}),o(A),o(D);var S=m(D,2),F=c(S),I=ae(()=>{var l;return((l=s().place)==null?void 0:l.name)||""}),a=ae(()=>Re(P,1e3));Ue(F,{get value(){return i(I)},get suggest(){return i(a)},$$events:{change:B}});var _=m(F,2),w=c(_),j=c(w),R=m(c(j),3);y(()=>{i(g),re(()=>{})}),se(R,5,()=>G,ie,(l,p)=>{var d=Ge(),z={},K=c(d,!0);o(d),y(()=>{z!==(z=i(p))&&(d.value=(d.__value=i(p))==null?"":i(p)),J(K,i(p).label)}),T(l,d)}),o(R),o(j);var $=m(j,2),N=m(c($),3);y(()=>{i(u),re(()=>{})}),se(N,5,()=>U,ie,(l,p)=>{var d=He(),z={},K=c(d,!0);o(d),y(()=>{z!==(z=i(p))&&(d.value=(d.__value=i(p))==null?"":i(p)),J(K,i(p).label)}),T(l,d)}),o(N),o($);var X=m($,2),Y=c(X),me=m(Y,2);{var he=l=>{var p=Je();T(l,p)};pe(me,l=>{i(v)||l(he)})}o(X),o(w);var Z=m(w,2),ge=c(Z);y(()=>Q(ge,"src",i(g).url(19302,24631,16))),o(Z),o(_),o(S);var _e=m(S,2);De(_e,{get attribution(){return i(g).attribution}}),o(q),y(()=>Y.disabled=!i(v)),le("click",x,()=>E(f,!i(f))),oe(R,()=>i(g),l=>E(g,l)),oe(N,()=>i(u),l=>E(u,l)),le("submit",S,Ie(()=>Me(`${Ee}/${i(v)}?maptiles=${i(g).id}&gridsize=${i(u).gridSize}`))),T(e,q),fe()}export{it as component};