"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,u=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(u,o(o({ref:t},h),{},{components:n})):a.createElement(u,o({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(83117),i=(n(67294),n(3905));const r={title:"What is a relationship?",slug:"/what/relationship",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/relationship.md"},o="What is a relationship?",s={unversionedId:"docs/what/relationship",id:"docs/what/relationship",title:"What is a relationship?",description:"A relationship is a named associate between exactly two entities, a source and a destination.",source:"@site/genDocs/docs/what/relationship.md",sourceDirName:"docs/what",slug:"/what/relationship",permalink:"/datahubSitePreview/docs/what/relationship",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/relationship.md",tags:[],version:"current",frontMatter:{title:"What is a relationship?",slug:"/what/relationship",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/relationship.md"}},l={},p=[{value:"Direction of Relationships",id:"direction-of-relationships",level:2},{value:"High Cardinality Relationships",id:"high-cardinality-relationships",level:2}],h={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-a-relationship"},"What is a relationship?"),(0,i.kt)("p",null,"A relationship is a named associate between exactly two ",(0,i.kt)("a",{parentName:"p",href:"/datahubSitePreview/docs/what/entity"},"entities"),", a source and a destination. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"metadata-modeling",src:n(4617).Z,width:"1564",height:"1074"})),(0,i.kt)("p",null,"From the above graph, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Group")," entity can be linked to a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," entity via a ",(0,i.kt)("inlineCode",{parentName:"p"},"HasMember")," relationship.\nNote that the name of the relationship reflects the direction, i.e. pointing from ",(0,i.kt)("inlineCode",{parentName:"p"},"Group")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),".\nThis is due to the fact that the actual metadata aspect holding this information is associated with ",(0,i.kt)("inlineCode",{parentName:"p"},"Group"),", rather than User.\nHad the direction been reversed, the relationship would have been named ",(0,i.kt)("inlineCode",{parentName:"p"},"IsMemberOf")," instead.\nSee ",(0,i.kt)("a",{parentName:"p",href:"#direction-of-relationships"},"Direction of Relationships")," for more discussions on relationship directionality.\nA specific instance of a relationship, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"urn:li:corpGroup:group1")," has a member ",(0,i.kt)("inlineCode",{parentName:"p"},"urn:li:corpuser:user1"),",\ncorresponds to an edge in the metadata graph."),(0,i.kt)("p",null,"Similar to an entity, a relationship can also be associated with optional attributes that are derived from the metadata.\nFor example, from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Membership")," metadata aspect shown below, we\u2019re able to derive the ",(0,i.kt)("inlineCode",{parentName:"p"},"HasMember")," relationship that links a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Group")," to a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),'. We can also include additional attribute to the relationship, e.g. importance, which corresponds to the position of the specific member in the original membership array. This allows complex graph query that travel only relationships that match certain criteria, e.g. "returns only the top-5 most important members of this group."\nSimilar to the entity attributes, relationship attributes should only be added based on the expected query patterns to reduce the indexing cost.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace: com.linkedin.group\n\nimport com.linkedin.common.AuditStamp\nimport com.linkedin.common.CorpuserUrn\n\n/**\n * The membership metadata for a group\n */\nrecord Membership {\n\n  /** Audit stamp for the last change */\n  modified: AuditStamp\n\n  /** Admin of the group */\n  admin: CorpuserUrn\n\n  /** Members of the group, ordered in descending importance */\n  members: array[CorpuserUrn]\n}\n")),(0,i.kt)("p",null,'Relationships are meant to be "entity-neutral". In other words, one would expect to use the same ',(0,i.kt)("inlineCode",{parentName:"p"},"OwnedBy")," relationship to link a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataset")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," and to link a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),". As Pegasus doesn\u2019t allow typing a field using multiple URNs (because they\u2019re all essentially strings), we resort to using generic URN type for the source and destination.\nWe also introduce a ",(0,i.kt)("inlineCode",{parentName:"p"},"@pairings")," ",(0,i.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_migration#shorthand-for-custom-properties"},"annotation")," to limit the allowed source and destination URN types."),(0,i.kt)("p",null,"While it\u2019s possible to model relationships in rest.li as ",(0,i.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/modeling#association"},"association resources"),', which often get stored as mapping tables, it is far more common to model them as "foreign keys" field in a metadata aspect. For instance, the ',(0,i.kt)("inlineCode",{parentName:"p"},"Ownership")," aspect is likely to contain an array of owner\u2019s corpuser URNs."),(0,i.kt)("p",null,"Below is an example of how a relationship is modeled in PDL. Note that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"As the ",(0,i.kt)("inlineCode",{parentName:"li"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"destination")," are of generic URN type, we\u2019re able to factor them out to a common ",(0,i.kt)("inlineCode",{parentName:"li"},"BaseRelationship")," model."),(0,i.kt)("li",{parentName:"ol"},"Each model is expected to have a ",(0,i.kt)("inlineCode",{parentName:"li"},"@pairings")," annotation that is an array of all allowed source-destination URN pairs."),(0,i.kt)("li",{parentName:"ol"},"Unlike entity attributes, there\u2019s no requirement on making all relationship attributes optional since relationships do not support partial updates.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.relationship\n\nimport com.linkedin.common.Urn\n\n/**\n * Common fields that apply to all relationships\n */\nrecord BaseRelationship {\n\n  /**\n   * Urn for the source of the relationship\n   */\n  source: Urn\n\n  /**\n   * Urn for the destination of the relationship\n   */\n  destination: Urn\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace com.linkedin.metadata.relationship\n\n/**\n * Data model for a has-member relationship\n */\n@pairings = [ {\n  "destination" : "com.linkedin.common.urn.CorpGroupUrn",\n  "source" : "com.linkedin.common.urn.CorpUserUrn"\n} ]\nrecord HasMembership includes BaseRelationship\n{\n  /**\n   * The importance of the membership\n   */\n  importance: int \n}\n')),(0,i.kt)("h2",{id:"direction-of-relationships"},"Direction of Relationships"),(0,i.kt)("p",null,'As relationships are modeled as directed edges between nodes, it\u2019s natural to ask which way should it be pointing,\nor should there be edges going both ways? The answer is, "doesn\u2019t really matter." It\u2019s rather an aesthetic choice than technical one. '),(0,i.kt)("p",null,"For one, the actual direction doesn\u2019t really impact the execution of graph queries. Most graph DBs are fully capable of traversing edges in reverse direction efficiently."),(0,i.kt)("p",null,'That being said, generally there\u2019s a more "natural way" to specify the direction of a relationship, which closely relate to how the metadata is stored. For example, the membership information for an LDAP group is generally stored as a list in group\u2019s metadata. As a result, it\u2019s more natural to model a ',(0,i.kt)("inlineCode",{parentName:"p"},"HasMember")," relationship that points from a group to a member, instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"IsMemberOf")," relationship pointing from member to group."),(0,i.kt)("p",null,"Since all relationships are explicitly declared, it\u2019s fairly easy for a user to discover what relationships are available and their directionality by inspecting\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/relationship"},"relationships directory"),". It\u2019s also possible to provide a UI for the catalog of entities and relationships for analysts who are interested in building complex graph queries to gain insights into the metadata."),(0,i.kt)("h2",{id:"high-cardinality-relationships"},"High Cardinality Relationships"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/datahubSitePreview/docs/advanced/high-cardinality"},"this doc")," for suggestions on how to best model relationships with high cardinality."))}d.isMDXComponent=!0},4617:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metadata-modeling-92c9ff3f89f50361a40b60173fe223c3.png"}}]);