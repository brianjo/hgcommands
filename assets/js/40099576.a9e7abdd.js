"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9794],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return t?r.createElement(d,s(s({ref:n},m),{},{components:t})):r.createElement(d,s({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={},s=void 0,a={unversionedId:"Commands/manifest",id:"Commands/manifest",title:"manifest",description:"",source:"@site/docs/Commands/manifest.md",sourceDirName:"Commands",slug:"/Commands/manifest",permalink:"/hgcommands/docs/Commands/manifest",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/manifest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"log",permalink:"/hgcommands/docs/Commands/log"},next:{title:"merge",permalink:"/hgcommands/docs/Commands/merge"}},c={},l=[],m={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hg manifest \\[-r REV\\]\n\naliases: mani\n\noutput the current or given revision of the project manifest\n\n    Print a list of version controlled files for the given revision. If no\n    revision is given, the first parent of the working directory is used, or\n    the null revision if no revision is checked out.\n\n    With -v, print file permissions, symlink and executable bits. With\n    --debug, print file revision hashes.\n\n    If option --all is specified, the list of all files from all revisions is\n    printed. This includes deleted and renamed files.\n\n    Returns 0 on success.\n\nOptions:\n\n-r --rev REV revision to display --all list files from all revisions\n\n(some details hidden, use --verbose to show complete help)\n")))}p.isMDXComponent=!0}}]);