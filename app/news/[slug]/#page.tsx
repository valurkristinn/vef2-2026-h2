import {
  getAuthorById,
  getAuthors,
  getEventBySlug,
  reqEvent,
} from "@/src/fetch";
import { EventType } from "@/src/types";
import EventPage from "@/components/EventPage";
import EventForm from "@/components/EventForm";
import { redirect } from "next/navigation";
import Error from "@/components/Error";

async function submit(formData: FormData) {
  "use server";
  const news: EventType = {
    id: Number(formData.get("id")),
    title: formData.get("title") + "",
    slug: formData.get("slug") + "",
    excerpt: formData.get("excerpt") + "",
    content: formData.get("content") + "",
    published: formData.get("published") == "on",
    authorId: Number(formData.get("authorId")),
  };

  const request = await reqEvent("PUT", news);

  if (request && request.ok) {
    redirect(`/news/${news.slug}?edit=false`);
  } else {
    const status = request?.status ?? 500;
    let message = "Óþekkt villa";
    if (request instanceof Response) {
      const errorData = await request?.json();
      const errors = JSON.parse(errorData.error.message);
      message = encodeURIComponent(errors[0].message);
    } else {
      message = request.message;
    }
    redirect(`/error?status=${status}&message=${message}`);
  }
}

export default async function Event({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ edit: string }>;
}) {
  const { slug } = await params;
  const { edit } = await searchParams;

  const news = await getEventBySlug(slug);
  if (!news) {
    return <Error status="404" message="Frétt fannst ekki" />;
  }
  if (edit && edit.toLowerCase() === "true") {
    const authors = await getAuthors();
    if (!authors) {
      return <Error status="404" message="Frétt fannst ekki" />;
    }

    return <EventForm news={news} submit={submit} authors={authors.data} />;
  } else {
    const author = await getAuthorById(news.authorId);
    if (!author) {
      return <Error status="404" message="Frétt fannst ekki" />;
    }

    return <EventPage news={news} author={author} />;
  }
}
