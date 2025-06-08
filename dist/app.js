"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_router_1 = require("./app/todos/todos.router");
const filePath = path_1.default.join(__dirname, "../db/todo.json");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const usersRouter = express_1.default.Router();
app.use('/todos', todos_router_1.todosRouter);
app.use('/users', usersRouter);
app.get("/", (req, res) => {
    res.send("Welcome to ToDos App");
});
// ::::: params, query ::::
// app.get("/todos/:title/:body", (req: Request, res: Response) => {
//   console.log("From query", req.query)
//   console.log("From params", req.params)
//   const data = fs.readFileSync(filePath, { encoding: "utf-8" });
//   res.json(data);
// });
exports.default = app;
