import{R as d,b as m}from"../chunks/entry.VpTtyMgw.js";import{c as u,a as b}from"../chunks/disclose-version.DjvNnsPL.js";import"../chunks/legacy.CXxP-W4o.js";import{B as g,D as p,i as _}from"../chunks/index-client.BvduMyYk.js";function h(t,e,a,o,s){var n;g&&p();var r=(n=e.$$slots)==null?void 0:n[a],c=!1;r===!0&&(r=e.children,c=!0),r===void 0||r(t,c?()=>o:o)}function v(t,e){throw new d(t,e.toString())}new TextEncoder;async function y({params:t,url:e,fetch:a}){let o=null;const s=(t==null?void 0:t.code)||e.searchParams.get("place");if(s){const i=(await(await a(`https://nominatim.openstreetmap.org/lookup?osm_ids=${s}&format=json`)).json())[0];i||v(308,`${m}/`);const l=i.boundingbox.map(f=>+f);o={code:s,name:i.name,bbox:[l[2],l[0],l[3],l[1]],centroid:[+i.lon,+i.lat]}}const r=e.searchParams.get("maptiles")||"watercolor",c=(()=>{const n=+(e.searchParams.get("gridsize")||4);return n<3?3:n>6?6:n})();return{place:o,mapTiles:r,gridSize:c}}const S=Object.freeze(Object.defineProperty({__proto__:null,load:y},Symbol.toStringTag,{value:"Module"}));function z(t,e){var a=u(),o=_(a);h(o,e,"default",{}),b(t,a)}export{z as component,S as universal};
