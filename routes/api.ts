import  express  from "express";
import { hello, getAllBooks, createBook, deleteBook, updateBook, getBookById} from "../models/request";

const router = express.Router();

router.get("/hello", hello);
router.get('/allbooks', getAllBooks);
router.get('/getBooksByID/:id', getBookById);
router.post('/Createbooks', createBook);
router.delete('/deleteBook/:id', deleteBook);

// router.put('/updateBooks', deleteBook);

export default router;
