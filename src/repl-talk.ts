import axios from "axios";
import cheerio from "cheerio";

export const getNumberOfUpvotes = async (id: string) => {
  let url = `https://replit.com/talk/share/${id}`;
  console.log("Test");
  axios.get('https://replit.com/talk/share/Replit-Logo-Made-out-of-Repliters/142833')
    .then(async response => {
      console.log(response.status);
      if(response.status === 200) {
        const html = await response.data;
        const $ = cheerio.load(html);
        return parseInt($("jsx-1975752611.vote-control-heavy").children().next().text());
      }
    }, (error) => console.log(error));
  return 0;
};