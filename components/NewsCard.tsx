import { AuthorType, NewsType } from "@/types";

export default function NewsCard({
  news,
  authors,
}: {
  news: NewsType;
  authors: AuthorType[];
}) {
  const author = authors.find((a) => a.id === news.authorId)!.name;

  return (
    <article>
      <a href={news.slug}>
        <h3>{news.title}</h3>
      </a>
      <p>{news.excerpt}</p>
      <p>{author}</p>
    </article>
  );
}
