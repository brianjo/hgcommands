``` 
hg forget \[OPTION\]... FILE...

aliases: for

stop tracking the specified files

    Mark the specified files so they will no longer be tracked after the next
    commit.

    This only removes files from the current branch, not from the entire
    project history, and it does not delete them from the working directory.

    To delete the file from the working directory, see 'hg remove'.

    To undo a forget before the next commit, see 'hg add'.

    Returns 0 on success.

Options (\[+\] can be repeated):

-I --include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
