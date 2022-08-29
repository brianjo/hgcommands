"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||h[d]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"Commands/histgrep",id:"Commands/histgrep",title:"histgrep",description:"",source:"@site/docs/Commands/histgrep.md",sourceDirName:"Commands",slug:"/Commands/histgrep",permalink:"/hgcommands/docs/Commands/histgrep",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/histgrep.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"histedit",permalink:"/hgcommands/docs/Commands/histedit"},next:{title:"identify",permalink:"/hgcommands/docs/Commands/identify"}},c={},l=[],p={toc:l};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'hg histgrep \\[OPTION\\]... PATTERN \\[FILE\\]...\n\nsearch backwards through history for a pattern in the specified files\n\n    Search revision history for a regular expression in the specified files or\n    the entire project.\n\n    By default, grep prints the most recent revision number for each file in\n    which it finds a match. To get it to print every revision that contains a\n    change in match status ("-" for a match that becomes a non-match, or "+"\n    for a non-match that becomes a match), use the --all flag.\n\n    PATTERN can be any Python (roughly Perl-compatible) regular expression.\n\n    If no FILEs are specified (and -f/--follow isn\'t set), all files in the\n    repository are searched, including those that don\'t exist in the current\n    branch or have been deleted in a prior commit.\n\n    Returns 0 if a match is found, 1 otherwise.\n\nOptions (\\[+\\] can be repeated):\n\n-0 --print0 end fields with NUL --all print all revisions that match -a\n--text treat all files as text -f --follow follow changeset history, or\nfile history across copies and renames -i --ignore-case ignore case when\nmatching -l --files-with-matches print only filenames and revisions that\nmatch -n --line-number print matching line numbers -r --rev REV \\[+\\]\nonly search files changed within revision range -u --user list the\nauthor (long with -v) -d --date list the date (short with -q) -I\n--include PATTERN \\[+\\] include names matching the given patterns -X\n--exclude PATTERN \\[+\\] exclude names matching the given patterns\n\n(some details hidden, use --verbose to show complete help)\n')))}h.isMDXComponent=!0}}]);