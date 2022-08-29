"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},s=void 0,i={unversionedId:"Commands/serve",id:"Commands/serve",title:"serve",description:"",source:"@site/docs/Commands/serve.md",sourceDirName:"Commands",slug:"/Commands/serve",permalink:"/docs/Commands/serve",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/serve.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"root",permalink:"/docs/Commands/root"},next:{title:"shelve",permalink:"/docs/Commands/shelve"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hg serve \\[OPTION\\]...\n\nstart stand-alone webserver\n\n    Start a local HTTP repository browser and pull server. You can use this\n    for ad-hoc sharing and browsing of repositories. It is recommended to use\n    a real web server to serve a repository for longer periods of time.\n\n    Please note that the server does not implement access control. This means\n    that, by default, anybody can read from the server and nobody can write to\n    it by default. Set the \"web.allow-push\" option to \"*\" to allow everybody\n    to push to the server. You should use a real web server if you need to\n    authenticate users.\n\n    By default, the server logs accesses to stdout and errors to stderr. Use\n    the -A/--accesslog and -E/--errorlog options to log to files.\n\n    To have the server choose a free port number to listen on, specify a port\n    number of 0; in this case, the server will print the port number it uses.\n\n    Returns 0 on success.\n\nOptions (\\[+\\] can be repeated):\n\n-A --accesslog FILE name of access log file to write to -d --daemon run\nserver in background --daemon-postexec VALUE \\[+\\] used internally by\ndaemon mode -E --errorlog FILE name of error log file to write to -p\n--port PORT port to listen on (default: 8000) -a --address ADDR address\nto listen on (default: all interfaces) --prefix PREFIX prefix path to\nserve from (default: server root) -n --name NAME name to show in web\npages (default: working directory) --web-conf FILE name of the hgweb\nconfig file (see 'hg help hgweb') --pid-file FILE name of file to write\nprocess ID to --port-file FILE name of file to write port to (useful\nwith '-p 0') -t --templates TEMPLATE web templates to use --style STYLE\ntemplate style to use -6 --ipv6 use IPv6 in addition to IPv4\n--certificate FILE SSL certificate file --read-only only allow read\noperations\n\n(some details hidden, use --verbose to show complete help)\n")))}u.isMDXComponent=!0}}]);