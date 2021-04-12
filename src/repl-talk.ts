const replapi = require('replapi-it');


export const getNumberOfUpvotes = async (id: number) => {
  const post = new replapi.Post(id);
  const info = await post.postData();
  return info.voteCount;
};
