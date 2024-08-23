/*! For license information please see 52d9ee3a.834a1a4c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[458030],{229184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(824246),o=n(511151);const i={id:"consuming",title:"Consuming Utility APIs",sidebar_label:"Consuming APIs",description:"Consuming utility APIs"},s=void 0,a={id:"frontend-system/utility-apis/consuming",title:"Consuming Utility APIs",description:"Consuming utility APIs",source:"@site/../docs/frontend-system/utility-apis/03-consuming.md",sourceDirName:"frontend-system/utility-apis",slug:"/frontend-system/utility-apis/consuming",permalink:"/docs/frontend-system/utility-apis/consuming",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/utility-apis/03-consuming.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"consuming",title:"Consuming Utility APIs",sidebar_label:"Consuming APIs",description:"Consuming utility APIs"},sidebar:"docs",previous:{title:"Creating APIs",permalink:"/docs/frontend-system/utility-apis/creating"},next:{title:"Configuring",permalink:"/docs/frontend-system/utility-apis/configuring"}},u={},c=[{value:"Via React hooks",id:"via-react-hooks",level:2},{value:"Via dependencies",id:"via-dependencies",level:2}];function l(e){const t={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"All of the utility API extensions that were passed into your app through installed plugins, get instantiated and configured in the right order by the framework, and are then made available for consumption. You can interact with these instances in the following ways."}),"\n",(0,r.jsx)(t.h2,{id:"via-react-hooks",children:"Via React hooks"}),"\n",(0,r.jsxs)(t.p,{children:["The most common consumption pattern for utility APIs is to call the ",(0,r.jsx)(t.code,{children:"useApi"})," hook inside React components to get an implementation via its API ref. This applies whether it was originally provided from the core framework or from a plugin."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useApi, configApiRef } from '@backstage/frontend-plugin-api';\n\nconst MyComponent = () => {\n  const configApi = useApi(configApiRef);\n  const title = configApi.getString('app.title');\n  // ...\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"useApi"})," hook always returns a value, or throws an exception if the API ref could not be resolved to a registered implementation. For advanced use cases, where you explicitly want to optionally request a utility API that may or may not have been provided at runtime, you can use the underlying ",(0,r.jsx)(t.code,{children:"useApiHolder"})," hook instead."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useApiHolder, configApiRef } from '@backstage/frontend-plugin-api';\n\nconst MyComponent = () => {\n  const apis = useApiHolder();\n  const configApi = apis.get(configApiRef); // may return undefined\n  if (configApi) {\n    const title = configApi.getString('app.title');\n    // ...\n  }\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"via-dependencies",children:"Via dependencies"}),"\n",(0,r.jsxs)(t.p,{children:["Your utility APIs can depend on other utility APIs in their factories. You do this by declaring ",(0,r.jsx)(t.code,{children:"deps"})," on your ",(0,r.jsx)(t.code,{children:"createApiFactory"}),", and reading the outcome in your ",(0,r.jsx)(t.code,{children:"factory"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import {\n  configApiRef,\n  ApiBlueprint,\n  createApiFactory,\n  discoveryApiRef,\n} from '@backstage/frontend-plugin-api';\nimport { MyApiImpl } from './MyApiImpl';\n\nconst myApi = ApiBlueprint.make({\n  params: {\n    factory: createApiFactory({\n      api: myApiRef,\n      deps: {\n        configApi: configApiRef,\n        discoveryApi: discoveryApiRef,\n      },\n      factory: ({ configApi, discoveryApi }) => {\n        return new MyApiImpl({ configApi, discoveryApi });\n      },\n    }),\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note how the ",(0,r.jsx)(t.code,{children:"deps"})," section essentially assigns free-form names that you choose, to API refs. Here we for example map ",(0,r.jsx)(t.code,{children:"configApiRef"})," to the name ",(0,r.jsx)(t.code,{children:"configApi"}),", but that's just a convention. The framework will ensure that all of those deps get instantiated and passed into your ",(0,r.jsx)(t.code,{children:"factory"})," function with the same set of names as your ",(0,r.jsx)(t.code,{children:"deps"}),". At that point, ",(0,r.jsx)(t.code,{children:"configApi"})," refers to an actual functioning instance of that API ref."]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var _=b.prototype=new v;_.constructor=b,m(_,g.prototype),_.isPureReactComponent=!0;var A=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===i?"."+C(u,0):i,A(s)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),P(s,t,o,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(u=0,i=""===i?".":i+":",A(e))for(var c=0;c<e.length;c++){var l=i+C(a=e[c],c);u+=P(a,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=P(a=a.value,t,o,l=i+C(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function I(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},O={transition:null},T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)x.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(667294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);