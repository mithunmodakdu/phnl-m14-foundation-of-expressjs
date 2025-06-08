import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";


const filePath = path.join(__dirname, "../db/todo.json")
const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to ToDos App");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) =>{
  const data = req.body;
  console.log(data)
  res.send("post route")
})

export default app;
