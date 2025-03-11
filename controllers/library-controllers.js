import { BookModel } from "../models/library-models.js";
import { addBookValidator } from "../validators/library-validators.js";

export const postBook = async (req, res, next) => {

  try {
    
     // Validate book information
     const {error, value} = addBookValidator.validate(req.body, {abortEarly : false});
     if (error){
         return res.status(422).json(error);
     }

    const book = await BookModel.create(req.body);
    res.status(200).json({ message: 'New book created and added to Shelf', Book: book });
  } catch (error) {
    next(error);
  }
};



export const getBooks = async (req, res, next) => {

  try {
    const book = await BookModel.find();
    res.status(200).json({message : 'All books', book});
  } catch (error) {
    next(error);
  }
};



export const getBookById = async (req, res, next) => {

  try {
    const book = await BookModel.findById(req.params.id, req.body);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};



export const updateBook = async (req, res, next) => {

  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {new:true,});
    res.status(200).json({ message: 'Book details Updated !', book});
  } catch (error) {
    next(error);
  }
};



export const deleteBook = async (req, res, next) => {

  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message : 'Book deleted from Shelf', book});
  } catch (error) {
    next(error);
  }
  
};

