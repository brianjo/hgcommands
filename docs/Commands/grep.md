``` 
hg grep \[OPTION\]... PATTERN \[FILE\]...

aliases: gre

search for a pattern in tracked files in the working directory

    The default regexp style is POSIX basic regexps. If no FILE parameters are
    passed in, the current directory and its subdirectories will be searched.

    For the old 'hg grep', which searches through history, see 'histgrep'.

Options (\[+\] can be repeated):

-A --after-context NUM print NUM lines of trailing context -B
--before-context NUM print NUM lines of leading context -C --context NUM
print NUM lines of output context -i --ignore-case ignore case when
matching -l --files-with-matches print only filenames that match -n
--line-number print matching line numbers -V --invert-match select
non-matching lines -w --word-regexp match whole words only -E
--extended-regexp use POSIX extended regexps -F --fixed-strings
interpret pattern as fixed string -P --perl-regexp use Perl-compatible
regexps -I --include PATTERN \[+\] include names matching the given
patterns -X --exclude PATTERN \[+\] exclude names matching the given
patterns

(some details hidden, use --verbose to show complete help)
