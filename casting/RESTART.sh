#!/usr/bin/env bash

bash KILL.sh

rm nohup.out

pacmd set-default-sink "Mkchromecast"

echo "13" | /usr/bin/mkchromecast -p 5999 -s

