"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,b=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_position:35,title:"DataHubRetention",slug:"/generated/metamodel/entities/datahubretention",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md"},i="DataHubRetention",d={unversionedId:"docs/generated/metamodel/entities/dataHubRetention",id:"docs/generated/metamodel/entities/dataHubRetention",title:"DataHubRetention",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubRetention.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubretention",permalink:"/datahubSitePreview/docs/generated/metamodel/entities/datahubretention",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,title:"DataHubRetention",slug:"/generated/metamodel/entities/datahubretention",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md"},sidebar:"overviewSidebar",previous:{title:"DataHubExecutionRequest",permalink:"/datahubSitePreview/docs/generated/metamodel/entities/datahubexecutionrequest"},next:{title:"DataPlatformInstance",permalink:"/datahubSitePreview/docs/generated/metamodel/entities/dataplatforminstance"}},l={},s=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubRetentionKey",id:"datahubretentionkey",level:3},{value:"dataHubRetentionConfig",id:"datahubretentionconfig",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahubretention"},"DataHubRetention"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"datahubretentionkey"},"dataHubRetentionKey"),(0,r.kt)("p",null,"Key for a DataHub Retention"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubRetentionKey"\n  },\n  "name": "DataHubRetentionKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "type": "string",\n      "name": "entityName",\n      "doc": "Entity name to apply retention to. * (or empty) for applying defaults."\n    },\n    {\n      "type": "string",\n      "name": "aspectName",\n      "doc": "Aspect name to apply retention to. * (or empty) for applying defaults."\n    }\n  ],\n  "doc": "Key for a DataHub Retention"\n}\n'))),(0,r.kt)("h3",{id:"datahubretentionconfig"},"dataHubRetentionConfig"),(0,r.kt)("p",null,"None"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubRetentionConfig"\n  },\n  "name": "DataHubRetentionConfig",\n  "namespace": "com.linkedin.retention",\n  "fields": [\n    {\n      "type": {\n        "type": "record",\n        "name": "Retention",\n        "namespace": "com.linkedin.retention",\n        "fields": [\n          {\n            "type": [\n              "null",\n              {\n                "type": "record",\n                "name": "VersionBasedRetention",\n                "namespace": "com.linkedin.retention",\n                "fields": [\n                  {\n                    "type": "int",\n                    "name": "maxVersions"\n                  }\n                ],\n                "doc": "Keep max N latest records"\n              }\n            ],\n            "name": "version",\n            "default": null\n          },\n          {\n            "type": [\n              "null",\n              {\n                "type": "record",\n                "name": "TimeBasedRetention",\n                "namespace": "com.linkedin.retention",\n                "fields": [\n                  {\n                    "type": "int",\n                    "name": "maxAgeInSeconds"\n                  }\n                ],\n                "doc": "Keep records that are less than X seconds old"\n              }\n            ],\n            "name": "time",\n            "default": null\n          }\n        ],\n        "doc": "Base class that encapsulates different retention policies.\\nOnly one of the fields should be set"\n      },\n      "name": "retention"\n    }\n  ]\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);