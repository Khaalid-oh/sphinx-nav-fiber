import{s as c,b as i,T as N,j as e,F as s,h as D,r as a}from"./index-bc5cffe2.js";import{B as z}from"./index-d967afb5.js";import{u as p}from"./index-8545cbb8.js";import{t as F,R as M,F as A,B as w,C as I,q as V,w as _}from"./react-toastify.esm-f63251da.js";import{T as $}from"./index-4952c9c0.js";import{S as q}from"./Skeleton-9785ef40.js";import"./index.esm-12894123.js";import"./InfoIcon-d8810c25.js";const P=()=>e.jsxs(s,{children:[e.jsx(s,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(s,{align:"center",direction:"row",children:e.jsx(G,{children:"Edit Node"})})}),e.jsxs(s,{mb:36,children:[e.jsx(H,{style:{marginBottom:8},children:"Node Name"}),e.jsx($,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...D}})]})]}),G=c(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,H=c(N)`
  color: ${i.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,O=()=>{const{close:l}=p("editNodeName"),f=F({mode:"onChange"}),{watch:b,setValue:d,reset:x,getValues:h}=f,[u,g]=a.useState(!1),[m,y]=a.useState(!1),[t,S]=a.useState(),o=M(),{open:v}=p("removeNode");a.useEffect(()=>(t?d("topic",t==null?void 0:t.topic):o&&d("topic",o.name),()=>{x()}),[t,d,x,o]),a.useEffect(()=>{(async()=>{if(!(!o||o.type!=="topic")){y(!0);try{const{data:n}=await V({search:o==null?void 0:o.name}),L=n.find(k=>k.topic===o.name);S(L)}catch(n){console.log(n)}finally{y(!1)}}})()},[o]);const B=b("topic"),E=()=>{l()},r=t||o,C=async()=>{g(!0);const j=t?"topic":"name";try{await _((r==null?void 0:r.ref_id)||"",{[j]:B.trim()}),E()}catch(n){console.warn(n)}finally{g(!1)}},R=async()=>{v()},T=h().topic&&(t==null?void 0:t.topic)!==h().topic;return e.jsx(U,{children:e.jsxs(A,{...f,children:[m?e.jsx(s,{my:24,children:e.jsx(q,{})}):e.jsx(P,{}),e.jsxs(s,{direction:"row",mb:6,children:[e.jsx(W,{color:"secondary",disabled:m||!r,onClick:R,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(w,{color:"secondary",disabled:u||m||!T,onClick:C,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",u&&e.jsx(I,{color:i.BLUE_PRESS_STATE,size:10})]})]})]})})},U=c(s)`
  padding: 20px;
`,W=c(w)`
  && {
    color: ${i.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${i.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,te=()=>{const{close:l}=p("editNodeName");return e.jsx(z,{id:"editNodeName",kind:"small",onClose:l,preventOutsideClose:!0,children:e.jsx(O,{})})};export{te as EditNodeNameModal};
