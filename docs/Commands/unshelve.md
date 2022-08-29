``` 
hg unshelve \[\[-n\] SHELVED\]

aliases: unshe

restore a shelved change to the working directory

    This command accepts an optional name of a shelved change to restore. If
    none is given, the most recent shelved change is used.

    If a shelved change is applied successfully, the bundle that contains the
    shelved changes is moved to a backup location (.hg/shelve-backup).

    Since you can restore a shelved change on top of an arbitrary commit, it
    is possible that unshelving will result in a conflict between your changes
    and the commits you are unshelving onto. If this occurs, you must resolve
    the conflict, then use "--continue" to complete the unshelve operation.
    (The bundle will not be moved until you successfully complete the
    unshelve.)

    (Alternatively, you can use "--abort" to abandon an unshelve that causes a
    conflict. This reverts the unshelved changes, and leaves the bundle in
    place.)

    If bare shelved change(when no files are specified, without interactive,
    include and exclude option) was done on newly created branch it would
    restore branch information to the working directory.

    After a successful unshelve, the shelved changes are stored in a backup
    directory. Only the N most recent backups are kept. N defaults to 10 but
    can be overridden using the "shelve.maxbackups" configuration option.

Options:

-a --abort abort an incomplete unshelve operation -c --continue continue
an incomplete unshelve operation -k --keep keep shelve after unshelving
-n --name NAME restore shelved change with given name -t --tool VALUE
specify merge tool

(some details hidden, use --verbose to show complete help)
