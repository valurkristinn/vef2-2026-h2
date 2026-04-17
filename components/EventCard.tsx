import Link from "next/link";

import { EventType } from "@/src/types";

export default function EventCard({ events }: { events: EventType }) {
  return (
    <article>
      <Link href={"events/" + events.id}>
        <h3>{events.title}</h3>
      </Link>
      <p>{events.description}</p>
      <button>
        <Link href={`/events/${events.id}?edit=true`}>
          <p>Edit</p>
        </Link>
      </button>
    </article>
  );
}
