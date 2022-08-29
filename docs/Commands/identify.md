``` 
hg identify \[-nibtB\] \[-r REV\] \[SOURCE\]

aliases: id

identify the working directory or specified revision

    Print a summary identifying the repository state at REV using one or two
    parent hash identifiers, followed by a "+" if the working directory has
    uncommitted changes and a list of bookmarks.

    When REV is not given, print a summary of the current state of the
    repository.

    Specifying a path to a repository root or Mercurial bundle will cause
    lookup to operate on that repository/bundle.

    See 'hg log' for generating more information about specific revisions,
    including full hash identifiers.

    Returns 0 if successful.

Options:

-r --rev REV identify the specified revision -n --num show local
revision number -i --id show global revision id -B --bookmarks show
bookmarks

(some details hidden, use --verbose to show complete help)
