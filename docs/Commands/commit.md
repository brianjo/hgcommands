``` 
hg commit \[OPTION\]... \[FILE\]...

aliases: ci, com

save all pending changes or specified files in a new commit

    Commit changes to the given files to your local repository.

    By default, all pending changes (in other words, those reported by 'hg
    status') are committed. If you want to commit only some of your changes,
    choose one of the following options:

    - Specify an exact list of files for which you want changes committed.
    - Use the -I or -X flags to pattern match file names to exclude or include
      by using a fileset. See 'hg help filesets' for more information.
    - Specify the --interactive flag to open a UI that will enable you to
      select individual insertions or deletions.

    If you are committing the result of a merge, such as when merge conflicts
    occur during 'hg checkout', commit all pending changes. Do not specify
    files or use -I, -X, or -i.

    Specify the -m flag to include a free-form commit message. If you do not
    specify -m, Mercurial opens your configured editor where you can enter a
    message based on a pre-loaded commit template.

    Returns 0 on success, 1 if nothing changed.

Options (\[+\] can be repeated):

-A --addremove mark new/missing files as added/removed before committing
--amend amend the parent of the working directory -e --edit invoke
editor on commit messages -i --interactive use interactive mode -M
--reuse-message REV reuse commit message from REV -I --include PATTERN
\[+\] include names matching the given patterns -X --exclude PATTERN
\[+\] exclude names matching the given patterns -m --message TEXT use
text as commit message -l --logfile FILE read commit message from file
-d --date DATE record the specified date as commit date -u --user USER
record the specified user as committer --rebase (with --amend) rebases
children after the amend -T --template VALUE (with --amend) display with
template --no-automv disable automatic file move detection
--no-move-detection disable automatic file move detection

(some details hidden, use --verbose to show complete help)
