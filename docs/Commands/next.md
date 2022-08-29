``` 
hg next \[OPTIONS\]... \[STEPS\]

aliases: n

check out a child commit

Options:

    --newest               always pick the newest child when a changeset has
                           multiple children
    --rebase               rebase each changeset if necessary
    --top                  update to the head of the current stack
    --bookmark             update to the first changeset with a bookmark
    --no-activate-bookmark do not activate the bookmark on the destination
                           changeset
    --towards VALUE        move linearly towards the specified head

-C --clean discard uncommitted changes (no backup) -B --move-bookmark
move active bookmark -m --merge merge uncommitted changes -c --check
require clean working directory

(some details hidden, use --verbose to show complete help)
