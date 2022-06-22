import Link from "next/link";
import { useEffect, useState } from "react";
import List from "../../src/components/List/List";

const Dummy_List = [
  {
    id: "t1",
    title: "t1",
    image: "/tinyhead.jpg",
    address: "idc",
    description: "test123456789",
  },
  {
    id: "t2",
    title: "t2",
    image: "/tinyhead.jpg",
    address: "idc2",
    description: "test123456789.0",
  },
];

function CharacterPage() {
  const [loadedCharacters, setLoadedCharacters] = useState<object>([]);

  useEffect(() => {
    setLoadedCharacters(Dummy_List);
  }, []);

  return (
    <div>
      <Link href="/">Home Page</Link>
      <h1>This is the character page</h1>
      <List meetups={loadedCharacters} />
    </div>
  );
}

export default CharacterPage;
