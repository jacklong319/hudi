"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[49174],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18938:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(26396),a(58215);const i={title:"Release 0.12.1",sidebar_position:7,layout:"releases",toc:!0},l=void 0,o={unversionedId:"release-0.12.1",id:"release-0.12.1",title:"Release 0.12.1",description:"Release 0.12.1 (docs)",source:"@site/releases/release-0.12.1.md",sourceDirName:".",slug:"/release-0.12.1",permalink:"/cn/releases/release-0.12.1",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Release 0.12.1",sidebar_position:7,layout:"releases",toc:!0},sidebar:"releases",previous:{title:"Release 0.12.2",permalink:"/cn/releases/release-0.12.2"},next:{title:"Release 0.12.0",permalink:"/cn/releases/release-0.12.0"}},s=[{value:"Release 0.12.1 (docs)",id:"release-0121-docs",children:[],level:2},{value:"Long Term Support",id:"long-term-support",children:[],level:2},{value:"Migration Guide",id:"migration-guide",children:[],level:2},{value:"Release Highlights",id:"release-highlights",children:[{value:"Improve Hudi Cli",id:"improve-hudi-cli",children:[],level:3},{value:"Fix invalid record key stats in Parquet metadata",id:"fix-invalid-record-key-stats-in-parquet-metadata",children:[],level:3},{value:"Bug fixes",id:"bug-fixes",children:[],level:3}],level:2},{value:"Known Regressions",id:"known-regressions",children:[],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"release-0121-docs"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/apache/hudi/releases/tag/release-0.12.1"},"Release 0.12.1")," (",(0,r.kt)("a",{parentName:"h2",href:"/docs/0.12.1/quick-start-guide"},"docs"),")"),(0,r.kt)("h2",{id:"long-term-support"},"Long Term Support"),(0,r.kt)("p",null,"We aim to maintain 0.12 for a longer period of time and provide a stable release through the latest 0.12.x release for\nusers to migrate to.  The latest 0.12 release is ",(0,r.kt)("a",{parentName:"p",href:"/releases/release-0.12.3"},"0.12.3"),"."),(0,r.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This release (0.12.1) does not introduce any new table version, thus no migration is needed if you are on 0.12.0."),(0,r.kt)("li",{parentName:"ul"},"If migrating from an older release, please check the migration guide from the previous release notes, specifically\nthe upgrade instructions in ",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.6.0"},"0.6.0"),",\n",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.9.0"},"0.9.0"),", ",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.10.0"},"0.10.0"),",\n",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.11.0"},"0.11.0"),", and ",(0,r.kt)("a",{parentName:"li",href:"/releases/release-0.12.0"},"0.12.0"),".")),(0,r.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,r.kt)("h3",{id:"improve-hudi-cli"},"Improve Hudi Cli"),(0,r.kt)("p",null,"Add command to repair deprecated partition, rename partition and trace file group through a range of commits."),(0,r.kt)("h3",{id:"fix-invalid-record-key-stats-in-parquet-metadata"},"Fix invalid record key stats in Parquet metadata"),(0,r.kt)("p",null,'Crux of the problem was that min/max statistics for the record keys were computed incorrectly during (Spark-specific) row-writing\nBulk Insert operation affecting Key Range Pruning flow w/in Hoodie Bloom Index tagging sequence, resulting into updated records being incorrectly tagged\nas "inserts" and not as "updates", leading to duplicated records in the table.'),(0,r.kt)("p",null,"If all of the following is applicable to you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using Spark as an execution engine"),(0,r.kt)("li",{parentName:"ol"},"Using Bulk Insert (using row-writing\n",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/next/configurations#hoodiedatasourcewriterowwriterenable"},"https://hudi.apache.org/docs/next/configurations#hoodiedatasourcewriterowwriterenable"),",\nenabled ",(0,r.kt)("em",{parentName:"li"},"by default"),")"),(0,r.kt)("li",{parentName:"ol"},"Using Bloom Index (with range-pruning\n",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/next/basic_configurations/#hoodiebloomindexprunebyranges"},"https://hudi.apache.org/docs/next/basic_configurations/#hoodiebloomindexprunebyranges"),"\nenabled, enabled ",(0,r.kt)("em",{parentName:"li"},"by default"),') for "UPSERT" operations')),(0,r.kt)("p",null,"Recommended to upgrading to 0.12.1 to avoid getting duplicate records in your pipeline."),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("p",null,"0.12.1 release is mainly intended for bug fixes and stability. The fixes span across many components, including"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DeltaStreamer"),(0,r.kt)("li",{parentName:"ul"},"Table config"),(0,r.kt)("li",{parentName:"ul"},"Table services"),(0,r.kt)("li",{parentName:"ul"},"Metadata table"),(0,r.kt)("li",{parentName:"ul"},"Spark SQL support"),(0,r.kt)("li",{parentName:"ul"},"Presto support"),(0,r.kt)("li",{parentName:"ul"},"Hive Sync"),(0,r.kt)("li",{parentName:"ul"},"Flink engine"),(0,r.kt)("li",{parentName:"ul"},"Unit, functional, integration tests and CI")),(0,r.kt)("h2",{id:"known-regressions"},"Known Regressions"),(0,r.kt)("p",null,"We discovered a regression in Hudi 0.12.1 release related to metadata table and timeline server interplay with streaming ingestion pipelines."),(0,r.kt)("p",null,"The FileSystemView that Hudi maintains internally could go out of sync due to a occasional race conditions when table services are involved\n(compaction, clustering) and could result in updates and deletes routed to older file versions and hence resulting in missed updates and deletes."),(0,r.kt)("p",null,"Here are the user-flows that could potentially be impacted with this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This impacts pipelines using Deltastreamer in ",(0,r.kt)("strong",{parentName:"li"},"continuous mode")," (sync once is not impacted), Spark streaming, or if you have been directly\nusing write client across batches/commits instead of the standard ways to write to Hudi. In other words, batch writes should not be impacted."),(0,r.kt)("li",{parentName:"ul"},"Among these write models, this could have an impact only when table services are enabled.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"COW: clustering enabled (inline or async)"),(0,r.kt)("li",{parentName:"ul"},"MOR: compaction enabled (by default, inline or async)"))),(0,r.kt)("li",{parentName:"ul"},"Also, the impact is applicable only when metadata table is enabled, and timeline server is enabled (which are defaults as of 0.12.1)")),(0,r.kt)("p",null,"Based on some production data, we expect this issue might impact roughly < 1% of updates to be missed, since its a race condition\nand table services are generally scheduled once every N commits. The percentage of update misses could be even less if the\nfrequency of table services is less."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-5863"},"Here")," is the jira for the issue of interest and the fix has already been landed in master.\n0.12.3 should have the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/8079"},"fix"),". Until we have a 0.12.3 release, we recommend you to disable metadata table\n(",(0,r.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.enable=false"),") to mitigate the issue."),(0,r.kt)("p",null,"We also discovered a regression for Flink streaming writer with the hive meta sync which is introduced by HUDI-3730, the refactoring to ",(0,r.kt)("inlineCode",{parentName:"p"},"HiveSyncConfig"),"\ncauses the Hive ",(0,r.kt)("inlineCode",{parentName:"p"},"Resources")," config objects leaking, which finally leads to an OOM exception for the JobManager if the streaming job runs continuously for weeks.\n0.12.3 should have the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/8050"},"fix"),". Until we have a 0.12.3 release, we recommend you to cherry-pick the fix to local\nif hive meta sync is required."),(0,r.kt)("p",null,"Sorry about the inconvenience caused."),(0,r.kt)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,r.kt)("p",null,"The raw release notes are available ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12352182"},"here")))}d.isMDXComponent=!0},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),i=a(72389),l=a(79443);const o=function(){const e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(53810),u=a(86010);const c={tabItem:"tabItem_vU9c"};function d(e){const{lazy:t,block:a,defaultValue:i,values:l,groupId:d,className:p}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=l??m.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.lx)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??m.find((e=>e.props.default))?.props.value??m[0]?.props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=o(),[k,y]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=d){const e=b[d];null!=e&&e!==k&&h.some((t=>t.value===e))&&y(e)}const x=e=>{const t=e.currentTarget,a=w.indexOf(t),n=h[a].value;n!==k&&(N(t),y(n),null!=d&&v(d,n))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},p)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,u.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":k===t})}),a??t)}))),t?(0,r.cloneElement)(m.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);