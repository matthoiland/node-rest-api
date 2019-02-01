/**
 * -----------------------------------------------------------------------------
 * SocketIO Service
 * -----------------------------------------------------------------------------
 */
import socket from 'socket.io'
import redis from 'socket.io-redis'
import chalk from 'chalk'
import config from './../config.mjs'
let io = null

/**
 * -----------------------------------------------------------------------------
 * Emit SocketIO message to room
 * -----------------------------------------------------------------------------
 */
export function emitSocket({ event, resource }) {
  if (io) {

    // Requirements
    if (!event) return Promise.reject(`Parameter 'event' is missing.`)
    if (!resource) return Promise.reject(`Parameter 'resource' is missing.`)

    // Define channel/user to broadcast to
    let resource_id = resource.user_id // Non-user resource
    if (event.includes('user')) resource_id = resource._id // User resource

    // Emit socket message
    if (resource_id) {
      io.to(resource_id).emit(event, { 
        id: resource._id,
        date: resource.date || resource.created_at
      })
    }
  }
}

/**
 * -----------------------------------------------------------------------------
 * Initialize SocketIO
 * -----------------------------------------------------------------------------
 */
export function initialize(server) {
  io = socket(server)
  io.adapter(redis(config.redis_uri))
  io.on('connection', socket => {
    socket.on('subscribe', socket.join)
    socket.on('unsubscribe', socket.leave)
  })
  console.log(chalk`{cyan Socket.io is publishing to} {green redis}`)
}