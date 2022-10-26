"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[1944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"ConnectAction"},o="Relay.Calling.ConnectAction",i={unversionedId:"php/reference/relay_calling/connect_action",id:"php/reference/relay_calling/connect_action",title:"Relay.Calling.ConnectAction",description:"This object returned from connectAsync method that represents a connecting attempt that is currently active on a call.",source:"@site/docs/php/reference/relay_calling/connect_action.mdx",sourceDirName:"php/reference/relay_calling",slug:"/php/reference/relay_calling/connect_action",permalink:"/docs/php/reference/relay_calling/connect_action",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_calling/connect_action.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"ConnectAction"},sidebar:"phpSidebar",previous:{title:"Call",permalink:"/docs/php/reference/relay_calling/call"},next:{title:"ConnectResult",permalink:"/docs/php/reference/relay_calling/connect_result"}},c={},p=[{value:"Methods",id:"methods",level:2},{value:"getResult",id:"getresult",level:3},{value:"getState",id:"getstate",level:3},{value:"getPayload",id:"getpayload",level:3},{value:"isCompleted",id:"iscompleted",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relaycallingconnectaction"},"Relay.Calling.ConnectAction"),(0,r.kt)("p",null,"This object returned from ",(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/call#connectasync"},(0,r.kt)("inlineCode",{parentName:"a"},"connectAsync"))," method that represents a connecting attempt that is currently active on a call."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("div",{class:"method-definitions"}),(0,r.kt)("h3",{id:"getresult"},"getResult"),(0,r.kt)("p",null,"Returns the final result of the connect attempt."),(0,r.kt)("p",null,"Available In: ",(0,r.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/connect_result"},(0,r.kt)("inlineCode",{parentName:"a"},"Relay.Calling.ConnectResult"))," - Final result of the connect attempt."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Trying to connect two numbers in series and grab the result when it\'s completed."',title:'"Trying',to:!0,connect:!0,two:!0,numbers:!0,in:!0,series:!0,and:!0,grab:!0,the:!0,result:!0,when:!0,"it's":!0,'completed."':!0},'<?php\n\n$devices = [\n  [ "type" => "phone", "to" => "+18991114444", "timeout" => 30 ],\n  [ "type" => "phone", "to" => "+18991114445", "timeout" => 20 ]\n];\n$call->connectAsync(...$devices)->done(function($action) {\n  // .. later in the code since it\'s an async method\n  if ($action->isCompleted()) {\n    $result = $action->getResult();\n  }\n});\n')),(0,r.kt)("h3",{id:"getstate"},"getState"),(0,r.kt)("p",null,"Return the current state of the connect attempt."),(0,r.kt)("p",null,"Available In: ",(0,r.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," - Current state of the connect attempt."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Trying to connect two numbers in series and print the state."',title:'"Trying',to:!0,connect:!0,two:!0,numbers:!0,in:!0,series:!0,and:!0,print:!0,the:!0,'state."':!0},'<?php\n\n$devices = [\n  [ "type" => "phone", "to" => "+18991114444", "timeout" => 30 ],\n  [ "type" => "phone", "to" => "+18991114445", "timeout" => 20 ]\n];\n$call->connectAsync(...$devices)->done(function($action) {\n  echo $action->getState();\n});\n')),(0,r.kt)("h3",{id:"getpayload"},"getPayload"),(0,r.kt)("p",null,"Return the payload sent to Relay to initiate the request. Useful to inspect what you sent to perform this action."),(0,r.kt)("p",null,"Available In: ",(0,r.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")," - Payload sent to Relay."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Trying to connect two numbers in series and print out the payload."',title:'"Trying',to:!0,connect:!0,two:!0,numbers:!0,in:!0,series:!0,and:!0,print:!0,out:!0,the:!0,'payload."':!0},'<?php\n\n$devices = [\n  [ "type" => "phone", "to" => "+18991114444", "timeout" => 30 ],\n  [ "type" => "phone", "to" => "+18991114445", "timeout" => 20 ]\n];\n$call->connectAsync(...$devices)->done(function($action) {\n  print_r($action->getPayload());\n});\n')),(0,r.kt)("h3",{id:"iscompleted"},"isCompleted"),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the connect attempt has finished, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("p",null,"Available In: ",(0,r.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," - True/False accordingly to the state."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Trying to connect two numbers in series and check if it has finished."',title:'"Trying',to:!0,connect:!0,two:!0,numbers:!0,in:!0,series:!0,and:!0,check:!0,if:!0,it:!0,has:!0,'finished."':!0},'<?php\n\n$devices = [\n  [ "type" => "phone", "to" => "+18991114444", "timeout" => 30 ],\n  [ "type" => "phone", "to" => "+18991114445", "timeout" => 20 ]\n];\n$call->connectAsync(...$devices)->done(function($action) {\n  if ($action->isCompleted()) {\n\n  }\n});\n')))}u.isMDXComponent=!0}}]);