(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{217:function(t,e,r){var content=r(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("5320a6b8",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";r(217)},228:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,".text-shadow{text-shadow:0 0 3px #000}",""]),n.locals={},t.exports=n},230:function(t,e,r){"use strict";r.r(e);var n={props:{pct:{type:Number,default:0}}},o=(r(227),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full bg-gray-100 rounded-full overflow-hidden shadow-inner h-6 dark:bg-gray-600"},[e("div",{staticClass:"bg-blue-400 text-xs leading-none py-3 text-center",style:"width: ".concat(t.pct,"%")}),t._v(" "),e("div",{staticClass:"text-center w-full -mt-6 font-semibold text-white text-shadow"},[t._v("\n    "+t._s(t.pct)+"%\n  ")])])}),[],!1,null,null,null);e.default=component.exports},237:function(t,e,r){"use strict";r.r(e);var n={data:()=>({copyBtnText:"Copy"}),props:{password:{type:String},pct:{type:Number},cid:{type:String},caption:{type:String}},computed:{baseUrl:()=>window.location.origin,link(){return"/d/".concat(this.cid)},combinedLink(){return this.baseUrl+this.link+"?key=".concat(this.password)}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.combinedLink),this.copyBtnText="Copied!",setTimeout((()=>{this.copyBtnText="Copy"}),1e3)},saveLink(){var t=localStorage.getItem("unfile-uploads");(t=t&&JSON.parse(t)||[]).unshift({caption:this.caption||"",link:this.link+"?key=".concat(this.password)}),localStorage.setItem("unfile-uploads",JSON.stringify(t)),this.$router.push("/myfiles")}}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sm:max-w-lg w-full py-10 px-10 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[e("transition",{attrs:{"enter-active-class":"transition-all delay-500 duration-300 ease-out","leave-active-class":"transition-all duration-500 ease-in","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.cid?e("div",{key:"result"},[e("h4",{staticClass:"text-md font-bold text-gray-500 tracking-wide mb-3 dark:text-gray-300"},[t._v("\n        Your Link:\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center p-4 space-x-4 border-2 border-gray-300 rounded-lg dark:border-gray-600"},[e("div",{staticClass:"w-full text-base border-r-2 pr-3 select-all break-all dark:border-gray-400 dark:text-white"},[t._v("\n          "+t._s(t.baseUrl)+t._s(t.link)),e("span",{staticClass:"text-red-500 dark:text-red-400"},[t._v("?key="+t._s(t.password))])]),t._v(" "),e("div",{staticClass:"flex-shrink-0"},[e("button",{staticClass:"p-2 bg-blue-500 text-gray-100 rounded-md focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300",on:{click:t.copyToClipboard}},[t._v("\n            "+t._s(t.copyBtnText)+"\n          ")])])]),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("button",{staticClass:"mt-10 flex justify-center py-2 px-4 tracking-wide font-semibold rounded-xl bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300",on:{click:t.saveLink}},[t._v("\n          Save Link in Browser Storage\n        ")])])]):e("div",{key:"progress"},[e("div",{staticClass:"text-center mb-5"},[e("h4",{staticClass:"text-sm font-bold text-gray-400 tracking-wide dark:text-gray-200"},[t._v("\n          "+t._s(t.pct>0?"Upload in progress..":"Preparing Web3.Storage please wait..")+"\n        ")])]),t._v(" "),e("ProgressBar",{staticClass:"my-10 max-w-sm mx-auto",attrs:{pct:t.pct}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProgressBar:r(230).default})}}]);