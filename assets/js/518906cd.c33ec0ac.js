"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[9036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_label:"SendResult"},l="Relay.Messaging.SendResult",i={unversionedId:"php/reference/relay_messaging/send_result",id:"php/reference/relay_messaging/send_result",title:"Relay.Messaging.SendResult",description:"This object returned from send) method that represents the result of a send operation.",source:"@site/docs/php/reference/relay_messaging/send_result.mdx",sourceDirName:"php/reference/relay_messaging",slug:"/php/reference/relay_messaging/send_result",permalink:"/docs/php/reference/relay_messaging/send_result",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_messaging/send_result.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"SendResult"},sidebar:"phpSidebar",previous:{title:"Message",permalink:"/docs/php/reference/relay_messaging/message"},next:{title:"Relay.Task",permalink:"/docs/php/reference/relay_task"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"getMessageId",id:"getmessageid",level:3},{value:"isSuccessful",id:"issuccessful",level:3}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relaymessagingsendresult"},"Relay.Messaging.SendResult"),(0,a.kt)("p",null,"This object returned from ",(0,a.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_messaging/#send"},(0,a.kt)("inlineCode",{parentName:"a"},"send")),") method that represents the result of a send operation."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"successful")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"method-prop-type"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the send operation has successfully queued the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"messageId")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"method-prop-type"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The ID of the message.")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("div",{class:"method-definitions"}),(0,a.kt)("h3",{id:"getmessageid"},"getMessageId"),(0,a.kt)("p",null,"Returns the ID of the queued message."),(0,a.kt)("p",null,"Available In: ",(0,a.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.1+-brightgreen.svg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")," - Message ID."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Send a message and retrieve the ID."',title:'"Send',a:!0,message:!0,and:!0,retrieve:!0,the:!0,'ID."':!0},"<?php\n\n$params = [\n  'context' => 'office',\n  'from' => '+1XXXXXXXXXX',\n  'to' => '+1YYYYYYYYYY',\n  'body' => 'Welcome at SignalWire!'\n];\n$client->messaging->send($params)->done(function($sendResult) {\n  if ($sendResult->isSuccessful()) {\n    $messageId = $sendResult->getMessageId();\n  }\n});\n")),(0,a.kt)("h3",{id:"issuccessful"},"isSuccessful"),(0,a.kt)("p",null,"Return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the message was queued, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("p",null,"Available In: ",(0,a.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.1+-brightgreen.svg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," - True/False accordingly to the state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Send a message and then check if there were errors."',title:'"Send',a:!0,message:!0,and:!0,then:!0,check:!0,if:!0,there:!0,were:!0,'errors."':!0},"<?php\n\n$params = [\n  'context' => 'office',\n  'from' => '+1XXXXXXXXXX',\n  'to' => '+1YYYYYYYYYY',\n  'body' => 'Welcome at SignalWire!'\n];\n$client->messaging->send($params)->done(function($sendResult) {\n  if ($sendResult->isSuccessful()) {\n    // ..\n  }\n});\n")))}c.isMDXComponent=!0}}]);