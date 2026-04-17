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
      <div>
      <h2>Eventsíða</h2>
      <p>Þetta er síða sem inniheldur lista af events hægt er að breyta þeim ef loggað er inn sem admin.
        Hægt er að búa til aðgang og skrá sig inn til að skoða event meira
      </p>
      <img src="https://images.unsplash.com/photo-1772289935247-2de4bcacd7b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="Fjöll"></img>
       <img src="https://images.unsplash.com/photo-1773236759289-251d9687b6e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blóm"></img>
      </div>
      <EventList news={events.data} />
      <div>
        <Link href={`./?page=${limitedPage - 1}`}>←</Link>
        <span>Síða {limitedPage}</span>
        <Link href={`./?page=${limitedPage + 1}`}>→</Link>
      </div>
    </>
  );
}
