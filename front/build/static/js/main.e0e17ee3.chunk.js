(this.webpackJsonpolx=this.webpackJsonpolx||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){},207:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(21),r=n.n(i),o=(n(181),n(10)),s=(n(182),n(24)),l=n(330),j=n(325),d=n(331),b=n(317),x=n(327),u=n(328),h=n(324),p=n(37),m=n(25),g=n.n(m),O=n(43),f="USER_REGISTER_DATA",v="GET_DATA",y="PRODUCT_DATA",C="http://localhost:8000",w=function(){return function(){var e=Object(O.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat(C,"/getdata"));case 3:n=e.sent,t({type:v,payload:n.data.newData}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},k=n(22),S=n(1);function N(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),m=r[0],v=r[1],y=Object(a.useState)(""),w=Object(o.a)(y,2),N=w[0],T=w[1],D=Object(a.useState)(""),I=Object(o.a)(D,2),A=I[0],W=I[1],P=Object(p.b)(),M=Object(k.e)();return Object(S.jsx)(l.a,{className:"signupParentDiv",width:"35%",children:Object(S.jsxs)(j.a,{component:"form",flexDirection:"column",direction:"column ",children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(d.a,{component:"h1",variant:"h5",sx:{textAlign:"center",fontWeight:"bold",marginTop:2,marginBottom:2},children:"Signup"})}),Object(S.jsx)(h.a,{margin:"5px",children:Object(S.jsxs)(j.a,{component:"form",flexDirection:"column",direction:"column ",gap:2,spacing:5,children:[Object(S.jsxs)(j.a,{sx:{marginTop:"5px"},children:[" ",Object(S.jsx)(b.a,{label:"User Name",variant:"filled",required:!0,fullWidth:!0,value:n,onChange:function(e){return c(e.target.value)}})]}),Object(S.jsx)(j.a,{sx:{marginTop:"5px"},children:Object(S.jsx)(b.a,{label:"Email",variant:"filled",fullWidth:!0,type:"email",required:!0,value:m,onChange:function(e){return v(e.target.value)}})}),Object(S.jsxs)(j.a,{sx:{marginTop:"5px"},children:[" ",Object(S.jsx)(b.a,{label:"Phone",variant:"filled",type:"Phone",fullWidth:!0,required:!0,value:N,onChange:function(e){return T(e.target.value)}})]}),Object(S.jsx)(j.a,{sx:{marginTop:"5px"},children:Object(S.jsx)(b.a,{label:"Password",variant:"filled",fullWidth:!0,type:"password",required:!0,value:A,onChange:function(e){return W(e.target.value)}})}),Object(S.jsx)(x.a,{sx:{marginTop:"10px"},onClick:function(e){e.preventDefault();var t,a={userName:n,email:m,phone:N,password:A};console.log(a),P((t=a,function(){var e=Object(O.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("".concat(C,"/signup"),{data:t});case 3:a=e.sent,n({type:f,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())).then((function(e){M.push("/login")}))},children:"Submit"}),Object(S.jsx)(u.a,{href:"/admin/login",sx:{marginTop:"5px"},children:"Login"})]})})]})})}var T=function(){return Object(S.jsx)("div",{children:Object(S.jsx)(N,{})})},D=n(36),I=n(45),A=n(3),W=n(6),P=n(306),M=n(333),E=n(334),z=n(332),B=n(321),F=n(322),q=n(164),L=n(153),_=n.n(L),R=n(154),H=n.n(R),G=n(152),V=n.n(G),K=n(150),U=n.n(K),Y=n(151),J=n.n(Y),Q=n(155),Z=n.n(Q),X=n(315),$=n(318),ee=Object(W.a)("div")((function(e){var t=e.theme;return Object(A.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(P.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(25),width:"auto"})})),te=Object(W.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"end"}}));function ne(){var e=c.a.useState(null),t=Object(o.a)(e,2),n=t[0],i=t[1],r=c.a.useState(null),j=Object(o.a)(r,2),h=j[0],p=j[1],m=Boolean(n),f=Boolean(h),v=function(){p(null)},y=function(){i(null),v()},C=Object(S.jsxs)(q.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:y,children:[Object(S.jsx)(F.a,{onClick:y,children:"Profile"}),Object(S.jsx)(F.a,{onClick:y,children:"My account"})]}),w=Object(S.jsxs)(q.a,{anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:v,children:[Object(S.jsxs)(F.a,{children:[Object(S.jsx)(z.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(S.jsx)(B.a,{badgeContent:4,color:"error",children:Object(S.jsx)(U.a,{})})}),Object(S.jsx)("p",{children:"Messages"})]}),Object(S.jsxs)(F.a,{children:[Object(S.jsx)(z.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:Object(S.jsx)(B.a,{badgeContent:17,color:"error",children:Object(S.jsx)(J.a,{})})}),Object(S.jsx)("p",{children:"Notifications"})]}),Object(S.jsxs)(F.a,{onClick:function(e){i(e.currentTarget)},children:[Object(S.jsx)(z.a,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(S.jsx)(V.a,{})}),Object(S.jsx)("p",{children:"Profile"})]})]}),N=localStorage.getItem("TOKEN"),T=(Object(k.e)(),Object(a.useState)([])),D=Object(o.a)(T,2),A=D[0],W=D[1],P=Object(a.useState)([]),L=Object(o.a)(P,2),R=(L[0],L[1],function(){var e=Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("http://localhost:8000/getdata").then((function(e){var t=e.data.newData;W(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){R()}),[]),Object(S.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(S.jsx)(M.a,{position:"fixed",children:Object(S.jsxs)(E.a,{children:[Object(S.jsx)(z.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(S.jsx)(_.a,{})}),Object(S.jsx)(d.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"},fontWeight:"bolder",fontSize:20},children:Object(S.jsx)(u.a,{color:"inherit",href:"/",children:"SaLeCarT"})}),Object(S.jsx)(X.a,{sx:{width:"600px",marginLeft:"",display:{xs:"none",sm:"block"}},children:Object(S.jsxs)(ee,{sx:{display:{xs:"none",md:"block"}},children:[Object(S.jsx)(te,{children:Object(S.jsx)(H.a,{})}),Object(S.jsx)($.a,{freeSolo:!0,id:"free-solo-2-demo",disableClearable:!0,options:A.map((function(e){return e.item})),renderInput:function(e){return Object(S.jsx)(b.a,Object(I.a)(Object(I.a)({},e),{},{InputProps:Object(I.a)(Object(I.a)({},e.InputProps),{},{type:"search"})}))}})]})}),Object(S.jsx)(l.a,{sx:{flexGrow:1}}),Object(S.jsx)(l.a,{children:Object(S.jsx)(X.a,{children:N?Object(S.jsx)(l.a,{className:"",style:{display:"flex",justifyContent:"center",backgroundColor:"",marginRight:20},children:Object(S.jsx)(u.a,{href:"/login",children:Object(S.jsx)(x.a,{variant:"button",onClick:function(){localStorage.removeItem("TOKEN"),localStorage.removeItem("ADMIN")},sx:{color:"white",fontSize:11,backgroundColor:"inherit",boxShadow:5},children:"logout"})})}):Object(S.jsxs)(l.a,{style:{display:"flex",justifyContent:"center",backgroundColor:"",marginRight:20},children:[Object(S.jsx)(u.a,{href:"/login",children:Object(S.jsx)(x.a,{variant:"button",sx:{color:"white",backgroundColor:"",boxShadow:5,fontSize:11},children:"login"})}),Object(S.jsx)(u.a,{href:"/signup",children:Object(S.jsx)(x.a,{variant:"button",sx:{color:"white",backgroundColor:"",boxShadow:5,fontSize:11},children:"signup"})}),Object(S.jsx)("hr",{})]})})}),Object(S.jsx)(l.a,{sx:{display:{xs:"block",md:"flex"},boxShadow:10,borderRadius:2},children:Object(S.jsx)(z.a,{size:"small","aria-label":"show 4 new mails",color:"inherit",children:Object(S.jsxs)(B.a,{color:"error",children:[Object(S.jsxs)(d.a,{fontSize:"19px",sx:{display:{xs:"none",md:"flex"}},children:[Object(S.jsx)(u.a,{color:"inherit",href:"/create",sx:{textDecoration:"none"},children:"Sell"})," "]}),Object(S.jsx)(Z.a,{})]})})})]})}),w,C]})}n(198),n(206),n(207);var ae=n(94),ce=n.n(ae),ie=n(95),re=n(46);var oe=function(){var e=c.a.useState(0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(re.a)(),r=Object(ie.autoPlay)(ce.a);return Object(S.jsx)(r,{axis:"rtl"===i.direction?"x-reverse":"x",index:n,onChangeIndex:function(e){a(e)},enableMouseEvents:!0,children:[{src:"https://images.unsplash.com/photo-1546502208-81d149d52bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"},{src:"https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},{src:"https://media.istockphoto.com/id/1393588419/photo/beautiful-smiling-woman-buying-products-in-supermarket.jpg?s=170667a&w=0&k=20&c=vtNc0VFqpHBjG60tsHnlu1Ljsp1rj9DRbe83oWxjd7o="},{src:"https://images.unsplash.com/photo-1528952686551-542043782ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"}].map((function(e){return Object(S.jsx)(l.a,{component:"img",sx:Object(A.a)({margin:"auto",height:500,display:"block",overflow:"hidden",width:"92%",marginTop:12,marginBottom:3,padding:.3,boxShadow:9,borderRadius:3},i.breakpoints.down("md"),{height:200}),src:e.src})}))})},se=n(335),le=n(336),je=n(337),de=n(338);function be(){return Object(S.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024","data-aut-id":"icon",className:!0,fillRule:"evenodd",children:Object(S.jsx)("path",{className:"rui-77aaa",d:"M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"})})}n(246);var xe=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return null===e||void 0===e?void 0:e.user})).productslist;console.log("my data",t),Object(a.useEffect)((function(){e(w())}),[]);var n=t.filter((function(e){return"Mobile Accessories"===e.category})),c=t.filter((function(e){return"Bikes & Cars"===e.category})),i=(localStorage.getItem("ADMIN"),t.filter((function(e){return"Pets"===e.category}))),r=t.sort((function(e,t){return e.price-t.price}));return Object(S.jsxs)("div",{className:"postParentDiv",children:[Object(S.jsxs)("div",{className:"moreView",children:[Object(S.jsxs)("div",{className:"heading",children:[Object(S.jsx)("span",{children:"Quick Menu"}),Object(S.jsx)("span",{children:"View more"})]}),Object(S.jsx)("div",{className:"cards",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("div",{className:"favorite",children:Object(S.jsx)(be,{})}),Object(S.jsx)("div",{className:"image",children:Object(S.jsx)("a",{href:"/product/".concat(e._id),children:Object(S.jsx)("img",{src:"/images/".concat(e._id+0,".jpg"),alt:e.item})},e._id)}),Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("p",{className:"rate",children:e.item}),Object(S.jsx)("span",{className:"kilometer",children:e.price}),Object(S.jsxs)("p",{className:"name",children:[" ",e.category]})]})]})}))})]}),Object(S.jsxs)(j.a,{container:!0,spacing:2,sx:{padding:2},children:[Object(S.jsxs)(j.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:[" ",Object(S.jsx)(d.a,{variant:"h5",sx:{marginTop:1,color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:"Featured Products"})]}),r.map((function(e){return Object(S.jsx)(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:3,backgroundColor:"white",sx:{},children:Object(S.jsx)(se.a,{backgroundColor:"black",sx:{},children:Object(S.jsx)(u.a,{href:"/product/".concat(e._id),children:Object(S.jsxs)(le.a,{children:[Object(S.jsx)(j.a,{"sx-":{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsx)(je.a,{component:"img",height:"200",sx:{objectFit:"contain",padding:2},image:"/images/".concat(e._id+0,".jpg")})}),Object(S.jsxs)(de.a,{children:[Object(S.jsx)(d.a,{variant:"h5",sx:{color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:e.item}),Object(S.jsx)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:e.category}),Object(S.jsxs)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:["\u20b9 ",e.price]})]})]})})})})}))]}),Object(S.jsxs)(j.a,{container:!0,spacing:1,sx:{padding:3},children:[Object(S.jsxs)(j.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:[" ",Object(S.jsx)(d.a,{variant:"h5",sx:{marginTop:1,color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:"Bikes & Cars"})]}),c.map((function(e){return Object(S.jsx)(j.a,{item:!0,xs:12,sm:6,md:3,lg:2,xl:2,children:Object(S.jsx)(se.a,{backgroundColor:"black",sx:{},children:Object(S.jsx)(u.a,{children:Object(S.jsxs)(le.a,{children:[Object(S.jsx)(j.a,{"sx-":{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsx)(je.a,{component:"img",height:"200",sx:{padding:2,objectFit:"contain"},image:"/images/".concat(e._id+0,".jpg")})}),Object(S.jsxs)(de.a,{children:[Object(S.jsx)(d.a,{variant:"h5",sx:{color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:e.item}),Object(S.jsx)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:e.category}),Object(S.jsxs)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:["\u20b9 ",e.price]})]})]})})})})}))]}),Object(S.jsxs)(j.a,{container:!0,spacing:1,sx:{backgroundColor:" "},children:[Object(S.jsxs)(j.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:[" ",Object(S.jsx)(d.a,{variant:"h5",sx:{marginTop:1,backgroundColor:"",color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:"Mobile Accessories"})]}),n.map((function(e){return Object(S.jsx)(j.a,{item:!0,xs:12,sm:6,md:3,lg:2,xl:2,children:Object(S.jsx)(se.a,{backgroundColor:"black",sx:{},children:Object(S.jsxs)(le.a,{children:[Object(S.jsx)(j.a,{"sx-":{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsx)(je.a,{component:"img",height:"200",sx:{padding:2,objectFit:"contain"},image:"/images/".concat(e._id+0,".jpg")})}),Object(S.jsxs)(de.a,{children:[Object(S.jsx)(d.a,{variant:"h5",sx:{color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:e.item}),Object(S.jsx)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:e.category}),Object(S.jsxs)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:["\u20b9 ",e.price]})]})]})})})}))]}),Object(S.jsxs)(j.a,{container:!0,spacing:1,sx:{marginBottom:2},children:[Object(S.jsxs)(j.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:[" ",Object(S.jsx)(d.a,{variant:"h5",sx:{marginTop:1,color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:"Pets"})]}),i.map((function(e){return Object(S.jsx)(j.a,{item:!0,xs:12,sm:6,md:3,lg:2,xl:2,children:Object(S.jsx)(se.a,{backgroundColor:"black",sx:{},children:Object(S.jsxs)(le.a,{children:[Object(S.jsx)(j.a,{"sx-":{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsx)(je.a,{component:"img",height:"200",sx:{padding:2,objectFit:"contain"},image:"/images/".concat(e._id+0,".jpg")})}),Object(S.jsxs)(de.a,{children:[Object(S.jsx)(d.a,{variant:"h5",sx:{color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:e.item}),Object(S.jsx)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:e.category}),Object(S.jsxs)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:["\u20b9 ",e.price]})]})]})})})}))]})]})},ue=n(28);function he(){return Object(S.jsxs)(ue.c,{className:"bg-dark text-center text-white",children:[Object(S.jsx)(ue.b,{className:"p-4 pb-0",children:Object(S.jsx)("section",{className:"mb-4",children:Object(S.jsxs)(u.a,{href:"/admin/login",children:[Object(S.jsx)(ue.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"/admin/login",role:"button",children:Object(S.jsx)(ue.d,{fab:!0,icon:"facebook-f"})}),Object(S.jsx)(ue.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"/admin/login",role:"button",children:Object(S.jsx)(ue.d,{fab:!0,icon:"twitter"})}),Object(S.jsx)(ue.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"/admin/login",role:"button",children:Object(S.jsx)(ue.d,{fab:!0,icon:"google"})}),Object(S.jsx)(ue.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"/admin/login",role:"button",children:Object(S.jsx)(ue.d,{fab:!0,icon:"instagram"})}),Object(S.jsx)(ue.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"/admin/login",role:"button",children:Object(S.jsx)(ue.d,{fab:!0,icon:"linkedin-in"})}),Object(S.jsx)(ue.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(S.jsx)(ue.d,{fab:!0,icon:"github"})})]})})}),Object(S.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2022-",Object(S.jsx)("a",{className:"text-white",href:"www.alfeez1010.com",children:"WWW.ALFEEZ.COM"})]})]})}var pe=function(e){var t=Object(k.e)();return Object(a.useEffect)((function(){return function(){localStorage.getItem("TOKEN")?(t.push("/"),console.log("  TOKEN ")):console.log(" NO TOKEN")}}),[]),Object(S.jsxs)("div",{className:"homeParentDiv",children:[Object(S.jsx)(ne,{}),Object(S.jsx)(oe,{}),Object(S.jsx)(xe,{}),Object(S.jsx)(he,{})]})};n(247);var me=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),p=r[0],m=r[1],g=Object(a.useState)(!1),O=Object(o.a)(g,2),f=O[0],v=O[1],y=Object(a.useState)(""),C=Object(o.a)(y,2),w=C[0],N=C[1],T=Object(k.e)(),D={email:n,password:p};return Object(S.jsx)(l.a,{className:"signupParentDiv",width:"35%",children:Object(S.jsxs)(j.a,{component:"form",flexDirection:"column",direction:"column ",children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(d.a,{component:"h1",variant:"h5",sx:{textAlign:"center",fontWeight:"bold",marginTop:2,marginBottom:2},children:"Login"})}),Object(S.jsx)(h.a,{margin:"5px",children:Object(S.jsxs)(j.a,{component:"form",flexDirection:"column",direction:"column ",gap:2,spacing:5,children:[Object(S.jsx)(j.a,{sx:{marginTop:"5px"},children:Object(S.jsx)(b.a,{label:"Email",variant:"filled",fullWidth:!0,type:"email",required:!0,value:n,onChange:function(e){return c(e.target.value)}})}),Object(S.jsx)(j.a,{sx:{marginTop:"5px"},children:Object(S.jsx)(b.a,{label:"Password",variant:"filled",fullWidth:!0,type:"password",required:!0,value:p,onChange:function(e){return m(e.target.value)}})}),Object(S.jsx)(j.a,{children:f?Object(S.jsx)(d.a,{style:{color:"red",textAlign:"center",fontWeight:"bold"},children:w}):""}),Object(S.jsx)(x.a,{sx:{marginTop:"10px"},onClick:function(e){e.preventDefault(),s.a.post("http://localhost:8000/login",D).then((function(e){localStorage.setItem("TOKEN",e.data.token),localStorage.removeItem("ADMIN"),localStorage.setItem("email",e.data.user.email),localStorage.setItem("name",e.data.user.userName),localStorage.setItem("phone",e.data.user.phone),T.push("/")})).catch((function(e){console.log(e),N(e.response.data.message),v(!0)}))},children:"Submit"}),Object(S.jsx)(u.a,{href:"/signup",sx:{marginTop:"5px"},children:"signup"})]})})]})})},ge=n(157),Oe=n.n(ge),fe=n(159),ve=n.n(fe),ye=n(160),Ce=n.n(ye),we=n(320),ke=n(158),Se=n.n(ke),Ne=function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),h=Object(o.a)(r,2),m=h[0],f=h[1],v=Object(a.useState)(""),N=Object(o.a)(v,2),T=N[0],D=N[1],I=Object(a.useState)(""),A=Object(o.a)(I,2),W=A[0],P=A[1],M=Object(a.useState)(),E=Object(o.a)(M,2),z=E[0],B=E[1],q=Object(k.e)(),L=c.a.useState(0),_=Object(o.a)(L,2),R=_[0],H=_[1],G=Object(p.b)(),V=Object(p.c)((function(e){return null===e||void 0===e?void 0:e.user})).productslist,K=Object(p.c)((function(e){return null===e||void 0===e?void 0:e.user})).singleProduct,U=K._id,Y=K.imageLength,J=Object(re.a)(),Q=Object(k.f)("").id,Z=function(){var e=Object(O.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",z),n.append("item",m),n.append("price",W),n.append("category",T),e.next=8,s.a.patch("http://localhost:8000/updateproduct/".concat(Q),n).then((function(e){q.push("/")})).catch((function(e){console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=V.filter((function(e){return e.item===K.item||e.price===K.price||e.name===K.name})),ee=null===Y||void 0===Y?void 0:Y.length;Object(a.useEffect)((function(){G(w()),G(function(e){return function(){var t=Object(O.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(C,"/getproduct/").concat(e));case 3:a=t.sent,n({type:y,payload:null===a||void 0===a?void 0:a.data}),console.log(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Q))}),[]);for(var te=Object(ie.autoPlay)(ce.a),ne=[],ae=1;ae<=ee;ae++)ne.push(ae);var oe=function(){var e=Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("http://localhost:8000/deleteproduct/".concat(Q)).then((function(e){q.push("/")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=localStorage.getItem("ADMIN");return Object(S.jsxs)(j.a,{container:!0,rowSpacing:1,columnSpacing:3,padding:5,paddingTop:13,children:[Object(S.jsx)(j.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,width:"100%",height:500,marginBottom:3,children:Object(S.jsx)(te,{axis:"rtl"===J.direction?"x-reverse":"x",index:R,onChangeIndex:function(e){H(e)},enableMouseEvents:!0,children:ne.map((function(e,t){return Object(S.jsx)(l.a,{border:2,boxShadow:10,sx:{height:500,display:"block",maxWidth:"100%",overflow:"hidden",width:"100%",boxShadow:"86px"},children:Object(S.jsx)("img",{style:{width:"100%",height:"100%"},src:"/images/".concat(U+t,".jpg"),alt:""})})}))})}),Object(S.jsxs)(j.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,width:"100%",sx:{backgroundColor:""},display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",direction:"column",gap:2,children:[" ",be?Object(S.jsx)(j.a,{children:Object(S.jsxs)(X.a,{spacing:1,direction:"row",style:{marginLeft:0,marginTop:1},children:[Object(S.jsxs)(x.a,{variant:"outlined",onClick:function(){return i(!0)},children:["Edit",Object(S.jsx)(Oe.a,{})]}),Object(S.jsxs)(x.a,{variant:"outlined",onClick:oe,children:["Delete",Object(S.jsx)(Se.a,{})]})]})}):"",Object(S.jsx)(j.a,{direction:"column",gap:3,backgroundColor:"",sx:{width:"70%"},children:Object(S.jsxs)(j.a,{sx:{backgroundColor:"",border:2,padding:2,boxShadow:10},children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(d.a,{variant:"h5",sx:{fontSize:25,fontFamily:"bolder",textAlign:"center"},children:"Product Detials"})}),Object(S.jsxs)(j.a,{marginTop:"4px",children:[Object(S.jsx)(d.a,{sx:{fontSize:20,fontFamily:"bolder",margin:"auto",textAlign:"center"},children:K.item}),Object(S.jsx)(d.a,{sx:{fontSize:20,fontFamily:"bold",margin:"auto",textAlign:"center"},children:K.category}),Object(S.jsxs)(d.a,{sx:{fontSize:20,fontFamily:"bold",margin:"auto",textAlign:"center"},children:["\u20b9",K.price]})]})]})}),Object(S.jsx)(we.a,{open:n,onClose:function(){return i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(S.jsx)(l.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:Object(S.jsxs)(X.a,{direction:"column",gap:2,children:[Object(S.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Product Detials"}),Object(S.jsx)(b.a,{fullWidth:!0,id:"outlined-name",label:"Product Name",defaultValue:K.item,onChange:function(e){return f(e.target.value)}}),Object(S.jsx)(b.a,{id:"outlined-select-currency",select:!0,label:"Select",defaultValue:K.category,onChange:function(e){return D(e.target.value)},helperText:"Please select your currency",children:[{value:"Bikes & Cars",label:"Bikes & Cars"},{value:"Mobile Accessories",label:"Mobile Accessories"},{value:"Computer & Laptops",label:"Computer & Laptops"},{value:"Pets",label:"Pets"}].map((function(e,t){return Object(S.jsx)(F.a,{index:K._id,value:e.value,children:e.label},e.value)}))}),Object(S.jsx)(b.a,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:K.price,onChange:function(e){return P(e.target.value)}}),Object(S.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];B(t)}}),Object(S.jsx)(x.a,{variant:"contained",component:"label",onClick:Z,children:"Submit"})]})})}),Object(S.jsx)(j.a,{direction:"column",gap:3,backgroundColor:"",sx:{width:"70%"},children:Object(S.jsxs)(j.a,{sx:{backgroundColor:"",border:2,padding:2,boxShadow:10},children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(d.a,{variant:"h5",sx:{fontSize:25,fontFamily:"bolder",textAlign:"center"},children:"Seller Detials"})}),Object(S.jsxs)(j.a,{marginTop:"4px",children:[Object(S.jsxs)(d.a,{sx:{fontSize:20,fontFamily:"bolder",margin:"auto",textAlign:"center"},children:["Mobile : ",K.phone]}),Object(S.jsxs)(d.a,{sx:{fontSize:20,fontFamily:"bold",margin:"auto",textAlign:"center"},children:["Email : ",K.email]}),Object(S.jsxs)(d.a,{sx:{fontSize:20,fontFamily:"bold",margin:"auto",textAlign:"center"},children:["\u20b9",K.price]}),Object(S.jsxs)(X.a,{direction:"row",spacing:1,sx:{margin:"2px",alignContent:"center",justifyContent:"center",textAlign:"center",display:"flex"},children:[Object(S.jsx)(u.a,{href:"https://wa.me/".concat(K.phone),children:Object(S.jsx)(ve.a,{sx:{fontSize:"35px"},color:"success"})}),Object(S.jsxs)(u.a,{href:"tel:".concat(K.phone),children:[" ",Object(S.jsx)(Ce.a,{sx:{fontSize:"35px"},color:"success"})]})]})]})]})})]}),Object(S.jsx)(j.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,sx:{backgroundColor:""},width:"100%",margin:"auto",marginTop:10,children:Object(S.jsxs)(j.a,{container:!0,spacing:1,backgroundColor:"",width:"100%",sx:{boxShadow:10,padding:2},margin:"auto",children:[Object(S.jsxs)(j.a,{item:!0,xs:12,sm:12,md:12,lg:11,xl:11,margin:"auto",children:[" ",Object(S.jsx)(d.a,{variant:"h5",sx:{marginTop:1,color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:"Similar Products"})]}),$.map((function(e){return Object(S.jsx)(j.a,{item:!0,xs:4,sm:4,md:2,lg:1.5,xl:1.5,children:Object(S.jsx)(se.a,{backgroundColor:"black",sx:{minHeight:315,maxHeight:320},children:Object(S.jsx)(u.a,{href:"/product/".concat(e._id),children:Object(S.jsxs)(le.a,{children:[Object(S.jsx)(j.a,{"sx-":{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsx)(je.a,{component:"img",height:"200",sx:{padding:2,objectFit:"contain"},image:"/images/".concat(e._id+0,".jpg")})}),Object(S.jsxs)(de.a,{children:[Object(S.jsx)(d.a,{variant:"h7",sx:{color:"black",display:"flex",justifyContent:"center",fontWeight:"bold"},children:e.item}),Object(S.jsx)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:e.category}),Object(S.jsxs)(d.a,{sx:{color:"black",display:"flex",justifyContent:"center"},children:["\u20b9 ",e.price]})]})]})})})})}))]})})]})};var Te=function(e){return Object(S.jsxs)("div",{children:[Object(S.jsx)(ne,{}),Object(S.jsx)(Ne,{})]})},De=(n(248),function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),x=b[0],u=b[1],h=Object(a.useState)(),p=Object(o.a)(h,2),m=p[0],g=p[1],O=Object(k.e)(),f=function(e){var t=e.target.files;g(t),console.log(t)},v=localStorage.getItem("name"),y=localStorage.getItem("email"),C=localStorage.getItem("phone");return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{marginBottom:"50px",children:Object(S.jsx)(ne,{})}),Object(S.jsx)("div",{className:"divclass",height:"1000vh",backgroundColor:"red",marginTop:10,children:Object(S.jsxs)("div",{className:"centerDiv",style:{margin:"auto",marginBottom:0,justifyContent:"center",justifyItems:"center",alignContent:"center",alignItems:"center"},children:[Object(S.jsxs)("form",{sx:{display:"flex",justifyContent:"center",justifyItems:"center",alignContent:"center",alignItems:"center"},children:[Object(S.jsx)("label",{htmlFor:"fname",children:"Product Name"}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{className:"input",type:"text",id:"fname",name:"Name",onChange:function(e){return c(e.target.value)}}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{htmlFor:"fname",children:"Category "}),Object(S.jsxs)("select",{name:"cars",id:"cars",style:{marginLeft:20,width:150},onChange:function(e){return j(e.target.value)},children:[Object(S.jsx)("option",{value:"Bikes & Cars",children:"Bikes & Cars"}),Object(S.jsx)("option",{value:"Mobile Accessories",children:"Mobile Accessories"}),Object(S.jsx)("option",{value:"Computer & Laptops",children:"Computer & Laptops"}),Object(S.jsx)("option",{value:"Pets",children:"Pets"})]}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{htmlFor:"fname",children:"Price"}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{className:"input",type:"number",id:"fname",name:"Price",onChange:function(e){return u(e.target.value)}}),Object(S.jsx)("br",{})]}),Object(S.jsx)("br",{}),Object(S.jsxs)("form",{encType:"multipart/form-data",children:[Object(S.jsx)("img",{alt:"posts",width:"200px",height:"200px",src:f,onChange:function(e){return g(e.target.files)}}),Object(S.jsx)("input",{type:"file",onChange:f,multiple:!0}),Object(S.jsx)("br",{}),Object(S.jsx)("button",{onClick:function(e){e.preventDefault();var t=new FormData;t.append("item",n),t.append("price",x),t.append("category",l),t.append("userName",v),t.append("email",y),t.append("phone",C),Array.from(m).forEach((function(e){t.append("image",e)})),s.a.post("http://localhost:8000/product",t).then((function(e){console.log(e),O.push("/")})).catch((function(e){console.log(e)}))},className:"uploadBtn",children:"upload and Submit"})]})]})}),Object(S.jsx)("div",{children:Object(S.jsx)(he,{})})]})}),Ie=function(){return Object(S.jsx)(a.Fragment,{children:Object(S.jsx)(De,{})})};n(249);var Ae=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),p=r[0],m=r[1],g=Object(a.useState)(!1),O=Object(o.a)(g,2),f=O[0],v=O[1],y=Object(a.useState)(""),C=Object(o.a)(y,2),w=C[0],N=C[1],T=Object(k.e)(),D={email:n,password:p};return Object(S.jsx)(l.a,{className:"signupParentDiv",width:"35%",children:Object(S.jsxs)(j.a,{component:"form",flexDirection:"column",direction:"column ",children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(d.a,{component:"h1",variant:"h5",sx:{textAlign:"center",fontWeight:"bold",marginTop:2,marginBottom:2},children:"Admin Signup"})}),Object(S.jsx)(h.a,{margin:"5px",children:Object(S.jsxs)(j.a,{component:"form",flexDirection:"column",direction:"column ",gap:2,spacing:5,children:[Object(S.jsx)(j.a,{sx:{marginTop:"5px"},children:Object(S.jsx)(b.a,{label:"Email",variant:"filled",fullWidth:!0,type:"email",required:!0,value:n,onChange:function(e){return c(e.target.value)}})}),Object(S.jsx)(j.a,{sx:{marginTop:"5px"},children:Object(S.jsx)(b.a,{label:"Password",variant:"filled",fullWidth:!0,type:"password",required:!0,value:p,onChange:function(e){return m(e.target.value)}})}),Object(S.jsx)(j.a,{children:f?Object(S.jsx)(d.a,{style:{color:"red",textAlign:"center",fontWeight:"bold"},children:w}):""}),Object(S.jsx)(x.a,{sx:{marginTop:"10px"},onClick:function(e){e.preventDefault(),s.a.post("http://localhost:8000/admin/login",D).then((function(e){localStorage.setItem("ADMIN",e.data.adminToken),console.log(e.data),T.push("/")})).catch((function(e){console.log(e),N(e.response.data.message),v(!0)}))},children:"Submit"}),Object(S.jsx)(u.a,{href:"/admin/register",sx:{marginTop:"5px"}})]})})]})})};n(250);function We(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),p=r[0],m=r[1],g=Object(a.useState)(""),O=Object(o.a)(g,2),f=O[0],v=O[1],y=Object(a.useState)(""),C=Object(o.a)(y,2),w=C[0],N=C[1],T=Object(k.e)();return Object(S.jsx)(l.a,{className:"signupParentDiv",width:"35%",children:Object(S.jsxs)(j.a,{component:"form",flexDirection:"column",direction:"column ",children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(d.a,{component:"h1",variant:"h5",sx:{textAlign:"center",fontWeight:"bold",marginTop:2,marginBottom:2},children:"Admin Signup"})}),Object(S.jsx)(h.a,{margin:"5px",children:Object(S.jsxs)(j.a,{component:"form",flexDirection:"column",direction:"column ",gap:2,spacing:5,children:[Object(S.jsxs)(j.a,{sx:{marginTop:"5px"},children:[" ",Object(S.jsx)(b.a,{label:"User Name",variant:"filled",required:!0,fullWidth:!0,value:n,onChange:function(e){return c(e.target.value)}})]}),Object(S.jsx)(j.a,{sx:{marginTop:"5px"},children:Object(S.jsx)(b.a,{label:"Email",variant:"filled",fullWidth:!0,type:"email",required:!0,value:p,onChange:function(e){return m(e.target.value)}})}),Object(S.jsxs)(j.a,{sx:{marginTop:"5px"},children:[" ",Object(S.jsx)(b.a,{label:"Phone",variant:"filled",type:"Phone",fullWidth:!0,required:!0,value:f,onChange:function(e){return v(e.target.value)}})]}),Object(S.jsx)(j.a,{sx:{marginTop:"5px"},children:Object(S.jsx)(b.a,{label:"Password",variant:"filled",fullWidth:!0,type:"password",required:!0,value:w,onChange:function(e){return N(e.target.value)}})}),Object(S.jsx)(x.a,{sx:{marginTop:"10px"},onClick:function(e){e.preventDefault();var t={userName:n,email:p,phone:f,password:w};console.log(t),s.a.post("http://localhost:8000/admin/register",t).then((function(e){console.log("done"),T.push("/admin/login")})).catch((function(e){console.log(e)}))},children:"Submit"}),Object(S.jsx)(u.a,{href:"/admin/login",sx:{marginTop:"5px"},children:"Login"})]})})]})})}var Pe=function(){var e=localStorage.getItem("TOKEN"),t=localStorage.getItem("ADMIN");return Object(S.jsx)("div",{children:Object(S.jsxs)(D.a,{children:[Object(S.jsxs)(k.a,{exact:!0,path:"/",children:[Object(S.jsx)(pe,{})," "]}),Object(S.jsxs)(k.a,{exact:!0,path:"/signup",children:[Object(S.jsx)(T,{})," "]}),Object(S.jsx)(k.a,{exact:!0,path:"/login",children:Object(S.jsx)(me,{})}),e||t?Object(S.jsx)(k.a,{exact:!0,path:"/create",children:Object(S.jsx)(Ie,{})}):Object(S.jsxs)(k.a,{exact:!0,path:"/create",children:[Object(S.jsx)(me,{})," "]}),Object(S.jsx)(k.a,{exact:!0,path:"/product/:id",children:Object(S.jsx)(Te,{})}),Object(S.jsxs)(k.a,{exact:!0,path:"/admin/login",children:[Object(S.jsx)(Ae,{})," "]}),Object(S.jsx)(k.a,{exact:!0,path:"/admin/register",children:Object(S.jsx)(We,{})})]})})},Me=n(72),Ee=n(162),ze=n(161),Be=n(15),Fe={productslist:[],singleProduct:[],updatedData:{}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:return[a].concat(Object(Be.a)(e));case v:return Object(I.a)(Object(I.a)({},e),{},{productslist:a});case y:return Object(I.a)(Object(I.a)({},e),{},{singleProduct:a});default:return e}},Le=Object(Me.combineReducers)({user:qe}),_e=[Ee.a],Re=Object(Me.createStore)(Le,Object(ze.composeWithDevTools)(Me.applyMiddleware.apply(void 0,_e)));r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(p.a,{store:Re,children:Object(S.jsx)(Pe,{})})}),document.getElementById("root"))}},[[251,1,2]]]);
//# sourceMappingURL=main.e0e17ee3.chunk.js.map