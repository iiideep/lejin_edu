(window.webpackJsonp=window.webpackJsonp||[]).push([[42,60,61],{1060:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-basic-vue frame-page h-panel"},[t._m(0),t._v(" "),n("div",{staticClass:"h-panel-bar"},[n("Form",{attrs:{labelWidth:110}},[n("FormItem",{attrs:{label:"关键字搜索",prop:"avatar"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pagination.keywords,expression:"pagination.keywords"}],attrs:{type:"text",placeholder:"用户昵称/手机号"},domProps:{value:t.pagination.keywords},on:{input:function(e){e.target.composing||t.$set(t.pagination,"keywords",e.target.value)}}})]),t._v(" "),n("FormItem",{attrs:{label:"状态",prop:"avatar"}},[n("Select",{attrs:{datas:t.statusArr},model:{value:t.pagination.status,callback:function(e){t.$set(t.pagination,"status",e)},expression:"pagination.status"}})],1),t._v(" "),n("FormItem",[n("Button",{attrs:{color:"primary"},on:{click:function(e){return t.getData(!0)}}},[t._v("搜索")])],1)],1)],1),t._v(" "),n("div",{staticClass:"h-panel-body"},[n("Table",{attrs:{loading:t.loading,datas:t.datas,stripe:!0}},[n("TableItem",{attrs:{prop:"id",title:"ID"}}),t._v(" "),n("TableItem",{attrs:{prop:"order_id",title:"订单号"}}),t._v(" "),n("TableItem",{attrs:{prop:"charge",title:"价格",unit:"元"}}),t._v(" "),n("TableItem",{attrs:{prop:"created_at",title:"时间"}}),t._v(" "),n("TableItem",{attrs:{prop:"status_text",title:"状态"}}),t._v(" "),n("TableItem",{attrs:{title:"用户"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return[t._v("\n          "+t._s(n.user.nick_name)+" | "+t._s(n.user.mobile)+"\n        ")]}}])}),t._v(" "),n("TableItem",{attrs:{title:"订单信息"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return[n("ul",t._l(r.goods,(function(e){return n("li",[t._v(t._s(e.goods_name)+" | "+t._s(e.num))])})),0)]}}])}),t._v(" "),n("TableItem",{attrs:{width:"120",title:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return[1===r.status||5===r.status?n("Poptip",{attrs:{content:"确认完成该订单？"},on:{confirm:function(e){return t.finishOrder(t.datas,r)}}},[n("button",{staticClass:"h-btn h-btn-s h-btn-primary"},[t._v("改为已支付")])]):t._e()]}}])})],1),t._v(" "),n("p"),t._v(" "),t.pagination.total>0?n("Pagination",{attrs:{align:"right"},on:{change:t.changePage},model:{value:t.pagination,callback:function(e){t.pagination=e},expression:"pagination"}}):t._e()],1)])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-panel-bar"},[e("span",{staticClass:"h-panel-title"},[this._v("订单")])])}];r._withStripped=!0},317:function(t,e,n){"use strict";n.r(e);var r=n(1060),a=n(604);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var u=n(16),o=Object(u.a)(a.default,r.a,r.b,!1,null,null,null);o.options.__file="src/components/order/index.vue",e.default=o.exports},349:function(t,e,n){"use strict";var r=n(24);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(351)),i={Dashboard:{index:function(){return a.default.get("/dashboard")},systemInfo:function(){return a.default.get("/dashboard/system/info")}},Addons:{index:function(){return a.default.get("/addons")},switchHandler:function(t){return a.default.postJson("/addons/switch",t)}},User:{info:function(){return a.default.get("/user")}},Login:{login:function(t){return a.default.postJson("/login",t)}},Announcement:{List:function(t){return a.default.get("/announcement",t)},Store:function(t){return a.default.postJson("/announcement",t)},Edit:function(t){return a.default.get("/announcement/"+t.id)},Update:function(t){return a.default.putJson("/announcement/"+t.id,t)},Delete:function(t){return a.default.delete("/announcement/"+t.id,t)}},CourseCategory:{List:function(t){return a.default.get("/courseCategory",t)},Create:function(t){return a.default.postJson("/courseCategory",t)},Edit:function(t){return a.default.get("/courseCategory/"+t.id)},Update:function(t){return a.default.putJson("/courseCategory/"+t.id,t)},Delete:function(t){return a.default.delete("/courseCategory/"+t.id,t)}},Role:{List:function(t){return a.default.get("/role",t)},Store:function(t){return a.default.postJson("/role",t)},Edit:function(t){return a.default.get("/role/"+t.id)},Update:function(t){return a.default.putJson("/role/"+t.id,t)},Delete:function(t){return a.default.delete("/role/"+t.id,t)}},Link:{List:function(t){return a.default.get("/link",t)},Store:function(t){return a.default.postJson("/link",t)},Edit:function(t){return a.default.get("/link/"+t.id)},Update:function(t){return a.default.putJson("/link/"+t.id,t)},Delete:function(t){return a.default.delete("/link/"+t.id,t)}},Slider:{List:function(t){return a.default.get("/slider",t)},Store:function(t){return a.default.postJson("/slider",t)},Edit:function(t){return a.default.get("/slider/"+t.id)},Update:function(t){return a.default.putJson("/slider/"+t.id,t)},Delete:function(t){return a.default.delete("/slider/"+t.id,t)}},IndexBanner:{List:function(t){return a.default.get("/indexBanner",t)},Create:function(){return a.default.get("/indexBanner/create")},Store:function(t){return a.default.postJson("/indexBanner",t)},Edit:function(t){return a.default.get("/indexBanner/"+t.id)},Update:function(t){return a.default.putJson("/indexBanner/"+t.id,t)},Delete:function(t){return a.default.delete("/indexBanner/"+t.id,t)}},AdFrom:{List:function(t){return a.default.get("/ad_from",t)},Store:function(t){return a.default.postJson("/ad_from",t)},Edit:function(t){return a.default.get("/ad_from/"+t.id)},Number:function(t){return a.default.get("/ad_from/"+t.id+"/number")},Update:function(t){return a.default.putJson("/ad_from/"+t.id,t)},Delete:function(t){return a.default.delete("/ad_from/"+t.id,t)}},CourseComment:{List:function(t){return a.default.get("/course_comment",t)},Delete:function(t){return a.default.delete("/course_comment/"+t.id,t)}},VideoComment:{List:function(t){return a.default.get("/video_comment",t)},Delete:function(t){return a.default.delete("/video_comment/"+t.id,t)}},Order:{List:function(t){return a.default.get("/order",t)},Finish:function(t){return a.default.get("/order/"+t.id+"/finish",t)}},Member:{List:function(t){return a.default.get("/member",t)},Create:function(){return a.default.get("/member")},Store:function(t){return a.default.postJson("/member",t)},Edit:function(t){return a.default.get("/member/"+t.id,t)},Update:function(t){return a.default.putJson("/member/"+t.id,t)},InviteBalanceWithdrawOrders:function(t){return a.default.get("/member/inviteBalance/withdrawOrders",t)},CreateInviteBalanceWithdrawOrder:function(t){return a.default.postJson("/member/inviteBalance/withdrawOrders",t)}},Course:{List:function(t){return a.default.get("/course",t)},CreateParams:function(t){return a.default.get("/course/create",t)},Create:function(t){return a.default.postJson("/course",t)},Edit:function(t){return a.default.get("/course/"+t.id)},Update:function(t){return a.default.putJson("/course/"+t.id,t)},Delete:function(t){return a.default.delete("/course/"+t.id,t)}},Video:{List:function(t){return a.default.get("/video",t)},CreateParams:function(){return a.default.get("/video/create/params")},Create:function(t){return a.default.postJson("/video",t)},Edit:function(t){return a.default.get("/video/"+t.id)},Update:function(t){return a.default.putJson("/video/"+t.id,t)},Delete:function(t){return a.default.delete("/video/"+t.id,t)}},CourseChapter:{List:function(t){return a.default.get("/course_chapter/"+t.course_id,t)},Create:function(t){return a.default.postJson("/course_chapter/"+t.course_id,t)},Edit:function(t){return a.default.get("/course_chapter/"+t.course_id+"/"+t.id)},Update:function(t){return a.default.putJson("/course_chapter/"+t.course_id+"/"+t.id,t)},Delete:function(t){return a.default.delete("/course_chapter/"+t.course_id+"/"+t.id)}},Setting:{Get:function(){return a.default.get("/setting")},Save:function(t){return a.default.postJson("/setting",t)}},Administrator:{List:function(t){return a.default.get("/administrator",t)},Create:function(t){return a.default.postJson("/administrator",t)},Edit:function(t){return a.default.get("/administrator/"+t.id)},Update:function(t){return a.default.putJson("/administrator/"+t.id,t)},Delete:function(t){return a.default.delete("/administrator/"+t.id,t)},ChangePassword:function(t){return a.default.putJson("/administrator/password",t)}},AdministratorRole:{List:function(t){return a.default.get("/administrator_role",t)},Create:function(t){return a.default.postJson("/administrator_role",t)},Edit:function(t){return a.default.get("/administrator_role/"+t.id)},Update:function(t){return a.default.putJson("/administrator_role/"+t.id,t)},Delete:function(t){return a.default.delete("/administrator_role/"+t.id,t)}},AdministratorPermission:{List:function(t){return a.default.get("/administrator_permission",t)},Create:function(t){return a.default.postJson("/administrator_permission",t)},Edit:function(t){return a.default.get("/administrator_permission/"+t.id)},Update:function(t){return a.default.putJson("/administrator_permission/"+t.id,t)},Delete:function(t){return a.default.delete("/administrator_permission/"+t.id,t)}},Nav:{List:function(t){return a.default.get("/nav",t)},Create:function(t){return a.default.postJson("/nav",t)},Edit:function(t){return a.default.get("/nav/"+t.id)},Update:function(t){return a.default.putJson("/nav/"+t.id,t)},Delete:function(t){return a.default.delete("/nav/"+t.id,t)}},PromoCode:{List:function(t){return a.default.get("/promoCode",t)},Create:function(t){return a.default.postJson("/promoCode",t)},Edit:function(t){return a.default.get("/promoCode/"+t.id)},Update:function(t){return a.default.putJson("/promoCode/"+t.id,t)},Delete:function(t){return a.default.delete("/promoCode/"+t.id,t)}},VideoUpload:{AliyunAuthTokenRefresh:function(t){return a.default.postJson("/video/token/aliyun/refresh",t)},AliyunAuthTokenCreate:function(t){return a.default.postJson("/video/token/aliyun/create",t)},TencentAuthToken:function(t){return a.default.postJson("/video/token/tencent",t)}}};e.default=i},351:function(t,e,n){"use strict";(function(t){var r=n(24);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(353)),i=r(n(354)),u=r(n(49)),o=(n(355),{repeatable:!1}),d={PREFIX:"/backend/api/v1",Author:"everan",requestingApi:new Set,extractUrl:function(t){return t?t.split("?")[0]:""},isRequesting:function(t){var e=this.extractUrl(t);return this.requestingApi.has(e)},addRequest:function(t){var e=this.extractUrl(t);this.requestingApi.add(e)},deleteRequest:function(t){var e=this.extractUrl(t);this.requestingApi.delete(e)},get:function(t,e,n){var r={url:t,method:"GET"};return e&&(r.params=e),this.ajax(r,n)},post:function(t,e,n){var r={url:t,method:"POST"};return e&&(r.data=i.default.stringify(e)),this.ajax(r,n)},postJson:function(t,e,n){return this.ajax({url:t,method:"POST",data:e},n)},putJson:function(t,e,n){return this.ajax({url:t,method:"PUT",data:e},n)},patchJson:function(t,e,n,r){return this.ajax({url:t,method:"PATCH",data:e},r)},delete:function(t,e){return this.ajax({url:t,method:"DELETE"},e)},ajax:function(e,n){var r=u.default.extend({},o,e,n||{});r.crossDomain=0===r.url.indexOf("http");var d=r.url;if(r.crossDomain||(d=r.url=this.PREFIX+r.url),"GET"!=r.method){if(this.isRequesting(d))return new Promise((function(t,e){t({ok:!1,msg:"重复请求"})}));!1===r.repeatable&&this.addRequest(d)}var s={headers:{author:this.Author,Authorization:"Bearer "+u.default.getLocal("token")},responseType:"json",validateStatus:function(t){return!0},paramsSerializer:function(t){return i.default.stringify(t,{allowDots:!0})}};r.crossDomain&&(s.headers={});var l=this;return r=u.default.extend({},s,r),new Promise((function(e){return a.default.request(r).then((function(n){l.deleteRequest(r.url);var a=n.data,i=n.status;if(200==i){if(0!==(i=a.status))return 401===i?(t.$Message.warn("请重新登录"),void(window.top.location=window.location.protocol+"//"+window.location.host+window.location.pathname+"#/login")):void t.$Message.error(a.message);a.ok=!0,e(a)}else t.$Message.error("请求异常")})).catch((function(){l.deleteRequest(r.url),e({ok:!1})}))}))}};e.default=d}).call(this,n(72))},604:function(t,e,n){"use strict";n.r(e);var r=n(605),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=a.a},605:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{pagination:{page:1,size:20,total:0,keywords:"",status:""},statusArr:[{title:"未支付",key:1},{title:"支付中",key:5},{title:"已支付",key:9},{title:"已取消",key:7}],datas:[],loading:!1}},mounted:function(){this.init()},methods:{init:function(){this.getData(!0)},changePage:function(){this.getData()},getData:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n&&(this.pagination.page=1),this.loading=!0,t.Order.List(this.pagination).then((function(t){e.datas=t.data.data,e.pagination.total=t.data.total,e.pagination.page=t.data.current_page,e.pagination.size=t.data.per_page,e.loading=!1}))},finishOrder:function(e,r){var a=this;t.Order.Finish(r).then((function(t){n.$Message.success("成功"),a.getData(!1)}))}}};e.default=r}).call(this,n(349).default,n(72))}}]);