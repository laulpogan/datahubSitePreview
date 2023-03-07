"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=n,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const o={title:"v0.2.2",slug:"/managed-datahub/release-notes/v_0_2_2",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_2.md"},i="v0.2.2",l={unversionedId:"docs/managed-datahub/release-notes/v_0_2_2",id:"docs/managed-datahub/release-notes/v_0_2_2",title:"v0.2.2",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_2_2.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_2",permalink:"/datahubSitePreview/docs/managed-datahub/release-notes/v_0_2_2",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_2.md",tags:[],version:"current",frontMatter:{title:"v0.2.2",slug:"/managed-datahub/release-notes/v_0_2_2",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_2.md"},sidebar:"overviewSidebar",previous:{title:"Local Chrome Extension",permalink:"/datahubSitePreview/docs/managed-datahub/chrome-extension"},next:{title:"v0.2.1",permalink:"/datahubSitePreview/docs/managed-datahub/release-notes/v_0_2_1"}},s={},c=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Release Changelog",id:"release-changelog",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v022"},"v0.2.2"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,n.kt)("p",null,"01-Mar-2023"),(0,n.kt)("h2",{id:"release-changelog"},"Release Changelog"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.2.1")," no changes from OSS DataHub have been pulled in."),(0,n.kt)("li",{parentName:"ul"},"fix(lineage): fix filtering for Timeline Lineage, regression for Search Ingestion Summaries"),(0,n.kt)("li",{parentName:"ul"},"fix(recommendations): recommendations now display on the homepage for recently viewed, searched, and most popular."),(0,n.kt)("li",{parentName:"ul"},"fix(analytics): chart smoothing and date range fixes"),(0,n.kt)("li",{parentName:"ul"},"fix(search): case-sensitive exact match"),(0,n.kt)("li",{parentName:"ul"},"fix(search): fix handling of 2 character search terms when not a prefix or exact match"),(0,n.kt)("li",{parentName:"ul"},"fix(ingestion): fix ingestion run summary showing no results")))}d.isMDXComponent=!0}}]);