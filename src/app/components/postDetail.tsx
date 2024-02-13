
export default async function PostDetails({ params }: { params: any }) {
  const postId = params.postId;

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <div >
      <div className="flex flex-col justify-center items-center bg-white text-black ">
        <h1 className="text-2xl text-pink-500">{post.title}</h1>
        <p className="pb-4">{post.body}</p>
        <hr className=" bg-green-700" />
      </div>
    </div>
  );
}
