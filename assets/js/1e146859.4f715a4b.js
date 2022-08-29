"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,i={unversionedId:"Commands/journal",id:"Commands/journal",title:"journal",description:"",source:"@site/docs/Commands/journal.md",sourceDirName:"Commands",slug:"/Commands/journal",permalink:"/docs/Commands/journal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/journal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isl",permalink:"/docs/Commands/isl"},next:{title:"log",permalink:"/docs/Commands/log"}},c={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alias for: journal --verbose\n\nhg journal \\[OPTION\\]... \\[BOOKMARKNAME\\]\n\naliases: j\n\nshow history of the checked out commit or a bookmark\n\n    Show the history of all the commits that were once the current commit. In\n    other words, shows a list of your previously checked out commits. 'hg\n    journal' can be used to find older versions of commits (for example, when\n    you want to revert to a previous state). It can also be used to discover\n    commits that were previously hidden.\n\n    By default, 'hg journal' displays the history of the current commit. To\n    display a list of commits pointed to by a bookmark, specify a bookmark\n    name.\n\n    Specify --all to show the history of both the current commit and all\n    bookmarks. In the output for --all, bookmarks are listed by name, and '.'\n    indicates the current commit.\n\n    Specify -Tjson to produce machine-readable output.\n\nOptions:\n\n    --all               show history for all names\n\n-c --commits show commit metadata -p --patch show patch -g --git use git\nextended diff format -l --limit NUM limit number of changes displayed\n--stat output diffstat-style summary of changes -T --template TEMPLATE\ndisplay with template\n\n(some details hidden, use --verbose to show complete help)\n")))}u.isMDXComponent=!0}}]);