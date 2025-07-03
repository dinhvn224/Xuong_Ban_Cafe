import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Kết nối db thành công");
    } catch (error) {
        console.log("Lỗi kết nối db", error.message);
        process.exit(1);
    }
};
export default connectDB;