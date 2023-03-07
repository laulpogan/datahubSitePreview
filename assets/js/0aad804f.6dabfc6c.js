"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),l=n(86010),i=n(51048),o=n(33609),s=n(1943),p=n(72957);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:m,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[v,S]=(0,r.useState)(k),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=m){const e=N[m];null!=e&&e!==v&&f.some((t=>t.value===e))&&S(e)}const j=e=>{const t=e.currentTarget,n=_.indexOf(t),a=f[n].value;a!==v&&(w(t),S(a),null!=m&&y(m,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=_.indexOf(e.currentTarget)+1;t=_[n]??_[0];break}case"ArrowLeft":{const n=_.indexOf(e.currentTarget)-1;t=_[n]??_[_.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>_.push(e),onKeyDown:O,onClick:j},i,{className:(0,l.Z)("tabs__item",d,i?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},5634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(83117),r=(n(67294),n(3905)),l=n(34259),i=n(18679);const o={sidebar_position:19,title:"JSON Schemas",slug:"/generated/ingestion/sources/json-schema",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md"},s="JSON Schemas",p={unversionedId:"docs/generated/ingestion/sources/json-schema",id:"docs/generated/ingestion/sources/json-schema",title:"JSON Schemas",description:"Module json-schema",source:"@site/genDocs/docs/generated/ingestion/sources/json-schema.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/json-schema",permalink:"/datahubSitePreview/docs/generated/ingestion/sources/json-schema",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,title:"JSON Schemas",slug:"/generated/ingestion/sources/json-schema",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md"},sidebar:"overviewSidebar",previous:{title:"Iceberg",permalink:"/datahubSitePreview/docs/generated/ingestion/sources/iceberg"},next:{title:"Kafka",permalink:"/datahubSitePreview/docs/generated/ingestion/sources/kafka"}},u={},d=[{value:"Module <code>json-schema</code>",id:"module-json-schema",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Configuration Notes",id:"configuration-notes",level:4},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-schemas"},"JSON Schemas"),(0,r.kt)("h2",{id:"module-json-schema"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"json-schema")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Descriptions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Extracts descriptions at top level and field level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/datahubSitePreview/docs/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"With stateful ingestion enabled, will remove entities from DataHub if they are no longer present in the source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not currently support extracting ownership")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not currently support extracting tags")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/datahubSitePreview/docs/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Supports platform instance via config")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Extracts schemas, following references")))),(0,r.kt)("p",null,"This source extracts metadata from a single JSON Schema or multiple JSON Schemas rooted at a particular path.\nIt performs reference resolution based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," keyword."),(0,r.kt)("p",null,"Metadata mapping:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schemas are mapped to Datasets with sub-type Schema"),(0,r.kt)("li",{parentName:"ul"},"The name of the Schema (Dataset) is inferred from the ",(0,r.kt)("inlineCode",{parentName:"li"},"$id")," property and if that is missing, the file name."),(0,r.kt)("li",{parentName:"ul"},"Browse paths are minted based on the path")),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[json-schema]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/datahubSitePreview/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline_name: json_schema_ingestion\nsource:\n  type: json-schema\n  config:\n    path: <path_to_json_file_or_directory or url> # e.g. https://json.schemastore.org/petstore-v1.0.json\n    platform: <choose a platform that you want schemas to live under> # e.g. schemaregistry\n    # platform_instance: <add a platform_instance if there are multiple schema repositories>\n    stateful_ingestion:\n      enabled: true # recommended to have this turned on\n\n# sink configs if needed\n")),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"env"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"PROD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform_instance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Set this to a single file-path or a directory-path (for recursive traversal) or a remote url. e.g. ",(0,r.kt)("a",{parentName:"td",href:"https://json.schemastore.org/petstore-v1.0.json"},"https://json.schemastore.org/petstore-v1.0.json")),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Set this to a platform that you want all schemas to live under. e.g. schemaregistry / schemarepo etc."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_id_as_base_uri"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled, uses the ",(0,r.kt)("inlineCode",{parentName:"td"},"$id")," field in the json schema as the base uri for following references."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"StatefulStaleMetadataRemovalConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.enabled"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the ingestion state provider registered with datahub."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.ignore_old_state"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to True, ignores the previous checkpoint state."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.ignore_new_state"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to True, ignores the current checkpoint state."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.remove_stale_metadata"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri_replace_pattern"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"URIReplacePattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this if URI-s need to be modified during reference resolution. Simple string match - replace capabilities are supported."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri_replace_pattern.match"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2753 (required if uri_replace_pattern is set)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pattern to match on uri-s as part of reference resolution. See replace field"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri_replace_pattern.replace"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2753 (required if uri_replace_pattern is set)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pattern to replace with as part of reference resolution. See match field"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))))),(0,r.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "JsonSchemaSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "path": {\n      "title": "Path",\n      "description": "Set this to a single file-path or a directory-path (for recursive traversal) or a remote url. e.g. https://json.schemastore.org/petstore-v1.0.json",\n      "anyOf": [\n        {\n          "type": "string",\n          "format": "file-path"\n        },\n        {\n          "type": "string",\n          "format": "directory-path"\n        },\n        {\n          "type": "string",\n          "minLength": 1,\n          "maxLength": 65536,\n          "format": "uri"\n        }\n      ]\n    },\n    "platform": {\n      "title": "Platform",\n      "description": "Set this to a platform that you want all schemas to live under. e.g. schemaregistry / schemarepo etc.",\n      "type": "string"\n    },\n    "use_id_as_base_uri": {\n      "title": "Use Id As Base Uri",\n      "description": "When enabled, uses the `$id` field in the json schema as the base uri for following references.",\n      "default": false,\n      "type": "boolean"\n    },\n    "uri_replace_pattern": {\n      "title": "Uri Replace Pattern",\n      "description": "Use this if URI-s need to be modified during reference resolution. Simple string match - replace capabilities are supported.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/URIReplacePattern"\n        }\n      ]\n    }\n  },\n  "required": [\n    "path",\n    "platform"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19)."\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "ignore_old_state": {\n          "title": "Ignore Old State",\n          "description": "If set to True, ignores the previous checkpoint state.",\n          "default": false,\n          "type": "boolean"\n        },\n        "ignore_new_state": {\n          "title": "Ignore New State",\n          "description": "If set to True, ignores the current checkpoint state.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "URIReplacePattern": {\n      "title": "URIReplacePattern",\n      "type": "object",\n      "properties": {\n        "match": {\n          "title": "Match",\n          "description": "Pattern to match on uri-s as part of reference resolution. See replace field",\n          "type": "string"\n        },\n        "replace": {\n          "title": "Replace",\n          "description": "Pattern to replace with as part of reference resolution. See match field",\n          "type": "string"\n        }\n      },\n      "required": [\n        "match",\n        "replace"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("h4",{id:"configuration-notes"},"Configuration Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"platform")," field. Most organizations have custom project names for their schema repositories, so you can pick whatever name makes sense. For example, you might want to call your schema platform ",(0,r.kt)("strong",{parentName:"li"},"schemaregistry"),". After picking a custom platform, you can use the ",(0,r.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/cli#put-platform"},"put platform")," command to register your custom platform into DataHub.")),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.schema.json_schema.JsonSchemaSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/schema/json_schema.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for JSON Schemas, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);