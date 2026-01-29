#!/usr/bin/env bash

rm -f nohup.out

kill -9 $(pgrep -f "shell-api")

nohup ts-node /home/gscott/code/shell-api/src/index.ts --cmdFiles getvolume=/home/gscott/code/shell-api/GET_VOL.sh,restart=/home/gscott/code/shell-api/RESTART_KENKU.sh,vup=/home/gscott/code/shell-api/VUP.sh,vdown=/home/gscott/code/shell-api/VDOWN.sh,btconnect=/home/gscott/code/shell-api/CONNECT_BT.sh,caston=/home/gscott/code/shell-api/START_CASTING.sh,castoff=/home/gscott/code/shell-api/STOP_CASTING.sh,updateapp=/home/gscott/code/shell-api/UPDATE-APP.sh,restartclone=/home/gscott/code/shell-api/RESTART_CLONE.sh,killclone=/home/gscott/code/shell-api/KILL_CLONE.sh &

