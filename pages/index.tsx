import Link from "next/link";

function Home() {
  return (
    <div>
      <Link href='/characters'>Character Page</Link> <br />
      <Link href='/artifacts'>Artifact Page</Link>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;
