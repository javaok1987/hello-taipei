(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={index:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/hello-taipei/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-libs"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0025":function(t,e,n){},"11bb":function(t,e,n){"use strict";var r=n("d149"),a=n.n(r);a.a},"30db":function(t,e,n){"use strict";var r=n("0025"),a=n.n(r);a.a},3402:function(t,e,n){"use strict";var r=n("87c2"),a=n.n(r);a.a},"545e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAuCAYAAACcYs/JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXdJREFUeNrMWltsFFUY/s9061KgaRsxCngJEgUtVCMBg1poacqDoUojBIgxNcYoxgcl8QF40UaND8aoxAd9MLaJaDFcgyhJSb0FGqKtF4y00T4YCzSUKkvasvf1+3fPprPTmdmZnTnT/smXzpz5z3+++eZc/67o6OigEuwj4BLwmtuKbW1tjvw6OzsD5RUqobGXgefk9S/AUZod5omX5rKxBuBd3f1B4K5ZIIJnXm6EqAYOG8rKgK+B8hkUwRdeboTYD9SYlC8FPphBIXzh5VSIbcCjNs95bNbPgAi+8XIiRIVDZT8OWARfeTkRYg+wwIEfT07PByiEr7yKCcEN7XJBjtfvGwIQwXdexYRgJee7aPAW3jMFIITvvOyECJfY1V9ULIISXnZCbARuK6HB+4CHFAqhhJedEFttnl2Qe3q7ZU2VKeGl2SxNTSblp+R2tlaCv85pE79mhUumEl5WQqwCFhnKTshA3wER4D+gW25Yvjf43gPUKRBCGS87IfQ2Djxj4ZsBngUSRWL4JYQSXlZCGFXrBy7bEPwT+MNQtkKBEMp4WQmx1HAfd0AyZrKj89uU8bIS4iaT7hS2aYz9VxrKFioQQhkvKyHmGO75mPueTYP75IyuNxU5CmW8NIuyeSblO4FPgCW6smXAF8B2E/8an0VQyssohACOATdbkHlaTkB9wM/AgM0G53YZyw9TzksvBCdyvwU2FSHFabAHgPsdvMBjMqaXYRIIL70QXwHrFIzr9cBJD/UD4ZUX4i2F22K2DbINtxYYLxbibmB3ADmE3bItpxYoLxbiBQrOdrrwDZSXpuhM4PSs4JevZ14sxOIAG1ysyNczLxaiKsAGqxT5eualFdmr+21hRb6eeWny3B6UpV34BsqLhZgMsMHrLnwD5cVCXLVx4PP+l8CIg2CcNOXfJIzb+ERckAuUl2YT7JrcebVQLjNk98OLQ/Lc3yq3rpdtSDm1EfPTV/paikIbJkVNy6SorktS+KhGKZPTZIrw7BB8VsK3FXXWo64lLxZiyOTBBNBIU5ngUfmSO4Ae+WUj8pqPuluAMenL6bMGWcdoQy6EGDIRYSIqKhvjYu7p5tg71BJ9dTREsdYxcceOJM3pwctHGHyNsu14tgU+Y+yLOv2o24AYprz4ZHeGChOgSbm/7zep0CVxq7wftniJ85RLu/9gWAbPuhBiGi+8YHOGtP6NsbfpzkRv9nC+ObqHfgs93jUYauy6IpZkeVVmRodXJQ5SXfIYVaUvZaddjRLUHX7lPGI0lVF8Gi9NvtivsoD/rgV6dU4PAkeAvfKomxdgWJfxaQeOS9+8nZP3+V71E/CZCyEKeOFLrh0XC3prkydzImiILegIXnRvffzDsq3RXbQp1j7M4GuUleNZO3yOsy/X4bqIcQ6xpvEKyWHwMLCGcv8bMC5xLwGbJZ6i3C9UzshkySPAkzSVEI0Yvvqg9OHt8u80PZFqZwW8ElSRnkv/0orEiVzLeV4ix6sqfXE/MMVLGHgJOst1B0JN6BsVgxg2BbxCuka/sSCk/3f6cuB1FznFvPWVuKxleQn07XFxI61OHqDq9MW8EIW8RBFeqMN1701204+hbVSTuYCoos8qVed17Z9Qscgn8B7zM1eolnuDR14cg2MlDN/MiRB/u2jwH79F4GXwqlhEy1OnMPGN5HtDabxQl2NwLI6pX3adCMGT4GE5idYbxnlUjuPVwAHyL1k79SkxJJalemhN/HPfeHEsjsmx8+bkl7c8+T2hu+ex+Ia8flNOnETmqXPPFqVKWpgeoPLMdX1vKJ0XYnAsjvlX2TqqkBtYrQRu7+uu96k+BGjY1sTEPN95cUwtu2Vy3iOMxnv2T3Xb8Nlinnj9L8AAjcayvuLkjPYAAAAASUVORK5CYII="},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"app-logo"},[t._v("臺北旅遊網")])])],1),n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,a,o,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("SearchResultTable")],1)},f=[],p=(n("96cf"),n("1da1")),m="fetchAttractionInfo",g="fetchAttractionList",h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"search-result-table"},t._l(t.tableData,(function(t){return n("Card",{key:t.id,attrs:{aid:t.id,name:t.name,introduction:t.introduction,distric:t.distric,address:t.address,category:t.category,images:t.images}})})),1)},b=[],v=n("5530"),y=n("2f62"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("router-link",{staticClass:"card-link",attrs:{to:"./"+t.aid}},[n("div",{staticClass:"card-thumb"},[n("figure",[n("img",{attrs:{src:t.getAvatar,alt:t.name}})]),n("div",{staticClass:"card-content__meta"},[t._v(" "+t._s(t.distric)+" ")])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"card-content__header",attrs:{title:t.name}},[t._v(t._s(t.name))]),n("div",{staticClass:"card-content__address",attrs:{title:t.address}},[t._v(" "+t._s(t.address)+" ")]),n("div",{staticClass:"card-content__description"},[t._v(" "+t._s(t.introduction)+" ")]),n("TagList",{attrs:{tags:t.category}})],1)])],1)},C=[],O=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"tag-list"},t._l(t.tags,(function(e){return n("li",{key:e.id,staticClass:"tag"},[n("span",{domProps:{textContent:t._s(e.name)}})])})),0)}),_=[],k={name:"TagList",props:{tags:{type:Array,required:!1,default:function(){return[]}}}},A=k,x=(n("11bb"),Object(i["a"])(A,O,_,!1,null,"75741924",null)),j=x.exports,I={name:"Card",components:{TagList:j},props:{aid:{type:Number,required:!0,default:0},name:{type:String,required:!0,default:""},introduction:{type:String,required:!1,default:""},distric:{type:String,required:!1,default:""},address:{type:String,required:!1,default:""},category:{type:Array,required:!1,default:function(){return[]}},images:{type:Array,required:!1,default:function(){return[]}},url:{type:String,required:!1,default:""}},computed:{getAvatar:function(){return this.images&&0!==this.images.length?"".concat(this.images[0].src):""}}},L=I,R=(n("e60d"),Object(i["a"])(L,w,C,!1,null,null,null)),M=R.exports,T={name:"SearchResultTable",components:{Card:M},props:{items:{type:String,required:!1,default:"array"}},computed:Object(v["a"])({},Object(y["b"])({searchForm:function(t){return t.form},tableData:function(t){return t.attractionList},totalLen:function(t){return t.total}}))},E=T,S=Object(i["a"])(E,h,b,!1,null,null,null),B=S.exports,P=(n("7db0"),n("ade3")),q="setAttractionID",X="setAttractionList",F="setAttractionListSize",U=(n("99af"),n("d3b7"),n("bc3a")),Y=n.n(U),G=Y.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/hello-taipei/"}).VUE_APP_BASE_API,timeout:15e3,headers:{"Content-Type":"text/html; charset=utf-8"}});G.interceptors.request.use((function(t){return t}),(function(t){return window.console.log("debug(request): ",t),Promise.reject(t)})),G.interceptors.response.use((function(t){return t.data}),(function(t){return window.console.log("debug(response): ",t),Promise.reject(t)}));var N,V,K={get:function(t,e){return new Promise((function(n,r){G.get(t,{params:e}).then((function(t){n(t)})).catch((function(t){r(t)}))}))},post:function(t,e){return new Promise((function(n,r){G.post(t,e).then((function(t){n(t)})).catch((function(t){r(t)}))}))},delete:function(t,e){return new Promise((function(n,r){G.delete(t,{params:e}).then((function(t){n(t)})).catch((function(t){r(t)}))}))},put:function(t,e){return new Promise((function(n,r){G.put(t,e).then((function(t){n(t)})).catch((function(t){r(t)}))}))}},H=K;function Z(t){return H.get("//script.google.com/macros/s/AKfycbwmm6b303YGJvvNXtRR_TP5ErCiX60Y9HOpj9t27l_LFHXYE5o/exec?url=https://www.travel.taipei/open-api/zh-tw/Attractions/All&categoryIds=".concat(t.categoryIds,"&page=").concat(t.page))}r["a"].use(y["a"]);var z={lang:"zh-tw",form:{categoryIds:"",page:"1"},total:0,attractionList:[],attraction:{}},J={form:function(t){return t.form}},D=(N={},Object(P["a"])(N,q,(function(t,e){t.attraction=t.attractionList.find((function(t){return t.id===parseInt(e,10)}))})),Object(P["a"])(N,X,(function(t,e){t.attractionList=e})),Object(P["a"])(N,F,(function(t,e){t.total=e})),N),Q=(V={},Object(P["a"])(V,g,(function(t){var e=t.state,n=t.commit;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z(e.form);case 2:r=t.sent,a=r.data,o=r.total,n(X,a),n(F,o);case 7:case"end":return t.stop()}}),t)})))()})),Object(P["a"])(V,m,(function(t,e){var n=t.state,r=t.commit,a=t.dispatch;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==n.attractionList.length){t.next=3;break}return t.next=3,a(g);case 3:r(q,e);case 4:case"end":return t.stop()}}),t)})))()})),V),W=new y["a"].Store({state:z,getters:J,actions:Q,mutations:D}),$={name:"List",components:{SearchResultTable:B},data:function(){return{}},computed:{},beforeRouteUpdate:function(t,e,n){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n());case 1:case"end":return t.stop()}}),t)})))()},beforeRouteEnter:function(t,e,n){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==W.state.attractionList.length){t.next=3;break}return t.next=3,W.dispatch("".concat(g));case 3:return t.abrupt("return",n());case 4:case"end":return t.stop()}}),t)})))()},beforeRouteLeave:function(t,e,n){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n();case 1:case"end":return t.stop()}}),t)})))()},mounted:function(){document.getElementsByTagName("body")[0].classList.add("dom-ready")}},tt=$,et=Object(i["a"])(tt,d,f,!1,null,null,null),nt=et.exports,rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about-wrapper"},[r("header",{staticClass:"about-header"},[r("h3",[t._v(t._s(t.attraction.name))]),r("router-link",{staticClass:"back-home",attrs:{to:"/"}},[t._v(" 回首頁 ")])],1),r("div",{staticClass:"about-content"},[r("section",{staticClass:"about-section"},[r("h4",[t._v("景點資訊")]),r("div",{staticClass:"about-info"},[0!==t.attraction.tel.length?r("p",[t._v("電話："+t._s(t.attraction.tel))]):t._e(),0!==t.attraction.address.length?r("p",[t._v(" 地址："+t._s(t.attraction.address)+" "),r("a",{attrs:{href:"https://www.google.com.tw/maps/dir//"+t.attraction.nlat+","+t.attraction.elong,target:"_blank"}},[t._v(" 導航 ")])]):t._e(),0!==t.attraction.target.length?r("p",[t._v(" 推薦對象： "),t._l(t.attraction.target,(function(e){return r("span",{key:e.id},[t._v(" "+t._s(e.name)+"｜ ")])}))],2):t._e(),0!==t.attraction.service.length?r("p",[t._v(" 服務設施： "),t._l(t.attraction.service,(function(e){return r("span",{key:e.id},[t._v(" "+t._s(e.name)+"｜ ")])}))],2):t._e()])]),r("section",{staticClass:"about-section"},[r("h4",[t._v("景點介紹")]),r("div",{staticClass:"about-intro",domProps:{innerHTML:t._s(t.attractionIntro)}})]),t.attraction.images&&t.attraction.images.length>0?r("section",{staticClass:"about-section"},[r("h4",[t._v("景點照片")]),r("Carousel",{attrs:{items:t.attraction.images},on:{"show-image":t.showModalImage}})],1):t._e()]),r("aside",{staticClass:"about-slider"},[r("TravelMap",{staticClass:"travel-map",attrs:{marker:t.attractionMarker}})],1),r("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{close:function(e){t.showModal=!1}}},[r("template",{slot:"body"},[r("img",{staticClass:"modal-image",attrs:{src:t.modalImage.src}})]),r("template",{slot:"footer"},[r("p",[t._v(t._s(t.modalImage.subject?t.modalImage.subject:""))])])],2),r("back-to-top",[r("div",{staticClass:"back-to-top"},[r("img",{attrs:{alt:"back-to-top",src:n("545e")}})])])],1)},at=[],ot=(n("ac1f"),n("5319"),n("6afc")),it=n("6c36"),st=n.n(it),ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-carousel-wrapper"},[n("div",{staticClass:"card-carousel--nav__left",attrs:{disabled:t.atHeadOfList},on:{click:function(e){return t.moveCarousel(-1)}}}),n("div",{staticClass:"card-carousel"},[n("div",{staticClass:"card-carousel--overflow-container"},[n("div",{staticClass:"card-carousel-cards",style:{transform:"translateX("+t.currentOffset+"px)"}},t._l(t.items,(function(e,r){return n("div",{key:r,staticClass:"card-carousel--card",on:{click:function(n){return t.showImage(e)}}},[n("figure",[n("img",{attrs:{src:e.src}})])])})),0)])]),n("div",{staticClass:"card-carousel--nav__right",attrs:{disabled:t.atEndOfList},on:{click:function(e){return t.moveCarousel(1)}}})])},ut=[],lt={name:"Carousel",props:{items:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{currentOffset:0,windowSize:3,paginationFactor:220}},computed:{atEndOfList:function(){return this.currentOffset<=-1*this.paginationFactor*(this.items.length-this.windowSize)},atHeadOfList:function(){return 0===this.currentOffset}},methods:{moveCarousel:function(t){1!==t||this.atEndOfList?-1!==t||this.atHeadOfList||(this.currentOffset+=this.paginationFactor):this.currentOffset-=this.paginationFactor},showImage:function(t){this.$emit("show-image",t)}}},dt=lt,ft=(n("8cf1"),Object(i["a"])(dt,ct,ut,!1,null,null,null)),pt=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header"),n("div",{staticClass:"close",on:{click:function(e){return t.$emit("close")}}})],2),n("div",{staticClass:"modal-body"},[t._t("body")],2),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])},gt=[],ht={name:"Modal",props:{},data:function(){return{}}},bt=ht,vt=(n("30db"),Object(i["a"])(bt,mt,gt,!1,null,null,null)),yt=vt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GoogleMapLoader",{attrs:{"map-config":t.mapConfig,"api-key":"AIzaSyDKefBO8elLL_dzNOd94xHk93vd0IFAes8"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.google,a=e.map;return[n("GoogleMapMarker",{attrs:{marker:t.marker,google:r,map:a}})]}}])},[t._v(" // insert your google maps api key to render styled map ")])},Ct=[],Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"googleMap",staticClass:"google-map"}),Boolean(t.google)&&Boolean(t.map)?[t._t("default",null,{google:t.google,map:t.map})]:t._e()],2)},_t=[],kt=(n("d81d"),n("f464")),At=n.n(kt),xt={name:"GoogleMapsApiLoader",props:{mapConfig:{type:Object,default:function(){}},apiKey:{type:String,default:""}},data:function(){return{google:null,map:null}},mounted:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,At()({apiKey:t.apiKey});case 2:n=e.sent,t.google=n,t.initializeMap();case 5:case"end":return e.stop()}}),e)})))()},methods:{initializeMap:function(){var t=this.$refs.googleMap;this.map=new this.google.maps.Map(t,this.mapConfig)}}},jt=xt,It=(n("3402"),Object(i["a"])(jt,Ot,_t,!1,null,"2c89dd36",null)),Lt=It.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},Mt=[],Tt={props:{google:{type:Object,required:!0},map:{type:Object,required:!0},marker:{type:Object,required:!0}},mounted:function(){var t=this.google.maps.Marker;new t({position:this.marker.position,marker:this.marker,map:this.map})}},Et=Tt,St=Object(i["a"])(Et,Rt,Mt,!1,null,null,null),Bt=St.exports,Pt={clickableIcons:!1,streetViewControl:!1,panControlOptions:!1,gestureHandling:"cooperative",backgroundColor:"#e0efef",mapTypeControl:!1,zoomControlOptions:{style:"SMALL"},zoom:16,minZoom:10,maxZoom:20,styles:[{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e0efef"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#1900ff"},{color:"#c0e8e8"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{lightness:700}]},{featureType:"water",elementType:"all",stylers:[{color:"#7dcdcd"}]}]},qt={components:{GoogleMapLoader:Lt,GoogleMapMarker:Bt},props:{marker:{type:Object,required:!0}},data:function(){return{}},computed:{mapConfig:function(){return Object(v["a"])({},Pt,{center:this.marker.position})}}},Xt=qt,Ft=Object(i["a"])(Xt,wt,Ct,!1,null,null,null),Ut=Ft.exports,Yt={name:"About",components:{Carousel:pt,Modal:yt,TravelMap:Ut,BackToTop:ot["a"]},props:{attractionID:{type:String,default:""}},data:function(){return{showModal:!1,modalImage:{}}},computed:Object(v["a"])({},Object(y["b"])({attraction:function(t){return t.attraction}}),{attractionIntro:function(){var t=st.a.inHTMLData(this.attraction.introduction);return t?t.replace(/(?:\r\n|\r|\n)/g,"<br />"):""},attractionMarker:function(){return{id:this.attraction.id,position:{lat:this.attraction.nlat,lng:this.attraction.elong}}}}),mounted:function(){document.getElementsByTagName("body")[0].classList.add("dom-ready")},methods:{showModalImage:function(t){this.modalImage=t,this.showModal=!0}},beforeRouteUpdate:function(t,e,n){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n());case 1:case"end":return t.stop()}}),t)})))()},beforeRouteEnter:function(t,e,n){return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W.dispatch("".concat(m),t.params.attractionID);case 2:if(W.state.attraction){e.next=4;break}return e.abrupt("return",n("/list"));case 4:return e.abrupt("return",n());case 5:case"end":return e.stop()}}),e)})))()},beforeRouteLeave:function(t,e,n){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n();case 1:case"end":return t.stop()}}),t)})))()}},Gt=Yt,Nt=(n("f26d"),Object(i["a"])(Gt,rt,at,!1,null,null,null)),Vt=Nt.exports;r["a"].use(l["a"]);var Kt=[{path:"/",name:"Home",component:nt},{path:"/:attractionID",name:"About",props:!0,component:Vt},{path:"*",redirect:"/"}],Ht=new l["a"]({mode:"history",base:"/hello-taipei/",scrollBehavior:function(){return{y:0}},routes:Kt}),Zt=Ht;n("f5df1"),n("fb98");r["a"].config.productionTip=!1,new r["a"]({router:Zt,store:W,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f83":function(t,e,n){},"87c2":function(t,e,n){},"8cf1":function(t,e,n){"use strict";var r=n("ba52"),a=n.n(r);a.a},"9c0c":function(t,e,n){},ba52:function(t,e,n){},d149:function(t,e,n){},e60d:function(t,e,n){"use strict";var r=n("e9ec"),a=n.n(r);a.a},e9ec:function(t,e,n){},f26d:function(t,e,n){"use strict";var r=n("5f83"),a=n.n(r);a.a},fb98:function(t,e,n){}});