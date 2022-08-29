``` 
hg blackbox

view recent repository events

    By default, show events in the last 15 minutes. Use '--start 60' to get
    events in the past hour.

    Use '--debug' to see raw JSON values instead of human-readable messages.

    Use '--pattern' to filter events by JSON patterns. Examples:

      # matches watchman events ("_" matches anything)
      {"watchman": "_"}

      # matches "ssh_getfiles" network operations that takes 10 to 100ms.
      {"network": {"op": "ssh_getfiles", "duration_ms": ["range", 10, 100]}}

      # matches pager, or editor, or pythonhook blocked events
      {"blocked": {"name": ["or", "pager", "editor", "pythonhook"]}}

      # matches process start events with non-root uid
      {"start": {"uid": ["not", 0]}}

      # matches start, or finish, or alias events
      ["or", {"start": "_"}, {"finish": "_"}, {"alias": "_"}]

Options:

-s --start VALUE start time (minutes in the past, relative to now)
(default: 15) -e --end VALUE end time (minutes in the past, relative to
now)

(some details hidden, use --verbose to show complete help)
