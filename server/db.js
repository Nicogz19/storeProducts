import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nicogz98:testing123@cluster0.lfrziqv.mongodb.net/?retryWrites=true&w=majority')
    } catch (error) {
        console.log(error, 'error')        
    }
};