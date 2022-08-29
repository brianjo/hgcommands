``` 
hg uncopy \[OPTION\]... \[SOURCES\]...

mark files as not copied for the next commit

    Unmark sources previously marked by 'hg copy' so they are no longer
    copies.

    See 'hg help patterns' and 'hg help filesets' for more information on
    specifying file patterns.

    This command takes effect with the next commit.

    Returns 0 on success, 1 if nothing changed.

Options (\[+\] can be repeated):

-I --include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns -n
--dry-run do not perform actions, just print output

(some details hidden, use --verbose to show complete help)
