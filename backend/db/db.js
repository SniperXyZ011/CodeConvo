import mongoose from "mongoose";

export default function connect(){
    mongoose.connect(process.env.MONGODB_URI , {
        bufferCommands: false, // Disable buffering
      })
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    })
}


