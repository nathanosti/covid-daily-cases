import { Readable } from "stream";
import readLine from "readline";

import { covidCasesProps } from "src/@types/covidCasesTypes";
import { converCsvProps } from "src/@types/convertCsvTypes";

export default async function converCsv({ buffer }: converCsvProps) {
  const readableFile = new Readable();

  const bufferToString = (buffer: ArrayBuffer) => {
    const bytes = new Uint8Array(buffer);
    return bytes.reduce(
      (string, byte) => string + String.fromCharCode(byte),
      ""
    );
  };

  readableFile.push(bufferToString(buffer));
  readableFile.push(null);

  const productLine = readLine.createInterface({
    input: readableFile,
  });

  const covidCases: covidCasesProps[] = [];

  for await (let line of productLine) {
    const convertLineArr = line.split(",");

    covidCases.push({
      location: convertLineArr[0],
      date: convertLineArr[1],
      variant: convertLineArr[2],
      num_sequences: convertLineArr[3],
      perc_sequences: convertLineArr[4],
      num_sequences_total: convertLineArr[5],
    });
  }

  return covidCases;
}
