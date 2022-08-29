``` 
hg fold \[OPTION\]... (--from \[-r\] REV \| --exact \[-r\] REV...)

aliases: squash

combine multiple commits into a single commit

    With --from, folds all the revisions linearly between the current revision
    and the specified revision.

    With --exact, folds only the specified revisions while ignoring the
    revision currently checked out. The given revisions must form a linear
    unbroken chain.

Options (\[+\] can be repeated):

-r --rev VALUE \[+\] revision to fold --exact only fold specified
revisions --from fold linearly from current revision to specified
revision --no-rebase don't rebase descendants after split -M
--reuse-message REV reuse commit message from REV -m --message TEXT use
text as commit message -l --logfile FILE read commit message from file
-d --date DATE record the specified date as commit date -u --user USER
record the specified user as committer

(some details hidden, use --verbose to show complete help)
