import mongoose, { mongo, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { covidCasesProps } from "src/@types/covidCasesTypes";

const casesSchema = new Schema<covidCasesProps>({
  _id: {
    type: String,
    default: uuidv4(),
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  num_sequences: {
    type: Number,
    required: true,
  },
  perc_sequences: {
    type: Number,
    required: true,
  },
  num_sequences_total: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Cases", casesSchema);
