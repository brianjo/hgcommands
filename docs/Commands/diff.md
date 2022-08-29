``` 
hg diff \[OPTION\]... (\[-c REV\] \| \[-r REV1 \[-r REV2\]\])
\[FILE\]...

aliases: d

show differences between commits

    Show the differences between two commits. If only one commit is specified,
    shows the differences between the specified commit and your pending
    changes. If no commits are specified, shows your pending changes.

    Specify -c to see the changes in the specified commit relative to its
    parent.

    By default, this command skips binary files. To override this behavior,
    specify -a to include binary files in the diff, probably with undesirable
    results.

    By default, diffs are shown using the unified diff format. Specify -g to
    generate diffs in the git extended diff format. For more information, read
    'hg help diffs'.

    Note:
       'hg diff' might generate unexpected results during merges because it
       defaults to comparing against your checkout's first parent commit if no
       commits are specified.

    Returns 0 on success.

Options (\[+\] can be repeated):

-r --rev REV \[+\] revision -c --change REV change made by revision -a
--text treat all files as text -g --git use git extended diff format
--binary generate binary diffs in git mode (default) --nodates omit
dates from diff headers --noprefix omit a/ and b/ prefixes from
filenames -p --show-function show which function each change is in
--reverse produce a diff that undoes the changes -w --ignore-all-space
ignore white space when comparing lines -b --ignore-space-change ignore
changes in the amount of white space -B --ignore-blank-lines ignore
changes whose lines are all blank -Z --ignore-space-at-eol ignore
changes in whitespace at EOL -U --unified NUM number of lines of context
to show --stat output diffstat-style summary of changes --root DIR
produce diffs relative to subdirectory --only-files-in-revs only show
changes for files modified in the requested revisions -I --include
PATTERN \[+\] include names matching the given patterns -X --exclude
PATTERN \[+\] exclude names matching the given patterns
--since-last-submit show changes since last Phabricator submit
--since-last-submit-2o show diff of current diff and last Phabricator
submit

(some details hidden, use --verbose to show complete help)
