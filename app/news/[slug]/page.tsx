import {
  getAuthorById,
  getAuthors,
  getNewsBySlug,
  reqNews,
} from "@/app/lib/fetch";
import { NewsType } from "@/app/lib/types";
import NewsPage from "@/components/NewsPage";
import NewsForm from "@/components/NewsForm";
import { redirect } from "next/navigation";

async function submit(formData: FormData) {
  "use server";
  const news: NewsType = {
    id: Number(formData.get("id")),
    title: formData.get("title") + "",
    slug: formData.get("slug") + "",
    excerpt: formData.get("excerpt") + "",
    content: formData.get("content") + "",
    published: formData.get("published") == "on",
    authorId: Number(formData.get("authorId")),
  };

  const request = await reqNews("PUT", news);

  if (request && request.ok) {
    redirect(`/news/${news.slug}?edit=false`);
  } else {
    console.error("Villa við uppfærslu");
  }
}

export default async function News({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ edit: string }>;
}) {
  const { slug } = await params;
  const { edit } = await searchParams;

  if (edit && edit.toLowerCase() === "true") {
    const news = await getNewsBySlug(slug);
    const authors = await getAuthors();

    return <NewsForm news={news} submit={submit} authors={authors.data} />;
  } else {
    const news = await getNewsBySlug(slug);
    const author = await getAuthorById(news.authorId);

    return <NewsPage news={news} author={author} />;
  }
}
