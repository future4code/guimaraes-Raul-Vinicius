USE `guimaraes-4211089-raul-rita`;

#Tabela de usuários
SELECT * FROM TodoListUser;
CREATE TABLE TodoListUser (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

#Tabela de criação de tarefas relacionada com usuário. 1:N
CREATE TABLE TodoListTask (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

# Tabela de tarefas designadas aos usuários. N:M
CREATE TABLE TodoListResponsibleUserTaskRelation (
	task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);

SELECT * FROM TodoListUser WHERE id = "d3e126b9-17cc-42eb-a875-a98f62fd9635";