
1.b)
CREATE TABLE Rating(
id INT AUTO_INCREMENT PRIMARY KEY,
comment TEXT NOT NULL, 
rate FLOAT NOT NULL, 
movie_id INT,
FOREIGN KEY (movie_id) REFERENCES movie(id)
);

INSERT INTO Rating(comment, rate, movie_id)
VALUES(
"Um dos melhores filmes que eu já vi. Só não dou mais estrelas porque não dá",
10,
1
);

INSERT INTO Rating(comment, rate, movie_id)
VALUES(
"Odiei",
1,
2
);

INSERT INTO Rating(comment, rate, movie_id)
VALUES(
"Simplesmente indescritível",
9,
4
);