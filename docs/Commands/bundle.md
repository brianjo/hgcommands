``` 
hg bundle \[-f\] \[-t BUNDLESPEC\] \[-a\] \[-r REV\]... \[--base
REV\]... FILE \[DEST\]

aliases: bu

create a bundle file

    Generate a bundle file containing data to be added to a repository.

    To create a bundle containing all commits, use -a/--all (or --base null).
    Otherwise, hg assumes the destination will have all the nodes you specify
    with --base parameters. Otherwise, hg will assume the repository has all
    the nodes in destination, or default-push/default if no destination is
    specified.

    You can change bundle format with the -t/--type option. See 'hg help
    bundlespec' for documentation on this format. By default, the most
    appropriate format is used and compression defaults to bzip2.

    The bundle file can then be transferred using conventional means and
    applied to another repository with the unbundle or pull command. This is
    useful when direct push and pull are not available or when exporting an
    entire repository is undesirable.

    Applying bundles preserves all commit contents including permissions,
    copy/rename information, and revision history.

    Returns 0 on success, 1 if no changes found.

Options (\[+\] can be repeated):

-f --force run even when the destination is unrelated -r --rev REV \[+\]
a changeset intended to be added to the destination --base REV \[+\] a
base changeset assumed to be available at the destination -a --all
bundle all changesets in the repository -t --type TYPE bundle
compression type to use (default: bzip2)

(some details hidden, use --verbose to show complete help)
