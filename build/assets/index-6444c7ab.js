import{s as y,T as w,j as e,F as r,r as t,b as S}from"./index-b8438aeb.js";import{B as g}from"./index-5420377a.js";import{N as v,B as d,C,m as T,aC as B}from"./react-toastify.esm-125e2a3d.js";import{u as E}from"./index-2c90db24.js";import{S as b}from"./Skeleton-47fbba20.js";const L=()=>e.jsx(r,{children:e.jsx(r,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(r,{align:"center",direction:"row",children:e.jsx(N,{children:"Remove node"})})})}),N=y(w)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,R=()=>{const{close:m}=E("removeNode"),[a,c]=t.useState(!1),[f,l]=t.useState(!1),[s,x]=t.useState(),o=v(),u=()=>{m()};t.useEffect(()=>{(async()=>{if(o){l(!0);try{const{data:i}=await T({search:o==null?void 0:o.name}),p=i.find(h=>h.topic===o.name);x(p)}catch(i){console.error(i)}finally{l(!1)}}})()},[o]);const j=async()=>{if(s!=null&&s.ref_id){c(!0);try{await B(s.ref_id)}catch(n){console.error(n),console.warn(n)}finally{c(!1)}}};return e.jsxs(e.Fragment,{children:[e.jsx(L,{}),f?e.jsx(b,{}):e.jsxs(r,{direction:"row",justify:"space-between",children:[e.jsx(d,{color:"secondary",onClick:u,size:"medium",variant:"outlined",children:"Cancel"}),e.jsxs(d,{disabled:a||!s,onClick:j,size:"medium",variant:"text",children:["Confirm",a&&e.jsx(C,{color:S.BLUE_PRESS_STATE,size:10})]})]})]})},A=()=>e.jsx(g,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(R,{})});export{A as RemoveNodeModal};
