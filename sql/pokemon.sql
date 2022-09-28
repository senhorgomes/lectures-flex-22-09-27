DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  type VARCHAR(50)
);

INSERT INTO pokemon 
  (name, type)
VALUES 
  ('Pikachu', 'Electric'),
  ('Mewtwo', 'Psychic'),
  ('Charizard', 'Fire'),
  ('Bulbasaur', 'Grass');