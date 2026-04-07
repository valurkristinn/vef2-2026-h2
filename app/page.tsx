import EventList from "@/components/EventList";
import { getEvents } from "@/src/fetch";
import Link from "next/link";
import { notFound } from "next/navigation";

const MIN_PAGE = 1;

const eventsList = await getEvents();

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const pageNum = parseInt(page) ? parseInt(page) : 0;

  const count = eventsList.paging.count;
  const limit = eventsList.paging.limit;
  const maxPage = Math.ceil(count / limit);

  const limitedPage = Math.max(Math.min(pageNum, maxPage), MIN_PAGE);

  const events = await getEvents((limitedPage - 1) * limit);

  if (!events) notFound();

  return (
    <>
      <EventList news={events.data} />
      <div>
        <Link href={`./?page=${limitedPage - 1}`}>←</Link>
        <span>Síða {limitedPage}</span>
        <Link href={`./?page=${limitedPage + 1}`}>→</Link>
      </div>
    </>
  );
}
