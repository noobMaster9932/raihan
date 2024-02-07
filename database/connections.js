const { Client } = require('pg')

// PostgreSQL connection configuration
const config = {
  user: 'test_user',
  password: 'test_password',
  database: 'test_db',
  host: 'localhost',
  port: 9999,
}

// Create a new PostgreSQL client
const client = new Client(config)

// Function to connect to the PostgreSQL server
const connectToDatabase = async () => {
  try {
    await client.connect()
    console.log('Connected to PostgreSQL')
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error)
  }
}

// Function to close the database connection
const closeDatabaseConnection = async () => {
  await client.end()
  console.log('Disconnected from PostgreSQL')
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
  client,
}
