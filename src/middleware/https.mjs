/**
 * -----------------------------------------------------------------------------
 * Enforce HTTP --> HTTPS redirection
 * -----------------------------------------------------------------------------
 */
export default function(req, res, next) {
  if (process.env.ENFORCE_SSL && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`)
  }
  return next()
}