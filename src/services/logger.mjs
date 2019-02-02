import winston from 'winston'
import config from './../config'

/**
 * Winston options
 */
const options = {
  console: {
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  },
  file: {
    level: 'info',
    filename: 'app.log',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.json()
    )
  }
}

/**
 * Initialize Winston logger
 */
const logger = new winston.createLogger({
  transports: [
    // new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ]
})

/**
 * Stream for Morgan events
 */
logger.stream = {
  write: (message) => { logger.info(message) }
}

/**
 * Export logger
 */
export default logger