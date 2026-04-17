import { EventType, PlaceType } from "@/src/types";

export default function EventPage({
  news,
  place,
}: {
  news: EventType;
  place: PlaceType;
}) {
    const imgUrl=".."+news.image.image
  return (
    <section>
      <h1>{news.title}</h1>
      <img src={imgUrl}></img>
      <h4>{news.description}</h4>
      <p>Staður: {place.address}</p>
      <p>Hafa samband: {place.email}</p>
      <p>{news.soldOut ? "uppselt!" : "ekki uppselt"}</p>
    </section>
  );
}