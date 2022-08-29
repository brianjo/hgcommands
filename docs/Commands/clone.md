``` 
hg clone \[OPTION\]... SOURCE \[DEST\]

make a copy of an existing repository

    Create a copy of an existing repository in a new directory.

    If no destination directory name is specified, it defaults to the basename
    of the source.

    The location of the source is added to the new repository's ".hg/hgrc"
    file, as the default to be used for future pulls.

    Only local paths and "ssh://" URLs are supported as destinations. For
    "ssh://" destinations, no working directory or ".hg/hgrc" will be created
    on the remote side.

    If the source repository has a bookmark called '@' set, that revision will
    be checked out in the new repository by default.

    To check out a particular version, use -u/--update, or -U/--noupdate to
    create a clone with no working directory.

    To pull only a subset of commits, specify one or more revisions
    identifiers with -r/--rev. The resulting clone will contain only the
    specified commits and their ancestors. These options (or 'clone src#rev
    dest') imply --pull, even for local source repositories.

    In normal clone mode, the remote normalizes repository data into a common
    exchange format and the receiving end translates this data into its local
    storage format. --stream activates a different clone mode that essentially
    copies repository files from the remote with minimal data processing. This
    significantly reduces the CPU cost of a clone both remotely and locally.
    However, it often increases the transferred data size by 30-40%. This can
    result in substantially faster clones where I/O throughput is plentiful,
    especially for larger repositories. A side-effect of --stream clones is
    that storage settings and requirements on the remote are applied locally:
    a modern client may inherit legacy or inefficient storage used by the
    remote or a legacy Mercurial client may not be able to clone from a modern
    Mercurial remote.

    See 'hg help urls' for details on specifying URLs.

    Returns 0 on success.

Options (\[+\] can be repeated):

-U --noupdate clone an empty working directory -u --updaterev REV
revision or branch to check out --pull use pull protocol to copy
metadata --stream clone with minimal data processing --enable-profile
VALUE \[+\] enable a sparse profile

(some details hidden, use --verbose to show complete help)
