import { EventType, PlaceType } from "@/src/types";
import Image from "next/image";

export default function EventPage({
  news,
  place,
  imgUrl,
}: {
  news: EventType;
  place: PlaceType;
  imgUrl: string;
}) {
  return (
    <section>
      <h1>{news.title}</h1>
      {imgUrl && (
        <div className="img-container">
          <Image src={imgUrl} alt="eventimg" fill></Image>
        </div>
      )}
      <h4>{news.description}</h4>
      <p>Staður: {place.address}</p>
      <p>Hafa samband: {place.email}</p>
      <p>{news.soldOut ? "uppselt!" : "ekki uppselt"}</p>
    </section>
  );
}
