(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23dccc5f"],{"4fe8":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-menu",{staticClass:"el-menu-demo",attrs:{id:"el-menu2",mode:"horizontal"}},[r("div",{attrs:{id:"menu-tabs"}},[r("router-link",{staticStyle:{"text-decoration":"none",color:"#a52b2b"},attrs:{to:"/"}},[e._v(":: "),r("word",{staticStyle:{color:"black"}},[e._v("Home")]),e._v(" ::")],1),r("router-link",{staticStyle:{"text-decoration":"none",color:"#a52b2b"},attrs:{to:"/store"}},[e._v(":: "),r("word",{staticStyle:{color:"black"}},[e._v("Products")]),e._v(" ::")],1),r("router-link",{staticStyle:{"text-decoration":"none",color:"#a52b2b"},attrs:{to:"/about"}},[e._v(":: "),r("word",{staticStyle:{color:"black"}},[e._v("About")]),e._v(" ::")],1)],1)]),r("div",{attrs:{id:"about"}},[r("el-row",{attrs:{id:"apra-row"}},[r("p",{attrs:{id:"about-para"}},[e._v("  Write to us to know more about our Art, Design Services or Collaborations")]),r("el-form",{ref:"form",attrs:{id:"checkout-form",model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"Name",prop:"name"}},[r("el-input",{attrs:{counter:15},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"Contact Number",prop:"number"}},[r("el-input",{model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),r("el-form-item",{attrs:{label:"E-mail",prop:"email"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"Message",prop:"message"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),r("el-button",{attrs:{"aria-label":"Submit Order",id:"submit-proceed"},on:{click:function(t){return e.submitForm("form")}}},[e._v("\n      Submit\n    ")])],1)],1)],1)],1)},a=[],s=(r("b0c0"),r("cdf9")),n=(r("8aa5"),{data:function(){return{value:"",show_art_types:!1,form:{name:"",email:"",number:"",message:""},rules:{name:[{required:!0,message:"Please input name",trigger:"blur"},{min:2,max:25,message:"Length should be 3 to 5",trigger:"blur"}],number:[{required:!0}],email:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:"blur,change"}]}}},methods:{submitForm:function(e){var t=this;console.log(this.$refs),this.$refs[e].validate((function(e){if(!e)return alert("error submit!!"),!1;s["a"].collection("enquiry").add({name:t.form.name,number:t.form.number,email:t.form.email,message:t.form.message}).then((function(e){console.log("Document written with ID: ",e.id),t.$swal("Success","Your Message is Sent Successfully","success")})).catch((function(e){console.error("Error adding document: ",e),t.$swal("Error!","Error While Adding Enquiry, Try Again","error")}))}))},showtypes:function(){0==this.show_art_types?this.show_art_types=!0:1==this.show_art_types&&(this.show_art_types=!1)}}}),i=n,l=(r("5d4f"),r("2877")),m=Object(l["a"])(i,o,a,!1,null,"5125c7ce",null);t["default"]=m.exports},"5d4f":function(e,t,r){"use strict";var o=r("70bf"),a=r.n(o);a.a},"70bf":function(e,t,r){}}]);
//# sourceMappingURL=chunk-23dccc5f.2dab0bdf.js.map