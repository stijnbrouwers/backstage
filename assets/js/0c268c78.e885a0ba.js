/*! For license information please see 0c268c78.e885a0ba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[176992],{150842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var r=t(824246),o=t(511151);const u={id:"frontend-plugin-api.signinpageblueprint",title:"SignInPageBlueprint",description:"API reference for SignInPageBlueprint"},i=void 0,a={id:"reference/frontend-plugin-api.signinpageblueprint",title:"SignInPageBlueprint",description:"API reference for SignInPageBlueprint",source:"@site/../docs/reference/frontend-plugin-api.signinpageblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.signinpageblueprint",permalink:"/docs/reference/frontend-plugin-api.signinpageblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.signinpageblueprint.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.signinpageblueprint",title:"SignInPageBlueprint",description:"API reference for SignInPageBlueprint"}},c={},s=[];function f(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.signinpageblueprint",children:(0,r.jsx)(n.code,{children:"SignInPageBlueprint"})})]}),"\n",(0,r.jsx)(n.p,{children:"Creates an extension that replaces the sign in page."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'SignInPageBlueprint: import("../wiring").ExtensionBlueprint<{\n    kind: "sign-in-page";\n    namespace: undefined;\n    name: undefined;\n}, {\n    loader: () => Promise<ComponentType<SignInPageProps>>;\n}, import("../wiring").ConfigurableExtensionDataRef<React.ComponentType<SignInPageProps>, "core.sign-in-page.component", {}>, {}, {}, {}, {\n    component: import("../wiring").ConfigurableExtensionDataRef<React.ComponentType<SignInPageProps>, "core.sign-in-page.component", {}>;\n}>\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,u={},s=null,f=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:a.current}}n.Fragment=u,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function h(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function _(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var v=b.prototype=new _;v.constructor=b,g(v,h.prototype),v.isPureReactComponent=!0;var S=Array.isArray,k=Object.prototype.hasOwnProperty,x={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,r){var o,u={},i=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(i=""+n.key),n)k.call(n,o)&&!P.hasOwnProperty(o)&&(u[o]=n[o]);var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){for(var s=Array(c),f=0;f<c;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:t,type:e,key:i,ref:a,props:u,_owner:x.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,o,u,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return i=i(c=e),e=""===u?"."+C(c,0):u,S(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),R(i,n,o,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),n.push(i)),1;if(c=0,u=""===u?".":u+":",S(e))for(var s=0;s<e.length;s++){var f=u+C(a=e[s],s);c+=R(a,n,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)c+=R(a=a.value,n,o,f=u+C(a,s++),i);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function $(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},B={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:x};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=h,n.Fragment=o,n.Profiler=i,n.PureComponent=b,n.StrictMode=u,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,a=x.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in n)k.call(n,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==c?c[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:t,type:e.type,key:u,ref:i,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=j,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(667294);const o={},u=r.createContext(o);function i(e){const n=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);