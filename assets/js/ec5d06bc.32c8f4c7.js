"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},i=void 0,s={unversionedId:"Commands/annotate",id:"Commands/annotate",title:"annotate",description:"",source:"@site/docs/Commands/annotate.md",sourceDirName:"Commands",slug:"/Commands/annotate",permalink:"/hgcommands/docs/Commands/annotate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/annotate.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"amend",permalink:"/hgcommands/docs/Commands/amend"},next:{title:"archive",permalink:"/hgcommands/docs/Commands/archive"}},c={},l=[],m={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hg annotate \\[-r REV\\] \\[-f\\] \\[-a\\] \\[-u\\] \\[-d\\] \\[-n\\] \\[-c\\] \\[-l\\]\nFILE...\n\naliases: blame, blam, an\n\nshow commit information by line for each file\n\n    List changes in files, showing the commit responsible for each line.\n\n    This command is useful for discovering when a change was made and by whom.\n\n    If you include -n, commit gets replaced by revision id, unless you also\n    include -c, in which case both are shown. -p on the other hand always adds\n    Phabricator Diff Id, not replacing anything with it.\n\n    Without the -a/--text option, annotate will avoid processing files it\n    detects as binary. With -a, annotate will annotate the file anyway,\n    although the results will probably be neither useful nor desirable.\n\n    Returns 0 on success.\n\nOptions (\\[+\\] can be repeated):\n\n-r --rev REV annotate the specified revision --no-follow don't follow\ncopies and renames -a --text treat all files as text -u --user list the\nauthor (long with -v) -f --file list the filename -d --date list the\ndate (short with -q) -n --number list the revision number -c --changeset\nlist the changeset (default) -l --line-number show line number at the\nfirst appearance -w --ignore-all-space ignore white space when comparing\nlines -b --ignore-space-change ignore changes in the amount of white\nspace -B --ignore-blank-lines ignore changes whose lines are all blank\n-Z --ignore-space-at-eol ignore changes in whitespace at EOL -I\n--include PATTERN \\[+\\] include names matching the given patterns -X\n--exclude PATTERN \\[+\\] exclude names matching the given patterns -p\n--phabdiff list phabricator diff id\n\n(some details hidden, use --verbose to show complete help)\n")))}p.isMDXComponent=!0}}]);