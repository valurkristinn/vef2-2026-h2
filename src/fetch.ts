import { EventType } from "./types";

async function fetchApi(url: string, req: RequestInit) {
  const response = await fetch(process.env.API_URL + url, req);

  console.log("fetchResult:", response);
  return response.json();
}

export async function adminLogin() {
  const response = await fetch(
    process.env.API_URL + "/api/auth/sign-in/email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: process.env.API_URL + "",
      },
      credentials: "include",
      body: JSON.stringify({
        email: "admin@example.org",
        password: "admin12345",
      }),
    },
  );

  return response.headers.get("set-cookie");
}

async function getData(url: string, cookie: string) {
  return await fetchApi(url, { headers: { Cookie: cookie } });
}

export async function createEvent(body: EventType) {
  return await fetchApi("/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });
}

export async function updateEvent(body: EventType) {
  return await fetchApi("/events/" + body.id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });
}

async function getList(url: string, offset?: number) {
  if (!offset) {
    offset = 0;
  }
  return await getData(url + "?offset=" + offset, "");
}

export async function getEvents(offset?: number) {
  return await getList("/events", offset);
}

export async function getEventById(id: number) {
  return await getData("/events/" + id, "");
}

export async function getPlaceById(id: number, cookie: string) {
  return await getData("/place/" + id, cookie);
}
