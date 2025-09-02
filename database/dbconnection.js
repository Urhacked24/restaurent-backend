// import mongoose from "mongoose";

// export const dbconnection=()=>{
//     mongoose
//     .connect(process.env.MONGO_URI,{
//         dbName:"RESTAURENT",

//     })
//     .then(()=>{
//         console.log("connected to database successfullly")
//     })
//     .catch((err)=>console.log("Error connecting to database:", err));

// };


import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURENT",
    })
    .then(() => {
      console.log("✅ Connected to database successfully");
    })
    .catch((err) => {
      console.log("❌ Error connecting to database:", err);
    });
};

