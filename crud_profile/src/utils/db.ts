import mongoose from "mongoose";

const connect = async ()=>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO ||'')
    }catch(err){
        throw new Error('connection failed')
    }

}
export default connect