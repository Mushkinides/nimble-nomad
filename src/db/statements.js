/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const db = require("better-sqlite3")("database.db");

const createUserTable = () => {
  const sql = `
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    password TEXT NO NULL
  )`;

  db.prepare(sql).run();
};

const insertUserTable = (email, password) => {
  const sql = `
    INSERT INTO users (email, password)
    VALUES (?, ?)
  `;

  db.prepare(sql).run(email, password);
};

insertUserTable("shany@mushkin.com", "iLoveNimble123!");
