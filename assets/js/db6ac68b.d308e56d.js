"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(83117),i=(r(67294),r(3905));const o={title:"Restore Indices Endpoint",slug:"/api/restli/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md"},a="Restore Indices Endpoint",s={unversionedId:"docs/api/restli/restore-indices",id:"docs/api/restli/restore-indices",title:"Restore Indices Endpoint",description:"You can do a HTTP POST request to /gms/aspects?action=restoreIndices endpoint with the urn as part of JSON Payload to restore indices for the particular URN.",source:"@site/genDocs/docs/api/restli/restore-indices.md",sourceDirName:"docs/api/restli",slug:"/api/restli/restore-indices",permalink:"/datahubSitePreview/docs/api/restli/restore-indices",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md",tags:[],version:"current",frontMatter:{title:"Restore Indices Endpoint",slug:"/api/restli/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md"},sidebar:"overviewSidebar",previous:{title:"Rest.li API",permalink:"/datahubSitePreview/docs/api/restli/restli-overview"},next:{title:"Aspect Versioning",permalink:"/datahubSitePreview/docs/advanced/aspect-versioning"}},c={},p=[],l={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"restore-indices-endpoint"},"Restore Indices Endpoint"),(0,i.kt)("p",null,"You can do a HTTP POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/gms/aspects?action=restoreIndices")," endpoint with the ",(0,i.kt)("inlineCode",{parentName:"p"},"urn")," as part of JSON Payload to restore indices for the particular URN."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://demo.datahubproject.io/api/gms/aspects?action=restoreIndices' \\\n--header 'Authorization: Bearer TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"urn\": \"YOUR_URN\"\n}'\n")),(0,i.kt)("p",null,"The supported parameters are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"urn")," - Optionl URN string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aspect")," - Optional Aspect string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"urnLike")," - Optional string regex to match URNs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start")," - Optional integer to decide which rows number of sql store to restore"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batchSize")," - Optional integer to decide how many rows to restore")))}d.isMDXComponent=!0}}]);