(function(t){function e(e){for(var a,o,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},s={app:0},n=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/top-devs/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1:function(t,e){},"1a8a":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=r("28dd"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("div",{staticClass:"my-4 d-flex"},[r("v-btn",{staticClass:"mx-auto",attrs:{color:"success",normal:"",disabled:t.users.length>0},on:{click:t.loadUsers}},[t._v(" Load Users ")])],1),r("v-list",{attrs:{dense:""}},t._l(t.users,(function(e,a){return r("router-link",{key:e.id.value,attrs:{to:"/user/"+a}},[r("v-list-item",[r("v-list-item-content",[r("v-btn",{attrs:{color:"indigo",dark:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-account-box")]),r("v-list-item-title",[t._v(t._s(e.name.first)+" "+t._s(e.name.last))])],1)],1)],1)],1)})),1)],1),r("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("Application")])],1),r("router-view"),r("v-footer",{attrs:{color:"indigo",app:""}},[r("span",{staticClass:"white--text"},[t._v("© 2019")])])],1)},o=[],i=(r("96cf"),r("1da1")),u={props:{source:String},data:function(){return{drawer:null,resource:null}},computed:{users:function(){return this.$store.state.users}},methods:{loadUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.resource.get();case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,console.log(a.results),e.abrupt("return",t.$store.state.users=a.results);case 8:case"end":return e.stop()}}),e)})))()}},created:function(){this.resource=this.$resource("https://randomuser.me/api/?results=20")}},c=u,l=(r("9dd7"),r("2877")),d=r("6544"),p=r.n(d),f=r("7496"),v=r("40dc"),m=r("5bc1"),b=r("8336"),h=r("553a"),_=r("132d"),g=r("8860"),w=r("da13"),x=r("5d23"),y=r("f774"),C=r("2a7f"),V=Object(l["a"])(c,n,o,!1,null,"13c5c526",null),j=V.exports;p()(V,{VApp:f["a"],VAppBar:v["a"],VAppBarNavIcon:m["a"],VBtn:b["a"],VFooter:h["a"],VIcon:_["a"],VList:g["a"],VListItem:w["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VNavigationDrawer:y["a"],VToolbarTitle:C["a"]});var O=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",{staticClass:"content"},[r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center"},[t.user?r("v-card",{staticClass:"mx-auto py-3",attrs:{shaped:"",elevation:"10",color:"#C7C8FF","max-width":"800",height:"600px"}},[r("div",{staticClass:"user__img"},[r("v-img",{staticClass:"mx-auto my-4 ",attrs:{"max-width":"200px","max-height":"200px",src:this.user.picture.large}})],1),r("v-card-subtitle",{staticClass:"mx-auto mb-3 font-weight-bold headline"},[t._v(" "+t._s(t.user.name.first)+" "+t._s(t.user.name.last)+" ")]),r("v-card-text",{staticClass:"text--primary"},[r("div",{staticClass:"mb-2"},[t._v("Address: "+t._s(t.user.location.street.number)+" "+t._s(t.user.location.street.name)+", "+t._s(t.user.location.city)+", "+t._s(t.user.location.country)+", "+t._s(t.user.location.postcode)+" ")]),r("div",{staticClass:"mb-2"},[t._v("Email: "+t._s(t.user.email))]),r("div",{staticClass:"mb-2"},[t._v("Gender: "+t._s(t.user.gender))]),r("div",{staticClass:"mb-2"},[t._v("Birth date: "+t._s(t.user.dob.date.slice(0,10)))]),r("div",{staticClass:"mb-2"},[t._v("Phone: "+t._s(t.user.phone))])])],1):r("h1",[t._v("Users page")])],1)],1)],1)],1)},P=[],$=(r("7db0"),r("a9e3"),{computed:{user:function(){var t=this;return this.$store.state.users.find((function(e,r){return r===Number(t.$route.params.id)}))}},methods:{click:function(){console.log(this.$store.getters.user)}}}),S=$,T=(r("be7a"),r("b0af")),I=r("99d9"),A=r("62ad"),L=r("a523"),B=r("a75b"),M=r("adda"),U=r("0fd9"),E=Object(l["a"])(S,k,P,!1,null,"26d0f913",null),F=E.exports;p()(E,{VCard:T["a"],VCardSubtitle:I["a"],VCardText:I["b"],VCol:A["a"],VContainer:L["a"],VContent:B["a"],VImg:M["a"],VRow:U["a"]}),a["a"].use(O["a"]);var N=[{path:"/user/:id",name:"home",component:F}],R=new O["a"]({mode:"history",routes:N}),J=R,D=r("2f62");a["a"].use(D["a"]);var G=new D["a"].Store({state:{users:[]},mutations:{},actions:{},modules:{}}),q=r("f309");a["a"].use(q["a"]);var z=new q["a"]({});a["a"].config.productionTip=!1,a["a"].use(s["a"]),new a["a"]({router:J,store:G,vuetify:z,render:function(t){return t(j)}}).$mount("#app")},"9dd7":function(t,e,r){"use strict";var a=r("1a8a"),s=r.n(a);s.a},be7a:function(t,e,r){"use strict";var a=r("e1c6"),s=r.n(a);s.a},e1c6:function(t,e,r){}});
//# sourceMappingURL=app.abee6bee.js.map