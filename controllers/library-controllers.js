import { BookModel } from "../models/library-models.js";
import { addBookValidator } from "../validators/library-validators.js";

export const postBook = async (req, res, next) => {
  try {
    // Validate book information
    const { error, value } = addBookValidator.validate(
      {
        ...req.body,
        image: req.file.filename,
      },
      { abortEarly: false }
    );
    if (error) {
      return res.status(422).json(error);
    }

    const book = await BookModel.create(value);
    res
      .status(200)
      .json({ message: "New book created and added to Shelf", Book: book });
  } catch (error) {
    next(error);
  }
};

export const getBooks = async (req, res, next) => {
  try {
    const books = await BookModel.find();
    res.status(200).json({ message: "All books", books });
  } catch (error) {
    next(error);
  }
};

export const searchBooks = async (req, res, next) => {
  try {
    const { title, genre, author } = req.query;

    // Build query object based on provided search parameters
    const query = {};
    if (title) {
      query.title = { $regex: title, $options: 'i' }; // Case insensitive search
    }
    if (genre) {
      query.genre = { $regex: genre, $options: 'i' };
    }
    if (author) {
      query.author = { $regex: author, $options: 'i' };
    }

    const books = await BookModel.find(query);
    const countMessage = `${books.length} book${books.length !== 1 ? 's' : ''} found`; // Create count message
    res.status(200).json({ message: countMessage , books });
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const { error, value } = addBookValidator.validate(
      {
        ...req.body,
        image: req.file.filename,
      },
      { abortEarly: false }
    );
    if (error) {
      return res.status(422).json(error);
    }
    const book = await BookModel.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    res.status(200).json({ message: "Book details Updated !", book });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted from Shelf", book });
  } catch (error) {
    next(error);
  }
};
