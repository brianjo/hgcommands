``` 
hg histgrep \[OPTION\]... PATTERN \[FILE\]...

search backwards through history for a pattern in the specified files

    Search revision history for a regular expression in the specified files or
    the entire project.

    By default, grep prints the most recent revision number for each file in
    which it finds a match. To get it to print every revision that contains a
    change in match status ("-" for a match that becomes a non-match, or "+"
    for a non-match that becomes a match), use the --all flag.

    PATTERN can be any Python (roughly Perl-compatible) regular expression.

    If no FILEs are specified (and -f/--follow isn't set), all files in the
    repository are searched, including those that don't exist in the current
    branch or have been deleted in a prior commit.

    Returns 0 if a match is found, 1 otherwise.

Options (\[+\] can be repeated):

-0 --print0 end fields with NUL --all print all revisions that match -a
--text treat all files as text -f --follow follow changeset history, or
file history across copies and renames -i --ignore-case ignore case when
matching -l --files-with-matches print only filenames and revisions that
match -n --line-number print matching line numbers -r --rev REV \[+\]
only search files changed within revision range -u --user list the
author (long with -v) -d --date list the date (short with -q) -I
--include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
