import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";

import { getEventById, getImages, getPlaceById, isAdmin } from "@/src/fetch";
import EventPage from "@/components/EventPage";
import EventForm from "@/components/EventForm";
import { ImageType } from "@/src/types";

export default async function Event({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ edit?: string }>;
}) {
  const { slug } = await params;
  const { edit } = await searchParams;

  const id = Number(slug) ? Number(slug) : undefined;

  if (!id) notFound();

  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();

  const event = await getEventById(id);

  if (event.error) notFound();

  if (edit && edit.toLowerCase() === "true") {
    if (!(await isAdmin(cookieString))) {
      redirect("/login");
    }

    return <EventForm event={event.data} />;
  }

  const place = await getPlaceById(event.data.placeID, cookieString);

  if (place === 401) redirect("/login");
  else if (place.error) notFound();

  const img = await getImages(cookieString);
  console.log(img);

  const imgUrl =
    !img || img.error
      ? undefined
      : img.data?.find((image: ImageType) => image.eventId === event.data.id);

  console.log(imgUrl);

  return <EventPage news={event.data} place={place.data} imgUrl={imgUrl.image} />;
}
