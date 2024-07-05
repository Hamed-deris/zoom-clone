export default function Meeting({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      Meeting
      <div>{id}</div>
    </div>
  );
}
