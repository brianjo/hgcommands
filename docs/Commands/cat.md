``` 
hg cat \[OPTION\]... FILE...

output the current or given revision of files

    Print the specified files as they were at the given revision. If no
    revision is given, the parent of the working directory is used.

    Output may be to a file, in which case the name of the file is given using
    a format string. The formatting rules as follows:

    "%%"          literal "%" character
    "%s"          basename of file being printed
    "%d"          dirname of file being printed, or '.' if in repository root
    "%p"          root-relative path name of file being printed
    "%H"          commit hash (40 hexadecimal digits)
    "%R"          commit revision number
    "%h"          short-form commit hash (12 hexadecimal digits)
    "%r"          zero-padded commit revision number
    "%b"          basename of the exporting repository

    Returns 0 on success.

Options (\[+\] can be repeated):

-o --output FORMAT print output to file with formatted name -r --rev REV
print the given revision --decode apply any matching decode filter -I
--include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
