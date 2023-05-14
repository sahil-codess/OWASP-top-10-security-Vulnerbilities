import express from "express";
import mongoose from "mongoose";

const EmpRecord = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

export default mongoose.model('EmpRecords', EmpRecord)