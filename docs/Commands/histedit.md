``` 
hg histedit \[OPTION\]... \[ANCESTOR\]

aliases: histe

interactively reorder, combine, or delete commits

    This command lets you edit a linear series of commits (up to and including
    the working directory, which should be clean). You can:

    - 'pick' to [re]order a commit
    - 'drop' to omit commit
    - 'mess' to reword the commit commit message
    - 'fold' to combine it with the preceding commit (using the later date)
    - 'roll' like fold, but discarding this commit's description and date
    - 'edit' to edit this commit (preserving date)
    - 'base' to checkout commit and apply further commits from there

    There are a number of ways to select the root commit:

    - Specify ANCESTOR directly
    - Otherwise, the value from the "histedit.defaultrev" config option is
      used as a revset to select the base revision when ANCESTOR is not
      specified. The first revision returned by the revset is used. By
      default, this selects the editable history that is unique to the
      ancestry of the working directory.

    Returns 0 on success, 1 if user intervention is required (not only for
    intentional "edit" command, but also for resolving unexpected conflicts).

(use 'hg help -e histedit' to show help for the histedit extension)

Options (\[+\] can be repeated):

    --commands FILE read history edits from the specified file

-c --continue continue an edit already in progress --edit-plan edit
remaining actions list -k --keep don't strip old nodes after edit is
complete --abort abort an edit in progress -r --rev REV \[+\] first
revision to be edited -x --retry retry exec command that failed and try
to continue --show-plan show remaining actions list

(some details hidden, use --verbose to show complete help)
