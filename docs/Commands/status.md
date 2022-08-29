``` 
hg status \[OPTION\]... \[FILE\]...

aliases: st

list files with pending changes

    Show status of files in the repository using the following status
    indicators:

      M = modified
      A = added
      R = removed
      C = clean
      ! = missing (deleted by a non-hg command, but still tracked)
      ? = not tracked
      I = ignored
        = origin of the previous file (with --copies)

    By default, shows files that have been modified, added, removed, deleted,
    or that are unknown (corresponding to the options -mardu). Files that are
    unmodified, ignored, or the source of a copy/move operation are not
    listed.

    To control the exact statuses that are shown, specify the relevant flags
    (like -rd to show only files that are removed or deleted). Additionally,
    specify -q/--quiet to hide both unknown and ignored files.

    To show the status of specific files, provide an explicit list of files to
    match. To include or exclude files using regular expressions, use -I or
    -X.

    If --rev is specified, and only one revision is given, it is used as the
    base revision. If two revisions are given, the differences between them
    are shown. The --change option can also be used as a shortcut to list the
    changed files of a revision from its first parent.

    Note:
       'hg status' might appear to disagree with 'hg diff' if permissions have
       changed or a merge has occurred, because the standard diff format does
       not report permission changes and 'hg diff' only reports changes
       relative to one merge parent.

    Returns 0 on success.

Options (\[+\] can be repeated):

-A --all show status of all files -m --modified show only modified files
-a --added show only added files -r --removed show only removed files -d
--deleted show only deleted (but tracked) files -c --clean show only
files without changes -u --unknown show only unknown (not tracked) files
-i --ignored show only ignored files -n --no-status hide status prefix
-C --copies show source of copied files -0 --print0 end filenames with
NUL, for use with xargs --rev REV \[+\] show difference from revision
--change REV list the changed files of a revision --root-relative show
status relative to root -I --include PATTERN \[+\] include names
matching the given patterns -X --exclude PATTERN \[+\] exclude names
matching the given patterns

(some details hidden, use --verbose to show complete help)
