``` 
hg update \[-C\|-c\|-m\] \[\[-r\] REV\]

aliases: up, checkout, co, che

check out a specific commit

    Update your checkout to the given destination commit. More precisely, make
    the destination commit the current commit and update the contents of all
    files in your checkout to match their state in the destination commit.

    By default, if you attempt to check out a commit while you have pending
    changes, and the destination commit is not an ancestor or descendant of
    the current commit, the checkout will abort. However, if the destination
    commit is an ancestor or descendant of the current commit, the pending
    changes will be merged into the new checkout.

    Use one of the following flags to modify this behavior:

    --check: abort if there are pending changes

    --clean: permanently discard any pending changes (use with caution)

    --merge: attempt to merge the pending changes into the new checkout, even
    if the destination commit is not an ancestor or descendant of the current
    commit

    If merge conflicts occur during checkout, Mercurial enters an unfinished
    merge state. If this happens, fix the conflicts manually and then run hg
    commit to exit the unfinished merge state and save your changes in a new
    commit. Alternatively, run hg checkout --clean to discard your pending
    changes.

    Specify null as the destination commit to get an empty checkout (sometimes
    known as a bare repository).

    Returns 0 on success, 1 if there are unresolved files.

Options:

-C --clean discard uncommitted changes (no backup) -c --check require
clean working directory -m --merge merge uncommitted changes -r --rev
REV revision --inactive update without activating bookmarks -t --tool
VALUE specify merge tool -B --bookmark VALUE create new bookmark

(some details hidden, use --verbose to show complete help)
