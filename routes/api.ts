import  express  from "express";
import { getAllBooks } from "../models/request";

const router = express.Router();

router.post('/api/allbooks', getAllBooks);

export default router;
