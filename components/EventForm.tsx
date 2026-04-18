"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateEvent } from "@/src/fetch";
import { EventType } from "@/src/types";

export default function EventForm({ event }: { event: EventType }) {
  const router = useRouter();

  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [soldOut, setSoldOut] = useState(event.soldOut);
  const [placeID, setPlaceID] = useState(String(event.placeID));
  const [error, setError] = useState("");

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const updatedEvent: EventType = {
      ...event,
      title,
      description,
      soldOut,
      placeID: Number(placeID),
    };

    const response = await updateEvent(updatedEvent);

    if (response?.error) {
      setError("Failed to update event");
      return;
    }

    router.push(`/`);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Edit event</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Place ID"
        value={placeID}
        onChange={(e) => setPlaceID(e.target.value)}
        required
      />

      <label>
        Uppselt?
        <input
          type="checkbox"
          checked={soldOut}
          onChange={(e) => setSoldOut(e.target.checked)}
        />
      </label>

      {error && <p>{error}</p>}

      <button type="submit">Vista</button>
    </form>
  );
}
