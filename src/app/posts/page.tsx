import Link from "next/link";

export default async function PostsPages() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  const postJSx = posts.map((post: any) => {
    return (
      <Link style={{
        width: "70%",
        padding: "20px",
        margin: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        color: "black",
        backgroundColor: "white",


      }}
        href={`/posts/${post.id}`}
        key={post.id}
      >
        <h1 className="text-2xl text-pink-500">{post.title}</h1>
        <p className="pb-4">{post.body}</p>
        <hr className=" bg-green-700" />
      </Link>
    );
  });

  return (
    <div>
      <h1 className="text-4xl text-red-700">Posts</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>{postJSx}</div>
    </div>
  );
}
