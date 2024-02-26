type ChannelDetailsProps = {
  params: {
    id: string;
  };
};

export default function ChannelDetails({
  params: { id },
}: ChannelDetailsProps) {
  return <div>ChannelDetails page</div>;
}
