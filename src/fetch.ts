import { ListType, EventType } from "./types";

async function fetchApi(url: string, req: RequestInit) {
  const response = await fetch(process.env.API_URL + url, req);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
}

export async function adminLogin() {
  return await fetchApi("/api/auth/sign-in/email", {
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
  });
}

async function getData(url: string) {
  return await fetchApi(url, { credentials: "include" });
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
  return await getData(url + "?offset=" + offset);
}

export async function getEvents(offset?: number): Promise<ListType<EventType>> {
  return await getList("/events", offset);
}

export async function getEventsById(id: number): Promise<EventType> {
  return await getData("/events/" + id);
}
