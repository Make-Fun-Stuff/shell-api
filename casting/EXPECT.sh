#!/usr/bin/bash

/usr/bin/expect -c '
set timeout -1

spawn ./INTERACTIVE.sh

expect -re {([0-9]+)\s+Sonos\s+Moves.*} {
    set MovesIndex $expect_out(1,string)
    puts "Found Moves: $MovesIndex"    
}

send -- "$MovesIndex\r"
 
expect eof
'
