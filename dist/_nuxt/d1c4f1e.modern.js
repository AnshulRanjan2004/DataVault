(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{218:function(t,e,l){"use strict";l.r(e);var c={props:{message:{type:String},title:{type:String,default:""}},methods:{okClicked(){this.$emit("ok")},close(){this.$emit("close")}}},n=l(14),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-50 dark:bg-gray-500 dark:bg-opacity-70"},[e("div",{staticClass:"bg-white rounded shadow-lg w-10/12 md:w-1/3 dark:bg-gray-800"},[t.title?e("div",{staticClass:"px-4 py-2 flex justify-between items-center"},[e("h3",{staticClass:"font-semibold text-lg dark:text-white"},[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"text-black close-modal dark:text-white",on:{click:t.close}},[t._v("✗")])]):t._e(),t._v(" "),e("div",{staticClass:"px-10 py-5 break-words dark:text-white"},[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),e("div",{staticClass:"flex justify-end items-center w-100 px-10 pb-5"},[e("button",{staticClass:"bg-blue-600 hover:bg-blue-700 px-3 py-1 px-2 rounded text-white darl:bg-blue-500",on:{click:t.okClicked}},[t._v("\n        Ok\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);