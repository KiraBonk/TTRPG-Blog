import { useRouter } from "next/router";

function UniqueArtifactPage() {
  const router = useRouter();

  const characterId = router.query.characterId;

  return (
    <div>
      <h1>this is an artifacts page</h1>
    </div>
  );
}

export default UniqueArtifactPage;