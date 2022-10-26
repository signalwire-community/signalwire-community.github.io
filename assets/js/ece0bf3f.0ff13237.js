"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[1309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(k,s(s({ref:t},u),{},{components:r})):a.createElement(k,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5},s="Relay.Task",l={unversionedId:"php/reference/relay_task",id:"php/reference/relay_task",title:"Relay.Task",description:"A Relay.Task is simple way to send jobs to your Relay.Consumers from a short lived process, like a web framework. Relay Tasks allow you to pass commands down to your Consumers without blocking your short lived request. Think of a Relay Task as a way to queue a job for your background workers to processes asynchronously.",source:"@site/docs/php/reference/relay_task.mdx",sourceDirName:"php/reference",slug:"/php/reference/relay_task",permalink:"/docs/php/reference/relay_task",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_task.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"phpSidebar",previous:{title:"SendResult",permalink:"/docs/php/reference/relay_messaging/send_result"},next:{title:"Examples",permalink:"/docs/php/examples"}},i={},p=[{value:"Creating Tasks",id:"creating-tasks",level:2},{value:"Methods",id:"methods",level:2},{value:"deliver",id:"deliver",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"relaytask"},"Relay.Task"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Relay.Task")," is simple way to send jobs to your ",(0,n.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_consumer"},(0,n.kt)("inlineCode",{parentName:"a"},"Relay.Consumers"))," from a short lived process, like a web framework. Relay Tasks allow you to pass commands down to your Consumers without blocking your short lived request. Think of a Relay Task as a way to queue a job for your background workers to processes asynchronously."),(0,n.kt)("h2",{id:"creating-tasks"},"Creating Tasks"),(0,n.kt)("p",null,"A Task is a simple object with 2 required arguments: ",(0,n.kt)("inlineCode",{parentName:"p"},"$project")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$token"),". Project and Token are used to send the Task to your Consumers. Once created, the Task has only one method ",(0,n.kt)("inlineCode",{parentName:"p"},"deliver")," to send jobs to your Consumer."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nrequire dirname(__FILE__) . '/vendor/autoload.php';\n\nuse SignalWire\\Relay\\Tasking\\Task;\n\n$task = new Task('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');\n$context = 'office';\n$delivered = $task->deliver($context, [\n  'key' => 'value',\n  'data' => 'data for your job'\n]);\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("div",{class:"method-definitions"}),(0,n.kt)("h4",{id:"deliver"},"deliver"),(0,n.kt)("p",null,"Send a job to your ",(0,n.kt)("inlineCode",{parentName:"p"},"Consumer")," in a specific context."),(0,n.kt)("p",null,"Available In: ",(0,n.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$context")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{class:"method-prop-type"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{class:"required-arg"},"required")),(0,n.kt)("td",{parentName:"tr",align:null},"Context where to send the Task.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$message")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{class:"method-prop-type"},"array")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{class:"required-arg"},"required")),(0,n.kt)("td",{parentName:"tr",align:null},"Array with your custom data that will be sent to your Consumer's ",(0,n.kt)("a",{parentName:"td",href:"/docs/php/reference/relay_consumer#ontask"},(0,n.kt)("inlineCode",{parentName:"a"},"onTask"))," handler.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," - Whether the Task has been sent successfully."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Deliver a task to your Consumer with a message to then make an outbound Call."',title:'"Deliver',a:!0,task:!0,to:!0,your:!0,Consumer:!0,with:!0,message:!0,then:!0,make:!0,an:!0,outbound:!0,'Call."':!0},"<?php\n\n$delivered = $task->deliver('office', [\n  'action' => 'call',\n  'from' => '+18881112222'\n  'to' => '+18881113333'\n]);\n")))}c.isMDXComponent=!0}}]);