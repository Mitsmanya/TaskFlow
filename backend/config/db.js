import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mitalimanya:taskflow25@cluster0.apviskx.mongodb.net/Taskflow')
    .then (() => console.log('DB CONNECTED'));
}