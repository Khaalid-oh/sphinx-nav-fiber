import{G as h,r as g,O as R,E as C,C as a,j as S}from"./index-725cd71c.js";import{bM as b,bL as I,s as E,bP as k,bQ as A,bD as T}from"./react-toastify.esm-2b45af49.js";function Q(e,t=166){let o;function n(...l){const s=()=>{e.apply(this,l)};clearTimeout(o),o=setTimeout(s,t)}return n.clear=()=>{clearTimeout(o)},n}function j(e){return e&&e.ownerDocument||document}function q(e){return j(e).defaultView||window}function H(e){return b("MuiSvgIcon",e)}I("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const M=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],O=e=>{const{color:t,fontSize:o,classes:n}=e,l={root:["root",t!=="inherit"&&`color${h(t)}`,`fontSize${h(o)}`]};return A(l,H,n)},B=E("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${h(o.color)}`],t[`fontSize${h(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,n,l,s,m,i,v,r,f,c,u,p,d;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(n=o.create)==null?void 0:n.call(o,"fill",{duration:(l=e.transitions)==null||(l=l.duration)==null?void 0:l.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(m=s.pxToRem)==null?void 0:m.call(s,20))||"1.25rem",medium:((i=e.typography)==null||(v=i.pxToRem)==null?void 0:v.call(i,24))||"1.5rem",large:((r=e.typography)==null||(f=r.pxToRem)==null?void 0:f.call(r,35))||"2.1875rem"}[t.fontSize],color:(c=(u=(e.vars||e).palette)==null||(u=u[t.color])==null?void 0:u.main)!=null?c:{action:(p=(e.vars||e).palette)==null||(p=p.action)==null?void 0:p.active,disabled:(d=(e.vars||e).palette)==null||(d=d.action)==null?void 0:d.disabled,inherit:void 0}[t.color]}}),P=g.forwardRef(function(t,o){const n=R({props:t,name:"MuiSvgIcon"}),{children:l,className:s,color:m="inherit",component:i="svg",fontSize:v="medium",htmlColor:r,inheritViewBox:f=!1,titleAccess:c,viewBox:u="0 0 24 24"}=n,p=C(n,M),d=g.isValidElement(l)&&l.type==="svg",y=a({},n,{color:m,component:i,fontSize:v,instanceFontSize:t.fontSize,inheritViewBox:f,viewBox:u,hasSvgAsChild:d}),x={};f||(x.viewBox=u);const z=O(y);return S.jsxs(B,a({as:i,className:k(z.root,s),focusable:"false",color:r,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:o},x,p,d&&l.props,{ownerState:y,children:[d?l.props.children:l,c?S.jsx("title",{children:c}):null]}))});P.muiName="SvgIcon";const $=P;function J(e,t){function o(n,l){return S.jsx($,a({"data-testid":`${t}Icon`,ref:l},n,{children:e}))}return o.muiName=$.muiName,g.memo(g.forwardRef(o))}function D(e){return typeof e=="string"}function U(e,t,o){return e===void 0||D(e)?t:a({},t,{ownerState:a({},t.ownerState,o)})}function V(e,t=[]){if(e===void 0)return{};const o={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!t.includes(n)).forEach(n=>{o[n]=e[n]}),o}function W(e,t,o){return typeof e=="function"?e(t,o):e}function N(e){var t,o,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=N(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function w(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=N(e))&&(n&&(n+=" "),n+=t);return n}function _(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(o=>!(o.match(/^on[A-Z]/)&&typeof e[o]=="function")).forEach(o=>{t[o]=e[o]}),t}function F(e){const{getSlotProps:t,additionalProps:o,externalSlotProps:n,externalForwardedProps:l,className:s}=e;if(!t){const p=w(o==null?void 0:o.className,s,l==null?void 0:l.className,n==null?void 0:n.className),d=a({},o==null?void 0:o.style,l==null?void 0:l.style,n==null?void 0:n.style),y=a({},o,l,n);return p.length>0&&(y.className=p),Object.keys(d).length>0&&(y.style=d),{props:y,internalRef:void 0}}const m=V(a({},l,n)),i=_(n),v=_(l),r=t(m),f=w(r==null?void 0:r.className,o==null?void 0:o.className,s,l==null?void 0:l.className,n==null?void 0:n.className),c=a({},r==null?void 0:r.style,o==null?void 0:o.style,l==null?void 0:l.style,n==null?void 0:n.style),u=a({},r,o,v,i);return f.length>0&&(u.className=f),Object.keys(c).length>0&&(u.style=c),{props:u,internalRef:r.ref}}const L=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function K(e){var t;const{elementType:o,externalSlotProps:n,ownerState:l,skipResolvingSlotProps:s=!1}=e,m=C(e,L),i=s?{}:W(n,l),{props:v,internalRef:r}=F(a({},m,{externalSlotProps:i})),f=T(r,i==null?void 0:i.ref,(t=e.additionalProps)==null?void 0:t.ref);return U(o,a({},v,{ref:f}),l)}export{j as a,J as c,Q as d,V as e,D as i,q as o,K as u};
