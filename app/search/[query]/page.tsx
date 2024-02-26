type SearchProps = {
  params: {
    query: string;
  };
};

export default function Search({ params: { query } }: SearchProps) {
  return <div>Search</div>;
}
