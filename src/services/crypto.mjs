/**
 * -----------------------------------------------------------------------------
 * Encrypt/decrypt helper methods
 * -----------------------------------------------------------------------------
 */
import crypto from 'crypto'
import config from './../config'

/**
 * Encrypt a string
 */
export function encrypt(string) {
  const cipher = crypto.createCipher('aes-256-cbc', config.secret)
  let encrypted = cipher.update(string, 'utf8','hex')
  encrypted += cipher.final('hex')
  return encrypted
}

/**
 * Decrypt a string
 */
export function decrypt(string) {
  try {

    // Only decrypt if encrypted
    if (!string || string === null || typeof string === 'undefined') { return string }
    const decipher = crypto.createDecipher('aes-256-cbc', config.secret)
    let decrypted = decipher.update(string,'hex','utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  } catch(e) {

    // Return un-encrypted string
    return string
  }
}