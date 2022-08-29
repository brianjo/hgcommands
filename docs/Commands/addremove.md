```
hg addremove \[OPTION\]... \[FILE\]...

aliases: addr

add all new files, delete all missing files

    Add all new files and remove all missing files from the repository.

    Unless names are given, new files are ignored if they match any of the
    patterns in ".gitignore". As with add, these changes take effect at the
    next commit.

    Use the -s/--similarity option to detect renamed files. This option takes
    a percentage between 0 (disabled) and 100 (files must be identical) as its
    parameter. With a parameter greater than 0, this compares every removed
    file with every added file and records those similar enough as renames.
    Detecting renamed files this way can be expensive. After using this
    option, 'hg status -C' can be used to check which files were identified as
    moved or renamed. If not specified, -s/--similarity defaults to 100 and
    only renames of identical files are detected.

    Returns 0 if all files are successfully added.

Options (\[+\] can be repeated):

-s --similarity SIMILARITY guess renamed files by similarity
(0\<=s\<=100) -I --include PATTERN \[+\] include names matching the
given patterns -X --exclude PATTERN \[+\] exclude names matching the
given patterns -n --dry-run do not perform actions, just print output

(some details hidden, use --verbose to show complete help)
