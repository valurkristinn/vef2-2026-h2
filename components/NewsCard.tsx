import Link from "next/link";

import { EventType } from "@/src/types";

export default function NewsCard({ events }: { events: EventType }) {
  return (
    <article>
      <Link href={"events/" + events.id}>
        <h3>{events.title}</h3>
      </Link>
      <p>{events.description}</p>
    </article>
  );
}
