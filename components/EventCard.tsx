import Link from "next/link";

import { EventType } from "@/src/types";

export default function EventCard({
  events,
  showAdmin,
}: {
  events: EventType;
  showAdmin: boolean;
}) {
  return (
    <article>
      <Link href={"events/" + events.id}>
        <h3>{events.title}</h3>
      </Link>
      <p>{events.description}</p>

      {showAdmin && <Link href={`/events/${events.id}?edit=true`}>Edit</Link>}
    </article>
  );
}
