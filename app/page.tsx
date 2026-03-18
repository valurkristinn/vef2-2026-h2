import NewsList from "@/components/NewsList";
import { AuthorType, ListType, NewsType } from "@/types";

async function getData(url: string, offset?: number, limit?: number) {
  try {
    if (!offset) {
      offset = 0;
    }
    if (!limit) {
      limit = 10;
    }
    const response = await fetch(
      process.env.API_URL + url + "?offset=" + offset + "&limit=" + limit,
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Óþekkt villa:", error);
    }
  }
}

const newsList: ListType<NewsType> = await getData("/news");
const authorList: ListType<AuthorType> = await getData("/authors");

export default function Home() {
  return <NewsList news={newsList.data} authors={authorList.data} />;
}
