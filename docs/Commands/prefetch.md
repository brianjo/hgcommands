``` 
hg prefetch \[OPTIONS\] \[FILE...\]

prefetch file revisions from the server

    Prefetchs file revisions for the specified revs and stores them in the
    local remotefilelog cache.  If no rev is specified, the default rev is
    used which is the union of dot, draft, and pullprefetch. File names or
    patterns can be used to limit which files are downloaded.

    Return 0 on success.

Options (\[+\] can be repeated):

-r --rev REV \[+\] prefetch the specified revisions --repack run repack
after prefetch -b --base VALUE rev that is assumed to already be local
-I --include PATTERN \[+\] include names matching the given patterns -X
--exclude PATTERN \[+\] exclude names matching the given patterns

(some details hidden, use --verbose to show complete help)
