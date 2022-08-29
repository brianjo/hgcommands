``` 
hg archive \[OPTION\]... DEST

aliases: ar

create an unversioned archive of a repository revision

    By default, the revision used is the parent of the working directory; use
    -r/--rev to specify a different revision.

    The archive type is automatically detected based on file extension (to
    override, use -t/--type).

    Valid types are:

    "files"       a directory full of files (default)
    "tar"         tar archive, uncompressed
    "tbz2"        tar archive, compressed using bzip2
    "tgz"         tar archive, compressed using gzip
    "uzip"        zip archive, uncompressed
    "zip"         zip archive, compressed using deflate

    The exact name of the destination archive or directory is given using a
    format string; see 'hg help export' for details.

    Each member added to an archive file has a directory prefix prepended. Use
    -p/--prefix to specify a format string for the prefix. The default is the
    basename of the archive, with suffixes removed.

    Returns 0 on success.

Options (\[+\] can be repeated):

    --no-decode           do not pass files through decoders

-p --prefix PREFIX directory prefix for files in archive -r --rev REV
revision to distribute -t --type TYPE type of distribution to create -I
--include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
