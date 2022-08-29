``` 
hg hide \[OPTION\]... \[-r\] REV...

aliases: strip, prune, hid, str

hide commits and their descendants

    Mark the specified commits as hidden. Hidden commits are not included in
    the output of most Mercurial commands, including 'hg log' and 'hg
    smartlog.' Any descendants of the specified commits will also be hidden.

    Hidden commits are not deleted. They will remain in the repo indefinitely
    and are still accessible by their hashes. However, 'hg hide' will delete
    any bookmarks pointing to hidden commits.

    Use the 'hg unhide' command to make hidden commits visible again. See 'hg
    help unhide' for more information.

    To view hidden commits, run 'hg journal'.

    When you hide the current commit, the most recent visible ancestor is
    checked out.

    To hide obsolete stacks (stacks that have a newer version), run 'hg hide
    --cleanup'. This command is equivalent to:

    'hg hide 'obsolete() - ancestors(draft() & not obsolete())''

    --cleanup skips obsolete commits with non-obsolete descendants.

Options (\[+\] can be repeated):

-r --rev VALUE \[+\] revisions to hide -c --cleanup clean up commits
with newer versions, and non- essential remote bookmarks -B --bookmark
VALUE \[+\] hide commits only reachable from a bookmark

(some details hidden, use --verbose to show complete help)
