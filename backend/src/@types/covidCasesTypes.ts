export type covidCasesProps = {
  _id?: string;
  location: string;
  date: string;
  variant: string;
  num_sequences: number;
  perc_sequences: number;
  num_sequences_total: number;
  created_at?: Date;
};
