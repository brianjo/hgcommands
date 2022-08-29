``` 
hg annotate \[-r REV\] \[-f\] \[-a\] \[-u\] \[-d\] \[-n\] \[-c\] \[-l\]
FILE...

aliases: blame, blam, an

show commit information by line for each file

    List changes in files, showing the commit responsible for each line.

    This command is useful for discovering when a change was made and by whom.

    If you include -n, commit gets replaced by revision id, unless you also
    include -c, in which case both are shown. -p on the other hand always adds
    Phabricator Diff Id, not replacing anything with it.

    Without the -a/--text option, annotate will avoid processing files it
    detects as binary. With -a, annotate will annotate the file anyway,
    although the results will probably be neither useful nor desirable.

    Returns 0 on success.

Options (\[+\] can be repeated):

-r --rev REV annotate the specified revision --no-follow don't follow
copies and renames -a --text treat all files as text -u --user list the
author (long with -v) -f --file list the filename -d --date list the
date (short with -q) -n --number list the revision number -c --changeset
list the changeset (default) -l --line-number show line number at the
first appearance -w --ignore-all-space ignore white space when comparing
lines -b --ignore-space-change ignore changes in the amount of white
space -B --ignore-blank-lines ignore changes whose lines are all blank
-Z --ignore-space-at-eol ignore changes in whitespace at EOL -I
--include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns -p
--phabdiff list phabricator diff id

(some details hidden, use --verbose to show complete help)
