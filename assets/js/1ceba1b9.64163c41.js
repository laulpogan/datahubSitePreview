"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),i=n(86010),l=n(51048),o=n(33609),s=n(1943),c=n(72957);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:m,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,s.U)(),[_,v]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==_&&f.some((t=>t.value===e))&&v(e)}const S=e=>{const t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==_&&(w(t),v(a),null!=m&&N(m,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},g)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>C.push(e),onKeyDown:T,onClick:S},l,{className:(0,i.Z)("tabs__item",u,l?.className,{"tabs__item--active":_===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},63895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(83117),r=(n(67294),n(3905)),i=n(34259),l=n(18679);const o={sidebar_position:20,title:"Kafka",slug:"/generated/ingestion/sources/kafka",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka.md"},s="Kafka",c={unversionedId:"docs/generated/ingestion/sources/kafka",id:"docs/generated/ingestion/sources/kafka",title:"Kafka",description:"Extract Topics & Schemas from Apache Kafka or Confluent Cloud.",source:"@site/genDocs/docs/generated/ingestion/sources/kafka.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/kafka",permalink:"/datahubSitePreview/docs/generated/ingestion/sources/kafka",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Kafka",slug:"/generated/ingestion/sources/kafka",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/kafka.md"},sidebar:"overviewSidebar",previous:{title:"JSON Schemas",permalink:"/datahubSitePreview/docs/generated/ingestion/sources/json-schema"},next:{title:"Kafka Connect",permalink:"/datahubSitePreview/docs/generated/ingestion/sources/kafka-connect"}},p={},u=[{value:"Module <code>kafka</code>",id:"module-kafka",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Connecting to Confluent Cloud",id:"connecting-to-confluent-cloud",level:3},{value:"Custom Schema Registry",id:"custom-schema-registry",level:3},{value:"Limitations of <code>PROTOBUF</code> schema types implementation",id:"limitations-of-protobuf-schema-types-implementation",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kafka"},"Kafka"),(0,r.kt)("p",null,"Extract Topics & Schemas from Apache Kafka or Confluent Cloud."),(0,r.kt)("h2",{id:"module-kafka"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"kafka")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/datahubSitePreview/docs/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"For multiple Kafka clusters, use the platform_instance configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Schemas associated with each topic are extracted from the schema registry. Avro and Protobuf (certified), JSON (incubating). Schema references are supported.")))),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Topics from the Kafka broker"),(0,r.kt)("li",{parentName:"ul"},"Schemas associated with each topic from the schema registry (Avro, Protobuf and JSON schemas are supported)")),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[kafka]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/datahubSitePreview/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "kafka"\n  config:\n    platform_instance: "YOUR_CLUSTER_ID"\n    connection:\n      bootstrap: "broker:9092"\n      schema_registry_url: http://localhost:8081\n\nsink:\n  # sink configs\n\n\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"env"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"PROD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform_instance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic_subject_map"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides the mapping for the ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," schemas of a topic to the corresponding schema registry subject name. Each entry of this map has the form ",(0,r.kt)("inlineCode",{parentName:"td"},"<topic_name>-key"),":",(0,r.kt)("inlineCode",{parentName:"td"},"<schema_registry_subject_name_for_key_schema>")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"<topic_name>-value"),":",(0,r.kt)("inlineCode",{parentName:"td"},"<schema_registry_subject_name_for_value_schema>")," for the key and the value schemas associated with the topic, respectively. This parameter is mandatory when the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html#how-the-naming-strategies-work"},"RecordNameStrategy")," is used as the subject naming strategy in the kafka schema registry. NOTE: When provided, this overrides the default subject name resolution even when the ",(0,r.kt)("inlineCode",{parentName:"td"},"TopicNameStrategy")," or the ",(0,r.kt)("inlineCode",{parentName:"td"},"TopicRecordNameStrategy")," are used."),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema_registry_class"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The fully qualified implementation class(custom) that implements the KafkaSchemaRegistryBase interface."),(0,r.kt)("td",{parentName:"tr",align:null},"datahub.ingestion.source.confluent_schema_registry.ConfluentSchemaRegistry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignore_warnings_on_schema_type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables warnings reported for non-AVRO/Protobuf value or key schemas if set."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"StatefulStaleMetadataRemovalConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.enabled"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the ingestion state provider registered with datahub."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.ignore_old_state"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to True, ignores the previous checkpoint state."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.ignore_new_state"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to True, ignores the current checkpoint state."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateful_ingestion.remove_stale_metadata"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"KafkaConsumerConnectionConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"{'bootstrap': 'localhost:9092', 'schema_registry_url': 'http://localhost:8081', 'schema_registry_config': {}, 'client_timeout_seconds': 60, 'consumer_config': {}}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection.bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"localhost:9092")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection.schema_registry_url"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:8081")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection.schema_registry_config"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Extra schema registry config serialized as JSON. These options will be passed into Kafka's SchemaRegistryClient. ",(0,r.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection.client_timeout_seconds"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The request timeout used when interacting with the Kafka APIs."),(0,r.kt)("td",{parentName:"tr",align:null},"60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection.consumer_config"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Extra consumer config serialized as JSON. These options will be passed into Kafka's DeserializingConsumer. See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer")," and ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md")," ."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic_patterns"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': ","['^_.*']",", 'ignoreCase': True}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic_patterns.allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic_patterns.deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic_patterns.ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict","[str, AllowDenyPattern]"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of domain names to allow deny patterns. Domains can be urn-based (",(0,r.kt)("inlineCode",{parentName:"td"},"urn:li:domain:13ae4d85-d955-49fc-8474-9004c663a810"),") or bare (",(0,r.kt)("inlineCode",{parentName:"td"},"13ae4d85-d955-49fc-8474-9004c663a810"),")."),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "KafkaSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "connection": {\n      "title": "Connection",\n      "default": {\n        "bootstrap": "localhost:9092",\n        "schema_registry_url": "http://localhost:8081",\n        "schema_registry_config": {},\n        "client_timeout_seconds": 60,\n        "consumer_config": {}\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/KafkaConsumerConnectionConfig"\n        }\n      ]\n    },\n    "topic_patterns": {\n      "title": "Topic Patterns",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [\n          "^_.*"\n        ],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "domain": {\n      "title": "Domain",\n      "description": "A map of domain names to allow deny patterns. Domains can be urn-based (`urn:li:domain:13ae4d85-d955-49fc-8474-9004c663a810`) or bare (`13ae4d85-d955-49fc-8474-9004c663a810`).",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "$ref": "#/definitions/AllowDenyPattern"\n      }\n    },\n    "topic_subject_map": {\n      "title": "Topic Subject Map",\n      "description": "Provides the mapping for the `key` and the `value` schemas of a topic to the corresponding schema registry subject name. Each entry of this map has the form `<topic_name>-key`:`<schema_registry_subject_name_for_key_schema>` and `<topic_name>-value`:`<schema_registry_subject_name_for_value_schema>` for the key and the value schemas associated with the topic, respectively. This parameter is mandatory when the [RecordNameStrategy](https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html#how-the-naming-strategies-work) is used as the subject naming strategy in the kafka schema registry. NOTE: When provided, this overrides the default subject name resolution even when the `TopicNameStrategy` or the `TopicRecordNameStrategy` are used.",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "schema_registry_class": {\n      "title": "Schema Registry Class",\n      "description": "The fully qualified implementation class(custom) that implements the KafkaSchemaRegistryBase interface.",\n      "default": "datahub.ingestion.source.confluent_schema_registry.ConfluentSchemaRegistry",\n      "type": "string"\n    },\n    "ignore_warnings_on_schema_type": {\n      "title": "Ignore Warnings On Schema Type",\n      "description": "Disables warnings reported for non-AVRO/Protobuf value or key schemas if set.",\n      "default": false,\n      "type": "boolean"\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19)."\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "ignore_old_state": {\n          "title": "Ignore Old State",\n          "description": "If set to True, ignores the previous checkpoint state.",\n          "default": false,\n          "type": "boolean"\n        },\n        "ignore_new_state": {\n          "title": "Ignore New State",\n          "description": "If set to True, ignores the current checkpoint state.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "KafkaConsumerConnectionConfig": {\n      "title": "KafkaConsumerConnectionConfig",\n      "description": "Configuration class for holding connectivity information for Kafka consumers",\n      "type": "object",\n      "properties": {\n        "bootstrap": {\n          "title": "Bootstrap",\n          "default": "localhost:9092",\n          "type": "string"\n        },\n        "schema_registry_url": {\n          "title": "Schema Registry Url",\n          "default": "http://localhost:8081",\n          "type": "string"\n        },\n        "schema_registry_config": {\n          "title": "Schema Registry Config",\n          "description": "Extra schema registry config serialized as JSON. These options will be passed into Kafka\'s SchemaRegistryClient. https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient",\n          "type": "object"\n        },\n        "client_timeout_seconds": {\n          "title": "Client Timeout Seconds",\n          "description": "The request timeout used when interacting with the Kafka APIs.",\n          "default": 60,\n          "type": "integer"\n        },\n        "consumer_config": {\n          "title": "Consumer Config",\n          "description": "Extra consumer config serialized as JSON. These options will be passed into Kafka\'s DeserializingConsumer. See https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer and https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md .",\n          "type": "object"\n        }\n      },\n      "additionalProperties": false\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Stateful Ingestion is available only when a Platform Instance is assigned to this source.")),(0,r.kt)("h3",{id:"connecting-to-confluent-cloud"},"Connecting to Confluent Cloud"),(0,r.kt)("p",null,"If using Confluent Cloud you can use a recipe like this. In this ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer_config.sasl.username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer_config.sasl.password")," are the API credentials that you get (in the Confluent UI) from your cluster -> Data Integration -> API Keys. ",(0,r.kt)("inlineCode",{parentName:"p"},"schema_registry_config.basic.auth.user.info"),"  has API credentials for Confluent schema registry which you get (in Confluent UI) from Schema Registry -> API credentials."),(0,r.kt)("p",null,"When creating API Key for the cluster ensure that the ACLs associated with the key are set like below. This is required for DataHub to read topic metadata from topics in Confluent Cloud."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Topic Name = *\nPermission = ALLOW\nOperation = DESCRIBE\nPattern Type = LITERAL\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    platform_instance: "YOUR_CLUSTER_ID"\n    connection:\n      bootstrap: "abc-defg.eu-west-1.aws.confluent.cloud:9092"\n      consumer_config:\n        security.protocol: "SASL_SSL"\n        sasl.mechanism: "PLAIN"\n        sasl.username: "${CLUSTER_API_KEY_ID}"\n        sasl.password: "${CLUSTER_API_KEY_SECRET}"\n      schema_registry_url: "https://abc-defgh.us-east-2.aws.confluent.cloud"\n      schema_registry_config:\n        basic.auth.user.info: "${REGISTRY_API_KEY_ID}:${REGISTRY_API_KEY_SECRET}"\n\nsink:\n  # sink configs\n')),(0,r.kt)("p",null,"If you are trying to add domains to your topics you can use a configuration like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    # ...connection block\n    domain:\n      "urn:li:domain:13ae4d85-d955-49fc-8474-9004c663a810":\n        allow:\n          - ".*"\n      "urn:li:domain:d6ec9868-6736-4b1f-8aa6-fee4c5948f17":\n        deny:\n          - ".*"\n')),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain")," in config above can be either an ",(0,r.kt)("em",{parentName:"p"},"urn")," or a domain ",(0,r.kt)("em",{parentName:"p"},"id")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"urn:li:domain:13ae4d85-d955-49fc-8474-9004c663a810")," or simply ",(0,r.kt)("inlineCode",{parentName:"p"},"13ae4d85-d955-49fc-8474-9004c663a810"),"). The Domain should exist in your DataHub instance before ingesting data into the Domain. To create a Domain on DataHub, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/domains/"},"Domains User Guide"),"."),(0,r.kt)("p",null,"If you are using a non-default subject naming strategy in the schema registry, such as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html#how-the-naming-strategies-work"},"RecordNameStrategy"),", the mapping for the topic's key and value schemas to the schema registry subject names should be provided via ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_subject_map")," as shown in the configuration below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "kafka"\n  config:\n    # ...connection block\n    # Defines the mapping for the key & value schemas associated with a topic & the subject name registered with the\n    # kafka schema registry.\n    topic_subject_map:\n      # Defines both key & value schema for topic \'my_topic_1\'\n      "my_topic_1-key": "io.acryl.Schema1"\n      "my_topic_1-value": "io.acryl.Schema2"\n      # Defines only the value schema for topic \'my_topic_2\' (the topic doesn\'t have a key schema).\n      "my_topic_2-value": "io.acryl.Schema3"\n')),(0,r.kt)("h3",{id:"custom-schema-registry"},"Custom Schema Registry"),(0,r.kt)("p",null,"The Kafka Source uses the schema registry to figure out the schema associated with both ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," for the topic.\nBy default it uses the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/index.html"},"Confluent's Kafka Schema registry"),"\nand supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"AVRO")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PROTOBUF")," schema types."),(0,r.kt)("p",null,"If you're using a custom schema registry, or you are using schema type other than ",(0,r.kt)("inlineCode",{parentName:"p"},"AVRO")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PROTOBUF"),", then you can provide your own\ncustom implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KafkaSchemaRegistryBase")," class, and implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_schema_metadata(topic, platform_urn)")," method that\ngiven a topic name would return object of ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaMetadata")," containing schema for that topic. Please refer\n",(0,r.kt)("inlineCode",{parentName:"p"},"datahub.ingestion.source.confluent_schema_registry::ConfluentSchemaRegistry")," for sample implementation of this class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class KafkaSchemaRegistryBase(ABC):\n    @abstractmethod\n    def get_schema_metadata(\n        self, topic: str, platform_urn: str\n    ) -> Optional[SchemaMetadata]:\n        pass\n")),(0,r.kt)("p",null,"The custom schema registry class can be configured using the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema_registry_class")," config param of the ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka")," source as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},'source:\n  type: "kafka"\n  config:\n    # Set the custom schema registry implementation class\n    schema_registry_class: "datahub.ingestion.source.confluent_schema_registry.ConfluentSchemaRegistry"\n    # Coordinates\n    connection:\n      bootstrap: "broker:9092"\n      schema_registry_url: http://localhost:8081\n\n# sink configs\n')),(0,r.kt)("h3",{id:"limitations-of-protobuf-schema-types-implementation"},"Limitations of ",(0,r.kt)("inlineCode",{parentName:"h3"},"PROTOBUF")," schema types implementation"),(0,r.kt)("p",null,"The current implementation of the support for ",(0,r.kt)("inlineCode",{parentName:"p"},"PROTOBUF")," schema type has the following limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recursive types are not supported."),(0,r.kt)("li",{parentName:"ul"},"If the schemas of different topics define a type in the same package, the source would raise an exception.")),(0,r.kt)("p",null,"In addition to this, maps are represented as arrays of messages. The following message,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"message MessageWithMap {\n  map<int, string> map_1 = 1;\n}\n")),(0,r.kt)("p",null,"becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"message Map1Entry {\n  int key = 1;\n  string value = 2/\n}\nmessage MessageWithMap {\n  repeated Map1Entry map_1 = 1;\n}\n")),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.kafka.KafkaSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/kafka.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Kafka, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);