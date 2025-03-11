import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
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
  },
  {
    timestamps: true,
  }
);

export const book = mongoose.model("book", bookSchema);
