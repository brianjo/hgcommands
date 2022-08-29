``` 
hg smartlog \[OPTION\]... \[\[-r\] REV\]

aliases: sl, slog, sm

show a graph of the commits that are relevant to you

    Includes:

    - Your local commits
    - The master bookmark for your repository
    - Any commits with local bookmarks

    Excludes:

    - All commits under master that aren't related to your commits
    - Your local commits that are older than a specified date

(use 'hg help -e smartlog' to show help for the smartlog extension)

Options (\[+\] can be repeated):

    --master BOOKMARK   master bookmark

-r --rev REV \[+\] show the specified revisions or range --all don't
hide old local changesets --commit-info show changes in current
changeset -p --patch show patch -g --git use git extended diff format -M
--no-merges do not show merges --stat output diffstat-style summary of
changes -G --graph show the revision DAG -T --template TEMPLATE display
with template

(some details hidden, use --verbose to show complete help)
