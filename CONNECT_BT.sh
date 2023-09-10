#!/usr/bin/env bash

device="F0:F6:C1:5F:A5:B8"

/usr/bin/expect <(
	cat <<EOF
set timeout 60
spawn bluetoothctl
send -- "scan on\r"
expect "$device"
send -- "pair $device\r"
expect "Pairing successful"
send -- "connect $device\r"
expect "Connection successful"
send -- "trust $device\r"
expect "trust succeeded"
send -- "exit\r"
expect eof
EOF
)

