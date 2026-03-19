import Error from "@/components/Error";

export default async function ErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ status: string; message: string }>;
}) {
  const { status, message } = await searchParams;
  return <Error status={status} message={message} />;
}
