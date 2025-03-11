import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  published_year: {
    year: Number,
    required: true,
  },
});

export const BookModel = model("book", bookSchema);
