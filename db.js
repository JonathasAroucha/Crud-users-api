import mysql from "mysql"

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Testing123$',
  database: 'crud'
})