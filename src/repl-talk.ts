import ReplAPI from 'replapi-it'
const replapi = ReplAPI();

/*async function myTestFunction() {
  const info = await myTestClass.userGraphQLDataFull();
  console.log(info);
}
myTestFunction();*/
export const getNumberOfUpvotes = async (id: number) => {
  const post = new replapi.Post(id);
  const info = await post.postDataAbridged();
  //console.log("Testing");
  
  console.log(info);
  return info.voteCount;
};