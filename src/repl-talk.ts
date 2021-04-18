const replapi = require('replapi-it');


export const getNumberOfUpvotes = async (id: number) => {
  console.log("Testing");
  const post = new replapi.Post(id);
  console.log(post);
  const info = await post.postData();
  console.log("Post info: " + info);
  return info.voteCount;
};
