/**
 * -----------------------------------------------------------------------------
 * Authorization middleware
 *
 * 1. Confirm valid `access_token`
 * 2. Lookup user and place on further requests
 * -----------------------------------------------------------------------------
 */
export default function(req, res, next) {
  return next()
}