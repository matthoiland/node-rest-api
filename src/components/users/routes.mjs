/**
 * -----------------------------------------------------------------------------
 * User routes
 * -----------------------------------------------------------------------------
 */
import express from 'express'
import * as Controller from './controller'

/**
 * Initialize Express router
 */
const Router = express.Router
const router = Router()

/**
 * Routes
 */
router.use('/users', 
  Router()
    .get('/me', Controller.getSelf)
)

/**
 * Export router
 */
export default router