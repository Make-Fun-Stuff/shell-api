#!/usr/bin/env bash

pacmd set-default-sink "Mkchromecast"
echo "13" | /usr/bin/mkchromecast -p 5999 -s
