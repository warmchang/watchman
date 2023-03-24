"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[394],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return m},withMDXComponents:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){return function(t){var n=m(t.components);return r.createElement(e,l({},t,{components:n}))}},m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),p=o,f=u["".concat(a,".").concat(p)]||u[p]||d[p]||l;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99795:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),a=["components"],c={title:"log-level",category:"Commands"},i=void 0,s={unversionedId:"cmd/log-level",id:"cmd/log-level",title:"log-level",description:"Changes the log level of your connection to the watchman service.",source:"@site/docs/cmd/log-level.md",sourceDirName:"cmd",slug:"/cmd/log-level",permalink:"/watchman/docs/cmd/log-level",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/cmd/log-level.md",tags:[],version:"current",frontMatter:{title:"log-level",category:"Commands"},sidebar:"tutorialSidebar",previous:{title:"list-capabilities",permalink:"/watchman/docs/cmd/list-capabilities"},next:{title:"log",permalink:"/watchman/docs/cmd/log"}},u={},m=[],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Changes the log level of your connection to the watchman service."),(0,l.mdx)("p",null,"From the command line:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"$ watchman --server-encoding=json --persistent log-level debug\n")),(0,l.mdx)("p",null,"JSON:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'["log-level", "debug"]\n')),(0,l.mdx)("p",null,"This command changes the log level of your client session. Whenever watchman\nwrites to its log, it walks the list of client sessions and also sends a log\npacket to any that have their log level set to match the current log event."),(0,l.mdx)("p",null,"Valid log levels are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"debug")," - receive all log events"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"error")," - receive only important log events"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"off")," - receive no log events")),(0,l.mdx)("p",null,"Note that you cannot tap into the output of triggered processes using this\nmechanism."),(0,l.mdx)("p",null,"Log events are sent unilaterally by the server as they happen, and have the\nfollowing structure:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0",\n  "log": "log this please"\n}\n')))}d.isMDXComponent=!0}}]);