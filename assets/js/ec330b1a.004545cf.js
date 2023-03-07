"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(83117),r=(a(67294),a(3905));const o={title:"Using Airflow",slug:"/metadata-ingestion/schedule_docs/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md"},i="Using Airflow",s={unversionedId:"metadata-ingestion/schedule_docs/airflow",id:"metadata-ingestion/schedule_docs/airflow",title:"Using Airflow",description:"If you are using Apache Airflow for your scheduling then you might want to also use it for scheduling your ingestion recipes. For any Airflow specific questions you can go through Airflow docs for more details.",source:"@site/genDocs/metadata-ingestion/schedule_docs/airflow.md",sourceDirName:"metadata-ingestion/schedule_docs",slug:"/metadata-ingestion/schedule_docs/airflow",permalink:"/datahubSitePreview/docs/metadata-ingestion/schedule_docs/airflow",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md",tags:[],version:"current",frontMatter:{title:"Using Airflow",slug:"/metadata-ingestion/schedule_docs/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md"},sidebar:"overviewSidebar",previous:{title:"Using Cron",permalink:"/datahubSitePreview/docs/metadata-ingestion/schedule_docs/cron"},next:{title:"Using Kubernetes",permalink:"/datahubSitePreview/docs/metadata-ingestion/schedule_docs/kubernetes"}},l={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-airflow"},"Using Airflow"),(0,r.kt)("p",null,"If you are using Apache Airflow for your scheduling then you might want to also use it for scheduling your ingestion recipes. For any Airflow specific questions you can go through ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/"},"Airflow docs")," for more details."),(0,r.kt)("p",null,"We've provided a few examples of how to configure your DAG:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/mysql_sample_dag.py"},(0,r.kt)("inlineCode",{parentName:"a"},"mysql_sample_dag"))," embeds the full MySQL ingestion configuration inside the DAG.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/snowflake_sample_dag.py"},(0,r.kt)("inlineCode",{parentName:"a"},"snowflake_sample_dag"))," avoids embedding credentials inside the recipe, and instead fetches them from Airflow's ",(0,r.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/howto/connection/index.html"},"Connections")," feature. You must configure your connections in Airflow to use this approach."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"These example DAGs use the ",(0,r.kt)("inlineCode",{parentName:"p"},"PythonVirtualenvOperator")," to run the ingestion. This is the recommended approach, since it guarantees that there will not be any conflicts between DataHub and the rest of your Airflow environment."),(0,r.kt)("p",{parentName:"admonition"},"When configuring the task, it's important to specify the requirements with your source and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"system_site_packages")," option to false."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},'ingestion_task = PythonVirtualenvOperator(\n    task_id="ingestion_task",\n    requirements=[\n        "acryl-datahub[<your-source>]",\n    ],\n    system_site_packages=False,\n    python_callable=your_callable,\n)\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Advanced: loading a recipe file"),(0,r.kt)("p",null,"In more advanced cases, you might want to store your ingestion recipe in a file and load it from your task."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure the recipe file is in a folder accessible to your airflow workers. You can either specify absolute path on the machines where Airflow is installed or a path relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"AIRFLOW_HOME"),"."),(0,r.kt)("li",{parentName:"ul"},"Ensure ",(0,r.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/cli"},"DataHub CLI")," is installed in your airflow environment."),(0,r.kt)("li",{parentName:"ul"},"Create a DAG task to read your DataHub ingestion recipe file and run it. See the example below for reference."),(0,r.kt)("li",{parentName:"ul"},"Deploy the DAG file into airflow for scheduling. Typically this involves checking in the DAG file into your dags folder which is accessible to your Airflow instance.")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/generic_recipe_sample_dag.py"},(0,r.kt)("inlineCode",{parentName:"a"},"generic_recipe_sample_dag")))))}p.isMDXComponent=!0}}]);