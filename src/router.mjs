/**
 * -----------------------------------------------------------------------------
 * API Router
 * -----------------------------------------------------------------------------
 */
import express from 'express'
import Users from './components/users/routes.mjs'

/**
 * Initialize Express router
 */
const Router = express.Router
const router = Router()

/**
 * API routes
 */
router.use('/api/v1', Router().use([ 
  Users,
]))

/**
 * OAuth routes
 * TODO:
 */

/**
 * 404 route
 */
router.all('*', (req, res) => {
  // TODO: return error
  return res.send('404')
})

/**
 * Export router
 */
export default router