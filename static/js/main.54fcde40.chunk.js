(this["webpackJsonpsubscription-management"]=this["webpackJsonpsubscription-management"]||[]).push([[20],{127:function(e,t,n){},181:function(e,t,n){e.exports=n(68)},214:function(e,t,n){var o={"./":[68,9],"./App":[69,9],"./App.test":[170,9,3,11],"./App.test.tsx":[170,9,3,11],"./App.tsx":[69,9],"./Boot":[87,9],"./Boot.ts":[87,9],"./Components/AppDialog":[81,9],"./Components/AppDialog.tsx":[81,9],"./Components/ToastMessage":[83,9],"./Components/ToastMessage.tsx":[83,9],"./Components/Typo":[159,9,9],"./Components/Typo.tsx":[159,9,9],"./Config":[55,9],"./Config.ts":[55,9],"./Contexts":[48,9],"./Contexts/":[48,9],"./Contexts/AppDialogContext":[43,9],"./Contexts/AppDialogContext/":[43,9],"./Contexts/AppDialogContext/index":[43,9],"./Contexts/AppDialogContext/index.tsx":[43,9],"./Contexts/AppToastContext":[39,9],"./Contexts/AppToastContext/":[39,9],"./Contexts/AppToastContext/index":[39,9],"./Contexts/AppToastContext/index.tsx":[39,9],"./Contexts/index":[48,9],"./Contexts/index.tsx":[48,9],"./Hooks/useAsyncTask":[171,9,0,12],"./Hooks/useAsyncTask.tsx":[171,9,0,12],"./Hooks/useConfirmationDialog":[176,9,0,6],"./Hooks/useConfirmationDialog.tsx":[176,9,0,6],"./Hooks/useMediaQuery":[160,9,0,10],"./Hooks/useMediaQuery.ts":[160,9,0,10],"./Hooks/useToastMessage":[162,9,0,13],"./Hooks/useToastMessage.ts":[162,9,0,13],"./Routes/AppNavigation":[84,9],"./Routes/AppNavigation.tsx":[84,9],"./Screens/Home/NavigationMenu":[163,9,0,5],"./Screens/Home/NavigationMenu.tsx":[163,9,0,5],"./Screens/Home/SpotifyGetPlaylists":[164,9,14],"./Screens/Home/SpotifyGetPlaylists.jsx":[164,9,14],"./Screens/Home/SpotifySubscription":[165,9,7],"./Screens/Home/SpotifySubscription.jsx":[165,9,7],"./Screens/Home/WebApp":[166,9,15],"./Screens/Home/WebApp.tsx":[166,9,15],"./Screens/Landing":[99,9,0,2,1],"./Screens/Landing/":[99,9,0,2,1],"./Screens/Landing/index":[99,9,0,2,1],"./Screens/Landing/index.tsx":[99,9,0,2,1],"./Screens/Page404":[85,9],"./Screens/Page404.tsx":[85,9],"./Screens/RootLayout":[80,9],"./Screens/RootLayout.tsx":[80,9],"./Stores":[52,9],"./Stores/":[52,9],"./Stores/App":[53,9],"./Stores/App/":[53,9],"./Stores/App/index":[53,9],"./Stores/App/index.ts":[53,9],"./Stores/index":[52,9],"./Stores/index.ts":[52,9],"./Theme":[47,9],"./Theme/":[47,9],"./Theme/index":[47,9],"./Theme/index.ts":[47,9],"./Theme/themeConstants":[58,9],"./Theme/themeConstants.ts":[58,9],"./Utils":[50,9],"./Utils/":[50,9],"./Utils/helpers":[175,9,0,16],"./Utils/helpers.ts":[175,9,0,16],"./Utils/index":[50,9],"./Utils/index.ts":[50,9],"./index":[68,9],"./index.css":[127,7],"./index.tsx":[68,9],"./lazy-import":[86,9],"./lazy-import.ts":[86,9],"./logo.svg":[253,7,23],"./modelsGenerator":[172,9,8],"./modelsGenerator.js":[172,9,8],"./react-app-env.d":[173,7,17],"./react-app-env.d.ts":[173,7,17],"./serviceWorker":[88,9],"./serviceWorker.ts":[88,9],"./setupTests":[174,9,4,18],"./setupTests.ts":[174,9,4,18],"./swagger":[167,3,19],"./swagger.json":[167,3,19]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(a,t[1])}))}a.keys=function(){return Object.keys(o)},a.id=214,e.exports=a},39:function(e,t,n){"use strict";n.r(t),n.d(t,"AppToastContext",(function(){return c})),n.d(t,"useAppToast",(function(){return l}));var o=n(17),a=n(64),r=n(0),s=n.n(r),i=n(83),c=s.a.createContext({open:!1,message:"",variant:"success",showToast:function(e,t){},hideToast:function(){}}),l=function(e){var t=Object(r.useState)(Object(o.a)({open:!1,message:""},e)),n=Object(a.a)(t,2),s=n[0],i=n[1];return{showToast:function(e,t){i(Object(o.a)(Object(o.a)({},s),{},{message:e,open:!0},t))},hideToast:function(){i(Object(o.a)(Object(o.a)({},s),{},{open:!1,message:""}))},message:s.message||"",open:s.open,variant:s.variant||"success"}};t.default=function(e){var t=l({open:!1}),n=t.showToast,o=t.hideToast,a=t.message,r=t.open,u=t.variant,f=e.children;return s.a.createElement(c.Provider,{value:{message:a,open:r,showToast:n,hideToast:o,variant:u}},f,s.a.createElement(i.ToastMessage,{ContentProps:{style:{fontSize:16}},autoHideDuration:6e3,message:a,open:r,variant:u,onClose:o}))}},43:function(e,t,n){"use strict";n.r(t),n.d(t,"AppDialogContext",(function(){return u})),n.d(t,"useAppDialog",(function(){return f})),n.d(t,"AppDialogProvider",(function(){return d}));var o=n(29),a=n(17),r=n(64),s=n(81),i=n(0),c=n.n(i),l=["content","title","showDialog","hideDialog","open"],u=c.a.createContext({open:!1,title:"",content:null,showDialog:function(e,t){},hideDialog:function(){}}),f=function(e){var t=Object(i.useState)(e),n=Object(r.a)(t,2),o=n[0],s=n[1];return Object(a.a)(Object(a.a)({},o),{},{showDialog:function(e,t){s(Object(a.a)(Object(a.a)({},o),{},{open:!0,content:e},t))},hideDialog:function(){s(Object(a.a)(Object(a.a)({},o),{},{open:!1}))}})},d=function(e){var t=f({handleClose:function(){},title:"",open:!1}),n=t.content,a=t.title,r=void 0===a?"":a,i=t.showDialog,d=t.hideDialog,p=t.open,m=Object(o.a)(t,l),g=e.children;return c.a.createElement(u.Provider,{value:{title:r,content:n,showDialog:i,hideDialog:d,open:p}},g,c.a.createElement(s.AppDialog,Object.assign({},m,{open:p,title:r,handleClose:d}),n))};t.default=d},47:function(e,t,n){"use strict";n.r(t);var o=n(29),a=n(111),r=n(58),s=(r.THEME_PALETTE.others,Object(o.a)(r.THEME_PALETTE,["others"]));t.default=Object(a.a)({palette:s,typography:{h1:{fontSize:96},h2:{fontSize:60},h3:{fontSize:48},h4:{fontSize:34},h5:{fontSize:24},h6:{fontSize:20},subtitle1:{fontSize:16},subtitle2:{fontSize:14},body1:{fontSize:16},body2:{fontSize:14},caption:{fontSize:12},overline:{fontSize:10}},overrides:{}})},48:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(43),s=n(39);t.default=function(e){var t=e.children;return a.a.createElement(r.default,null,a.a.createElement(s.default,null,t))}},50:function(e,t,n){"use strict";n.r(t),n.d(t,"request",(function(){return c}));var o=n(97),a=n.n(o),r=n(115),s=n(51),i=n.n(s),c=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o.length>1&&void 0!==o[1])||o[1],i.a.defaults.baseURL){e.next=3;break}throw new Error("Error: Base Url is not provided");case 3:return e.next=5,i.a.request(t);case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={setBaseAPI_URL:function(e){i.a.defaults.baseURL=e},setHeader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Content-Type",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"application/json";i.a.defaults.headers.post[e]=t},setAuthHeader:function(e){i.a.defaults.headers.common.Authorization=e},throwError:function(e){throw console.log("Error",e.response),e}};t.default=l},52:function(e,t,n){"use strict";n.r(t),n.d(t,"useStoreActions",(function(){return s})),n.d(t,"useStoreDispatch",(function(){return i})),n.d(t,"useStoreState",(function(){return c}));var o=n(63),a={App:n(53).default},r=Object(o.c)(),s=r.useStoreActions,i=r.useStoreDispatch,c=r.useStoreState;t.default=Object(o.b)(a,{})},53:function(e,t,n){"use strict";n.r(t);t.default={}},55:function(e,t,n){"use strict";n.r(t);var o={get:function(e){return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})["REACT_APP_"+e]}};t.default=o},58:function(e,t,n){"use strict";n.r(t),n.d(t,"THEME_PALETTE",(function(){return o})),n.d(t,"GRADIENTS",(function(){return a}));var o={grey:{100:"#262626",200:"#4D4D4D",300:"#808080",400:"#D9D9D9",500:"#474747",600:"#707070",700:"#E5E8F2",800:"#363535",900:"#333333"},text:{primary:"#333333",secondary:"#333333"},background:{default:"#F5F5F5",paper:"#fff"},common:{black:"#000",white:"#fff"},action:{active:"#000"},error:{main:"#B71840"},others:{},primary:{main:"#6844B0",contrastText:"#FFFFFF"},secondary:{main:"#F9B80C",contrastText:"#FFFFFF"},success:{main:"#4caf50"},warning:{main:"#ff9800"},info:{main:"#2196f3"}},a=[]},68:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(14),s=n.n(r),i=(n(127),n(69)),c=n(52),l=n(63),u=n(88);s.a.render(a.a.createElement(l.a,{store:c.default},a.a.createElement(i.default,null)),document.getElementById("root")),u.unregister()},69:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(98),s=n(246),i=n(47),c=n(80),l=n(87);t.default=function(){return Object(l.default)().then((function(){})),a.a.createElement(r.a,null,a.a.createElement(s.a,{theme:i.default},a.a.createElement(c.default,null)))}},80:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(48),s=n(84),i=function(){return a.a.createElement("div",null,a.a.createElement(s.default,null))};t.default=function(){return a.a.createElement(r.default,null,a.a.createElement(i,null))}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"DialogTitle",(function(){return x})),n.d(t,"AppDialog",(function(){return S}));var o=n(29),a=n(0),r=n.n(a),s=n(154),i=n(248),c=n(146),l=n.n(c),u=n(239),f=n(247),d=n(243),p=n(153),m=n(94),g=n.n(m),h=n(112),v=n(244),C=n(4),b=["title","headerProps","handleClose","children","maxWidth","contentProps","isActionCloseButton","closeButtonText","actionsChildren","actionsProps"],x=function(e){var t=T(),n=e.children,o=e.headerContent,a=e.headerClasses,s=e.closeButtonClasses,i=e.isCloseButton,c=void 0===i||i,l=e.onClose;return r.a.createElement(u.a,{disableTypography:!0,className:Object(C.default)(t.root,a)},o||r.a.createElement(h.a,{variant:"h6"},n),c?r.a.createElement(p.a,{"aria-label":"close",className:Object(C.default)(t.closeButton,s),onClick:l},r.a.createElement(g.a,null)):null)},E=function(e){var t=e.isCloseButton,n=e.closeButtonText,o=e.actionsChildren,a=e.onClose,s=e.closeButtonClasses,i=e.rootClasses;return r.a.createElement(d.a,{className:Object(C.default)(i)},o&&o,t&&!o&&r.a.createElement(v.a,{color:"primary",onClick:function(){a&&a()},className:Object(C.default)(s)},n||"Close"))},S=function(e){var t=e.title,n=e.headerProps,a=e.handleClose,s=e.children,i=e.maxWidth,c=void 0===i?"sm":i,u=e.contentProps,d=e.isActionCloseButton,p=void 0===d||d,m=e.closeButtonText,g=e.actionsChildren,h=e.actionsProps,v=Object(o.a)(e,b),C=function(){a()};return r.a.createElement(l.a,Object.assign({onClose:C,fullWidth:!0,maxWidth:c},v),r.a.createElement(x,Object.assign({onClose:C},n),t),r.a.createElement(f.a,u,s),(p||g)&&r.a.createElement(E,Object.assign({},h,{isCloseButton:p,closeButtonText:m,actionsChildren:g,onClose:C})))},T=Object(s.a)((function(e){return Object(i.a)({root:{},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}));t.default=S},83:function(e,t,n){"use strict";n.r(t),n.d(t,"ToastInit",(function(){return A})),n.d(t,"ToastMessageContent",(function(){return j})),n.d(t,"ToastMessage",(function(){return w}));var o=n(29),a=n(17),r=n(0),s=n.n(r),i=n(154),c=n(251),l=n(249),u=n(147),f=n.n(u),d=n(149),p=n.n(d),m=n(150),g=n.n(m),h=n(148),v=n.n(h),C=n(94),b=n.n(C),x=n(153),E=n(4),S=["className","message","onClose","variantClassName"],T={success:f.a,warning:v.a,error:p.a,info:g.a},O={anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3},A=function(e){O=Object(a.a)(Object(a.a)({},O),e)},j=function(e){var t=y(),n=e.className,a=e.message,r=e.onClose,i=e.variantClassName,c=Object(o.a)(e,S),u=i?T[i]:"",f=i?t[i]:"";return s.a.createElement(l.a,Object.assign({className:Object(E.default)(f,n),"aria-describedby":"client-snackbar",message:s.a.createElement("span",{className:t.message},u&&s.a.createElement(u,{className:Object(E.default)(t.icon,t.iconVariant)}),a),action:[s.a.createElement(x.a,{key:"close","aria-label":"close",color:"inherit",onClick:r},s.a.createElement(b.a,{className:t.icon}))]},c))},w=function(e){var t=e.className,n=e.variant,o=e.TransitionComponent,r=e.autoHideDuration,i=e.anchorOrigin,l=e.open,u=e.onClose,f=Object(a.a)(Object(a.a)({},O),{},{TransitionComponent:o,autoHideDuration:r,anchorOrigin:i,open:l,onClose:u});return s.a.createElement(c.a,f,s.a.createElement(j,Object.assign({},e.ContentProps,{onClose:e.onClose,message:e.message,variantClassName:n,className:t})))},y=Object(i.a)((function(e){return{success:{backgroundColor:e.palette.success.main},error:{backgroundColor:e.palette.error.main},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:e.palette.warning.main},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}))},84:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(9),s=n(250),i=n(85),c=n(86),l=Object(c.default)("../Screens/Landing");t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Suspense,{fallback:a.a.createElement(s.a,null)},a.a.createElement(r.c,null,a.a.createElement(r.a,{path:"/SubscriptionManagementSolution/",exact:!0,component:l}),a.a.createElement(r.a,{path:"/*",exact:!0,component:i.default}))))}},85:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(112);t.default=function(){return a.a.createElement("div",null,a.a.createElement(r.a,{variant:"h2"},"404: Page Not Found"))}},86:function(e,t,n){"use strict";n.r(t);var o=n(0);t.default=function(e){var t=e.replace(/[^\w]*/,"");return Object(o.lazy)((function(){return n(214)("./".concat(t))}))}},87:function(e,t,n){"use strict";n.r(t);var o=n(55),a=n(50),r=["BASE_URL","API_URL"];t.default=function(){return new Promise((function(e,t){r.forEach((function(e){o.default.get(e)})),"false"===o.default.get("CONSOLE_LOGGING")&&(console.log=function(){});var n=o.default.get("API_URL");console.log("API url ",n),n&&a.default.setBaseAPI_URL(n),e(!0)}))}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return a})),n.d(t,"unregister",(function(){return s}));var o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(t,e)}))}}function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function s(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}}},[[181,21,22]]]);
//# sourceMappingURL=main.54fcde40.chunk.js.map