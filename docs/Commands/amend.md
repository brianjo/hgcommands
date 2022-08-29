``` 
hg amend \[OPTION\]... \[FILE\]...

aliases: am, ramen

save pending changes to the current commit

    Replaces your current commit with a new commit that contains the contents
    of the original commit, plus any pending changes.

    By default, all pending changes (in other words, those reported by 'hg
    status') are committed. To commit only some of your changes, you can:

    - Specify an exact list of files for which you want changes committed.
    - Use the -I or -X flags to pattern match file names to exclude or include
      by using a fileset. See 'hg help filesets' for more information.
    - Specify the --interactive flag to open a UI that will enable you to
      select individual insertions or deletions.

    By default, hg amend reuses your existing commit message and does not
    prompt you for changes. To change your commit message, you can:

    - Specify --edit / -e to open your configured editor to update the
      existing commit message.
    - Specify --message / -m to replace the entire commit message, including
      any commit template fields, with a string that you specify.

    Note:
       Specifying -m overwrites all information in the commit message,
       including information specified as part of a pre-loaded commit
       template. For example, any information associating this commit with a
       code review system will be lost and might result in breakages.

    When you amend a commit that has descendants, those descendants are
    rebased on top of the amended version of the commit, unless doing so would
    result in merge conflicts. If this happens, run 'hg restack' to manually
    trigger the rebase so that you can go through the merge conflict
    resolution process.  You can also:

    - Specify --rebase to always trigger the rebase and resolve merge
      conflicts.
    - Specify --no-rebase to prevent the automatic rebasing of descendants.

(use 'hg help -e amend' to show help for the amend extension)

Options (\[+\] can be repeated):

-A --addremove mark new/missing files as added/removed before committing
-e --edit prompt to edit the commit message -i --interactive use
interactive mode --rebase rebases children after the amend -T --template
TEMPLATE display with template -I --include PATTERN \[+\] include names
matching the given patterns -X --exclude PATTERN \[+\] exclude names
matching the given patterns -m --message TEXT use text as commit message
-l --logfile FILE read commit message from file -d --date DATE record
the specified date as commit date -u --user USER record the specified
user as committer --no-move-detection disable automatic file move
detection --stack incorporate corrections into stack. see 'hg help
absorb' for details

(some details hidden, use --verbose to show complete help)
