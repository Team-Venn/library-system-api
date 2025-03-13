import { Router } from "express";
import { deleteBook, getBooks, postBook, searchBooks, updateBook } from "../controllers/library-controllers.js";
import { remoteUpload } from "../middlewares/upload.js";

const bookRouter = Router();

bookRouter.post('/books',remoteUpload.single('image'), postBook);

bookRouter.get('/books', getBooks);

bookRouter.get('/books/:id', searchBooks);

bookRouter.patch('/book/:id', remoteUpload.single('image'), updateBook);

bookRouter.delete('/book/:id', deleteBook);

export default bookRouter;