/**
 * -----------------------------------------------------------------------------
 * Allow cross-domain resource sharing
 *
 * https://enable-cors.org/server_expressjs.html
 * -----------------------------------------------------------------------------
 */
export default function(req, res, next) {

  // The CORS magicks
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 
             'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  // Allow preflight `OPTIONS`
  if (req.method === 'OPTIONS') return res.sendStatus(200)

  // Nothing to see, keep moving
  return next()
}
