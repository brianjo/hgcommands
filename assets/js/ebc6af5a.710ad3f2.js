"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(r),u=o,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,c={unversionedId:"Commands/remove",id:"Commands/remove",title:"remove",description:"",source:"@site/docs/Commands/remove.md",sourceDirName:"Commands",slug:"/Commands/remove",permalink:"/hgcommands/docs/Commands/remove",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/remove.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"redo",permalink:"/hgcommands/docs/Commands/redo"},next:{title:"rename",permalink:"/hgcommands/docs/Commands/rename"}},s={},m=[],l={toc:m};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hg remove \\[OPTION\\]... FILE...\n\naliases: rm, rem\n\ndelete the specified tracked files\n\n    Remove the specified tracked files from the repository and delete them.\n    The files will be deleted from the repository at the next commit.\n\n    To undo a remove before files have been committed, use 'hg revert'. To\n    stop tracking files without deleting them, use 'hg forget'.\n\n    Returns 0 on success, 1 if any warnings encountered.\n\nOptions (\\[+\\] can be repeated):\n\n-A --after record delete for missing files -f --force forget added\nfiles, delete modified files -I --include PATTERN \\[+\\] include names\nmatching the given patterns -X --exclude PATTERN \\[+\\] exclude names\nmatching the given patterns\n\n(some details hidden, use --verbose to show complete help)\n")))}d.isMDXComponent=!0}}]);