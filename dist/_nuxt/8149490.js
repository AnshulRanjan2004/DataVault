(window.webpackJsonp=window.webpackJsonp||[]).push([[18,11,12],{278:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("5320a6b8",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";var r=n(2),o=n(312);r({target:"String",proto:!0,forced:n(313)("link")},{link:function(t){return o(this,"a","href",t)}})},280:function(t,e,n){"use strict";n(278)},281:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,".text-shadow{text-shadow:0 0 3px #000}",""]),r.locals={},t.exports=r},309:function(t,e,n){"use strict";n.r(e);n(198);var r={props:{pct:{type:Number,default:0}}},o=(n(280),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full bg-gray-100 rounded-full overflow-hidden shadow-inner h-6 dark:bg-gray-600"},[e("div",{staticClass:"bg-blue-400 text-xs leading-none py-3 text-center",style:"width: ".concat(t.pct,"%")}),t._v(" "),e("div",{staticClass:"text-center w-full -mt-6 font-semibold text-white text-shadow"},[t._v("\n    "+t._s(t.pct)+"%\n  ")])])}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,n){var r=n(4),o=n(23),c=n(13),l=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var f=c(o(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+d(c(r),l,"&quot;")+'"'),h+">"+f+"</"+e+">"}},313:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},314:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return k})),n.d(e,"c",(function(){return j}));var r=n(22),o=n(9),c=(n(34),n(15),n(42),n(320),n(46),n(199),n(108),n(45),n(33),n(311),n(198),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(321)),l=n(282),d=n(308);function f(t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o,data,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://dweb.link/api/v0/ls?arg=".concat(encodeURIComponent(e)),t.next=3,fetch(n);case 3:return o=t.sent,t.next=6,o.json();case 6:return data=t.sent,c=[],data.Objects[0].Links.forEach((function(t){var e=Object.fromEntries(Object.entries(t).map((function(t){var e=Object(r.a)(t,2),n=e[0],o=e[1];return[n.toLowerCase(),o]})));c.push(e)})),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return new c.a({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc2OTc1RmUzRjI3MWMzMjEzMDY4Y2Q3RDAzNGRmODc4MjMwMDU5MDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODA5ODc3MDc0NTksIm5hbWUiOiJEYXRhVmF1bHQifQ.tadB3BSTNjthRrp7BQ4E6YeSBGA3BYpptq_DdCb0EP0"})}function v(t,e,n,r,o,c,l){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(regeneratorRuntime.mark((function t(e,n,caption,r,o,c,f){var h,v,w,m,y,k,C,j,O,_,R,S,I;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(h="".concat("UnFile"," | ").concat(d.a.generate(20)),v={files:{},text:f,caption:caption,addresses:r},w=[],m=0,y=Object.keys(e);m<y.length;m++)k=y[m],v.files[e[k].file.name]=e[k].originalName,w.push(e[k].file);return C=Object(l.d)("metadata.json",v),j=new File([String(o)],"VERSION",{type:"text/plain"}),w.push(j),t.next=9,Object(d.c)(C,n,!0);case 9:return O=t.sent,w.push(O.file),_=x(),console.log("> 🤖 calculating content ID for files"),R=w.map((function(t){return t.size})).reduce((function(a,b){return a+b}),0),S=0,t.next=17,_.put(w,{name:h,onRootCidReady:function(t){console.log("> 🔑 locally calculated Content ID: ".concat(t," ")),console.log("> 📡 sending files to web3.storage ")},onStoredChunk:function(t){console.log("> 🛰 sent ".concat(t.toLocaleString()," bytes to web3.storage"));var e=100*(S+=t)/R;console.log("Uploading... ".concat(e.toFixed(2),"% complete")),c(Number(e.toFixed(1)))}});case 17:return I=t.sent,t.abrupt("return",I);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.e)(e,"metadata.json.enc"),t.next=3,fetch(n);case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("error fetching image metadata: [".concat(r.status,"] ").concat(r.statusText));case 6:return t.next=8,r.blob();case 8:return o=t.sent,t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=x(),t.next=3,n.status(e);case 3:return r=t.sent,console.log(r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,e,n,r){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(regeneratorRuntime.mark((function t(e,n,r,o){var c,d,f,h,x,v,w,m,y,k,C,j,O,_,R;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(l.e)(e,n),t.next=3,fetch(c);case 3:if((d=t.sent).ok){t.next=6;break}throw"Could not fetch file, try again.";case 6:f=d.body.getReader(),h=d.headers.get("Content-Length"),console.log(h),x=0,v=[];case 11:return t.next=14,f.read();case 14:if(w=t.sent,m=w.done,y=w.value,!m){t.next=19;break}return t.abrupt("break",24);case 19:v.push(y),x+=y.length,r&&r(o,x/h*100),t.next=11;break;case 24:for(k=new Uint8Array(x),C=0,j=0,O=v;j<O.length;j++)_=O[j],k.set(_,C),C+=_.length;return R=new Blob([k]),t.abrupt("return",R);case 28:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},318:function(t,e,n){"use strict";n.r(e);n(279),n(198),n(82);var r={data:function(){return{copyBtnText:"Copy"}},props:{password:{type:String},pct:{type:Number},cid:{type:String},caption:{type:String}},computed:{baseUrl:function(){return window.location.origin},link:function(){return"/d/".concat(this.cid)},combinedLink:function(){return this.baseUrl+this.link+"?key=".concat(this.password)}},methods:{copyToClipboard:function(){var t=this;navigator.clipboard.writeText(this.combinedLink),this.copyBtnText="Copied!",setTimeout((function(){t.copyBtnText="Copy"}),1e3)},saveLink:function(){var t=localStorage.getItem("unfile-uploads");(t=t&&JSON.parse(t)||[]).unshift({caption:this.caption||"",link:this.link+"?key=".concat(this.password)}),localStorage.setItem("unfile-uploads",JSON.stringify(t)),this.$router.push("/myfiles")}}},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sm:max-w-lg w-full py-10 px-10 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[e("transition",{attrs:{"enter-active-class":"transition-all delay-500 duration-300 ease-out","leave-active-class":"transition-all duration-500 ease-in","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.cid?e("div",{key:"result"},[e("h4",{staticClass:"text-md font-bold text-gray-500 tracking-wide mb-3 dark:text-gray-300"},[t._v("\n        Your Link:\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center p-4 space-x-4 border-2 border-gray-300 rounded-lg dark:border-gray-600"},[e("div",{staticClass:"w-full text-base border-r-2 pr-3 select-all break-all dark:border-gray-400 dark:text-white"},[t._v("\n          "+t._s(t.baseUrl)+t._s(t.link)),e("span",{staticClass:"text-red-500 dark:text-red-400"},[t._v("?key="+t._s(t.password))])]),t._v(" "),e("div",{staticClass:"flex-shrink-0"},[e("button",{staticClass:"p-2 bg-blue-500 text-gray-100 rounded-md focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300",on:{click:t.copyToClipboard}},[t._v("\n            "+t._s(t.copyBtnText)+"\n          ")])])]),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("button",{staticClass:"mt-10 flex justify-center py-2 px-4 tracking-wide font-semibold rounded-xl bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300",on:{click:t.saveLink}},[t._v("\n          Save Link in Browser Storage\n        ")])])]):e("div",{key:"progress"},[e("div",{staticClass:"text-center mb-5"},[e("h4",{staticClass:"text-sm font-bold text-gray-400 tracking-wide dark:text-gray-200"},[t._v("\n          "+t._s(t.pct>0?"Upload in progress..":"Preparing Web3.Storage please wait..")+"\n        ")])]),t._v(" "),e("ProgressBar",{staticClass:"my-10 max-w-sm mx-auto",attrs:{pct:t.pct}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProgressBar:n(309).default})},325:function(t,e,n){"use strict";var r=n(9),o=(n(34),n(314));e.a={data:function(){return{showProgress:!1,password:"",pct:0,cid:"",caption:""}},methods:{startUpload:function(data,t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.showProgress=!0,e.caption=data.caption||"",n.next=4,Object(o.e)(data.files,data.password,data.caption,data.addresses,e.$config.clientVersion,e.progressCallback,t);case 4:(r=n.sent)&&(e.pct=100,e.cid=r);case 6:case"end":return n.stop()}}),n)})))()},progressCallback:function(t){console.log(t),this.pct=t},updatePassword:function(t){this.password=t}}}},360:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"DataVault - Decentralized text paste sharing"}},mixins:[n(325).a]},o=n(20),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:py-12 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center flex-1"},[e("transition",{attrs:{"enter-active-class":"transition-all delay-300 duration-300 ease","leave-active-class":"transition-all duration-300 ease","enter-class":"opacity-0 transform -translate-x-full","enter-to-class":"opacity-100 transform -translate-x-0","leave-class":"opacity-100 transform -translate-x-0","leave-to-class":"opacity-0 transform -translate-x-full"}},[t.showProgress?e("Progress",{attrs:{password:t.password,pct:t.pct,cid:t.cid,caption:t.caption}}):e("PasteBox",{attrs:{password:t.password},on:{upload:t.startUpload,passwordCreated:t.updatePassword}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PasteBox:n(355).default,Progress:n(318).default})}}]);