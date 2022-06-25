import mongoose, { Schema } from "mongoose";

import { covidCasesProps } from "src/@types/covidCasesTypes";

const caseSchema = new Schema<covidCasesProps>({
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

export default mongoose.model("Case", caseSchema);
