``` 
alias for: journal --verbose

hg journal \[OPTION\]... \[BOOKMARKNAME\]

aliases: j

show history of the checked out commit or a bookmark

    Show the history of all the commits that were once the current commit. In
    other words, shows a list of your previously checked out commits. 'hg
    journal' can be used to find older versions of commits (for example, when
    you want to revert to a previous state). It can also be used to discover
    commits that were previously hidden.

    By default, 'hg journal' displays the history of the current commit. To
    display a list of commits pointed to by a bookmark, specify a bookmark
    name.

    Specify --all to show the history of both the current commit and all
    bookmarks. In the output for --all, bookmarks are listed by name, and '.'
    indicates the current commit.

    Specify -Tjson to produce machine-readable output.

Options:

    --all               show history for all names

-c --commits show commit metadata -p --patch show patch -g --git use git
extended diff format -l --limit NUM limit number of changes displayed
--stat output diffstat-style summary of changes -T --template TEMPLATE
display with template

(some details hidden, use --verbose to show complete help)
