``` 
alias for: metaedit --batch

hg metaedit \[OPTION\]... \[-r\] \[REV\]

aliases: met

edit commit message and other metadata

    Edit commit message for the current commit. By default, opens your default
    editor so that you can edit the commit message interactively. Specify -m
    to specify the commit message on the command line.

    To edit the message for a different commit, specify -r. To edit the
    messages of multiple commits, specify --batch.

    You can edit other pieces of commit metadata, namely the user or date, by
    specifying -u or -d, respectively. The expected format for user is 'Full
    Name <user@example.com>'.

    There is also automation-friendly JSON input mode which allows the caller
    to provide the mapping between commit and new message and username in the
    following format:

        {
        "<commit_hash>": { "message": "<message>", "user": "<user>" //
        optional } }

    Note:
        You can specify --fold to fold multiple revisions into one when the
        given revisions form a linear unbroken chain. However, 'hg fold' is
        the preferred command for this purpose. See 'hg help fold' for more
        information.

Options (\[+\] can be repeated):

-r --rev VALUE \[+\] revision to edit --fold fold specified revisions
into one --batch edit messages of multiple commits in one editor
invocation --json-input-file VALUE read commit messages and users from
JSON file -M --reuse-message VALUE reuse commit message from another
commit -m --message TEXT use text as commit message -l --logfile FILE
read commit message from file -d --date DATE record the specified date
as commit date -u --user USER record the specified user as committer

(some details hidden, use --verbose to show complete help)
