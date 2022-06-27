<!-- USE `guimaraes-4211089-raul-rita`;

#EXERCICIO 1 
#a) o comando NOT NULL faz com que não seja permitido deixar o campo sem valor/vazio.
#b) SHOW DATABASES mostra os bancos existentes no sistema. SHOW TABLES mostra as tabelas que foram criadas.
#c) Mostra os detalhes da tabela informada pelo comando, como a sua estrutura e os tipos de dados de cada coluna.
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;
#----------------------------------------------------------------------------------------

#EXERCICIO 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");

#a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");

#b) O erro diz que a entrada 002 está duplicada. Isso acontece quando aplicamos a restrição PK que permite que aquela entrada seja única.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Lázaro Ramos", 1500000, "1978-07-02", "male");

#c) a contagem de colunas não corresponde à contagem de valores na linha 1.
# O erro acontece por estar faltando colunas no comando INSERT INTO.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

#d) o campo 'nome' não tem valor padrão
# Quando não deixamos um valor default definido na criação da tabela temos que obrigatoriamente preencher o campo.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("004", "Tarcisio Meira",400000, "1949-04-18", "male");

#e) valor de data incorreto: coluna '1950' 'birthdate' na linha 1
# O erro aconteceu por a coluna ser do tipo VARCHAR e estava sem as "".
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

#f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("006", "Thais Araujo", 300000, "1978-11-05", "female"),
("007", "Lázaro Ramos", 1500000, "1978-07-02", "male");
#-----------------------------------------------------------------------------------

#EXERCICIO 3

#a)Escreva uma query que retorne todas as informações das atrizes
SELECT * from Actor WHERE gender = "female";

# b)Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT salary FROM Actor WHERE name = "Tony Ramos";

#c)Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". 
#Explique o resultado.
SELECT * from Actor WHERE gender = "invalid";

#d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor 
# máximo de R$500.000
SELECT id, name, salary FROM Actor WHERE salary < 500001;

#e) coluna desconhecida 'nenhum' na lista de campos
# a coluna 'name' estava escrito 'nome'
SELECT id, name from Actor WHERE id = "002";
#----------------------------------------------------------

#EXERCICIO 5 
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

#a) A query ta selecionando todas as colunas da tabela 'Actor' e nos mostrando os dados em que o 'name' 
# começa com 'A' ou 'J' e que tenham um salário superior a 300.000 

#b)  Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350 mil
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

#c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

#d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome 
# e o salário entre R$350.000,00 e R$900.000,00
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") 
AND salary BETWEEN 350000 AND 900000;
#----------------------------------------------------------------------------------

# EXERCICIO 6 

#a) Criar a tabela id, nome, sinopse, data de lançamento e avaliação 
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    posting_date DATE NOT NULL,
    evaluation INT NOT NULL
);

#B) 
INSERT INTO Movies (id, title, synopsis, posting_date, evaluation) 
VALUES(
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

#c) 
INSERT INTO Movies (id, title, synopsis, posting_date, evaluation) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

#d)
INSERT INTO Movies (id, title, synopsis, posting_date, evaluation) 
VALUES(
	"003",
    "Dona Flor e seus dois maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

#e)
INSERT INTO Movies (id, title, synopsis, posting_date, evaluation) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
#--------------------------------------------------------------------

# EXERCICIO 7

# A) Retorne o id, título e avaliação a partir de um id específico;
SELECT id, title, evaluation FROM Movies WHERE id = "001";

# B) Retorne um filme a partir de um nome específico;
SELECT title FROM Movies WHERE title = "Deus é brasileiro";

# C) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, title, synopsis FROM Movies WHERE evaluation >= 7;
#-----------------------------------------------------------------------------

# EXERCICIO 8 

# A) Retorna um filme cujo título contenha a palavra vida.
SELECT * FROM Movies 
WHERE (title LIKE "%vida%");



SELECT * FROM Movies;
 -->
