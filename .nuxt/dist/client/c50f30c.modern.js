(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6,7,11,12],{123:function(t,e,n){var content=n(128);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("557b3900",content,!0,{sourceMap:!1})},124:function(t,e,n){"use strict";n.r(e);var r={props:{message:{type:String},title:{type:String,default:""}},methods:{okClicked(){this.$emit("ok")},close(){this.$emit("close")}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-50\n    dark:bg-gray-500 dark:bg-opacity-70\n  "},[n("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3 dark:bg-gray-800"},[t.title?n("div",{staticClass:"px-4 py-2 flex justify-between items-center"},[n("h3",{staticClass:"font-semibold text-lg dark:text-white"},[t._v(t._s(t.title))]),t._v(" "),n("button",{staticClass:"text-black close-modal dark:text-white",on:{click:t.close}},[t._v("✗")])]):t._e(),t._v(" "),n("div",{staticClass:"px-10 py-5 break-words dark:text-white"},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),n("div",{staticClass:"flex justify-end items-center w-100 px-10 pb-5"},[n("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white darl:bg-blue-500",on:{click:t.okClicked}},[t._v("\n        Ok\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},125:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return f}));var r=Number("33283899392"),o=Number("2147483647");function l(t,path){return"https://".concat(t,".ipfs.dweb.link/").concat(encodeURIComponent(path))}function c(t,e){return new File([JSON.stringify(e)],t,{type:"application/json"})}function d(t){var e,n=t;return t>1e9?(e="GB",n/=1e9):t>1e6?(e="MB",n/=1e6):t>1e3?(e="KB",n/=1e3):e="Bytes","".concat(n.toFixed(2).toLocaleString()," ").concat(e)}function f(t,e){var link=document.createElement("a");link.href=URL.createObjectURL(t),link.download=e||t.name,link.click()}},126:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return y}));var r=n(2),o={_pattern:/[a-zA-Z0-9\_\-]/,_getRandomByte:function(){if(window.crypto&&window.crypto.getRandomValues){var t=new Uint8Array(1);return window.crypto.getRandomValues(t),t[0]}if(window.msCrypto&&window.msCrypto.getRandomValues){t=new Uint8Array(1);return window.msCrypto.getRandomValues(t),t[0]}return Math.floor(256*Math.random())},generate:function(t){return Array.apply(null,{length:t}).map((function(){for(var t;;)if(t=String.fromCharCode(this._getRandomByte()),this._pattern.test(t))return t}),this).join("")}},l=t=>window.crypto.subtle.importKey("raw",new TextEncoder("utf-8").encode(t),"PBKDF2",!1,["deriveKey"]),c=(t,e,n)=>window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:25e4,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,n);function d(t,e,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)((function*(t,e,n){var r=window.crypto.getRandomValues(new Uint8Array(16)),d=window.crypto.getRandomValues(new Uint8Array(12)),f=yield l(e),y=yield c(f,r,["encrypt"]),data=yield t.arrayBuffer(),v=yield window.crypto.subtle.encrypt({name:"AES-GCM",iv:d},y,data),h=new Uint8Array(v),m=new Uint8Array(r.byteLength+d.byteLength+h.byteLength);m.set(r,0),m.set(d,r.byteLength),m.set(h,r.byteLength+d.byteLength);var x=n?t.name:o.generate(10);return{file:new File([m],x+".enc",{type:t.type}),originalName:t.fullPath||t.name}}))).apply(this,arguments)}function y(t,e){return v.apply(this,arguments)}function v(){return(v=Object(r.a)((function*(t,e){var n=yield t.arrayBuffer(),r=n.slice(0,16),o=n.slice(16,28),data=n.slice(28),d=yield l(e),f=yield c(d,r,["decrypt"]),y=yield window.crypto.subtle.decrypt({name:"AES-GCM",iv:o},f,data);return new Blob([y])}))).apply(this,arguments)}},127:function(t,e,n){"use strict";n(123)},128:function(t,e,n){var r=n(23)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.text-shadow{\n  text-shadow:0 0 3px #000\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},129:function(t,e,n){"use strict";n.r(e);var r={props:{pct:{type:Number,default:0}}},o=(n(127),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    bg-gray-100\n    rounded-full\n    overflow-hidden\n    shadow-inner\n    h-6\n    dark:bg-gray-600\n  "},[n("div",{staticClass:"bg-blue-400 text-xs leading-none py-3 text-center",style:"width: "+t.pct+"%"}),t._v(" "),n("div",{staticClass:"text-center w-full -mt-6 font-semibold text-white text-shadow"},[t._v("\n    "+t._s(t.pct)+"%\n  ")])])}),[],!1,null,null,null);e.default=component.exports},131:function(t,e,n){"use strict";n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return w})),n.d(e,"c",(function(){return C}));var r=n(2),o=(n(11),n(16),n(135)),l=n(125),c=n(126);function d(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)((function*(t){var e="https://dweb.link/api/v0/ls?arg=".concat(encodeURIComponent(t)),n=yield fetch(e),data=yield n.json(),r=[];return data.Objects[0].Links.forEach((t=>{var e=Object.fromEntries(Object.entries(t).map((t=>{var[e,n]=t;return[e.toLowerCase(),n]})));r.push(e)})),r}))).apply(this,arguments)}function y(){return new o.a({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc2OTc1RmUzRjI3MWMzMjEzMDY4Y2Q3RDAzNGRmODc4MjMwMDU5MDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODA5ODc3MDc0NTksIm5hbWUiOiJEYXRhVmF1bHQifQ.tadB3BSTNjthRrp7BQ4E6YeSBGA3BYpptq_DdCb0EP0"})}function v(t,e,n,r,o,l,c){return h.apply(this,arguments)}function h(){return(h=Object(r.a)((function*(t,e,caption,n,r,o,d){var f;f="".concat("UnFile"," | ").concat(c.a.generate(20));var v={files:{},text:d,caption:caption,addresses:n},h=[];for(var m of Object.keys(t))v.files[t[m].file.name]=t[m].originalName,h.push(t[m].file);var x=Object(l.d)("metadata.json",v),w=new File([String(r)],"VERSION",{type:"text/plain"});h.push(w);var _=yield Object(c.c)(x,e,!0);h.push(_.file);var C=y();console.log("> 🤖 calculating content ID for files");var k=h.map((t=>t.size)).reduce(((a,b)=>a+b),0),j=0;return yield C.put(h,{name:f,onRootCidReady:t=>{console.log("> 🔑 locally calculated Content ID: ".concat(t," ")),console.log("> 📡 sending files to web3.storage ")},onStoredChunk:t=>{console.log("> 🛰 sent ".concat(t.toLocaleString()," bytes to web3.storage"));var e=100*(j+=t)/k;console.log("Uploading... ".concat(e.toFixed(2),"% complete")),o(Number(e.toFixed(1)))}})}))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=Object(r.a)((function*(t){var e=Object(l.e)(t,"metadata.json.enc"),n=yield fetch(e);if(!n.ok)throw new Error("error fetching image metadata: [".concat(n.status,"] ").concat(n.statusText));return yield n.blob()}))).apply(this,arguments)}function w(t){return _.apply(this,arguments)}function _(){return(_=Object(r.a)((function*(t){var e=y(),n=yield e.status(t);return console.log(n),n}))).apply(this,arguments)}function C(t,e,n,r){return k.apply(this,arguments)}function k(){return(k=Object(r.a)((function*(t,e,n,r){var o=Object(l.e)(t,e),c=yield fetch(o);if(!c.ok)throw"Could not fetch file, try again.";var d=c.body.getReader(),f=c.headers.get("Content-Length");console.log(f);for(var y=0,v=[];;){var{done:h,value:m}=yield d.read();if(h)break;if(v.push(m),y+=m.length,n)n(r,y/f*100)}var x=new Uint8Array(y),w=0;for(var _ of v)x.set(_,w),w+=_.length;return new Blob([x])}))).apply(this,arguments)}},132:function(t,e,n){var content=n(138);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2fd4df42",content,!0,{sourceMap:!1})},136:function(t,e,n){t.exports=n.p+"img/XMR.45ccc83.svg"},137:function(t,e,n){"use strict";n(132)},138:function(t,e,n){var r=n(23)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.xmrbtn{\n  color:#f60;\n  border-color:#f60\n}\n.xmrbtn:hover{\n  background-color:#f60\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},142:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"bg-white w-8 h-8 rounded-full border-2 border-white"},[e("img",{attrs:{src:n(136)}})])}],o={props:{address:{type:String},text:{type:String,default:"Monero"}},data:()=>({showModal:!1})},l=(n(137),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"m-3 border-2 px-3 py-2 rounded-lg font-semibold text-lg focus:outline-none focus:shadow-outline hover:text-white shadow-lg cursor-pointer transition ease-in duration-300 flex justify-center items-center xmrbtn",on:{click:function(e){t.showModal=!0}}},[t._v("\n    "+t._s(t.text)+" \n    "),t._m(0)]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all duration-500 ease","leave-active-class":"transition-all duration-500 ease","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.showModal?n("PaymentModal",{key:"xmr",attrs:{address:t.address,currency:"XMR"},on:{close:function(e){t.showModal=!1}}}):t._e()],1)],1)}),r,!1,null,null,null);e.default=component.exports},143:function(t,e,n){"use strict";n.r(e);var r={},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"lock",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}})])}),[],!1,null,null,null);e.default=component.exports},146:function(t,e,n){"use strict";var r=n(40),o=n(25),l=n(6),c=n(77),d=n(147);r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||l.Promise),n="function"==typeof t;return this.then(n?function(n){return d(e,t()).then((function(){return n}))}:t,n?function(n){return d(e,t()).then((function(){throw n}))}:t)}})},147:function(t,e,n){var r=n(5),o=n(12),l=n(148);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=l.f(t);return(0,n.resolve)(e),n.promise}},148:function(t,e,n){"use strict";var r=n(56);function o(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},151:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(146),n(125)),l=n(131),c=n(126),d={head:()=>({title:"DataVault - Download & Decrypt"}),data(){return{status:null,metadata:null,files:[],dKey:this.$route.query.key,showQR:!1,error:"",errorModal:"",loadingDetails:!1,saveText:"Save Link in My Files",textOutput:""}},mounted(){var t=this;return Object(r.a)((function*(){try{t.status=yield Object(l.a)(t.$route.params.cid),yield t.getFilesList()}catch(e){console.error(e),t.error='Unable to get status for CID: <br><span class="break-all text-red-600">'.concat(t.$route.params.cid,"</span><br> please make sure your url is correct.")}t.dKey&&t.getDetails()}))()},methods:{getDetails(){var t=this;return Object(r.a)((function*(){var e;t.loadingDetails=!0;try{e=yield Object(l.b)(t.$route.params.cid)}catch(e){t.error="Could not find metadata file."}try{yield t.decryptMetadata(e)}catch(e){t.errorModal="Unable to decrypt metadata, please check if your key is correct."}t.loadingDetails=!1}))()},decryptMetadata(t){var e=this;return Object(r.a)((function*(){var n=yield Object(c.b)(t,e.dKey);console.log(n);var text=yield n.text();if(console.log(text),e.metadata=JSON.parse(text),e.metadata.text)try{yield e.decryptText()}catch(t){e.errorModal="Unable to decrypt text, please check if your key is correct."}}))()},decryptText(){var t=this;return Object(r.a)((function*(){Object(l.c)(t.$route.params.cid,t.files[0].name,t.updateProgress,0).then((e=>{t.$set(t.files[0],"decrypting",!0),console.log(e),Object(c.b)(e,t.dKey).then((e=>{t.$set(t.files[0],"decrypted",e),e.text().then((text=>{t.textOutput=text}))})).finally((()=>{t.$set(t.files[0],"decrypting",!1)}))})).catch((e=>{t.errorModal=e}))}))()},getFilesList(){var t=this;return Object(r.a)((function*(){var e=yield Object(l.d)(t.$route.params.cid);t.files=e.filter((t=>!("metadata.json.enc"==t.name||"VERSION"==t.name)))}))()},resave(t,e){Object(o.f)(t,e)},downloadFile(t){this.$set(this.files[t],"progress",0),Object(l.c)(this.$route.params.cid,this.files[t].name,this.updateProgress,t).then((e=>{this.$set(this.files[t],"decrypting",!0),console.log(e),Object(c.b)(e,this.dKey).then((e=>{this.$set(this.files[t],"decrypted",e),Object(o.f)(e,this.metadata.files[this.files[t].name])})).finally((()=>{this.$set(this.files[t],"decrypting",!1)}))})).catch((t=>{this.errorModal=t}))},updateProgress(t,progress){this.$set(this.files[t],"progress",Number(progress.toFixed(2)))},saveLink(){var t=localStorage.getItem("unfile-uploads");(t=t&&JSON.parse(t)||[]).unshift({caption:this.metadata.caption||"",link:window.location.pathname+"?key=".concat(this.dKey)}),localStorage.setItem("unfile-uploads",JSON.stringify(t)),this.saveText="Link Saved!"}},filters:{dateTime:t=>new Date(t).toLocaleString(),formatSize:t=>Object(o.c)(t)}},f=n(4),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    md:py-12\n    px-4\n    sm:px-6\n    lg:px-8\n    relative\n    flex\n    items-center\n    justify-center\n    flex-1\n  "},[n("div",{staticClass:"max-w-screen-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[t.error?n("div",{staticClass:"text-center text-xl break-words dark:text-white",domProps:{innerHTML:t._s(t.error)}}):n("div",{staticClass:"flex flex-grow flex-wrap justify-around items-center"},[n("transition",{attrs:{"enter-active-class":"transition-all delay-1000 duration-1000 ease","leave-active-class":"transition-all duration-1000 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.status&&t.metadata?n("div",{staticClass:"w-full"},[n("div",{staticClass:"\n              sm:px-4\n              md:px-16\n              lg:px-24\n              w-full\n              mb-4\n              flex flex-wrap\n              items-center\n              justify-between\n            "},[n("p",{staticClass:"\n                text-green-500\n                font-semibold\n                text-xl\n                flex\n                items-center\n                justify-center\n                dark:text-green-300\n              "},[t._v("\n              Key accepted \n              "),n("CheckIcon",{staticClass:"w-5 h-5"})],1),t._v(" "),n("button",{staticClass:"\n                flex\n                justify-center\n                cursor-pointer\n                py-1\n                px-2\n                rounded-lg\n                bg-blue-500\n                text-gray-100\n                focus:outline-none\n                focus:shadow-outline\n                hover:bg-blue-600\n                shadow-lg\n                cursor-pointer\n                transition\n                ease-in\n                duration-300\n                text-sm\n              ",attrs:{disabled:"Link Saved!"==t.saveText},on:{click:t.saveLink}},[t._v("\n              "+t._s(t.saveText)+"\n            ")])]),t._v(" "),n("hr",{staticClass:"w-full dark:border-gray-600"})]):t.status?n("form",{staticClass:"sm:px-4 md:px-16 lg:px-24 w-full space-y-2 mb-4",on:{submit:function(e){return e.preventDefault(),t.getDetails.apply(null,arguments)}}},[n("label",{staticClass:"text-sm font-bold text-gray-500 tracking-wide dark:text-gray-200"},[t._v("Enter Decryption Key")]),t._v(" "),n("div",{staticClass:"flex items-center space-x-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dKey,expression:"dKey"}],staticClass:"\n                text-base\n                p-2\n                border border-gray-300\n                rounded-lg\n                focus:outline-none\n                focus:border-indigo-500\n                outline-none\n                w-full\n                dark:border-gray-500\n                dark:bg-gray-800\n                dark:text-white\n              ",attrs:{type:"text",required:"",disabled:t.files.length<1},domProps:{value:t.dKey},on:{input:function(e){e.target.composing||(t.dKey=e.target.value)}}}),t._v(" "),n("div",{staticClass:"flex-shrink-0"},[t.loadingDetails?n("Spinner",{staticClass:"h-1 w-1"}):n("button",{staticClass:"\n                  w-full\n                  flex\n                  justify-center\n                  tracking-wide\n                  font-semibold\n                  cursor-pointer\n                  py-2\n                  px-4\n                  rounded-lg\n                ",class:t.files.length<1?"bg-gray-100 text-gray-400 cursor-not-allowed\tshadow dark:bg-gray-600":"bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300",attrs:{type:"submit",disabled:t.files.length<1}},[t._v("\n                🔑Verify\n              ")])],1)])]):t._e()]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-1000 duration-1000 ease","leave-active-class":"transition-all duration-1000 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.status?n("div",{staticClass:"flex flex-col items-center self-start dark:text-white"},[n("table",{staticClass:"table-auto mt-5"},[n("tbody",[n("tr",{directives:[{name:"show",rawName:"v-show",value:t.files.length>0,expression:"files.length > 0"}]},[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Files")]),t._v(" "),n("td",{staticClass:"text-left px-5 py-1"},[t._v("\n                  "+t._s(t.files.length.toLocaleString())+"\n                ")])]),t._v(" "),n("tr",[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Total Size")]),t._v(" "),t.status.dagSize?n("td",{staticClass:"text-left px-5 py-1"},[t._v("\n                  "+t._s(t._f("formatSize")(t.status.dagSize))+"\n                ")]):n("td",{staticClass:"text-left px-5 py-1"},[t._v("N/A")])]),t._v(" "),n("tr",[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Pins")]),t._v(" "),n("td",{staticClass:"text-left px-5 py-1"},[n("div",{staticClass:"\n                      rounded-full\n                      h-6\n                      w-6\n                      text-white\n                      font-bold\n                      text-center\n                      min-w-min\n                      px-1\n                    ",class:t.status.pins.length<1?"bg-red-500":"bg-green-400"},[t._v("\n                    "+t._s(t.status.pins.length)+"\n                  ")])])]),t._v(" "),n("tr",[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Deals")]),t._v(" "),n("td",{staticClass:"text-left px-5 py-1"},[n("div",{staticClass:"\n                      rounded-full\n                      h-6\n                      w-6\n                      text-white\n                      font-bold\n                      text-center\n                      min-w-min\n                      px-1\n                    ",class:t.status.deals.length<1?"bg-red-500":"bg-green-400"},[t._v("\n                    "+t._s(t.status.deals.length)+"\n                  ")])])]),t._v(" "),n("tr",[n("td",{staticClass:"text-right px-5 py-1"},[t._v("Created at")]),t._v(" "),n("td",{staticClass:"text-left px-5 py-1"},[t._v("\n                  "+t._s(t._f("dateTime")(t.status.created))+"\n                ")])])])]),t._v(" "),t.metadata&&t.metadata.addresses.length>0?n("div",{staticClass:"flex flex-col justify-center items-center my-5"},t._l(t.metadata.addresses,(function(address){return n("div",{key:address.currency,staticClass:"flex justify-center items-center w-full"},["BTC"==address.currency?n("BitcoinButton",{attrs:{address:address.address,text:"Tip Uploader Bitcoin"}}):"Lightning"==address.currency?n("LNUrlButton",{attrs:{address:address.address,text:"Tip Uploader via Lightning"}}):"XMR"==address.currency?n("MoneroButton",{attrs:{address:address.address,text:"Tip Uploader Monero"}}):t._e()],1)})),0):t._e()]):t._e()]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-1000 duration-1000 ease","leave-active-class":"transition-all duration-1000 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.status?t._e():n("div",{staticClass:"flex flex-col justify-center items-center"},[n("h1",{staticClass:"text-center mb-3 text-lg text-gray-600 font-semibold dark:text-gray-200"},[t._v("\n            Finding your files..\n          ")]),t._v(" "),n("Spinner")],1)]),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-1000 duration-1000 ease","leave-active-class":"transition-all duration-1000 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.files.length>0?n("div",{staticClass:"self-start mt-5 max-w-full",class:{"flex-1":t.metadata}},[t.metadata?n("h1",{staticClass:"text-lg font-bold text-center text-gray-600 mb-3 dark:text-gray-200"},[t._v("\n            "+t._s(t.metadata.caption)+"\n          ")]):t._e(),t._v(" "),t.metadata&&t.metadata.text?n("div",{staticClass:"flex flex-col dark:text-white text-base w-full p-2\n                border border-gray-300 dark:border-gray-500"},[t.textOutput?n("pre",{staticClass:"overflow-hidden break-words whitespace-pre-wrap"},[t._v(t._s(t.textOutput))]):n("Spinner")],1):t._l(t.files,(function(e,i){return n("div",{key:i,staticClass:"flex flex-col"},[n("div",{staticClass:"flex items-center flex-wrap"},[n("div",{staticClass:"flex flex-col flex-1 mx-3"},[n("h1",{staticClass:"w-full break-all font-semibold text-sm dark:text-white"},[t._v("\n                  "+t._s(t.metadata&&t.metadata.files?t.metadata.files[e.name]:e.name)+"\n                ")]),t._v(" "),n("p",{staticClass:"text-sm whitespace-nowrap text-gray-500 dark:text-gray-300"},[t._v("\n                  "+t._s(t._f("formatSize")(e.size))+"\n                ")])]),t._v(" "),n("div",[t.metadata?t.metadata&&null==e.progress?n("button",{staticClass:"\n                    w-full\n                    bg-blue-500\n                    text-gray-100\n                    tracking-wide\n                    font-semibold\n                    focus:outline-none\n                    focus:shadow-outline\n                    hover:bg-blue-600\n                    shadow-lg\n                    cursor-pointer\n                    transition\n                    ease-in\n                    duration-300\n                    py-1\n                    px-2\n                    rounded-md\n                    text-xs\n                  ",on:{click:function(e){return t.downloadFile(i)}}},[t._v("\n                  Download\n                ")]):t._e():n("SolidLockIcon",{staticClass:"h-6 w-6 text-gray-400 min-w-min dark:text-gray-200"})],1)]),t._v(" "),n("div",{staticClass:"flex items-center"},[n("ProgressBar",{directives:[{name:"show",rawName:"v-show",value:null!=e.progress,expression:"f.progress != null"}],staticClass:"mx-3",attrs:{pct:e.progress}}),100==e.progress&&Boolean(e.decrypted)?n("button",{staticClass:"\n                  text-blue-500\n                  tracking-wide\n                  font-semibold\n                  border-2 border-blue-500\n                  hover:bg-blue-500\n                  hover:text-white\n                  cursor-pointer\n                  py-1\n                  px-2\n                  rounded-md\n                  text-xs\n                  whitespace-nowrap\n                ",on:{click:function(n){return t.resave(e.decrypted,t.metadata.files[e.name])}}},[t._v("\n                Re-Save\n              ")]):t.metadata&&Boolean(e.decrypting)?n("Spinner",{staticClass:"h-1 w-1"}):t._e()],1)])}))],2):t.status&&t.files.length<1?n("Spinner",{staticClass:"flex-1"}):t._e()],1)],1),t._v(" "),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.errorModal,expression:"errorModal"}],attrs:{message:t.errorModal},on:{ok:function(e){t.errorModal=""}}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:n(76).default,MoneroButton:n(142).default,SolidLockIcon:n(143).default,ProgressBar:n(129).default,Modal:n(124).default})}}]);