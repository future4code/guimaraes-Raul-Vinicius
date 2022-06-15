USE `guimaraes-4211089-raul-rita`;

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