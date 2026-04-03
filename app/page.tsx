import NewsList from "@/components/NewsList";
import { getEvents } from "@/src/fetch";
import Link from "next/link";
import Error from "@/components/Error";

const MIN_PAGE = 1;

const eventsList = await getEvents();

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const pageNum = parseInt(page) ? parseInt(page) : 0;

  const total = eventsList.paging.total;
  const limit = eventsList.paging.limit;
  const MaxPage = Math.ceil(total / limit);

  const limitedPage = Math.max(Math.min(pageNum, MaxPage), MIN_PAGE);

  const events = await getEvents((limitedPage - 1) * limit);

  if (!events) {
    return <Error status="404" message="Viðburður fannst ekki" />;
  }

  return (
    <>
      <NewsList news={events.data} />
      <div>
        <Link href={`./?page=${limitedPage - 1}`}>←</Link>
        <span>Síða {limitedPage}</span>
        <Link href={`./?page=${limitedPage + 1}`}>→</Link>
      </div>
    </>
  );
}
