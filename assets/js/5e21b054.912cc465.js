/*! For license information please see 5e21b054.912cc465.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[81017],{180080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(824246),s=n(511151);const o={id:"v1.23.0",title:"v1.23.0",description:"Backstage Release v1.23.0"},a=void 0,i={id:"releases/v1.23.0",title:"v1.23.0",description:"Backstage Release v1.23.0",source:"@site/../docs/releases/v1.23.0.md",sourceDirName:"releases",slug:"/releases/v1.23.0",permalink:"/docs/releases/v1.23.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.23.0.md",tags:[],version:"current",frontMatter:{id:"v1.23.0",title:"v1.23.0",description:"Backstage Release v1.23.0"},sidebar:"releases",previous:{title:"v1.24.0",permalink:"/docs/releases/v1.24.0"},next:{title:"v1.22.0",permalink:"/docs/releases/v1.22.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Auth module migrations",id:"auth-module-migrations",level:3},{value:"Scaffolder",id:"scaffolder",level:3},{value:"New Module: <code>@backstage/plugin-scaffolder-backend-module-gitea</code>",id:"new-module-backstageplugin-scaffolder-backend-module-gitea",level:3},{value:"New Modules: <code>@backstage/plugin-scaffolder-backend-module-bitbucket-cloud</code> and <code>@backstage/plugin-scaffolder-backend-module-bitbucket-server</code>",id:"new-modules-backstageplugin-scaffolder-backend-module-bitbucket-cloud-and-backstageplugin-scaffolder-backend-module-bitbucket-server",level:3},{value:"New lint rule to forbid top-level MUI imports",id:"new-lint-rule-to-forbid-top-level-mui-imports",level:3},{value:"Automatic package <code>repository</code> fields",id:"automatic-package-repository-fields",level:3},{value:"Kubernetes cluster name uniqueness check",id:"kubernetes-cluster-name-uniqueness-check",level:3},{value:"Auth backend SAML provider dependency switch",id:"auth-backend-saml-provider-dependency-switch",level:3},{value:"Update repo-tools OpenAPI commands structure",id:"update-repo-tools-openapi-commands-structure",level:3},{value:"Gerrit integration now requires Gitiles",id:"gerrit-integration-now-requires-gitiles",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["These are the release notes for the v1.23.0 release of ",(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"auth-module-migrations",children:"Auth module migrations"}),"\n",(0,r.jsxs)(t.p,{children:["Several more auth providers have been migrated to be implemented as standalone modules, adding support for them in the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin",children:"new backend system"}),". The migrated providers are ",(0,r.jsx)(t.code,{children:"microsoft"}),", ",(0,r.jsx)(t.code,{children:"oidc"}),", and ",(0,r.jsx)(t.code,{children:"aws-alb"}),". If you detect any issues, please reach out on ",(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," or ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues",children:"open an issue"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"scaffolder",children:"Scaffolder"}),"\n",(0,r.jsxs)(t.p,{children:["We\u2019ve removed the last of the legacy exports from ",(0,r.jsx)(t.code,{children:"/alpha"}),". Please ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues",children:"open an issue"})," if there\u2019s a reason why you still need to use them."]}),"\n",(0,r.jsxs)(t.p,{children:["If you\u2019re using the New Backend System and the Scaffolder plugin, the built in modules have been trimmed down, so you\u2019ll need to install other modules in order to pull in additional actions. You can read more ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating#the-scaffolder-plugin",children:"in the migration guide"})]}),"\n",(0,r.jsxs)(t.h3,{id:"new-module-backstageplugin-scaffolder-backend-module-gitea",children:["New Module: ",(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-gitea"})]}),"\n",(0,r.jsxs)(t.p,{children:["Provides actions to the Scaffolder for creating repositories and pushing to Gitea. Thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/cmoulliard",children:"@cmoulliard"}),"!"]}),"\n",(0,r.jsxs)(t.h3,{id:"new-modules-backstageplugin-scaffolder-backend-module-bitbucket-cloud-and-backstageplugin-scaffolder-backend-module-bitbucket-server",children:["New Modules: ",(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-cloud"})," and ",(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-server"})]}),"\n",(0,r.jsxs)(t.p,{children:["Thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"}),"\u2019s work, we\u2019ve now broken apart the BitBucket module into two separate modules to provide different actions to support the different BitBucket offerings."]}),"\n",(0,r.jsxs)(t.p,{children:["This change also deprecates the original ",(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket"}),", so if you\u2019re using the new Backend System we encourage you to move towards using these new modules instead."]}),"\n",(0,r.jsx)(t.h3,{id:"new-lint-rule-to-forbid-top-level-mui-imports",children:"New lint rule to forbid top-level MUI imports"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@backstage/eslint-rules"})," package now provides the ",(0,r.jsx)(t.code,{children:"@backstage/no-top-level-material-ui-4-imports"})," rule that forbids imports such as ",(0,r.jsx)(t.code,{children:"import { Box } from '@material-ui/core'"}),". This rule is currently disabled by default and needs to be manually enabled in ",(0,r.jsx)(t.code,{children:".eslintrc.js"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"module.exports = require('@backstage/cli/config/eslint-factory')(__dirname, {\n  rules: {\n    '@backstage/no-top-level-material-ui-4-imports': 'error',\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"automatic-package-repository-fields",children:["Automatic package ",(0,r.jsx)(t.code,{children:"repository"})," fields"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"backstage-cli repo fix"})," command will now update the ",(0,r.jsx)(t.code,{children:"repository"})," fields in all workspace packages, as long as the root ",(0,r.jsx)(t.code,{children:"package.json"})," has the ",(0,r.jsx)(t.code,{children:"repository"})," field set."]}),"\n",(0,r.jsx)(t.h3,{id:"kubernetes-cluster-name-uniqueness-check",children:"Kubernetes cluster name uniqueness check"}),"\n",(0,r.jsx)(t.p,{children:"The Kubernetes plugin now enforces the policy of all configured clusters having unique names. The backend will now fail to start if that is not the case."}),"\n",(0,r.jsx)(t.h3,{id:"auth-backend-saml-provider-dependency-switch",children:"Auth backend SAML provider dependency switch"}),"\n",(0,r.jsxs)(t.p,{children:["The implementation of the SAML provider in the auth backend is now based on ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@node-saml/passport-saml",children:(0,r.jsx)(t.code,{children:"@node-saml/passport-saml"})})," instead of the deprecated ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/passport-saml",children:(0,r.jsx)(t.code,{children:"passport-saml"})})," package. This is a breaking change since the ",(0,r.jsx)(t.code,{children:"audience"})," configuration is now mandatory, and the ",(0,r.jsx)(t.code,{children:"wantAuthnResponseSigned"})," and ",(0,r.jsx)(t.code,{children:"wantAssertionsSigned"})," options are enabled by default but possible to configure."]}),"\n",(0,r.jsx)(t.h3,{id:"update-repo-tools-openapi-commands-structure",children:"Update repo-tools OpenAPI commands structure"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"schema openapi"})," commands of the ",(0,r.jsx)(t.code,{children:"@backstage/repo-tools"})," package have been restructured. They are now divided into ",(0,r.jsx)(t.code,{children:"package schema openapi"})," and ",(0,r.jsx)(t.code,{children:"repo schema openapi"})," commands. For a more detailed list of changes, see the changelog of the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/repo-tools/CHANGELOG.md#060",children:"repo-tools changelog"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"gerrit-integration-now-requires-gitiles",children:"Gerrit integration now requires Gitiles"}),"\n",(0,r.jsx)(t.p,{children:"When integrating a Gerrit instance with Backstage it is now required to have the Gitiles plugin installed in Gerrit. This allowed the Backstage integration to use a richer set of APIs, rather than interacting only over the git protocol."}),"\n",(0,r.jsxs)(t.p,{children:["This behavior can be temporarily disabled via setting ",(0,r.jsx)(t.code,{children:"DISABLE_GERRIT_GITILES_REQUIREMENT=1"})," in the environment. This flag will be removed in a future release, so if you depend on this behavior please ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues",children:"open an issue"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,r.jsx)(t.p,{children:"This release contains an improvement to the default backend error handling middleware that will filter out some known error types that should never be returned in client responses."}),"\n",(0,r.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage's ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.23.0-changelog.md",children:"Changelog"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage ",(0,r.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Sign up for our ",(0,r.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function k(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var v=y.prototype=new k;v.constructor=y,g(v,b.prototype),v.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var s,o={},a=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=t[s]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===o[s]&&(o[s]=c[s]);return{$$typeof:n,type:e,key:a,ref:i,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,s,o,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+T(c,0):o,x(a)?(s="",null!=e&&(s=e.replace(R,"$&/")+"/"),C(a,t,s,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",x(e))for(var l=0;l<e.length;l++){var u=o+T(i=e[l],l);c+=C(i,t,s,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=C(i=i.value,t,s,u=o+T(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,n){if(null==e)return e;var r=[],s=0;return C(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},B={transition:null},O={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:B,ReactCurrentOwner:w};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=s,t.Profiler=a,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:s,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(667294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);