import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  tittle: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  genre: {
    type: String,
    require: true,
  },

  published_year: {
    year: Number,
    require: true,
  },
});

export const book = mongoose.model("book", bookSchema);
