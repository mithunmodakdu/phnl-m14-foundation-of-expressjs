import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { client } from "../../config/mongodb";

const filePath = path.join(__dirname, "../../../db/todo.json")

export const todosRouter = express.Router();

todosRouter.get("/", async(req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
 
  const cursor = collection.find({});
  const todos = await cursor.toArray();
  res.json(todos)
})

todosRouter.post("/create-todo", async(req: Request, res: Response) =>{
  const {title, description, priority} = req.body;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: false
  })

  const cursor = collection.find({});
  const todos = await cursor.toArray();
  res.json(todos)
})

todosRouter.get("/:title", (req: Request, res: Response) =>{
  const data = req.body;
  console.log(data)
  res.send("get single todo route")
})

todosRouter.put("/update-todo/:title", (req: Request, res: Response) =>{
  const data = req.body;
  console.log(data)
  res.send("update todo route")
})

todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) =>{
  const data = req.body;
  console.log(data)
  res.send("delete todo route")
})