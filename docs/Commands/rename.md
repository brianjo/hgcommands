``` 
hg rename \[OPTION\]... SOURCE... DEST

aliases: move, mv, ren, mo

rename files; equivalent of copy + remove

    Mark dest as copies of sources; mark sources for deletion. If dest is a
    directory, copies are put in that directory. If dest is a file, there can
    only be one source.

    By default, this command copies the contents of files as they exist in the
    working directory. If invoked with -A/--after, the operation is recorded,
    but no copying is performed.

    This command takes effect at the next commit. To undo a rename before
    that, see 'hg revert'.

    Returns 0 on success, 1 if errors are encountered.

Options (\[+\] can be repeated):

-A --after record a rename that has already occurred -f --force forcibly
copy over an existing managed file -I --include PATTERN \[+\] include
names matching the given patterns -X --exclude PATTERN \[+\] exclude
names matching the given patterns -n --dry-run do not perform actions,
just print output

(some details hidden, use --verbose to show complete help)
