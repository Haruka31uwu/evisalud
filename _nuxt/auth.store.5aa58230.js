import{$ as a}from"./entry.6917793f.js";const r=a("authStore",{state:()=>({userData:[],token:null}),getters:{getUserData:e=>e.userData,isLogged:e=>(console.log(e.userData.length==0,"owo"),!(!e.userData==0&&!localStorage.getItem("userData")))},actions:{addUserData(e){this.userData.push(e),localStorage.getItem("userData")&&localStorage.removeItem("userData"),localStorage.setItem("userData",JSON.stringify(e))},removeUserData(e){const t=this.userData.indexOf(e);this.userData.splice(t,1)},addToken(e){this.token=e,localStorage.getItem("token")&&localStorage.removeItem("token"),localStorage.setItem("token",e),console.log(this.token)}}});export{r as a};
