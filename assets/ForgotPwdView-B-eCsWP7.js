import{d as _,aS as w,r as b,a as g,e as t,b as s,w as m,u as y,L as V,aU as h,o as B,l as F}from"./index-BMmkjg9s.js";import{y as P,c as S,a as k,V as C,b as L}from"./index.esm-DZZAGyRr.js";import"./index-DM0mS0M8.js";const q=_({__name:"ForgotPwdView",setup($){const c=w(),l=b(!1),u=P(S().shape({email:k().email("L'email non è valida").required("L'email è obbligatoria")}));async function d(e){e.valid&&await p({email:e.values.email})}async function p(e){try{l.value=!0,await c.resetPassword(e)}catch(a){console.error(a)}finally{l.value=!1}}return(e,a)=>{const f=L,v=F,x=h;return B(),g(V,null,[a[0]||(a[0]=t("div",{class:"text-center mb-8"},[t("div",{class:"text-slate-900 dark:text-slate-50 text-3xl font-medium mb-4"}," Password dimenticata? "),t("p",{class:"text-muted-color font-medium"}," Ti verrà inviata un'email con le istruzioni per reimpostare la password. ")],-1)),t("div",null,[s(x,{class:"flex flex-col",resolver:y(u),onSubmit:d},{default:m(r=>[s(f,{class:"flex flex-col gap-8"},{default:m(()=>{var o,i,n;return[s(C,{name:"email",label:"Email*",type:"email",invalid:(o=r.email)==null?void 0:o.invalid,"error-message":(n=(i=r.email)==null?void 0:i.error)==null?void 0:n.message},null,8,["invalid","error-message"])]}),_:2},1024),s(v,{class:"w-full",label:"Conferma",type:"submit",loading:l.value},null,8,["loading"])]),_:1},8,["resolver"])])],64)}}});export{q as default};
