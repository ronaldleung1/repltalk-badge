// import axios from "axios";
const replapi = require('replapi-it');


export const getNumberOfUpvotes = async (id: number) => {
  /*const apiResponse = await axios.get<{
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: "story" | "comment";
    url: string;
  }>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return apiResponse.data.score;*/
  const post = new replapi.Post(id);
  const info = await post.postData();
  return info.voteCount;
};
