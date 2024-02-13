import Image from "next/image";

export default function Home() {
  return (
<div className="h1">
    <h1>Home</h1>
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      width={72}
      height={16}
    />
    <p>Welcome to the home page!</p>
</div>
  );
}
