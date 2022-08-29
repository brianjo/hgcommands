``` 
hg add \[OPTION\]... \[FILE\]...

start tracking the specified files

    Specify files to be tracked by Mercurial. The files will be added to the
    repository at the next commit.

    To undo an add before files have been committed, use 'hg forget'. To undo
    an add after files have been committed, use 'hg rm'.

    If no names are given, add all files to the repository (except files
    matching ".hgignore").

    Returns 0 if all files are successfully added.

Options (\[+\] can be repeated):

-I --include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns -n
--dry-run do not perform actions, just print output -s --sparse also
include directories of added files in sparse config

(some details hidden, use --verbose to show complete help)
