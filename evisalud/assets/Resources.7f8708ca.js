import{_ as d,x as r,i as _,o,c as u,a as t,n as l,q as c,g as a,z as f,A as m}from"./entry.aef4b43e.js";const p=f(()=>m(()=>import("./ResourcesCarousel.8471e915.js"),["./ResourcesCarousel.8471e915.js","./entry.aef4b43e.js"],import.meta.url).then(e=>e.default||e)),b=r({setup(){return{tabSelected:_(1)}}}),y={class:"d-flex flex-column align-items-center justify-content-center"},h=t("div",{class:"section-title"},[t("h2",null,"Recursos"),t("div",{class:"section-decorator"})],-1),v={class:"row mt-3",style:{width:"70%"}},g={class:"col col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center"},S=t("span",null,"Infografias",-1),k=[S],w={class:"col col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center"},C=t("span",null,"Novedades",-1),$=[C];function x(e,s,z,B,j,A){const n=p;return o(),u("section",y,[h,t("div",v,[t("div",g,[t("div",{class:l(["btn-blue my-3",e.tabSelected==1?"btn-blue":"btn-gray-outline"]),style:{width:"60%"},onClick:s[0]||(s[0]=i=>e.tabSelected=1)},k,2)]),t("div",w,[t("div",{class:l(e.tabSelected==2?"btn-blue":"btn-gray-outline"),style:{width:"60%"},onClick:s[1]||(s[1]=i=>e.tabSelected=2)},$,2)])]),e.tabSelected==1?(o(),c(n,{key:0,style:{width:"100%"}})):a("",!0),e.tabSelected==2?(o(),c(n,{key:1,style:{width:"100%"}})):a("",!0)])}const N=d(b,[["render",x]]);export{N as default};
