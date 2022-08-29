"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||l[p]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=n[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={},c=void 0,i={unversionedId:"Commands/backout",id:"Commands/backout",title:"backout",description:"",source:"@site/docs/Commands/backout.md",sourceDirName:"Commands",slug:"/Commands/backout",permalink:"/hgcommands/docs/Commands/backout",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/backout.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"archive",permalink:"/hgcommands/docs/Commands/archive"},next:{title:"bisect",permalink:"/hgcommands/docs/Commands/bisect"}},s={},m=[],u={toc:m};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hg backout \\[OPTION\\]... \\[-r\\] REV\n\naliases: backo\n\nreverse the effects of an earlier commit\n\n    Create an inverse commit for the specified commit. This command is\n    commonly used to undo the effects of a public commit.\n\n    By default, 'hg backout' creates a new commit on top of the current\n    commit. Specify --no-commit to only change the working copy rather than\n    automatically creating a new commit.\n\n    If merge conflicts are encountered during the backout, changes will be\n    left in the working copy with conflict markers inserted. When this occurs,\n    resolve the conflicts and then run 'hg commit'.\n\n    By default, 'hg backout' will abort if pending changes are present in the\n    working copy. Specify --merge to combine changes from the backout with\n    your pending changes.\n\n    See 'hg help dates' for a list of formats valid for -d/--date.\n\n    See 'hg help revert' for a way to restore files to the state of another\n    revision.\n\n    Returns 0 on success, 1 if nothing to backout or there are unresolved\n    files.\n\nOptions (\\[+\\] can be repeated):\n\n    --merge               combine existing pending changes with backout\n                          changes\n    --no-commit           do not commit\n\n-r --rev REV revision to back out -e --edit open editor to specify\ncustom commit message -t --tool VALUE specify merge tool -I --include\nPATTERN \\[+\\] include names matching the given patterns -X --exclude\nPATTERN \\[+\\] exclude names matching the given patterns -m --message\nTEXT use text as commit message -l --logfile FILE read commit message\nfrom file -d --date DATE record the specified date as commit date -u\n--user USER record the specified user as committer\n\n(some details hidden, use --verbose to show complete help)\n")))}l.isMDXComponent=!0}}]);