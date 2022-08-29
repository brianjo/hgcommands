``` 
hg push \[-f\] \[-r REV\]... \[-e CMD\] \[--remotecmd CMD\] \[DEST\]

push changes to the specified destination

    Push commits from the local repository to the specified destination.

    This operation is symmetrical to pull: it is identical to a pull in the
    destination repository from the current one.

    By default, push will not allow creation of new heads at the destination,
    since multiple heads would make it unclear which head to use. In this
    situation, it is recommended to pull and merge before pushing.

    Note:
       Extra care should be taken with the -f/--force option, which will push
       all new heads on all branches, an action which will almost always cause
       confusion for collaborators.

    If -r/--rev is used, the specified revision and all its ancestors will be
    pushed to the remote repository.

    If -B/--bookmark is used, the specified bookmarked revision, its
    ancestors, and the bookmark will be pushed to the remote repository.
    Specifying "." is equivalent to specifying the active bookmark's name.

    Please see 'hg help urls' for important details about "ssh://" URLs. If
    DESTINATION is omitted, a default path will be used.

    Returns 0 if push was successful, 1 if nothing to push.

Options (\[+\] can be repeated):

-f --force force push -r --rev REV \[+\] a changeset intended to be
included in the destination -B --bookmark BOOKMARK \[+\] bookmark to
push --to VALUE push revs to this bookmark --non-forward-move allows
moving a remote bookmark to an arbitrary place --create create a new
remote bookmark -d --delete BOOKMARK delete remote bookmark --allow-anon
allow a new unbookmarked head

(some details hidden, use --verbose to show complete help)
