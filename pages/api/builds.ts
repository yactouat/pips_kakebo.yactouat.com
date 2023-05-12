import deletePrevVercelBuilds from "pips_shared/dist/functions/delete-prev-vercel-builds";
import getVercelBuilds from "pips_shared/dist/functions/get-vercel-builds";
import type { NextApiRequest, NextApiResponse } from "next";
import sendJsonResponse from "pips_shared/dist/functions/send-json-response";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!process.env.BUILDS_TOKEN || !process.env.REPO_NAME) {
    sendJsonResponse(res, 401, "Unauthorized");
    return;
  }
  try {
    // fetching list of deployments
    const vercelDeployments = (await getVercelBuilds()).filter(
      (dep) => dep.meta.githubRepo == process.env.REPO_NAME
    );
    await deletePrevVercelBuilds(vercelDeployments);
    sendJsonResponse(res, 200, "prev deployments deleted");
  } catch (error) {
    sendJsonResponse(res, 500, "something went wrong");
  }
}
