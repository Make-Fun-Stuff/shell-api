import { start } from './server'
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if (!argv.cmdFile) {
  throw Error('Missing required argument: --cmdFile <filename>')
}

start(5002, argv.cmdFile)
