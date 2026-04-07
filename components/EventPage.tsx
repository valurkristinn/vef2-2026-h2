import { EventType, PlaceType } from "@/src/types";

export default function EventPage({
  news,
  place,
}: {
  news: EventType;
  place: PlaceType;
}) {
  return (
    <section>
      <h1>{news.title}</h1>
      <h4>{news.description}</h4>
      <p>Staður: {place.address}</p>
      <p>Hafa samband: {place.email}</p>
      <p>{news.soldOut ? "uppselt!" : "ekki uppselt"}</p>
    </section>
  );
}
