``` 
hg bisect \[-gbsr\] \[-U\] \[-S\] \[-c CMD\] \[REV\]

aliases: bi

subdivision search of commits

    This command helps to find commits which introduce problems. To use, mark
    the earliest commit you know exhibits the problem as bad, then mark the
    latest commit which is free from the problem as good. Bisect will update
    your working directory to a revision for testing (unless the -U/--noupdate
    option is specified). Once you have performed tests, mark the working
    directory as good or bad, and bisect will either update to another
    candidate commit or announce that it has found the bad revision. The
    command will also skip commits, which don't contain changes in the sparse
    profile, unless the -S/--nosparseskip option is specified.

    As a shortcut, you can also use the revision argument to mark a revision
    as good or bad without checking it out first.

    If you supply a command, it will be used for automatic bisection. The
    environment variable HG_NODE will contain the ID of the commit being
    tested. The exit status of the command will be used to mark revisions as
    good or bad: status 0 means good, 125 means to skip the revision, 127
    (command not found) will abort the bisection, and any other non-zero exit
    status means the revision is bad.

    Returns 0 on success.

Options:

-r --reset reset bisect state -g --good mark changeset good -b --bad
mark changeset bad -s --skip skip testing changeset -e --extend extend
the bisect range -c --command CMD use command to check changeset state
-U --noupdate do not update to target -S --nosparseskip do not skip
changesets with no changes in sparse profile

(some details hidden, use --verbose to show complete help)
