import connectDB from "./db/connectDb";
import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (error: any) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error: any) => {
    console.log("MONGO db connection failed!!", error);
  });
