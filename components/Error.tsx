export default function Error({
  status,
  message,
}: {
  status: string;
  message: string;
}) {
  return (
    <section>
      <h1>{status} Villa</h1>
      <p>{message}</p>
    </section>
  );
}
