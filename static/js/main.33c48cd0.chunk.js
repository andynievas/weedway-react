(this["webpackJsonpweed-way-con-react"]=this["webpackJsonpweed-way-con-react"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),o=s.n(a),r=s(7),c=s.n(r),i=(s(13),s(2)),l=s(3),j=s(5),u=s(4),d=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props;return Object(n.jsxs)("button",{className:"navItem",onClick:function(){e.props.mostrar(t.texto)},children:[" ",Object(n.jsx)("i",{className:t.icon+" navIcon",children:" "})," ",Object(n.jsxs)("span",{children:[" ",t.texto," "]})," "]})}}]),s}(o.a.Component);var h=function(e){return Object(n.jsxs)("div",{style:{border:"2px lightgreen solid",display:"flex",width:"calc(100% - 4px)"},children:[Object(n.jsx)("div",{style:{width:"80%"},id:"weedway",children:Object(n.jsxs)("h2",{children:[" ",Object(n.jsxs)("a",{href:"/",children:[" ",Object(n.jsx)("img",{src:"favicon.ico",alt:"weedway-icon"})," WeedWay "]})," "]})}),Object(n.jsx)("a",{href:"/search",className:"nav-button",children:Object(n.jsxs)("button",{children:[" ",Object(n.jsx)("i",{className:"fas fa-search navIcon",children:" "})," ",Object(n.jsx)("span",{style:{fontSize:"16px"},children:" Buscar "})," "]})}),Object(n.jsx)("a",{className:"nav-button",children:Object(n.jsxs)("button",{onClick:function(){e.setEstado("cuenta")},children:[" ",Object(n.jsx)("i",{className:"fas fa-user navIcon",children:" "})," ",Object(n.jsx)("span",{style:{fontSize:"16px"},children:" Cuenta "})," "]})})]})},p=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).styles={fontSize:"20px",fontWeight:"bold"},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("p",{children:[" ",Object(n.jsxs)("span",{style:this.styles,children:[" ",this.props.userName," "]})," ",this.props.message," "]})}}]),s}(o.a.Component),m=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).styles={height:"calc(100vh - 120px)",overflowY:"auto"},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:this.styles,children:[Object(n.jsx)("h2",{children:this.props.view}),Object(n.jsx)("p",{children:"Y aca sigue la seccion de la view correspondiente"}),Object(n.jsx)("input",{type:"text",style:{width:"200px",maxWidth:"calc(100% - 8px)",margin:"auto"},placeholder:"Buscar"}),Object(n.jsx)("button",{children:"Nuevo mensaje"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo para ver como es que se ve"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo"}),Object(n.jsx)(p,{userName:"Andy98",message:"Este es un mensaje de ejemplo"})]})}}]),s}(o.a.Component),b=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).styles={maxWidth:"400px",margin:"auto"},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{maxWidth:"300px",margin:"auto"},children:[Object(n.jsx)("h2",{style:{textAlign:"center"},children:"Perfil personal"}),Object(n.jsx)("p",{children:"Aqui puedes ver tus datos personales y posteos"}),Object(n.jsx)("input",{type:"text",placeholder:"Buscar"}),Object(n.jsx)("button",{children:"Nuevo Post"})]})}}]),s}(o.a.Component),x=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).styles={margin:"auto",padding:"0 20px",color:"rgb(220,220,220)",background:"rgb(60,60,60)",borderRadius:"20px 20px 0 0",marginTop:"70px"},e.buttonStyle={margin:"0px",width:"50px",height:"50px",backgroundColor:"red",fontSize:"28px"},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return"Mensajes"===this.props.view?Object(n.jsxs)("div",{style:this.styles,children:[Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("button",{style:this.buttonStyle,onClick:function(){e.props.setEstado()},children:" \xd7"}),Object(n.jsx)("p",{style:{width:"100%",textAlign:"center",height:"18px"},children:this.props.view})]}),Object(n.jsx)(m,{})]}):"Cuenta"===this.props.view?Object(n.jsxs)("div",{style:this.styles,children:[Object(n.jsx)("button",{style:this.buttonStyle,onClick:function(){e.props.setEstado()},children:" \xd7"}),Object(n.jsx)(b,{setEstado:this.props.setEstado})]}):"Notifications"===this.props.view?Object(n.jsxs)("div",{style:this.styles,children:[Object(n.jsx)("button",{style:this.buttonStyle,onClick:function(){e.props.setEstado()},children:" \xd7"}),Object(n.jsx)(m,{setEstado:this.props.setEstado})]}):Object(n.jsxs)("div",{style:this.styles,children:[Object(n.jsx)("button",{style:this.buttonStyle,onClick:function(){e.props.setEstado()},children:" \xd7"}),Object(n.jsx)("h2",{children:this.props.view}),Object(n.jsx)("p",{children:"Y aca sigue la seccion de la view correspondiente"})]})}}]),s}(o.a.Component),O=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).modalStyle={background:"rgb(30,30,30,0.5)",color:"white",position:"fixed",top:"0vh",bottom:"0vh",left:"0px",right:"0px",width:"auto",zIndex:"1"},e.animation=function(){return e.props.estado?" animate__backInUp":" animate__backOutDown"},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"animate__animated"+this.animation(),style:this.modalStyle,children:Object(n.jsx)(x,{view:this.props.view,setEstado:this.props.setEstado})})}}]),s}(o.a.Component),f=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={pressed:!1},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return this.state.pressed?Object(n.jsx)("i",{className:"fas fa-heart interaction-button",onClick:function(){e.setState({pressed:!1})}}):Object(n.jsx)("i",{className:"far fa-heart interaction-button",onClick:function(){e.setState({pressed:!0})}})}}]),s}(o.a.Component),v=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).ident=0,e.comentario={user:localStorage.getItem("user"),comentario:"",id:e.ident},e.onsubmit=function(t){t.preventDefault(),""!==e.comentario.comentario.trim()&&(e.props.addComment(e.comentario.user,e.comentario.comentario,e.comentario.id),e.ident+=1,e.comentario.comentario=""),t.target[0].value="",console.log(e.comentario)},e.onchange=function(t){e.comentario.comentario=t.target.value},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("form",{className:"comentar ",onSubmit:this.onsubmit,autoComplete:"off",children:[Object(n.jsx)("input",{type:"text",className:"comentario-text-input",name:"comentario",onChange:this.onchange,placeholder:"Escribe aqu\xed tu comentario..."}),Object(n.jsx)("input",{type:"submit",className:"send"})]})}}]),s}(o.a.Component),y=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={comments:[{user:"Usuario2",comentario:"Que wapo estas <3",id:0},{user:"Usuario3",comentario:"Bombonaso",id:1}]},e.addComment=function(t,s,n){var a={user:t,comentario:s,id:n};e.setState({comments:e.state.comments.concat([a])}),setTimeout((function(){console.log(e.state.comments)}),1e3)},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"interaction-section",children:[Object(n.jsx)(f,{}),Object(n.jsx)("i",{className:"far fa-share interaction-button"}),Object(n.jsxs)("p",{className:"description",children:[" ",Object(n.jsx)("span",{children:"Usuario1"})," Este es mi primer post"]}),this.state.comments.map((function(e){return Object(n.jsxs)("p",{className:"animate__animated animate__zoomIn description comentario",children:[" ",Object(n.jsxs)("span",{children:[" ",e.user," "]})," ",e.comentario," "]},e.id)})),Object(n.jsx)(v,{addComment:this.addComment})]})}}]),s}(o.a.Component),g=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={show:!1},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return this.state.show?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"dropdown smoothDown",children:[Object(n.jsx)("button",{children:"Dejar de seguir a User"}),Object(n.jsx)("button",{children:"Compartir publicaci\xf3n de User"}),Object(n.jsx)("button",{children:"Reportar a User"})]}),Object(n.jsx)("i",{className:"fas fa-ellipsis-h options",onClick:function(){e.setState({show:!e.state.show}),console.log(e)}})]}):Object(n.jsx)("div",{children:Object(n.jsx)("i",{className:"fas fa-ellipsis-h options",onClick:function(){e.setState({show:!e.state.show})}})})}}]),s}(o.a.Component);function w(e){console.log(e);var t=e.posteo.userName,s=e.posteo.profilePhoto,a=e.posteo.userPost;return Object(n.jsxs)("div",{className:"post-full",children:[Object(n.jsxs)("div",{className:"userName",children:[Object(n.jsx)("img",{className:"fondo-negro user-photo",src:s,alt:"user-logo"}),Object(n.jsx)("h3",{className:"user-title",children:t}),Object(n.jsx)(g,{})]}),Object(n.jsx)("img",{className:" img-post fondo-negro",src:a,alt:"img-posted"}),Object(n.jsx)(y,{})]})}var N=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"animate__animated animate__zoomInDown",children:[Object(n.jsx)("br",{}),Object(n.jsx)(w,{posteo:this.props.posteo}),Object(n.jsx)("br",{})]})}}]),s}(o.a.Component),C=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)(d,{mostrar:this.props.setEstado,texto:"Foto",icon:"fas fa-camera"}),Object(n.jsx)(d,{mostrar:this.props.setEstado,texto:"Mensajes",icon:"fas fa-envelope"}),Object(n.jsx)(d,{mostrar:this.props.setEstado,texto:"Notifications",icon:"fas fa-search"}),Object(n.jsx)(d,{mostrar:this.props.setEstado,texto:"Lugares",icon:"fas fa-map-marked-alt"})]})}}]),s}(o.a.Component),E=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={modal:!1},e.textoModal="",e.changEstado=function(t){e.setState({modal:!e.state.modal}),e.textoModal=t},e.usuarios=[{userName:"andynievas92",profilePhoto:"https://thispersondoesnotexist.com/image",userPost:"https://thispersondoesnotexist.com/image"},{userName:"reyJulian",profilePhoto:"https://thispersondoesnotexist.com/image",userPost:"https://thispersondoesnotexist.com/image"},{userName:"mamfristo",profilePhoto:"https://thispersondoesnotexist.com/image",userPost:"https://thispersondoesnotexist.com/image"},{userName:"salchipapa",profilePhoto:"https://thispersondoesnotexist.com/image",userPost:"https://thispersondoesnotexist.com/image"},{userName:"ndeaaaAa",profilePhoto:"https://thispersondoesnotexist.com/image",userPost:"https://thispersondoesnotexist.com/image"},{userName:"otros",profilePhoto:"https://thispersondoesnotexist.com/image",userPost:"https://thispersondoesnotexist.com/image"}],e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{setEstado:this.changEstado}),Object(n.jsx)(O,{estado:this.state.modal,setEstado:this.changEstado,view:this.textoModal}),this.usuarios.map((function(e){return Object(n.jsx)(N,{posteo:e})})),Object(n.jsx)(C,{setEstado:this.changEstado})]})}}]),s}(o.a.Component),k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,15)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),o(e),r(e)}))};c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),k()}},[[14,1,2]]]);
//# sourceMappingURL=main.33c48cd0.chunk.js.map