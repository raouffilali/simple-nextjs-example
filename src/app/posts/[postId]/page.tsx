import PostDetails from "@/app/components/postDetail";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }: { params: any }) {
  const postId = params.postId;

  return (
    <div className="container mx-auto px-7 mt-10 flex justify-center items-center flex-col ">
      <h1 className="mb-14 text-red-500 text-4xl">Post Details</h1>
      <Suspense fallback={
        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-red-500">Loading...</h1>
        </div>
      
      }>
      <PostDetails params={{ postId }} />
      </Suspense>    
    </div>
  );
}
