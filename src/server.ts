import express, { Request, Response } from 'express'
import cors from 'cors'
import { execFile } from 'child_process'
import assert from 'assert'

interface Command {
  cmd: string
  filename: string
}

const parseCommands = (commandString: string): Command[] => {
  return commandString.split(',').map((_) => {
    const parts = _.split('=')
    assert.equal(parts.length, 2, `Invalid input: ${_}`)
    return {
      cmd: parts[0],
      filename: parts[1],
    }
  })
}

export const start = (port: number, commandString: string) => {
  const commands = parseCommands(commandString)
  const app = express()

  app.disable('etag')
  app.use(
    cors({
      origin: '*',
      credentials: true,
    })
  )
  app.use(express.json())

  app.get('/', (_, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.send(200).send(JSON.stringify({}))
  })

  const generateHandler = (command: Command): ((req: Request, resp: Response) => Promise<void>) => {
    return async (_: Request, response: Response) => {
      console.log(`\nReceived "${command.cmd}" command at ${new Date().toISOString()}`)
      response.setHeader('Content-Type', 'application/json')
      try {
        console.log(`Running file: "${command.filename}"`)
        execFile(command.filename)
        response.status(200).send({})
      } catch (error) {
        console.error(error)
        response.status(500).send({ error })
      }
    }
  }

  commands.forEach((command) => {
    app['post'](`/${command.cmd}`, generateHandler(command))
  })

  app.listen(port, '0.0.0.0', () => {
    console.log(`Shell API started on port ${port}`)
  })
}
