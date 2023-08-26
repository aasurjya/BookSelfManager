import  express  from "express";
import { getAllBooks, createBook, hello} from "../models/request";

const router = express.Router();

router.get("/hello", hello);

router.get('/allbooks', getAllBooks);
router.post('/Createbooks', createBook);

export default router;
