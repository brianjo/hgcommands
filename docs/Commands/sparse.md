``` 
sparse extension - allow sparse checkouts of the working directory

## Sparse file format

Structure .........

Shared sparse profile files comprise of 4 sections: '%include'
directives that pull in another sparse profile, and '\[metadata\]',
'\[include\]' and '\[exclude\]' sections.

Any line starting with a ';' or '\#' character is a comment and is
ignored.

Extending existing profiles ...........................

'%include `<absolute path>`{=html}' directives (one per line) let you
extend as an existing profile file, adding more include and exclude
rules. Although this directive can appear anywere in the file, it is
recommended you keep these at the top of the file.

Metadata ........

The '\[metadata\]' section lets you specify key-value pairs for the
profile. Anything before the first ':' or '=' is the key, everything
after is the value. Values can be extended over multiple lines by
indenting additional lines.

Only the 'title', 'description' and 'hidden' keys carry meaning to for
'hg sparse', these are used in the 'hg sparse list' and 'hg sparse
explain' commands. Profiles with the 'hidden' key (regardless of its
value) are excluded from the 'hg sparse list' listing unless the '-v' /
'--verbose' switch is given.

Include and exclude rules .........................

Each line in the '\[include\]' and '\[exclude\]' sections is treated as
a standard pattern, see 'hg help patterns'. Exclude rules override
include rules.

Example .......

\# this profile extends another profile, incorporating all its rules
%include some/base/profile

\[metadata\] title: This is an example sparse profile description: You
can include as much metadata as makes sense for your setup, and values
can extend over multiple lines. lorem ipsum = Keys and values are
separated by a : or = ; hidden: the hidden key lets you mark profiles
that should not ; generally be discorable. The value doesn't matter, use
it to motivate ; why it is hidden.

\[include\] foo/bar/baz bar/python_project/\*\*/\*.py

\[exclude\] ; exclude rules override include rules, so all files with
the extension ; .ignore are excluded from this sparse profile.
foo/bar/baz/\*.ignore

## Configuration options

The following config option defines whether sparse treats supplied paths
as relative to repo root or to the current working dir for include and
exclude options:

    [sparse] includereporootpaths = off

The following config option defines whether sparse treats supplied paths
as relative to repo root or to the current working dir for enableprofile
and disableprofile options:

    [sparse] enablereporootpaths = on

You can configure a path to find sparse profiles in; this path is used
to discover available sparse profiles. Nested directories are reflected
in the UI.

    [sparse] profile_directory = tools/scm/sparse

It is not set by default.

It is also possible to show hints where dirstate size is too large.

    [sparse] # Whether to advertise usage of the sparse profiles when the
    checkout size # is very large. largecheckouthint = False # The number of
    files in the checkout that constitute a "large checkout".
    largecheckoutcount = 0

The following option allows warning when a user is using a full
checkout. It allows four values: hint, warn, softblock, hardblock.

-   "hint" shows a suppressable warning message.

-   "warn" shows a non-supressable warning message.

-   "softblock" throws an exception that can be bypassed via
    sparse.bypassfullcheckoutwarn=True

-   "hardblock" throws an exception that cannot be bypassed.

    \[sparse\] warnfullcheckout = hint

The following option can be used to bypass a softblock on fullcheckouts.

\[sparse\] bypassfullcheckoutwarn = True

The following option can be used to check if a sparse profile includes
any files that should not normally be included.

    [sparse] unsafe_sparse_profile_marker_files = "somefile, anotherfile"
    unsafe_sparse_profile_message = "do not do this!"

The following options can be used to tune the behaviour of tree
prefetching when sparse profile changes

    [sparse] force_full_prefetch_on_sparse_profile_change = False

(use 'hg help extensions' for information on enabling extensions)
