export default function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  // http://localhost:3000/docs/routing/catchall
  if (slug?.length === 2) {
    return (
      <h1>
        viewing docs for feature {slug[0]} and concept {slug[1]}{" "}
      </h1>
    );
  } else {
    // http://localhost:3000/docs/routing
    if (slug?.length === 1) {
      return <h1>viewing docs for feature {slug[0]} </h1>;
    }
  }
  return <h1>Docs home page</h1>;
}
