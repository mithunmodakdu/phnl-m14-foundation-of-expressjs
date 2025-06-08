import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config'

const uri = `mongodb+srv://${process.env.mongo_todo_app_user}:${process.env.mongo_todo_app_pass}@cluster0.mcynqnr.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});