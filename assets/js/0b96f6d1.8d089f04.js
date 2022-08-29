"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(b,s(s({ref:t},m),{},{components:n})):r.createElement(b,s({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,c={unversionedId:"Commands/blackbox",id:"Commands/blackbox",title:"blackbox",description:"",source:"@site/docs/Commands/blackbox.md",sourceDirName:"Commands",slug:"/Commands/blackbox",permalink:"/hgcommands/docs/Commands/blackbox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/blackbox.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bisect",permalink:"/hgcommands/docs/Commands/bisect"},next:{title:"bookmarks",permalink:"/hgcommands/docs/Commands/bookmarks"}},i={},l=[],m={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'hg blackbox\n\nview recent repository events\n\n    By default, show events in the last 15 minutes. Use \'--start 60\' to get\n    events in the past hour.\n\n    Use \'--debug\' to see raw JSON values instead of human-readable messages.\n\n    Use \'--pattern\' to filter events by JSON patterns. Examples:\n\n      # matches watchman events ("_" matches anything)\n      {"watchman": "_"}\n\n      # matches "ssh_getfiles" network operations that takes 10 to 100ms.\n      {"network": {"op": "ssh_getfiles", "duration_ms": ["range", 10, 100]}}\n\n      # matches pager, or editor, or pythonhook blocked events\n      {"blocked": {"name": ["or", "pager", "editor", "pythonhook"]}}\n\n      # matches process start events with non-root uid\n      {"start": {"uid": ["not", 0]}}\n\n      # matches start, or finish, or alias events\n      ["or", {"start": "_"}, {"finish": "_"}, {"alias": "_"}]\n\nOptions:\n\n-s --start VALUE start time (minutes in the past, relative to now)\n(default: 15) -e --end VALUE end time (minutes in the past, relative to\nnow)\n\n(some details hidden, use --verbose to show complete help)\n')))}p.isMDXComponent=!0}}]);