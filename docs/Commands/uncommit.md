``` 
hg uncommit \[OPTION\]... \[FILE\]...

aliases: unc

uncommit part or all of the current commit

    Reverse the effects of an 'hg commit' operation. When run with no
    arguments, hides the current commit and checks out the parent commit, but
    does not revert the state of the working copy. Changes that were contained
    in the uncommitted commit become pending changes in the working copy.

    'hg uncommit' cannot be run on commits that have children. In other words,
    you cannot uncommit a commit in the middle of a stack. Similarly, by
    default you cannot run 'hg uncommit' if there are pending changes in the
    working copy.

    You can selectively uncommit files from the current commit by optionally
    specifying a list of files to remove. The specified files are removed from
    the list of changed files in the current commit, but are not modified on
    disk, so they appear as pending changes in the working copy.

    Note:
       Running 'hg uncommit' is similar to running 'hg undo --keep'
       immediately after 'hg commit'. However, unlike 'hg undo', which can
       only undo a commit if it was the last operation you performed, 'hg
       uncommit' can uncommit any draft commit in the graph that does not have
       children.

Options (\[+\] can be repeated):

    --keep                allow an empty commit after uncommiting

-I --include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
