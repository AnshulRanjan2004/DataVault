(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6,7],{218:function(t,e,r){"use strict";r.r(e);var n={props:{message:{type:String},title:{type:String,default:""}},methods:{okClicked(){this.$emit("ok")},close(){this.$emit("close")}}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-50 dark:bg-gray-500 dark:bg-opacity-70"},[e("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3 dark:bg-gray-800"},[t.title?e("div",{staticClass:"px-4 py-2 flex justify-between items-center"},[e("h3",{staticClass:"font-semibold text-lg dark:text-white"},[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"text-black close-modal dark:text-white",on:{click:t.close}},[t._v("✗")])]):t._e(),t._v(" "),e("div",{staticClass:"px-10 py-5 break-words dark:text-white"},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),e("div",{staticClass:"flex justify-end items-center w-100 px-10 pb-5"},[e("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white darl:bg-blue-500",on:{click:t.okClicked}},[t._v("\n        Ok\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"f",(function(){return y}));r(229),r(15),r(18),r(236),r(143);var n=Number("33283899392"),o=Number("2147483647");function l(t,path){return"https://".concat(t,".ipfs.dweb.link/").concat(encodeURIComponent(path))}function c(t,e){return new File([JSON.stringify(e)],t,{type:"application/json"})}function d(t){var e,r=t;return t>1e9?(e="GB",r/=1e9):t>1e6?(e="MB",r/=1e6):t>1e3?(e="KB",r/=1e3):e="Bytes","".concat(r.toFixed(2).toLocaleString()," ").concat(e)}function y(t,e){var link=document.createElement("a");link.href=URL.createObjectURL(t),link.download=e||t.name,link.click()}},226:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return d})),r.d(e,"b",(function(){return f}));var n=r(5),o=(r(15),r(220),r(221),r(222),r(223),r(224),r(225),r(27),{_pattern:/[a-zA-Z0-9\_\-]/,_getRandomByte:function(){if(window.crypto&&window.crypto.getRandomValues){var t=new Uint8Array(1);return window.crypto.getRandomValues(t),t[0]}if(window.msCrypto&&window.msCrypto.getRandomValues){t=new Uint8Array(1);return window.msCrypto.getRandomValues(t),t[0]}return Math.floor(256*Math.random())},generate:function(t){return Array.apply(null,{length:t}).map((function(){for(var t;;)if(t=String.fromCharCode(this._getRandomByte()),this._pattern.test(t))return t}),this).join("")}}),l=t=>window.crypto.subtle.importKey("raw",new TextEncoder("utf-8").encode(t),"PBKDF2",!1,["deriveKey"]),c=(t,e,r)=>window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:25e4,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,r);function d(t,e,r){return y.apply(this,arguments)}function y(){return(y=Object(n.a)((function*(t,e,r){var n=window.crypto.getRandomValues(new Uint8Array(16)),d=window.crypto.getRandomValues(new Uint8Array(12)),y=yield l(e),f=yield c(y,n,["encrypt"]),data=yield t.arrayBuffer(),h=yield window.crypto.subtle.encrypt({name:"AES-GCM",iv:d},f,data),v=new Uint8Array(h),m=new Uint8Array(n.byteLength+d.byteLength+v.byteLength);m.set(n,0),m.set(d,n.byteLength),m.set(v,n.byteLength+d.byteLength);var x=r?t.name:o.generate(10);return{file:new File([m],x+".enc",{type:t.type}),originalName:t.fullPath||t.name}}))).apply(this,arguments)}function f(t,e){return h.apply(this,arguments)}function h(){return(h=Object(n.a)((function*(t,e){var r=yield t.arrayBuffer(),n=r.slice(0,16),o=r.slice(16,28),data=r.slice(28),d=yield l(e),y=yield c(d,n,["decrypt"]),f=yield window.crypto.subtle.decrypt({name:"AES-GCM",iv:o},y,data);return new Blob([f])}))).apply(this,arguments)}},232:function(t,e,r){"use strict";r.r(e);var n={},o=r(14),component=Object(o.a)(n,(function(){var t=this._self._c;return t("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M12 2C17.523 2 22 6.477 22 12C22 12.427 21.973 12.847 21.922 13.26C21.73 12.3756 21.2032 11.5997 20.452 11.095C20.2166 8.93431 19.1626 6.94583 17.5066 5.53821C15.8505 4.13059 13.7182 3.41074 11.5478 3.52661C9.37742 3.64248 7.33385 4.58526 5.83707 6.1612C4.34028 7.73714 3.50397 9.82653 3.5 12C3.49985 13.2007 3.7541 14.3879 4.246 15.4832C4.73789 16.5785 5.45628 17.5572 6.35382 18.3548C7.25137 19.1524 8.30771 19.7508 9.45327 20.1105C10.5988 20.4703 11.8076 20.5833 13 20.442V21.5C13 21.652 13.014 21.802 13.04 21.947C12.6945 21.9825 12.3473 22.0002 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM20.487 12.482C20.1696 12.0664 19.7299 11.7607 19.2298 11.6081C18.7296 11.4554 18.1942 11.4634 17.6988 11.631C17.2035 11.7986 16.7731 12.1173 16.4684 12.5423C16.1636 12.9672 15.9998 13.4771 16 14V15H15.5C15.1022 15 14.7206 15.158 14.4393 15.4393C14.158 15.7206 14 16.1022 14 16.5V21.5C14 21.8978 14.158 22.2794 14.4393 22.5607C14.7206 22.842 15.1022 23 15.5 23H21.5C21.8978 23 22.2794 22.842 22.5607 22.5607C22.842 22.2794 23 21.8978 23 21.5V16.5C23 16.1022 22.842 15.7206 22.5607 15.4393C22.2794 15.158 21.8978 15 21.5 15H21V14C21.0009 13.4513 20.8206 12.9177 20.487 12.482V12.482ZM18.107 19.92C17.9862 19.8683 17.8767 19.7934 17.7849 19.6994C17.693 19.6054 17.6206 19.4943 17.5717 19.3723C17.5228 19.2503 17.4984 19.1199 17.4999 18.9885C17.5015 18.8571 17.5288 18.7273 17.5805 18.6065C17.6322 18.4857 17.7071 18.3762 17.8011 18.2844C17.8951 18.1925 18.0062 18.1201 18.1282 18.0712C18.2502 18.0223 18.3806 17.9979 18.512 17.9994C18.6434 18.001 18.7732 18.0283 18.894 18.08C19.138 18.1844 19.3305 18.3814 19.4293 18.6277C19.528 18.874 19.5249 19.1495 19.4205 19.3935C19.3161 19.6375 19.1191 19.83 18.8728 19.9288C18.6265 20.0275 18.351 20.0244 18.107 19.92ZM17.5 14C17.5 13.7348 17.6054 13.4804 17.7929 13.2929C17.9804 13.1054 18.2348 13 18.5 13C18.7652 13 19.0196 13.1054 19.2071 13.2929C19.3946 13.4804 19.5 13.7348 19.5 14V15H17.5V14ZM10.75 13.44L15.22 8.97C15.354 8.83704 15.5332 8.75951 15.7219 8.75286C15.9105 8.74622 16.0947 8.81096 16.2378 8.93416C16.3808 9.05736 16.4721 9.22996 16.4934 9.41752C16.5148 9.60508 16.4647 9.79379 16.353 9.946L16.28 10.03L11.28 15.03C11.153 15.157 10.9847 15.2342 10.8055 15.2476C10.6264 15.261 10.4485 15.2097 10.304 15.103L10.22 15.03L7.72 12.53C7.58704 12.396 7.5095 12.2168 7.50286 12.0281C7.49622 11.8395 7.56096 11.6553 7.68416 11.5122C7.80736 11.3692 7.97996 11.2779 8.16752 11.2566C8.35508 11.2352 8.54379 11.2853 8.696 11.397L8.78 11.47L10.75 13.44V13.44Z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},235:function(t,e,r){var content=r(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("4200bb98",content,!0,{sourceMap:!1})},244:function(t,e,r){var n=r(10),o=r(245);n({global:!0,forced:parseFloat!=o},{parseFloat:o})},245:function(t,e,r){var n=r(6),o=r(2),l=r(4),c=r(12),d=r(149).trim,y=r(96),f=l("".charAt),h=n.parseFloat,v=n.Symbol,m=v&&v.iterator,x=1/h(y+"-0")!=-1/0||m&&!o((function(){h(Object(m))}));t.exports=x?function(t){var e=d(c(t)),r=h(e);return 0===r&&"-"==f(e,0)?-0:r}:h},246:function(t,e,r){"use strict";r(235)},247:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,".textarea{line-height:20px;min-height:200px}",""]),n.locals={},t.exports=n},256:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(244),r(15),r(220),r(221),r(222),r(223),r(224),r(225),r(18),r(226)),l=r(219),c={components:{Modal:r(218).default},props:{password:{type:String}},filters:{formatSize:t=>Object(l.c)(t)},data:()=>({encrypting:!1,blurPassword:!0,caption:"",uploading:!1,showAddress:!1,address:"",encryptedFiles:{},totalSize:0,errorMsg:"",currency:null,textInput:""}),watch:{textInput(t){console.log(Math.max(parseFloat(this.$refs.textArea.scrollHeight),parseFloat(this.$refs.textArea.style.height))),this.$refs.textArea.style.height="auto",this.$refs.textArea.style.height="200px",this.$refs.textArea.style.height=Math.max(parseFloat(this.$refs.textArea.scrollHeight),parseFloat(this.$refs.textArea.style.height))+"px"}},methods:{setAddress(address,t){this.address=address,this.currency=t},highlight(t){this.$refs.dropArea.classList.remove("dark:border-gray-500"),this.$refs.dropArea.classList.add("border-red-500"),this.$refs.dropArea.classList.add("dark:border-red-400")},unhighlight(t){this.$refs.dropArea.classList.remove("border-red-500"),this.$refs.dropArea.classList.remove("dark:border-red-400"),this.$refs.dropArea.classList.add("dark:border-gray-500")},reset(){this.encryptedFiles={},this.totalSize=0,this.encrypting=!1},checkFiles(t){var e=0,r=[];for(var n of(r.push(new Uint8Array(1048576)),t)){try{var o=new Uint8Array(n.size);r.push(o)}catch(t){return this.errorMsg="Files are larger than what your browser memory allows to encrypt, please try another browser or free some memory.",this.reset(),!1}if(n.size>l.a)return this.errorMsg="The file ".concat(n.fullPath||n.name," is larger than the allowed single file size, please split it into parts."),this.reset(),!1;if((e+=n.size)>l.b)return this.errorMsg="Total files size is larger than allowed, please remove some files and consider splitting the uploads to multiple parts.",this.reset(),!1}return!0},encryptAndEmit(t,e,r){var l=this;return Object(n.a)((function*(){var n=yield Object(o.c)(t,e);l.encryptedFiles[r]=n,l.totalSize+=n.file.size}))()},startEncrypting(){var t=this;return Object(n.a)((function*(){if(t.textInput.length<1)return console.log("nothing to encrypt"),void(t.encrypting=!1);var e=new Blob([t.textInput],{type:"text/plain"}),r=o.a.generate(16);t.$emit("passwordCreated",r),t.encrypting=!0,t.encryptedFiles={};try{yield t.encryptAndEmit(e,r,0)}catch(e){t.errorMsg="Unable to encrypt data.",console.error(e),t.reset()}console.log(t.encryptedFiles),t.encrypting=!1}))()},uploadClicked(){var t=this;return Object(n.a)((function*(){if(!t.address||t.currency){if(yield t.startEncrypting(),0!=Object.keys(t.encryptedFiles).length){t.uploading=!0;var e=[];t.address&&t.currency&&e.push({address:t.address,currency:t.currency}),t.$emit("upload",{files:t.encryptedFiles,password:t.password,caption:t.caption,addresses:e},!0)}}else t.errorMsg="Your tipping address is not recognized a valid format, please add a correct BTC or XMR address."}))()}}},d=(r(246),r(14)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:max-w-4xl w-full px-10 pb-10 pt-3 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[e("div",{staticClass:"grid grid-cols-2 divide-x dark:divide-gray-300 text-gray-500 dark:text-gray-300 font-bold p-5 mb-3"},[e("div",{staticClass:"text-center"},[e("n-link",{staticClass:"rounded-full font-bold px-4 py-2 transition duration-300 ease-in-out betterhover:hover:bg-blue-500 betterhover:hover:text-white text-center text-blue-500 dark:text-blue-300",attrs:{to:"/"}},[t._v("← Upload Files")])],1),t._v(" "),e("div",{staticClass:"text-center"},[t._v("Paste Text")])]),t._v(" "),t.encrypting?t._e():e("div",{staticClass:"text-center"},[e("h1",{staticClass:"mb-5 text-sm text-gray-400 dark:text-gray-200"},[t._v("\n      Your text will be encrypted locally on your device then sent to a\n      decentralized storage.\n    ")])]),t._v(" "),e("form",{staticClass:"space-y-3"},[e("div",{staticClass:"grid grid-cols-1 space-y-2"},[e("div",{staticClass:"flex items-center justify-center w-full"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],ref:"textArea",staticClass:"w-full text-base p-2 border border-gray-300 rounded-lg outline-none dark:bg-gray-800 dark:text-white dark:border-gray-500 overflow-hidden break-words resize-none textarea",staticStyle:{height:"200px"},attrs:{placeholder:"Type or Paste what you want here.."},domProps:{value:t.textInput},on:{input:function(e){e.target.composing||(t.textInput=e.target.value)}}}),t._v(" "),e("transition",{attrs:{"enter-active-class":"transition-all delay-300 duration-300 ease","leave-active-class":"transition-all duration-300 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.encrypting,expression:"encrypting"}],staticClass:"flex flex-col rounded-lg w-full h-64 group text-center justify-around items-center"},[Object.keys(t.encryptedFiles).length>0&&!t.encrypting?e("LockIcon",{staticClass:"text-green-500 h-30 w-30 min-w-min dark:text-green-400"}):e("div",{staticClass:"text-center flex flex-col justify-around items-center"},[e("h1",{staticClass:"font-bold text-lg mb-3 text-gray-600 dark:text-gray-400"},[t._v("\n                Encrypting...\n              ")]),t._v(" "),e("Spinner")],1),t._v(" "),e("h1",{staticClass:"font-semibold text-center my-3 text-gray-400 dark:text-gray-200"},[t._v("\n              Total size: "),t.totalSize>0?e("span",[t._v(t._s(t._f("formatSize")(t.totalSize)))]):t._e()])],1)])],1),t._v(" "),e("transition",{attrs:{"enter-active-class":"transition-all delay-500 duration-300 ease-out","leave-active-class":"transition-all delay-500 duration-300 ease-in","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t.encrypting||Object.keys(t.encryptedFiles).length>0?e("div",{staticClass:"text-center mt-5"},[e("h4",{staticClass:"text-sm font-bold text-gray-400 tracking-wide dark:text-gray-200"},[t._v("\n            Decryption Key:\n          ")]),t._v(" "),e("h2",{staticClass:"text-sm font-bold text-red-500 tracking-widest my-3 select-all dark:text-red-400",class:{"filter blur-sm":t.blurPassword},on:{mouseenter:function(e){t.blurPassword=!1},mouseleave:function(e){t.blurPassword=!0}}},[t._v("\n            "+t._s(t.password)+"\n          ")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-400 dark:text-gray-200"},[t._v("\n            Your text cannot be viewed without this key\n          ")])]):t._e()])],1),t._v(" "),e("div",{staticClass:"grid grid-cols-1 space-y-2"},[e("label",{staticClass:"text-sm font-bold text-gray-500 tracking-wide dark:text-gray-300"},[t._v("Caption")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.caption,expression:"caption"}],staticClass:"text-base p-2 border border-gray-300 rounded-lg outline-none dark:bg-gray-800 dark:text-white dark:border-gray-500",attrs:{type:"text",placeholder:"Optional"},domProps:{value:t.caption},on:{input:function(e){e.target.composing||(t.caption=e.target.value)}}}),t._v(" "),t.showAddress?e("WalletInput",{on:{validated:t.setAddress}}):t._e()],1),t._v(" "),e("div",[e("button",{staticClass:"mt-5 w-full flex justify-center p-4 tracking-wide font-semibold rounded-xl",class:{"bg-gray-100 text-gray-400 cursor-not-allowed\tshadow dark:bg-gray-600":t.textInput.length<1||t.encrypting||t.uploading,"bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300":!(t.textInput.length<1||t.encrypting||t.uploading)},attrs:{disabled:t.textInput.length<1||t.encrypting||t.uploading},on:{click:function(e){return e.preventDefault(),t.uploadClicked()}}},[t._v("\n        Upload\n      ")])])]),t._v(" "),e("Modal",{directives:[{name:"show",rawName:"v-show",value:t.errorMsg,expression:"errorMsg"}],attrs:{message:t.errorMsg},on:{ok:function(e){t.errorMsg=""}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LockIcon:r(232).default,Spinner:r(144).default,Modal:r(218).default})}}]);