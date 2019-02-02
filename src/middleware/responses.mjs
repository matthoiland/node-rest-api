/**
 * -----------------------------------------------------------------------------
 * Response helpers
 *
 * Examples:
 *   res.error(401, `Field 'name' is required.`)
 *   res.ok({ data: user })
 * -----------------------------------------------------------------------------
 */
export default function(req, res, next) {

  /**
   * Error response helper
   */
  res.error = (code = 500, message) => {

    // Define error names
    const errors = {
      400: 'BadRequest',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'NotFound',
      500: 'ServerError'
    }

    // Create error
    const error = new Error(message)
    error.status = code
    error.name = errors[code]

    // Return to error middleware
    return next(error)
  }

  /**
   * Success response helper
   */
  res.ok = ({ meta = {}, data = [] }) => {
    meta = { self: req.originalUrl, ...meta }
    return res.json({ meta, data })
  }

  /**
   * Return middleware
   */
  return next()
}