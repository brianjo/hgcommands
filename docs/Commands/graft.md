``` 
hg graft \[OPTION\]... \[-r REV\]... REV...

aliases: gra

copy commits from a different location

    This command uses Mercurial's merge logic to copy individual changes from
    other branches without merging branches in the history graph. This is
    sometimes known as 'backporting' or 'cherry-picking'. By default, graft
    will copy user, date, and description from the source commits.

    Changesets that are ancestors of the current revision, that have already
    been grafted, or that are merges will be skipped.

    If --log is specified, log messages will have a comment appended of the
    form:

      (grafted from CHANGESETHASH)

    If --force is specified, revisions will be grafted even if they are
    already ancestors of, or have been grafted to, the destination. This is
    useful when the revisions have since been backed out.

    If a graft merge results in conflicts, the graft process is interrupted so
    that the current merge can be manually resolved. Once all conflicts are
    addressed, the graft process can be continued with the -c/--continue
    option.

    Note:
       The -c/--continue option does not reapply earlier options, except for
       --force.

    See 'hg help revisions' for more about specifying revisions.

    Returns 0 on successful completion.

Options (\[+\] can be repeated):

-r --rev REV \[+\] revisions to graft -c --continue resume interrupted
graft --abort abort an interrupted graft -e --edit invoke editor on
commit messages --log append graft info to log message -f --force force
graft -D --currentdate record the current date as commit date -U
--currentuser record the current user as committer -d --date DATE record
the specified date as commit date -u --user USER record the specified
user as committer -t --tool VALUE specify merge tool -n --dry-run do not
perform actions, just print output

(some details hidden, use --verbose to show complete help)
