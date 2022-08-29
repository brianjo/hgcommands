``` 
hg rage

collect troubleshooting diagnostics

    The rage command collects useful diagnostic information.

    By default, the information will be uploaded to Phabricator and
    instructions about how to ask for help will be printed.

    After submitting to Phabricator, it prints configerable advice:

      [rage]
      advice = Please see our FAQ guide: https://...

(use 'hg help -e rage' to show help for the rage extension)

Options:

-p --preview print diagnostic information without uploading paste -t
--timeout VALUE maximum seconds spent on collecting one section
(default: 20)

(some details hidden, use --verbose to show complete help)
