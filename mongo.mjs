import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/backend")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error: ${err}`));

const newSchema = new mongoose.Schema({
  msg: {
    type: String,
    require: true,
  },
});

export const collection = mongoose.model("collection", newSchema);

// module.exports = collection;
