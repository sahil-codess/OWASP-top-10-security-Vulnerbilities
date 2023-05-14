import EmpRecords from "../models/recordModel.js";

export const getRecords = async (req, res) => {
    try {
        const records = await EmpRecords.find();
        res.status(200).json({
            statu: "success",
            data: records
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const saveRecord = async (req, res) => {
    const record = new EmpRecords(req.body);
    try {
        const insertedRecord = await record.save();
        res.status(200).json({
            status: "success",
            data: insertedRecord
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getRecordById = async (req, res) => {
    try {
        const record = await EmpRecords.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: record
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateRecord = async (req, res) => {
    try {
        const updateRecord = await EmpRecords.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json({
            status: "success",
            data: updateRecord
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteRecord = async (req, res) => {
    try {
        const deleteRecord = await EmpRecords.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: "success",
            data: deleteRecord
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
