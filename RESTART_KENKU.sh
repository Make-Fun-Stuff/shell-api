#!/usr/bin/env bash

pgrep -f "/home/gscott/code/kenku-fm/out/Kenku FM-linux-x64/kenku-fm" | xargs kill

rm -f nohup.out

Xvfb :19 -screen 0 1024x768x16 &
export DISPLAY=:19

nohup /home/gscott/code/kenku-fm/out/Kenku\ FM-linux-x64/kenku-fm &

