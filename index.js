const dotenv = require('dotenv')
dotenv.config({ silent: true })

const sql = require('mssql')

const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: DATABASE,
  options: {
    enableArithAbort: true,
  },
}

console.group('Start')
console.log('========================================================')

const run = async () => {
  let pool
  try {
    console.log('Connection Opening...')
    pool = await sql.connect(config)
    const { recordset } = await sql.query`select * from users`
    console.log({ recordset })
  } catch (err) {
    console.log({ err })
  } finally {
    await pool.close
    console.log('connection Closed')
  }
}

run()
console.group('END')
console.log('========================================================')
