webpackJsonp([1],{"+phT":function(t,e){},"64E7":function(t,e,i){t.exports=i.p+"static/img/overview.9d26362.png"},FA0g:function(t,e){},G4qV:function(t,e){},KAGa:function(t,e){},Lo6X:function(t,e){},MOna:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s=i("zL8q"),n=i.n(s),l=(i("tvR6"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"footer"}},[a("div",{staticClass:"top"},[a("div",{staticClass:"left top-item"},[a("h2",[t._v("Information")]),t._v(" "),a("ul",[a("li",[t._v("DaRL Lab")]),t._v(" "),a("li",[t._v("Informatics of YingWu Computing School")]),t._v(" "),a("li",[t._v("New Jersey Institute of Technology")])])]),t._v(" "),a("div",{staticClass:"center top-item"},[a("h2",[t._v("Related Links")]),t._v(" "),a("ul",[a("li",[a("a",{staticClass:"Link1",attrs:{href:"https://www.njit.edu/"}},[t._v("NJIT official website")])]),t._v(" "),a("li",[a("a",{staticClass:"Link2",attrs:{href:"https://web.njit.edu/~hw32/"}},[t._v("Prof.Hua Wei")])]),t._v(" "),a("li",[a("a",{staticClass:"Link3",attrs:{href:"https://github.com/derekmei233/LibSignalSpare/tree/dev_pytorch"}},[t._v("GitHub of LibSignalSpare")])])])]),t._v(" "),a("div",{staticClass:"right top-item"},[a("h2",[t._v("Contact Us")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("\n          Any Questions？\n          "),a("a",{staticClass:"weiboLink",attrs:{href:"https://github.com/DaRL-LibSignal/LibSignal/issues",target:"_blank"}},[t._v("Issue Link")])]),t._v(" "),a("li",[t._v("Address: Newark, NJ 07102 USA\n\n        ")])])]),t._v(" "),a("div",{staticClass:"WeChat"},[a("img",{attrs:{src:i("dL/P"),width:"130",alt:""}})])]),t._v(" "),a("div",{staticClass:"bottom"},[t._v("\n    Copyright© 2022 - 2023 | DaRL | All Rights Reserved\n    "),t._v(" "),a("a",{staticClass:"vueLink",attrs:{href:"javascript:;"}})])])}]});var r=i("VU/8")({name:"footer-comp"},l,!1,function(t){i("ovcC")},"data-v-692639c8",null).exports,o={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[i("router-link",{attrs:{id:"Home",to:"/"}},[i("i",{staticClass:"el-icon-menu",staticStyle:{"font-size":"25px"}}),i("i",{staticStyle:{"font-size":"25px"}},[i("b",[t._v("LibSignal")])])])],1),t._v(" "),i("el-menu-item",{attrs:{index:"2"}},[i("router-link",{attrs:{id:"Directions",to:"/Directions"}},[i("i",{staticClass:"el-icon-position",staticStyle:{"font-size":"25px"}}),t._v("Get Started\n    ")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"8"}},[i("i",{staticClass:"el-icon-download",staticStyle:{"font-size":"25px"}}),t._v(" "),i("a",{staticClass:"Link1",attrs:{href:"https://github.com/DaRL-LibSignal/LibSingal",target:"_blank"}},[t._v("Installation")])]),t._v(" "),i("el-menu-item",{attrs:{index:"3"}},[i("i",{staticClass:"el-icon-star-off",staticStyle:{"font-size":"25px"}}),t._v(" "),i("a",{staticClass:"Link1",attrs:{href:"http://114.132.64.138:8080/index.html",target:"_blank"}},[t._v("Document")])]),t._v(" "),i("el-menu-item",{attrs:{index:"6"}},[i("router-link",{attrs:{id:"Paper",to:"/Paper"}},[i("i",{staticClass:"el-icon-reading",staticStyle:{"font-size":"25px"}}),t._v("\n      Paper\n    ")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"7"}},[i("router-link",{attrs:{id:"Test",to:"/Test"}},[i("i",{staticClass:"el-icon-edit-outline",staticStyle:{"font-size":"25px"}}),t._v("About\n    ")])],1)],1)],1)},staticRenderFns:[]};var v={name:"app",components:{mynavbar:i("VU/8")(o,c,!1,function(t){i("MOna")},"data-v-6098f17d",null).exports,YuFooter:r}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-affix",{attrs:{offset:120}},[e("mynavbar")],1),this._v(" "),e("router-view"),this._v(" "),e("yu-footer")],1)},staticRenderFns:[]};var d=i("VU/8")(v,h,!1,function(t){i("Lo6X")},null,null).exports,u=i("/ocq"),p={data:function(){return{platform:"pc",imgs:[{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"},{url:i("tGse"),link:"/assets/1.jpg"}]}},methods:{linkTo:function(){var t=this.$refs.carousel.activeIndex;this.$router.push(this.imgs[t].link)}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("span",{staticClass:"demonstration"}),t._v(" "),i("el-carousel",{ref:"carousel",staticClass:"lun_imgs",attrs:{height:"250px","indicator-position":"outside"},nativeOn:{click:function(e){return t.linkTo(e)}}},t._l(t.imgs,function(t){return i("el-carousel-item",{key:t.url,staticClass:"lun_img"},[i("img",{attrs:{src:t.url}})])}),1)],1)},staticRenderFns:[]};i("VU/8")(p,_,!1,function(t){i("ceWV")},null,null).exports;var m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("img",{attrs:{src:i("u7fc"),width:"1500px",height:"600px"}}),t._v(" "),a("FlashPic"),t._v(" "),a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("ul"),t._v(" "),a("h2",[t._v("Toolkit Overall Structure")]),t._v(" "),a("img",{attrs:{src:i("64E7"),width:"850px",height:"350px"}}),t._v(" "),a("el-divider",{attrs:{"border-style":"dashed"}}),t._v(" "),a("el-backtop",{attrs:{bottom:200}},[a("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ⮝\n      ")])])],1)},staticRenderFns:[]};var f=i("VU/8")({name:"hello",data:function(){return{msg:"Welcome to the LibSignal Official Website"}}},m,!1,function(t){i("QHh8")},"data-v-e03af748",null).exports,g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ⮝\n      ")])]),t._v(" "),i("h1",[t._v("Instructions of How to get your hands on the LibSignal")]),t._v(" "),i("div",{staticClass:"ubuntu"},[i("el-card",{staticClass:"ubuntuTitle"},[i("h2",{attrs:{align:"left"}},[t._v("Start Project on Linux!(Ubuntu)")]),t._v(" "),i("p",{staticStyle:{"font-size":"20px"},attrs:{align:"left"}},[t._v("we provide quick start steps on ubuntu, tested stable on version 18.04")])]),t._v(" "),i("div",{staticClass:"n1"},[i("el-timeline",[i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step1",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("Download code of our latest Github repo:")]),t._v(" "),i("a",{attrs:{href:"https://github.com/DaRL-LibSignal/LibSignal",target:"_blank"}},[t._v("https://github.com/DaRL-LibSignal/LibSignal")]),i("br")])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step2",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("Install cityflow follow the instructions here:")]),t._v(" "),i("a",{attrs:{href:"https://cityflow.readthedocs.io/en/latest/install.html",target:"_blank"}},[t._v("https://cityflow.readthedocs.io/en/latest/install.html")]),i("br"),t._v(" "),i("h4",[t._v("Install sumo follow the instructions here:")]),t._v(" "),i("a",{attrs:{href:"https://sumo.dlr.de/docs/Downloads.php",target:"_blank"}},[t._v("https://sumo.dlr.de/docs/Downloads.php")]),i("br")])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step3",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("Open the command line and Install the required env info:")]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("conda env create -f requirement.yml")])]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("conda activate LibSignal")])]),t._v(" "),i("p"),t._v(" "),i("h4",[t._v("If anything missed, could be this:")]),t._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",[t._v("pip install lmdb")])])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step4",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("One Click from run.py with default configurations:")]),t._v(" "),i("p",[t._v("As an example, we set DQN with cityflow as default")]),t._v("detailed config settings can be found at\n            "),i("a",{attrs:{href:"http://114.132.64.138:8080/index.html",target:"_blank"}},[t._v("Document")]),i("br")])],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"windows"},[i("el-divider",{attrs:{"border-style":"dashed"}}),t._v(" "),i("el-card",{staticClass:"windowsTitle"},[i("h2",{attrs:{align:"left"}},[t._v("Start Project on Windows!")]),t._v(" "),i("p",{attrs:{align:"left"}},[t._v("Our toolkit is also compitable with Windows OS")])]),t._v(" "),i("div",{staticClass:"n2"},[i("el-timeline",[i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step1",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("step1")]),t._v(" "),i("p",[t._v("infos")])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step2",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("step2")]),t._v(" "),i("p",[t._v("infos")])])],1),t._v(" "),i("el-timeline-item",{staticStyle:{"text-align":"left"},attrs:{timestamp:"step3",placement:"top"}},[i("el-card",{staticStyle:{"font-size":"16px"}},[i("h4",[t._v("step3")]),t._v(" "),i("p",[t._v("infos")])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var b=i("VU/8")(null,g,!1,function(t){i("YMXQ")},null,null).exports,x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h1",[t._v("Document to help you better understand")]),t._v(" "),i("p",[t._v("There are Already Accomplished Ones")]),t._v(" "),i("p",[t._v("And also Ongoing Ones")]),t._v(" "),i("nav",{staticClass:"n4"},[t._v("Accomplished Tasks")]),t._v(" "),i("nav",{staticClass:"n4"},[t._v("Ongoing Items")]),t._v(" "),i("div",{staticClass:"d4"},[t._v("this is Something Else")]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[]};var y=i("VU/8")(null,x,!1,function(t){i("G4qV")},null,null).exports,S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h1",[t._v("The New Features of Our Work")]),t._v(" "),t._m(0),t._v(" "),i("nav",{staticClass:"n2"},[t._v("Recent News")]),t._v(" "),i("nav",{staticClass:"n2"},[t._v("History News")]),t._v(" "),i("div",{staticClass:"d2"},[t._v("this is Something Else")]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("h2",[this._v("Hot Spots")])])}]};var w=i("VU/8")(null,S,!1,function(t){i("+phT")},null,null).exports,k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("h1",[t._v("Detailed Tutorial of The LibSignalSpare Toolkit")]),t._v(" "),i("nav",{staticClass:"n3"},[t._v("first part")]),t._v(" "),i("nav",{staticClass:"n3"},[t._v("seccond part")]),t._v(" "),i("div",{staticClass:"d3"},[t._v("this is Something Else")]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ↑\n      ")])])],1)},staticRenderFns:[]};var C=i("VU/8")(null,k,!1,function(t){i("KAGa")},null,null).exports,L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v(" This is First Part ")])])}]},R=i("VU/8")(null,L,!1,null,null,null).exports,T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v(" This is First Part ")])])}]},A=i("VU/8")(null,T,!1,null,null,null).exports,E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block",staticStyle:{"text-align":"center"}},[i("h1",[t._v("LibSignal: An Open Library for Traffic Signal Control")]),t._v(" "),i("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"card-header"},[i("span",{staticStyle:{"font-size":"25px"},attrs:{text:""}},[t._v("Abstract")]),t._v(" "),i("a",{attrs:{href:"https://openreview.net/pdf?id=xojHpEKoWWF",target:"_blank"}},[i("el-button",{staticClass:"button",staticStyle:{"font-size":"24px"},attrs:{text:""}},[t._v("Full Paper")])],1)])]},proxy:!0}])},[t._v(" "),i("div",{staticClass:"text item",staticStyle:{"font-size":"20px","font-family":"Times New Roman","text-align":"justify","line-height":"30px"}},[t._v("This paper introduces a library for cross-simulator comparison of reinforcement learning models \n              in traffic signal control tasks. This library is developed to implement recent state-of-the-art reinforcement learning \n              models with extensible interfaces and unified cross-simulator evaluation metrics. It supports commonly-used simulators \n              in traffic signal control tasks, including Simulation of Urban Mobility(SUMO) and CityFlow, and multiple benchmark datasets \n              for fair comparisons. We conducted experiments to validate our implementation of the models and to calibrate the simulators \n              so that the experiments from one simulator could be referential to the other. Based on the validated models and calibrated \n              environments, this paper compares and reports the performance of current state-of-the-art RL algorithms across different \n              datasets and simulators. This is the first time that these methods have been compared fairly under the same datasets with \n              different simulators.\n          ")])]),t._v(" "),i("h1",[t._v("We Also Provide a List of Papers Related to Signal Control Domain")]),t._v(" "),i("el-card",{staticClass:"box-card",scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"card-header"},[i("span",{staticStyle:{"font-size":"25px"},attrs:{text:""}},[t._v("Paper List")]),t._v(" "),i("a",{attrs:{href:"https://github.com/DaRL-LibSignal/LibSignal/blob/master/awesome-RL-traffic-signal-control-papers.md",target:"_blank"}},[i("el-button",{staticClass:"button",staticStyle:{"font-size":"24px"},attrs:{text:""}},[t._v("Full List")])],1)])]},proxy:!0}])},[t._v(" "),i("div",{staticClass:"text item",staticStyle:{"font-size":"20px","font-family":"Times New Roman","text-align":"justify","line-height":"30px"}},[t._v("\n              We collected RL-based traffic signal control papers published in the recent years (2016-2021) "),i("br"),t._v("\n              on top conferences and journals  and their workshop papers. "),i("br"),t._v(" "),i("br"),t._v("\n              In addition, the surveys since 2018 and representative papers mentioned in the surveys are also included. "),i("br"),t._v("\n              We will continue to update the collection."),i("br"),t._v(" "),i("br"),t._v(" "),i("li",[t._v("NeurIPS")]),t._v(" "),i("li",[t._v("AAAI")]),t._v(" "),i("li",[t._v("AAMAS")]),t._v(" "),i("li",[t._v("KDD")]),t._v(" "),i("li",[t._v("CIKM")]),t._v(" "),i("li",[t._v("IEEE")]),t._v(" "),i("li",[t._v("TITS")]),t._v(" "),i("li",[t._v("ITSC")]),t._v(" "),i("li",[t._v("TR-B")])])]),t._v(" "),i("el-backtop",{attrs:{bottom:200}},[i("div",{staticStyle:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("\n        ⮝\n      ")])])],1)},staticRenderFns:[]};var F=i("VU/8")(null,E,!1,function(t){i("VQra")},null,null).exports;a.default.use(u.a);var z=new u.a({routes:[{path:"/",name:"Home",component:f,children:[{path:"/",name:"FirstPart",component:R},{path:"SecondPart",name:"SecondPart",component:A}]},{path:"/Honour",name:"Honour",component:y},{path:"/News",name:"News",component:w},{path:"/Directions",name:"Directions",component:b},{path:"/Members",name:"Members",component:C},{path:"/Paper",name:"Paper",component:F}]}),I=(i("FA0g"),i("V8mf")),D=i.n(I);a.default.directive("highlight",function(t){D.a.configure({useBR:!0}),t.querySelectorAll("pre code").forEach(function(t){D.a.highlightBlock(t)})}),a.default.use(n.a),new a.default({el:"#app",router:z,template:"<App/>",components:{App:d}})},QHh8:function(t,e){},VQra:function(t,e){},YMXQ:function(t,e){},ceWV:function(t,e){},"dL/P":function(t,e,i){t.exports=i.p+"static/img/robot.791550e.png"},ovcC:function(t,e){},tGse:function(t,e,i){t.exports=i.p+"static/img/1.b044388.jpg"},tvR6:function(t,e){},u7fc:function(t,e,i){t.exports=i.p+"static/img/main2.b549b22.jpg"}},["NHnr"]);
//# sourceMappingURL=app.e641a2adbf56c5f7c157.js.map