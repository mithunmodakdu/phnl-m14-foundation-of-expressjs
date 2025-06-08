"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json({
        message: "From todosRouter",
        data
    });
});
exports.todosRouter.post("/create-todo", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("post route");
});
exports.todosRouter.get("/:title", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("get single todo route");
});
exports.todosRouter.put("/update-todo/:title", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("update todo route");
});
exports.todosRouter.delete("/delete-todo/:title", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("delete todo route");
});
