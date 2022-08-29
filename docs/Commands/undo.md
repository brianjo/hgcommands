``` 
hg undo

undo the last local command

    Reverse the effects of the last local command. A local command is one that
    changed the currently checked out commit, that modified the contents of
    local commits, or that changed local bookmarks. Examples of local commands
    include 'hg checkout', 'hg commit', 'hg amend', and 'hg rebase'.

    You cannot use 'hg undo' to undo uncommited changes in the working copy,
    or changes to remote bookmarks.

    You can run 'hg undo' multiple times to undo a series of local commands.
    Alternatively, you can explicitly specify the number of local commands to
    undo using --step. This number can also be specified as a positional
    argument.

    To undo the effects of 'hg undo', run 'hg redo'. Run 'hg help redo' for
    more information.

    Include --keep to preserve the state of the working copy. For example,
    specify --keep when running 'hg undo' to reverse the effects of an 'hg
    commit' or 'hg amend' operation while still preserving changes in the
    working copy. These changes will appear as pending changes.

    Specify --preview to see a graphical display that shows what your smartlog
    will look like after you run the command. Specify --interactive for an
    interactive version of this preview in which you can step backwards and
    forwards in the undo history.

    Note:
       'hg undo' cannot be used with non-local commands, or with commands that
       are read-only. 'hg undo' will skip over these commands in the undo
       history.

       For hybrid commands that result in both local and remote changes, 'hg
       undo' will undo the local changes, but not the remote changes. For
       example, 'hg pull --rebase' might move remote/master and also rebase
       local commits. In this situation, 'hg undo' will revert the rebase, but
       not the change to remote/master.

Options:

-a --absolute absolute based on command index instead of relative undo
-i --interactive use interactive ui for undo -k --keep keep working copy
changes -n --step VALUE how many steps to undo back (default: 1) -p
--preview see smartlog-like preview of future undo state

(some details hidden, use --verbose to show complete help)
