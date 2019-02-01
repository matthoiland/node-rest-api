/**
 * -----------------------------------------------------------------------------
 * User model
 * -----------------------------------------------------------------------------
 */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

/**
 * -----------------------------------------------------------------------------
 * User schema
 * -----------------------------------------------------------------------------
 */
const User = mongoose.Schema({

  created_at: { type: Date, default: Date.now },
  
  email: { type: String, lowercase: true, trim: true, unique: true },

  password: { type: String },

  first_name: { type: String },

  role: { type: String, enum: ['default', 'admin'], default: 'default' },

  last_name: { type: String },
})

/**
 * -----------------------------------------------------------------------------
 * Hash password before saving
 * -----------------------------------------------------------------------------
 */
User.pre('save', function presave(next) {

  // User did not modify their password
  if (!this.isModified('password')) return next()

  // Hash password
  return bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash
    return next()
  })
})

// const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * -----------------------------------------------------------------------------
 * Export model
 * -----------------------------------------------------------------------------
 */
export default mongoose.model('User', User)