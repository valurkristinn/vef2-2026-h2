import { EventType } from "@/src/types";
import EventCard from "./EventCard";

export default function EventList({
  news,
}: {
  news: EventType[];
}) {

  return (
    <section>
    <h1>Fréttir</h1>
      {news.map((n: EventType) => (
          <EventCard events={n} key={n.id} />
      ))}
    </section>
  );
}
