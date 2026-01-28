#!/usr/bin/env bash

pacmd set-default-sink "Mkchromecast"
echo "9" | /usr/bin/mkchromecast -p 5999 -s
