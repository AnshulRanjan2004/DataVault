(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{135:function(t,e,n){var content=n(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("7661b2e9",content,!0,{sourceMap:!1})},141:function(t,e,n){"use strict";var r=n(5),l={data:()=>({secure:!0,checked:!1}),mounted(){var t=this;return Object(r.a)((function*(){window.isSecureContext?console.log("secure"):(console.log("not secure context detected"),t.secure=!1),t.checked=!0}))()},components:{Warning:n(142).default}},c=(n(212),n(14)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-100 min-h-screen dark:bg-gray-700"},[e("div",{staticClass:"relative top-0 z-10 w-full"},[e("div",{staticClass:"flex justify-between items-center px-5 lg:px-10 py-5"},[e("n-link",{staticClass:"flex items-stretch font-bold text-2xl md:text-4xl px-4 py-2 dark:text-white",attrs:{to:"/"}},[e("img",{staticClass:"h-8 w-8 md:h-12 md:w-12",attrs:{src:n(211)}}),t._v("DataVault")]),t._v(" "),e("div",{staticClass:"flex justify-center items-center"},[e("n-link",{staticClass:"rounded-full font-bold px-4 py-2 transition duration-300 ease-in-out betterhover:hover:bg-blue-500 betterhover:hover:text-white text-sm text-center text-xl md:text-2xl",class:"myfiles"==t.$route.name?"bg-blue-500 text-white":"text-blue-500 dark:text-blue-300",attrs:{to:"/myfiles"}},[t._v("My Files")])],1)],1)]),t._v(" "),t.checked?e("div",{staticClass:"flex flex-col justify-center items-center flex-grow min-h-screen-80"},[t.secure||-1!=["faq","donate"].indexOf(t.$route.name)?e("Nuxt"):e("Security")],1):e("div",{staticClass:"md:py-12 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center min-h-screen-80"},[e("Spinner")],1),t._v(" "),e("div",{staticClass:"relative top-0 z-10 w-full"},[e("div",{staticClass:"flex justify-start items-center px-10 py-5"},[e("p",{staticClass:"text-gray-400 dark:text-gray-200"},[t._v("v1.0.0")]),t._v(" "),e("a",{staticClass:"px-4 py-2",attrs:{href:"https://github.com/AnshulRanjan2004/DataVault",target:"_external",title:"View source code"}},[e("GithubIcon",{staticClass:"dark:bg-white rounded-full border-2"})],1)])])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Spinner:n(144).default,GithubIcon:n(215).default})},142:function(t,e,n){"use strict";n.r(e);var r=n(14),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sm:max-w-lg w-full px-10 py-5 bg-red-400 rounded-xl z-10 shadow-xl dark:text-white text-center"},[t._v("\n  Please be aware the service we relied upon to keep this storage free "),e("a",{staticClass:"text-blue-500 underline dark:text-blue-400",attrs:{href:"https://web3.storage"}},[t._v("Web3.Storage")]),t._v(" is transitioning to paid model soon."),e("br"),t._v("I am deeply sorry\n  that I will not be able to continue operating this app anymore."),e("br"),e("b",[t._v("PLEASE MAKE BACKUPS OF YOUR UPLOADED DATA!")])])}],!1,null,null,null);e.default=component.exports},144:function(t,e,n){"use strict";n.r(e);var r=n(14),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"animate-spin h-20 w-20 text-blue-400",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"spinner",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}})])}),[],!1,null,null,null);e.default=component.exports},167:function(t,e,n){n(168),t.exports=n(169)},211:function(t,e,n){t.exports=n.p+"img/icon.f10045a.png"},212:function(t,e,n){"use strict";n(135)},213:function(t,e,n){var r=n(49)((function(i){return i[1]}));r.push([t.i,".page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.min-h-screen-80{min-height:83vh}",""]),r.locals={},t.exports=r},215:function(t,e,n){"use strict";n.r(e);var r=n(14),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 1024 1024",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",transform:"scale(64)",fill:"#1B1F23"}})])}),[],!1,null,null,null);e.default=component.exports}},[[167,19,4,20]]]);