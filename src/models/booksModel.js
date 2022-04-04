const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    coverLink:{
      type:String,
      required:true,
      trim:true
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
    ISBN: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type:[ "String"],
      required: true,
    },
    reviews: {
      type: Number,
      default: 0
    
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    releasedAt: { type: String, required: true, format: "YYYY-MM-DD" },
    // createdAt: {type:Date.now(),default:null},
    // updatedAt: {type:Date.now(),default:null},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
