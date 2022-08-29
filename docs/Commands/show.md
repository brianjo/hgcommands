``` 
hg show \[OPTION\]... \[REV \[FILE\]...\]

show commit in detail

    Show the commit message and contents for the specified commit. If no
    commit is specified, shows the current commit.

    This behaves similarly to 'hg log -vp -r REV [OPTION]... [FILE]...', or if
    called without a REV, 'hg log -vp -r . [OPTION]...' Use 'hg log' for more
    powerful operations than supported by hg show.

Options (\[+\] can be repeated):

    --nodates             omit dates from diff headers (but keeps it in commit
                          header)
    --noprefix            omit a/ and b/ prefixes from filenames
    --stat                output diffstat-style summary of changes

-g --git use git extended diff format -U --unified VALUE number of lines
of diff context to show (default: 3) -w --ignore-all-space ignore white
space when comparing lines -b --ignore-space-change ignore changes in
the amount of white space -B --ignore-blank-lines ignore changes whose
lines are all blank -Z --ignore-space-at-eol ignore changes in
whitespace at EOL -T --template TEMPLATE display with template -I
--include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
