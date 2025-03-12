import { Router } from "express";
import { deleteBook, getBookById, getBooks, postBook, updateBook } from "../controllers/library-controllers.js";

const bookRouter = Router();

bookRouter.post('/book', postBook);

bookRouter.get('/books', getBooks);

bookRouter.get('/book/:id', getBookById);

bookRouter.patch('/book/:id', updateBook);

bookRouter.delete('/book/:id', deleteBook);

export default bookRouter;