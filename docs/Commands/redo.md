``` 
hg redo

undo the last undo

    Reverse the effects of an 'hg undo' operation.

    You can run 'hg redo' multiple times to undo a series of 'hg undo'
    commands. Alternatively, you can explicitly specify the number of 'hg
    undo' commands to undo by providing a number as a positional argument.

    Specify --preview to see a graphical display that shows what your smartlog
    will look like after you run the command.

    For an interactive interface, run 'hg undo --interactive'. This command
    enables you to visually step backwards and forwards in the undo history.
    Run 'hg help undo' for more information.

Options:

-p --preview see smartlog-like preview of future redo state

(some details hidden, use --verbose to show complete help)
