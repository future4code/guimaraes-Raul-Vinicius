import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";

app.get('/test', (req:Request, res:Response) => {
    res.status(200).send("Api funcionando!")
});


//EXERCICIO 1 

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

//GetActorByName 
// b) Faça uma função que busque um ator pelo nome

app.get('/actor/:name', async (req:Request, res:Response) => {

    try {
        const name = req.params.name

        const resultName = await connection.raw(`
            SELECT * FROM Actor WHERE name = "${name}"
        `)
        
        res.status(201).send(resultName[0])

    } catch (error:any) {
        console.error(error)
        console.log(error.message)
        res.status(500).send("Algo deu errado!")   
    }
});

//c) Count ACTORS

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    
    const count = result[0][0].count;
    return count;
  };


//EXERCICIO 2 

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

  // A)

  const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

  // B)

  const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

  // C) 

  const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

  // EXERCICIO 3 

  // A)

  //GET ACTOR BY ID 
  app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)

    } catch (error:any) {
      res.status(400).send(error.message);
    }
  });

  // B) 

  // COUNT ACTORS 
  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  });

  
