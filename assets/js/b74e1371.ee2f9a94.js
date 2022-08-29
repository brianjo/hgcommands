"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,p=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(p,a(a({ref:t},m),{},{components:r})):n.createElement(p,a({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={},a=void 0,s={unversionedId:"Commands/fold",id:"Commands/fold",title:"fold",description:"",source:"@site/docs/Commands/fold.md",sourceDirName:"Commands",slug:"/Commands/fold",permalink:"/docs/Commands/fold",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/fold.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"files",permalink:"/docs/Commands/files"},next:{title:"forget",permalink:"/docs/Commands/forget"}},c={},l=[],m={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hg fold \\[OPTION\\]... (--from \\[-r\\] REV \\| --exact \\[-r\\] REV...)\n\naliases: squash\n\ncombine multiple commits into a single commit\n\n    With --from, folds all the revisions linearly between the current revision\n    and the specified revision.\n\n    With --exact, folds only the specified revisions while ignoring the\n    revision currently checked out. The given revisions must form a linear\n    unbroken chain.\n\nOptions (\\[+\\] can be repeated):\n\n-r --rev VALUE \\[+\\] revision to fold --exact only fold specified\nrevisions --from fold linearly from current revision to specified\nrevision --no-rebase don't rebase descendants after split -M\n--reuse-message REV reuse commit message from REV -m --message TEXT use\ntext as commit message -l --logfile FILE read commit message from file\n-d --date DATE record the specified date as commit date -u --user USER\nrecord the specified user as committer\n\n(some details hidden, use --verbose to show complete help)\n")))}d.isMDXComponent=!0}}]);