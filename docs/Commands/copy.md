``` 
hg copy \[OPTION\]... \[SOURCE\]... DEST

aliases: cp, cop

mark files as copied for the next commit

    Mark dest as having copies of source files. If dest is a directory, copies
    are put in that directory. If dest is a file, the source must be a single
    file.

    By default, this command copies the contents of files as they exist in the
    working directory. If invoked with -A/--after, the operation is recorded,
    but no copying is performed.

    This command takes effect with the next commit. To undo a copy before
    that, see 'hg revert'.

    Returns 0 on success, 1 if errors are encountered.

Options (\[+\] can be repeated):

-A --after record a copy that has already occurred -f --force forcibly
copy over an existing managed file -I --include PATTERN \[+\] include
names matching the given patterns -X --exclude PATTERN \[+\] exclude
names matching the given patterns -n --dry-run do not perform actions,
just print output

(some details hidden, use --verbose to show complete help)
