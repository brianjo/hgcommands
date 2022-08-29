``` 
Mercurial Distributed SCM

hg COMMAND \[OPTIONS\]

These are some common Mercurial commands. Use 'hg help commands' to list
all commands, and 'hg help COMMAND' to get help on a specific command.

Get the latest commits from the server:

pull pull changes from the specified source

View commits:

show show commit in detail diff show differences between commits

Check out a commit:

checkout check out a specific commit

Work with your checkout:

status list files with pending changes add start tracking the specified
files remove delete the specified tracked files forget stop tracking the
specified files revert change the specified files to match a commit
purge delete untracked files shelve save pending changes and revert
checkout to a clean state

Commit changes and modify commits:

commit save all pending changes or specified files in a new commit amend
save pending changes to the current commit metaedit edit commit message
and other metadata

Rearrange commits:

rebase move commits from one location to another graft copy commits from
a different location hide hide commits and their descendants unhide
unhide commits and their ancestors

Work with stacks of commits:

previous check out the parent commit next check out a child commit split
split a commit into smaller commits fold combine multiple commits into a
single commit histedit interactively reorder, combine, or delete commits
absorb apply pending corrections into a stack of commits

Undo changes:

uncommit uncommit part or all of the current commit unamend undo the
last amend operation on the current commit undo undo the last local
command redo undo the last undo

Other commands:

config show config settings doctor attempt to check and fix issues grep
search for a pattern in tracked files in the working directory journal
show history of the checked out commit or a bookmark rage collect
troubleshooting diagnostics

Additional help topics:

filesets specifying files by their characteristics glossary common terms
patterns specifying files by file name pattern revisions specifying
commits templating customizing output with templates

For more commands, see https://fburl.com/hgcheatsheet
