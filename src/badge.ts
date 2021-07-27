import { FLAT_LIGHT, FLAT_DARK, GRAD_LIGHT, GRAD_DARK } from "./badge-styles";
import { getNumberOfUpvotes } from "./repl-talk";
import width from "string-pixel-width";

export const getBadge = async (
  id: number,
  style = "flat",
  theme = "light",
  border = "rounded",
  font = "IBM Plex Sans",
  replTalk = "Repl Talk",
  featuredOn = "FEATURED ON"
) => {
  let badge = FLAT_LIGHT;
  if (style === "flat" && theme === "dark") badge = FLAT_DARK;
  if (style === "gradient" && theme === "light") badge = GRAD_LIGHT;
  if (style === "gradient" && theme === "dark") badge = GRAD_DARK;
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
    .replace(/{BORDER_RADIUS}/g, (border === "rounded" ? 8 : 0).toString())
    .replace(/{FONT}/g, font)
    .replace(/{REPL_TALK}/g, replTalk)
    .replace(/{UPVOTES}/g, upvotes.toString())
    .replace(/{FEATURED_ON}/g, featuredOn);
};
