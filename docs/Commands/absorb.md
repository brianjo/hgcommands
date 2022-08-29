---
slug: /commands/
---
```
    hg absorb [OPTION] [FILE]...

    aliases: ab, sf

    apply pending corrections into a stack of commits

        absorb analyzes each change in your working directory and attempts to
        amend the changed lines into the commits in your stack that first
        introduced those lines.

        If absorb cannot find an unambiguous commit to amend for a change, that
        change will be left in the working directory, untouched. They can be
        observed by 'hg status' or 'hg diff' afterwards. In other words, absorb
        does not write to the working directory.

        Changesets outside the revset '::. and not public() and not merge()' will
        not be changed.

        Changesets that become empty after applying the changes will be deleted.

        By default, absorb will show what it plans to do and prompt for
        confirmation.  If you are confident that the changes will be absorbed to
        the correct place, run 'hg absorb -a' to apply the changes immediately.

        Returns 0 on success, 1 if all chunks were ignored and nothing absorbed.

    (use 'hg help -e absorb' to show help for the absorb extension)

    Options ([+] can be repeated):

    -a --apply-changes       apply changes without prompting for confirmation
    -d --date DATE           record the specified date as commit date
    -n --dry-run             do not perform actions, just print output
    -T --template TEMPLATE   display with template
    -I --include PATTERN [+] include names matching the given patterns
    -X --exclude PATTERN [+] exclude names matching the given patterns

    (some details hidden, use --verbose to show complete help)


