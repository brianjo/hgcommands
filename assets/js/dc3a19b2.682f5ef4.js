"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=a,m=l["".concat(c,".").concat(f)]||l[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},5650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"Commands/archive",id:"Commands/archive",title:"archive",description:"",source:"@site/docs/Commands/archive.md",sourceDirName:"Commands",slug:"/Commands/archive",permalink:"/docs/Commands/archive",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/archive.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"annotate",permalink:"/docs/Commands/annotate"},next:{title:"backout",permalink:"/docs/Commands/backout"}},c={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'hg archive \\[OPTION\\]... DEST\n\naliases: ar\n\ncreate an unversioned archive of a repository revision\n\n    By default, the revision used is the parent of the working directory; use\n    -r/--rev to specify a different revision.\n\n    The archive type is automatically detected based on file extension (to\n    override, use -t/--type).\n\n    Valid types are:\n\n    "files"       a directory full of files (default)\n    "tar"         tar archive, uncompressed\n    "tbz2"        tar archive, compressed using bzip2\n    "tgz"         tar archive, compressed using gzip\n    "uzip"        zip archive, uncompressed\n    "zip"         zip archive, compressed using deflate\n\n    The exact name of the destination archive or directory is given using a\n    format string; see \'hg help export\' for details.\n\n    Each member added to an archive file has a directory prefix prepended. Use\n    -p/--prefix to specify a format string for the prefix. The default is the\n    basename of the archive, with suffixes removed.\n\n    Returns 0 on success.\n\nOptions (\\[+\\] can be repeated):\n\n    --no-decode           do not pass files through decoders\n\n-p --prefix PREFIX directory prefix for files in archive -r --rev REV\nrevision to distribute -t --type TYPE type of distribution to create -I\n--include PATTERN \\[+\\] include names matching the given patterns -X\n--exclude PATTERN \\[+\\] exclude names matching the given patterns\n\n(some details hidden, use --verbose to show complete help)\n')))}u.isMDXComponent=!0}}]);