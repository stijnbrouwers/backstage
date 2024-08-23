/*! For license information please see 9571b25b.5dc8a901.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[668068],{853441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(824246),i=t(511151);const a={id:"extensions",title:"Frontend Extensions",sidebar_label:"Extensions",description:"Frontend extensions"},s=void 0,r={id:"frontend-system/architecture/extensions",title:"Frontend Extensions",description:"Frontend extensions",source:"@site/../docs/frontend-system/architecture/20-extensions.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/extensions",permalink:"/docs/frontend-system/architecture/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/20-extensions.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"extensions",title:"Frontend Extensions",sidebar_label:"Extensions",description:"Frontend extensions"},sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/frontend-system/architecture/plugins"},next:{title:"Extensions Blueprints",permalink:"/docs/frontend-system/architecture/extension-blueprints"}},c={},l=[{value:"Extension Structure",id:"extension-structure",level:2},{value:"ID",id:"id",level:3},{value:"Output",id:"output",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Attachment point",id:"attachment-point",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Configuration &amp; configuration schema",id:"configuration--configuration-schema",level:3},{value:"Factory",id:"factory",level:3},{value:"Creating an extension",id:"creating-an-extension",level:2},{value:"Extension data",id:"extension-data",level:2},{value:"Extension data references",id:"extension-data-references",level:3},{value:"Extension data uniqueness",id:"extension-data-uniqueness",level:3},{value:"Core extension data",id:"core-extension-data",level:3},{value:"Optional extension data",id:"optional-extension-data",level:3},{value:"Extension Inputs",id:"extension-inputs",level:2},{value:"Extension configuration",id:"extension-configuration",level:2},{value:"Extension factory as a generator function",id:"extension-factory-as-a-generator-function",level:2},{value:"Extension boundary",id:"extension-boundary",level:2},{value:"Suspense",id:"suspense",level:3},{value:"Error boundary",id:"error-boundary",level:3},{value:"Analytics",id:"analytics",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["As mentioned in the ",(0,o.jsx)(n.a,{href:"/docs/frontend-system/architecture/app",children:"previous section"}),", Backstage apps are built up from a tree of extensions. This section will go into more detail about what extensions are, how to create and use them, and how to create your own extensibility patterns."]}),"\n",(0,o.jsx)(n.h2,{id:"extension-structure",children:"Extension Structure"}),"\n",(0,o.jsx)(n.p,{children:"Each extensions has a number of different properties that define how it behaves and how it interacts with other extensions and the rest of the app. Some of these properties are fixed, while others can be customized by integrators. The diagram below illustrates the structure of an extension."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"frontend extension structure diagram",src:t(563045).Z+"",width:"411",height:"382"})}),"\n",(0,o.jsx)(n.h3,{id:"id",children:"ID"}),"\n",(0,o.jsx)(n.p,{children:"The ID of an extension is used to uniquely identity it, and it should ideally be unique across the entire Backstage ecosystem. For each frontend app instance there can only be a single extension for any given ID. Installing multiple extensions with the same ID will either result in an error or one of the extensions will override the others. The ID is also used to reference the extensions from other extensions, in configuration, and in other places such as developer tools and analytics."}),"\n",(0,o.jsxs)(n.p,{children:["When creating an extension you do not provide the ID directly. Instead, you indirectly or directly provide the kind, namespace, and name parts that make up the ID. The kind is always provided by the ",(0,o.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-blueprints",children:"extension blueprint"}),", the only exception is if you use ",(0,o.jsx)(n.a,{href:"#creating-an-extensions",children:(0,o.jsx)(n.code,{children:"createExtension"})})," directly. Any extension that is provided by a plugin will by default have its namespace set to the plugin ID, so you generally only need to provide an explicit namespace if you want to override an existing extension. The name is also optional, and primarily used to distinguish between multiple extensions of the same kind and namespace. If a plugin doesn't need to distinguish between different extensions of the same kind, the name can be omitted."]}),"\n",(0,o.jsxs)(n.p,{children:["The extension ID will be constructed using the pattern ",(0,o.jsx)(n.code,{children:"[<kind>:][<namespace>][/][<name>]"}),", where the separating ",(0,o.jsx)(n.code,{children:"/"})," is only present if both a namespace and name are defined."]}),"\n",(0,o.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,o.jsx)(n.p,{children:"The output of an extension is the data that it provides to its parent extension, and ultimately its contribution to the app. The output itself comes in the form of a collection of arbitrary values, anything that can be represented as a TypeScript type. However, each individual output value must be associated with a shared reference known as an extension data reference. You must also use these same references to be able to access individual output values of an extension."}),"\n",(0,o.jsx)(n.h3,{id:"inputs",children:"Inputs"}),"\n",(0,o.jsx)(n.p,{children:"The inputs of an extension define the data that it received from its children. Each extension can have multiple different inputs identified by an input name. These inputs each have their own set of data that they expect, which is defined as a collection of extension data references. An extension will only have access to the data that it has explicitly requested from each input."}),"\n",(0,o.jsx)(n.h3,{id:"attachment-point",children:"Attachment point"}),"\n",(0,o.jsx)(n.p,{children:"The attachment point of an extension decides where in the app extension tree it will be located. It is defined by the ID of the parent extension, as well as the name of the input to attach to. Through the attachment point the extension will share its own output as inputs to the parent extension. An extension can only be attached to an input that matches its own output, it is an error to try to attach an extension to an input the requires data that the extension does not provide in its output."}),"\n",(0,o.jsx)(n.p,{children:"The attachment point is one of the configurable properties of an extension, and can be overridden by integrators. In doing so, care must be taken to make sure that one doesn't attach an extension to an incompatible input. Extensions can also only be attached to a single input and parent at a time. This means that the app extension tree can not contain any cycles, as the extension ancestry will either be terminated at the root, or be detached from it."}),"\n",(0,o.jsx)(n.h3,{id:"disabled",children:"Disabled"}),"\n",(0,o.jsx)(n.p,{children:"Each extension in the app can be disabled, meaning it will not be instantiated and its parent will effectively not see it in its inputs. When creating an extension you can also specify whether extensions should be disabled by default. This makes it possible to for example install multiple extensions in an app, but only choose to enable one or a few of them depending on the environment."}),"\n",(0,o.jsx)(n.p,{children:"The ordering of extensions is sometimes very important, as it may for example affect in which order they show up in the UI. When an extension is toggled from disabled to enabled through configuration it resets the ordering of the extension, pushing it to the end of the list. It is generally recommended to leave extensions as disabled by default if their order is important, allowing for the order in which their are enabled in the configuration to determine their order in the app."}),"\n",(0,o.jsx)(n.h3,{id:"configuration--configuration-schema",children:"Configuration & configuration schema"}),"\n",(0,o.jsx)(n.p,{children:"Each extension can define a configuration schema that describes the configuration that it accepts. This schema is used to validate the configuration provided by integrators, but also to fill in default configuration values. The configuration itself is provided by integrators in order to customize the extension. It is not possible to provide a default configuration of an extension, this must instead be done through defaults in the configuration schema. This allows for a simpler configuration logic where multiple configurations of the same extension completely replace each other rather than being merged."}),"\n",(0,o.jsx)(n.h3,{id:"factory",children:"Factory"}),"\n",(0,o.jsx)(n.p,{children:"The extension factory is the implementation of the extension itself. It is a function that is provided with any inputs and configuration that the extension received, and must produce the output that it defined. When an app instance starts up it will call the factory function of each extension that is part of the app, starting at leaf nodes and working its way up to the root of the app extension tree. The factory will only be called for active extensions, which is an extension that is not disabled and has an active parent."}),"\n",(0,o.jsx)(n.p,{children:"Extension factories should be lean and not do any heavy lifting or async work, as they are called during the initialization of the app. For example, if you need to do an expensive computation to generate your output, then prefer outputting a callback that does the computation instead. This allows the parent extension to defer the computation for later so that you avoid blocking the app startup."}),"\n",(0,o.jsx)(n.h2,{id:"creating-an-extension",children:"Creating an extension"}),"\n",(0,o.jsxs)(n.p,{children:["Extensions are created using the ",(0,o.jsx)(n.code,{children:"createExtension"})," function from ",(0,o.jsx)(n.code,{children:"@backstage/frontend-plugin-api"}),". At minimum you need to provide an ID, attachment point, output definition, and a factory function. The following example shows the creation of a minimal extension:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const extension = createExtension({\n  name: 'my-extension',\n  // This is the attachment point, `id` is the ID of the parent extension,\n  // while `input` is the name of the input to attach to.\n  attachTo: { id: 'my-parent', input: 'content' },\n  // The output option defines the allowed and required outputs of the extension factory.\n  output: [coreExtensionData.reactElement],\n  // This factory is called to instantiate the extensions and produce its output.\n  factory() {\n    return [coreExtensionData.reactElement(<div>Hello World</div>)];\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that while the ",(0,o.jsx)(n.code,{children:"createExtension"})," function is public API and used in many places, it is not typically what you use when building plugins and features. Instead there are many ",(0,o.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-blueprints",children:"extension blueprints"})," exported by both the core APIs and plugins that make it easier to create extensions for more specific usages."]}),"\n",(0,o.jsx)(n.h2,{id:"extension-data",children:"Extension data"}),"\n",(0,o.jsx)(n.p,{children:"Communication between extensions happens in one direction, from one child extension through the attachment point to its parent. The child extension outputs data which is then passed as inputs to the parent extension. This data is called Extension Data, where the shape of each individual piece of data is described by an Extension Data Reference. These references are created separately from the extensions themselves, and can be shared across multiple different kinds of extensions. Each reference consists of an ID and a TypeScript type that the data needs to conform to, and represents one type of data that can be shared between extensions."}),"\n",(0,o.jsx)(n.h3,{id:"extension-data-references",children:"Extension data references"}),"\n",(0,o.jsxs)(n.p,{children:["To create a new extension data reference to represent a type of shared extension data you use the ",(0,o.jsx)(n.code,{children:"createExtensionDataRef"})," function. When defining a new reference you need to provide an ID and a TypeScript type, for example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export const reactElementExtensionDataRef =\n  createExtensionDataRef<React.JSX.Element>().with({\n    id: 'my-plugin.reactElement',\n  });\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ExtensionDataRef"})," can then be used to describe an output property of the extension. This will enforce typing on the return value of the extension factory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const extension = createExtension({\n  // ...\n  output: [reactElementExtensionDataRef],\n  factory() {\n    return [reactElementExtensionDataRef(<div>Hello World</div>)];\n  },\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"extension-data-uniqueness",children:"Extension data uniqueness"}),"\n",(0,o.jsxs)(n.p,{children:["Note that you are ",(0,o.jsx)(n.strong,{children:"not"}),' allowed to repeat the same data reference in the outputs, or return multiple values for the same reference. Multiple outputs for the same reference will conflict with each other and cause an error. If you want to output multiple values of the same TypeScript type you should create separate references for each value. That in turn means that overly generic extension data references are a bad idea, for example a generic "string" type. Instead create separate references for each type of data that you want to share.']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const extension = createExtension({\n  // ...\n  output: [\n    // \u274c Bad example - duplicate output declaration\n    reactElementExtensionDataRef,\n    reactElementExtensionDataRef,\n  ],\n  factory() {\n    return [\n      // \u274c Bad example - duplicate output values\n      reactElementExtensionDataRef(<div>Hello</div>),\n      reactElementExtensionDataRef(<div>World</div>),\n    ];\n  },\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"core-extension-data",children:"Core extension data"}),"\n",(0,o.jsxs)(n.p,{children:["We provide default ",(0,o.jsx)(n.code,{children:"coreExtensionData"}),", which provides commonly used ",(0,o.jsx)(n.code,{children:"ExtensionDataRef"}),"s - e.g. for ",(0,o.jsx)(n.code,{children:"React.JSX.Element"})," and ",(0,o.jsx)(n.code,{children:"RouteRef"}),". They can be used when creating your own extension. For example, the React Element extension data that we defined above is already provided as ",(0,o.jsx)(n.code,{children:"coreExtensionData.reactElement"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For a full list and explanations of all types of core extension data, see the ",(0,o.jsx)(n.a,{href:"/docs/frontend-system/building-plugins/built-in-data-refs",children:"core extension data reference"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"optional-extension-data",children:"Optional extension data"}),"\n",(0,o.jsxs)(n.p,{children:["By default all extension data is required, meaning that the extension factory must provide a value for each output. However, it is possible to make extension data optional by calling the ",(0,o.jsx)(n.code,{children:".optional()"})," method. This makes it optional for the factory function to return a value as part of its output. When calling the ",(0,o.jsx)(n.code,{children:".optional()"})," method you create a new copy of the extension data reference, it does not mutate the existing reference."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const extension = createExtension({\n  // ...\n  output: [coreExtensionData.reactElement.optional()],\n  factory() {\n    return Math.random() > 0.5\n      ? [coreExtensionData.reactElement(<div>Hello World</div>)]\n      : [];\n  },\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"extension-inputs",children:"Extension Inputs"}),"\n",(0,o.jsx)(n.p,{children:"The Extension Data can be passed up to other extensions through their extension inputs. Similar to the outputs seen before, let's create an example of an extension with a extension input:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const navigationExtension = createExtension({\n  // ...\n  inputs: {\n    // [1]: Input\n    logo: createExtensionInput([coreExtensionData.reactElement], {\n      singleton: true,\n      optional: true,\n    }),\n  },\n  factory({ inputs }) {\n    return {\n      element: (\n        <nav>\n          {inputs.logo?.get(coreExtensionData.reactElement) ?? (\n            <span>Backstage</span>\n          )}\n        </nav>\n      ),\n    };\n  },\n  // ...\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The input (see [1] above) is an object that we create using ",(0,o.jsx)(n.code,{children:"createExtensionInput"}),". The first argument is the set of extension data that we accept via this input, and works just like the ",(0,o.jsx)(n.code,{children:"output"})," option. The second argument is optional, and it allows us to put constraints on the extensions that are attached to our input. If the ",(0,o.jsx)(n.code,{children:"singleton: true"})," option is set, only a single extension can be attached at a time, and unless the ",(0,o.jsx)(n.code,{children:"optional: true"})," option is set it will also be required that there is exactly one attached extension."]}),"\n",(0,o.jsxs)(n.p,{children:["So how can we now attach the output to the parent extension's input? If we think about a navigation component, like the Sidebar in Backstage, there might be plugins that want to attach a link to their plugin to this navigation component. In this case the plugin only needs to know the extension ",(0,o.jsx)(n.code,{children:"id"})," and the name of the extension ",(0,o.jsx)(n.code,{children:"input"})," to attach the extension ",(0,o.jsx)(n.code,{children:"output"})," returned by the ",(0,o.jsx)(n.code,{children:"factory"})," to the specified extension:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const navigationItemExtension = createExtension({\n  // ...\n  attachTo: { id: 'app/nav', input: 'items' },\n  output: [coreExtensionData.reactElement],\n  factory() {\n    return [coreExtensionData.reactElement(<Link to=\"/home\">Home</Link>)];\n  },\n});\n\nconst navigationExtension = createExtension({\n  // ...\n  // [2]: Extension `id` will be `app/nav` following the extension naming pattern\n  namespace: 'app',\n  name: 'nav',\n  output: [coreExtensionData.reactElement],\n  inputs: {\n    items: createExtensionInput([coreExtensionData.reactElement]),\n  },\n  factory({ inputs }) {\n    return [\n      coreExtensionData.reactElement(\n        <nav>\n          <ul>\n            {inputs.items.map(item => {\n              return <li>{item.get(coreExtensionData.reactElement)}</li>;\n            })}\n          </ul>\n        </nav>,\n      ),\n    ];\n  },\n  // ...\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this case the extension input ",(0,o.jsx)(n.code,{children:"items"})," is an array, where each individual item is an extension that attached itself to the extension inputs of this ",(0,o.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In addition to being able to access data passed through the input, you also have access to the underlying app ",(0,o.jsx)(n.code,{children:"node"}),". This can be useful if you for example want to get the ID of the attached extension. However, avoid using the ",(0,o.jsx)(n.code,{children:"node"})," unless needed, it is generally better to stick to only consuming the provided data. If we are looking at the ",(0,o.jsx)(n.code,{children:"factory"})," function from the example above we could access the ",(0,o.jsx)(n.code,{children:"node"})," like the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"  // ...\n  factory({ inputs }) {\n    return [\n      coreExtensionData.reactElement(\n        <nav>\n          <ul>\n            {inputs.items.map((item) => {\n              const _node: AppNode = item.node;\n              return <li>{item.get(coreExtensionData.reactElement)}</li>;\n            })}\n          </ul>\n        </nav>\n      ),\n    ];\n  },\n"})}),"\n",(0,o.jsx)(n.h2,{id:"extension-configuration",children:"Extension configuration"}),"\n",(0,o.jsxs)(n.p,{children:["With the ",(0,o.jsx)(n.code,{children:"app-config.yaml"})," there is already the option to pass configuration to plugins or the app to e.g. define the ",(0,o.jsx)(n.code,{children:"baseURL"})," of your app. For extensions this concept would be limiting as an extension can be independent of the plugin & initiated several times. Therefore we created a possibility to configure each extension individually through config. The extension config schema is created using the ",(0,o.jsx)(n.a,{href:"https://zod.dev/",children:(0,o.jsx)(n.code,{children:"zod"})})," library, which in addition to TypeScript type checking also provides runtime validation and coercion. If we continue with the example of the ",(0,o.jsx)(n.code,{children:"navigationExtension"})," and now want it to contain a configurable title, we could make it available like the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const navigationExtension = createExtension({\n  // ...\n  namespace: 'app',\n  name: 'nav',\n  // [3]: Extension `id` will be `app/nav` following the extension naming pattern\n  config: {\n    schema: {\n      title: z => z.string().default('Sidebar Title'),\n    },\n  },\n  factory({ config }) {\n    return [\n      coreExtensionData.reactElement(\n        <nav>\n          <span>{config.title}</span>\n          <ul>{/* ... */}</ul>\n        </nav>,\n      ),\n    ];\n  },\n  // ...\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:['To now change the text of the title from "Sidebar Title" to "Backstage" we can look at the ',(0,o.jsx)(n.code,{children:"id"})," of the extension & add the following to the ",(0,o.jsx)(n.code,{children:"app-config.yaml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"app:\n  # ...\n  extensions:\n    # ...\n    - app/nav:\n        config:\n          title: 'Backstage'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"extension-factory-as-a-generator-function",children:"Extension factory as a generator function"}),"\n",(0,o.jsx)(n.p,{children:"In all examples so far we have defined the extension factory as a regular function that returns its output in an array. However, the only requirement is that the factory function returns any iterable of extension data values. This means that you can also define the factory function as a generator function, which allows you to yield values one by one. This is particularly useful if you want to conditionally output values."}),"\n",(0,o.jsx)(n.p,{children:"For example, this is how we could define an extension where its output depends on the configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const exampleExtension = createExtension({\n  // ...\n  config: {\n    schema: {\n      disableIcon: z.boolean().default(false),\n    },\n  },\n  output: [coreExtensionData.reactElement, iconDataRef.optional()],\n  *factory({ config }) {\n    yield coreExtensionData.reactElement(<div>Hello World</div>);\n\n    if (!config.disableIcon) {\n      yield iconDataRef(<ExampleIcon />);\n    }\n  },\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"extension-boundary",children:"Extension boundary"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ExtensionBoundary"})," wraps extensions with several React contexts for different purposes"]}),"\n",(0,o.jsx)(n.h3,{id:"suspense",children:"Suspense"}),"\n",(0,o.jsxs)(n.p,{children:["Most React elements rendered by extensions should be wrapped in the extension boundary. With ",(0,o.jsx)(n.code,{children:"Suspense"})," the extension can than load resources asynchronously with having a loading fallback. It also allows to lazy load the whole extension similar to how plugins are currently lazy loaded in Backstage."]}),"\n",(0,o.jsx)(n.h3,{id:"error-boundary",children:"Error boundary"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to plugins the ",(0,o.jsx)(n.code,{children:"ErrorBoundary"})," for extension allows to pass in a fallback component in case there is an uncaught error inside of the component. With this the error can be isolated & it would prevent the rest of the plugin to crash."]}),"\n",(0,o.jsx)(n.h3,{id:"analytics",children:"Analytics"}),"\n",(0,o.jsxs)(n.p,{children:["Analytics information are provided through the ",(0,o.jsx)(n.code,{children:"AnalyticsContext"}),", which will give ",(0,o.jsx)(n.code,{children:"extensionId"})," & ",(0,o.jsx)(n.code,{children:"pluginId"})," as context to analytics event fired inside of the extension. Additionally ",(0,o.jsx)(n.code,{children:"RouteTracker"})," will capture an analytics event for routable extension to inform which extension metadata gets associated with a navigation event when the route navigated to is a gathered ",(0,o.jsx)(n.code,{children:"mountPoint"}),". Whether an extension is routable is inferred from its outputs, but you can also explicitly control this behavior by passing the ",(0,o.jsx)(n.code,{children:"routable"})," prop to ",(0,o.jsx)(n.code,{children:"ExtensionBoundary"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ExtensionBoundary"})," can be used like the following in an extension:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const routableExtension = createExtension({\n  // ...\n  factory({ config, inputs, node }) {\n    return [\n      coreExtensionData.path(config.path),\n      coreExtensionData.routeRef(myRouteRef),\n      coreExtensionData.reactElement(\n        <ExtensionBoundary node={node}>\n          <MyExtensionComponent />\n        </ExtensionBoundary>,\n      ),\n    ];\n  },\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},563045:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/architecture-extension.drawio-9a77417dfc89f5da4b643f41030f28e4.svg"},371426:(e,n,t)=>{var o=t(827378),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,a={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!c.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:i,type:e,key:l,ref:d,props:a,_owner:r.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),r=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,m={};function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}function g(){}function v(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var b=v.prototype=new g;b.constructor=v,x(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,E={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,o){var i,a={},s=null,r=null;if(null!=n)for(i in void 0!==n.ref&&(r=n.ref),void 0!==n.key&&(s=""+n.key),n)j.call(n,i)&&!k.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===a[i]&&(a[i]=c[i]);return{$$typeof:t,type:e,key:s,ref:r,props:a,_owner:E.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var I=/\/+/g;function D(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,i,a,s){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var c=!1;if(null===e)c=!0;else switch(r){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case o:c=!0}}if(c)return s=s(c=e),e=""===a?"."+D(c,0):a,w(s)?(i="",null!=e&&(i=e.replace(I,"$&/")+"/"),S(s,n,i,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(I,"$&/")+"/")+e)),n.push(s)),1;if(c=0,a=""===a?".":a+":",w(e))for(var l=0;l<e.length;l++){var d=a+D(r=e[l],l);c+=S(r,n,i,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(r=e.next()).done;)c+=S(r=r.value,n,i,d=a+D(r,l++),s);else if("object"===r)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,n,t){if(null==e)return e;var o=[],i=0;return S(e,o,"","",(function(e){return n.call(t,e,i++)})),o}function C(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},N={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:E};n.Children={map:R,forEach:function(e,n,t){R(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return R(e,(function(){n++})),n},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=i,n.Profiler=s,n.PureComponent=v,n.StrictMode=a,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,n.cloneElement=function(e,n,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=x({},e.props),a=e.key,s=e.ref,r=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,r=E.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)j.call(n,l)&&!k.hasOwnProperty(l)&&(i[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)i.children=o;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:s,props:i,_owner:r}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:r,_context:e},e.Consumer=e},n.createElement=T,n.createFactory=function(e){var n=T.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=$.transition;$.transition={};try{e()}finally{$.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(667294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);