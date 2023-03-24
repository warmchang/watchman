"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[6541],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return h},withMDXComponents:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){return function(t){var n=h(t.components);return a.createElement(e,r({},t,{components:n}))}},h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=h(n),m=i,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(u,s(s({ref:t},l),{},{components:n})):a.createElement(u,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={title:"watch-project",category:"Commands"},c=void 0,l={unversionedId:"cmd/watch-project",id:"cmd/watch-project",title:"watch-project",description:"Since 3.1.",source:"@site/docs/cmd/watch-project.md",sourceDirName:"cmd",slug:"/cmd/watch-project",permalink:"/watchman/docs/cmd/watch-project",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/cmd/watch-project.md",tags:[],version:"current",frontMatter:{title:"watch-project",category:"Commands"},sidebar:"tutorialSidebar",previous:{title:"watch-list",permalink:"/watchman/docs/cmd/watch-list"},next:{title:"watch",permalink:"/watchman/docs/cmd/watch"}},d={},h=[{value:"Rationale",id:"rationale",level:3},{value:"What&#39;s a project path?",id:"whats-a-project-path",level:3},{value:"Using watch-project",id:"using-watch-project",level:3},{value:"Initiating a watch",id:"initiating-a-watch",level:3},{value:"Persistence",id:"persistence",level:3}],m={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Since 3.1.")),(0,r.mdx)("p",null,"Requests that the ",(0,r.mdx)("em",{parentName:"p"},"project")," containing the requested dir is watched for changes.\nWatchman will track all files and dirs rooted at the ",(0,r.mdx)("em",{parentName:"p"},"project")," path, and respond\nwith the relative path difference between the ",(0,r.mdx)("em",{parentName:"p"},"project")," path and the requested\ndir."),(0,r.mdx)("h3",{id:"rationale"},"Rationale"),(0,r.mdx)("p",null,"With a proliferation of tools that wish to take advantage of filesystem watching\nat different locations in a filesystem tree, it is possible and likely for those\ntools to establish multiple overlapping watches."),(0,r.mdx)("p",null,"Most systems have a finite limit on the number of directories that can be\nwatched effectively; when that limit is exceeded the performance and reliability\nof filesystem watching is degraded, sometimes to the point that it ceases to\nfunction."),(0,r.mdx)("p",null,"It is therefore desirable to avoid this situation and consolidate the filesystem\nwatches. Watchman offers the ",(0,r.mdx)("inlineCode",{parentName:"p"},"watch-project")," command to allow clients to opt-in\nto the watch consolidation behavior described below."),(0,r.mdx)("h3",{id:"whats-a-project-path"},"What's a project path?"),(0,r.mdx)("p",null,"A project is the logical root of a set of related files in a filesystem tree and\nis a good point at which to consolidate watches. Tools such as\n",(0,r.mdx)("a",{parentName:"p",href:"https://bitbucket.org/facebook/hgwatchman"},"hgwatchman")," will most likely have\nalready established a watch at the root of a project, so any other tools that\nwish to watch a sub-directory can do so for no additional cost if they re-use\nthat existing watch at a higher level in the filesystem tree."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"watch-project")," command uses a simple procedure to locate the ",(0,r.mdx)("em",{parentName:"p"},"project")," path\nthat corresponds to a given path. While simple it is rather verbose to describe\nit precisely:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"The search is begun with a list of file names; we'll refer to it as\n",(0,r.mdx)("inlineCode",{parentName:"li"},"root_files"),". Any file in this list, if present in a directory, identifies\nthat directory as being a valid project directory."),(0,r.mdx)("li",{parentName:"ol"},"The search is begun with the candidate directory set to the argument passed\nto ",(0,r.mdx)("inlineCode",{parentName:"li"},"watch-project"),". The candidate directory is passed to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"realpath(3)"),"\nfunction and the result is set as the new value of the candidate directory."),(0,r.mdx)("li",{parentName:"ol"},"The candidate directory is concatenated with each of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"root_files"),", one by\none, and the resultant path is tested for existence. If the path exists then\nthe candidate directory is the path that will be used for watch and the\nsearch is halted successfully."),(0,r.mdx)("li",{parentName:"ol"},"If none of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"root_files")," can be found in the candidate directory then the\nparent of the candidate directory is used as a new candidate and the process\nis repeated at step 3 above."),(0,r.mdx)("li",{parentName:"ol"},"If no viable candidates are found and the root of the filesystem is reached,\nthen the search terminates unsuccessfully.")),(0,r.mdx)("p",null,"Watchman may perform the above search procedure twice. The logic is:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"root_files")," will be set to list only ",(0,r.mdx)("inlineCode",{parentName:"li"},".watchmanconfig")),(0,r.mdx)("li",{parentName:"ol"},"Perform the search procedure above"),(0,r.mdx)("li",{parentName:"ol"},"If the search terminates successfully, then the watch is established for the\ncurrent value of the candidate directory."),(0,r.mdx)("li",{parentName:"ol"},"If the search terminates unsuccessfully, ",(0,r.mdx)("inlineCode",{parentName:"li"},"root_files")," is set to the global\nconfiguration option ",(0,r.mdx)("a",{parentName:"li",href:"/watchman/docs/config#root_files"},"root_files")," and the search\nprocedure is re-run."),(0,r.mdx)("li",{parentName:"ol"},"If the search terminates successfully, then the watch is established for the\ncurrent value of the candidate directory."),(0,r.mdx)("li",{parentName:"ol"},"If the global configuration option\n",(0,r.mdx)("a",{parentName:"li",href:"/watchman/docs/config#enforce_root_files"},"enforce_root_files")," is set to true then the\nwatch attempt fails."),(0,r.mdx)("li",{parentName:"ol"},"Otherwise, the watch is established for the original argument to the\n",(0,r.mdx)("inlineCode",{parentName:"li"},"watch-project")," command")),(0,r.mdx)("p",null,"What this means in laymans terms is that the definitive location of the project\nroot is where the ",(0,r.mdx)("inlineCode",{parentName:"p"},".watchmanconfig")," file is found. If it is not found then the\nset of files defined by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"root_files")," configuration is used to locate a\ncandidate."),(0,r.mdx)("p",null,"If no viable candidate is found then watchman will watch the requested\ndirectory, unless the ",(0,r.mdx)("inlineCode",{parentName:"p"},"enforce_root_files")," setting is set to true."),(0,r.mdx)("p",null,"The default value for ",(0,r.mdx)("inlineCode",{parentName:"p"},"root_files")," will match most common version control root\ndirectories. The default value for ",(0,r.mdx)("inlineCode",{parentName:"p"},"enforce_root_files")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,r.mdx)("h3",{id:"using-watch-project"},"Using watch-project"),(0,r.mdx)("p",null,"Assuming that ",(0,r.mdx)("inlineCode",{parentName:"p"},"~/www/.hg")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"~/www/some/child/dir")," both exist, then the\ncommand:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman watch-project ~/www/some/child/dir\n{\n  "version": "3.0.1",\n  "watch": "/Users/wez/www",\n  "relative_path": "some/child/dir"\n}\n')),(0,r.mdx)("p",null,"establishes a watch on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"~/www")," directory because that is the directory that\ncontains ",(0,r.mdx)("inlineCode",{parentName:"p"},".hg"),", which is one of the items listed in the default value for\n",(0,r.mdx)("inlineCode",{parentName:"p"},"root_files"),"."),(0,r.mdx)("p",null,"As a client using ",(0,r.mdx)("inlineCode",{parentName:"p"},"watch-project")," it is important to observe the ",(0,r.mdx)("inlineCode",{parentName:"p"},"relative_path"),"\nand/or ",(0,r.mdx)("inlineCode",{parentName:"p"},"watch")," elements of the response; they identify which directory is\nactually being watched. ",(0,r.mdx)("strong",{parentName:"p"},"Any triggers, subscriptions or queries that the client\nissues must be relative to the watched root to operate as expected.")," A client\ncan use ",(0,r.mdx)("inlineCode",{parentName:"p"},"relative_path")," to more easily construct queries or adjust the results\nof queries by either concatenating the string when composing paths in a query\nexpression or removing the string from the prefix when processing the results."),(0,r.mdx)("p",null,"If ",(0,r.mdx)("inlineCode",{parentName:"p"},"relative_path")," is missing from the response it means that the requested dir\nis the same as the watched dir and that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"watch-project")," invocation turned\nout to be exactly equivalent to a ",(0,r.mdx)("inlineCode",{parentName:"p"},"watch")," invocation for the requested\ndirectory."),(0,r.mdx)("p",null,"Note that, when you're using the CLI, you can specify the root as\n",(0,r.mdx)("inlineCode",{parentName:"p"},"~/www/some/child/dir")," because the shell will resolve ",(0,r.mdx)("inlineCode",{parentName:"p"},"~/www/some/child/dir")," to\n",(0,r.mdx)("inlineCode",{parentName:"p"},"/Users/wez/www/some/child/dir"),", but when you use the JSON protocol, you are\nresponsible for supplying an absolute path."),(0,r.mdx)("p",null,"JSON:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'["watch", "/Users/wez/www/some/child/dir"]\n')),(0,r.mdx)("h3",{id:"initiating-a-watch"},"Initiating a watch"),(0,r.mdx)("p",null,"Once a viable candidate is found, if watchman is not already watching the\ndirectory, then watchman will:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Establish change notification for the directory with the kernel"),(0,r.mdx)("li",{parentName:"ul"},"Queues up a request to crawl the directory"),(0,r.mdx)("li",{parentName:"ul"},"As the directory contents are resolved, those are watched in a similar fashion"),(0,r.mdx)("li",{parentName:"ul"},"All newly observed files are considered changed")),(0,r.mdx)("h3",{id:"persistence"},"Persistence"),(0,r.mdx)("p",null,"Unless the ",(0,r.mdx)("inlineCode",{parentName:"p"},"--no-save-state")," server option was used to start the watchman\nservice, watches and their associated triggers are saved and re-established\nacross a process restart."),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Since 3.7.")),(0,r.mdx)("p",null,"The watchman service may decide to reap watches that have been idle for an\nextended period of time. A watch is considered to be idle if no watchman queries\nhave been issued against the watch. If a watch is idle, and has no triggers\nregistered or active subscriptions then it is a candidate for reaping."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/watchman/docs/config#idle-reap-age-seconds"},"idle_reap_age_seconds")," configuration\nparameter controls the idle timeout for a watch. The default is 5 days. A reaped\nwatch is cancelled and removed from the state file."))}p.isMDXComponent=!0}}]);