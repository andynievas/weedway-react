(this["webpackJsonpweed-way-con-react"]=this["webpackJsonpweed-way-con-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),o=n.n(a),i=n(7),r=n.n(i),c=(n(13),n(2)),l=n(3),d=n(5),u=n(4),p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={name:""},e.onchange=function(t){e.setState({name:t.target.value})},e.onsubmit=function(t){console.log(e.state)},e.edit={display:"block",width:"100%",margin:"auto",backgroundColor:"rgb(100,160,200)"},e.logOut={display:"block",width:"100%",margin:"15px 0",padding:"6px",color:"white",backgroundColor:"red",borderRadius:"2rem"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.props.mostrar?Object(s.jsxs)("div",{className:"animate__animated animate__fadeInUp",style:{margin:"20px 0"},children:[Object(s.jsx)("button",{style:this.edit,onClick:function(){e.props.setEstado()},children:"Editar datos personales"}),Object(s.jsx)("button",{style:this.logOut,id:"logOut",onClick:function(){localStorage.removeItem("weedway-user"),window.location.reload()},children:"Cerrar sesi\xf3n"})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{action:"http://localhost:3001/comentar",method:"POST",className:"animate__animated animate__fadeInUp",style:{margin:"20px 0"},onSubmit:this.onsubmit,id:"changeUserName",autoComplete:"off",children:[Object(s.jsx)("button",{style:this.edit,onClick:function(){e.props.setEstado()},children:"Cancelar"}),Object(s.jsx)("input",{type:"text",name:"username",onChange:this.onchange,placeholder:"Username"}),Object(s.jsx)("input",{type:"submit",value:"Guardar",style:{backgroundColor:"rgb(20,180,20)",color:"white",cursor:"pointer"}}),Object(s.jsx)("button",{style:this.logOut,id:"logOut",onClick:function(e){e.preventDefault(),document.getElementById("confirm").classList.add("animate__fadeInUp"),document.getElementById("confirm").classList.remove("none")},children:"Cerrar sesi\xf3n"})]}),Object(s.jsxs)("div",{className:"animate__animated none",id:"confirm",children:[Object(s.jsx)("h4",{children:"Quieres salir?"}),Object(s.jsx)("button",{style:{padding:"10px",margin:"10px",width:"40%"},onClick:function(){localStorage.removeItem("weedway-user"),window.location.reload()},children:"Si"}),Object(s.jsx)("button",{style:{padding:"10px",margin:"10px",width:"40%"},children:"No"})]})]})}}]),n}(o.a.Component),j=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={show:!0},e.changEstado=function(){e.setState({show:!e.state.show})},e.input={display:"block",width:"80%",margin:"auto"},e.logOut={display:"block",width:"100%",padding:"6px",color:"white",backgroundColor:"red",borderRadius:"2rem"},e}return Object(l.a)(n,[{key:"render",value:function(){return this.state.show?Object(s.jsxs)("div",{className:"animate__animated animate__fadeInUp",children:[Object(s.jsx)("h5",{style:{textAlign:"center",margin:"0",fontSize:"40px",fontWeight:"bold",overflow:"hidden"},children:localStorage.getItem("weedway-user")}),Object(s.jsx)("p",{children:"Aqui puedes ver tus datos personales y posteos"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 1"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 2"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 3"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 4"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 5"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 6"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 7"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 8"}),Object(s.jsx)("p",{children:"Hola soy la opcion numero 9"}),Object(s.jsx)(p,{mostrar:this.state.show,setEstado:this.changEstado})]}):Object(s.jsx)("div",{style:{position:"relative"},children:Object(s.jsx)(p,{mostrar:this.state.show,setEstado:this.changEstado})})}}]),n}(o.a.Component),h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).estiloMenuLateral={position:"fixed",right:"0",top:"0",bottom:"0",width:"40%",height:"100vh",minWidth:"300px",maxWidth:"500px",backgroundColor:"rgb(30,30,30)",boxShadow:"0px 0px 16px 10px rgb(20,20,20)",overflowY:"auto",zIndex:"5"},e.botonCerrar={display:"block",width:"100%",backgroundColor:"red",fontSize:"30px",borderRadius:"2rem"},e.animation=function(){return 0===e.props.first?"none":e.props.estado?(document.getElementsByTagName("body")[0].style="overflow: hidden;","animate__animated animate__fadeInRight"):(document.getElementsByTagName("body")[0].style="overflow: auto;","animate__animated animate__fadeOutRight")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{style:{position:"fixed",zIndex:"4"},id:"menuLateral",children:Object(s.jsx)("div",{style:this.estiloMenuLateral,className:this.animation(),children:Object(s.jsxs)("div",{style:{margin:"20px"},children:[Object(s.jsx)("button",{style:this.botonCerrar,onClick:function(){e.props.showMenu()},children:"\xd7 Cerrar Menu"}),"Hola soy el menu lateral que aparezco desde la derecha",Object(s.jsx)(j,{})]})})})}}]),n}(o.a.Component),m=n.p+"static/media/weedway-icon.c6c4b7ea.png",b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showMenu:!1},e.showMenu=function(){e.setState({showMenu:!e.state.showMenu})},e.first=0,e.headerTitle={backgroundColor:"rgb(30,30,30)",borderTop:"2px rgb(30,30,30) solid",borderBottom:"2px rgb(30,30,30) solid",display:"flex",width:"100%",position:"fixed",top:"0",left:"0",right:"0",zIndex:"2"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"animate__animated animate__fadeInDown",style:this.headerTitle,children:[Object(s.jsxs)("div",{className:" weedway",style:{width:"80%",minWidth:"100px"},id:"weedway-title",children:[Object(s.jsx)("img",{className:"header-icon",style:this.iconStyle,src:m,alt:"\xabicon\xbb"}),Object(s.jsx)("h2",{children:"WeedWay"})]}),Object(s.jsx)("span",{className:" nav-button",children:Object(s.jsxs)("button",{onClick:function(){e.props.setEstado("Buscar")},children:[" ",Object(s.jsx)("i",{className:"far fa-search navIcon",children:" "})," ",Object(s.jsx)("span",{style:{fontSize:"16px"},children:" Buscar "})," "]})}),Object(s.jsx)("span",{className:" nav-button",children:Object(s.jsxs)("button",{onClick:function(){e.showMenu(),e.first=1},children:[" ",Object(s.jsx)("i",{className:"far fa-user navIcon",children:" "})," ",Object(s.jsx)("span",{style:{fontSize:"16px"},children:" Cuenta "})," "]})})]}),Object(s.jsx)(h,{estado:this.state.showMenu,showMenu:this.showMenu,first:this.first})]})}}]),n}(o.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={name:"",password:""},e.container={width:"80%",maxWidth:"600px",margin:"10vh auto",color:"rgb(250,250,190)",background:"tomato",borderTop:"1px rgb(250,50,70) solid",borderBottom:"6px rgb(250,50,70) solid",borderLeft:"2px rgb(250,50,70) solid",borderRight:"2px rgb(250,50,70) solid",borderRadius:"20px",boxShadow:"0px 6px 60px -10px red"},e.icon={height:"42px",margin:"6px"},e.usernameStyle=function(){return""===e.state.name?"username-label":"username-label-focused"},e.passwordStyle=function(){return""===e.state.password?"password-label":"password-label-focused"},e.onchangeUser=function(t){e.setState({name:t.target.value,password:e.state.password})},e.onchangePass=function(t){e.setState({name:e.state.name,password:t.target.value})},e.onsubmit=function(t){""!==e.state.name&&localStorage.setItem("weedway-user",e.state.name),console.log(e.state)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"weedway",style:{display:"flex",width:"100%",justifyContent:"center"},id:"weedway",children:[Object(s.jsx)("img",{style:this.icon,src:m,alt:"\xabicon\xbb"}),Object(s.jsx)("h2",{style:{margin:"3px"},children:"WeedWay"})]}),Object(s.jsxs)("div",{style:this.container,children:[Object(s.jsx)("h3",{style:{margin:"10px",textAlign:"center",fontSize:"34px"},children:"Welcome to WeedWay"}),Object(s.jsx)("p",{style:{margin:"0 0 30px 0",textAlign:"center",fontSize:"20px"},children:"Tu sitio favorito!"}),Object(s.jsx)("div",{style:this.subContainer,children:Object(s.jsxs)("form",{onSubmit:this.onsubmit,autoComplete:"on",id:"loginForm",children:[Object(s.jsxs)("div",{style:{position:"relative",margin:"20px 30px"},id:"username",children:[Object(s.jsx)("input",{type:"text",style:this.inputs,onChange:this.onchangeUser,autoComplete:"on",id:"username-input"}),Object(s.jsx)("label",{htmlFor:"username-input",className:this.usernameStyle(),children:"Usuario"})]}),Object(s.jsxs)("div",{style:{position:"relative",margin:"20px 30px"},id:"password-user",children:[Object(s.jsx)("input",{type:"password",style:this.inputs,onChange:this.onchangePass,id:"password-user-input"}),Object(s.jsx)("label",{htmlFor:"password-user-input",className:this.passwordStyle(),children:"Contrase\xf1a"})]}),Object(s.jsx)("input",{type:"submit",value:"Log in",onClick:function(){},id:"login-btn"})]})})]}),Object(s.jsx)("div",{className:"allRightsReserved",style:{width:"100%",height:"140px"},children:Object(s.jsxs)("h2",{children:["Todos los derechos reservados",Object(s.jsx)("span",{style:{display:"block",padding:"6px 0"},children:"Developed By Andy Nievas"}),Object(s.jsx)("span",{style:{display:"block",padding:"6px 0"},children:"\xa92021"})]})})]})}}]),n}(o.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).styles={fontSize:"20px",fontWeight:"bold"},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("p",{children:[" ",Object(s.jsxs)("span",{style:this.styles,children:[" ",this.props.userName," "]})," ",this.props.message," "]})}}]),n}(o.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).styles={position:"fixed",bottom:"0",left:"0",right:"0",top:"120px",padding:"0 14px",overflowY:"auto"},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{style:this.styles,children:[Object(s.jsx)("h2",{children:this.props.view}),Object(s.jsx)("p",{children:"Y aca sigue la seccion de la view correspondiente"}),Object(s.jsx)("input",{type:"text",style:{width:"200px",maxWidth:"calc(100% - 8px)",margin:"auto"},placeholder:"Buscar"}),Object(s.jsx)("button",{children:"Nuevo mensaje"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo para ver como es que se ve"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(s.jsx)(f,{userName:"Andy98",message:"Este es un mensaje de ejemplo"})]})}}]),n}(o.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).inputFile={border:"4px dashed grey",display:"inline-block",width:"calc(100% - 80px)",padding:"40px",cursor:"pointer",fontSize:"30px",textAlign:"center"},e.selected=function(){var e=document.getElementById("inputFile");console.log(e.value),console.log(e.files),alert(e.value),alert(e.files[0])},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("form",{children:[Object(s.jsx)("p",{children:"Hola elige una FOTO para subir"}),Object(s.jsx)("input",{id:"inputFile",type:"file",style:{display:"none"}}),Object(s.jsx)("label",{for:"inputFile",style:this.inputFile,onClick:function(){e.selected(),console.log("anduuu")},children:" Select an image to upload "}),Object(s.jsx)("input",{type:"button",value:"Listo"})]})}}]),n}(o.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("p",{children:"Hola tienes 4 Notifications"})}}]),n}(o.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("p",{children:"Hola elige un LUGAR para comprar faso"})}}]),n}(o.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:"Busca a tus amigos"})}}]),n}(o.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).styles={margin:"auto",padding:"0 20px",color:"rgb(220,220,220)",backgroundColor:"rgba(60,60,60,0.7)",borderRadius:"20px 20px 0 0",position:"fixed",bottom:"0",left:"0",right:"0",top:"64px"},e.buttonStyle={margin:"0px",width:"50px",height:"50px",backgroundColor:"red",fontSize:"28px"},e}return Object(l.a)(n,[{key:"view",value:function(){return"Buscar"===this.props.view?Object(s.jsx)(w,{}):"Foto"===this.props.view?Object(s.jsx)(g,{}):"Mensajes"===this.props.view?Object(s.jsx)(O,{}):"Notifications"===this.props.view?Object(s.jsx)(y,{}):"Lugares"===this.props.view?Object(s.jsx)(v,{}):Object(s.jsxs)("div",{style:{backgroundColor:"green"},children:["Posteos recientes:",Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:"Total posts: 6"})}),Object(s.jsxs)("div",{className:"profile-posts",children:[Object(s.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:"profile-pic"}),Object(s.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:"profile-pic"}),Object(s.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:"profile-pic"}),Object(s.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:"profile-pic"}),Object(s.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:"profile-pic"}),Object(s.jsx)("img",{src:"https://thispersondoesnotexist.com/image",alt:"profile-pic"})]})]})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{style:this.styles,children:[Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("button",{style:this.buttonStyle,onClick:function(){e.props.setEstado()},children:" \xd7"}),Object(s.jsx)("p",{style:{width:"100%",textAlign:"center",fontSize:"26px",lineHeight:"50px",height:"50px",padding:"0 45px 0 0",margin:"0px"},children:this.props.view})]}),this.view()]})}}]),n}(o.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).modalStyle={backgroundColor:"rgb(30,30,30,0.5)",backdropFilter:"blur(6px)",color:"white",position:"fixed",top:"0vh",bottom:"0vh",left:"0px",right:"0px",width:"auto",zIndex:"1"},e.first=0,e.animation=function(){return 0===e.first?(e.first=1,"none"):e.props.estado?(document.getElementsByTagName("body")[0].style="overflow: hidden;","animate__animated animate__fadeInUp"):(document.getElementsByTagName("body")[0].style="overflow: auto;","animate__animated animate__fadeOutDown")},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:this.animation(),style:this.modalStyle,children:Object(s.jsx)(C,{view:this.props.view,setEstado:this.props.setEstado})})}}]),n}(o.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).containerStyle={background:"rgba(255,228,196,0.7)",position:"fixed",top:"60px",left:"0px",right:"0px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"0 0 10px 10px",height:"230px",zIndex:"4"},e.closeButton={fontSize:"26px",color:"rgb(40,40,40)",position:"fixed",top:"16px",right:"20px",cursor:"pointer"},e.buttonStyle={display:"block",width:"100%"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("i",{className:"fas fa-times ",style:this.closeButton,onClick:function(){e.props.setEstado()}}),Object(s.jsxs)("div",{style:this.containerStyle,children:[Object(s.jsxs)("button",{className:"btn-block btn-options",children:["Dejar de seguir a ",Object(s.jsxs)("span",{style:{fontWeight:"bold"},children:['"',this.props.user,'"']})]}),Object(s.jsxs)("button",{className:"btn-block btn-options",children:["Compartir publicaci\xf3n de ",Object(s.jsxs)("span",{style:{fontWeight:"bold"},children:['"',this.props.user,'"']})]}),Object(s.jsxs)("button",{className:"btn-block btn-options",style:{borderRadius:"0 0 9px 9px"},children:["Reportar a ",Object(s.jsxs)("span",{style:{fontWeight:"bold"},children:['"',this.props.user,'"']})]})]})]})}}]),n}(o.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={pressed:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.state.pressed?Object(s.jsx)("i",{className:"fas fa-heart interaction-button",onClick:function(){e.setState({pressed:!1})}}):Object(s.jsx)("i",{className:"far fa-heart interaction-button",onClick:function(){e.setState({pressed:!0})}})}}]),n}(o.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={comments:[]},e.fetchData=function(){"[]"===JSON.stringify(e.state.comments)&&fetch("https://sample-api-practice-node.herokuapp.com/comentarios").then((function(e){if(200===e.status)return e.json()})).then((function(t){e.setState({comments:t})})).catch((function(e){return console.log(e)}))},e.addComment=function(t,n,s){var a={user:t,comentario:n,id:s};e.setState({comments:e.state.comments.concat([a])})},e.ident=2,e.comentario={user:localStorage.getItem("weedway-user"),comentario:"",id:e.state.comments.length},e.onsubmit=function(t){t.preventDefault(),""!==e.comentario.comentario.trim()&&(e.addComment(e.comentario.user,e.comentario.comentario,e.comentario.id),e.ident+=1,e.comentario.comentario=""),t.target[0].value="",console.log(e.comentario)},e.onchange=function(t){e.comentario.comentario=t.target.value},e}return Object(l.a)(n,[{key:"render",value:function(){return this.fetchData(),Object(s.jsxs)("div",{className:"interaction-section",children:[Object(s.jsx)(S,{}),Object(s.jsx)("i",{className:"far fa-share interaction-button"}),Object(s.jsxs)("p",{className:"description",children:[" ",Object(s.jsx)("span",{children:"Usuario1"})," Este es mi primer post"]}),this.state.comments.map((function(e){return Object(s.jsxs)("p",{className:"animate__animated animate__zoomIn description comentario",children:[" ",Object(s.jsxs)("span",{children:[" ",e.user," "]})," ",e.comentario," "]},e.id)})),Object(s.jsxs)("form",{action:"http://localhost:3001/comentar",method:"POST",className:"comentar ",onSubmit:this.onsubmit,autoComplete:"off",children:[Object(s.jsx)("input",{type:"text",className:"comentario-text-input",name:"comentario",onChange:this.onchange,placeholder:"Escribe aqu\xed tu comentario..."}),Object(s.jsx)("input",{type:"submit",className:"send",value:"Publicar"})]})]})}}]),n}(o.a.Component),_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={show:!1},e.changEstado=function(){e.setState({show:!e.state.show})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.state.show?(document.getElementsByTagName("body")[0].style="overflow: hidden;",Object(s.jsx)(k,{estado:this.state.show,setEstado:this.changEstado,user:this.props.user})):(document.getElementsByTagName("body")[0].style="overflow: auto;",Object(s.jsx)("div",{children:Object(s.jsx)("i",{className:"fas fa-ellipsis-h options",onClick:function(){e.setState({show:!e.state.show})}})}))}}]),n}(o.a.Component),A=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.usuario.userName,t=this.props.usuario.profilePhoto,n=this.props.usuario.userPost;return Object(s.jsx)("div",{style:{marginBottom:"30px",position:"relative",zIndex:"1"},children:Object(s.jsxs)("div",{className:"animate__animated animate__fadeInUp post-full",children:[Object(s.jsxs)("div",{className:"userName",children:[Object(s.jsx)("img",{className:"fondo-negro user-photo",src:t,alt:"user-logo"}),Object(s.jsx)("h3",{className:"user-title",style:{cursor:"pointer",width:"calc(100% - 130px)"},children:e}),Object(s.jsx)(_,{user:e})]}),Object(s.jsx)("img",{className:" img-post fondo-negro",src:n,alt:"img-posted"}),Object(s.jsx)(E,{})]})})}}]),n}(o.a.Component),I=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={users:[]},e.fetchData=function(){"[]"===JSON.stringify(e.state.users)&&(console.log("Estoy dentro del if (fetchData in PostsTotal)"),fetch("http://192.168.1.6:3001/usuarios").then((function(e){if(200===e.status)return e.json()})).then((function(t){e.setState({users:t}),e.spinner={display:"none"}})))},e.spinner={display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",zIndex:"5"},e}return Object(l.a)(n,[{key:"render",value:function(){return this.fetchData(),Object(s.jsxs)("div",{style:{marginBottom:"80px",marginTop:"80px",position:"relative",zIndex:"1"},children:[Object(s.jsx)("div",{style:this.spinner,id:"spinnerWrapper",children:Object(s.jsx)("div",{})}),this.state.users.map((function(e){return Object(s.jsx)(A,{usuario:e})}))]})}}]),n}(o.a.Component),B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props;return Object(s.jsxs)("button",{className:"navItem",onClick:function(){e.props.mostrar(t.texto)},children:[" ",Object(s.jsx)("i",{className:t.icon+" navIcon",children:" "})," ",Object(s.jsxs)("span",{children:[" ",t.texto," "]})," "]})}}]),n}(o.a.Component),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"footer animate__animated animate__fadeInUp",children:[Object(s.jsx)(B,{mostrar:this.props.setEstado,texto:"Foto",icon:"far fa-camera"}),Object(s.jsx)(B,{mostrar:this.props.setEstado,texto:"Mensajes",icon:"far fa-envelope"}),Object(s.jsx)(B,{mostrar:this.props.setEstado,texto:"Notifications",icon:"far fa-bell"}),Object(s.jsx)(B,{mostrar:this.props.setEstado,texto:"Lugares",icon:"far fa-map-marked-alt"})]})}}]),n}(o.a.Component),z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).menuLateral={show:!0},e.showMenu=function(){e.menuLateral={show:!e.menuLateral.show}},e.state={modal:!1},e.textoModal="",e.changEstado=function(t){e.setState({modal:!e.state.modal}),e.textoModal=t},e.usuarios=[],e.printUsers=function(){var t=document.getElementById("seccionPublicaciones");e.usuarios.map((function(e){return t.innerHTML+=e.userName}))},e}return Object(l.a)(n,[{key:"render",value:function(){return localStorage.getItem("weedway-user")?Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{estado:this.menuLateral.show,showMenu:this.showMenu,setEstado:this.changEstado}),Object(s.jsx)(N,{estado:this.state.modal,setEstado:this.changEstado,view:this.textoModal}),Object(s.jsx)(I,{}),Object(s.jsx)(M,{setEstado:this.changEstado})]}):Object(s.jsx)(x,{})}}]),n}(o.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),o(e),i(e)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(z,{})}),document.getElementById("root")),T()}},[[14,1,2]]]);
//# sourceMappingURL=main.d7decf5d.chunk.js.map