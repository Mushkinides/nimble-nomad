CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  age INTEGER
)

INSERT INTO users (email, age)
VALUES("YOPAPA", 20)

DROP TABLE users