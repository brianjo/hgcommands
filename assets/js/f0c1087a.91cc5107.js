"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1107],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i=void 0,s={unversionedId:"Commands/bundle",id:"Commands/bundle",title:"bundle",description:"",source:"@site/docs/Commands/bundle.md",sourceDirName:"Commands",slug:"/Commands/bundle",permalink:"/docs/Commands/bundle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/bundle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"branch",permalink:"/docs/Commands/branch"},next:{title:"cat",permalink:"/docs/Commands/cat"}},l={},c=[],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hg bundle \\[-f\\] \\[-t BUNDLESPEC\\] \\[-a\\] \\[-r REV\\]... \\[--base\nREV\\]... FILE \\[DEST\\]\n\naliases: bu\n\ncreate a bundle file\n\n    Generate a bundle file containing data to be added to a repository.\n\n    To create a bundle containing all commits, use -a/--all (or --base null).\n    Otherwise, hg assumes the destination will have all the nodes you specify\n    with --base parameters. Otherwise, hg will assume the repository has all\n    the nodes in destination, or default-push/default if no destination is\n    specified.\n\n    You can change bundle format with the -t/--type option. See 'hg help\n    bundlespec' for documentation on this format. By default, the most\n    appropriate format is used and compression defaults to bzip2.\n\n    The bundle file can then be transferred using conventional means and\n    applied to another repository with the unbundle or pull command. This is\n    useful when direct push and pull are not available or when exporting an\n    entire repository is undesirable.\n\n    Applying bundles preserves all commit contents including permissions,\n    copy/rename information, and revision history.\n\n    Returns 0 on success, 1 if no changes found.\n\nOptions (\\[+\\] can be repeated):\n\n-f --force run even when the destination is unrelated -r --rev REV \\[+\\]\na changeset intended to be added to the destination --base REV \\[+\\] a\nbase changeset assumed to be available at the destination -a --all\nbundle all changesets in the repository -t --type TYPE bundle\ncompression type to use (default: bzip2)\n\n(some details hidden, use --verbose to show complete help)\n")))}d.isMDXComponent=!0}}]);