import logger from './../services/logger'

/**
 * -----------------------------------------------------------------------------
 * Handle errors
 * -----------------------------------------------------------------------------
 */
export default function(err, req, res, next) {

  // Define error data
  const message = err.message || 'Unknown server error'
  const code = err.status || 500
  const error = err.name || 'ServerError'

  // Log with Winston
  logger.log({
    level: code === 500 ? 'error' : 'warn', // Only log 500's as errors
    message: `${code} - ${error} - ${message}`
  })

  // Return error message
  return res.status(code).json({ code, error, message })
}