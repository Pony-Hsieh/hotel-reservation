(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d1a79a3"],{"405d":function(t,e,n){},"9d7e":function(t,e,n){"use strict";n("405d")},a642:function(t,e,n){"use strict";n("cc23")},b924:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavbarComponent"),n("h2",{staticClass:"d-sm-none"},[t._v("所有房型")]),n("div",{staticClass:"roomSection"},[t.loadingStatus?n("div",{staticClass:"loadingAnimation"},[t._m(0)]):t._e(),t._l(t.allRoomData,(function(e,o){return n("div",{key:o,staticClass:"singleRoomArea",staticStyle:{position:"relative"}},[n("div",{style:{backgroundImage:"url("+e.imageUrl+")"}},[n("div",{staticClass:"singleRoomInfo"},[n("div",[n("h3",[t._v(t._s(e.name))]),n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.toSingleRoom(e.id)}}},[n("ThemifyIcon",{attrs:{icon:"hand-point-right"}}),t._v("\n                            更多房間資訊\n                            "),n("ThemifyIcon",{attrs:{icon:"hand-point-left"}})],1)])])])])}))],2),n("FooterComponent")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"double-bounce1"}),n("div",{staticClass:"double-bounce2"})])}],i=n("baee"),s=n("2a67"),r=n("e741"),c={name:"Rooms",components:{ThemifyIcon:i["a"],NavbarComponent:s["a"],FooterComponent:r["a"]},data:function(){return{allRoomData:"",loadingStatus:!0}},created:function(){this.getAllRoom()},methods:{getAllRoom:function(){var t=this;t.loadingStatus=!0,t.axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:{authorization:"Bearer ".concat("wfX13sirosa6kOnNvBouAE46WjoN3YhDh8Cywnv11OZEr04XwBo3wTlX10vC"),"content-type":"application/json"}}).then((function(e){t.allRoomData=e.data.items,t.loadingStatus=!1})).catch((function(t){}))},toSingleRoom:function(t){this.$router.push({path:"/singleRoom",query:{roomID:t}})}}},l=c,u=(n("9d7e"),n("2877")),h=Object(u["a"])(l,o,a,!1,null,"0b4277c3",null);e["default"]=h.exports},cc23:function(t,e,n){},e741:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"text-center"},[t._v("\n    Copyright ©"+t._s(t.copyrightYear)+" All rights reserved\n")])},a=[],i={name:"FooterComponent",data:function(){return{copyrightYear:""}},created:function(){this.getCopyrightYear()},methods:{getCopyrightYear:function(){this.copyrightYear=(new Date).getFullYear()}}},s=i,r=(n("a642"),n("2877")),c=Object(r["a"])(s,o,a,!1,null,"0965b722",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-6d1a79a3.c26d08da.js.map