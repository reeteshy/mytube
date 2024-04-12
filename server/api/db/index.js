import mongoose from "mongoose";

async function connectionDB() {
    const connectionObject = await mongoose.connect(process.env.MONGO_URI)
    return connectionObject;
}

export default connectionDB;