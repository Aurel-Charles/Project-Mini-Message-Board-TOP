import pool from "./pool.js";


export async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY added DESC");
    return rows;
  }

export async function addMessageToDb(message) {
    await pool.query(
        "INSERT INTO messages (text, username) VALUES ($1, $2)",
        [message.text, message.username]
      );
}

export async function getMessageById(id) {
    const { rows } = await pool.query(
      "SELECT * FROM messages WHERE id = $1",
      [id]
    );
    return rows[0] || null;
  }

export async function deleteMessage(id) {
    await pool.query(
        "DELETE FROM messages WHERE id = $1",
        [id]
    )
}