``` 
hg cloud SUBCOMMAND ...

backup your commits and synchronise them via commit cloud

    Commit Cloud is the modern infrastructure for backing up your draft
    commits and bookmarks.

    Commit Cloud introduces a new abstraction: the commit cloud workspace. A
    workspace holds a set of draft commits and bookmarks. You can think of it
    as a backup of the contents of your smartlog in the cloud. You can have
    multiple workspaces (and so multiple smartlogs) and switch between them.

    Commit cloud lets you synchronize commits and bookmarks between different
    copies of the same repository if they are connected to the same commit
    cloud workspace. This may be useful, for example, to keep your laptop and
    desktop computers in sync.

    Use 'hg cloud join' to connect your repository to the default commit cloud
    workspace and get started.

    Use 'hg cloud sync' to trigger a new backup and synchronization. Backups
    and synchronizations also happen automatically in the background as you
    create and modify commits.

    Use 'hg cloud switch' to change which workspace you are connected to. Use
    'hg cloud list' to see your workspaces.

    Use 'hg cloud leave' to stop using commit cloud workspaces.

Connect to a cloud workspace:

authenticate authenticate this host with the commit cloud service and
validate the authentication join connect the local repository to a
commit cloud workspace ('default' workspace with no arguments) switch
switch the local repository to a different commit cloud workspace leave
disconnect the local repository from commit cloud

Synchronize with the connected cloud workspace:

sync backup and synchronize commits with the commit cloud service

Manage cloud workspaces:

delete Delete (archive) workspace from commit cloud undelete Restore
(unarchive) workspace in commit cloud list list Commit Cloud workspaces
that are available on the server for the user rename rename Commit Cloud
workspace reclaim reclaim Commit Cloud workspaces to the current user

View the smartlog for a cloud workspace:

sl get smartlog view for the default workspace of the given user ssl get
super smartlog view for the given workspace

Back up commits:

backup back up commits to commit cloud check check if commits have been
backed up

Manage automatic backup or sync:

disable temporarily disable automatic backup or sync enable enable
automatic backup or sync

Other Subcommands:

getfrombackup Downloading and applying mercurial bundles directly for
list of given heads hide remove commits or bookmarks from the cloud
workspace recover perform recovery for commit cloud rejoin reconnect the
local repository to commit cloud status Shows information about the
state of the user's workspace upload Upload draft commits using EdenApi
Uploads

(use 'hg help cloud SUBCOMMAND' to show complete subcommand help)

(some details hidden, use --verbose to show complete help)
