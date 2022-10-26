"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[1190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:5},s="Relay.Messaging",i={unversionedId:"php/reference/relay_messaging/index",id:"php/reference/relay_messaging/index",title:"Relay.Messaging",description:"This represents the API interface for the Messaging Relay Service. This object is used to make requests related to managing SMS and MMS messages.",source:"@site/docs/php/reference/relay_messaging/index.mdx",sourceDirName:"php/reference/relay_messaging",slug:"/php/reference/relay_messaging/",permalink:"/docs/php/reference/relay_messaging/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_messaging/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"phpSidebar",previous:{title:"Relay.Event",permalink:"/docs/php/reference/relay_event"},next:{title:"Message",permalink:"/docs/php/reference/relay_messaging/message"}},o={},p=[{value:"Methods",id:"methods",level:2},{value:"send",id:"send",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relaymessaging"},"Relay.Messaging"),(0,a.kt)("p",null,"This represents the API interface for the Messaging Relay Service. This object is used to make requests related to managing SMS and MMS messages."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("div",{class:"method-definitions"}),(0,a.kt)("h3",{id:"send"},"send"),(0,a.kt)("p",null,"Send a message to the destination number."),(0,a.kt)("p",null,"Available In: ",(0,a.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.1+-brightgreen.svg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"context")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"method-prop-type"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"required-arg"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"The context to receive inbound events.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"from")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"method-prop-type"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"required-arg"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"The phone number to place the message from. ",(0,a.kt)("em",{parentName:"td"},"Must be a SignalWire phone number or short code that you own."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"to")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"method-prop-type"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"required-arg"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"The phone number to send to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"body")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"method-prop-type"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"required-arg"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"The content of the message.",(0,a.kt)("br",null)," ",(0,a.kt)("em",{parentName:"td"},"Optional if ",(0,a.kt)("inlineCode",{parentName:"em"},"media")," is present."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"media")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"method-prop-type"},"string[]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"required-arg"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"Array of URLs to send in the message. ",(0,a.kt)("br",null)," ",(0,a.kt)("em",{parentName:"td"},"Optional if ",(0,a.kt)("inlineCode",{parentName:"em"},"body")," is present."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tags")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"method-prop-type"},"string[]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"optional-arg"},"optional")),(0,a.kt)("td",{parentName:"tr",align:null},"Array of strings to tag the message with for searching in the UI.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React\\Promise\\Promise")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," that will be fulfilled with a ",(0,a.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_messaging/send_result"},(0,a.kt)("inlineCode",{parentName:"a"},"Relay.Messaging.SendResult"))," object."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:"title=\"Send a message in the context 'office'.\"",title:'"Send',a:!0,message:!0,in:!0,the:!0,context:!0,"'office'.\"":!0},"<?php\n\n$params = [\n  'context' => 'office',\n  'from' => '+1XXXXXXXXXX',\n  'to' => '+1YYYYYYYYYY',\n  'body' => 'Welcome at SignalWire!'\n];\n$client->messaging->send($params)->done(function($sendResult) {\n  if ($sendResult->isSuccessful()) {\n    echo \"Message ID: \" . $sendResult->getMessageId();\n  }\n});\n")))}m.isMDXComponent=!0}}]);