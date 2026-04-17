import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";

import { getEventById, getPlaceById, getData, updateEvent } from "@/src/fetch";
import EventPage from "@/components/EventPage";
import EventForm from "@/components/EventForm";

// import { EventType } from "@/src/types";
// import EventForm from "@/components/EventForm";
// import { redirect } from "next/navigation";
//
// async function submit(formData: FormData) {
//   breyta frétt úr gamla
//
//   "use server";
//   const news: EventType = {
//     id: Number(formData.get("id")),
//     title: formData.get("title") + "",
//     slug: formData.get("slug") + "",
//     excerpt: formData.get("excerpt") + "",
//     content: formData.get("content") + "",
//     published: formData.get("published") == "on",
//     authorId: Number(formData.get("authorId")),
//   };
//
//   const request = await reqEvent("PUT", news);
//
//   if (request && request.ok) {
//     redirect(`/news/${news.slug}?edit=false`);
//   } else {
//     const status = request?.status ?? 500;
//     let message = "Óþekkt villa";
//     if (request instanceof Response) {
//       const errorData = await request?.json();
//       const errors = JSON.parse(errorData.error.message);
//       message = encodeURIComponent(errors[0].message);
//     } else {
//       message = request.message;
//     }
//     redirect(`/error?status=${status}&message=${message}`);
//   }
// }

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

  const event = await getEventById(id);

  if (event.error) notFound();

  if (edit && edit.toLowerCase() === "true") {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const session = await getData("/api/auth/session", cookieHeader);
    console.log("session user", session);
    console.log("user's role", session?.user.role);

    // TODO
    // if (!session?.user || session.user.role !== "ADMIN") {
    //   redirect("/login");
    // }

    return <EventForm event={event.data} />;
  }

  const place = await getPlaceById(event.data.placeID, "");

  if (place.error) notFound();

  return <EventPage news={event.data} place={place.data} />;
}
