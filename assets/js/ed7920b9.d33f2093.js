"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=m(n),p=o,h=l["".concat(s,".").concat(p)]||l[p]||d[p]||a;return n?r.createElement(h,c(c({ref:t},u),{},{components:n})):r.createElement(h,c({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=n[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={},c=void 0,i={unversionedId:"Commands/update",id:"Commands/update",title:"update",description:"",source:"@site/docs/Commands/update.md",sourceDirName:"Commands",slug:"/Commands/update",permalink:"/docs/Commands/update",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/update.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"unshelve",permalink:"/docs/Commands/unshelve"},next:{title:"verify",permalink:"/docs/Commands/verify"}},s={},m=[],u={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hg update \\[-C\\|-c\\|-m\\] \\[\\[-r\\] REV\\]\n\naliases: up, checkout, co, che\n\ncheck out a specific commit\n\n    Update your checkout to the given destination commit. More precisely, make\n    the destination commit the current commit and update the contents of all\n    files in your checkout to match their state in the destination commit.\n\n    By default, if you attempt to check out a commit while you have pending\n    changes, and the destination commit is not an ancestor or descendant of\n    the current commit, the checkout will abort. However, if the destination\n    commit is an ancestor or descendant of the current commit, the pending\n    changes will be merged into the new checkout.\n\n    Use one of the following flags to modify this behavior:\n\n    --check: abort if there are pending changes\n\n    --clean: permanently discard any pending changes (use with caution)\n\n    --merge: attempt to merge the pending changes into the new checkout, even\n    if the destination commit is not an ancestor or descendant of the current\n    commit\n\n    If merge conflicts occur during checkout, Mercurial enters an unfinished\n    merge state. If this happens, fix the conflicts manually and then run hg\n    commit to exit the unfinished merge state and save your changes in a new\n    commit. Alternatively, run hg checkout --clean to discard your pending\n    changes.\n\n    Specify null as the destination commit to get an empty checkout (sometimes\n    known as a bare repository).\n\n    Returns 0 on success, 1 if there are unresolved files.\n\nOptions:\n\n-C --clean discard uncommitted changes (no backup) -c --check require\nclean working directory -m --merge merge uncommitted changes -r --rev\nREV revision --inactive update without activating bookmarks -t --tool\nVALUE specify merge tool -B --bookmark VALUE create new bookmark\n\n(some details hidden, use --verbose to show complete help)\n")))}d.isMDXComponent=!0}}]);