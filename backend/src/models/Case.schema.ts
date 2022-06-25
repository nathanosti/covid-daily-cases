import mongoose, { mongo, Schema } from "mongoose";
import { covidCasesProps } from "src/@types/covidCasesTypes";

const caseSchema = new Schema<covidCasesProps>({
  _id: {
    type: String,
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
    type: String,
    required: true,
  },
  perc_sequences: {
    type: String,
    required: true,
  },
  num_sequences_total: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Case", caseSchema);
