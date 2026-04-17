'use client'
import Link from "next/link";

import { EventType } from "@/src/types";
import { useUserContext } from "@/app/Context"

export default function EventCard({ events }: { events: EventType }) {
  const user = useUserContext()
  console.log(user)
  if (!user) return null
  const isAdmin = user.role==="admin"
  
  
  return (
    <article>
      <Link href={"events/" + events.id}>
        <h3>{events.title}</h3>
      </Link>
      <p>{events.description}</p>
   {isAdmin && (
    <Link href={`/events/${events.id}?edit=true`}>
      <button>Edit</button>
    </Link>
  )}
    </article>
  );
}
