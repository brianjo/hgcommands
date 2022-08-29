``` 
hg resolve \[OPTION\]... \[FILE\]...

aliases: reso

redo merges or set/view the merge status of files

    Merges with unresolved conflicts are often the result of non-interactive
    merging using the "internal:merge" configuration setting, or a command-
    line merge tool like "diff3". The resolve command is used to manage the
    files involved in a merge, after 'hg merge' has been run, and before 'hg
    commit' is run (i.e. the working directory must have two parents). See 'hg
    help merge-tools' for information on configuring merge tools.

    The resolve command can be used in the following ways:

    - 'hg resolve [--tool TOOL] FILE...': attempt to re-merge the specified
      files, discarding any previous merge attempts. Re-merging is not
      performed for files already marked as resolved. Use "--all/-a" to select
      all unresolved files. "--tool" can be used to specify the merge tool
      used for the given files. It overrides the HGMERGE environment variable
      and your configuration files.  Previous file contents are saved with a
      ".orig" suffix.
    - 'hg resolve -m [FILE]': mark a file as having been resolved (e.g. after
      having manually fixed-up the files). The default is to mark all
      unresolved files.
    - 'hg resolve -u [FILE]...': mark a file as unresolved. The default is to
      mark all resolved files.
    - 'hg resolve -l': list files which had or still have conflicts. In the
      printed list, "U" = unresolved and "R" = resolved. You can use
      "set:unresolved()" or "set:resolved()" to filter the list. See 'hg help
      filesets' for details.

    Note:
       Mercurial will not let you commit files with unresolved merge
       conflicts. You must use 'hg resolve -m ...' before you can commit after
       a conflicting merge.

    Returns 0 on success, 1 if any files fail a resolve attempt.

Options (\[+\] can be repeated):

-a --all select all unresolved files -l --list list state of files
needing merge -m --mark mark files as resolved -u --unmark mark files as
unresolved -n --no-status hide status prefix --root-relative show paths
relative to repo root -t --tool VALUE specify merge tool -I --include
PATTERN \[+\] include names matching the given patterns -X --exclude
PATTERN \[+\] exclude names matching the given patterns --skip skip
merge driver

(some details hidden, use --verbose to show complete help)
