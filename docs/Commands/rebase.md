``` 
hg rebase \[-s REV \| -b REV\] \[-d REV\] \[OPTION\]\[-i\]

move commits from one location to another

    Rebase moves commits from one part of the commit graph to another. It does
    this by creating a copy of the commit at the destination and hiding the
    original commit.

    To create copies of your commits instead of moving them, use "--keep"
    ("-k") to keep the original commits rather than hiding them.

    If the commits being rebased have bookmarks, rebase moves the bookmarks
    onto the new versions of the commits. Bookmarks are moved even if "--keep"
    is specified.

    Public commits cannot be rebased unless you use the "-k" option to copy
    them.

    Use the following options to select the commits you want to rebase:

      1. "--rev" to explicitly select commits
      2. "--source" to select a root commit and include all of its descendants
      3. "--base" to select a commit and its ancestors and descendants

    If no option is specified to select commits, "-b ." is used by default.

    If commits that you are rebasing consist entirely of changes that are
    already present in the destination, those commits are not moved (in other
    words, they are rebased out).

    Sometimes conflicts can occur when you rebase. When this happens, by
    default, Mercurial launches an editor for every conflict. Conflict markers
    are inserted into affected files, like:

      <<<<
      dest
      ====
      source
      >>>>

    To fix the conflicts, for each file, remove the markers and replace the
    whole block of code with the correctly merged code.

    If you close the editor without resolving the conflict, the rebase is
    interrupted and you are returned to the command line. At this point, you
    can resolve conflicts in manual resolution mode. See 'hg help resolve' for
    details.

    After manually resolving conflicts, resume the rebase with "hg rebase
    --continue" ("-c"). If you are not able to successfully resolve all
    conflicts, run "hg rebase --abort" ("-a") to abort the rebase.

    Alternatively, you can use a custom merge tool to automate conflict
    resolution. To specify a custom merge tool, use the "--tool" flag. See 'hg
    help merge-tools' for a list of available tools and for information about
    configuring the default merge behavior.

    Return Values:

    Returns 0 on success, 1 if nothing to rebase or if there are unresolved
    conflicts.

(use 'hg help -e rebase' to show help for the rebase extension)

Options (\[+\] can be repeated):

-s --source REV rebase the specified changeset and descendants -b --base
REV rebase everything from branching point of specified changeset -r
--rev REV \[+\] rebase these revisions -d --dest REV rebase onto the
specified changeset --collapse collapse the rebased changesets -m
--message TEXT use text as collapse commit message -e --edit invoke
editor on commit messages -l --logfile FILE read collapse commit message
from file -k --keep keep original changesets -t --tool VALUE specify
merge tool -c --continue continue an interrupted rebase -a --abort abort
an interrupted rebase --restack rebase all changesets in the current
stack onto the latest version of their respective parents -i
--interactive interactive rebase

(some details hidden, use --verbose to show complete help)
