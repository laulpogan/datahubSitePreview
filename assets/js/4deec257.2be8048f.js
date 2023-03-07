"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=i,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},68032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(83117),i=(a(67294),a(3905));const r={title:"Concepts & Key Components",slug:"/authentication/concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/concepts.md"},o="Concepts & Key Components",s={unversionedId:"docs/authentication/concepts",id:"docs/authentication/concepts",title:"Concepts & Key Components",description:"We introduced a few important concepts to the Metadata Service to make authentication work:",source:"@site/genDocs/docs/authentication/concepts.md",sourceDirName:"docs/authentication",slug:"/authentication/concepts",permalink:"/datahubSitePreview/docs/authentication/concepts",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/concepts.md",tags:[],version:"current",frontMatter:{title:"Concepts & Key Components",slug:"/authentication/concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/concepts.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/datahubSitePreview/docs/authentication"},next:{title:"JaaS Authentication",permalink:"/datahubSitePreview/docs/authentication/guides/jaas"}},c={},l=[{value:"What is an Actor?",id:"what-is-an-actor",level:2},{value:"What is an Authenticator?",id:"what-is-an-authenticator",level:2},{value:"What is an AuthenticatorChain?",id:"what-is-an-authenticatorchain",level:2},{value:"What is the AuthenticationFilter?",id:"what-is-the-authenticationfilter",level:2},{value:"What is a DataHub Token Service? What are Access Tokens?",id:"what-is-a-datahub-token-service-what-are-access-tokens",level:2}],u={toc:l};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"concepts--key-components"},"Concepts & Key Components"),(0,i.kt)("p",null,"We introduced a few important concepts to the Metadata Service to make authentication work:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Actor"),(0,i.kt)("li",{parentName:"ol"},"Authenticator"),(0,i.kt)("li",{parentName:"ol"},"AuthenticatorChain"),(0,i.kt)("li",{parentName:"ol"},"AuthenticationFilter"),(0,i.kt)("li",{parentName:"ol"},"DataHub Access Token"),(0,i.kt)("li",{parentName:"ol"},"DataHub Token Service")),(0,i.kt)("p",null,"In following sections, we'll take a closer look at each individually."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(56935).Z,width:"3545",height:"1161"}),"\n",(0,i.kt)("em",{parentName:"p"},"High level overview of Metadata Service Authentication")),(0,i.kt)("h2",{id:"what-is-an-actor"},"What is an Actor?"),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"Actor")," is a concept within the new Authentication subsystem to represent a unique identity / principal that is initiating actions (e.g. read & write requests)\non the platform."),(0,i.kt)("p",null,"An actor can be characterized by 2 attributes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Type"),': The "type" of the actor making a request. The purpose is to for example distinguish between a "user" & "service" actor. Currently, the "user" actor type is the only one\nformally supported.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Id"),': A unique identifier for the actor within DataHub. This is commonly known as a "principal" in other systems. In the case of users, this\nrepresents a unique "username". This username is in turn used when converting from the "Actor" concept into a Metadata Entity Urn (e.g. CorpUserUrn).')),(0,i.kt)("p",null,'For example, the root "datahub" super user would have the following attributes:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n   "type": "USER",\n   "id": "datahub"\n}\n')),(0,i.kt)("p",null,"Which is mapped to the CorpUser urn:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"urn:li:corpuser:datahub\n")),(0,i.kt)("p",null,"for Metadata retrieval."),(0,i.kt)("h2",{id:"what-is-an-authenticator"},"What is an Authenticator?"),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"Authenticator")," is a pluggable component inside the Metadata Service that is responsible for authenticating an inbound request provided context about the request (currently, the request headers).\nAuthentication boils down to successfully resolving an ",(0,i.kt)("strong",{parentName:"p"},"Actor")," to associate with the inbound request."),(0,i.kt)("p",null,"There can be many types of Authenticator. For example, there can be Authenticators that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify the authenticity of access tokens (ie. issued by either DataHub itself or a 3rd-party IdP)"),(0,i.kt)("li",{parentName:"ul"},"Authenticate username / password credentials against a remote database (ie. LDAP)")),(0,i.kt)("p",null,"and more! A key goal of the abstraction is ",(0,i.kt)("em",{parentName:"p"},"extensibility"),": a custom Authenticator can be developed to authenticate requests\nbased on an organization's unique needs."),(0,i.kt)("p",null,"DataHub ships with 2 Authenticators by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DataHubSystemAuthenticator"),": Verifies that inbound requests have originated from inside DataHub itself using a shared system identifier\nand secret. This authenticator is always present.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DataHubTokenAuthenticator"),": Verifies that inbound requests contain a DataHub-issued Access Token (discussed further in the \"DataHub Access Token\" section below) in their\n'Authorization' header. This authenticator is required if Metadata Service Authentication is enabled."))),(0,i.kt)("h2",{id:"what-is-an-authenticatorchain"},"What is an AuthenticatorChain?"),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"AuthenticatorChain")," is a series of ",(0,i.kt)("strong",{parentName:"p"},"Authenticators")," that are configured to run one-after-another. This allows\nfor configuring multiple ways to authenticate a given request, for example via LDAP OR via local key file."),(0,i.kt)("p",null,"Only if each Authenticator within the chain fails to authenticate a request will it be rejected."),(0,i.kt)("p",null,"The Authenticator Chain can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," file under ",(0,i.kt)("inlineCode",{parentName:"p"},"authentication.authenticators"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"authentication:\n  .... \n  authenticators:\n    # Configure the Authenticators in the chain \n    - type: com.datahub.authentication.Authenticator1\n      ...\n    - type: com.datahub.authentication.Authenticator2 \n    .... \n")),(0,i.kt)("h2",{id:"what-is-the-authenticationfilter"},"What is the AuthenticationFilter?"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"AuthenticationFilter")," is a ",(0,i.kt)("a",{parentName:"p",href:"http://tutorials.jenkov.com/java-servlets/servlet-filters.html"},"servlet filter")," that authenticates each and requests to the Metadata Service.\nIt does so by constructing and invoking an ",(0,i.kt)("strong",{parentName:"p"},"AuthenticatorChain"),", described above."),(0,i.kt)("p",null,"If an Actor is unable to be resolved by the AuthenticatorChain, then a 401 unauthorized exception will be returned by the filter."),(0,i.kt)("h2",{id:"what-is-a-datahub-token-service-what-are-access-tokens"},"What is a DataHub Token Service? What are Access Tokens?"),(0,i.kt)("p",null,"Along with Metadata Service Authentication comes an important new component called the ",(0,i.kt)("strong",{parentName:"p"},"DataHub Token Service"),". The purpose of this\ncomponent is twofold:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate Access Tokens that grant access to the Metadata Service"),(0,i.kt)("li",{parentName:"ol"},"Verify the validity of Access Tokens presented to the Metadata Service")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Access Tokens")," granted by the Token Service take the form of ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"Json Web Tokens"),", a type of stateless token which\nhas a finite lifespan & is verified using a unique signature. JWTs can also contain a set of claims embedded within them. Tokens issued by the Token\nService contain the following claims:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"exp: the expiration time of the token"),(0,i.kt)("li",{parentName:"ul"},"version: version of the DataHub Access Token for purposes of evolvability (currently 1)"),(0,i.kt)("li",{parentName:"ul"},"type: The type of token, currently SESSION (used for UI-based sessions) or PERSONAL (used for personal access tokens)"),(0,i.kt)("li",{parentName:"ul"},"actorType: The type of the ",(0,i.kt)("strong",{parentName:"li"},"Actor")," associated with the token. Currently, USER is the only type supported."),(0,i.kt)("li",{parentName:"ul"},"actorId: The id of the ",(0,i.kt)("strong",{parentName:"li"},"Actor")," associated with the token.")),(0,i.kt)("p",null,"Today, Access Tokens are granted by the Token Service under two scenarios:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"UI Login"),": When a user logs into the DataHub UI, for example via ",(0,i.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/authentication/guides/jaas"},"JaaS")," or\n",(0,i.kt)("a",{parentName:"li",href:"/datahubSitePreview/docs/authentication/guides/sso/configure-oidc-react"},"OIDC"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," service issues an\nrequest to the Metadata Service to generate a SESSION token ",(0,i.kt)("em",{parentName:"li"},"on behalf of")," of the user logging in. (*Only the frontend service is authorized to perform this action)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Generating Personal Access Tokens"),": When a user requests to generate a Personal Access Token (described below) from the UI.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"At present, the Token Service supports the symmetric signing method ",(0,i.kt)("inlineCode",{parentName:"p"},"HS256")," to generate and verify tokens.")),(0,i.kt)("p",null,"Now that we're familiar with the concepts, we will talk concretely about what new capabilities have been built on top\nof Metadata Service Authentication."))}h.isMDXComponent=!0},56935:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metadata-service-auth-da097fc5649846ec4c8965637ac3080b.png"}}]);