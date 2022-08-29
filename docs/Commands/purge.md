``` 
hg purge \[OPTION\]... \[DIR\]...

aliases: clean

delete untracked files

    Delete all untracked files in your checkout. Untracked files are files
    that are unknown to Mercurial. They are marked with "?" when you run 'hg
    status'.

    By default, 'hg purge' does not affect:

    - Modified and unmodified tracked files
    - Ignored files (unless --all is specified)
    - New files added to the repository with 'hg add', but not yet committed
    - Empty directories that contain no files (unless --dirs is specified)

    If directories are given on the command line, only files in these
    directories are considered.

    Caution: Be careful with purge, as you might irreversibly delete some
    files you forgot to add to the repository. There is no way to undo an 'hg
    purge' operation. Run 'hg status' first to verify the list of files that
    will be deleted, or use the --print option with 'hg purge' to preview the
    results.

Options (\[+\] can be repeated):

-a --abort-on-err abort if an error occurs --all purge ignored files too
--dirs purge empty directories --files purge files -p --print print
filenames instead of deleting them -0 --print0 end filenames with NUL,
for use with xargs (implies -p/--print) -I --include PATTERN \[+\]
include names matching the given patterns -X --exclude PATTERN \[+\]
exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
