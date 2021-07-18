import mongoose from "mongoose";

const feedBackSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  admin_reply: {
    type: String,
  },
  status: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const FeedBack = mongoose.model("FeedBack", feedBackSchema);
export default FeedBack;

export const fetchFeedBack = async () => {
  var data = await FeedBack.find({ status: false });
  return data;
};
