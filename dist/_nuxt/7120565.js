(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7,8],{282:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"f",(function(){return f}));r(198),r(108),r(311),r(15),r(27),r(28),r(319),r(200),r(33);var n=Number("33283899392"),o=Number("2147483647");function l(e,path){return"https://".concat(e,".ipfs.dweb.link/").concat(encodeURIComponent(path))}function c(e,t){return new File([JSON.stringify(t)],e,{type:"application/json"})}function d(e){var t,r=e;return e>1e9?(t="GB",r/=1e9):e>1e6?(t="MB",r/=1e6):e>1e3?(t="KB",r/=1e3):t="Bytes","".concat(r.toFixed(2).toLocaleString()," ").concat(t)}function f(e,t){var link=document.createElement("a");link.href=URL.createObjectURL(e),link.download=t||e.name,link.click()}},308:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return y}));var n=r(9),o=(r(34),r(283),r(15),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(134),r(46),r(26),r(33),r(47),{_pattern:/[a-zA-Z0-9\_\-]/,_getRandomByte:function(){if(window.crypto&&window.crypto.getRandomValues){var e=new Uint8Array(1);return window.crypto.getRandomValues(e),e[0]}if(window.msCrypto&&window.msCrypto.getRandomValues){e=new Uint8Array(1);return window.msCrypto.getRandomValues(e),e[0]}return Math.floor(256*Math.random())},generate:function(e){return Array.apply(null,{length:e}).map((function(){for(var e;;)if(e=String.fromCharCode(this._getRandomByte()),this._pattern.test(e))return e}),this).join("")}}),l=function(e){return window.crypto.subtle.importKey("raw",new TextEncoder("utf-8").encode(e),"PBKDF2",!1,["deriveKey"])},c=function(e,t,r){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:25e4,hash:"SHA-256"},e,{name:"AES-GCM",length:256},!1,r)};function d(e,t,r){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var d,f,y,h,data,v,m,x,w,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=window.crypto.getRandomValues(new Uint8Array(16)),f=window.crypto.getRandomValues(new Uint8Array(12)),e.next=4,l(r);case 4:return y=e.sent,e.next=7,c(y,d,["encrypt"]);case 7:return h=e.sent,e.next=10,t.arrayBuffer();case 10:return data=e.sent,e.next=13,window.crypto.subtle.encrypt({name:"AES-GCM",iv:f},h,data);case 13:return v=e.sent,m=new Uint8Array(v),(x=new Uint8Array(d.byteLength+f.byteLength+m.byteLength)).set(d,0),x.set(f,d.byteLength),x.set(m,d.byteLength+f.byteLength),w=n?t.name:o.generate(10),C=new File([x],w+".enc",{type:t.type}),e.abrupt("return",{file:C,originalName:t.fullPath||t.name});case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,data,f,y,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.arrayBuffer();case 2:return n=e.sent,o=n.slice(0,16),d=n.slice(16,28),data=n.slice(28),e.next=8,l(r);case 8:return f=e.sent,e.next=11,c(f,o,["decrypt"]);case 11:return y=e.sent,e.next=14,window.crypto.subtle.decrypt({name:"AES-GCM",iv:d},y,data);case 14:return h=e.sent,e.abrupt("return",new Blob([h]));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},310:function(e,t,r){"use strict";r.r(t);var n={props:{message:{type:String},title:{type:String,default:""}},methods:{okClicked:function(){this.$emit("ok")},close:function(){this.$emit("close")}}},o=r(20),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-50 dark:bg-gray-500 dark:bg-opacity-70"},[t("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3 dark:bg-gray-800"},[e.title?t("div",{staticClass:"px-4 py-2 flex justify-between items-center"},[t("h3",{staticClass:"font-semibold text-lg dark:text-white"},[e._v(e._s(e.title))]),e._v(" "),t("button",{staticClass:"text-black close-modal dark:text-white",on:{click:e.close}},[e._v("✗")])]):e._e(),e._v(" "),t("div",{staticClass:"px-10 py-5 break-words dark:text-white"},[e._v("\n      "+e._s(e.message)+"\n    ")]),e._v(" "),t("div",{staticClass:"flex justify-end items-center w-100 px-10 pb-5"},[t("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white darl:bg-blue-500",on:{click:e.okClicked}},[e._v("\n        Ok\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports},317:function(e,t,r){"use strict";r.r(t);var n={},o=r(20),component=Object(o.a)(n,(function(){var e=this._self._c;return e("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12 2C17.523 2 22 6.477 22 12C22 12.427 21.973 12.847 21.922 13.26C21.73 12.3756 21.2032 11.5997 20.452 11.095C20.2166 8.93431 19.1626 6.94583 17.5066 5.53821C15.8505 4.13059 13.7182 3.41074 11.5478 3.52661C9.37742 3.64248 7.33385 4.58526 5.83707 6.1612C4.34028 7.73714 3.50397 9.82653 3.5 12C3.49985 13.2007 3.7541 14.3879 4.246 15.4832C4.73789 16.5785 5.45628 17.5572 6.35382 18.3548C7.25137 19.1524 8.30771 19.7508 9.45327 20.1105C10.5988 20.4703 11.8076 20.5833 13 20.442V21.5C13 21.652 13.014 21.802 13.04 21.947C12.6945 21.9825 12.3473 22.0002 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM20.487 12.482C20.1696 12.0664 19.7299 11.7607 19.2298 11.6081C18.7296 11.4554 18.1942 11.4634 17.6988 11.631C17.2035 11.7986 16.7731 12.1173 16.4684 12.5423C16.1636 12.9672 15.9998 13.4771 16 14V15H15.5C15.1022 15 14.7206 15.158 14.4393 15.4393C14.158 15.7206 14 16.1022 14 16.5V21.5C14 21.8978 14.158 22.2794 14.4393 22.5607C14.7206 22.842 15.1022 23 15.5 23H21.5C21.8978 23 22.2794 22.842 22.5607 22.5607C22.842 22.2794 23 21.8978 23 21.5V16.5C23 16.1022 22.842 15.7206 22.5607 15.4393C22.2794 15.158 21.8978 15 21.5 15H21V14C21.0009 13.4513 20.8206 12.9177 20.487 12.482V12.482ZM18.107 19.92C17.9862 19.8683 17.8767 19.7934 17.7849 19.6994C17.693 19.6054 17.6206 19.4943 17.5717 19.3723C17.5228 19.2503 17.4984 19.1199 17.4999 18.9885C17.5015 18.8571 17.5288 18.7273 17.5805 18.6065C17.6322 18.4857 17.7071 18.3762 17.8011 18.2844C17.8951 18.1925 18.0062 18.1201 18.1282 18.0712C18.2502 18.0223 18.3806 17.9979 18.512 17.9994C18.6434 18.001 18.7732 18.0283 18.894 18.08C19.138 18.1844 19.3305 18.3814 19.4293 18.6277C19.528 18.874 19.5249 19.1495 19.4205 19.3935C19.3161 19.6375 19.1191 19.83 18.8728 19.9288C18.6265 20.0275 18.351 20.0244 18.107 19.92ZM17.5 14C17.5 13.7348 17.6054 13.4804 17.7929 13.2929C17.9804 13.1054 18.2348 13 18.5 13C18.7652 13 19.0196 13.1054 19.2071 13.2929C19.3946 13.4804 19.5 13.7348 19.5 14V15H17.5V14ZM10.75 13.44L15.22 8.97C15.354 8.83704 15.5332 8.75951 15.7219 8.75286C15.9105 8.74622 16.0947 8.81096 16.2378 8.93416C16.3808 9.05736 16.4721 9.22996 16.4934 9.41752C16.5148 9.60508 16.4647 9.79379 16.353 9.946L16.28 10.03L11.28 15.03C11.153 15.157 10.9847 15.2342 10.8055 15.2476C10.6264 15.261 10.4485 15.2097 10.304 15.103L10.22 15.03L7.72 12.53C7.58704 12.396 7.5095 12.2168 7.50286 12.0281C7.49622 11.8395 7.56096 11.6553 7.68416 11.5122C7.80736 11.3692 7.97996 11.2779 8.16752 11.2566C8.35508 11.2352 8.54379 11.2853 8.696 11.397L8.78 11.47L10.75 13.44V13.44Z",fill:"currentColor"}})])}),[],!1,null,null,null);t.default=component.exports},333:function(e,t,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("4200bb98",content,!0,{sourceMap:!1})},353:function(e,t,r){"use strict";r(333)},354:function(e,t,r){var n=r(78)((function(i){return i[1]}));n.push([e.i,".textarea{line-height:20px;min-height:200px}",""]),n.locals={},e.exports=n},355:function(e,t,r){"use strict";r.r(t);r(45),r(47),r(49),r(27),r(26),r(39),r(51),r(52),r(28);var n=r(9),o=(r(34),r(283),r(15),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(33),r(308)),l=r(282);function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var f={components:{Modal:r(310).default},props:{password:{type:String}},filters:{formatSize:function(e){return Object(l.c)(e)}},data:function(){return{encrypting:!1,blurPassword:!0,caption:"",uploading:!1,showAddress:!1,address:"",encryptedFiles:{},totalSize:0,errorMsg:"",currency:null,textInput:""}},watch:{textInput:function(e){console.log(Math.max(parseFloat(this.$refs.textArea.scrollHeight),parseFloat(this.$refs.textArea.style.height))),this.$refs.textArea.style.height="auto",this.$refs.textArea.style.height="200px",this.$refs.textArea.style.height=Math.max(parseFloat(this.$refs.textArea.scrollHeight),parseFloat(this.$refs.textArea.style.height))+"px"}},methods:{setAddress:function(address,e){this.address=address,this.currency=e},highlight:function(e){this.$refs.dropArea.classList.remove("dark:border-gray-500"),this.$refs.dropArea.classList.add("border-red-500"),this.$refs.dropArea.classList.add("dark:border-red-400")},unhighlight:function(e){this.$refs.dropArea.classList.remove("border-red-500"),this.$refs.dropArea.classList.remove("dark:border-red-400"),this.$refs.dropArea.classList.add("dark:border-gray-500")},reset:function(){this.encryptedFiles={},this.totalSize=0,this.encrypting=!1},checkFiles:function(e){var t=0,r=[];r.push(new Uint8Array(1048576));var n,o=c(e);try{for(o.s();!(n=o.n()).done;){var d=n.value;try{var f=new Uint8Array(d.size);r.push(f)}catch(e){return this.errorMsg="Files are larger than what your browser memory allows to encrypt, please try another browser or free some memory.",this.reset(),!1}if(d.size>l.a)return this.errorMsg="The file ".concat(d.fullPath||d.name," is larger than the allowed single file size, please split it into parts."),this.reset(),!1;if((t+=d.size)>l.b)return this.errorMsg="Total files size is larger than allowed, please remove some files and consider splitting the uploads to multiple parts.",this.reset(),!1}}catch(e){o.e(e)}finally{o.f()}return!0},encryptAndEmit:function(e,t,r){var l=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.c)(e,t);case 2:c=n.sent,l.encryptedFiles[r]=c,l.totalSize+=c.file.size;case 5:case"end":return n.stop()}}),n)})))()},startEncrypting:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.textInput.length<1)){t.next=4;break}return console.log("nothing to encrypt"),e.encrypting=!1,t.abrupt("return");case 4:return r=new Blob([e.textInput],{type:"text/plain"}),n=o.a.generate(16),e.$emit("passwordCreated",n),e.encrypting=!0,e.encryptedFiles={},t.prev=9,t.next=12,e.encryptAndEmit(r,n,0);case 12:t.next=19;break;case 14:t.prev=14,t.t0=t.catch(9),e.errorMsg="Unable to encrypt data.",console.error(t.t0),e.reset();case 19:console.log(e.encryptedFiles),e.encrypting=!1;case 21:case"end":return t.stop()}}),t,null,[[9,14]])})))()},uploadClicked:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.address||e.currency){t.next=3;break}return e.errorMsg="Your tipping address is not recognized a valid format, please add a correct BTC or XMR address.",t.abrupt("return");case 3:return t.next=5,e.startEncrypting();case 5:if(0!=Object.keys(e.encryptedFiles).length){t.next=7;break}return t.abrupt("return");case 7:e.uploading=!0,r=[],e.address&&e.currency&&r.push({address:e.address,currency:e.currency}),e.$emit("upload",{files:e.encryptedFiles,password:e.password,caption:e.caption,addresses:r},!0);case 11:case"end":return t.stop()}}),t)})))()}}},y=(r(353),r(20)),component=Object(y.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"md:max-w-4xl w-full px-10 pb-10 pt-3 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[t("div",{staticClass:"grid grid-cols-2 divide-x dark:divide-gray-300 text-gray-500 dark:text-gray-300 font-bold p-5 mb-3"},[t("div",{staticClass:"text-center"},[t("n-link",{staticClass:"rounded-full font-bold px-4 py-2 transition duration-300 ease-in-out betterhover:hover:bg-blue-500 betterhover:hover:text-white text-center text-blue-500 dark:text-blue-300",attrs:{to:"/"}},[e._v("← Upload Files")])],1),e._v(" "),t("div",{staticClass:"text-center"},[e._v("Paste Text")])]),e._v(" "),e.encrypting?e._e():t("div",{staticClass:"text-center"},[t("h1",{staticClass:"mb-5 text-sm text-gray-400 dark:text-gray-200"},[e._v("\n      Your text will be encrypted locally on your device then sent to a\n      decentralized storage.\n    ")])]),e._v(" "),t("form",{staticClass:"space-y-3"},[t("div",{staticClass:"grid grid-cols-1 space-y-2"},[t("div",{staticClass:"flex items-center justify-center w-full"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textInput,expression:"textInput"}],ref:"textArea",staticClass:"w-full text-base p-2 border border-gray-300 rounded-lg outline-none dark:bg-gray-800 dark:text-white dark:border-gray-500 overflow-hidden break-words resize-none textarea",staticStyle:{height:"200px"},attrs:{placeholder:"Type or Paste what you want here.."},domProps:{value:e.textInput},on:{input:function(t){t.target.composing||(e.textInput=t.target.value)}}}),e._v(" "),t("transition",{attrs:{"enter-active-class":"transition-all delay-300 duration-300 ease","leave-active-class":"transition-all duration-300 ease","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.encrypting,expression:"encrypting"}],staticClass:"flex flex-col rounded-lg w-full h-64 group text-center justify-around items-center"},[Object.keys(e.encryptedFiles).length>0&&!e.encrypting?t("LockIcon",{staticClass:"text-green-500 h-30 w-30 min-w-min dark:text-green-400"}):t("div",{staticClass:"text-center flex flex-col justify-around items-center"},[t("h1",{staticClass:"font-bold text-lg mb-3 text-gray-600 dark:text-gray-400"},[e._v("\n                Encrypting...\n              ")]),e._v(" "),t("Spinner")],1),e._v(" "),t("h1",{staticClass:"font-semibold text-center my-3 text-gray-400 dark:text-gray-200"},[e._v("\n              Total size: "),e.totalSize>0?t("span",[e._v(e._s(e._f("formatSize")(e.totalSize)))]):e._e()])],1)])],1),e._v(" "),t("transition",{attrs:{"enter-active-class":"transition-all delay-500 duration-300 ease-out","leave-active-class":"transition-all delay-500 duration-300 ease-in","enter-class":"opacity-0 transform scale-0","enter-to-class":"opacity-100 transform scale-100","leave-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-0"}},[e.encrypting||Object.keys(e.encryptedFiles).length>0?t("div",{staticClass:"text-center mt-5"},[t("h4",{staticClass:"text-sm font-bold text-gray-400 tracking-wide dark:text-gray-200"},[e._v("\n            Decryption Key:\n          ")]),e._v(" "),t("h2",{staticClass:"text-sm font-bold text-red-500 tracking-widest my-3 select-all dark:text-red-400",class:{"filter blur-sm":e.blurPassword},on:{mouseenter:function(t){e.blurPassword=!1},mouseleave:function(t){e.blurPassword=!0}}},[e._v("\n            "+e._s(e.password)+"\n          ")]),e._v(" "),t("p",{staticClass:"text-sm text-gray-400 dark:text-gray-200"},[e._v("\n            Your text cannot be viewed without this key\n          ")])]):e._e()])],1),e._v(" "),t("div",{staticClass:"grid grid-cols-1 space-y-2"},[t("label",{staticClass:"text-sm font-bold text-gray-500 tracking-wide dark:text-gray-300"},[e._v("Caption")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.caption,expression:"caption"}],staticClass:"text-base p-2 border border-gray-300 rounded-lg outline-none dark:bg-gray-800 dark:text-white dark:border-gray-500",attrs:{type:"text",placeholder:"Optional"},domProps:{value:e.caption},on:{input:function(t){t.target.composing||(e.caption=t.target.value)}}}),e._v(" "),e.showAddress?t("WalletInput",{on:{validated:e.setAddress}}):e._e()],1),e._v(" "),t("div",[t("button",{staticClass:"mt-5 w-full flex justify-center p-4 tracking-wide font-semibold rounded-xl",class:{"bg-gray-100 text-gray-400 cursor-not-allowed\tshadow dark:bg-gray-600":e.textInput.length<1||e.encrypting||e.uploading,"bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300":!(e.textInput.length<1||e.encrypting||e.uploading)},attrs:{disabled:e.textInput.length<1||e.encrypting||e.uploading},on:{click:function(t){return t.preventDefault(),e.uploadClicked()}}},[e._v("\n        Upload\n      ")])])]),e._v(" "),t("Modal",{directives:[{name:"show",rawName:"v-show",value:e.errorMsg,expression:"errorMsg"}],attrs:{message:e.errorMsg},on:{ok:function(t){e.errorMsg=""}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LockIcon:r(317).default,Spinner:r(201).default,Modal:r(310).default})}}]);