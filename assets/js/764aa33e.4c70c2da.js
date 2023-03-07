"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[858],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,A=p["".concat(s,".").concat(h)]||p[h]||u[h]||n;return a?i.createElement(A,r(r({ref:t},d),{},{components:a})):i.createElement(A,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<n;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},91009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(83117),o=(a(67294),a(3905));const n={title:"Running Airflow locally with DataHub",slug:"/docker/airflow/local_airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/airflow/local_airflow.md"},r=void 0,l={unversionedId:"docker/airflow/local_airflow",id:"docker/airflow/local_airflow",title:"Running Airflow locally with DataHub",description:"This feature is currently unmaintained. As of 0.10.0 the container described is not published alongside the DataHub CLI. If you'd like to use it, please reach out to us on the community slack.",source:"@site/genDocs/docker/airflow/local_airflow.md",sourceDirName:"docker/airflow",slug:"/docker/airflow/local_airflow",permalink:"/datahubSitePreview/docs/docker/airflow/local_airflow",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docker/airflow/local_airflow.md",tags:[],version:"current",frontMatter:{title:"Running Airflow locally with DataHub",slug:"/docker/airflow/local_airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/airflow/local_airflow.md"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up your Airflow area",id:"step-1-set-up-your-airflow-area",level:2},{value:"What is different between this docker-compose file and the official Apache Airflow docker compose file?",id:"what-is-different-between-this-docker-compose-file-and-the-official-apache-airflow-docker-compose-file",level:3},{value:"Step 2: Bring up Airflow",id:"step-2-bring-up-airflow",level:2},{value:"Step 3: Register DataHub connection (hook) to Airflow",id:"step-3-register-datahub-connection-hook-to-airflow",level:2},{value:"Result",id:"result",level:3},{value:"What is the above command doing?",id:"what-is-the-above-command-doing",level:3},{value:"Step 4: Find the DAGs and run it",id:"step-4-find-the-dags-and-run-it",level:2},{value:"TroubleShooting",id:"troubleshooting",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This feature is currently unmaintained. As of 0.10.0 the container described is not published alongside the DataHub CLI. If you'd like to use it, please reach out to us on the ",(0,o.kt)("a",{parentName:"p",href:"/datahubSitePreview/docs/slack"},"community slack."))),(0,o.kt)("h1",{id:"running-airflow-locally-with-datahub"},"Running Airflow locally with DataHub"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This document describes how you can run Airflow side-by-side with DataHub's quickstart docker images to test out Airflow lineage with DataHub.\nThis offers a much easier way to try out Airflow with DataHub, compared to configuring containers by hand, setting up configurations and networking connectivity between the two systems."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker: ensure that you have a working Docker installation and you have at least 8GB of memory to allocate to both Airflow and DataHub combined.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker info | grep Memory\n\n> Total Memory: 7.775GiB\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Quickstart: Ensure that you followed ",(0,o.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/quickstart"},"quickstart")," to get DataHub up and running.")),(0,o.kt)("h2",{id:"step-1-set-up-your-airflow-area"},"Step 1: Set up your Airflow area"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an area to host your airflow installation"),(0,o.kt)("li",{parentName:"ul"},"Download the docker-compose file hosted in DataHub's repo in that directory"),(0,o.kt)("li",{parentName:"ul"},"Download a sample dag to use for testing Airflow lineage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p airflow_install\ncd airflow_install\n# Download docker-compose file\ncurl -L 'https://raw.githubusercontent.com/datahub-project/datahub/master/docker/airflow/docker-compose.yaml' -o docker-compose.yaml\n# Create dags directory\nmkdir -p dags\n# Download a sample DAG\ncurl -L 'https://raw.githubusercontent.com/datahub-project/datahub/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_backend_demo.py' -o dags/lineage_backend_demo.py\n")),(0,o.kt)("h3",{id:"what-is-different-between-this-docker-compose-file-and-the-official-apache-airflow-docker-compose-file"},"What is different between this docker-compose file and the official Apache Airflow docker compose file?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This docker-compose file is derived from the ",(0,o.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/stable/start/docker.html#docker-compose-yaml"},"official Airflow docker-compose file")," but makes a few critical changes to make interoperability with DataHub seamless."),(0,o.kt)("li",{parentName:"ul"},"The Airflow image in this docker compose file extends the ",(0,o.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/docker-stack/index.html"},"base Apache Airflow docker image")," and is published ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/airflow-datahub"},"here"),". It includes the latest ",(0,o.kt)("inlineCode",{parentName:"li"},"acryl-datahub")," pip package installed by default so you don't need to install it yourself."),(0,o.kt)("li",{parentName:"ul"},"This docker-compose file sets up the networking so that",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the Airflow containers can talk to the DataHub containers through the ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub_network")," bridge interface."),(0,o.kt)("li",{parentName:"ul"},"Modifies the port-forwarding to map the Airflow Webserver port ",(0,o.kt)("inlineCode",{parentName:"li"},"8080")," to port ",(0,o.kt)("inlineCode",{parentName:"li"},"58080")," on the localhost (to avoid conflicts with DataHub metadata-service, which is mapped to 8080 by default)"))),(0,o.kt)("li",{parentName:"ul"},"This docker-compose file also sets up the ENV variables to configure Airflow's Lineage Backend to talk to DataHub. (Look for the ",(0,o.kt)("inlineCode",{parentName:"li"},"AIRFLOW__LINEAGE__BACKEND")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"AIRFLOW__LINEAGE__DATAHUB_KWARGS")," variables)")),(0,o.kt)("h2",{id:"step-2-bring-up-airflow"},"Step 2: Bring up Airflow"),(0,o.kt)("p",null,"First you need to initialize airflow in order to create initial database tables and the initial airflow user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose up airflow-init\n")),(0,o.kt)("p",null,"You should see the following final initialization message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"airflow-init_1       | Admin user airflow created\nairflow-init_1       | 2.1.3\nairflow_install_airflow-init_1 exited with code 0\n\n")),(0,o.kt)("p",null,"Afterwards you need to start the airflow docker-compose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,o.kt)("p",null,"You should see a host of messages as Airflow starts up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Container airflow_deploy_airflow-scheduler_1  Started                                                                               15.7s\nAttaching to airflow-init_1, airflow-scheduler_1, airflow-webserver_1, airflow-worker_1, flower_1, postgres_1, redis_1\nairflow-worker_1     | BACKEND=redis\nairflow-worker_1     | DB_HOST=redis\nairflow-worker_1     | DB_PORT=6379\nairflow-worker_1     |\nairflow-webserver_1  |\nairflow-init_1       | DB: postgresql+psycopg2://airflow:***@postgres/airflow\nairflow-init_1       | [2021-08-31 20:02:07,534] {db.py:702} INFO - Creating tables\nairflow-init_1       | INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.\nairflow-init_1       | INFO  [alembic.runtime.migration] Will assume transactional DDL.\nairflow-scheduler_1  |   ____________       _____________\nairflow-scheduler_1  |  ____    |__( )_________  __/__  /________      __\nairflow-scheduler_1  | ____  /| |_  /__  ___/_  /_ __  /_  __ \\_ | /| / /\nairflow-scheduler_1  | ___  ___ |  / _  /   _  __/ _  / / /_/ /_ |/ |/ /\nairflow-scheduler_1  |  _/_/  |_/_/  /_/    /_/    /_/  \\____/____/|__/\nairflow-scheduler_1  | [2021-08-31 20:02:07,736] {scheduler_job.py:661} INFO - Starting the scheduler\nairflow-scheduler_1  | [2021-08-31 20:02:07,736] {scheduler_job.py:666} INFO - Processing each file at most -1 times\nairflow-scheduler_1  | [2021-08-31 20:02:07,915] {manager.py:254} INFO - Launched DagFileProcessorManager with pid: 25\nairflow-scheduler_1  | [2021-08-31 20:02:07,918] {scheduler_job.py:1197} INFO - Resetting orphaned tasks for active dag runs\nairflow-scheduler_1  | [2021-08-31 20:02:07,923] {settings.py:51} INFO - Configured default timezone Timezone('UTC')\nflower_1             |\nairflow-worker_1     |  * Serving Flask app \"airflow.utils.serve_logs\" (lazy loading)\nairflow-worker_1     |  * Environment: production\nairflow-worker_1     |    WARNING: This is a development server. Do not use it in a production deployment.\nairflow-worker_1     |    Use a production WSGI server instead.\nairflow-worker_1     |  * Debug mode: off\nairflow-worker_1     | [2021-08-31 20:02:09,283] {_internal.py:113} INFO -  * Running on http://0.0.0.0:8793/ (Press CTRL+C to quit)\nflower_1             | BACKEND=redis\nflower_1             | DB_HOST=redis\nflower_1             | DB_PORT=6379\nflower_1             |\n")),(0,o.kt)("p",null,"Finally, Airflow should be healthy and up on port 58080. Navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:58080"},"http://localhost:58080")," to confirm and find your Airflow webserver.\nThe default username and password is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"airflow:airflow\n")),(0,o.kt)("h2",{id:"step-3-register-datahub-connection-hook-to-airflow"},"Step 3: Register DataHub connection (hook) to Airflow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker exec -it `docker ps | grep webserver | cut -d \" \" -f 1` airflow connections add --conn-type 'datahub_rest' 'datahub_rest_default' --conn-host 'http://datahub-gms:8080'\n")),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Successfully added `conn_id`=datahub_rest_default : datahub_rest://:@http://datahub-gms:8080:\n")),(0,o.kt)("h3",{id:"what-is-the-above-command-doing"},"What is the above command doing?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find the container running airflow webserver: ",(0,o.kt)("inlineCode",{parentName:"li"},'docker ps | grep webserver | cut -d " " -f 1')),(0,o.kt)("li",{parentName:"ul"},"Running the ",(0,o.kt)("inlineCode",{parentName:"li"},"airflow connections add ...")," command inside that container to register the ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub_rest")," connection type and connect it to the ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub-gms")," host on port 8080."),(0,o.kt)("li",{parentName:"ul"},"Note: This is what requires Airflow to be able to connect to ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub-gms")," the host (this is the container running datahub-gms image) and this is why we needed to connect the Airflow containers to the ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub_network")," using our custom docker-compose file.")),(0,o.kt)("h2",{id:"step-4-find-the-dags-and-run-it"},"Step 4: Find the DAGs and run it"),(0,o.kt)("p",null,"Navigate the Airflow UI to find the sample Airflow dag we just brought in"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Find the DAG",src:a(76880).Z,width:"490",height:"233"})),(0,o.kt)("p",null,"By default, Airflow loads all DAG-s in paused status. Unpause the sample DAG to use it.\n",(0,o.kt)("img",{alt:"Paused DAG",src:a(80813).Z,width:"1098",height:"441"}),"\n",(0,o.kt)("img",{alt:"Unpaused DAG",src:a(4480).Z,width:"1109",height:"440"})),(0,o.kt)("p",null,"Then trigger the DAG to run."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Trigger the DAG",src:a(73627).Z,width:"441",height:"385"})),(0,o.kt)("p",null,"After the DAG runs successfully, go over to your DataHub instance to see the Pipeline and navigate its lineage."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DataHub Pipeline View",src:a(31091).Z,width:"1849",height:"445"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DataHub Pipeline Entity",src:a(27587).Z,width:"1838",height:"751"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DataHub Task View",src:a(43934).Z,width:"1857",height:"728"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DataHub Lineage View",src:a(83496).Z,width:"1871",height:"665"})),(0,o.kt)("h2",{id:"troubleshooting"},"TroubleShooting"),(0,o.kt)("p",null,"Most issues are related to connectivity between Airflow and DataHub."),(0,o.kt)("p",null,"Here is how you can debug them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Find the Task Log",src:a(17519).Z,width:"1371",height:"688"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Inspect the Log",src:a(45044).Z,width:"1852",height:"554"})),(0,o.kt)("p",null,"In this case, clearly the connection ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-rest")," has not been registered. Looks like we forgot to register the connection with Airflow!\nLet's execute Step 4 to register the datahub connection with Airflow."),(0,o.kt)("p",null,"In case the connection was registered successfully but you are still seeing ",(0,o.kt)("inlineCode",{parentName:"p"},"Failed to establish a new connection"),", check if the connection is ",(0,o.kt)("inlineCode",{parentName:"p"},"http://datahub-gms:8080")," and not ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,o.kt)("p",null,"After re-running the DAG, we see success!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pipeline Success",src:a(86196).Z,width:"382",height:"118"})))}u.isMDXComponent=!0},45044:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/connection_error-c560ae741afeebf5e6d9e1f27c8c61ca.png"},83496:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/datahub_lineage_view-a5035a087e11d89a8fd9846f9ad067e2.png"},27587:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/datahub_pipeline_entity-20d7e548776adeba34931eab03dca2a4.png"},31091:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/datahub_pipeline_view-85c984d78312a4f951b0fe3bce292e7c.png"},43934:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/datahub_task_view-6c2f0f56c915c0c6d72042e813e98344.png"},76880:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/find_the_dag-2c03afe055c0327da8b68b18137c9573.png"},17519:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/finding_failed_log-9422d89e76815f1a6a4dfd0677dfb78c.png"},80813:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/paused_dag-3d628fac9913b28962cb55185b2e8fa0.png"},86196:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"},73627:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/trigger_dag-9e39a32897ef03110578515de45520ea.png"},4480:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/unpaused_dag-e52e6025e6ecb46227500c6cb9c6ffbe.png"}}]);