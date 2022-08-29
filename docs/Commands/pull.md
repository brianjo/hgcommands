``` 
hg pull \[-u\] \[-f\] \[-r REV\]... \[-e CMD\] \[--remotecmd CMD\]
\[SOURCE\]

aliases: pul

pull changes from the specified source

    Pull changes from a remote repository to a local one. This command
    modifies the commit graph, but doesn't affect local commits or files on
    disk.

    If SOURCE is omitted, the default path is used. See 'hg help urls' for
    more information.

    Returns 0 on success, 1 if "--update" was specified but the update had
    unresolved conflicts.

Options (\[+\] can be repeated):

-u --update update to new branch head if new descendants were pulled -f
--force run even when remote repository is unrelated -r --rev REV \[+\]
a remote commit to pull -B --bookmark BOOKMARK \[+\] a bookmark to pull
--rebase rebase current commit or current stack onto master -t --tool
VALUE specify merge tool for rebase -d --dest VALUE destination for
rebase or update

(some details hidden, use --verbose to show complete help)
