/**
 * -----------------------------------------------------------------------------
 * NodeJS API Starter
 * -----------------------------------------------------------------------------
 */
import 'dotenv/config'
import chalk from 'chalk'
import compression from 'compression'
import config from './config'
import cookies from 'cookie-parser'
import express from 'express'
import http from 'http'
import logger from './services/logger'
import middleware from './middleware'
import mongoose from 'mongoose'
import morgan from 'morgan'
import parser from 'body-parser'
import router from './router'
import { initialize } from './services/socket'

/**
 * Database configuration
 */
mongoose.Promise = global.Promise
mongoose.connection.close()
mongoose.connect(config.mongodb_uri)
mongoose.connection.on('connected', data => {
  const name = mongoose.connection.name
  console.log(chalk`{cyan MongoDB connected to} {green ${name}}`)
})

/**
 * Initialize Express
 */
const app = express()

/**
 * Server configuration
 */
app.use(compression())
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cookies())

/**
 * Logging
 */
app.use(morgan('tiny', { stream: logger.stream }))

/**
 * Middleware
 */
app.use(middleware)

/**
 * Router
 */
app.use('/', router)

/**
 * Initialize SocketIO
 */
const server = http.createServer(app)
initialize(server)

/**
 * Start server
 */
server.listen(config.port, () => {
  const url = `http://localhost:${config.port}`
  console.log(chalk`{cyan Express is running at} {green ${url}}`)
})