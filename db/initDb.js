// db/populateDb.js
import pool from "./pool.js";

async function main() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      username VARCHAR(255) NOT NULL,
      text VARCHAR(255) NOT NULL,
      added TIMESTAMP DEFAULT NOW()
    )
  `);

  await pool.query(`
    INSERT INTO messages (text, username) VALUES
    ('Hi there!', 'Alice' ),
    ('Hello world!', 'Charles')
  `);

  console.log("BDD peuplée !");
  await pool.end();
}

main();
// node db/initDb.js