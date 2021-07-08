import mongoose from "mongoose";

const feedBackSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const FeedBack = mongoose.model("FeedBack", feedBackSchema);
export default FeedBack;

export const fetchFeedBack = async () => {
  var data = await FeedBack.find({});
  return data;
};
