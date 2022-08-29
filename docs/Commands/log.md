``` 
hg log \[OPTION\]... \[FILE\]

aliases: history

show commit history

    Print the revision history of the specified files or the entire project.

    If no revision range is specified, the default is "::.".

    File history is shown without following rename or copy history of files.
    Use -f/--follow with a filename to follow history across renames and
    copies. --follow without a filename will only show ancestors or
    descendants of the starting revision.

    By default this command prints revision number and commit id, non-trivial
    parents, user, date and time, and a summary for each commit. When the
    -v/--verbose switch is used, the list of changed files and full commit
    message are shown.

    With --graph the revisions are shown as an ASCII art DAG with the most
    recent commit at the top. 'o' is a commit, '@' is a working directory
    parent, 'x' is obsolete, and '+' represents a fork where the commit from
    the lines below is a parent of the 'o' merge on the same line. Paths in
    the DAG are represented with '|', '/' and so forth. ':' in place of a '|'
    indicates one or more revisions in a path are omitted.

    Note:
       'hg log --patch' may generate unexpected diff output for merge commits,
       as it will only compare the merge commit against its first parent.
       Also, only files different from BOTH parents will appear in files:.

    Note:
       For performance reasons, 'hg log FILE' may omit duplicate changes made
       on branches and will not show removals or mode changes. To see all such
       changes, use the --removed switch.

    See 'hg help dates' for a list of formats valid for -d/--date.

    See 'hg help revisions' for more about specifying and ordering revisions.

    See 'hg help templates' for more about pre-packaged styles and specifying
    custom templates. The default template used by the log command can be
    customized via the "ui.logtemplate" configuration setting.

    Returns 0 on success.

Options (\[+\] can be repeated):

-f --follow follow changeset history, or file history across copies and
renames -d --date DATE show revisions matching date spec -C --copies
show copied files -k --keyword TEXT \[+\] do case-insensitive search for
a given text -r --rev REV \[+\] show the specified revision or revset
--removed include revisions where files were removed -u --user USER
\[+\] revisions committed by user -b --branch BRANCH \[+\] show
changesets within the given named branch -P --prune REV \[+\] do not
display revision or any of its ancestors -p --patch show patch -g --git
use git extended diff format -l --limit NUM limit number of changes
displayed -M --no-merges do not show merges --stat output diffstat-style
summary of changes -G --graph show the revision DAG -T --template
TEMPLATE display with template -I --include PATTERN \[+\] include names
matching the given patterns -X --exclude PATTERN \[+\] exclude names
matching the given patterns --all shows all changesets in the repo
--remote show remote names even if hidden

(some details hidden, use --verbose to show complete help)
