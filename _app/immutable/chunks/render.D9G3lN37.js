import{aj as E,a4 as b,ak as P,V as R,Y as q,al as H,am as M,j as W,an as L,ad as B,ao as C,ap as $,aq as T,c as w,s as O,a as x,f as p,ar as z,as as F,at as G,au as J,av as K,aw as Q,ac as U,e as X,x as Z,h as S,A as ee,g as re}from"./runtime.DTQ_9slk.js";import{b as te}from"./disclose-version.CBFeP9qm.js";const ae=["touchstart","touchmove"];function ne(e){return ae.includes(e)}let k=!1;function se(){k||(k=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function V(e){var r=P,a=R;E(null),b(null);try{return e()}finally{E(r),b(a)}}function ce(e,r,a,i=a){e.addEventListener(r,()=>V(a));const n=e.__on_r;n?e.__on_r=()=>{n(),i(!0)}:e.__on_r=()=>i(!0),se()}const ie=new Set,D=new Set;function oe(e,r,a,i){function n(t){if(i.capture||y.call(r,t),!t.cancelBubble)return V(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?H(()=>{r.addEventListener(e,n,i)}):r.addEventListener(e,n,i),n}function de(e,r,a,i,n){var t={capture:i,passive:n},u=oe(e,r,a,t);(r===document.body||r===window||r===document)&&q(()=>{r.removeEventListener(e,u,t)})}function y(e){var A;var r=this,a=r.ownerDocument,i=e.type,n=((A=e.composedPath)==null?void 0:A.call(e))||[],t=n[0]||e.target,u=0,_=e.__root;if(_){var c=n.indexOf(_);if(c!==-1&&(r===document||r===window)){e.__root=r;return}var h=n.indexOf(r);if(h===-1)return;c<=h&&(u=c)}if(t=n[u]||e.target,t!==r){M(e,"currentTarget",{configurable:!0,get(){return t||a}});var m=P,f=R;E(null),b(null);try{for(var s,o=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var d=t["__"+i];if(d!==void 0&&!t.disabled)if(W(d)){var[Y,...j]=d;Y.apply(t,[e,...j])}else d.call(t,e)}catch(g){s?o.push(g):s=g}if(e.cancelBubble||l===r||l===null)break;t=l}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{e.__root=r,delete e.currentTarget,E(m),b(f)}}}function _e(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ue(e,r){return I(e,r)}function he(e,r){L(),r.intro=r.intro??!1;const a=r.target,i=S,n=p;try{for(var t=B(a);t&&(t.nodeType!==8||t.data!==C);)t=$(t);if(!t)throw T;w(!0),O(t),x();const u=I(e,{...r,anchor:t});if(p===null||p.nodeType!==8||p.data!==z)throw F(),T;return w(!1),u}catch(u){if(u===T)return r.recover===!1&&G(),L(),J(a),w(!1),ue(e,r);throw u}finally{w(i),O(n)}}const v=new Map;function I(e,{target:r,anchor:a,props:i={},events:n,context:t,intro:u=!0}){L();var _=new Set,c=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!_.has(o)){_.add(o);var l=ne(o);r.addEventListener(o,y,{passive:l});var d=v.get(o);d===void 0?(document.addEventListener(o,y,{passive:l}),v.set(o,1)):v.set(o,d+1)}}};c(K(ie)),D.add(c);var h=void 0,m=Q(()=>{var f=a??r.appendChild(U());return X(()=>{if(t){Z({});var s=re;s.c=t}n&&(i.$$events=n),S&&te(f,null),h=e(f,i)||{},S&&(R.nodes_end=p),t&&ee()}),()=>{var l;for(var s of _){r.removeEventListener(s,y);var o=v.get(s);--o===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,o)}D.delete(c),f!==a&&((l=f.parentNode)==null||l.removeChild(f))}});return N.set(h,m),h}let N=new WeakMap;function ve(e,r){const a=N.get(e);return a?(N.delete(e),a(r)):Promise.resolve()}export{de as e,he as h,ce as l,ue as m,_e as s,ve as u};