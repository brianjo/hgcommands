``` 
hg bookmarks \[OPTIONS\]... \[NAME\]...

aliases: bo

create a new bookmark or list existing bookmarks

    Bookmarks are labels on commits to help track lines of development.
    Bookmarks are unversioned and can be moved, renamed and deleted. Deleting
    or moving a bookmark has no effect on the associated commits.

    Creating or updating to a bookmark causes it to be marked as 'active'. The
    active bookmark is indicated with a '*'. When a commit is made, the active
    bookmark will advance to the new commit. A plain 'hg update' will also
    advance an active bookmark, if possible. Updating away from a bookmark
    will cause it to be deactivated.

    Bookmarks can be pushed and pulled between repositories (see 'hg help
    push' and 'hg help pull'). If a shared bookmark has diverged, a new
    'divergent bookmark' of the form 'name@path' will be created. Using 'hg
    merge' will resolve the divergence.

    Specifying bookmark as '.' to -m or -d options is equivalent to specifying
    the active bookmark's name.

    A bookmark named '@' has the special property that 'hg clone' will check
    it out by default if it exists.

Options:

-f --force force -r --rev REV revision for bookmark action -d --delete
delete a given bookmark -D --strip like --delete, but also strip
changesets -m --rename OLD rename a given bookmark -i --inactive mark a
bookmark inactive -t --track BOOKMARK track this bookmark or remote name
-u --untrack remove tracking for this bookmark --list-remote list remote
bookmarks. Positional arguments are interpreted as wildcard patterns.
Only allowed wildcard is '\*' in the end of the pattern. If no
positional arguments are specified then it will list the most
"important" remote bookmarks. Otherwise it will list remote bookmarks
that match at least one pattern --remote-path VALUE name of the remote
path to list the bookmarks -a --all show both remote and local bookmarks
--list-subscriptions show only remote bookmarks that are available
locally

(some details hidden, use --verbose to show complete help)
