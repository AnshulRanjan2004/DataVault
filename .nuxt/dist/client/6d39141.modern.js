(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5,6,9,10,11],{123:function(t,e,n){var content=n(128);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("557b3900",content,!0,{sourceMap:!1})},124:function(t,e,n){"use strict";n.r(e);var r={props:{message:{type:String},title:{type:String,default:""}},methods:{okClicked(){this.$emit("ok")},close(){this.$emit("close")}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    modal\n    h-screen\n    w-full\n    fixed\n    left-0\n    top-0\n    flex\n    justify-center\n    items-center\n    bg-black bg-opacity-50\n    z-50\n    dark:bg-gray-500 dark:bg-opacity-70\n  "},[n("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3 dark:bg-gray-800"},[t.title?n("div",{staticClass:"px-4 py-2 flex justify-between items-center"},[n("h3",{staticClass:"font-semibold text-lg dark:text-white"},[t._v(t._s(t.title))]),t._v(" "),n("button",{staticClass:"text-black close-modal dark:text-white",on:{click:t.close}},[t._v("✗")])]):t._e(),t._v(" "),n("div",{staticClass:"px-10 py-5 break-words dark:text-white"},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),n("div",{staticClass:"flex justify-end items-center w-100 px-10 pb-5"},[n("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white darl:bg-blue-500",on:{click:t.okClicked}},[t._v("\n        Ok\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},125:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return f}));var r=Number("33283899392"),o=Number("2147483647");function l(t,path){return"https://".concat(t,".ipfs.dweb.link/").concat(encodeURIComponent(path))}function c(t,e){return new File([JSON.stringify(e)],t,{type:"application/json"})}function d(t){var e,n=t;return t>1e9?(e="GB",n/=1e9):t>1e6?(e="MB",n/=1e6):t>1e3?(e="KB",n/=1e3):e="Bytes","".concat(n.toFixed(2).toLocaleString()," ").concat(e)}function f(t,e){var link=document.createElement("a");link.href=URL.createObjectURL(t),link.download=e||t.name,link.click()}},126:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return y}));var r=n(2),o={_pattern:/[a-zA-Z0-9\_\-]/,_getRandomByte:function(){if(window.crypto&&window.crypto.getRandomValues){var t=new Uint8Array(1);return window.crypto.getRandomValues(t),t[0]}if(window.msCrypto&&window.msCrypto.getRandomValues){t=new Uint8Array(1);return window.msCrypto.getRandomValues(t),t[0]}return Math.floor(256*Math.random())},generate:function(t){return Array.apply(null,{length:t}).map((function(){for(var t;;)if(t=String.fromCharCode(this._getRandomByte()),this._pattern.test(t))return t}),this).join("")}},l=t=>window.crypto.subtle.importKey("raw",new TextEncoder("utf-8").encode(t),"PBKDF2",!1,["deriveKey"]),c=(t,e,n)=>window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:25e4,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,n);function d(t,e,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)((function*(t,e,n){var r=window.crypto.getRandomValues(new Uint8Array(16)),d=window.crypto.getRandomValues(new Uint8Array(12)),f=yield l(e),y=yield c(f,r,["encrypt"]),data=yield t.arrayBuffer(),h=yield window.crypto.subtle.encrypt({name:"AES-GCM",iv:d},y,data),v=new Uint8Array(h),m=new Uint8Array(r.byteLength+d.byteLength+v.byteLength);m.set(r,0),m.set(d,r.byteLength),m.set(v,r.byteLength+d.byteLength);var x=n?t.name:o.generate(10);return{file:new File([m],x+".enc",{type:t.type}),originalName:t.fullPath||t.name}}))).apply(this,arguments)}function y(t,e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)((function*(t,e){var n=yield t.arrayBuffer(),r=n.slice(0,16),o=n.slice(16,28),data=n.slice(28),d=yield l(e),f=yield c(d,r,["decrypt"]),y=yield window.crypto.subtle.decrypt({name:"AES-GCM",iv:o},f,data);return new Blob([y])}))).apply(this,arguments)}},127:function(t,e,n){"use strict";n(123)},128:function(t,e,n){var r=n(23)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.text-shadow{\n  text-shadow:0 0 3px #000\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},129:function(t,e,n){"use strict";n.r(e);var r={props:{pct:{type:Number,default:0}}},o=(n(127),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    bg-gray-100\n    rounded-full\n    overflow-hidden\n    shadow-inner\n    h-6\n    dark:bg-gray-600\n  "},[n("div",{staticClass:"bg-blue-400 text-xs leading-none py-3 text-center",style:"width: "+t.pct+"%"}),t._v(" "),n("div",{staticClass:"text-center w-full -mt-6 font-semibold text-white text-shadow"},[t._v("\n    "+t._s(t.pct)+"%\n  ")])])}),[],!1,null,null,null);e.default=component.exports},130:function(t,e,n){"use strict";n.r(e);var r={},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12 2C17.523 2 22 6.477 22 12C22 12.427 21.973 12.847 21.922 13.26C21.73 12.3756 21.2032 11.5997 20.452 11.095C20.2166 8.93431 19.1626 6.94583 17.5066 5.53821C15.8505 4.13059 13.7182 3.41074 11.5478 3.52661C9.37742 3.64248 7.33385 4.58526 5.83707 6.1612C4.34028 7.73714 3.50397 9.82653 3.5 12C3.49985 13.2007 3.7541 14.3879 4.246 15.4832C4.73789 16.5785 5.45628 17.5572 6.35382 18.3548C7.25137 19.1524 8.30771 19.7508 9.45327 20.1105C10.5988 20.4703 11.8076 20.5833 13 20.442V21.5C13 21.652 13.014 21.802 13.04 21.947C12.6945 21.9825 12.3473 22.0002 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM20.487 12.482C20.1696 12.0664 19.7299 11.7607 19.2298 11.6081C18.7296 11.4554 18.1942 11.4634 17.6988 11.631C17.2035 11.7986 16.7731 12.1173 16.4684 12.5423C16.1636 12.9672 15.9998 13.4771 16 14V15H15.5C15.1022 15 14.7206 15.158 14.4393 15.4393C14.158 15.7206 14 16.1022 14 16.5V21.5C14 21.8978 14.158 22.2794 14.4393 22.5607C14.7206 22.842 15.1022 23 15.5 23H21.5C21.8978 23 22.2794 22.842 22.5607 22.5607C22.842 22.2794 23 21.8978 23 21.5V16.5C23 16.1022 22.842 15.7206 22.5607 15.4393C22.2794 15.158 21.8978 15 21.5 15H21V14C21.0009 13.4513 20.8206 12.9177 20.487 12.482V12.482ZM18.107 19.92C17.9862 19.8683 17.8767 19.7934 17.7849 19.6994C17.693 19.6054 17.6206 19.4943 17.5717 19.3723C17.5228 19.2503 17.4984 19.1199 17.4999 18.9885C17.5015 18.8571 17.5288 18.7273 17.5805 18.6065C17.6322 18.4857 17.7071 18.3762 17.8011 18.2844C17.8951 18.1925 18.0062 18.1201 18.1282 18.0712C18.2502 18.0223 18.3806 17.9979 18.512 17.9994C18.6434 18.001 18.7732 18.0283 18.894 18.08C19.138 18.1844 19.3305 18.3814 19.4293 18.6277C19.528 18.874 19.5249 19.1495 19.4205 19.3935C19.3161 19.6375 19.1191 19.83 18.8728 19.9288C18.6265 20.0275 18.351 20.0244 18.107 19.92ZM17.5 14C17.5 13.7348 17.6054 13.4804 17.7929 13.2929C17.9804 13.1054 18.2348 13 18.5 13C18.7652 13 19.0196 13.1054 19.2071 13.2929C19.3946 13.4804 19.5 13.7348 19.5 14V15H17.5V14ZM10.75 13.44L15.22 8.97C15.354 8.83704 15.5332 8.75951 15.7219 8.75286C15.9105 8.74622 16.0947 8.81096 16.2378 8.93416C16.3808 9.05736 16.4721 9.22996 16.4934 9.41752C16.5148 9.60508 16.4647 9.79379 16.353 9.946L16.28 10.03L11.28 15.03C11.153 15.157 10.9847 15.2342 10.8055 15.2476C10.6264 15.261 10.4485 15.2097 10.304 15.103L10.22 15.03L7.72 12.53C7.58704 12.396 7.5095 12.2168 7.50286 12.0281C7.49622 11.8395 7.56096 11.6553 7.68416 11.5122C7.80736 11.3692 7.97996 11.2779 8.16752 11.2566C8.35508 11.2352 8.54379 11.2853 8.696 11.397L8.78 11.47L10.75 13.44V13.44Z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},131:function(t,e,n){"use strict";n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return w})),n.d(e,"c",(function(){return k}));var r=n(2),o=(n(11),n(16),n(135)),l=n(125),c=n(126);function d(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)((function*(t){var e="https://dweb.link/api/v0/ls?arg=".concat(encodeURIComponent(t)),n=yield fetch(e),data=yield n.json(),r=[];return data.Objects[0].Links.forEach((t=>{var e=Object.fromEntries(Object.entries(t).map((t=>{var[e,n]=t;return[e.toLowerCase(),n]})));r.push(e)})),r}))).apply(this,arguments)}function y(){return new o.a({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc2OTc1RmUzRjI3MWMzMjEzMDY4Y2Q3RDAzNGRmODc4MjMwMDU5MDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODA5ODc3MDc0NTksIm5hbWUiOiJEYXRhVmF1bHQifQ.tadB3BSTNjthRrp7BQ4E6YeSBGA3BYpptq_DdCb0EP0"})}function h(t,e,n,r,o,l,c){return v.apply(this,arguments)}function v(){return(v=Object(r.a)((function*(t,e,caption,n,r,o,d){var f;f="".concat("UnFile"," | ").concat(c.a.generate(20));var h={files:{},text:d,caption:caption,addresses:n},v=[];for(var m of Object.keys(t))h.files[t[m].file.name]=t[m].originalName,v.push(t[m].file);var x=Object(l.d)("metadata.json",h),w=new File([String(r)],"VERSION",{type:"text/plain"});v.push(w);var C=yield Object(c.c)(x,e,!0);v.push(C.file);var k=y();console.log("> 🤖 calculating content ID for files");var _=v.map((t=>t.size)).reduce(((a,b)=>a+b),0),j=0;return yield k.put(v,{name:f,onRootCidReady:t=>{console.log("> 🔑 locally calculated Content ID: ".concat(t," ")),console.log("> 📡 sending files to web3.storage ")},onStoredChunk:t=>{console.log("> 🛰 sent ".concat(t.toLocaleString()," bytes to web3.storage"));var e=100*(j+=t)/_;console.log("Uploading... ".concat(e.toFixed(2),"% complete")),o(Number(e.toFixed(1)))}})}))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=Object(r.a)((function*(t){var e=Object(l.e)(t,"metadata.json.enc"),n=yield fetch(e);if(!n.ok)throw new Error("error fetching image metadata: [".concat(n.status,"] ").concat(n.statusText));return yield n.blob()}))).apply(this,arguments)}function w(t){return C.apply(this,arguments)}function C(){return(C=Object(r.a)((function*(t){var e=y(),n=yield e.status(t);return console.log(n),n}))).apply(this,arguments)}function k(t,e,n,r){return _.apply(this,arguments)}function _(){return(_=Object(r.a)((function*(t,e,n,r){var o=Object(l.e)(t,e),c=yield fetch(o);if(!c.ok)throw"Could not fetch file, try again.";var d=c.body.getReader(),f=c.headers.get("Content-Length");console.log(f);for(var y=0,h=[];;){var{done:v,value:m}=yield d.read();if(v)break;if(h.push(m),y+=m.length,n)n(r,y/f*100)}var x=new Uint8Array(y),w=0;for(var C of h)x.set(C,w),w+=C.length;return new Blob([x])}))).apply(this,arguments)}},133:function(t,e,n){var content=n(141);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("788a4fc2",content,!0,{sourceMap:!1})},134:function(t,e,n){"use strict";n.r(e);var r={data:()=>({copyBtnText:"Copy"}),props:{password:{type:String},pct:{type:Number},cid:{type:String},caption:{type:String}},computed:{baseUrl:()=>window.location.origin,link(){return"/d/".concat(this.cid)},combinedLink(){return this.baseUrl+this.link+"?key=".concat(this.password)}},methods:{copyToClipboard(){navigator.clipboard.writeText(this.combinedLink),this.copyBtnText="Copied!",setTimeout((()=>{this.copyBtnText="Copy"}),1e3)},saveLink(){var t=localStorage.getItem("unfile-uploads");(t=t&&JSON.parse(t)||[]).unshift({caption:this.caption||"",link:this.link+"?key=".concat(this.password)}),localStorage.setItem("unfile-uploads",JSON.stringify(t)),this.$router.push("/myfiles")}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:max-w-lg w-full py-10 px-10 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[n("transition",{attrs:{"enter-active-class":"transition-all delay-500 duration-300 ease-out","leave-active-class":"transition-all duration-500 ease-in","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.cid?n("div",{key:"result"},[n("h4",{staticClass:"text-md font-bold text-gray-500 tracking-wide mb-3 dark:text-gray-300"},[t._v("\n        Your Link:\n      ")]),t._v(" "),n("div",{staticClass:"\n          flex\n          items-center\n          p-4\n          space-x-4\n          border-2 border-gray-300\n          rounded-lg\n          dark:border-gray-600\n        "},[n("div",{staticClass:"w-full text-base border-r-2 pr-3 select-all break-all dark:border-gray-400 dark:text-white"},[t._v("\n          "+t._s(t.baseUrl)+t._s(t.link)),n("span",{staticClass:"text-red-500 dark:text-red-400"},[t._v("?key="+t._s(t.password))])]),t._v(" "),n("div",{staticClass:"flex-shrink-0"},[n("button",{staticClass:"\n              p-2\n              bg-blue-500\n              text-gray-100\n              rounded-md\n              focus:shadow-outline\n              hover:bg-blue-600\n              shadow-lg\n              cursor-pointer\n              transition\n              ease-in\n              duration-300\n            ",on:{click:t.copyToClipboard}},[t._v("\n            "+t._s(t.copyBtnText)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"flex justify-center"},[n("button",{staticClass:"\n            mt-10\n            flex\n            justify-center\n            py-2\n            px-4\n            tracking-wide\n            font-semibold\n            rounded-xl\n            bg-blue-500\n            text-gray-100\n            focus:outline-none focus:shadow-outline\n            hover:bg-blue-600\n            shadow-lg\n            cursor-pointer\n            transition\n            ease-in\n            duration-300\n          ",on:{click:t.saveLink}},[t._v("\n          Save Link in Browser Storage\n        ")])])]):n("div",{key:"progress"},[n("div",{staticClass:"text-center mb-5"},[n("h4",{staticClass:"text-sm font-bold text-gray-400 tracking-wide dark:text-gray-200"},[t._v("\n          "+t._s(t.pct>0?"Upload in progress..":"Preparing Web3.Storage please wait..")+"\n        ")])]),t._v(" "),n("ProgressBar",{staticClass:"my-10 max-w-sm mx-auto",attrs:{pct:t.pct}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProgressBar:n(129).default})},139:function(t,e,n){"use strict";var r=n(2),o=n(131);e.a={data:()=>({showProgress:!1,password:"",pct:0,cid:"",caption:""}),methods:{startUpload(data,t){var e=this;return Object(r.a)((function*(){e.showProgress=!0,e.caption=data.caption||"";var n=yield Object(o.e)(data.files,data.password,data.caption,data.addresses,e.$config.clientVersion,e.progressCallback,t);n&&(e.pct=100,e.cid=n)}))()},progressCallback(t){console.log(t),this.pct=t},updatePassword(t){this.password=t}}}},140:function(t,e,n){"use strict";n(133)},141:function(t,e,n){var r=n(23)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.textarea{\n  min-height:200px;\n  line-height:20px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},144:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(11),n(16),n(126)),l=n(125),c={components:{Modal:n(124).default},props:{password:{type:String}},filters:{formatSize:t=>Object(l.c)(t)},data:()=>({encrypting:!1,blurPassword:!0,caption:"",uploading:!1,showAddress:!1,address:"",encryptedFiles:{},totalSize:0,errorMsg:"",currency:null,textInput:""}),watch:{textInput(t){console.log(Math.max(parseFloat(this.$refs.textArea.scrollHeight),parseFloat(this.$refs.textArea.style.height))),this.$refs.textArea.style.height="auto",this.$refs.textArea.style.height="200px",this.$refs.textArea.style.height=Math.max(parseFloat(this.$refs.textArea.scrollHeight),parseFloat(this.$refs.textArea.style.height))+"px"}},methods:{setAddress(address,t){this.address=address,this.currency=t},highlight(t){this.$refs.dropArea.classList.remove("dark:border-gray-500"),this.$refs.dropArea.classList.add("border-red-500"),this.$refs.dropArea.classList.add("dark:border-red-400")},unhighlight(t){this.$refs.dropArea.classList.remove("border-red-500"),this.$refs.dropArea.classList.remove("dark:border-red-400"),this.$refs.dropArea.classList.add("dark:border-gray-500")},reset(){this.encryptedFiles={},this.totalSize=0,this.encrypting=!1},checkFiles(t){var e=0,n=[];for(var r of(n.push(new Uint8Array(1048576)),t)){try{var o=new Uint8Array(r.size);n.push(o)}catch(t){return this.errorMsg="Files are larger than what your browser memory allows to encrypt, please try another browser or free some memory.",this.reset(),!1}if(r.size>l.a)return this.errorMsg="The file ".concat(r.fullPath||r.name," is larger than the allowed single file size, please split it into parts."),this.reset(),!1;if((e+=r.size)>l.b)return this.errorMsg="Total files size is larger than allowed, please remove some files and consider splitting the uploads to multiple parts.",this.reset(),!1}return!0},encryptAndEmit(t,e,n){var l=this;return Object(r.a)((function*(){var r=yield Object(o.c)(t,e);l.encryptedFiles[n]=r,l.totalSize+=r.file.size}))()},startEncrypting(){var t=this;return Object(r.a)((function*(){if(t.textInput.length<1)return console.log("nothing to encrypt"),void(t.encrypting=!1);var e=new Blob([t.textInput],{type:"text/plain"}),n=o.a.generate(16);t.$emit("passwordCreated",n),t.encrypting=!0,t.encryptedFiles={};try{yield t.encryptAndEmit(e,n,0)}catch(e){t.errorMsg="Unable to encrypt data.",console.error(e),t.reset()}console.log(t.encryptedFiles),t.encrypting=!1}))()},uploadClicked(){var t=this;return Object(r.a)((function*(){if(!t.address||t.currency){if(yield t.startEncrypting(),0!=Object.keys(t.encryptedFiles).length){t.uploading=!0;var e=[];t.address&&t.currency&&e.push({address:t.address,currency:t.currency}),t.$emit("upload",{files:t.encryptedFiles,password:t.password,caption:t.caption,addresses:e},!0)}}else t.errorMsg="Your tipping address is not recognized a valid format, please add a correct BTC or XMR address."}))()}}},d=(n(140),n(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    md:max-w-4xl\n    w-full\n    px-10\n    pb-10\n    pt-3\n    bg-white\n    rounded-xl\n    z-10\n    shadow-xl\n    dark:bg-gray-800\n  "},[n("div",{staticClass:"grid grid-cols-2 divide-x dark:divide-gray-300 text-gray-500 dark:text-gray-300 font-bold p-5 mb-3"},[n("div",{staticClass:"text-center"},[n("n-link",{staticClass:"\n          rounded-full\n          font-bold\n          px-4\n          py-2\n          transition\n          duration-300\n          ease-in-out\n          betterhover:hover:bg-blue-500\n          betterhover:hover:text-white\n          text-center\n         text-blue-500 dark:text-blue-300",attrs:{to:"/"}},[t._v("← Upload Files")])],1),t._v(" "),n("div",{staticClass:"text-center"},[t._v("Paste Text")])]),t._v(" "),t.encrypting?t._e():n("div",{staticClass:"text-center"},[n("h1",{staticClass:"mb-5 text-sm text-gray-400 dark:text-gray-200"},[t._v("\n      Your text will be encrypted locally on your device then sent to a\n      decentralized storage.\n    ")])]),t._v(" "),n("form",{staticClass:"space-y-3"},[n("div",{staticClass:"grid grid-cols-1 space-y-2"},[n("div",{staticClass:"flex items-center justify-center w-full"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],ref:"textArea",staticClass:"w-full text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          outline-none\n          dark:bg-gray-800 dark:text-white dark:border-gray-500 overflow-hidden break-words resize-none textarea",staticStyle:{height:"200px"},attrs:{placeholder:"Type or Paste what you want here.."},domProps:{value:t.textInput},on:{input:function(e){e.target.composing||(t.textInput=e.target.value)}}}),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-300 duration-300 ease","leave-active-class":"transition-all duration-300 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.encrypting,expression:"encrypting"}],staticClass:"\n              flex flex-col\n              rounded-lg\n              w-full\n              h-64\n              group\n              text-center\n              justify-around\n              items-center\n            "},[Object.keys(t.encryptedFiles).length>0&&!t.encrypting?n("LockIcon",{staticClass:"text-green-500 h-30 w-30 min-w-min dark:text-green-400"}):n("div",{staticClass:"text-center flex flex-col justify-around items-center"},[n("h1",{staticClass:"\n                  font-bold\n                  text-lg\n                  mb-3\n                  text-gray-600\n                  dark:text-gray-400\n                "},[t._v("\n                Encrypting...\n              ")]),t._v(" "),n("Spinner")],1),t._v(" "),n("h1",{staticClass:"\n                font-semibold\n                text-center\n                my-3\n                text-gray-400\n                dark:text-gray-200\n              "},[t._v("\n              Total size: "),t.totalSize>0?n("span",[t._v(t._s(t._f("formatSize")(t.totalSize)))]):t._e()])],1)])],1),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition-all delay-500 duration-300 ease-out","leave-active-class":"transition-all delay-500 duration-300 ease-in","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.encrypting||Object.keys(t.encryptedFiles).length>0?n("div",{staticClass:"text-center mt-5"},[n("h4",{staticClass:"\n              text-sm\n              font-bold\n              text-gray-400\n              tracking-wide\n              dark:text-gray-200\n            "},[t._v("\n            Decryption Key:\n          ")]),t._v(" "),n("h2",{staticClass:"\n              text-sm\n              font-bold\n              text-red-500\n              tracking-widest\n              my-3\n              select-all\n              dark:text-red-400\n            ",class:{"filter blur-sm":t.blurPassword},on:{mouseenter:function(e){t.blurPassword=!1},mouseleave:function(e){t.blurPassword=!0}}},[t._v("\n            "+t._s(t.password)+"\n          ")]),t._v(" "),n("p",{staticClass:"text-sm text-gray-400 dark:text-gray-200"},[t._v("\n            Your text cannot be viewed without this key\n          ")])]):t._e()])],1),t._v(" "),n("div",{staticClass:"grid grid-cols-1 space-y-2"},[n("label",{staticClass:"\n          text-sm\n          font-bold\n          text-gray-500\n          tracking-wide\n          dark:text-gray-300\n        "},[t._v("Caption")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.caption,expression:"caption"}],staticClass:"\n          text-base\n          p-2\n          border border-gray-300\n          rounded-lg\n          outline-none\n          dark:bg-gray-800 dark:text-white dark:border-gray-500\n        ",attrs:{type:"text",placeholder:"Optional"},domProps:{value:t.caption},on:{input:function(e){e.target.composing||(t.caption=e.target.value)}}}),t._v(" "),t.showAddress?n("WalletInput",{on:{validated:t.setAddress}}):t._e()],1),t._v(" "),n("div",[n("button",{staticClass:"\n          mt-5\n          w-full\n          flex\n          justify-center\n          p-4\n          tracking-wide\n          font-semibold\n          rounded-xl\n        ",class:{"bg-gray-100 text-gray-400 cursor-not-allowed\tshadow dark:bg-gray-600":t.textInput.length<1||t.encrypting||t.uploading,"bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300":!(t.textInput.length<1||t.encrypting||t.uploading)},attrs:{disabled:t.textInput.length<1||t.encrypting||t.uploading},on:{click:function(e){return e.preventDefault(),t.uploadClicked()}}},[t._v("\n        Upload\n      ")])])]),t._v(" "),n("Modal",{directives:[{name:"show",rawName:"v-show",value:t.errorMsg,expression:"errorMsg"}],attrs:{message:t.errorMsg},on:{ok:function(e){t.errorMsg=""}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LockIcon:n(130).default,Spinner:n(76).default,Modal:n(124).default})},153:function(t,e,n){"use strict";n.r(e);var r={head:()=>({title:"DataVault - Decentralized text paste sharing"}),mixins:[n(139).a]},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    md:py-12\n    px-4\n    sm:px-6\n    lg:px-8\n    relative\n    flex\n    items-center\n    justify-center\n    flex-1\n  "},[n("transition",{attrs:{"enter-active-class":"transition-all delay-300 duration-300 ease","leave-active-class":"transition-all duration-300 ease","enter-class":"opacity-0 transform -translate-x-full","enter-to-class":"opacity-100 transform -translate-x-0","leave-class":"opacity-100 transform -translate-x-0","leave-to-class":"opacity-0 transform -translate-x-full"}},[t.showProgress?n("Progress",{attrs:{password:t.password,pct:t.pct,cid:t.cid,caption:t.caption}}):n("PasteBox",{attrs:{password:t.password},on:{upload:t.startUpload,passwordCreated:t.updatePassword}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PasteBox:n(144).default,Progress:n(134).default})}}]);