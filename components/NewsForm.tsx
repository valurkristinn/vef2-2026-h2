import { AuthorType, NewsType } from "@/app/lib/types";

export default function NewsForm({
  news,
  submit,
  authors,
}: {
  news: NewsType | undefined;
  submit: string | ((formData: FormData) => void | Promise<void>) | undefined;
  authors: AuthorType[];
}) {
  if (!news) {
    news = {
      id: 0,
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      published: false,
      authorId: 0,
    };
  }
  return (
    <section>
      <form action={submit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          defaultValue={news.title}
          placeholder="News Title"
        />

        <textarea
          name="excerpt"
          defaultValue={news.excerpt}
          placeholder="Excerpt"
        />

        <textarea
          name="content"
          defaultValue={news.content}
          placeholder="Full Content"
          rows={5}
        />

        <input
          type="checkbox"
          name="published"
          defaultValue={news.published + ""}
        />

        <select name="authorId" defaultValue={news.authorId}>
          {authors.map((a) => (
            <option value={a.id} key={a.id} >
              {a.name}
            </option>
          ))}
        </select>

        <input type="hidden" name="slug" value={news.slug} />

        <button type="submit">Vista</button>
      </form>
    </section>
  );
}
