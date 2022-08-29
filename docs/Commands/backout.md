``` 
hg backout \[OPTION\]... \[-r\] REV

aliases: backo

reverse the effects of an earlier commit

    Create an inverse commit for the specified commit. This command is
    commonly used to undo the effects of a public commit.

    By default, 'hg backout' creates a new commit on top of the current
    commit. Specify --no-commit to only change the working copy rather than
    automatically creating a new commit.

    If merge conflicts are encountered during the backout, changes will be
    left in the working copy with conflict markers inserted. When this occurs,
    resolve the conflicts and then run 'hg commit'.

    By default, 'hg backout' will abort if pending changes are present in the
    working copy. Specify --merge to combine changes from the backout with
    your pending changes.

    See 'hg help dates' for a list of formats valid for -d/--date.

    See 'hg help revert' for a way to restore files to the state of another
    revision.

    Returns 0 on success, 1 if nothing to backout or there are unresolved
    files.

Options (\[+\] can be repeated):

    --merge               combine existing pending changes with backout
                          changes
    --no-commit           do not commit

-r --rev REV revision to back out -e --edit open editor to specify
custom commit message -t --tool VALUE specify merge tool -I --include
PATTERN \[+\] include names matching the given patterns -X --exclude
PATTERN \[+\] exclude names matching the given patterns -m --message
TEXT use text as commit message -l --logfile FILE read commit message
from file -d --date DATE record the specified date as commit date -u
--user USER record the specified user as committer

(some details hidden, use --verbose to show complete help)
