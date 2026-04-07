import Error from "@/components/Error";

import { adminLogin, getEventById, getPlaceById } from "@/src/fetch";
import EventPage from "@/components/EventPage";

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
  searchParams: Promise<{ edit: string }>;
}) {
  const { slug } = await params;
  const { edit } = await searchParams;

  const id = Number(slug) ? Number(slug) : undefined;

  if (!id) {
    return <Error status="404" message="Frétt fannst ekki" />;
  }

  const event = await getEventById(id);

  if (!event) {
    return <Error status="404" message="Frétt fannst ekki" />;
  }

  const login = await adminLogin();

  if (!login) {
    return <Error status="401" message="Þú ert ekki innskráður" />;
  }

  const place = await getPlaceById(event.data.placeID, login);

  if (place.error === "Unauthorized") {
    return <Error status="401" message="Þú ert ekki innskráður" />;
  }

  if (edit && edit.toLowerCase() === "true") {
    // const authors = await getAuthors();
    // if (!authors) {
    //   return <Error status="404" message="Frétt fannst ekki" />;
    // }
    //
    // return <EventForm news={news} submit={submit} authors={authors.data} />;
    return <p>Breyta viðburði</p>;
  } else {
    return <EventPage news={event.data} place={place.data} />;
  }
}
