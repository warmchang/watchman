(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[625],{2317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(83117),o=n(80102),a=n(67294),c=n(72389),l=n(34334),i=n(66412),s=n(35281),u=n(28900),d=n(87594),p=n.n(d),f=(0,u.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),m=(0,u.Z)(/\{([\d,-]+)\}/,{range:1}),g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function A(e,t){var n=e.map((function(e){var n=g[e],r=n.start,o=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function h(e,t){var n=e.replace(/\n$/,""),r=t.language,o=t.magicComments,a=t.metastring;if(a&&m.test(a)){var c=a.match(m).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=o[0].className,i=p()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"],t);case"jsx":case"tsx":return A(["js","jsBlock","jsx"],t);case"html":return A(["js","jsBlock","html"],t);case"python":case"py":case"bash":return A(["bash"],t);case"markdown":case"md":return A(["html","jsx","bash"],t);default:return A(Object.keys(g),t)}}(r,o),u=n.split("\n"),d=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),f=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),h=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),b=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),v=0;v<u.length;){var y=u[v].match(s);if(y){var k=y.slice(1).find((function(e){return void 0!==e}));f[k]?d[f[k]].range+=v+",":h[k]?d[h[k]].start=v:b[k]&&(d[b[k]].range+=d[b[k]].start+"-"+(v-1)+","),u.splice(v,1)}else v+=1}n=u.join("\n");var E={};return Object.entries(d).forEach((function(e){var t=e[0],n=e[1].range;p()(n).forEach((function(e){null!=E[e]||(E[e]=[]),E[e].push(t)}))})),{lineClassNames:E,code:n}}var b="codeBlockContainer_Ckt0",v=["as"];function y(e){var t=e.as,n=(0,o.Z)(e,v),c=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}((0,i.p)());return a.createElement(t,(0,r.Z)({},n,{style:c,className:(0,l.Z)(n.className,b,s.k.common.codeBlock)}))}var k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){var t=e.children,n=e.className;return a.createElement(y,{as:"pre",tabIndex:0,className:(0,l.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:k.codeBlockLines},t))}var w=n(86668),N=n(44700),B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){var n=(0,a.useState)(),r=n[0],o=n[1],c=(0,a.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=B);var r=(0,N.zX)(t),o=(0,N.Ql)(n);(0,a.useEffect)((function(){var t=new MutationObserver(r);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,r,o])}(r,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var j={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},L={Prism:n(11205).Z,theme:j};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var Z=/\r\n|\r|\n/,T=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},M=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},S=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=P({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=P({},n,{backgroundColor:null}),o};function O(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var x=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),I(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?S(e.theme,e.language):void 0;return t.themeDict=n})),I(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=P({},O(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?P({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),I(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),I(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=P({},O(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?P({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),I(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],i=[l];c>-1;){for(;(a=r[c]++)<o[c];){var s=void 0,u=t[c],d=n[c][a];if("string"==typeof d?(u=c>0?u:["plain"],s=d):(u=M(u,d.type),d.alias&&(u=M(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(Z),f=p.length;l.push({types:u,content:p[0]});for(var m=1;m<f;m++)T(l),i.push(l=[]),l.push({types:u,content:p[m]})}else c++,t.push(u),n.push(s),r.push(0),o.push(s.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return T(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),W=x,z="codeLine_lJS_",U="codeLineNumber_Tfdd",G="codeLineContent_feaV";function F(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,c=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var s=c({line:t,className:(0,l.Z)(n,o&&z)}),u=t.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},i({token:e,key:t})))}));return a.createElement("span",s,o?a.createElement(a.Fragment,null,a.createElement("span",{className:U}),a.createElement("span",{className:G},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var R=n(95999),H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Y(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],c=r[1],i=(0,a.useRef)(void 0),s=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),l&&(c.removeAllRanges(),c.addRange(l)),a&&a.focus()}(t),c(!0),i.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,R.translate)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,R.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,R.translate)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,H.copyButton,o&&H.copyButtonCopied),onClick:s},a.createElement("span",{className:H.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:H.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:H.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var V="wordWrapButtonIcon_Bwma",D="wordWrapButtonEnabled_EoeP";function J(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,R.translate)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,r&&D),"aria-label":o,title:o},a.createElement("svg",{className:V,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function X(e){var t,n,o,c,s,u,d,p,m,g,A,b=e.children,v=e.className,E=void 0===v?"":v,N=e.metastring,B=e.title,j=e.showLineNumbers,I=e.language,P=(0,w.L)().prism,Z=P.defaultLanguage,T=P.magicComments,M=null!=(t=null!=I?I:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:Z,S=(0,i.p)(),O=(o=(0,a.useState)(!1),c=o[0],s=o[1],u=(0,a.useState)(!1),d=u[0],p=u[1],m=(0,a.useRef)(null),g=(0,a.useCallback)((function(){var e=m.current.querySelector("code");c?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),s((function(e){return!e}))}),[m,c]),A=(0,a.useCallback)((function(){var e=m.current,t=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");p(t)}),[m]),C(m,A),(0,a.useEffect)((function(){A()}),[c,A]),(0,a.useEffect)((function(){return window.addEventListener("resize",A,{passive:!0}),function(){window.removeEventListener("resize",A)}}),[A]),{codeBlockRef:m,isEnabled:c,isCodeScrollable:d,toggle:g}),x=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(f))?void 0:n.groups.title)?t:""}(N)||B,z=h(b,{metastring:N,language:M,magicComments:T}),U=z.lineClassNames,G=z.code,R=null!=j?j:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(N);return a.createElement(y,{as:"div",className:(0,l.Z)(E,M&&!E.includes("language-"+M)&&"language-"+M)},x&&a.createElement("div",{className:k.codeBlockTitle},x),a.createElement("div",{className:k.codeBlockContent},a.createElement(W,(0,r.Z)({},L,{theme:S,code:G,language:null!=M?M:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:O.codeBlockRef,className:(0,l.Z)(t,k.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,l.Z)(k.codeBlockLines,R&&k.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(F,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:U[t],showLineNumbers:R})}))))})),a.createElement("div",{className:k.buttonGroup},(O.isEnabled||O.isCodeScrollable)&&a.createElement(J,{className:k.codeButton,onClick:function(){return O.toggle()},isEnabled:O.isEnabled}),a.createElement(Y,{className:k.codeButton,code:G}))))}var q=["children"];function Q(e){var t=e.children,n=(0,o.Z)(e,q),l=(0,c.default)(),i=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof i?X:E;return a.createElement(s,(0,r.Z)({key:String(l)},n),i)}},66412:function(e,t,n){"use strict";n.d(t,{p:function(){return a}});var r=n(92949),o=n(86668);function a(){var e=(0,o.L)().prism,t=(0,r.I)().colorMode,n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},14732:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="data:image/png;base64,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"},20625:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(67294)),i=c(n(2317)),s=c(n(52263)),u=c(n(72389)),d=n(86341),p=c(n(25510)),f=c(n(14732)),m=c(n(74071)),g=n(28084),A=[{names:["fbsource","fbs"],project:"fbsource",canonicalName:"fbsource"},{names:["www"],project:"facebook-www",canonicalName:"www"}];t.default=function(e){var t=(0,s.default)().siteConfig,n=(0,g.usePluginData)("internaldocs-fb").opts.maxCodeBlockHeight,r=(0,u.default)(),o=(0,l.useRef)(null),a=(0,l.useRef)(null),c=(0,l.useRef)(null),h=(0,l.useRef)(!1),b=(0,l.useCallback)((function(e){h.current||(window.requestAnimationFrame((function(){a.current&&c.current&&(e.target.scrollTop>0?a.current.style.boxShadow="0 1em 1em -1em black inset":a.current.style.boxShadow="none",e.target.scrollTop===e.target.scrollHeight-e.target.offsetHeight?c.current.style.boxShadow="none":c.current.style.boxShadow="0 -1em 1em -1em black inset"),h.current=!1})),h.current=!0)}),[]);(0,l.useEffect)((function(){o.current&&(o.current.addEventListener("scroll",b),window.requestAnimationFrame((function(){b({target:o.current})})))}));var v,y,k,E,w,N,B,C,j=function(e){try{return(0,i.default)(e)}catch(t){return l.default.createElement("p",{style:{color:"red",fontWeight:"bold"}},"Could not render codeblock")}}(Object.assign({children:""},e));if(!r)return j;if("string"!=typeof e.file)return j;if((0,d.isInternal)()){if(!t.customFields)return j;var L=t.customFields,I=L.fbRepoName,P=L.ossRepoPath;if("string"!=typeof I)return j;v="string"==typeof P&&"string"!=typeof e.repo?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e.startsWith("/")?e.slice(1):e})).map((function(e){return e.endsWith("/")?e.slice(0,e.length-1):e})).join("/")}(P,e.file):e.file;var Z=A.find((function(t){var n;return t.names.includes((null!==(n=e.repo)&&void 0!==n?n:I).toLowerCase())}));if(void 0===Z)return j;y=function(e,t){var n=new URL("https://www.internalfb.com");return n.pathname="/code/"+e.canonicalName+"/"+t,n.toString()}(Z,v),k=function(e,t){var n=new URL("https://www.internalfb.com/intern/nuclide/open/arc");return n.searchParams.append("project",e.project),n.searchParams.append("paths[0]",t),n.toString()}(Z,v),E=function(e,t){if("fbsource"!==e.canonicalName||!t.startsWith("fbandroid"))return null;var n=new URL("fb-ide-opener://open");return n.searchParams.append("ide","intellij"),n.searchParams.append("filepath","/fbsource/"+t),n.toString()}(Z,v)}else{if("string"!=typeof t.organizationName||"string"!=typeof t.projectName)return j;v=e.file,w=t.organizationName,N=t.projectName,B=e.file,(C=new URL("https://github.com")).pathname="/"+w+"/"+N+"/blob/master/"+B,y=C.toString(),k=null,E=null}var T=v.split("/"),M=T[T.length-1];return l.default.createElement("div",null,l.default.createElement("a",{href:y,title:"Browse entire file",target:"_blank",rel:"noreferrer",onClick:function(){return d.feedback.reportFeatureUsage({featureName:"browse-file",id:v})},className:m.default.CodeBlockFilenameTab},M),null!==k?l.default.createElement("a",{target:"_blank",rel:"noreferrer",href:k,onClick:function(){return d.feedback.reportFeatureUsage({featureName:"open-in-vscode",id:v})}},l.default.createElement("img",{style:{padding:"0 6px",height:"16px"},title:"Open in VSCode @ FB",src:p.default})):null,null!==E?l.default.createElement("a",{target:"_blank",rel:"noreferrer",href:E,onClick:function(){return d.feedback.reportFeatureUsage({featureName:"open-in-android-studio",id:v})}},l.default.createElement("img",{style:{padding:"0 6px",height:"16px"},title:"Open in Android Studio",src:f.default})):null,l.default.createElement("div",{style:{position:"relative"}},l.default.createElement("div",{ref:o,style:{maxHeight:n,overflowY:"auto"}},j),void 0===n?null:[l.default.createElement("div",{key:"shadowtop",ref:a,style:{bottom:0,left:0,right:0,top:0,pointerEvents:"none",transition:"all .2s ease-out",boxShadow:"none",position:"absolute"}}),l.default.createElement("div",{key:"shadowbottom",ref:c,style:{bottom:0,left:0,right:0,top:0,pointerEvents:"none",transition:"all .2s ease-out",boxShadow:"none",position:"absolute"}})]))}},25510:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="data:image/png;base64,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"},74071:function(e,t,n){"use strict";n.r(t),t.default={CodeBlockFilenameTab:"CodeBlockFilenameTab_T2zd"}},87594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);