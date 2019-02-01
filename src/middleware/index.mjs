/**
 * -----------------------------------------------------------------------------
 * Express middleware
 * -----------------------------------------------------------------------------
 */
import https from './https.mjs'
import cors from './cors.mjs'
import authorization from './authorization.mjs'

export default [ https, cors, authorization ]