webpackJsonp([1],{"+YRy":function(t,e){},Inqd:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("kV13"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("C7Lr")({name:"App"},a,!1,function(t){i("+YRy")},null,null).exports,s=i("p7sN"),r=(i("xepS"),i("u7ix"),i("YLtW"),i("b2te"),i("M6hb"),i("jpHP"),i("I+ZC"),{name:"HelloWorld",data:function(){return{date:null,region:{title:{text:'"四返"人员始发地区分布',subtext:"动态数据",x:"left"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}人 ({d}%)"},legend:{show:!0,orient:"horizontal",bottom:"20px",data:["湖北省","一省四市","其他地区"]},series:[{name:"此地区人员数量",type:"pie",radius:"50%",center:["50%","50%"],label:{formatter:"{b}：{c}人 "},data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},isolate:{title:{text:"当前隔离与解除隔离人员占比",subtext:"动态数据",x:"left"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}人 ({d}%)"},legend:{show:!0,orient:"horizontal",bottom:"20px",data:["湖北隔离人数","一省四市隔离人数","其他隔离人数","解除隔离人数"]},series:[{name:"此类人员数量",type:"pie",radius:"50%",center:["50%","50%"],label:{formatter:"{b}：{c}人 "},data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},line:{title:{text:"每日隔离人数走势",subtext:"动态数据",x:"left"},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{data:[],label:{show:!0,position:"top"},type:"line"}]}}},methods:{loadData:function(){this.date=(new Date).format("yyyy-MM-dd");var t=this;this.$axios.get("https://www.geckos.top/api/peopleinfos").then(function(e){if(null!=e.data){var i=e.data;t.region.series[0].data=[{value:i.hubei,name:"湖北省"},{value:i.hotCity,name:"一省四市"},{value:i.otherCity,name:"其他地区"}],t.isolate.series[0].data=[{value:i.hubeiIsolate,name:"湖北隔离人数"},{value:i.hotCityIsolate,name:"一省四市隔离人数"},{value:i.otherIsolate,name:"其他隔离人数"},{value:i.notIsolate,name:"解除隔离人数"}],t.line.xAxis.data=i.dayliyDate,t.line.series[0].data=i.dayliyIsolateNum}})}},created:function(){this.loadData()},mounted:function(){}}),h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v('雅居乐花园"四返"人员动态信息')]),t._v(" "),i("div",{staticClass:"time"},[t._v("(数据更新时间:"+t._s(t.date)+")"),i("div",[i("chart",{ref:"region",staticStyle:{width:"100%"},attrs:{"auto-resize":!0,options:t.region}}),t._v(" "),i("chart",{ref:"isolate",staticStyle:{width:"100%"},attrs:{"auto-resize":!0,options:t.isolate}}),t._v(" "),i("chart",{ref:"line",staticStyle:{width:"100%"},attrs:{"auto-resize":!0,options:t.line}})],1)])])},staticRenderFns:[]};var l=i("C7Lr")(r,h,!1,function(t){i("e8Zj")},null,null).exports,c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("H1",[t._v('雅居乐花园小区"四返"人员信息统计')]),t._v(" "),i("p",{staticClass:"text"},[t._v("1.两省四市返回人员共"+t._s(t.home)+"户,"+t._s(t.people)+"人.")]),t._v(" "),i("p",{staticClass:"text"},[t._v("(目前正在隔离"+t._s(t.isolateHome)+"户"+t._s(t.isolatePeople)+"人.其中湖北"+t._s(t.hubeiHome)+"户"+t._s(t.hubeiPeople)+"人.)")]),t._v(" "),i("p",{staticClass:"text"},[t._v("2.其他四返人员共"+t._s(t.otherHome)+"户"+t._s(t.otherPeople)+"人.")]),t._v(" "),i("p",{staticClass:"text"},[t._v("(目前自行隔离"+t._s(t.otherIsolateHome)+"户"+t._s(t.otherIsolatePeople)+"人,解除隔离"+t._s(t.freeOtherHome)+"户"+t._s(t.freeOtherPeople)+"人.)")]),t._v(" "),i("p",{staticClass:"text"},[t._v("3.网格化管理人员(市码扫码人员)共"+t._s(t.qrcodeHome)+"户"+t._s(t.qrcodePeople)+"人.")]),t._v(" "),i("p",{staticClass:"text"},[t._v("(目前扫码隔离"+t._s(t.isolateQrcodeHome)+"户"+t._s(t.isolateQrcodePeople)+"人,解除"+t._s(t.freeQrcodeHome)+"户"+t._s(t.freeQrcodePeople)+"人.)")])],1)},staticRenderFns:[]};var d=i("C7Lr")({name:"Statistics",data:function(){return{home:33,people:49,isolateHome:2,isolatePeople:5,hubeiHome:1,hubeiPeople:4,otherHome:209,otherPeople:318,otherIsolateHome:83,otherIsolatePeople:147,freeOtherHome:126,freeOtherPeople:171,qrcodeHome:42,qrcodePeople:54,isolateQrcodeHome:39,isolateQrcodePeople:49,freeQrcodeHome:3,freeQrcodePeople:5}},methods:{loadData:function(){}},created:function(){this.loadData()},mounted:function(){}},c,!1,function(t){i("wa1D")},"data-v-f282ae2e",null).exports;o.a.use(s.a);var u=new s.a({routes:[{path:"/",name:"HelloWorld",component:l},{path:"/statistics",name:"Statistics",component:d}]}),p=i("8zml"),f=i.n(p),m=i("ZLEe"),g=i.n(m),_=i("IHPB"),v=i.n(_),w=i("YR+p"),x=i.n(w),b=i("X5FV"),y=i.n(b),O=i("3mB0"),H=["theme","initOptions","autoresize"],P=["manualUpdate","watchShallow"],C={props:{options:Object,theme:[String,Object],initOptions:Object,group:String,autoresize:Boolean,watchShallow:Boolean,manualUpdate:Boolean},data:function(){return{lastArea:0}},watch:{group:function(t){this.chart.group=t}},methods:{mergeOptions:function(t,e,i){this.manualUpdate&&(this.manualOptions=t),this.chart?this.delegateMethod("setOption",t,e,i):this.init(t)},appendData:function(t){this.delegateMethod("appendData",t)},resize:function(t){this.delegateMethod("resize",t)},dispatchAction:function(t){this.delegateMethod("dispatchAction",t)},convertToPixel:function(t,e){return this.delegateMethod("convertToPixel",t,e)},convertFromPixel:function(t,e){return this.delegateMethod("convertFromPixel",t,e)},containPixel:function(t,e){return this.delegateMethod("containPixel",t,e)},showLoading:function(t,e){this.delegateMethod("showLoading",t,e)},hideLoading:function(){this.delegateMethod("hideLoading")},getDataURL:function(t){return this.delegateMethod("getDataURL",t)},getConnectedDataURL:function(t){return this.delegateMethod("getConnectedDataURL",t)},clear:function(){this.delegateMethod("clear")},dispose:function(){this.delegateMethod("dispose")},delegateMethod:function(t){var e;this.chart||this.init();for(var i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return(e=this.chart)[t].apply(e,v()(o))},delegateGet:function(t){return this.chart||this.init(),this.chart[t]()},getArea:function(){return this.$el.offsetWidth*this.$el.offsetHeight},init:function(t){var e=this;if(!this.chart){var i=x.a.init(this.$el,this.theme,this.initOptions);this.group&&(i.group=this.group),i.setOption(t||this.manualOptions||this.options||{},!0),g()(this.$listeners).forEach(function(t){var o=e.$listeners[t];0===t.indexOf("zr:")?i.getZr().on(t.slice(3),o):i.on(t,o)}),this.autoresize&&(this.lastArea=this.getArea(),this.__resizeHandler=y()(function(){0===e.lastArea?(e.mergeOptions({},!0),e.resize(),e.mergeOptions(e.options||e.manualOptions||{},!0)):e.resize(),e.lastArea=e.getArea()},100,{leading:!0}),Object(O.a)(this.$el,this.__resizeHandler)),f()(this,{width:{configurable:!0,get:function(){return e.delegateGet("getWidth")}},height:{configurable:!0,get:function(){return e.delegateGet("getHeight")}},isDisposed:{configurable:!0,get:function(){return!!e.delegateGet("isDisposed")}},computedOptions:{configurable:!0,get:function(){return e.delegateGet("getOption")}}}),this.chart=i}},initOptionsWatcher:function(){var t=this;this.__unwatchOptions&&(this.__unwatchOptions(),this.__unwatchOptions=null),this.manualUpdate||(this.__unwatchOptions=this.$watch("options",function(e,i){!t.chart&&e?t.init():t.chart.setOption(e,e!==i)},{deep:!this.watchShallow}))},destroy:function(){this.autoresize&&Object(O.b)(this.$el,this.__resizeHandler),this.dispose(),this.chart=null},refresh:function(){this.chart&&(this.destroy(),this.init())}},created:function(){var t=this;this.initOptionsWatcher(),H.forEach(function(e){t.$watch(e,function(){t.refresh()},{deep:!0})}),P.forEach(function(e){t.$watch(e,function(){t.initOptionsWatcher(),t.refresh()})})},mounted:function(){this.options&&this.init()},activated:function(){this.autoresize&&this.chart&&this.chart.resize()},destroyed:function(){this.chart&&this.destroy()},connect:function(t){"string"!=typeof t&&(t=t.map(function(t){return t.chart})),x.a.connect(t)},disconnect:function(t){x.a.disConnect(t)},registerMap:function(t,e,i){x.a.registerMap(t,e,i)},registerTheme:function(t,e){x.a.registerTheme(t,e)},graphic:x.a.graphic},z={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"echarts"})},staticRenderFns:[]};var M=i("C7Lr")(C,z,!1,function(t){i("Inqd")},null,null).exports,D=i("I29D"),A=i.n(D);o.a.component("chart",M),o.a.prototype.$axios=A.a,o.a.config.productionTip=!1,new o.a({el:"#app",router:u,components:{App:n},template:"<App/>"})},e8Zj:function(t,e){},wa1D:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f1fab3b55a0e30340ca2.js.map