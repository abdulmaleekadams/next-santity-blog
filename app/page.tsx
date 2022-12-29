export default function Page() {
  return (
    <div>
      <h1 className="text-4xl">Welcome to the Blog</h1>
      <p>Some Contact</p>
      <p>{process.env.NEXT_PUBLIC_SANITY_DATASET}</p>
    </div>
  );
}
