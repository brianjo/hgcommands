"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(p,s(s({ref:t},m),{},{components:n})):o.createElement(p,s({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},s=void 0,i={unversionedId:"Commands/rebase",id:"Commands/rebase",title:"rebase",description:"",source:"@site/docs/Commands/rebase.md",sourceDirName:"Commands",slug:"/Commands/rebase",permalink:"/docs/Commands/rebase",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Commands/rebase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rage",permalink:"/docs/Commands/rage"},next:{title:"record",permalink:"/docs/Commands/record"}},c={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'hg rebase \\[-s REV \\| -b REV\\] \\[-d REV\\] \\[OPTION\\]\\[-i\\]\n\nmove commits from one location to another\n\n    Rebase moves commits from one part of the commit graph to another. It does\n    this by creating a copy of the commit at the destination and hiding the\n    original commit.\n\n    To create copies of your commits instead of moving them, use "--keep"\n    ("-k") to keep the original commits rather than hiding them.\n\n    If the commits being rebased have bookmarks, rebase moves the bookmarks\n    onto the new versions of the commits. Bookmarks are moved even if "--keep"\n    is specified.\n\n    Public commits cannot be rebased unless you use the "-k" option to copy\n    them.\n\n    Use the following options to select the commits you want to rebase:\n\n      1. "--rev" to explicitly select commits\n      2. "--source" to select a root commit and include all of its descendants\n      3. "--base" to select a commit and its ancestors and descendants\n\n    If no option is specified to select commits, "-b ." is used by default.\n\n    If commits that you are rebasing consist entirely of changes that are\n    already present in the destination, those commits are not moved (in other\n    words, they are rebased out).\n\n    Sometimes conflicts can occur when you rebase. When this happens, by\n    default, Mercurial launches an editor for every conflict. Conflict markers\n    are inserted into affected files, like:\n\n      <<<<\n      dest\n      ====\n      source\n      >>>>\n\n    To fix the conflicts, for each file, remove the markers and replace the\n    whole block of code with the correctly merged code.\n\n    If you close the editor without resolving the conflict, the rebase is\n    interrupted and you are returned to the command line. At this point, you\n    can resolve conflicts in manual resolution mode. See \'hg help resolve\' for\n    details.\n\n    After manually resolving conflicts, resume the rebase with "hg rebase\n    --continue" ("-c"). If you are not able to successfully resolve all\n    conflicts, run "hg rebase --abort" ("-a") to abort the rebase.\n\n    Alternatively, you can use a custom merge tool to automate conflict\n    resolution. To specify a custom merge tool, use the "--tool" flag. See \'hg\n    help merge-tools\' for a list of available tools and for information about\n    configuring the default merge behavior.\n\n    Return Values:\n\n    Returns 0 on success, 1 if nothing to rebase or if there are unresolved\n    conflicts.\n\n(use \'hg help -e rebase\' to show help for the rebase extension)\n\nOptions (\\[+\\] can be repeated):\n\n-s --source REV rebase the specified changeset and descendants -b --base\nREV rebase everything from branching point of specified changeset -r\n--rev REV \\[+\\] rebase these revisions -d --dest REV rebase onto the\nspecified changeset --collapse collapse the rebased changesets -m\n--message TEXT use text as collapse commit message -e --edit invoke\neditor on commit messages -l --logfile FILE read collapse commit message\nfrom file -k --keep keep original changesets -t --tool VALUE specify\nmerge tool -c --continue continue an interrupted rebase -a --abort abort\nan interrupted rebase --restack rebase all changesets in the current\nstack onto the latest version of their respective parents -i\n--interactive interactive rebase\n\n(some details hidden, use --verbose to show complete help)\n')))}u.isMDXComponent=!0}}]);