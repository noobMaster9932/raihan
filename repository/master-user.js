const { client, closeDatabaseConnection } = require('../database/connections')

const masterUserRepository = {
  getAllUser: async () => {
    try {
      const result = await client.query('SELECT * FROM master_user;')
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
  getUserByUserName: async (username) => {
    try {
      const result = await client.query(
        `SELECT * FROM master_user where username="${username}";`
      )
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
      const result = await client.query('SELECT username FROM master_user;')
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
