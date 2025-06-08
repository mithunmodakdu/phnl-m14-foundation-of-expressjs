import express, { Application, Request, Response } from "express";
import path from "path";
import fs from "fs";

const filePath = path.join(__dirname, "../../../db/todo.json")

export const todosRouter = express.Router();

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  res.json({
    message: "From todosRouter",
    data
  });
})

todosRouter.post("/create-todo", (req: Request, res: Response) =>{
  const data = req.body;
  console.log(data)
  res.send("post route")
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