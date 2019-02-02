/**
 * -----------------------------------------------------------------------------
 * Express middleware
 * -----------------------------------------------------------------------------
 */
import https from './https.mjs'
import cors from './cors.mjs'
import authorization from './authorization.mjs'
import responses from './responses.mjs'

export default [ https, cors, authorization, responses ]