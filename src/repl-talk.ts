import axios from "axios";
import cheerio from "cheerio";

export const getNumberOfUpvotes = async (id: number) => {
  let url = `https://replit.com/talk/share/post/${id}`;
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(async response => {
        if(response.status === 200) {
          const html = await response.data;
          const $ = cheerio.load(html);
          const upvotes: number = parseInt($(".jsx-1975752611.vote-control-heavy").children().last().text());
          resolve(upvotes);
        }
      }, (error) => reject(console.log(error)));
  });
};