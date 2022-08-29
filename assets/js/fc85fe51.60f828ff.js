"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7428],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>l});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),d=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),l=o,f=p["".concat(m,".").concat(l)]||p[l]||u[l]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function l(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,c={unversionedId:"Commands/unamend",id:"Commands/unamend",title:"unamend",description:"",source:"@site/docs/Commands/unamend.md",sourceDirName:"Commands",slug:"/Commands/unamend",permalink:"/docs/Commands/unamend",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/unamend.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tags",permalink:"/docs/Commands/tags"},next:{title:"unament",permalink:"/docs/Commands/unament"}},m={},d=[],s={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hg unamend\n\naliases: una\n\nundo the last amend operation on the current commit\n\n    Reverse the effects of an 'hg amend' operation. Hides the current commit\n    and checks out the previous version of the commit. 'hg unamend' does not\n    revert the state of the working copy, so changes that were added to the\n    commit in the last amend operation become pending changes in the working\n    copy.\n\n    'hg unamend' cannot be run on amended commits that have children. In other\n    words, you cannot unamend an amended commit in the middle of a stack.\n\n    Note:\n        Running 'hg unamend' is similar to running 'hg undo --keep'\n        immediately after 'hg amend'. However, unlike 'hg undo', which can\n        only undo an amend if it was the last operation you performed, 'hg\n        unamend' can unamend any draft amended commit in the graph that does\n        not have children.\n\n(some details hidden, use --verbose to show complete help)\n")))}u.isMDXComponent=!0}}]);