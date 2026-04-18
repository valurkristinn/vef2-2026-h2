import { EventType } from "@/src/types";
import EventCard from "./EventCard";

export default function EventList({
  news,
  showAdmin,
}: {
  news: EventType[];
  showAdmin: boolean;
}) {
  return (
    <section>
      <h2>Viðburðir</h2>
      {news.map((n: EventType) => (
        <EventCard events={n} showAdmin={showAdmin} key={n.id} />
      ))}
    </section>
  );
}
