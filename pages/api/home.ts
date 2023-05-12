// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sendJsonResponse from "pips_shared/dist/functions/send-json-response";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sendJsonResponse(res, 200, "pips template is up");
}
