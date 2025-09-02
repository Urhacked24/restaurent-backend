// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import {dbconnection} from "./database/dbconnection.js";

// const app =express();
// dotenv.config({path:"./config/config.env"}); 

// // to connect backend with frontend ,we use cors

// app.use(cors({
//     origin:[process.env.FRONTEND_URL],
//     methods:["POST"],
//     credentials:true,
// }));

//  //middleware ke roop me kaam krata hai

// app.use(express.json());  // json format me ham ise string denge aur ye us string ko json object me convert kr dega

// app.use(express.urlendcoded({extended:true})); // jo hamare pass data hai vo kis type ka hone wala hai,isliye iska use karte hai

// dbconnection();

// export default app;



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRouter.js";

dotenv.config({ path: "./config/.env" });

const app = express();

// CORS setup
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST"],   // GET भी allow कर लो
  // credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservations", reservationRouter);

// DB Connection
dbConnection();

// Test route
app.get("/", (req, res) => {
  res.send("Hello Backend is running 🚀");
});

app.use(errorMiddleware);
export default app;
