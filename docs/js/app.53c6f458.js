(function(e){function t(t){for(var o,l,r=t[0],s=t[1],c=t[2],d=0,f=[];d<r.length;d++)l=r[d],n[l]&&f.push(n[l][0]),n[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],o=!0,l=1;l<i.length;l++){var s=i[l];0!==n[s]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var o={},n={app:0},a=[];function l(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ec1e39f7"}[e]+".js"}function r(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],i=n[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise(function(t,o){i=n[e]=[t,o]});t.push(i[2]=o);var a,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=l(e),a=function(t){c.onerror=c.onload=null,clearTimeout(d);var i=n[e];if(0!==i){if(i){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");l.type=o,l.request=a,i[1](l)}n[e]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,s.appendChild(c)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0252":function(e,t,i){},"0b8a":function(e,t,i){"use strict";var o=i("db31"),n=i.n(o);n.a},"0cc6":function(e,t,i){},"0da5":function(e,t,i){"use strict";var o=i("e7f3"),n=i.n(o);n.a},1726:function(e,t,i){"use strict";var o=i("469a"),n=i.n(o);n.a},"285b":function(e,t,i){"use strict";var o=i("f44f"),n=i.n(o);n.a},"469a":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);var o={};i.r(o);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("router-view")],1)},l=[],r=(i("7c55"),i("2877")),s={},c=Object(r["a"])(s,a,l,!1,null,null,null);c.options.__file="App.vue";var d=c.exports,u=i("ce5b"),f=i.n(u),m=i("8c4f"),v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"media-home"},[i("media-nav-bar"),i("media-content"),i("media-tool-model"),i("media-settings"),i("media-tool-model"),i("media-rename-model"),i("media-confirm-delete-model"),i("media-create-folder-model"),i("media-file-menu"),i("media-folder-menu"),i("media-infrobar"),i("media-alert")],1)},h=[],p={name:"media-home"},_=p,g=Object(r["a"])(_,v,h,!1,null,null,null);g.options.__file="Home.vue";var b=g.exports;n["default"].use(m["a"]);var w,k=new m["a"]({base:"",routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}]}),S=i("2f62"),x={showConfirmDeleteModal:!1,showCreateFolderModal:!1,showPreviewModal:!1,showShareModal:!1,showRenameModal:!1,showSettings:!1,showFileMenu:!1,showFileMenuX:0,showFileMenuY:0,showFolderMenu:!1,showFolderMenuX:0,showFolderMenuY:0,showToolModal:!1,showInfoBar:!1,showsnackbar:!1,showsnackbardata:"",previewItem:null,loadingValue:0,isLoading:!1,search:""},O=i("63e0"),M=i("ade3"),E=(i("ac6a"),i("2909")),y=(i("f751"),i("20d6"),i("7514"),i("28a5"),"SET_IS_LOADING"),C="SELECT_DIRECTORY",D="SELECT_BROWSER_ITEM",$="SELECT_BROWSER_ITEMS",j="UNSELECT_BROWSER_ITEM",I="UNSELECT_ALL_BROWSER_ITEMS",F="INCREASE_GRID_SIZE",T="DECREASE_GRID_SIZE",R="LOAD_CONTENTS_SUCCESS",L="LOAD_FULL_CONTENTS_SUCCESS",A="CREATE_DIRECTORY_SUCCESS",N="UPLOAD_SUCCESS",H="SHOW_CREATE_FOLDER_MODAL",P="HIDE_CREATE_FOLDER_MODAL",U="SHOW_CONFIRM_DELETE_MODAL",B="HIDE_CONFIRM_DELETE_MODAL",W="SHOW_FILE_MENU",V="HIDE_FILE_MENU",Y="SHOW_FOLDER_MENU",G="HIDE_FOLDER_MENU",X="SHOW_TOOL_MODAL",z="HIDE_TOOL_MODAL",q="SHOW_INFOBAR",J="HIDE_INFOBAR",K="SHOW_SNACKBAR",Q="HIDE_SNACKBAR",Z="SHOW_SETTINGS",ee="HIDE_SETTINGS",te="DELETE_SUCCESS",ie="CHANGE_LIST_VIEW",oe="SHOW_PREVIEW_MODAL",ne="HIDE_PREVIEW_MODAL",ae="SHOW_RENAME_MODAL",le="HIDE_RENAME_MODAL",re="RENAME_SUCCESS",se="SHOW_SHARE_MODAL",ce="HIDE_SHARE_MODAL",de="SET_SEARCH_QUERY",ue=i("df7c"),fe=["xs","sm","md","lg","xl"],me=(w={},Object(M["a"])(w,C,function(e,t){e.selectedDirectory=t}),Object(M["a"])(w,R,function(e,t){function i(t){var n=e.directories.some(function(e){return e.path===t});if(!n){var a=o(t);a.directories=e.directories.filter(function(e){return e.directory===a.path}).map(function(e){return e.path}),e.directories.push(a),a.directory&&i(a.directory)}}function o(e){var t=e.split("/"),i=ue.dirname(e);return-1!==i.indexOf(":",i.length-1)&&(i+="/"),{path:e,name:t[t.length-1],directories:[],files:[],directory:"."!==i?i:null,type:"dir",mime_type:"directory"}}function n(e,t){var i=e.directories.find(function(e){return e.path===t.directory}),o=e.directories.indexOf(i),n=e.directories.findIndex(function(e){return e.path===t.path});-1===n&&(n=e.directories.length),e.directories.splice(n,1,t),-1!==o&&e.directories.splice(o,1,Object.assign({},i,{directories:Object(E["a"])(i.directories).concat([t.path])}))}function a(e,t){var i=e.directories.find(function(e){return e.path===t.directory}),o=e.directories.indexOf(i),n=e.files.findIndex(function(e){return e.path===t.path});-1===n&&(n=e.files.length),e.files.splice(n,1,t),-1!==o&&e.directories.splice(o,1,Object.assign({},i,{files:Object(E["a"])(i.files).concat([t.path])}))}i(e.selectedDirectory),t.directories.forEach(function(t){n(e,t)}),t.files.forEach(function(t){a(e,t)})}),Object(M["a"])(w,N,function(e,t){var i=t,o=!e.files.some(function(e){return e.path===i.path});if(o){var n=e.directories.find(function(e){return e.path===i.directory}),a=e.directories.indexOf(n);e.files.push(i),e.directories.splice(a,1,Object.assign({},n,{files:Object(E["a"])(n.files).concat([i.path])}))}}),Object(M["a"])(w,A,function(e,t){var i=t,o=!e.directories.some(function(e){return e.path===i.path});if(o){var n=e.directories.find(function(e){return e.path===i.directory}),a=e.directories.indexOf(n);e.directories.push(i),e.directories.splice(a,1,Object.assign({},n,{directories:Object(E["a"])(n.directories).concat([i.path])}))}}),Object(M["a"])(w,re,function(e,t){var i=t.item,o=t.oldPath;if("file"===i.type){var n=e.files.findIndex(function(e){return e.path===o});e.files.splice(n,1,i)}else{var a=e.directories.findIndex(function(e){return e.path===o});e.directories.splice(a,1,i)}}),Object(M["a"])(w,te,function(e,t){var i=t;"file"===i.type&&e.files.splice(e.files.findIndex(function(e){return e.path===i.path}),1),"dir"===i.type&&e.directories.splice(e.directories.findIndex(function(e){return e.path===i.path}),1)}),Object(M["a"])(w,D,function(e,t){e.selectedItems.push(t)}),Object(M["a"])(w,$,function(e,t){e.selectedItems=t}),Object(M["a"])(w,j,function(e,t){var i=t;e.selectedItems.splice(e.selectedItems.findIndex(function(e){return e.path===i.path}),1)}),Object(M["a"])(w,I,function(e,t){e.selectedItems=[]}),Object(M["a"])(w,H,function(e){e.showCreateFolderModal=!0}),Object(M["a"])(w,P,function(e){e.showCreateFolderModal=!1}),Object(M["a"])(w,X,function(e){e.showToolModal=!0}),Object(M["a"])(w,z,function(e){e.showToolModal=!1}),Object(M["a"])(w,Y,function(e,t){var i=window.event;i.preventDefault(),console.log(t),e.showFolderMenuX=i.clientX,e.showFolderMenuY=i.clientY}),Object(M["a"])(w,G,function(e,t){console.log(t),e.showFolderMenu=!1}),Object(M["a"])(w,W,function(e,t){var i=window.event;i.preventDefault(),console.log(t),e.showFileMenuX=i.clientX,e.showFileMenuY=i.clientY}),Object(M["a"])(w,V,function(e,t){console.log(t),e.showFileMenu=!1}),Object(M["a"])(w,q,function(e){e.showInfoBar=!0}),Object(M["a"])(w,J,function(e){e.showInfoBar=!1}),Object(M["a"])(w,ie,function(e,t){e.listView=t}),Object(M["a"])(w,L,function(e,t){e.previewItem=t}),Object(M["a"])(w,oe,function(e){e.showPreviewModal=!0}),Object(M["a"])(w,ne,function(e){e.showPreviewModal=!1}),Object(M["a"])(w,y,function(e,t){e.isLoading=t;var i=0;setInterval(function(){i>=101?clearInterval(this):(i++,e.loadingValue=i)},70)}),Object(M["a"])(w,ae,function(e){e.showRenameModal=!0}),Object(M["a"])(w,le,function(e){e.showRenameModal=!1}),Object(M["a"])(w,Z,function(e){e.showSettings=!0}),Object(M["a"])(w,ee,function(e){e.showSettings=!1}),Object(M["a"])(w,K,function(e,t){e.showsnackbardata=t,e.showsnackbar=!0}),Object(M["a"])(w,Q,function(e){e.showsnackbardata="",e.showsnackbar=!1}),Object(M["a"])(w,se,function(e){e.showShareModal=!0}),Object(M["a"])(w,ce,function(e){e.showShareModal=!1}),Object(M["a"])(w,F,function(e){var t=fe.indexOf(e.gridSize);t>=0&&t<fe.length-1&&(e.gridSize=fe[++t])}),Object(M["a"])(w,T,function(e){var t=fe.indexOf(e.gridSize);t>0&&t<fe.length&&(e.gridSize=fe[--t])}),Object(M["a"])(w,de,function(e,t){e.search=t}),Object(M["a"])(w,U,function(e){e.showConfirmDeleteModal=!0}),Object(M["a"])(w,B,function(e){e.showConfirmDeleteModal=!1}),w);n["default"].use(S["a"]);var ve=new S["a"].Store({state:x,getters:o,actions:O,mutations:me,strict:!1}),he=i("9483");Object(he["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var pe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-snackbar",{attrs:{bottom:"bottom"===e.y,left:"left"===e.x,"multi-line":"multi-line"===e.mode,right:"right"===e.x,timeout:e.timeout,top:"top"===e.y,vertical:"vertical"===e.mode},model:{value:e.snackbarState,callback:function(t){e.snackbarState=t},expression:"snackbarState"}},[e._v("\n  "+e._s(this.$store.state.showsnackbardata)+"\n  "),i("v-btn",{attrs:{color:"white",flat:""},on:{click:function(t){e.close()}}},[e._v("\n  Close\n")])],1)},_e=[],ge={name:"Alert",data:function(){return{y:"bottom",x:"left",mode:"",timeout:6e3}},props:{},computed:{snackbarState:{get:function(){return this.$store.state.showsnackbar},set:function(){setTimeout(function(){this.$store.commit(Q)}.bind(this),1e3)}}},methods:{close:function(){this.$store.commit(Q)}}},be=ge,we=Object(r["a"])(be,pe,_e,!1,null,null,null);we.options.__file="Alert.vue";var ke=we.exports,Se=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"media-confirm-model"}},[i("v-dialog",{attrs:{persistent:"",width:"500px"},model:{value:this.$store.state.showConfirmDeleteModal,callback:function(t){e.$set(this.$store.state,"showConfirmDeleteModal",t)},expression:"this.$store.state.showConfirmDeleteModal"}},[i("v-card",[i("v-card-title",{staticClass:"grey lighten-4 title"},[e._v("\n        Confirm Delete\n        "),i("v-spacer"),i("v-icon",[e._v("delete")])],1),i("v-container",[i("div",{staticClass:"confirm-text"},[i("strong",[e._v(e._s(e.text))])])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error"},on:{click:function(t){e.hideConfirmDeleteModal()}}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"success"}},[e._v("Confirm")])],1)],1)],1)],1)},xe=[],Oe={name:"media-confirm-model",data:function(){return{}},props:{text:{type:String,required:!1,default:"Are you sure want to delete ?"}},computed:{},methods:{hideConfirmDeleteModal:function(){this.$store.commit(B)}}},Me=Oe,Ee=(i("285b"),Object(r["a"])(Me,Se,xe,!1,null,null,null));Ee.options.__file="ConfirmDeleteModel.vue";var ye=Ee.exports,Ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-content",{attrs:{id:"media-content"}},[i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("hr"),i("v-breadcrumbs",{attrs:{items:e.items}},[i("v-icon",{attrs:{slot:"divider"},slot:"divider"},[e._v("chevron_right")])],1),i("hr"),i("v-layout",{staticClass:"section",attrs:{row:"",wrap:""}},[i("span",{staticClass:"media-section-title"},[i("strong",[e._v("Recents & Quick Access")])])]),i("v-layout",{attrs:{row:"",wrap:""}},[i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file")],1),i("v-layout",{staticClass:"section",attrs:{row:"",wrap:""}},[i("span",{staticClass:"media-section-title"},[i("strong",[e._v("Folders")])])]),i("v-layout",{attrs:{row:"",wrap:""}},[i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder"),i("media-folder")],1),i("v-layout",{staticClass:"section",attrs:{row:"",wrap:""}},[i("span",{staticClass:"media-section-title"},[i("strong",[e._v("Files")])])]),i("v-layout",{attrs:{row:"",wrap:""}},[i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-file"),i("media-online-state")],1)],1)],1)},De=[],$e={name:"media-content",data:function(){return{items:[{text:"Home",disabled:!1,href:"#/"},{text:"About",disabled:!1,href:"#/about"}]}}},je=$e,Ie=(i("1726"),Object(r["a"])(je,Ce,De,!1,null,null,null));Ie.options.__file="Content.vue";var Fe=Ie.exports,Te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"media-create-folder"}},[i("v-dialog",{attrs:{persistent:"",width:"500px"},model:{value:this.$store.state.showCreateFolderModal,callback:function(t){e.$set(this.$store.state,"showCreateFolderModal",t)},expression:"this.$store.state.showCreateFolderModal"}},[i("v-card",[i("v-card-title",{staticClass:"grey lighten-4 title"},[e._v("\n        New Folder\n        "),i("v-spacer"),i("v-icon",[e._v("folder")])],1),i("v-container",[i("v-flex",[i("v-text-field",{attrs:{solo:"",autofocus:"",label:"Folder name"},on:{focus:function(e){e.target.select()}},model:{value:e.defaultData,callback:function(t){e.defaultData=t},expression:"defaultData"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error"},on:{click:function(t){e.hideCreateFolderModal()}}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"success"}},[e._v("Create")])],1)],1)],1)],1)},Re=[],Le={name:"media-create-folder",data:function(){return{defaultData:"Untitled Folder"}},props:{text:{type:String,default:""}},methods:{hideCreateFolderModal:function(){this.$store.commit(P)}}},Ae=Le,Ne=(i("93a5"),Object(r["a"])(Ae,Te,Re,!1,null,null,null));Ne.options.__file="CreateNewFolderModel.vue";var He=Ne.exports,Pe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-navigation-drawer",{attrs:{right:"",dark:"",clipped:"",app:"",width:"330",fixed:"",stateless:!0},model:{value:e.menuState,callback:function(t){e.menuState=t},expression:"menuState"}},[i("v-list",{attrs:{dense:""}},[i("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.hideInforbar()}}},[i("v-list-tile-action",[i("v-icon",[e._v("exit_to_app")])],1),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Click to close")])],1)],1)],1)],1)},Ue=[],Be={name:"Details",data:function(){return{right:!0}},props:{},components:{},computed:{rand:function(){return Math.floor(1e8*Math.random()+1)},menuState:{get:function(){return this.$store.state.showInfoBar},set:function(){}}},methods:{about:function(e){console.log(e)},settings:function(e){console.log(e)},hideInforbar:function(){this.$store.commit(J)},fire:function(e){this[e](e)}}},We=Be,Ve=Object(r["a"])(We,Pe,Ue,!1,null,null,null);Ve.options.__file="InfoBar.vue";var Ye=Ve.exports,Ge=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file",attrs:{"item-data":e.itemId,id:"media-file"},on:{contextmenu:function(t){e.show(this,e.itemId)}}},[i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return i("v-card",{staticClass:"mx-auto",class:"elevation-"+(o?12:2)+" "+(e.selectedState?"selected":"unselected"),attrs:{width:"150",height:"140"}},[i("v-img",{attrs:{"aspect-ratio":16/9,src:"https://picsum.photos/500/300?image="+(5*e.n+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e.n+10)}},[i("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1),i("v-card-title",[i("span",{staticClass:"file-text"},[e._v("Cafe Badilico")])])],1)}}])})],1)},Xe=[],ze={name:"media-file",data:function(){return{showMenu:!1,itemId:Math.floor(1e8*Math.random()+1),n:Math.floor(17*Math.random()+1),selectedState:!1,mediaItemId:null,items:[{title:"Preview",icon:"remove_red_eye",link:"preview"},{title:"Edit",icon:"edit",link:"edit"},{title:"Delete",icon:"delete",link:"delete"},{title:"Share",icon:"share",link:"settings"},{title:"Rename",icon:"spellcheck",link:"settings"},{title:"Download",icon:"cloud_download",link:"settings"},{title:"Stars",icon:"stars",link:"settings"},{title:"View Details",icon:"priority_high",link:"settings"},{title:"Get shareable link",icon:"link",link:"settings"}]}},computed:{rand:function(){return Math.floor(1e8*Math.random()+1)}},methods:{show:function(e,t){var i=this;e=e||window.event,e.preventDefault(),this.$store.commit(G,t),this.$store.commit(V,t),this.$store.commit(W,t),this.$nextTick(function(){i.$store.state.showFileMenu=!0})},delete:function(e){this.showConfirmDeleteModal(),console.log(e)},edit:function(e){console.log(e)},preview:function(e){console.log(e)},settings:function(e){console.log(e)},showConfirmDeleteModal:function(){this.$store.commit(U)},fire:function(e,t){this.$store.commit(V),this[e](t)}}},qe=ze,Je=(i("0b8a"),Object(r["a"])(qe,Ge,Xe,!1,null,null,null));Je.options.__file="File.vue";var Ke=Je.exports,Qe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-menu",{attrs:{"position-x":this.$store.state.showFileMenuX,"position-y":this.$store.state.showFileMenuY,absolute:"","offset-y":"",transition:"scale-transition",id:"media-file-menu"},model:{value:e.menuState,callback:function(t){e.menuState=t},expression:"menuState"}},[i("v-list",e._l(e.items,function(t,o){return i("v-list-tile",{key:o,on:{click:function(i){e.fire(t.link,e.itemId)}}},[t.icon?i("v-list-tile-action",[i("v-icon",[e._v(e._s(t.icon))])],1):e._e(),i("v-list-tile-title",[e._v(e._s(t.title))])],1)}))],1)},Ze=[],et={name:"media-file-menu",data:function(){return{itemId:Math.floor(1e8*Math.random()+1),n:Math.floor(17*Math.random()+1),items:[{title:"Preview",icon:"remove_red_eye",link:"preview"},{title:"Edit",icon:"edit",link:"edit"},{title:"Delete",icon:"delete",link:"delete"},{title:"Share",icon:"share",link:"share"},{title:"Rename",icon:"spellcheck",link:"rename"},{title:"Download",icon:"cloud_download",link:"download"},{title:"Stars",icon:"stars",link:"stars"},{title:"View Details",icon:"priority_high",link:"viewDetails"},{title:"Get shareable link",icon:"link",link:"getShareableLike"}]}},computed:{rand:function(){return Math.floor(1e8*Math.random()+1)},menuState:{get:function(){return this.$store.state.showFileMenu},set:function(){}}},methods:{delete:function(e){this.showConfirmDeleteModal(),console.log(e)},edit:function(e){console.log(e)},preview:function(e){console.log(e)},download:function(e){console.log(e)},getShareableLike:function(e){console.log(e)},viewDetails:function(e){this.$store.commit(q),console.log(e)},stars:function(e){console.log(e)},showConfirmDeleteModal:function(){this.$store.commit(U)},rename:function(){this.$store.commit(ae)},share:function(){console.log("share")},fire:function(e,t){this.$store.commit(V),this[e](t)}}},tt=et,it=Object(r["a"])(tt,Qe,Ze,!1,null,null,null);it.options.__file="FileMenu.vue";var ot=it.exports,nt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-xs-center folder",attrs:{id:"media-folder"},on:{contextmenu:function(t){e.show(this,e.itemId)}}},[i("v-tooltip",{attrs:{top:""}},[i("v-chip",{staticClass:"chip-size",attrs:{slot:"activator",color:e.folderColor,"text-color":"white",width:"100px"},slot:"activator"},[i("v-avatar",[i("v-icon",{staticClass:"chip-folder"},[e._v("folder")])],1),e._v("\n      Ranee\n    ")],1),i("span",[e._v("Top Very Very Long")])],1)],1)},at=[],lt={name:"media-folder",data:function(){return{folderColor:"teal",itemId:Math.floor(1e8*Math.random()+1),items:[{title:"Delete",icon:"delete",link:"delete"},{title:"Share",icon:"share",link:"settings"},{title:"Rename",icon:"spellcheck",link:"settings"},{title:"Download",icon:"cloud_download",link:"settings"},{title:"Change Color",icon:"color_lens",link:"settings"},{title:"Stars",icon:"stars",link:"settings"},{title:"View Details",icon:"priority_high",link:"settings"},{title:"Get shareable link",icon:"link",link:"settings"}]}},computed:{rand:function(){return Math.floor(1e8*Math.random()+1)}},methods:{show:function(e,t){var i=this;e=e||window.event,e.preventDefault(),this.$store.commit(V,t),this.$store.commit(G,t),this.$store.commit(Y,t),this.$nextTick(function(){i.$store.state.showFolderMenu=!0})},delete:function(e){this.showConfirmDeleteModal(),console.log(e)},edit:function(e){console.log(e)},preview:function(e){console.log(e)},settings:function(e){console.log(e)},showConfirmDeleteModal:function(){this.$store.commit(U)},fire:function(e,t){this.$store.commit(G),this[e](t)}}},rt=lt,st=(i("ea2f"),Object(r["a"])(rt,nt,at,!1,null,null,null));st.options.__file="Folder.vue";var ct=st.exports,dt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-menu",{attrs:{"position-x":this.$store.state.showFolderMenuX,"position-y":this.$store.state.showFolderMenuYX,absolute:"","offset-y":"",transition:"scale-transition",id:"media-folder-menu"},model:{value:e.menuState,callback:function(t){e.menuState=t},expression:"menuState"}},[i("v-list",e._l(e.items,function(t,o){return i("v-list-tile",{key:o,on:{click:function(i){e.fire(t.link,e.itemId)}}},[t.icon?i("v-list-tile-action",[i("v-icon",[e._v(e._s(t.icon))])],1):e._e(),i("v-list-tile-title",[e._v(e._s(t.title))])],1)}))],1)},ut=[],ft={name:"media-folder-menu",data:function(){return{itemId:Math.floor(1e8*Math.random()+1),items:[{title:"Delete",icon:"delete",link:"delete"},{title:"Share",icon:"share",link:"share"},{title:"Rename",icon:"spellcheck",link:"rename"},{title:"Download",icon:"cloud_download",link:"download"},{title:"Change Color",icon:"color_lens",link:"changeColor"},{title:"Stars",icon:"stars",link:"stars"},{title:"View Details",icon:"priority_high",link:"viewDetails"},{title:"Get shareable link",icon:"link",link:"getShareableLink"}]}},computed:{rand:function(){return Math.floor(1e8*Math.random()+1)},menuState:{get:function(){return this.$store.state.showFolderMenu},set:function(){}}},methods:{delete:function(e){this.showConfirmDeleteModal(),console.log(e)},getShareableLink:function(e){console.log(e)},changeColor:function(e){console.log(e)},download:function(e){console.log(e)},getShareableLike:function(e){console.log(e)},viewDetails:function(e){this.$store.commit(q),console.log(e)},stars:function(e){console.log(e)},showConfirmDeleteModal:function(){this.$store.commit(U)},rename:function(){this.$store.commit(ae)},share:function(){console.log("share")},fire:function(e,t){this.$store.commit(G),this[e](t)}}},mt=ft,vt=(i("0da5"),Object(r["a"])(mt,dt,ut,!1,null,null,null));vt.options.__file="FolderMenu.vue";var ht=vt.exports,pt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navbar",attrs:{id:"media-navbar"}},[i("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,fixed:"",app:"",width:"250"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-progress-linear",{attrs:{color:"red",height:"5",value:this.$store.state.loadingValue}}),i("v-list",{attrs:{dense:""}},[e._l(e.items,function(t){return[t.heading?i("v-layout",{key:t.heading,attrs:{row:"","align-center":""}},[i("v-flex",{attrs:{xs6:""}},[t.heading?i("v-subheader",[e._v("\n            "+e._s(t.heading)+"\n          ")]):e._e()],1),i("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[i("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[e._v("EDIT")])])],1):t.children?i("v-list-group",{key:t.text,attrs:{"prepend-icon":t.model?t.icon:t["icon-alt"],"append-icon":""},model:{value:t.model,callback:function(i){e.$set(t,"model",i)},expression:"item.model"}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-content",[i("v-list-tile-title",[e._v("\n            "+e._s(t.text)+"\n          ")])],1)],1),e._l(t.children,function(t,o){return i("v-list-tile",{key:o,on:{click:function(e){}}},[t.icon?i("v-list-tile-action",[i("v-icon",[e._v(e._s(t.icon))])],1):e._e(),i("v-list-tile-content",[i("v-list-tile-title",[e._v("\n          "+e._s(t.text)+"\n        ")])],1)],1)})],2):i("v-list-tile",{key:t.text,on:{click:function(i){e.fire(t.link)}}},[i("v-list-tile-action",[i("v-icon",[e._v(e._s(t.icon))])],1),i("v-list-tile-content",[i("v-list-tile-title",[e._v("\n        "+e._s(t.text)+"\n      ")])],1)],1)]})],2)],1),i("v-toolbar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,color:"blue darken-3",dark:"",app:"",fixed:""}},[i("v-toolbar-title",{staticClass:"ml-0",staticStyle:{width:"300px"}},[i("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),i("span",{staticClass:"hidden-sm-and-down"},[e._v("Media Manager")])],1),i("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"search",label:"Search"}}),i("v-spacer"),i("v-badge",{attrs:{color:"cyan",left:"",overlap:""}},[i("span",{attrs:{slot:"badge"},slot:"badge"},[e._v("6")]),i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{large:""}},[e._v("notifications")])],1)],1),i("v-btn",{attrs:{icon:"",large:""}},[i("v-avatar",{attrs:{size:"32px",tile:""}},[i("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/logo.svg",alt:"Media Manager"}})])],1)],1),i("media-settings",{attrs:{dialog:e.dialogSettings}})],1)},_t=[],gt={name:"media-navbar",data:function(){return{dialog:!1,drawer:null,loading:null,dialogSettings:null,items:[{icon:"folder",text:"New Folder",link:"newFolder"},{icon:"history",text:"Frequently contacted",link:"about"},{icon:"content_copy",text:"Duplicates",link:"about"},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Labels",model:!0,link:"about",children:[{icon:"add",text:"Create label"}]},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"More",model:!1,children:[{text:"Import"},{text:"Export"},{text:"Print"},{text:"Undo changes"},{text:"Other contacts"}]},{icon:"settings",text:"Settings",link:"settings"},{icon:"chat_bubble",text:"Send feedback",link:"about"},{icon:"help",text:"Help",link:"about"},{icon:"phonelink",text:"App downloads",link:"about"},{icon:"keyboard",text:"Go to the old version",link:"about"}]}},props:{source:String},components:{},mounted:function(){},methods:{newFolder:function(e){this.$store.commit(H),this.$store.commit(y),console.log(e)},settings:function(e){this.$store.commit(Z),console.log(e)},fire:function(e){this[e](e)}}},bt=gt,wt=(i("ecfb"),Object(r["a"])(bt,pt,_t,!1,null,null,null));wt.options.__file="NavBar.vue";var kt=wt.exports,St=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"media-online"}},[i("v-dialog",{attrs:{persistent:"",width:"300px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1)},xt=[],Ot={name:"media-online",props:{},data:function(){return{dialog:!1}},mounted:function(){var e=this;window.addEventListener("load",function(){window.addEventListener("online",e.updateOnlineStatus),window.addEventListener("offline",e.updateOnlineStatus)})},beforeDestroy:function(){window.removeEventListener("online",this.updateOnlineStatus),window.removeEventListener("offline",this.updateOnlineStatus)},methods:{updateOnlineStatus:function(){var e=navigator.onLine||!1;1==e?(this.$store.commit(K,"You are online."),this.dialog=!1):(this.$store.commit(K,"You are offline. Some functionality may be unavaliable."),this.dialog=!0)}}},Mt=Ot,Et=(i("e6f6"),Object(r["a"])(Mt,St,xt,!1,null,null,null));Et.options.__file="OnlineState.vue";var yt,Ct,Dt=Et.exports,$t={},jt=Object(r["a"])($t,yt,Ct,!1,null,null,null);jt.options.__file="ProgressBar.vue";var It=jt.exports,Ft=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"media-tool"}},[i("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"purple",dark:"",fixed:""},on:{click:function(t){e.showToolModal()}}},[i("v-icon",[e._v("add")])],1),i("v-dialog",{attrs:{persistent:"",width:"800px"},model:{value:this.$store.state.showToolModal,callback:function(t){e.$set(this.$store.state,"showToolModal",t)},expression:"this.$store.state.showToolModal"}},[i("v-card",[i("v-card-title",{staticClass:"grey lighten-4 py-4 title"},[e._v(" Upload")]),i("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}}),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error"},on:{click:function(t){e.hideToolModal()}}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"success"},on:{click:function(t){e.hideToolModal()}}},[e._v("Done")])],1)],1)],1)],1)},Tt=[],Rt={name:"media-tool",data:function(){return{dialog:!1}},methods:{hideToolModal:function(){this.$store.commit(z)},showToolModal:function(){this.$store.commit(X)}}},Lt=Rt,At=Object(r["a"])(Lt,Ft,Tt,!1,null,null,null);At.options.__file="ToolModel.vue";var Nt=At.exports,Ht=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"media-rename"}},[i("v-dialog",{attrs:{persistent:"",width:"500px"},model:{value:this.$store.state.showRenameModal,callback:function(t){e.$set(this.$store.state,"showRenameModal",t)},expression:"this.$store.state.showRenameModal"}},[i("v-card",[i("v-card-title",{staticClass:"grey lighten-4 title"},[e._v("\n        Rename\n        "),i("v-spacer"),i("v-icon",[e._v("folder")])],1),i("v-container",[i("v-flex",[i("v-text-field",{attrs:{solo:"",autofocus:"",label:"Folder name"},on:{focus:function(e){e.target.select()}},model:{value:e.defaultData,callback:function(t){e.defaultData=t},expression:"defaultData"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error"},on:{click:function(t){e.hideRenameModal()}}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"success"}},[e._v("Ok")])],1)],1)],1)],1)},Pt=[],Ut={name:"media-rename",data:function(){return{defaultData:"Untitled Folder"}},props:{},methods:{hideRenameModal:function(){this.$store.commit(le)}}},Bt=Ut,Wt=(i("845f"),Object(r["a"])(Bt,Ht,Pt,!1,null,null,null));Wt.options.__file="RenameModel.vue";var Vt=Wt.exports,Yt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"media-settings"}},[i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:this.$store.state.showSettings,callback:function(t){e.$set(this.$store.state,"showSettings",t)},expression:"this.$store.state.showSettings"}},[i("v-card",{attrs:{tile:""}},[i("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.hideSettings()}}},[i("v-icon",[e._v("close")])],1),i("v-toolbar-title",[e._v("Settings")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.hideSettings()}}},[e._v("Save")])],1),i("v-menu",{attrs:{bottom:"",right:"","offset-y":""}},[i("v-btn",{attrs:{slot:"activator",dark:"",icon:""},slot:"activator"},[i("v-icon",[e._v("more_vert")])],1),i("v-list",e._l(e.items,function(t,o){return i("v-list-tile",{key:o,on:{click:function(e){}}},[i("v-list-tile-title",[e._v(e._s(t.title))])],1)}))],1)],1),i("v-card-text",[i("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){e.dialog2=!e.dialog2}}},[e._v("Open Dialog 2")]),i("v-tooltip",{attrs:{right:""}},[i("v-btn",{attrs:{slot:"activator"},slot:"activator"},[e._v("Tool Tip Activator")]),e._v("\n            Tool Tip\n          ")],1),i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[e._v("User Controls")]),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[e._v("Content filtering")]),i("v-list-tile-sub-title",[e._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[e._v("Password")]),i("v-list-tile-sub-title",[e._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[e._v("General")]),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-action",[i("v-checkbox",{model:{value:e.notifications,callback:function(t){e.notifications=t},expression:"notifications"}})],1),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Notifications")]),i("v-list-tile-sub-title",[e._v("Notify me about updates to apps or games that I downloaded")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-action",[i("v-checkbox",{model:{value:e.sound,callback:function(t){e.sound=t},expression:"sound"}})],1),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Sound")]),i("v-list-tile-sub-title",[e._v("Auto-update apps at any time. Data charges may apply")])],1)],1),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-action",[i("v-checkbox",{model:{value:e.widgets,callback:function(t){e.widgets=t},expression:"widgets"}})],1),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Auto-add widgets")]),i("v-list-tile-sub-title",[e._v("Automatically add home screen widgets")])],1)],1)],1)],1),i("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[i("v-card",[i("v-card-title",[e._v("\n          Dialog 2\n        ")]),i("v-card-text",[i("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){e.dialog3=!e.dialog3}}},[e._v("Open Dialog 3")]),i("v-select",{attrs:{items:e.select,label:"A Select List","item-value":"text"}})],1),i("v-card-actions",[i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){e.dialog2=!1}}},[e._v("Close")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog3,callback:function(t){e.dialog3=t},expression:"dialog3"}},[i("v-card",[i("v-card-title",[i("span",[e._v("Dialog 3")]),i("v-spacer"),i("v-menu",{attrs:{bottom:"",left:""}},[i("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[i("v-icon",[e._v("more_vert")])],1),i("v-list",e._l(e.items,function(t,o){return i("v-list-tile",{key:o,on:{click:function(e){}}},[i("v-list-tile-title",[e._v(e._s(t.title))])],1)}))],1)],1),i("v-card-actions",[i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){e.dialog3=!1}}},[e._v("Close")])],1)],1)],1)],1)],1)},Gt=[],Xt={name:"media-settings",data:function(){return{dialog2:!1,dialog3:!1,notifications:!1,sound:!0,widgets:!1,items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}],select:[{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}]}},props:{},methods:{hideSettings:function(){this.$store.commit(ee)}}},zt=Xt,qt=Object(r["a"])(zt,Yt,Gt,!1,null,null,null);qt.options.__file="Settings.vue";var Jt=qt.exports;i("bf40");n["default"].use(f.a),n["default"].component("media-alert",ke),n["default"].component("media-file",Ke),n["default"].component("media-folder",ct),n["default"].component("media-online-state",Dt),n["default"].component("media-progress-bar",It),n["default"].component("media-content",Fe),n["default"].component("media-nav-bar",kt),n["default"].component("media-infrobar",Ye),n["default"].component("media-tool-model",Nt),n["default"].component("media-confirm-delete-model",ye),n["default"].component("media-create-folder-model",He),n["default"].component("media-rename-model",Vt),n["default"].component("media-settings",Jt),n["default"].component("media-file-menu",ot),n["default"].component("media-folder-menu",ht),n["default"].config.productionTip=!1,new n["default"]({router:k,store:ve,render:function(e){return e(d)}}).$mount("#app")},"5c48":function(e,t,i){},"63e0":function(e,t){},"7c55":function(e,t,i){"use strict";var o=i("5c48"),n=i.n(o);n.a},"7d9e":function(e,t,i){},"845f":function(e,t,i){"use strict";var o=i("7d9e"),n=i.n(o);n.a},8965:function(e,t,i){},"91e5":function(e,t,i){},"93a5":function(e,t,i){"use strict";var o=i("91e5"),n=i.n(o);n.a},db31:function(e,t,i){},e6f6:function(e,t,i){"use strict";var o=i("8965"),n=i.n(o);n.a},e7f3:function(e,t,i){},ea2f:function(e,t,i){"use strict";var o=i("0252"),n=i.n(o);n.a},ecfb:function(e,t,i){"use strict";var o=i("0cc6"),n=i.n(o);n.a},f44f:function(e,t,i){}});
//# sourceMappingURL=app.53c6f458.js.map