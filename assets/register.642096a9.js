import{c as p,a as r,d as m,A as C,_ as h}from"./auth.service.cd05a8b2.js";import{_ as u,z as g,A as v,c as w,a as e,b as n,w as f,o as y,p as x,e as b}from"./entry.9f4b6d7c.js";import{_ as S}from"./login.bef0a786.js";import"./_commonjsHelpers.725317a4.js";const M={setup(){const o=p().shape({email:r().email().required(),password:r().required().min(8),confirmPassword:r().required().oneOf([m("password"),null],"Passwords must match")});return g({validationSchema:o}),{onSubmit:i=>{const a={email:i.email,password:i.password};C.register(a).then(()=>{router.push("/classroom/home")},t=>{const l=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();console.log(l)})},schema:o}}},s=o=>(x("data-v-9eed35c5"),o=o(),b(),o),Z={class:"row",style:{height:"90vh"}},A=s(()=>e("div",{class:"col-0 col-md-4 col-lg-6 d-flex justify-content-center align-items-center",style:{background:"#0393aa"}},[e("img",{src:S,style:{width:"50%",height:"50%"}})],-1)),B={class:"col-12 col-md-8 col-lg-6 d-flex align-items-center flex-column justify-content-center"},I=s(()=>e("div",{class:"login__title",style:{position:"relative",height:"auto"}},[e("span",null," Aula virtual "),e("div",{class:"login__title-decorator",style:{position:"absolute",top:"0.8em",opacity:"0.7",left:"1em"}})],-1)),$={class:"login__body"},k=s(()=>e("p",{class:"mt-2 text-center"}," ¡Bienvenido de nuevo a nuestra aula virtual! Ingresa tus datos de inicio de sesión a continuación ",-1)),P={class:"input-container"},V=s(()=>e("span",{for:"name",style:{color:"white"}},"Correo Electronico",-1)),q={class:"input-container",style:{position:"relative"}},E=s(()=>e("span",{for:"name",style:{color:"white"}},"Contraseña",-1)),F=s(()=>e("svg",{class:"password-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"15",viewBox:"0 0 24 15",fill:"none"},[e("path",{d:"M22.8773 6.90399C21.7451 4.94693 20.1167 3.30588 18.169 2.15721C16.1611 0.973653 13.8615 0.347656 11.5187 0.347656C9.17563 0.347656 6.87628 0.973672 4.86793 2.15721C2.92026 3.30521 1.29186 4.94693 0.160065 6.90399C-0.0533549 7.27242 -0.0533549 7.72658 0.160065 8.09579C1.29196 10.0529 2.92026 11.6939 4.86793 12.8426C6.87628 14.0261 9.17553 14.6521 11.5187 14.6521C13.8614 14.6521 16.1611 14.0269 18.169 12.8426C20.1167 11.6946 21.7451 10.0529 22.8773 8.09579C23.0903 7.72736 23.0903 7.27321 22.8773 6.90399ZM16.9608 10.7926C15.3182 11.7609 13.4367 12.2724 11.5187 12.2724C9.60015 12.2724 7.71842 11.7605 6.0766 10.7926C4.68304 9.97079 3.48865 8.84122 2.59082 7.4997C3.48867 6.15857 4.68304 5.02859 6.0766 4.20677C7.71842 3.23849 9.60024 2.72742 11.5187 2.72742C13.4368 2.72742 15.3189 3.23924 16.9608 4.20677C18.3543 5.02861 19.5483 6.15857 20.4462 7.4997C19.5483 8.84122 18.3543 9.97081 16.9608 10.7926ZM11.5187 3.45789C9.28979 3.45789 7.47611 5.27157 7.47611 7.50047C7.47611 9.72936 9.28979 11.543 11.5187 11.543C13.7476 11.543 15.5613 9.72936 15.5613 7.50047C15.5613 5.27157 13.7476 3.45789 11.5187 3.45789ZM11.5187 9.16356C10.6014 9.16356 9.8552 8.41773 9.8552 7.50037C9.8552 6.58306 10.6014 5.83718 11.5187 5.83718C12.4356 5.83718 13.1819 6.58301 13.1819 7.50037C13.1819 8.41768 12.4357 9.16356 11.5187 9.16356Z",fill:"#00A9C3"})],-1)),j={class:"input-container",style:{position:"relative"}},N=s(()=>e("span",{for:"name",style:{color:"white"}},"Contraseña",-1)),O=s(()=>e("svg",{class:"password-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"15",viewBox:"0 0 24 15",fill:"none"},[e("path",{d:"M22.8773 6.90399C21.7451 4.94693 20.1167 3.30588 18.169 2.15721C16.1611 0.973653 13.8615 0.347656 11.5187 0.347656C9.17563 0.347656 6.87628 0.973672 4.86793 2.15721C2.92026 3.30521 1.29186 4.94693 0.160065 6.90399C-0.0533549 7.27242 -0.0533549 7.72658 0.160065 8.09579C1.29196 10.0529 2.92026 11.6939 4.86793 12.8426C6.87628 14.0261 9.17553 14.6521 11.5187 14.6521C13.8614 14.6521 16.1611 14.0269 18.169 12.8426C20.1167 11.6946 21.7451 10.0529 22.8773 8.09579C23.0903 7.72736 23.0903 7.27321 22.8773 6.90399ZM16.9608 10.7926C15.3182 11.7609 13.4367 12.2724 11.5187 12.2724C9.60015 12.2724 7.71842 11.7605 6.0766 10.7926C4.68304 9.97079 3.48865 8.84122 2.59082 7.4997C3.48867 6.15857 4.68304 5.02859 6.0766 4.20677C7.71842 3.23849 9.60024 2.72742 11.5187 2.72742C13.4368 2.72742 15.3189 3.23924 16.9608 4.20677C18.3543 5.02861 19.5483 6.15857 20.4462 7.4997C19.5483 8.84122 18.3543 9.97081 16.9608 10.7926ZM11.5187 3.45789C9.28979 3.45789 7.47611 5.27157 7.47611 7.50047C7.47611 9.72936 9.28979 11.543 11.5187 11.543C13.7476 11.543 15.5613 9.72936 15.5613 7.50047C15.5613 5.27157 13.7476 3.45789 11.5187 3.45789ZM11.5187 9.16356C10.6014 9.16356 9.8552 8.41773 9.8552 7.50037C9.8552 6.58306 10.6014 5.83718 11.5187 5.83718C12.4356 5.83718 13.1819 6.58301 13.1819 7.50037C13.1819 8.41768 12.4357 9.16356 11.5187 9.16356Z",fill:"#00A9C3"})],-1)),z=s(()=>e("div",{class:"login__body-options"},[e("div",{class:"record_me"},[e("input",{type:"checkbox",id:"record_me"}),e("label",{for:"record_me"},"Recordarme")]),e("span",{class:"forgot-password"},"Olvide mi contraseña")],-1)),R=s(()=>e("div",{class:"login__auth_options d-flex flex-column gap-4"},[e("button",{class:"btn-blue",type:"submit"},"Crear Cuenta")],-1));function D(o,d,i,a,t,l){const c=h,_=v("VForm");return y(),w("section",null,[e("div",Z,[A,e("div",B,[I,e("div",$,[k,n(_,{"validation-schema":a.schema,onSubmit:a.onSubmit},{default:f(()=>[e("div",P,[V,n(c,{type:"text",name:"email",placeholder:"Correo Electronico",mode:"aggressive"})]),e("div",q,[E,n(c,{type:"password",name:"password",placeholder:"Contraseña",mode:"aggressive"}),F]),e("div",j,[N,n(c,{type:"password",name:"confirmPassword",placeholder:"Confirmar Contraseña",mode:"aggressive"}),O]),z,R]),_:1},8,["validation-schema","onSubmit"])])])])])}const L=u(M,[["render",D],["__scopeId","data-v-9eed35c5"]]);export{L as default};