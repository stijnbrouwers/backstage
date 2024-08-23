/*! For license information please see 34b3c40f.fff05c3c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[814984],{942809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(824246),s=t(511151);const c={id:"naming-patterns",title:"Backend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the backend system"},i=void 0,o={id:"backend-system/architecture/naming-patterns",title:"Backend System Naming Patterns",description:"Naming patterns in the backend system",source:"@site/../docs/backend-system/architecture/08-naming-patterns.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/naming-patterns",permalink:"/docs/backend-system/architecture/naming-patterns",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/08-naming-patterns.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"naming-patterns",title:"Backend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the backend system"},sidebar:"docs",previous:{title:"Feature Loaders",permalink:"/docs/backend-system/architecture/feature-loaders"},next:{title:"Overview",permalink:"/docs/backend-system/building-backends/index"}},a={},l=[{value:"Plugins",id:"plugins",level:3},{value:"Modules",id:"modules",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Services",id:"services",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"These are the naming patterns to adhere to within the backend system. They help us keep exports consistent across packages and make it easier to understand the usage and intent of exports."}),"\n",(0,r.jsx)(n.p,{children:"As a rule, all names should be camel case, with the exceptions of plugin and module IDs, which should be kebab case."}),"\n",(0,r.jsx)(n.h3,{id:"plugins",children:"Plugins"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Pattern"}),(0,r.jsx)(n.th,{children:"Examples"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"export"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<camelId>Plugin"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"catalogPlugin"}),", ",(0,r.jsx)(n.code,{children:"userSettingsPlugin"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'<kebab-id>'"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"'catalog'"}),", ",(0,r.jsx)(n.code,{children:"'user-settings'"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const userSettingsPlugin = createBackendPlugin({\n  pluginId: 'user-settings',\n  ...\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"modules",children:"Modules"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Pattern"}),(0,r.jsx)(n.th,{children:"Examples"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"export"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<pluginId>Module<ModuleId>"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"catalogModuleGithubEntityProvider"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'<module-id>'"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'github-entity-provider'"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const catalogModuleGithubEntityProvider = createBackendModule({\n  pluginId: 'catalog',\n  moduleId: 'github-entity-provider',\n  ...\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"extensions",children:"Extensions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Pattern"}),(0,r.jsx)(n.th,{children:"Examples"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Interface"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<PluginId><Name>ExtensionPoint"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CatalogProcessingExtensionPoint"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Reference"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<pluginId><Name>ExtensionPoint"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"catalogProcessingExtensionPoint"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'<pluginId>.<name>'"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"'catalog.processing'"}),", ",(0,r.jsx)(n.code,{children:"'foo.barBaz'"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface CatalogProcessingExtensionPoint {\n  ...\n}\n\nexport const catalogProcessingExtensionPoint = createExtensionPoint<CatalogProcessingExtensionPoint>({\n  id: 'catalog.processing',\n  ...\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"services",children:"Services"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Pattern"}),(0,r.jsx)(n.th,{children:"Examples"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Interface"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<Name>Service"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"LoggerService"}),", ",(0,r.jsx)(n.code,{children:"DatabaseService"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Reference"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<name>ServiceRef"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"loggerServiceRef"}),", ",(0,r.jsx)(n.code,{children:"databaseServiceRef"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<pluginId>.<name>"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"'core.rootHttpRouter'"}),", ",(0,r.jsx)(n.code,{children:"'catalog.catalogClient'"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Factory"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<name>ServiceFactory"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"loggerServiceFactory"}),", ",(0,r.jsx)(n.code,{children:"databaseServiceFactory"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface CatalogClientService {\n  ...\n}\n\nexport const catalogClientServiceRef = createServiceRef<CatalogClientService>({\n  id: 'catalog.catalogClient',\n  ...\n})\n\nexport const catalogClientServiceFactory = createServiceFactory({\n  service: catalogClientServiceRef,\n  ...\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["An exception to the above service reference naming pattern has been made for all of the core services in the core API. The ",(0,r.jsx)(n.code,{children:"@backstage/backend-plugin-api"})," makes all core service references available via a single ",(0,r.jsx)(n.code,{children:"coreServices"})," collection. Likewise, the ",(0,r.jsx)(n.code,{children:"@backstage/backend-test-utils"})," exports all mock service implementations via a single ",(0,r.jsx)(n.code,{children:"mockServices"})," collection. This means that the table above is slightly misleading, since ",(0,r.jsx)(n.code,{children:"loggerServiceRef"})," and ",(0,r.jsx)(n.code,{children:"databaseServiceRef"})," are instead available as ",(0,r.jsx)(n.code,{children:"coreServices.logger"})," and ",(0,r.jsx)(n.code,{children:"coreService.database"}),". We recommend that plugins avoid this patterns unless they have a very large number of services that they need to export."]}),"\n",(0,r.jsxs)(n.p,{children:["While it is often preferred to prefix root scoped services with ",(0,r.jsx)(n.code,{children:"Root"}),", it is not required. For example, ",(0,r.jsx)(n.code,{children:"RootHttpRouterService"})," and ",(0,r.jsx)(n.code,{children:"RootLifecycleService"})," follow this pattern, but ",(0,r.jsx)(n.code,{children:"ConfigService"})," doesn't and it is a root scoped service."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var r=t(827378),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,c={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:d,props:c,_owner:o.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function m(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||p}function y(){}function g(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=g.prototype=new y;v.constructor=g,x(v,m.prototype),v.isPureReactComponent=!0;var b=Array.isArray,S=Object.prototype.hasOwnProperty,_={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,r){var s,c={},i=null,o=null;if(null!=n)for(s in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(i=""+n.key),n)S.call(n,s)&&!k.hasOwnProperty(s)&&(c[s]=n[s]);var a=arguments.length-2;if(1===a)c.children=r;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];c.children=l}if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===c[s]&&(c[s]=a[s]);return{$$typeof:t,type:e,key:i,ref:o,props:c,_owner:_.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,s,c,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case r:a=!0}}if(a)return i=i(a=e),e=""===c?"."+C(a,0):c,b(i)?(s="",null!=e&&(s=e.replace(R,"$&/")+"/"),w(i,n,s,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,s+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),n.push(i)),1;if(a=0,c=""===c?".":c+":",b(e))for(var l=0;l<e.length;l++){var d=c+C(o=e[l],l);a+=w(o,n,s,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(o=e.next()).done;)a+=w(o=o.value,n,s,d=c+C(o,l++),i);else if("object"===o)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function I(e,n,t){if(null==e)return e;var r=[],s=0;return w(e,r,"","",(function(e){return n.call(t,e,s++)})),r}function $(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},O={transition:null},D={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:O,ReactCurrentOwner:_};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=s,n.Profiler=i,n.PureComponent=g,n.StrictMode=c,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=x({},e.props),c=e.key,i=e.ref,o=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,o=_.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)S.call(n,l)&&!k.hasOwnProperty(l)&&(s[l]=void 0===n[l]&&void 0!==a?a[l]:n[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];s.children=a}return{$$typeof:t,type:e.type,key:c,ref:i,props:s,_owner:o}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=O.transition;O.transition={};try{e()}finally{O.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return N.current.useCallback(e,n)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,n){return N.current.useEffect(e,n)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,n,t){return N.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return N.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return N.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return N.current.useMemo(e,n)},n.useReducer=function(e,n,t){return N.current.useReducer(e,n,t)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return N.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return N.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(667294);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);