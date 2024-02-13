import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">HELLO 😀</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <p className="mb-12">Click below to see posts</p>
      <Link href="/posts" style={{ borderRadius: '4px', color: 'black', backgroundColor: 'white', padding: '8px 16px', textDecoration: 'none' }}>
        Click here
      </Link>
    </div>
  );
}
