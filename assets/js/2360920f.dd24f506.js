"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[3750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||l;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"SendDigitsResult"},s="Relay.Calling.SendDigitsResult",i={unversionedId:"php/reference/relay_calling/send_digits_result",id:"php/reference/relay_calling/send_digits_result",title:"Relay.Calling.SendDigitsResult",description:"This object is returned by sendDigits method and represents the final result of a send digits_ action.",source:"@site/docs/php/reference/relay_calling/send_digits_result.mdx",sourceDirName:"php/reference/relay_calling",slug:"/php/reference/relay_calling/send_digits_result",permalink:"/docs/php/reference/relay_calling/send_digits_result",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_calling/send_digits_result.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"SendDigitsResult"},sidebar:"phpSidebar",previous:{title:"SendDigitsAction",permalink:"/docs/php/reference/relay_calling/send_digits_action"},next:{title:"StopResult",permalink:"/docs/php/reference/relay_calling/stop_result"}},o={},p=[{value:"Methods",id:"methods",level:2},{value:"getEvent",id:"getevent",level:3},{value:"isSuccessful",id:"issuccessful",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relaycallingsenddigitsresult"},"Relay.Calling.SendDigitsResult"),(0,a.kt)("p",null,"This object is returned by ",(0,a.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/call#senddigits"},(0,a.kt)("inlineCode",{parentName:"a"},"sendDigits"))," method and represents the final result of a ",(0,a.kt)("em",{parentName:"p"},"send digits")," action."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("div",{class:"method-definitions"}),(0,a.kt)("h3",{id:"getevent"},"getEvent"),(0,a.kt)("p",null,"Returns the last Relay Event arrived for this operation."),(0,a.kt)("p",null,"Available In: ",(0,a.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.2+-brightgreen.svg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_event"},(0,a.kt)("inlineCode",{parentName:"a"},"Relay.Event"))," - Last Relay Event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Send some digits and then grab the last event occurred."',title:'"Send',some:!0,digits:!0,and:!0,then:!0,grab:!0,the:!0,last:!0,event:!0,'occurred."':!0},"<?php\n\n$call->sendDigits('1234')->done(function($result) {\n  $event = $result->getEvent();\n  // Inspect $event->payload ..\n});\n")),(0,a.kt)("h3",{id:"issuccessful"},"isSuccessful"),(0,a.kt)("p",null,"Return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the operation has succeeded, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("p",null,"Available In: ",(0,a.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.2+-brightgreen.svg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"None")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," - Whether the operation has completed successfully."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Send some digits and then check if it has ended successfully."',title:'"Send',some:!0,digits:!0,and:!0,then:!0,check:!0,if:!0,it:!0,has:!0,ended:!0,'successfully."':!0},"<?php\n\n$call->sendDigits('1234')->done(function($result) {\n  if ($result->isSuccessful()) {\n    // Do other things...\n  }\n});\n")))}d.isMDXComponent=!0}}]);