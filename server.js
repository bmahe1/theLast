const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'your_db_user',
  host: 'your-db-endpoint.rds.amazonaws.com',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

app.get('/api/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
