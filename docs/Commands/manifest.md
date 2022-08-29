``` 
hg manifest \[-r REV\]

aliases: mani

output the current or given revision of the project manifest

    Print a list of version controlled files for the given revision. If no
    revision is given, the first parent of the working directory is used, or
    the null revision if no revision is checked out.

    With -v, print file permissions, symlink and executable bits. With
    --debug, print file revision hashes.

    If option --all is specified, the list of all files from all revisions is
    printed. This includes deleted and renamed files.

    Returns 0 on success.

Options:

-r --rev REV revision to display --all list files from all revisions

(some details hidden, use --verbose to show complete help)
