import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${dbName}`
    );

    console.log(
      "MONGODB CONNECTED SUCCESSFUL :: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MONGODB CONNECT FAILED :: " + error);
    process.exit(1);
  }
};

export default connectDB;
