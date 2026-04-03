import { EventType } from "@/src/types";
import NewsCard from "./NewsCard";

export default function NewsList({
  news,
}: {
  news: EventType[];
}) {
  return (
    <section>
    <h1>Fréttir</h1>
      {news.map((n: EventType) => (
          <NewsCard events={n} key={n.id} />
      ))}
    </section>
  );
}
