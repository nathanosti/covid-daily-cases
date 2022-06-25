import 'dotenv/config';
import mongoose from "mongoose";

const DB_USERNAME = process.env.DATABASE_USERNAME
const DB_PASSWORD = process.env.DATABASE_PASSWORD

export const connectDatabase = () => {
  mongoose
    .connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.lbrao.mongodb.net/?retryWrites=true&w=majority`)
    .then(() =>
      console.log("Database Connection Successful!")
    )
    .catch((err) =>
      console.log(`Error connecting to Database: ${err}`)
    );
};
