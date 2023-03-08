import express, { Request, Response } from 'express'
import cors from 'cors'
import { execFile } from 'child_process'

export const start = (port: number, cmdFile: string) => {
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

  const restart = async (_: Request, response: Response) => {
    console.log(`\nReceived request to restart Kenku FM at ${new Date().toISOString()}`)
    response.setHeader('Content-Type', 'application/json')
    try {
      console.log(`Running file: "${cmdFile}"`)
      execFile(cmdFile)
      response.status(200).send({})
    } catch (error) {
      console.error(error)
      response.status(500).send({ error })
    }
  }

  app['post'](`/restart`, restart)

  app.listen(port, '0.0.0.0', () => {
    console.log(`Kenku Killer API started on port ${port}`)
  })
}
