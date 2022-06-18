USE `guimaraes-4211089-raul-rita`;

#EXERCICIO 1
# a) Excluiria a coluna 'salary'
ALTER TABLE Actor DROP COLUMN salary;

# b) Altera a coluna 'gender' pra receber string de até 6 caracteres
ALTER TABLE Actor MODIFY gender VARCHAR(6);

# c) ALTER TABLE Actor MODIFY gender VARCHAR(100);
#---------------------------------------------------------------------------

#EXERCICIO 2

# a) 

