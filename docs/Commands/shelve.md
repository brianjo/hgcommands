``` 
hg shelve \[OPTION\]... \[FILE\]...

aliases: she

save pending changes and revert checkout to a clean state

    Shelving takes files that "hg status" reports as not clean, saves the
    modifications to a bundle (a shelved change), and reverts the files so
    that their state in the working directory becomes clean.

    To restore these changes to the working directory, using "hg unshelve";
    this will work even if you switch to a different commit.

    When no files are specified, "hg shelve" saves all not-clean files. If
    specific files or directories are named, only changes to those files are
    shelved.

    In bare shelve (when no files are specified, without interactive, include
    and exclude option), shelving remembers information if the working
    directory was on newly created branch, in other words working directory
    was on different branch than its first parent. In this situation
    unshelving restores branch information to the working directory.

    Each shelved change has a name that makes it easier to find later. The
    name of a shelved change defaults to being based on the active bookmark,
    or if there is no active bookmark, the current named branch.  To specify a
    different name, use "--name".

    To see a list of existing shelved changes, use the "--list" option. For
    each shelved change, this will print its name, age, and description; use "
    --patch" or "--stat" for more details.

    To delete specific shelved changes, use "--delete". To delete all shelved
    changes, use "--cleanup".

(use 'hg help -e shelve' to show help for the shelve extension)

Options (\[+\] can be repeated):

-A --addremove mark new/missing files as added/removed before shelving
-u --unknown store unknown files in the shelve --cleanup delete all
shelved changes --date DATE shelve with the specified commit date -d
--delete delete the named shelved change(s) -e --edit invoke editor on
commit messages -l --list list current shelves -m --message TEXT use
text as shelve message -n --name NAME use the given name for the shelved
commit -p --patch show patch -i --interactive interactive mode, only
works while creating a shelve --stat output diffstat-style summary of
changes -I --include PATTERN \[+\] include names matching the given
patterns -X --exclude PATTERN \[+\] exclude names matching the given
patterns

(some details hidden, use --verbose to show complete help)
