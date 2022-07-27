import { app } from "./app";
import { UserController } from "./controller/UserController";

const userController = new UserController()


app.post('/User/Create', userController.createUser)

app.get('/User/All', userController.getAllUsers)