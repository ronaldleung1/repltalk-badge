const ReplAPI = require('replapi-it');
const replapi = ReplAPI();


export const getNumberOfUpvotes = async (id: number) => {
  const post = new replapi.Post(id);
  const info = await post.postDataFull();  
  
  console.log(info);
  return info.voteCount;
};