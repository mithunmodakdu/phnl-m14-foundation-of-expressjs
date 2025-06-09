"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.use("/todos", todos_router_1.todosRouter);
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
app.get("/", (req, res, next) => {
    console.log({
        url: req.url,
        method: req.method,
        headers: req.headers
    });
    next();
}, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(something)
        res.send("Welcome to ToDos App");
    }
    catch (error) {
        next(error);
    }
}));
app.get("/error", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(something)
        res.send("Welcome to error er duniya");
    }
    catch (error) {
        next(error);
    }
}));
//::::: not found route middleware must be after all routes but just above global error handler :::::
app.use((req, res, next) => {
    res.status(404).json({ message: "Route NOT FOUND" });
});
//::::: global error handler should be in the last:::::
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).json({ message: "something went wrong global error handler", error });
    }
});
exports.default = app;
