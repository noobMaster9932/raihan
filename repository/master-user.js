const {
  connectToDatabase,
  client,
  closeDatabaseConnection,
} = require('../database/connections')

const masterUserRepository = {
  getAllUser: async () => {
    try {
      await connectToDatabase()
      const result = await client.query('SELECT * FROM master_user;')
      await closeDatabaseConnection()
      return {
        isError: false,
        error: null,
        data: result.rows,
      }
    } catch (err) {
      return {
        isError: true,
        error: err,
        data: null,
      }
    }
  },

  getRaihan: async () => {
    try {
      await connectToDatabase()
      const result = await client.query('SELECT username FROM master_user;')
      await closeDatabaseConnection()
      return {
        isError: false,
        error: null,
        data: result.rows,
      }
    } catch (err) {
      return {
        isError: true,
        error: err,
        data: null,
      }
    }
  },
}
module.exports = masterUserRepository
