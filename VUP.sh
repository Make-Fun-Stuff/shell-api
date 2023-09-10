#!/usr/bin/env bash

amixer -D pulse sset Master unmute
amixer -D pulse sset Master 5%+

