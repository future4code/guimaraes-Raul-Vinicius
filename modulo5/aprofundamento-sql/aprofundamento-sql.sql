USE `guimaraes-4211089-raul-rita`;

#EXERCICIO 1
# a) Excluiria a coluna 'salary'
ALTER TABLE Actor DROP COLUMN salary;

# b) Altera a coluna 'gender' pra receber string de até 6 caracteres
ALTER TABLE Actor MODIFY gender VARCHAR(6);

# c) ALTER TABLE Actor MODIFY gender VARCHAR(100);
#---------------------------------------------------------------------------

#EXERCICIO 2
SELECT * FROM Actor;

# a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
UPDATE Actor SET name = "Maria do bairro", birth_date = "1999-02-05"
WHERE id = "003";

# b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, 
# escreva outra query para voltar ao nome anterior.
UPDATE Actor SET name = "JULIANA PAES"
WHERE id = "005";

# c) Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor
SET name = "Juliana Paes", salary = 1000000, birth_date = "1993-09-09"
WHERE id = "005";
#-------------------------------------------------------------------

# EXERCICIO 3

SELECT * FROM Actor;

#a) *Escreva uma query que apague a atriz com o nome `Maria do Bairro`*
DELETE FROM Actor WHERE name = "Maria do bairro";

#b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior 
#do que R$1.000.000,00*
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
#--------------------------------------------------------

#EXERCICIO 4

#a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*
SELECT MAX(salary) FROM Actor;

#b) *Escreva uma query que pegue o menor salário das atrizes*
SELECT MIN(salary) FROM Actor WHERE gender = "female";

#c) *Escreva uma query que pegue a quantidade de atrizes*
SELECT COUNT(*) FROM Actor WHERE gender = "female";

#d) *Escreva uma query que pegue a soma de todos os salários*
SELECT SUM(salary) FROM Actor;
#--------------------------------------------------------------------------

# EXERCICIO 5 

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

#a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
# RESP: A query agrupa e mostra a quantidade dos tipos de genero da tabela.alter

# b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor ORDER BY name DESC;

#c) *Faça uma query que retorne todos os atores ordenados pelo salário*
SELECT * FROM Actor ORDER BY salary ASC;

#d) *Faça uma query que retorne os atores com os três maiores salarios*
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

#e) *Faça uma query que retorne a média de salário por gênero*
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
#--------------------------------------------------------------------------------

# EXERCICIO 6 
DESCRIBE Movies ;

#a) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data 
#limite em que o filme será passado no cinema. 
ALTER TABLE Movies ADD playing_limit_date DATE;

#b) Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por 
#exemplo, uma avaliação `8.5`.
ALTER TABLE Movies CHANGE evaluation evaluation FLOAT;

#c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
SELECT * FROM Movies;

UPDATE Movies
SET playing_limit_date = "2022-04-28"
WHERE id = "001";

UPDATE Movies
SET playing_limit_date = "2022-07-28"
WHERE id = "002";

#d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse
# filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
DELETE FROM Movies WHERE id = "001";