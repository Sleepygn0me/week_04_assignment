--the sql from supabase

CREATE TABLE games(
  id INT PRIMARY KEY  GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  title VARCHAR(255), 
  platform VARCHAR(255),
  message TEXT
);


INSERT INTO games (name, title, platform, message)
VALUES ('joe', 'Ghost of Tsushima', 'Playstation','Great game loved the exploration and music'), ('Luke','Elden Ring', 'P.C','another hit for fromsoft '), ('sarah', 'Overwatch', 'All', 'finally added hero bans cannot wait to dive back in');


SELECT * FROM games;
SELECT name, platform FROM games