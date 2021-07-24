import { NowRequest, NowResponse } from "@now/node";
import { getBadge } from "../src/badge";

export default async (req: NowRequest, res: NowResponse) => {
  try {
    if (typeof req.query.id !== "string")
      throw new Error("ID should be provided");
    const id = parseInt(req.query.id);
    const style =
      typeof req.query.style === "string" ? req.query.style : undefined;
    const theme =
      typeof req.query.theme === "string" ? req.query.theme : undefined;
    const font =
      typeof req.query.font === "string" ? req.query.font : undefined;
    const border =
      typeof req.query.border === "string" ? req.query.border : undefined;
    const replTalk =
      typeof req.query.replTalk === "string"
        ? req.query.replTalk
        : undefined;
    const featuredOn =
      typeof req.query.featuredOn === "string"
        ? req.query.featuredOn
        : undefined;
    const badge = await getBadge(id, style, theme, border, font, replTalk, featuredOn);
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "max-age=86400");
    return res.send(badge);
  } catch (error) {
    console.log("error: " + error)
    res.status(400);
    res.json({ error });
  }
};
