import{R as m,b as u,w as p}from"../chunks/control.BmD91WI5.js";import{c as _,a as g}from"../chunks/disclose-version.3Pz46OFs.js";import{i as b}from"../chunks/legacy.B7MPNEwZ.js";import{h,a as y,x as w,ab as x,ac as v,ad as j,y as z,A as P,t as S}from"../chunks/runtime.Bj-i7OMA.js";import{p as O}from"../chunks/props.B3QeEbwl.js";function T(t,e,n,o,r){var s;h&&y();var a=(s=e.$$slots)==null?void 0:s[n],i=!1;a===!0&&(a=e.children,i=!0),a===void 0||a(t,i?()=>o:o)}function k(t,e){throw new m(t,e.toString())}new TextEncoder;async function C({params:t,url:e,fetch:n}){let o=null;const r=t==null?void 0:t.code;if(r){const c=(await(await n(`https://nominatim.openstreetmap.org/lookup?osm_ids=${r}&format=json`)).json())[0];c||k(308,`${u}/`);const l=c.boundingbox.map(d=>+d);o={code:r,name:c.name,bbox:[l[2],l[0],l[3],l[1]],centroid:[+c.lon,+c.lat]}}const a=e.searchParams.get("maptiles")||"watercolor",i=(()=>{const f=+(e.searchParams.get("gridsize")||4);return f<3?3:f>6?6:f})(),s=+(e.searchParams.get("zoom")||0);return{place:o,mapTiles:a,gridSize:i,zoomOffset:s}}const B=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function D(t,e){w(e,!1);let n=O(e,"data",8),o=p(n());x("config",o);function r(s){s.place&&o.set(s)}v(()=>S(n()),()=>{r(n())}),j(),b();var a=_(),i=z(a);T(i,e,"default",{}),g(t,a),P()}export{D as component,B as universal};