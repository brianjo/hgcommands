``` 
hg phase \[-p\|-d\|-s\] \[-f\] \[-r\] \[REV...\]

aliases: ph

set or show the current phase name

    With no argument, show the phase name of the current revision(s).

    With one of -p/--public, -d/--draft or -s/--secret, change the phase value
    of the specified revisions.

    Unless -f/--force is specified, 'hg phase' won't move commits from a lower
    phase to a higher phase. Phases are ordered as follows:

      public < draft < secret

    Returns 0 on success, 1 if some phases could not be changed.

    (For more information about the phases concept, see 'hg help phases'.)

Options (\[+\] can be repeated):

-p --public set changeset phase to public -d --draft set changeset phase
to draft -s --secret set changeset phase to secret -f --force allow to
move boundary backward -r --rev REV \[+\] target revision

(some details hidden, use --verbose to show complete help)
