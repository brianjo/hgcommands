``` 
hg unamend

aliases: una

undo the last amend operation on the current commit

    Reverse the effects of an 'hg amend' operation. Hides the current commit
    and checks out the previous version of the commit. 'hg unamend' does not
    revert the state of the working copy, so changes that were added to the
    commit in the last amend operation become pending changes in the working
    copy.

    'hg unamend' cannot be run on amended commits that have children. In other
    words, you cannot unamend an amended commit in the middle of a stack.

    Note:
        Running 'hg unamend' is similar to running 'hg undo --keep'
        immediately after 'hg amend'. However, unlike 'hg undo', which can
        only undo an amend if it was the last operation you performed, 'hg
        unamend' can unamend any draft amended commit in the graph that does
        not have children.

(some details hidden, use --verbose to show complete help)
