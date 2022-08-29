``` 
hg export \[OPTION\]... \[-o OUTFILESPEC\] \[-r\] \[REV\]...

aliases: e

dump the header and diffs for one or more commits

    Print the commit header and diffs for one or more revisions. If no
    revision is given, the parent of the working directory is used.

    The information shown in the commit header is: author, date, branch name
    (if non-default), commit hash, parent(s) and commit comment.

    Note:
       'hg export' may generate unexpected diff output for merge commits, as
       it will compare the merge commit against its first parent only.

    Output may be to a file, in which case the name of the file is given using
    a format string. The formatting rules are as follows:

    "%%"          literal "%" character
    "%H"          commit hash (40 hexadecimal digits)
    "%N"          number of patches being generated
    "%R"          commit revision number
    "%b"          basename of the exporting repository
    "%h"          short-form commit hash (12 hexadecimal digits)
    "%m"          first line of the commit message (only alphanumeric
                  characters)
    "%n"          zero-padded sequence number, starting at 1
    "%r"          zero-padded commit revision number

    Without the -a/--text option, export will avoid generating diffs of files
    it detects as binary. With -a, export will generate a diff anyway,
    probably with undesirable results.

    Use the -g/--git option to generate diffs in the git extended diff format.
    See 'hg help diffs' for more information.

    With the --switch-parent option, the diff will be against the second
    parent. It can be useful to review a merge.

    Returns 0 on success.

Options (\[+\] can be repeated):

-o --output FORMAT print output to file with formatted name
--switch-parent diff against the second parent -r --rev REV \[+\]
revisions to export --pattern PATTERN \[+\] file patterns -a --text
treat all files as text -g --git use git extended diff format --binary
generate binary diffs in git mode (default) --nodates omit dates from
diff headers -I --include PATTERN \[+\] include names matching the given
patterns -X --exclude PATTERN \[+\] exclude names matching the given
patterns

(some details hidden, use --verbose to show complete help)
