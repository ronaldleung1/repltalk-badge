import { LIGHT, ORANGE, DARK } from "./badges";
import { getNumberOfUpvotes } from "./repl-talk";
import width from "string-pixel-width";

export const getBadge = async (
  id: number,
  type = "light",
  font = "IBM Plex Sans",
  replTalk = "Repl Talk",
  featuredOn = "FEATURED ON"
) => {
  let badge = LIGHT;
  if (type === "orange") badge = ORANGE;
  if (type === "dark") badge = DARK;
  const upvotes = await getNumberOfUpvotes(id);
  const textWidth = width(replTalk, { size: 25 });
  const numberWidth = width(upvotes.toString(), { size: 18 });
  return badge
    .replace(/{WIDTH}/g, (110 + numberWidth + textWidth).toString())
    .replace(/{SHORT_WIDTH}/g, (110 + numberWidth + textWidth - 2).toString())
    .replace(/{NUM_POS}/g, (textWidth + 90).toString())
    .replace(
      /{TRIANGLE_POS}/g,
      (textWidth + 90 + (numberWidth - 19) / 2).toString()
    )
    .replace(/{FONT}/g, font)
    .replace(/{REPL_TALK}/g, replTalk)
    .replace(/{UPVOTES}/g, upvotes.toString())
    .replace(/{FEATURED_ON}/g, featuredOn);
};
