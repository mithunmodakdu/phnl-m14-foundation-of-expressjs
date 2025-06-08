import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { todosRouter } from "./app/todos/todos.router";


const filePath = path.join(__dirname, "../db/todo.json")
const app: Application = express();

app.use(express.json());

const usersRouter = express.Router();

app.use('/todos', todosRouter);
app.use('/users', usersRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to ToDos App");
});


// ::::: params, query ::::
// app.get("/todos/:title/:body", (req: Request, res: Response) => {
//   console.log("From query", req.query)
//   console.log("From params", req.params)
//   const data = fs.readFileSync(filePath, { encoding: "utf-8" });
//   res.json(data);
// });



export default app;
