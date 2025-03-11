import { bookModel } from "../models/library-models.js";

export const postBook = async (req, res, next) => {

  try {
    const book = await bookModel.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};



export const getBook = async (req, res, next) => {

  try {
    const book = await bookModel.find(req.body);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};



export const getBookbyId = async (req, res, next) => {

  try {
    const book = await bookModel.findbyId(req.params.id, req.body);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};



export const updateBook = async (req, res, next) => {

  try {
    const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true,});
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};



export const deleteBook = async (req, res, next) => {

  try {
    const book = await bookModel.findByIdAndDelete(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
  
};

