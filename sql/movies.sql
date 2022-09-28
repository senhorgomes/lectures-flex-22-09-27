DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  year INT
);

INSERT INTO movies 
  (title, year)
VALUES 
  ('The Matrix', 1999),
  ('Harry Potter and the Sorcerers Stone ', 2001),
  ('Godfather', 1972 ),
  ('Get Out', 2017);