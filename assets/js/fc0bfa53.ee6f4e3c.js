"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[9549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_label:"AnswerResult"},s="Relay.Calling.AnswerResult",i={unversionedId:"php/reference/relay_calling/answer_result",id:"php/reference/relay_calling/answer_result",title:"Relay.Calling.AnswerResult",description:"This object returned from the answer method.",source:"@site/docs/php/reference/relay_calling/answer_result.mdx",sourceDirName:"php/reference/relay_calling",slug:"/php/reference/relay_calling/answer_result",permalink:"/docs/php/reference/relay_calling/answer_result",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_calling/answer_result.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"AnswerResult"},sidebar:"phpSidebar",previous:{title:"Relay.Calling",permalink:"/docs/php/reference/relay_calling/"},next:{title:"Call",permalink:"/docs/php/reference/relay_calling/call"}},o={},c=[{value:"Methods",id:"methods",level:2},{value:"getEvent",id:"getevent",level:3},{value:"isSuccessful",id:"issuccessful",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relaycallinganswerresult"},"Relay.Calling.AnswerResult"),(0,a.kt)("p",null,"This object returned from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/call#answer"},(0,a.kt)("inlineCode",{parentName:"a"},"answer"))," method."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("div",{class:"method-definitions"}),(0,a.kt)("h3",{id:"getevent"},"getEvent"),(0,a.kt)("p",null,"Returns the last Relay Event arrived for this operation."),(0,a.kt)("p",null,"Available In: ",(0,a.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_event"},(0,a.kt)("inlineCode",{parentName:"a"},"Relay.Event"))," - Last Relay Event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start recording in stereo mode and grab the result when it\'s completed."',title:'"Start',recording:!0,in:!0,stereo:!0,mode:!0,and:!0,grab:!0,the:!0,result:!0,when:!0,"it's":!0,'completed."':!0},"<?php\n\n$call->answer()->done(function($result) {\n  $event = $result->getEvent();\n  // Inspect $event->payload ..\n});\n")),(0,a.kt)("h3",{id:"issuccessful"},"isSuccessful"),(0,a.kt)("p",null,"Return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the call was answered without errors, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("p",null,"Available In: ",(0,a.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," - Whether the call has been answered successfully."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start the recording and then check if it has ended successfully."',title:'"Start',the:!0,recording:!0,and:!0,then:!0,check:!0,if:!0,it:!0,has:!0,ended:!0,'successfully."':!0},"<?php\n\n$call->answer()->done(function($result) {\n  if ($result->isSuccessful()) {\n    // $call is now active...\n  }\n});\n")))}u.isMDXComponent=!0}}]);