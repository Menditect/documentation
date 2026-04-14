# Merge Conflicts in Add-on modules

## Issue summary

Committing local changes while there are also incoming changes results in merge conflicts in one of the (Java files of the) Add-on modules.

## Workaround

Mendix re-generates Java files inside the `/modules/javasource` directory of your App, each time you run it. For Enumerations, the Java files contain a GUID value that is random, and will thus be different when other developers have already generated the Java files. This results in a merge conflict. 

Mendix will need to release a "real" fix for this problem in the future, but in the mean time, the workaround is described [here](../../installation/import-plugin#prepare-git).