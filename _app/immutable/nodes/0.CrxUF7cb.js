import{R as m,b as u,w as p}from"../chunks/control.CGd2nzaH.js";import{c as _,a as g}from"../chunks/disclose-version.99O-hdS6.js";import{i as b}from"../chunks/legacy.DWlfCNZp.js";import{h,a as y,x as w,ai as x,K as v,L as j,y as z,A as P,t as S}from"../chunks/runtime.D7Av2bsv.js";import{p as O}from"../chunks/props.rWO465ez.js";function T(t,e,n,a,r){var s;h&&y();var o=(s=e.$$slots)==null?void 0:s[n],i=!1;o===!0&&(o=e.children,i=!0),o===void 0||o(t,i?()=>a:a)}function k(t,e){throw new m(t,e.toString())}new TextEncoder;async function C({params:t,url:e,fetch:n}){let a=null;const r=t==null?void 0:t.code;if(r){const c=(await(await n(`https://nominatim.openstreetmap.org/lookup?osm_ids=${r}&format=json`)).json())[0];c||k(308,`${u}/`);const l=c.boundingbox.map(d=>+d);a={code:r,name:c.name,bbox:[l[2],l[0],l[3],l[1]],centroid:[+c.lon,+c.lat]}}const o=e.searchParams.get("maptiles")||"watercolor",i=(()=>{const f=+(e.searchParams.get("gridsize")||4);return f<3?3:f>6?6:f})(),s=+(e.searchParams.get("zoom")||0);return{place:a,mapTiles:o,gridSize:i,zoomOffset:s}}const M=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function q(t,e){w(e,!1);let n=O(e,"data",8),a=p(n());x("config",a);function r(s){s.place&&a.set(s)}v(()=>S(n()),()=>{r(n())}),j(),b();var o=_(),i=z(o);T(i,e,"default",{}),g(t,o),P()}export{q as component,M as universal};