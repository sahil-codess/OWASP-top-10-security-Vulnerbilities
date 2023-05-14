import express from "express";
import { deleteRecord, getRecordById, getRecords, saveRecord, updateRecord } from "../controllers/recordController.js";


const router = express.Router();

router.get("/records", getRecords);
router.post("/records", saveRecord);
router.get("/records/:id", getRecordById);
router.patch("/records/:id", updateRecord);
router.delete("/records/:id", deleteRecord);

export default router;