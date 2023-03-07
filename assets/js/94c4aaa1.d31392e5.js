"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,b=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return r?a.createElement(b,o(o({ref:t},u),{},{components:r})):a.createElement(b,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const l={id:"unions",title:"Unions",slug:"unions",sidebar_position:6},o=void 0,i={unversionedId:"graphql/unions",id:"graphql/unions",title:"Unions",description:"AnalyticsChart",source:"@site/genDocs/graphql/unions.md",sourceDirName:"graphql",slug:"/graphql/unions",permalink:"/datahubSitePreview/docs/graphql/unions",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/genDocs/graphql/unions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"unions",title:"Unions",slug:"unions",sidebar_position:6},sidebar:"overviewSidebar",previous:{title:"Interfaces",permalink:"/datahubSitePreview/docs/graphql/interfaces"},next:{title:"Enums",permalink:"/datahubSitePreview/docs/graphql/enums"}},s={},p=[{value:"AnalyticsChart",id:"analyticschart",level:2},{value:"HyperParameterValueType",id:"hyperparametervaluetype",level:2},{value:"OwnerType",id:"ownertype",level:2},{value:"PlatformSchema",id:"platformschema",level:2},{value:"ResultsType",id:"resultstype",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"analyticschart"},"AnalyticsChart"),(0,n.kt)("p",null,"For consumption by UI only"),(0,n.kt)("p",{style:{marginBottom:"0.4em"}},(0,n.kt)("strong",null,"Possible types")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#timeserieschart"},"TimeSeriesChart")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#barchart"},"BarChart")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#tablechart"},"TableChart"))),(0,n.kt)("h2",{id:"hyperparametervaluetype"},"HyperParameterValueType"),(0,n.kt)("p",{style:{marginBottom:"0.4em"}},(0,n.kt)("strong",null,"Possible types")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#stringbox"},"StringBox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#intbox"},"IntBox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#floatbox"},"FloatBox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#booleanbox"},"BooleanBox"))),(0,n.kt)("h2",{id:"ownertype"},"OwnerType"),(0,n.kt)("p",null,"An owner of a Metadata Entity, either a user or group"),(0,n.kt)("p",{style:{marginBottom:"0.4em"}},(0,n.kt)("strong",null,"Possible types")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#corpuser"},"CorpUser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#corpgroup"},"CorpGroup"))),(0,n.kt)("h2",{id:"platformschema"},"PlatformSchema"),(0,n.kt)("p",null,"A type of Schema, either a table schema or a key value schema"),(0,n.kt)("p",{style:{marginBottom:"0.4em"}},(0,n.kt)("strong",null,"Possible types")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#tableschema"},"TableSchema")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#keyvalueschema"},"KeyValueSchema"))),(0,n.kt)("h2",{id:"resultstype"},"ResultsType"),(0,n.kt)("p",{style:{marginBottom:"0.4em"}},(0,n.kt)("strong",null,"Possible types")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/graphql/objects#stringbox"},"StringBox"))))}c.isMDXComponent=!0}}]);