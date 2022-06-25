import { Request, Response } from "express";

import { covidCasesProps } from "src/@types/covidCasesTypes";
import Case from "src/models/Case.schema";
import converCsv from "src/utils/convertCsv";

async function CreateCases(req: Request, res: Response) {
  const { buffer } = req.file;

  const casesArr: covidCasesProps[] = await converCsv(buffer);

  try {
    Case.create([...casesArr]);

    return res
      .status(201)
      .json({ msg: "New cases registered successfully" })
      .send();
  } catch (err) {
    throw new Error(`Error when save cases in db: ${err}`);
  }
}

export { CreateCases };
