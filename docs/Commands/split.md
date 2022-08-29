``` 
hg split \[OPTION\]... \[\[-r\] REV\]

aliases: spl

split a commit into smaller commits

    Prompt for hunks to be selected until exhausted. Each selection of hunks
    will form a separate commit, in order from parent to child: the first
    selection will form the first commit, the second selection will form the
    second commit, and so on.

    Operates on the current revision by default. Use --rev to split a given
    commit instead.

Options (\[+\] can be repeated):

-r --rev VALUE \[+\] revision to split --no-rebase don't rebase
descendants after split -m --message TEXT use text as commit message -l
--logfile FILE read commit message from file -d --date DATE record the
specified date as commit date -u --user USER record the specified user
as committer

(some details hidden, use --verbose to show complete help)
