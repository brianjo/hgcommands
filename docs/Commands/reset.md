``` 
hg reset \[REV\]

moves the active bookmark and working copy parent to the desired rev

    The reset command is for moving your active bookmark and working copy to a
    different location. This is useful for undoing commits, amends, etc.

    By default, the working copy content is not touched, so you will have
    pending changes after the reset. If --clean/-C is specified, the working
    copy contents will be overwritten to match the destination revision, and
    you will not have any pending changes.

    After your bookmark and working copy have been moved, the command will
    delete any commits that belonged only to that bookmark. Use --keep/-k to
    avoid deleting any commits.

Options:

-C --clean wipe the working copy clean when resetting -k --keep keeps
the old changesets the bookmark pointed to -r --rev VALUE revision to
reset to

(some details hidden, use --verbose to show complete help)
