``` 
hg paths \[NAME\]

aliases: path

show aliases for remote repositories

    Show definition of symbolic path name NAME. If no name is given, show
    definition of all available names.

    Option -q/--quiet suppresses all output when searching for NAME and shows
    only the path names when listing all definitions.

    Path names are defined in the [paths] section of your configuration file
    and in "/etc/mercurial/hgrc". If run inside a repository, ".hg/hgrc" is
    used, too.

    The path names "default" and "default-push" have a special meaning.  When
    performing a push or pull operation, they are used as fallbacks if no
    location is specified on the command-line. When "default-push" is set, it
    will be used for push and "default" will be used for pull; otherwise
    "default" is used as the fallback for both.  When cloning a repository,
    the clone source is written as "default" in ".hg/hgrc".

    Note:
       "default" and "default-push" apply to all inbound (e.g. 'hg incoming')
       and outbound (e.g. 'hg outgoing', 'hg email' and 'hg bundle')
       operations.

    See 'hg help urls' for more information.

    Returns 0 on success.

Options:

-d --delete NAME delete remote path -a --add NAME PATH add remote path

(some details hidden, use --verbose to show complete help)
