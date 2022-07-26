import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import logger from './config/logger'
import setupRoutes from './config/routes'

const server = express()

server.use(logger)

server.use(cors({ exposedHeaders: 'X-Total-Count' }))
server.use(helmet())

setupRoutes(server)

export { server }
