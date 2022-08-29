``` 
hg remove \[OPTION\]... FILE...

aliases: rm, rem

delete the specified tracked files

    Remove the specified tracked files from the repository and delete them.
    The files will be deleted from the repository at the next commit.

    To undo a remove before files have been committed, use 'hg revert'. To
    stop tracking files without deleting them, use 'hg forget'.

    Returns 0 on success, 1 if any warnings encountered.

Options (\[+\] can be repeated):

-A --after record delete for missing files -f --force forget added
files, delete modified files -I --include PATTERN \[+\] include names
matching the given patterns -X --exclude PATTERN \[+\] exclude names
matching the given patterns

(some details hidden, use --verbose to show complete help)
