``` 
hg heads \[-ct\] \[-r STARTREV\] \[REV\]...

aliases: hea

show branch heads

    With no arguments, show all open branch heads in the repository. Branch
    heads are commits that have no descendants on the same branch. They are
    where development generally takes place and are the usual targets for
    update and merge operations.

    If one or more REVs are given, only open branch heads on the branches
    associated with the specified commits are shown. This means that you can
    use 'hg heads .' to see the heads on the currently checked-out branch.

    If -c/--closed is specified, also show branch heads marked closed (see 'hg
    commit --close-branch').

    If STARTREV is specified, only those heads that are descendants of
    STARTREV will be displayed.

    If -t/--topo is specified, named branch mechanics will be ignored and only
    topological heads (commits with no children) will be shown.

    Returns 0 if matching heads are found, 1 if not.

Options:

-r --rev STARTREV show only heads which are descendants of STARTREV -t
--topo show topological heads only -c --closed show normal and closed
branch heads -T --template TEMPLATE display with template

(some details hidden, use --verbose to show complete help)
