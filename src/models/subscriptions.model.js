import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subsriber: {
        type: Schema.Types.ObjectId, //subriber
        ref:"User"
    },
    channel: {
        type: Schema.Types.ObjectId, //channel
        ref:"User"
    },

 },{timestamps:true})

export const Subscription = mongoose.model("Subsription",subscriptionSchema)