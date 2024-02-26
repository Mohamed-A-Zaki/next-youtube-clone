type VideoDetailsProps = {
  params: {
    id: string;
  };
};

export default function VideoDetails({ params: { id } }: VideoDetailsProps) {
  return <div>VideoDetails page</div>;
}
