import express, { Application, NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { todosRouter } from "./app/todos/todos.router";

const filePath = path.join(__dirname, "../db/todo.json");
const app: Application = express();

app.use(express.json());

const usersRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", usersRouter);


// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to ToDos App");
// });

// ::::: params, query ::::
// app.get("/todos/:title/:body", (req: Request, res: Response) => {
//   console.log("From query", req.query)
//   console.log("From params", req.params)
//   const data = fs.readFileSync(filePath, { encoding: "utf-8" });
//   res.json(data);
// });

//::::: middleware function :::::
// app.get("/",
  
//   (req: Request, res: Response, next: NextFunction) => {
//     console.log("Welcome middleware");
//     next();
//   },

//   (req: Request, res: Response) => {
//     res.send("Welcome to ToDos App");
//   }
// );


//::::: logger using middleware function :::::
// app.get("/",
  
//   (req: Request, res: Response, next: NextFunction) => {
//     console.log({
//       url: req.url,
//       method: req.method,
//       headers: req.headers
//     });
//     next();
//   },

//   (req: Request, res: Response) => {
//     res.send("Welcome to ToDos App");
//   }
// );



//::::: error handling :::::
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log({
      url: req.url,
      method: req.method,
      headers: req.headers
    });
    next();
  },

  async(req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(something)
      res.send("Welcome to ToDos App");
    } catch (error) {
        next(error)
    }
  }
);

app.get("/error",
  async(req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(something)
      res.send("Welcome to error er duniya");
    } catch (error) {
        next(error)
    }
  },
);


//::::: not found route middleware must be after all routes but just above global error handler :::::
app.use((req, res, next)=>{
   res.status(404).json({message: "Route NOT FOUND"})
})


//::::: global error handler should be in the last:::::
app.use((error: any, req: Request, res: Response, next: NextFunction )=>{
    if(error){
      console.log(error)
      res.status(400).json({message: "something went wrong global error handler", error})
    }
});






export default app;
