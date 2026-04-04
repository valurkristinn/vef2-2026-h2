import { EventType } from "@/src/types";

export default function EventPage({ news }: { news: EventType }) {
  return (
    <section>
      <h1>{news.title}</h1>
      <h4>{news.description}</h4>
      <p>Staður: {news.placeID}</p>
      <p>Er uppselt?: {news.soldOut}</p>
    </section>
  );
}
