(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{257:function(t,a,e){var i=e(262);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(26).default)("4550d199",i,!0,{sourceMap:!1})},258:function(t,a,e){"use strict";e(27),e(39);a.a={head:function(){var t=this.meta.titleTemplate||"｜社会インフラシステムの設計、基盤構築なら株式会社BFT",a=this.meta.title||"人とシステムをつくる会社",e=this.$route.path?"https://www.bfts.co.jp"+this.$route.path:"",i=this.meta.description||"株式会社BFTは、社会インフラといわれるような大規模な情報システム基盤環境を構築するプロジェクトに参画し、IT基盤技術を蓄積してまいりました。情報システム基盤の構築は、BFTがご支援します。";return{title:a+t,meta:[{hid:"description",name:"description",content:i},{hid:"og:type",property:"og:type",content:this.meta.type||"website"},{hid:"og:title",property:"og:title",content:a+t},{hid:"og:description",property:"og:description",content:i},{hid:"og:url",property:"og:url",content:e}],link:[{hid:"canonical",rel:"canonical",href:e}]}}}},259:function(t,a,e){"use strict";e.d(a,"e",(function(){return w})),e.d(a,"d",(function(){return g})),e.d(a,"b",(function(){return _})),e.d(a,"a",(function(){return h})),e.d(a,"f",(function(){return l})),e.d(a,"c",(function(){return u}));e(52),e(27),e(38),e(63),e(28),e(64);var i=e(6),n=e(29),s=e(65),r=e(66),o=(e(62),e(37),e(121)),c=e.n(o);function v(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function d(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?v(Object(e),!0).forEach((function(a){Object(n.a)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var p={baseUrl:"/",params:{}},w=function(){function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s.a)(this,t),this.options=d(d({},p),a)}var a;return Object(r.a)(t,[{key:"getPosts",value:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(this.options.baseUrl,"/wp-json/wp/v2/posts"),{params:this.options.params,headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,e=a.data,t.abrupt("return",{posts:e});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{error:t.t0});case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return a.apply(this,arguments)})}]),t}(),g=function(){function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;Object(s.a)(this,t),this.options=d(d({},p),a),this.pageId=e}var a;return Object(r.a)(t,[{key:"getData",value:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(this.options.baseUrl,"/wp-json/custom/v0/top"),{headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,e=a.data,t.abrupt("return",{top_page_data:e});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{error:t.t0});case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return a.apply(this,arguments)})}]),t}(),_=function(){function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;Object(s.a)(this,t),this.options=d(d({},p),a),this.pageId=e}var a;return Object(r.a)(t,[{key:"getData",value:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(this.options.baseUrl,"/wp-json/custom/v0/biz"),{headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,e=a.data,t.abrupt("return",{biz_page_data:e});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{error:t.t0});case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return a.apply(this,arguments)})}]),t}(),h=function(){function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;Object(s.a)(this,t),this.options=d(d({},p),a),this.pageId=e}var a;return Object(r.a)(t,[{key:"getData",value:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(this.options.baseUrl,"/wp-json/custom/v0/biz/child?page_id=").concat(this.pageId),{headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,e=a.data,t.abrupt("return",{page_data:e});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{error:t.t0});case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return a.apply(this,arguments)})}]),t}(),l=function(){function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;Object(s.a)(this,t),this.options=d(d({},p),a),this.pageId=e}var a;return Object(r.a)(t,[{key:"getData",value:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(this.options.baseUrl,"/wp-json/custom/v0/page?page_id=").concat(this.pageId),{headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,e=a.data,t.abrupt("return",{page_data:e});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{error:t.t0});case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return a.apply(this,arguments)})}]),t}(),u=function(){function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s.a)(this,t),this.options=d(d({},p),a)}var a;return Object(r.a)(t,[{key:"getData",value:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(this.options.baseUrl,"/wp-json/custom/v0/system"),{headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,e=a.data,t.abrupt("return",{page_data:e});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{error:t.t0});case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return a.apply(this,arguments)})}]),t}()},260:function(t,a,e){"use strict";e(261);var i=e(12),n=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-top",class:t.$route.name},[e("div",{staticClass:"bg-top__1"}),t._v(" "),e("div",{staticClass:"bg-top__2"}),t._v(" "),e("div",{staticClass:"bg-top__3"}),t._v(" "),e("div",{staticClass:"bg-top__4"}),t._v(" "),e("div",{staticClass:"bg-top__5"}),t._v(" "),e("div",{staticClass:"bg-top__6"}),t._v(" "),e("div",{staticClass:"bg-top__7"}),t._v(" "),e("div",{staticClass:"bg-top__8"}),t._v(" "),e("div",{staticClass:"bg-top__9"}),t._v(" "),e("div",{staticClass:"bg-top__10"}),t._v(" "),e("div",{staticClass:"bg-top__11"}),t._v(" "),e("div",{staticClass:"bg-top__12"}),t._v(" "),e("div",{staticClass:"bg-top__13"}),t._v(" "),e("div",{staticClass:"bg-top__14"}),t._v(" "),e("div",{staticClass:"bg-top__15"}),t._v(" "),e("div",{staticClass:"bg-top__16"}),t._v(" "),e("div",{staticClass:"bg-top__17"}),t._v(" "),e("div",{staticClass:"bg-top__18"}),t._v(" "),e("div",{staticClass:"bg-top__19"}),t._v(" "),e("div",{staticClass:"bg-top__20"}),t._v(" "),e("div",{staticClass:"bg-top__21"}),t._v(" "),e("div",{staticClass:"bg-top__22"}),t._v(" "),e("div",{staticClass:"bg-top__23"}),t._v(" "),e("div",{staticClass:"bg-top__24"}),t._v(" "),e("div",{staticClass:"bg-top__25"}),t._v(" "),e("div",{staticClass:"bg-top__26"}),t._v(" "),e("div",{staticClass:"bg-top__27"})])}),[],!1,null,"f7aca18a",null);a.a=n.exports},261:function(t,a,e){"use strict";e(257)},262:function(t,a,e){(a=e(25)(!1)).push([t.i,"[data-v-f7aca18a]:root{--base-size:1200}@media (max-width:768px){[data-v-f7aca18a]:root{--base-size:320}}.bg-top[data-v-f7aca18a]{position:absolute;top:0;right:0;z-index:0}.bg-top.recruit[data-v-f7aca18a]{z-index:-1}.bg-top>div[data-v-f7aca18a]{position:absolute;background-color:#f03329;height:1.75vw}.bg-top__1[data-v-f7aca18a]{top:0;width:38.3333333333vw;right:13.3333333333vw}.bg-top__2[data-v-f7aca18a]{top:1.6666666667vw;width:41.6666666667vw;right:11.6666666667vw}.bg-top__3[data-v-f7aca18a]{top:3.3333333333vw;width:53.3333333333vw;right:0}.bg-top__4[data-v-f7aca18a]{top:5vw;width:51.6666666667vw;right:0}.bg-top__5[data-v-f7aca18a]{top:6.6666666667vw;width:46.6666666667vw;right:3.3333333333vw}.bg-top__6[data-v-f7aca18a]{top:8.3333333333vw}.bg-top__6[data-v-f7aca18a],.bg-top__7[data-v-f7aca18a]{width:46.6666666667vw;right:1.6666666667vw}.bg-top__7[data-v-f7aca18a]{top:10vw}.bg-top__8[data-v-f7aca18a]{top:11.6666666667vw;width:46.6666666667vw;right:0}.bg-top__9[data-v-f7aca18a]{top:13.3333333333vw;width:43.3333333333vw;right:0}.bg-top__10[data-v-f7aca18a]{top:15vw;width:40vw;right:0}.bg-top__11[data-v-f7aca18a]{top:16.6666666667vw;width:40vw;right:0}.bg-top__12[data-v-f7aca18a]{top:18.3333333333vw;width:26.6666666667vw;right:0}.bg-top__13[data-v-f7aca18a]{top:20vw;width:21.6666666667vw;right:0}.bg-top__14[data-v-f7aca18a]{top:21.6666666667vw;width:16.6666666667vw;right:0}.bg-top__15[data-v-f7aca18a]{top:23.3333333333vw;width:15vw;right:0}.bg-top__16[data-v-f7aca18a]{top:25vw}.bg-top__16[data-v-f7aca18a],.bg-top__17[data-v-f7aca18a]{width:11.6666666667vw;right:0}.bg-top__17[data-v-f7aca18a]{top:26.6666666667vw}.bg-top__18[data-v-f7aca18a]{top:28.3333333333vw;width:10vw;right:0}.bg-top__19[data-v-f7aca18a]{top:30vw;width:10vw;right:0}.bg-top__20[data-v-f7aca18a]{top:31.6666666667vw}.bg-top__20[data-v-f7aca18a],.bg-top__21[data-v-f7aca18a]{width:8.3333333333vw;right:0}.bg-top__21[data-v-f7aca18a]{top:33.3333333333vw}.bg-top__22[data-v-f7aca18a]{top:35vw}.bg-top__22[data-v-f7aca18a],.bg-top__23[data-v-f7aca18a]{width:6.6666666667vw;right:0}.bg-top__23[data-v-f7aca18a]{top:36.6666666667vw}.bg-top__24[data-v-f7aca18a]{top:38.3333333333vw;width:5vw;right:0}.bg-top__25[data-v-f7aca18a]{top:40vw;width:3.3333333333vw;right:0}.bg-top__26[data-v-f7aca18a]{top:41.6666666667vw}.bg-top__26[data-v-f7aca18a],.bg-top__27[data-v-f7aca18a]{width:1.6666666667vw;right:0}.bg-top__27[data-v-f7aca18a]{top:43.3333333333vw}@media screen and (max-width:768px){.bg-top>div[data-v-f7aca18a]{height:3.125vw}.bg-top__1[data-v-f7aca18a]{top:0;width:56.25vw;right:40.625vw}.bg-top__2[data-v-f7aca18a]{top:3.125vw;width:62.5vw;right:34.375vw}.bg-top__3[data-v-f7aca18a]{top:6.25vw;width:62.5vw;right:28.125vw}.bg-top__4[data-v-f7aca18a]{top:9.375vw;width:62.5vw;right:21.875vw}.bg-top__5[data-v-f7aca18a]{top:12.5vw;width:62.5vw;right:18.75vw}.bg-top__6[data-v-f7aca18a]{top:15.625vw;width:71.875vw;right:9.375vw}.bg-top__7[data-v-f7aca18a]{top:18.75vw;width:62.5vw;right:6.25vw}.bg-top__8[data-v-f7aca18a]{top:21.875vw;width:59.375vw;right:0}.bg-top__9[data-v-f7aca18a]{top:25vw;width:46.875vw;right:3.125vw}.bg-top__10[data-v-f7aca18a]{top:28.125vw;width:37.5vw;right:3.125vw}.bg-top__11[data-v-f7aca18a]{top:31.25vw;width:28.125vw;right:3.125vw}.bg-top__12[data-v-f7aca18a]{top:34.375vw;width:28.125vw;right:0}.bg-top__13[data-v-f7aca18a]{top:37.5vw;width:15.625vw;right:0}.bg-top__14[data-v-f7aca18a]{top:40.625vw;width:15.625vw;right:0}.bg-top__15[data-v-f7aca18a]{top:43.75vw;width:15.625vw;right:0}.bg-top__16[data-v-f7aca18a]{top:46.875vw;width:15.625vw;right:0}.bg-top__17[data-v-f7aca18a]{top:50vw;width:12.5vw;right:0}.bg-top__18[data-v-f7aca18a]{top:53.125vw;width:9.375vw;right:0}.bg-top__19[data-v-f7aca18a]{top:56.25vw;width:9.375vw;right:0}.bg-top__20[data-v-f7aca18a]{top:59.375vw;width:6.25vw;right:0}.bg-top__21[data-v-f7aca18a]{top:62.5vw;width:3.125vw;right:0}.bg-top__22[data-v-f7aca18a]{top:65.625vw;width:3.125vw;right:0}.bg-top__23[data-v-f7aca18a]{top:68.75vw;width:3.125vw;right:0}.bg-top__24[data-v-f7aca18a],.bg-top__25[data-v-f7aca18a],.bg-top__26[data-v-f7aca18a],.bg-top__27[data-v-f7aca18a]{display:none}}",""]),t.exports=a},279:function(t,a,e){var i=e(324);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(26).default)("d506819c",i,!0,{sourceMap:!1})},323:function(t,a,e){"use strict";e(279)},324:function(t,a,e){(a=e(25)(!1)).push([t.i,"[data-v-1675c306]:root{--base-size:1200}@media (max-width:768px){[data-v-1675c306]:root{--base-size:320}}.page-news[data-v-1675c306]{min-height:100vh;z-index:2}.heading-en[data-v-1675c306]{color:#f03329;background-color:#fff;height:1.8333333333vw;line-height:1.6666666667vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .6666666667vw 0 1.0833333333vw}.heading-en .en[data-v-1675c306]{font-weight:900;line-height:.69;font-size:2.25vw;letter-spacing:.4083333333vw}@media screen and (max-width:768px){.heading-en .en[data-v-1675c306]{font-size:4.0625vw;letter-spacing:.625vw}}.heading-en .ja[data-v-1675c306]{font-weight:900;line-height:1.85;font-size:.8333333333vw;letter-spacing:.0333333333vw;padding:0 0 0 1.1666666667vw}.heading-en.under-en-title[data-v-1675c306]{font-weight:900;line-height:.69;font-size:2.25vw;letter-spacing:.4083333333vw;position:absolute;right:0;top:3.3333333333vw;height:3.3333333333vw;line-height:3.3333333333vw;padding:0 1.6666666667vw}@media screen and (max-width:768px){.heading-en.under-en-title[data-v-1675c306]{font-size:4.0625vw;letter-spacing:.625vw}}.heading-en .heading__img[data-v-1675c306]{width:100%;height:5vw;overflow:hidden;position:absolute;top:100%;right:0;background-size:cover;background-position:0 50%}@media screen and (max-width:768px){.heading-en[data-v-1675c306]{height:3.75vw;line-height:3.125vw;padding:0 2.5vw 0 4.0625vw}.heading-en .ja[data-v-1675c306]{font-size:3.125vw;letter-spacing:.125vw;padding:0 0 0 4.375vw}.heading-en.under-en-title[data-v-1675c306]{width:auto;top:18.75vw;height:6.25vw;line-height:6.25vw;padding:0 2.5vw 0 5vw}.heading-en .heading__img[data-v-1675c306]{height:9.375vw}}.news-list[data-v-1675c306]{width:58.3333333333vw;margin:13.3333333333vw auto 0}.news-list[data-v-1675c306],.news-list .news[data-v-1675c306]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.news-list .news[data-v-1675c306]{position:relative;width:100%;background-color:#fff;padding:0 0 2vw;margin:0 0 3.3333333333vw}.news-list .news.has-img[data-v-1675c306]{min-height:13.3333333333vw}.news-list .news__info[data-v-1675c306]{width:100%;height:1.6666666667vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0 0 1.25vw}.news-list .news__info__day[data-v-1675c306]{width:8.3333333333vw;color:#fff;font-size:1.1666666667vw;font-weight:900;line-height:1.6666666667vw;background-color:#06dbc9;text-align:center;margin:0 1.6666666667vw 0 0}.news-list .news__info__tag[data-v-1675c306]{color:#fff;font-size:.8333333333vw;line-height:1.6666666667vw;background-color:#3d3232;text-align:center;padding:0 .9166666667vw}.news-list .news__title[data-v-1675c306]{font-size:1.3333333333vw;font-weight:900;line-height:1.4;margin:0 0 1.0833333333vw;max-width:39.5833333333vw}.news-list .news__text[data-v-1675c306],.news-list .news__title[data-v-1675c306]{color:#3d3232;padding:0 0 0 1.6666666667vw;letter-spacing:0}.news-list .news__text[data-v-1675c306]{max-width:36.6666666667vw;font-size:1.1666666667vw;line-height:1.46;overflow:hidden}.news-list .news__text[data-v-1675c306] .disnone{display:none}.news-list .news__text[data-v-1675c306] a{color:#f03329}.news-list .news__more[data-v-1675c306]{cursor:pointer;width:6.6666666667vw;height:1.6666666667vw;position:absolute;bottom:0;right:0;background-color:#f03329;color:#fff;text-align:center;font-size:1vw;font-weight:900;letter-spacing:.0833333333vw}.news-list .news__img[data-v-1675c306]{width:18.3333333333vw;height:13.3333333333vw;position:absolute;top:0;right:0;overflow:hidden}@media screen and (max-width:768px){.news-list[data-v-1675c306]{width:calc(100% - 6.25vw);margin:28.125vw auto 0;max-height:59%}.news-list .news[data-v-1675c306]{padding:0 0 6.25vw;margin:0 0 3.3333333333vw}.news-list .news.has-img[data-v-1675c306]{min-height:0;padding:0 0 53.125vw}.news-list .news__info[data-v-1675c306]{height:6.25vw;margin:0 0 3.125vw}.news-list .news__info__day[data-v-1675c306]{width:37.5vw;font-size:4.375vw;line-height:6.25vw;margin:0 3.125vw 0 0}.news-list .news__info__tag[data-v-1675c306]{font-size:3.125vw;line-height:6.25vw;padding:0 3.125vw}.news-list .news__title[data-v-1675c306]{font-size:5vw;margin:0 0 3.125vw;padding:0 0 0 3.125vw;max-width:none}.news-list .news__text[data-v-1675c306]{font-size:3.75vw;padding:0 0 0 3.125vw;line-height:1.6;max-width:none;word-break:break-all}.news-list .news__more[data-v-1675c306]{right:0;width:25vw;height:6.25vw;font-size:3.75vw;letter-spacing:.3125vw}.news-list .news__img[data-v-1675c306]{width:100%;height:46.875vw;bottom:0;top:auto;right:0}}.pager[data-v-1675c306]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:1.6666666667vw auto 6.6666666667vw;width:58.3333333333vw;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.pager__btn[data-v-1675c306]{cursor:pointer;height:3.3333333333vw;width:3.3333333333vw;border:2px solid #f03329;background-color:#fff;text-align:center;line-height:3.3333333333vw;font-size:1.1666666667vw;letter-spacing:0;color:#f03329;font-weight:900}.pager__btn[data-v-1675c306]:not(:last-of-type){margin:0 1.6666666667vw 0 0}.pager__btn.current[data-v-1675c306],.pager__btn[data-v-1675c306]:hover{-webkit-transition:all .1s ease;transition:all .1s ease;background-color:#f03329;color:#fff}@media screen and (max-width:768px){.pager[data-v-1675c306]{margin:6.25vw auto 18.75vw;width:84.375vw}.pager__btn[data-v-1675c306]{height:9.375vw;width:9.375vw;line-height:9.375vw;font-size:3.125vw}.pager__btn[data-v-1675c306]:not(:last-of-type){margin:0 3.125vw 0 0}}",""]),t.exports=a},369:function(t,a,e){"use strict";e.r(a);var i=e(6),n=(e(37),e(41),e(40),e(122),e(28),e(62),e(121),e(258)),s=e(260),r=e(259),o={mixins:[n.a],components:{BgTop:s.a},data:function(){return{meta:{title:"お知らせ",description:"大規模な情報システム基盤環境を構築する社会インフラプロジェクトに参画してきた、株式会社BFTの最新情報をご紹介します。",url:"news"},postsList:new Array,currentId:1,maxId:1,posts_per_page:5,display_str_length:80}},methods:{init:function(){this.maxId=Math.ceil(this.posts.length/this.posts_per_page),this.split_posts()},split_posts:function(){for(var t=0;t<this.posts.length;t+=this.posts_per_page){var a=this.posts.slice(t,t+this.posts_per_page);this.postsList.push(a)}},goToPrev:function(){1!==this.currentId&&(this.currentId--,scrollTo(0,0))},goToNext:function(){this.currentId>=this.maxId||(this.currentId++,scrollTo(0,0))},goToTarget:function(t){this.currentId!==t&&(this.currentId=t,scrollTo(0,0))},str_trim:function(t){if(t.length<=this.display_str_length)return t;var a=t.search(/<(".*?"|'.*?'|[^'"])*?>/);return-1!==a&&a<this.display_str_length?t.substr(0,a)+'<span class="toggle">...</span> <span class="toggle disnone">'+t.substr(a)+"</span>":t.substr(0,this.display_str_length)+'<span class="toggle">...</span> <span class="toggle disnone">'+t.substr(this.display_str_length)+"</span>"},open_news:function(t){t.target.innerHTML=/MORE/.test(t.target.innerHTML)?"CLOSE":"MORE",t.target.parentElement.querySelectorAll(".news__text span.toggle").forEach((function(t){t.classList.toggle("disnone")}))},change_date_format:function(t){var a=new Date(t);return"".concat(a.getFullYear(),".").concat(a.getMonth()+1,".").concat(a.getDate())}},mounted:function(){this.init()},asyncData:function(t){return Object(i.a)(regeneratorRuntime.mark((function a(){var e,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=new r.e({baseUrl:t.env.apiBaseUrl}),i=e.getPosts(),a.abrupt("return",i);case 3:case"end":return a.stop()}}),a)})))()}},c=(e(323),e(12)),v=Object(c.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-news"},[e("BgTop"),t._v(" "),e("div",{staticClass:"heading-en under-en-title"},[t._v("News")]),t._v(" "),t._l(t.postsList,(function(a,i){return e("section",{directives:[{name:"show",rawName:"v-show",value:t.currentId===i+1,expression:"currentId === index + 1"}],key:i,staticClass:"news-list"},t._l(a,(function(a,i){return e("div",{key:i,staticClass:"news",class:{"has-img":-1===a.featured_image.src.indexOf("default.png")}},[e("div",{staticClass:"news__info"},[e("div",{directives:[{name:"show",rawName:"v-show",value:a.date,expression:"post.date"}],staticClass:"news__info__day"},[t._v("\n                    "+t._s(t.change_date_format(a.date))+"\n                ")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.terms.post_tag,expression:"post.terms.post_tag"}],staticClass:"news__info__tag",domProps:{innerHTML:t._s(a.terms.post_tag&&a.terms.post_tag[0].name||"#お知らせ")}})]),t._v(" "),e("div",{staticClass:"news__title",domProps:{innerHTML:t._s(a.title.rendered)}}),t._v(" "),e("div",{staticClass:"news__text",domProps:{innerHTML:t._s(t.str_trim(a.content.rendered))}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:-1===a.featured_image.src.indexOf("default.png"),expression:"post.featured_image.src.indexOf('default.png') === -1"}],staticClass:"news__img"},[e("img",{attrs:{src:a.featured_image.src,alt:a.title.rendered}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.content.rendered.length>t.display_str_length,expression:"post.content.rendered.length > display_str_length"}],staticClass:"news__more",on:{click:t.open_news}},[t._v("\n                MORE\n            ")])])})),0)})),t._v(" "),e("div",{staticClass:"pager"},[e("div",{staticClass:"pager__btn prev-btn",on:{click:t.goToPrev}},[t._v("<<")]),t._v(" "),t._l(t.maxId,(function(a,i){return e("div",{key:i,staticClass:"pager__btn page-btn",class:{current:t.currentId===a},on:{click:function(e){return t.goToTarget(a)}}},[t._v("\n            "+t._s(a)+"\n        ")])})),t._v(" "),e("div",{staticClass:"pager__btn next-btn",on:{click:t.goToNext}},[t._v(">>")])],2)],2)}),[],!1,null,"1675c306",null);a.default=v.exports}}]);