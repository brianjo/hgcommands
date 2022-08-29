``` 
hg files \[OPTION\]... \[FILE\]...

aliases: fi

list tracked files

    Print files under Mercurial control in the working directory or specified
    revision for given files (excluding removed files). Files can be specified
    as filenames or filesets.

    If no files are given to match, this command prints the names of all files
    under Mercurial control.

    See 'hg help patterns' and 'hg help filesets' for more information on
    specifying file patterns.

    Returns 0 if a match is found, 1 otherwise.

Options (\[+\] can be repeated):

-r --rev REV search the repository as it is in REV -0 --print0 end
filenames with NUL, for use with xargs -I --include PATTERN \[+\]
include names matching the given patterns -X --exclude PATTERN \[+\]
exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
