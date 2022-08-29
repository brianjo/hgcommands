"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>l});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=m(n),l=o,u=f["".concat(c,".").concat(l)]||f[l]||p[l]||a;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"Commands/export",id:"Commands/export",title:"export",description:"",source:"@site/docs/Commands/export.md",sourceDirName:"Commands",slug:"/Commands/export",permalink:"/hgcommands/docs/Commands/export",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/export.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"doctor",permalink:"/hgcommands/docs/Commands/doctor"},next:{title:"files",permalink:"/hgcommands/docs/Commands/files"}},c={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'hg export \\[OPTION\\]... \\[-o OUTFILESPEC\\] \\[-r\\] \\[REV\\]...\n\naliases: e\n\ndump the header and diffs for one or more commits\n\n    Print the commit header and diffs for one or more revisions. If no\n    revision is given, the parent of the working directory is used.\n\n    The information shown in the commit header is: author, date, branch name\n    (if non-default), commit hash, parent(s) and commit comment.\n\n    Note:\n       \'hg export\' may generate unexpected diff output for merge commits, as\n       it will compare the merge commit against its first parent only.\n\n    Output may be to a file, in which case the name of the file is given using\n    a format string. The formatting rules are as follows:\n\n    "%%"          literal "%" character\n    "%H"          commit hash (40 hexadecimal digits)\n    "%N"          number of patches being generated\n    "%R"          commit revision number\n    "%b"          basename of the exporting repository\n    "%h"          short-form commit hash (12 hexadecimal digits)\n    "%m"          first line of the commit message (only alphanumeric\n                  characters)\n    "%n"          zero-padded sequence number, starting at 1\n    "%r"          zero-padded commit revision number\n\n    Without the -a/--text option, export will avoid generating diffs of files\n    it detects as binary. With -a, export will generate a diff anyway,\n    probably with undesirable results.\n\n    Use the -g/--git option to generate diffs in the git extended diff format.\n    See \'hg help diffs\' for more information.\n\n    With the --switch-parent option, the diff will be against the second\n    parent. It can be useful to review a merge.\n\n    Returns 0 on success.\n\nOptions (\\[+\\] can be repeated):\n\n-o --output FORMAT print output to file with formatted name\n--switch-parent diff against the second parent -r --rev REV \\[+\\]\nrevisions to export --pattern PATTERN \\[+\\] file patterns -a --text\ntreat all files as text -g --git use git extended diff format --binary\ngenerate binary diffs in git mode (default) --nodates omit dates from\ndiff headers -I --include PATTERN \\[+\\] include names matching the given\npatterns -X --exclude PATTERN \\[+\\] exclude names matching the given\npatterns\n\n(some details hidden, use --verbose to show complete help)\n')))}p.isMDXComponent=!0}}]);