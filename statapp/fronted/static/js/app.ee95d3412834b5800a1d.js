webpackJsonp([1],{"+YRy":function(t,e){},HZ6U:function(t,e){},Inqd:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("kV13"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("C7Lr")({name:"App"},a,!1,function(t){i("+YRy")},null,null).exports,s=i("p7sN"),r=(i("xepS"),i("u7ix"),i("YLtW"),i("b2te"),i("M6hb"),i("jpHP"),i("I+ZC"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title"},[this._v('雅居乐花园"四返"人员信息统计')]),this._v(" "),e("chart",{ref:"region",attrs:{options:this.region}}),this._v(" "),e("chart",{ref:"isolate",attrs:{options:this.isolate}}),this._v(" "),e("chart",{ref:"line",attrs:{options:this.line}})],1)},staticRenderFns:[]});var h=i("C7Lr")({name:"HelloWorld",data:function(){return{region:{title:{text:'"四返"人员出发地信息统计',subtext:"动态数据",x:"left"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}人 ({d}%)"},legend:{show:!0,orient:"horizontal",bottom:"20px",data:["湖北武汉","两省四市","其他地区"]},series:[{name:"此地区人员数量",type:"pie",radius:"50%",center:["50%","50%"],label:{formatter:"{b}：{c}人 "},data:[{value:90,name:"两省四市"},{value:20,name:"湖北武汉"},{value:135,name:"其他地区"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},isolate:{title:{text:"解除隔离人数占比",subtext:"动态数据",x:"left"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}人 ({d}%)"},legend:{show:!0,orient:"horizontal",bottom:"20px",data:["正在隔离人数","解除隔离人数"]},series:[{name:"此类人员数量",type:"pie",radius:"50%",center:["50%","50%"],label:{formatter:"{b}：{c}人 "},data:[{value:235,name:"正在隔离人数"},{value:35,name:"解除隔离人数"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},line:{title:{text:"隔离人数变化趋势",subtext:"动态数据",x:"left"},xAxis:{type:"category",data:["2月1日","2月2日","2月3日","2月4日","2月5日","2月6日","2月7日"]},yAxis:{type:"value"},series:[{data:[200,180,174,153,133,121,110],type:"line"}]}}},methods:{loadData:function(){var t=this;this.$axios.get("https://www.geckos.top/api/peopleinfos").then(function(e){if(null!=e.data){var i=e.data;t.region.series[0].data=[{value:i.hotCity,name:"两省四市"},{value:i.hubei,name:"湖北武汉"},{value:i.otherCity,name:"其他地区"}],t.isolate.series[0].data=[{value:i.isolate,name:"正在隔离人数"},{value:i.notIsolate,name:"解除隔离人数"}],t.line.xAxis.data=i.dayliyDate,t.line.series[0].data=i.dayliyIsolateNum}})}},created:function(){this.loadData()},mounted:function(){}},r,!1,function(t){i("HZ6U")},null,null).exports;n.a.use(s.a);var c=new s.a({routes:[{path:"/",name:"HelloWorld",component:h}]}),l=i("8zml"),u=i.n(l),d=i("ZLEe"),p=i.n(d),f=i("IHPB"),g=i.n(f),m=i("YR+p"),v=i.n(m),w=i("X5FV"),b=i.n(w),x=i("3mB0"),O=["theme","initOptions","autoresize"],y=["manualUpdate","watchShallow"],_={props:{options:Object,theme:[String,Object],initOptions:Object,group:String,autoresize:Boolean,watchShallow:Boolean,manualUpdate:Boolean},data:function(){return{lastArea:0}},watch:{group:function(t){this.chart.group=t}},methods:{mergeOptions:function(t,e,i){this.manualUpdate&&(this.manualOptions=t),this.chart?this.delegateMethod("setOption",t,e,i):this.init(t)},appendData:function(t){this.delegateMethod("appendData",t)},resize:function(t){this.delegateMethod("resize",t)},dispatchAction:function(t){this.delegateMethod("dispatchAction",t)},convertToPixel:function(t,e){return this.delegateMethod("convertToPixel",t,e)},convertFromPixel:function(t,e){return this.delegateMethod("convertFromPixel",t,e)},containPixel:function(t,e){return this.delegateMethod("containPixel",t,e)},showLoading:function(t,e){this.delegateMethod("showLoading",t,e)},hideLoading:function(){this.delegateMethod("hideLoading")},getDataURL:function(t){return this.delegateMethod("getDataURL",t)},getConnectedDataURL:function(t){return this.delegateMethod("getConnectedDataURL",t)},clear:function(){this.delegateMethod("clear")},dispose:function(){this.delegateMethod("dispose")},delegateMethod:function(t){var e;this.chart||this.init();for(var i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return(e=this.chart)[t].apply(e,g()(n))},delegateGet:function(t){return this.chart||this.init(),this.chart[t]()},getArea:function(){return this.$el.offsetWidth*this.$el.offsetHeight},init:function(t){var e=this;if(!this.chart){var i=v.a.init(this.$el,this.theme,this.initOptions);this.group&&(i.group=this.group),i.setOption(t||this.manualOptions||this.options||{},!0),p()(this.$listeners).forEach(function(t){var n=e.$listeners[t];0===t.indexOf("zr:")?i.getZr().on(t.slice(3),n):i.on(t,n)}),this.autoresize&&(this.lastArea=this.getArea(),this.__resizeHandler=b()(function(){0===e.lastArea?(e.mergeOptions({},!0),e.resize(),e.mergeOptions(e.options||e.manualOptions||{},!0)):e.resize(),e.lastArea=e.getArea()},100,{leading:!0}),Object(x.a)(this.$el,this.__resizeHandler)),u()(this,{width:{configurable:!0,get:function(){return e.delegateGet("getWidth")}},height:{configurable:!0,get:function(){return e.delegateGet("getHeight")}},isDisposed:{configurable:!0,get:function(){return!!e.delegateGet("isDisposed")}},computedOptions:{configurable:!0,get:function(){return e.delegateGet("getOption")}}}),this.chart=i}},initOptionsWatcher:function(){var t=this;this.__unwatchOptions&&(this.__unwatchOptions(),this.__unwatchOptions=null),this.manualUpdate||(this.__unwatchOptions=this.$watch("options",function(e,i){!t.chart&&e?t.init():t.chart.setOption(e,e!==i)},{deep:!this.watchShallow}))},destroy:function(){this.autoresize&&Object(x.b)(this.$el,this.__resizeHandler),this.dispose(),this.chart=null},refresh:function(){this.chart&&(this.destroy(),this.init())}},created:function(){var t=this;this.initOptionsWatcher(),O.forEach(function(e){t.$watch(e,function(){t.refresh()},{deep:!0})}),y.forEach(function(e){t.$watch(e,function(){t.initOptionsWatcher(),t.refresh()})})},mounted:function(){this.options&&this.init()},activated:function(){this.autoresize&&this.chart&&this.chart.resize()},destroyed:function(){this.chart&&this.destroy()},connect:function(t){"string"!=typeof t&&(t=t.map(function(t){return t.chart})),v.a.connect(t)},disconnect:function(t){v.a.disConnect(t)},registerMap:function(t,e,i){v.a.registerMap(t,e,i)},registerTheme:function(t,e){v.a.registerTheme(t,e)},graphic:v.a.graphic},M={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"echarts"})},staticRenderFns:[]};var z=i("C7Lr")(_,M,!1,function(t){i("Inqd")},null,null).exports,A=i("I29D"),$=i.n(A);n.a.component("chart",z),n.a.prototype.$axios=$.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:c,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.ee95d3412834b5800a1d.js.map