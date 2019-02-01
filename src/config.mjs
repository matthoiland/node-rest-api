export default {

  /**
   * ---------------------------------------------------------------------------
   * Environment
   * ---------------------------------------------------------------------------
   */
  environment: process.env.NODE_ENV || 'development',

  /**
   * ---------------------------------------------------------------------------
   * Base url
   * ---------------------------------------------------------------------------
   */
  base_url: process.env.BASE_URL || 'http://localhost:3000/',

  /**
   * ---------------------------------------------------------------------------
   * Express port
   * ---------------------------------------------------------------------------
   */
  port: process.env.PORT || 3000,

  /**
   * ---------------------------------------------------------------------------
   * General purpose `secret` string
   * ---------------------------------------------------------------------------
   */
  secret: process.env.SECRET || 'secret-string-for-tokens-and-encryption',

  /**
   * ---------------------------------------------------------------------------
   * MongoDB connection
   * ---------------------------------------------------------------------------
   */
  mongodb_uri: process.env.MONGODB_URI ||
    ((process.env.NODE_ENV === 'test') ?
      'mongodb://localhost/node-api-server-test' :  // for local testing
      'mongodb://localhost/node-api-server-local'), // for local development

  /**
   * -----------------------------------------------------------------------------
   * Redis connection
   * -----------------------------------------------------------------------------
   */
  redis_uri: process.env.REDIS_URL || 'redis://localhost:6379',

  /**
   * ---------------------------------------------------------------------------
   * Example API Credentials
   * ---------------------------------------------------------------------------
   */
  example_client_id: process.env.EXAMPLE_CLIENT_ID,
  example_client_secret: process.env.EXAMPLE_CLIENT_SECRET,
}
