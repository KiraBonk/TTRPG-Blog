import { useRouter } from "next/router";

function UniqueCharacterPage() {
  const router = useRouter();

  const characterId = router.query.characterId;

  return (
    <div>
      <h1>this is a characters page</h1>
    </div>
  );
}

export default UniqueCharacterPage;
