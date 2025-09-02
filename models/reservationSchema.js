import mongoose from "mongoose";
import validator from "validator";

const reservationSchema= new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        minLength:[3,"First name contain at atlest 3 charaters!"],
        maxLength:[20,"First name can not exceed 20 characters!"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name contain at atlest 3 charaters!"],
        maxLength:[20,"Last name can not exceed 20 characters!"],
        
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please enter a valid email address!"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must be at least 10 characters long!"],
        maxLength:[10,"Phone number can not exceed 15 characters!"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },

});

export const Reservation = mongoose.model("Reservation", reservationSchema);

