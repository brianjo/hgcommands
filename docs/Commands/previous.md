``` 
hg previous \[OPTIONS\]... \[STEPS\]

aliases: prev

check out the parent commit

Options:

    --newest               always pick the newest parent when a changeset has
                           multiple parents
    --bottom               update to the lowest non-public ancestor of the
                           current changeset
    --bookmark             update to the first ancestor with a bookmark
    --no-activate-bookmark do not activate the bookmark on the destination
                           changeset

-C --clean discard uncommitted changes (no backup) -B --move-bookmark
move active bookmark -m --merge merge uncommitted changes -c --check
require clean working directory

(some details hidden, use --verbose to show complete help)
