import axios from "axios";
import cheerio from "cheerio";

export const getNumberOfUpvotes = async (id: number) => {
  let url = `https://replit.com/talk/share/post/${id}`;
  return new Promise((resolve, reject) => {
    axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      }
    })
      .then(async response => {
        if(response.status === 200) {
          const html = await response.data;
          const $ = cheerio.load(html);
          const upvotes: number = parseInt($(".vote-control-heavy .vote-control-count").first().text());
          resolve(upvotes);
        }
      }, (error) => reject(console.log(error)));
  });
};