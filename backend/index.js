import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import RecordRoute from "./routes/recordRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";

const app = express();
mongoose.connect("mongodb://0.0.0.0:27017/crud-mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(bodyParser.json());

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected!"));

app.use(cors());
app.use(express.json());

app.use(RecordRoute);
app.use(UserRoutes);

app.listen(5000, () => console.log("Back-end server started at port 5000"));
