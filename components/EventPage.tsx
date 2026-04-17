import { EventType, PlaceType } from "@/src/types";

export default function EventPage({
  news,
  place,
}: {
  news: EventType;
  place: PlaceType;
}) {
  console.log(news);
    const imgUrl = news.images?.[0]?.image
  ? ".." + news.images[0].image
  : null;
    console.log(news.images)
    console.log(imgUrl)
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