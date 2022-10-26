"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[95],{3905:(e,n,t)=>{t.d(n,{Zo:()=>X,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},X=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,X=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return t?a.createElement(d,s(s({ref:n},X),{},{components:t})):a.createElement(d,s({ref:n},X))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:0},s="Relay SDK for PHP",i={unversionedId:"php/index",id:"php/index",title:"Relay SDK for PHP",description:"Getting Started",source:"@site/docs/php/index.mdx",sourceDirName:"php",slug:"/php/",permalink:"/docs/php/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"phpSidebar",next:{title:"Relay.Calling",permalink:"/docs/php/reference/relay_calling/"}},l={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:2},{value:"Using the SDK",id:"using-the-sdk",level:2},{value:"Relay Consumer",id:"relay-consumer",level:3},{value:"Relay Task",id:"relay-task",level:3},{value:"Relay Client",id:"relay-client",level:3},{value:"Contexts",id:"contexts",level:2}],X={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},X,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relay-sdk-for-php"},"Relay SDK for PHP"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The Relay SDK for PHP enables PHP developers to connect and use SignalWire's Relay APIs within their own PHP code. Our Relay SDK allows developers to build or add robust and innovative communication services to their applications."),(0,r.kt)("p",null,"The Relay SDK for PHP is easy to use and only takes a few minute to setup and get running."),(0,r.kt)("span",{style:{fontWeight:"bold"}},"Latest Version:")," ",(0,r.kt)("a",{href:"https://packagist.org/packages/signalwire-community/signalwire"},(0,r.kt)("img",{className:"method-available-tag",src:"https://img.shields.io/packagist/v/signalwire-community/signalwire.svg?color=brightgreen"})),(0,r.kt)("br",null),(0,r.kt)("span",{style:{fontWeight:"bold"}},"Source Code:")," ",(0,r.kt)("a",{href:"https://github.com/signalwire-community/signalwire-php"},"signalwire-community/signalwire-php"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the package using ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org/"},"Composer"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"composer require signalwire-community/signalwire\n")),(0,r.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,r.kt)("p",null,"The PHP SDK requires ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PHP 8.0"))," or greater installed on your system."),(0,r.kt)("h2",{id:"using-the-sdk"},"Using the SDK"),(0,r.kt)("p",null,"The PHP SDK can be used to get up and running with Relay quickly and easily. In order to use the PHP client, you must get your ",(0,r.kt)("strong",{parentName:"p"},"project")," and ",(0,r.kt)("strong",{parentName:"p"},"token")," from your SignalWire dashboard."),(0,r.kt)("p",null,"There are a few ways to get started, depending on your needs: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Relay.Consumer")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Relay.Task")),", and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Relay.Client")),"."),(0,r.kt)("h3",{id:"relay-consumer"},"Relay Consumer"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_consumer"},(0,r.kt)("inlineCode",{parentName:"a"},"Relay.Consumer"))," creates a long running process, allowing you to respond to incoming requests and events in realtime. Relay Consumers abstract all the setup of connecting to Relay and automatically dispatches workers to handle requests; so you can concentrate on writing your code without having to worry about multi-threading or blocking, everything just works. Think of Relay Consumers like a background worker system for all your calling and messaging needs."),(0,r.kt)("p",null,"Relay Consumers can scale easily, simply by running multiple instances of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Relay.Consumer")," process. Each event will only be delivered to a single consumer, so as your volume increases, just scale up! This process works well whether you are using Docker Swarm, a Procfile on Heroku, your own webserver, and most other environments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Setting up a new consumer is the easiest way to get up and running."',title:'"Setting',up:!0,a:!0,new:!0,consumer:!0,is:!0,the:!0,easiest:!0,way:!0,to:!0,get:!0,and:!0,'running."':!0},"<?php\n\nrequire dirname(__FILE__) . '/vendor/autoload.php';\n\nuse Generator as Coroutine;\nuse SignalWire\\Relay\\Consumer;\n\nclass CustomConsumer extends Consumer {\n  public $project = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';\n  public $token = 'PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';\n  public $contexts = ['home', 'office'];\n\n  public function ready(): Coroutine {\n    yield;\n    // Consumer is successfully connected with Relay.\n    // You can make calls or send messages here..\n  }\n\n  public function onIncomingCall($call): Coroutine {\n    $result = yield $call->answer();\n    if ($result->isSuccessful()) {\n      yield $call->playTTS(['text' => 'Welcome to SignalWire!']);\n    }\n  }\n}\n\n$consumer = new CustomConsumer();\n$consumer->run();\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_consumer"},"Learn more about Relay Consumers")),(0,r.kt)("h3",{id:"relay-task"},"Relay Task"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Relay.Task")," is simple way to send jobs to your ",(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_consumer"},(0,r.kt)("inlineCode",{parentName:"a"},"Relay.Consumers"))," from a short lived process, like a web framework. Relay Tasks allow you to pass commands down to your Consumers without blocking your short lived request. Think of a Relay Task as a way to queue a job for your background workers to processes asynchronously."),(0,r.kt)("p",null,"For example, if you wanted to make an outbound call and play a message when your user clicks a button on your web application, since Relay is a realtime protocol and relies on you to tell it what to do in realtime, if you did this within your web application, your web server would block until the call was finished... this may take a long time! Instead, simply create a new Relay Task. This task will be handled by a running Relay Consumer process and your web application can respond back to your user immediately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:"title=\"Send a task in the 'office' context with custom data.\"",title:'"Send',a:!0,task:!0,in:!0,the:!0,"'office'":!0,context:!0,with:!0,custom:!0,'data."':!0},"// create-task.php\n<?php\n\nrequire dirname(__FILE__) . '/vendor/autoload.php';\n\nuse SignalWire\\Relay\\Tasking\\Task;\n\n$task = new Task('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');\n$context = 'office';\n$delivered = $task->deliver($context, [\n  'uuid' => 'unique id',\n  'data' => 'data for your job'\n]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Handle the task in a Consumer."',title:'"Handle',the:!0,task:!0,in:!0,a:!0,'Consumer."':!0},"// consumer-task.php\n<?php\n\nrequire dirname(__FILE__) . '/vendor/autoload.php';\n\nuse Generator as Coroutine;\n\nclass CustomConsumer extends SignalWire\\Relay\\Consumer {\n  public $project = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';\n  public $token = 'PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';\n  public $contexts = ['office']; // Task is delivered on the \"office\" context!\n\n  public function onTask($message): Coroutine {\n    yield;\n    // Retrieve your custom properties in $message..\n    echo $message->uuid; // 'unique id'\n    echo $message->data; // 'data for your job'\n  }\n}\n\n$consumer = new CustomConsumer();\n$consumer->run();\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_task"},"Learn more about Relay Tasks")),(0,r.kt)("h3",{id:"relay-client"},"Relay Client"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_client"},(0,r.kt)("inlineCode",{parentName:"a"},"Relay.Client"))," is a lower level object, giving you a basic connection to Relay but that is all. It is best used when you are creating a script only concerned with sending outbound requests or you want complete control over the Relay connection yourself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Setting up a new client and make an outbound call."',title:'"Setting',up:!0,a:!0,new:!0,client:!0,and:!0,make:!0,an:!0,outbound:!0,'call."':!0},"<?php\n\n$client = new SignalWire\\Relay\\Client([\n  'project' => 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',\n  'token' => 'PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'\n]);\n\n$client->on('signalwire.ready', function($client) {\n\n  $params = [ 'type' => 'phone', 'from' => '+1XXXXXXXXXX', 'to' => '+1YYYYYYYYYY' ];\n  $client->calling->dial($params)->done(function($result) {\n    if ($result->isSuccessful()) {\n      // Your active $call..\n      $call = $result->getCall();\n    }\n  });\n\n});\n\n$client->connect();\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_client"},"Learn more about Relay Clients")),(0,r.kt)("h2",{id:"contexts"},"Contexts"),(0,r.kt)("p",null,"Relay uses ",(0,r.kt)("strong",{parentName:"p"},"Contexts")," as a simple way to separate events to specific consumers, allowing you to write consumers for specific types of calls or messages or scale them independently. A Context is simply a named string, that allows you to categorize requests. When creating outbound requests, or configuring phone numbers for inbound requests, you can specify the ",(0,r.kt)("strong",{parentName:"p"},"context"),"; Relay will then deliver that call or event to Consumers that are configured to listen for that context."),(0,r.kt)("p",null,"For example, you could have a customer support phone number configured to send to Relay with the ",(0,r.kt)("inlineCode",{parentName:"p"},"support")," context, and a personal number configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"personal")," context. Relay would deliver these events to any Consumer listening for those contexts. This gives you a lot of control in how messages are delivered to your Consumers, allowing you to write Consumer classes specific to the context, scale them independently, or separate traffic based on your own business rules."))}c.isMDXComponent=!0}}]);