"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(83117),i=(n(67294),n(3905));const a={title:"Console",slug:"/metadata-ingestion/sink_docs/console",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_docs/console.md"},r="Console",s={unversionedId:"metadata-ingestion/sink_docs/console",id:"metadata-ingestion/sink_docs/console",title:"Console",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/sink_docs/console.md",sourceDirName:"metadata-ingestion/sink_docs",slug:"/metadata-ingestion/sink_docs/console",permalink:"/datahubSitePreview/docs/metadata-ingestion/sink_docs/console",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_docs/console.md",tags:[],version:"current",frontMatter:{title:"Console",slug:"/metadata-ingestion/sink_docs/console",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_docs/console.md"},sidebar:"overviewSidebar",previous:{title:"Vertica",permalink:"/datahubSitePreview/docs/generated/ingestion/sources/vertica"},next:{title:"DataHub",permalink:"/datahubSitePreview/docs/metadata-ingestion/sink_docs/datahub"}},c={},l=[{value:"Setup",id:"setup",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Quickstart recipe",id:"quickstart-recipe",level:2},{value:"Config details",id:"config-details",level:2},{value:"Questions",id:"questions",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"console"},"Console"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/datahubSitePreview/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Works with ",(0,i.kt)("inlineCode",{parentName:"p"},"acryl-datahub")," out of the box."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"Simply prints each metadata event to stdout. Useful for experimentation and debugging purposes."),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/datahubSitePreview/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  # source configs\n\nsink:\n  type: "console"\n')),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"None!"),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this sink, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}d.isMDXComponent=!0}}]);