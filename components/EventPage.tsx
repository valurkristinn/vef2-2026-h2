import { EventType, PlaceType } from "@/src/types";
import Image from "next/image";

export default function EventPage({
  news,
  place,
}: {
  news: EventType;
  place: PlaceType;
}) {

    const imgUrl = news.images?.[0]?.image
  ? ".." + news.images[0].image
  : "";
  return (
    <section>
      <h1>{news.title}</h1>
      <Image src={imgUrl} alt="eventimg"></Image>
      <h4>{news.description}</h4>
      <p>Staður: {place.address}</p>
      <p>Hafa samband: {place.email}</p>
      <p>{news.soldOut ? "uppselt!" : "ekki uppselt"}</p>
    </section>
  );
}