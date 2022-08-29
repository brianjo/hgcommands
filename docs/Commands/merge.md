``` 
hg merge \[-P\] \[\[-r\] REV\]

aliases: mer

merge another revision into working directory

    The current working directory is updated with all changes made in the
    requested revision since the last common predecessor revision.

    Files that changed between either parent are marked as changed for the
    next commit and a commit must be performed before any further updates to
    the repository are allowed. The next commit will have two parents.

    "--tool" can be used to specify the merge tool used for file merges. It
    overrides the HGMERGE environment variable and your configuration files.
    See 'hg help merge-tools' for options.

    If no revision is specified, the working directory's parent is a head
    revision, and the current branch contains exactly one other head, the
    other head is merged with by default. Otherwise, an explicit revision with
    which to merge with must be provided.

    See 'hg help resolve' for information on handling file conflicts.

    To undo an uncommitted merge, use 'hg update --clean .' which will check
    out a clean copy of the original merge parent, losing all changes.

    Returns 0 on success, 1 if there are unresolved files.

Options:

-r --rev REV revision to merge -P --preview review revisions to merge
(no merge is performed) -t --tool VALUE specify merge tool

(some details hidden, use --verbose to show complete help)
