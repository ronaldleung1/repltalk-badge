import ReplAPI from 'replapi-it'


const replapi = ReplAPI({
  username: 'RonaldLeung1',
});

const myTestClass = new replapi.User('RonaldLeung1');

async function myTestFunction() {
  const info = await myTestClass.userGraphQLDataFull();
  console.log(info);
}
myTestFunction();
/*export const getNumberOfUpvotes = async (id: number) => {
  console.log("Testing");
  const post = new replapi.Post(id);
  console.log(post);
  const info = await post.postData();
  console.log("Post info: " + info);
  return info.voteCount;
};*/