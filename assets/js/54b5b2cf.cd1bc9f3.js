"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8812],{45110:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var s=a(67294),i=a(39962),o=a(41154),n=a(86010),r=a(97325);const l={searchForm:"searchForm_VHOb",searchIcon:"searchIcon_jr7s",filterIcon:"filterIcon_eGlH",filterIconDark:"filterIconDark_fGjU",closeIcon:"closeIcon_UCad",searchQueryInput:"searchQueryInput_o9QR",searchVersionInput:"searchVersionInput_FsG9"};var c=a(6348),g=a(6226),u=a(63232),d=a(95164);const m=function(e){let{filterState:t,setFilterState:a,filterOptions:i}=e;function o(e){let{filterState:t,setFilterState:a,filter:i,filterOptions:o}=e;const n=[...o[i]],[r,l]=(0,s.useState)([]),m=[];n.forEach((e=>{t.includes(e)||m.push({label:e,value:e})}));const f=e=>{t.includes(e)?a(t.filter((t=>t!==e))):a([...t,e])},p=e=>{e.forEach((e=>{f(e)})),t.filter((e=>n.includes(e))).forEach((t=>{e.includes(t)||f(t)}))};let h=s.createElement("div",null);return h=n.length<=2?s.createElement(c.Z,{style:{width:"auto",display:"flex",flex:"1 1 auto",flexDirection:"row",justifyContent:"space-between"}},s.createElement(g.Z,{style:{marginRight:"10px"}},i),s.createElement(g.Z,{style:{width:"55%",display:"flex",justifyContent:"start"}},n.length>0&&n.map((e=>s.createElement(u.Z,{key:e,onChange:t=>{f(e)},checked:t.includes(e)},e))))):s.createElement(c.Z,{style:{width:"auto",display:"flex",flex:"1 1 auto",flexDirection:"row",justifyContent:"space-between"}},s.createElement(g.Z,null,i),s.createElement(d.Z,{mode:"multiple",allowClear:!0,value:t.filter((e=>n.includes(e))),bordered:!0,style:{width:"55%",marginLeft:"10px"},placeholder:"Select",onChange:p,options:m})),s.createElement(c.Z,{style:{display:"flex",justifyContent:"center",width:"auto",flex:"1 1 auto",marginTop:"16px"}},h)}const n=Object.keys(i);return n.length>1&&n.length,s.createElement("div",{style:{display:"flex",justifyContent:"center",width:"auto",flexDirection:"column"}},n.sort(((e,t)=>i[e].size-i[t].size)).map((e=>s.createElement(o,{filterState:t,setFilterState:a,filterOptions:i,filter:e,key:e}))))};var f=a(99982),p=a(4340),h=a(56505),y=a(72269),P=a(97960),T=a(49754);const D=function(e){let{textState:t,setTextState:a,filterState:i,setFilterState:o,filterOptions:c,allowExclusivity:g,setIsExclusive:u}=e;const[d,D]=(0,s.useState)(!1),[v,b]=(0,s.useState)([]),[S,I]=(0,s.useState)(!1);function C(){D(!d)}return s.createElement("div",null,s.createElement("div",{className:"DocSearch row"},s.createElement("div",{className:"col col--offset-3 col--6"},s.createElement("form",{onSubmit:e=>e.preventDefault(),className:l.searchForm},s.createElement("input",{type:"text",name:"q",className:l.searchQueryInput,placeholder:(0,r.I)({id:"theme.SearchPage.inputPlaceholder",message:"Filter Integrations",description:"The placeholder for search page input"}),"aria-label":(0,r.I)({id:"theme.SearchPage.inputLabel",message:"Filter",description:"The ARIA label for search page input"}),onChange:e=>a(e.target.value),value:t,autoComplete:"off",autoFocus:!0}),s.createElement("svg",{width:"20",height:"20",className:(0,n.Z)("DocSearch-Search-Icon",l.searchIcon),viewBox:"0 0 20 20"},s.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"})),s.createElement(f.Z,{className:d||i.length>0?(0,n.Z)("DocSearch-Filter-Icon",l.filterIcon):(0,n.Z)("DocSearch-Filter-Icon",l.filterIconDark),onClick:C,fill:d?"blue":"var(--docsearch-muted-color)"})),d&&s.createElement(h.Z,{style:{display:"flex",width:"auto",boxSizing:"border-box",boxShadow:"5px 8px 24px 5px rgba(208, 216, 243, 0.6)"},bodyStyle:{display:"flex",justifyContent:"center",width:"100%",flexDirection:"column",padding:"1rem"}},s.createElement(p.Z,{onClick:C,className:(0,n.Z)("DocSearch-Close-Icon",l.closeIcon)})," ",s.createElement(m,{filterState:v,setFilterState:b,filterOptions:c}),s.createElement("div",{style:{display:"flex",width:"100%",justifyContent:g?"space-between":"flex-end",paddingTop:"1rem"}},g&&s.createElement("div",null,s.createElement(y.Z,{onChange:function(){I(!S)},checked:S})," ",S?"Matches all tags ":"Matches any tags "),s.createElement("div",null,s.createElement(P.Z,{onClick:function(){b([]),o([]),u(!1),I(!1)},className:(0,n.Z)("DocSearch-Reset-Button",l.resetButton),style:{marginRight:"1rem"}},"Reset"),s.createElement(P.Z,{onClick:function(){o(v),D(!1),u(S)},type:"primary",className:(0,n.Z)("DocSearch-Filter-Button",l.filterButton)},"Search")))),!d&&v.length>0&&s.createElement("div",null,i.map(((e,t)=>s.createElement(T.Z,{closable:!0,onClose:()=>function(e){b(v.filter((t=>t!==e))),o(i.filter((t=>t!==e)))}(e),value:e,key:e+t},e)))))))};var v=a(83117),b=a(79524),S=a(83699);const I="feature_p7qz",C=e=>{let{image:t,title:a,description:i,to:o,filters:r,tags:l,useTags:c,useFilters:g}=e;return s.createElement("div",{className:"col col--4"},s.createElement(S.Z,{to:(0,b.Z)(o),className:(0,n.Z)("card",I)},s.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:c||g?"space-between":"center"}},s.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},t&&s.createElement("div",{style:{display:"flex",alignItems:"center"}},s.createElement("img",{src:(0,b.Z)(t)})),s.createElement("strong",null,a)),s.createElement("div",null,s.createElement("span",{style:{marginLeft:"1rem"}},i)),c&&s.createElement("div",{style:{display:"flex",flex:"0 0 auto",height:"auto",width:"auto",flexDirection:"row",flexWrap:"wrap",justifyContent:"end",alignItems:"start",fontSize:"0.65rem"}},l.map(((e,t)=>s.createElement(T.Z,{key:e+t,value:e,style:{marginTop:0,marginBottom:".15rem",marginLeft:".15rem",marginRight:0,fontSize:"0.65rem"}},e.trim())))),g&&function(){const e=Object.keys(r);return s.createElement("div",{style:{display:"flex",flex:"0 0 auto",height:"auto",width:"auto",flexDirection:"column",justifyContent:"end",alignItems:"start",fontSize:"0.65rem"}},e.map((e=>{if(""!==r[e])return s.createElement("div",{key:e,style:{display:"flex",flex:"0 0 auto",flexWrap:"wrap",flexDirection:"row"}}," ",e+": ",r[e].split(",").map(((e,t)=>s.createElement(T.Z,{key:e+t,value:e,style:{marginTop:0,marginBottom:".15rem",marginLeft:".15rem",marginRight:0,fontSize:"0.65rem"}},e))))})))}())))},E=e=>{let{content:t,filterBar:a}=e;return t?.length>0?s.createElement("div",{style:{padding:"2vh 0"}},s.createElement("div",{className:"container"},s.createElement("div",{className:"row row--no-gutters"},t.map(((e,t)=>s.createElement(C,(0,v.Z)({key:t},e))))))):null};function k(e,t,a,i,n,r,l){void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===l&&(l=!1);const[c,g]=s.useState(""),[u,d]=s.useState([]),[m,f]=s.useState(!1);let p={};t.forEach((e=>{const t=e.tags;Object.keys(t).map((e=>{void 0===p[e]&&(p[e]=new Set),t[e].split(",").forEach((t=>{" "!==t&&""!==t&&p[e].add(t.trim())}))}))}));const h=Object.keys(p);function y(e){if(null==e)return;const a=t.find((t=>{if(t.Path===e)return t})).tags;let s=[];return void 0===a||h.map((e=>{void 0!==a[e]&&null!==a[e]&&a[e].split(",").forEach((e=>{" "!==e&&""!==e&&s.push(e.trim())}))})),s}const P=t.map((e=>({title:e.Title,image:e.imgPath,description:e.Description,tags:y(e.Path),filters:e.tags,to:e.Path,useFilters:l,useTags:r}))).filter((e=>{if(""===c&&0===u.length)return!0;if(u.length>0){let t=m;return u.forEach((a=>{t=!m&&(t||e.tags.includes(a))||m&&t&&e.tags.includes(a)})),t}return e.title.toLowerCase().includes(c.toLowerCase())||e.description.toLowerCase().includes(c.toLowerCase())}));return s.createElement(o.Z,{title:e.tagline,description:"DataHub is a data discovery application built on an extensible metadata platform that helps you tame the complexity of diverse data ecosystems."},s.createElement("header",{className:"hero"},s.createElement("div",{className:"container"},s.createElement("div",{className:"hero__content"},s.createElement("div",null,s.createElement("h1",{className:"hero__title"},a),s.createElement("p",{className:"hero__subtitle"},i),s.createElement(D,{textState:c,setTextState:g,filterState:u,setFilterState:d,filterOptions:p,allowExclusivity:n,setIsExclusive:f}))))),s.createElement(E,{content:P,filterBar:s.createElement(D,null)}),s.createElement("br",null),s.createElement("br",null))}const w=a(40302).ingestionSources;const F=function(){const e=(0,i.Z)(),{siteConfig:t={}}=e;return k(t,w,"DataHub Integrations","Services that integrate with DataHub",!0,!0)}},40302:e=>{e.exports=JSON.parse('{"ingestionSources":[{"Path":"docs/lineage/airflow","imgPath":"img/logos/platforms/airflow.svg","Title":"Airflow","Description":"Airflow is an open-source data orchestration tool used for scheduling, monitoring, and managing complex data pipelines.","tags":{"Difficulty":"Medium","Platform Type":"Orchestrator","Connection Type":"Push","Features":"Stateful Ingestion"}},{"Path":"docs/generated/ingestion/sources/athena","imgPath":"img/logos/platforms/athena.svg","Title":"Athena","Description":"Athena is a serverless interactive query service that enables users to analyze data in Amazon S3 using standard SQL.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Column Level Lineage, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/azure-ad","imgPath":"img/logos/platforms/azure-ad.png","Title":"Azure AD","Description":"Azure AD is a cloud-based identity and access management tool that provides secure authentication and authorization for users and applications.","tags":{"Difficulty":"Hard","Platform Type":"Identity Provider","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/bigquery","imgPath":"img/logos/platforms/bigquery.svg","Title":"BigQuery","Description":"BigQuery is a cloud-based data warehousing and analytics tool that allows users to store, query, and analyze large datasets quickly and efficiently.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Patch Lineage, UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/business-glossary","imgPath":"img/datahub-logo-color-mark.svg","Title":"Business Glossary","Description":"Business Glossary is a source provided by DataHub for ingesting glossary metadata that provides a comprehensive list of business terms and definitions used within an organization.","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/clickhouse","imgPath":"img/logos/platforms/clickhouse.svg","Title":"ClickHouse","Description":"ClickHouse is an open-source column-oriented database management system designed for high-performance data processing and analytics.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/csv","imgPath":"img/datahub-logo-color-mark.svg","Title":"CSV","Description":"An ingestion source for enriching metadata provided in CSV format provided by DataHub","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/databricks","imgPath":"img/logos/platforms/databricks.png","Title":"Databricks","Description":"Databricks is a cloud-based data processing and analytics platform that enables data scientists and engineers to collaborate and build data-driven applications.","tags":{"Difficulty":"Easy","Platform Type":"ETL and Processing","Connection Type":"Pull","Features":"Stateful Ingestion, Column Level Lineage, UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/dbt","imgPath":"img/logos/platforms/dbt.svg","Title":"dbt","Description":"dbt is a data transformation tool that enables analysts and engineers to transform data in their warehouses through a modular, SQL-based approach.","tags":{"Difficulty":"Easy","Platform Type":"ETL and Processing","Connection Type":"Pull","Features":"Stateful Ingestion, Patch Lineage,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/delta-lake","imgPath":"img/logos/platforms/deltalake.svg","Title":"Delta Lake","Description":"Delta Lake is an open-source data lake storage layer that provides ACID transactions, schema enforcement, and data versioning for big data workloads.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/demo-data","imgPath":"img/datahub-logo-color-mark.svg","Title":"Demo Data","Description":"Demo Data is a data tool that provides sample data sets for demonstration and testing purposes.","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/druid","imgPath":"img/logos/platforms/druid.svg","Title":"Druid","Description":"Druid is an open-source data store designed for real-time analytics on large datasets.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/elasticsearch","imgPath":"img/logos/platforms/elasticsearch.svg","Title":"Elasticsearch","Description":"Elasticsearch is a distributed, open-source search and analytics engine designed for handling large volumes of data.","tags":{"Difficulty":"Hard","Platform Type":"Datastore","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/feast","imgPath":"img/logos/platforms/feast.svg","Title":"Feast","Description":"Feast is an open-source feature store that enables teams to manage, store, and discover features for machine learning applications.","tags":{"Difficulty":"Hard","Platform Type":"AI+ML","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/file","imgPath":"img/datahub-logo-color-mark.svg","Title":"File","Description":"An ingestion source for single files provided by DataHub","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/file-based-lineage","imgPath":"img/datahub-logo-color-mark.svg","Title":"File Based Lineage","Description":"File Based Lineage is a data tool that tracks the lineage of data files and their dependencies.","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/glue","imgPath":"img/logos/platforms/glue.svg","Title":"Glue","Description":"Glue is a data integration service that allows users to extract, transform, and load data from various sources into a data warehouse.","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/metadata-ingestion/integration_docs/great-expectations","imgPath":"img/logos/platforms/great-expectations.png","Title":"Great Expectations","Description":"Great Expectations is an open-source data validation and testing tool that helps data teams maintain data quality and integrity.","tags":{"Difficulty":"Medium","Platform Type":"Observability","Connection Type":"Push","Features":""}},{"Path":"docs/generated/ingestion/sources/hive","imgPath":"img/logos/platforms/hive.svg","Title":"Hive","Description":"Hive is a data warehousing tool that facilitates querying and managing large datasets stored in Hadoop Distributed File System (HDFS).","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/iceberg","imgPath":"img/logos/platforms/iceberg.png","Title":"Iceberg","Description":"Iceberg is a data tool that allows users to manage and query large-scale data sets using a distributed architecture.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/json-schema","imgPath":"img/datahub-logo-color-mark.svg","Title":"JSON Schemas","Description":"JSON Schemas is a data tool used to define the structure, format, and validation rules for JSON data.","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/kafka","imgPath":"img/logos/platforms/kafka.svg","Title":"Kafka","Description":"Kafka is a distributed streaming platform that allows for the processing and storage of large amounts of data in real-time.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/kafka-connect","imgPath":"img/logos/platforms/kafka.svg","Title":"Kafka Connect","Description":"Kafka Connect is an open-source data integration tool that enables the transfer of data between Apache Kafka and other data systems.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Lower Casing"}},{"Path":"docs/generated/ingestion/sources/ldap","imgPath":"img/datahub-logo-color-mark.svg","Title":"LDAP","Description":"LDAP (Lightweight Directory Access Protocol) is a data tool used for accessing and managing distributed directory information services over an IP network.","tags":{"Difficulty":"Hard","Platform Type":"Identity Provider","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/looker","imgPath":"img/logos/platforms/looker.svg","Title":"Looker","Description":"Looker is a business intelligence and data analytics platform that allows users to explore, analyze, and share data insights in real-time.","tags":{"Difficulty":"Easy","Platform Type":"BI Tool","Connection Type":"Pull","Features":"Stateful Ingestion, Column Level Lineage,  UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/mariadb","imgPath":"img/logos/platforms/mariadb.png","Title":"MariaDB","Description":"MariaDB is an open-source relational database management system that is a fork of MySQL.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/metabase","imgPath":"img/logos/platforms/metabase.svg","Title":"Metabase","Description":"Metabase is an open-source business intelligence and data visualization tool that allows users to easily query and visualize their data.","tags":{"Difficulty":"Medium","Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/mssql","imgPath":"img/logos/platforms/mssql.svg","Title":"Microsoft SQL Server","Description":"Microsoft SQL Server is a relational database management system designed to store, manage, and retrieve data efficiently and securely.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/mode","imgPath":"img/logos/platforms/mode.png","Title":"Mode","Description":"Mode is a cloud-based data analysis and visualization platform that enables businesses to explore, analyze, and share data in a collaborative environment.","tags":{"Difficulty":"Hard","Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/mongodb","imgPath":"img/logos/platforms/mongodb.svg","Title":"MongoDB","Description":"MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it easy to store and retrieve data for modern applications.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/mysql","imgPath":"img/logos/platforms/mysql.svg","Title":"MySQL","Description":"MySQL is an open-source relational database management system that allows users to store, organize, and retrieve data efficiently.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/nifi","imgPath":"img/logos/platforms/nifi.svg","Title":"NiFi","Description":"NiFi is a data integration tool that allows users to automate the flow of data between systems and applications.","tags":{"Difficulty":"Medium","Platform Type":"Orchestrator","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/okta","imgPath":"img/logos/platforms/okta.png","Title":"Okta","Description":"Okta is a cloud-based identity and access management tool that enables secure and seamless access to applications and data across multiple devices and platforms.","tags":{"Difficulty":"Hard","Platform Type":"Identity Provider","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/openapi","imgPath":"img/logos/platforms/openapi.png","Title":"OpenAPI","Description":"OpenAPI is a specification for building and documenting RESTful APIs.","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/oracle","imgPath":"img/logos/platforms/oracle.svg","Title":"Oracle","Description":"Oracle is a relational database management system that provides a comprehensive and integrated platform for managing and analyzing large amounts of data.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/postgres","imgPath":"img/logos/platforms/postgres.svg","Title":"Postgres","Description":"Postgres is an open-source relational database management system that provides a powerful tool for storing, managing, and analyzing large amounts of data.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/powerbi","imgPath":"img/logos/platforms/powerbi.png","Title":"PowerBI","Description":"PowerBI is a business analytics service by Microsoft that provides interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.","tags":{"Difficulty":"Easy","Platform Type":"BI Tool","Connection Type":"Pull","Features":"Stateful Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/presto","imgPath":"img/logos/platforms/presto.svg","Title":"Presto","Description":"Presto is an open-source distributed SQL query engine designed for fast and interactive analytics on large-scale data sets.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/presto-on-hive","imgPath":"img/logos/platforms/presto.svg","Title":"Presto on Hive","Description":"Presto on Hive is a data tool that allows users to query and analyze large datasets stored in Hive using SQL-like syntax.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/metadata-integration/java/datahub-protobuf","imgPath":"img/logos/platforms/protobuf.png","Title":"Protobuf Schemas","Description":"Protobuf Schemas is a data tool used for defining and serializing structured data in a compact and efficient manner.","tags":{"Difficulty":"Hard","Platform Type":"Metadata","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/pulsar","imgPath":"img/logos/platforms/pulsar.png","Title":"Pulsar","Description":"Pulsar is a real-time data processing and messaging platform that enables high-performance data streaming and processing.","tags":{"Difficulty":"Medium","Platform Type":"Metadata","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/redash","imgPath":"img/logos/platforms/redash.svg","Title":"Redash","Description":"Redash is a data visualization and collaboration platform that allows users to connect and query multiple data sources and create interactive dashboards and visualizations.","tags":{"Difficulty":"Medium","Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/redshift","imgPath":"img/logos/platforms/redshift.svg","Title":"Redshift","Description":"Redshift is a cloud-based data warehousing tool that allows users to store and analyze large amounts of data in a scalable and cost-effective manner.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/s3","imgPath":"img/logos/platforms/s3.svg","Title":"S3 Data Lake","Description":"S3 Data Lake is a cloud-based data storage and management tool that allows users to store, manage, and analyze large amounts of data in a scalable and cost-effective manner.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/sagemaker","imgPath":"img/logos/platforms/sagemaker.svg","Title":"SageMaker","Description":"SageMaker is a data tool that provides a fully-managed platform for building, training, and deploying machine learning models at scale.","tags":{"Difficulty":"Medium","Platform Type":"AI+ML","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/salesforce","imgPath":"img/logos/platforms/salesforce.png","Title":"Salesforce","Description":"Salesforce is a cloud-based customer relationship management (CRM) platform that helps businesses manage their sales, marketing, and customer service activities.","tags":{"Difficulty":"Medium","Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/hana","imgPath":"img/logos/platforms/hana.svg","Title":"SAP HANA","Description":"SAP HANA is an in-memory data platform that enables businesses to process large volumes of data in real-time.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/snowflake","imgPath":"img/logos/platforms/snowflake.svg","Title":"Snowflake","Description":"Snowflake is a cloud-based data warehousing platform that allows users to store, manage, and analyze large amounts of structured and semi-structured data.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Column Level Lineage, Patch Lineage,  UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/metadata-integration/java/spark-lineage","imgPath":"img/logos/platforms/spark.svg","Title":"Spark","Description":"Spark is a data processing tool that enables fast and efficient processing of large-scale data sets using distributed computing.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Push","Features":""}},{"Path":"docs/generated/ingestion/sources/sqlalchemy","imgPath":"img/logos/platforms/sqlalchemy.png","Title":"SQLAlchemy","Description":"SQLAlchemy is a Python-based data tool that provides a set of high-level API for connecting to relational databases and performing SQL operations.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/superset","imgPath":"img/logos/platforms/superset.svg","Title":"Superset","Description":"Superset is an open-source data exploration and visualization platform that allows users to create interactive dashboards and perform ad-hoc analysis on various data sources.","tags":{"Difficulty":"Medium","Platform Type":"BI Tool","Connection Type":"Pull","Features":""}},{"Path":"docs/generated/ingestion/sources/tableau","imgPath":"img/logos/platforms/tableau.png","Title":"Tableau","Description":"Tableau is a data visualization and business intelligence tool that helps users analyze and present data in a visually appealing and interactive way.","tags":{"Difficulty":"Easy","Platform Type":"BI Tool","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Lower Casing, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/trino","imgPath":"img/logos/platforms/trino.png","Title":"Trino","Description":"Trino is an open-source distributed SQL query engine designed to query large-scale data processing systems, including Hadoop, Cassandra, and relational databases.","tags":{"Difficulty":"Easy","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion,  UI Ingestion, Status Aspect"}},{"Path":"docs/generated/ingestion/sources/vertica","imgPath":"img/logos/platforms/vertica.svg","Title":"Vertica","Description":"Vertica is a high-performance, column-oriented, relational database management system designed for large-scale data warehousing and analytics.","tags":{"Difficulty":"Medium","Platform Type":"Datastore","Connection Type":"Pull","Features":"Stateful Ingestion, Status Aspect"}}]}')}}]);