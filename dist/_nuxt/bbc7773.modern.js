(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{283:function(t,e,l){"use strict";l.r(e);var o={head:()=>({title:"DataVault - My Previous Uploads"}),data:()=>({uploads:[]}),computed:{baseUrl:()=>window.location.origin},mounted(){var t=localStorage.getItem("unfile-uploads");t&&(this.uploads=JSON.parse(t))},methods:{forget(i){this.uploads.splice(i,1),localStorage.setItem("unfile-uploads",JSON.stringify(this.uploads))},clearAll(){this.uploads=[],localStorage.removeItem("unfile-uploads")}}},n=l(14),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:py-12 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center flex-1"},[e("div",{staticClass:"max-w-screen-lg w-full p-10 bg-white rounded-xl z-10 shadow-xl dark:bg-gray-800"},[t.uploads.length<1?e("div",{staticClass:"flex flex-col items-center justify-center"},[e("h1",{staticClass:"text-center font-bold text-2xl text-gray-500 dark:text-gray-200"},[t._v("\n        No links are saved in your browser\n      ")]),t._v(" "),e("n-link",{staticClass:"mt-10 md:w-1/2 sm:w-full flex justify-center p-2 tracking-wide font-semibold rounded-full bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300",attrs:{to:"/"}},[t._v("\n        Upload Some Files\n      ")])],1):e("div",{staticClass:"flex flex-col items-center justify-center"},[e("h1",{staticClass:"mb-10 text-gray-500 dark:text-gray-200"},[t._v("\n        These links are saved in your browser's local storage. Clearing\n        application's cache will remove them.\n      ")]),t._v(" "),t._l(t.uploads,(function(l,i){return e("div",{key:i,staticClass:"flex justify-between items-center border p-3 rounded mb-3 w-full dark:border-gray-500"},[e("div",{staticClass:"flex flex-col mx-2"},[e("div",{staticClass:"break-words font-bold text-gray-600 dark:text-gray-200"},[t._v("\n            "+t._s(l.caption)+"\n          ")]),t._v(" "),e("div",{staticClass:"break-all text-sm select-all dark:text-gray-300",class:{"pt-3":l.caption}},[t._v("\n            "+t._s(t.baseUrl)+t._s(l.link)+"\n          ")])]),t._v(" "),e("button",{staticClass:"bg-blue-500 text-gray-100 tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300 py-1 px-2 rounded-md text-xs mx-2",on:{click:function(e){return t.forget(i)}}},[t._v("\n          Forget\n        ")])])})),t._v(" "),e("button",{staticClass:"mt-10 flex justify-center py-2 px-4 tracking-wide font-semibold rounded-full bg-blue-500 text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300 text-lg",on:{click:t.clearAll}},[t._v("\n        Clear All\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);