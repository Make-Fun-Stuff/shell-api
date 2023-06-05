import { start } from './server'
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if (!argv.cmdFiles) {
  throw Error('Missing required argument: --cmdFiles cmd1=<filename1>,cmd2=<filename2>,...')
}

start(5002, argv.cmdFiles)
