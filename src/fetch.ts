import { EventType } from "./types";

const BASE_URL = process.env.API_URL || "http://localhost:4000";

async function fetchApi(url: string, req: RequestInit) {
  const response = await fetch(BASE_URL + url, req);

  console.log("fetchResult:", response);

  const json = await response.text();

  if (!json) {
    console.error("");
    return null;
  }

  try {
    return JSON.parse(json);
  } catch (error) {
    console.error("Invalid JSON response:", json);
    throw error;
  }
}

export async function login(credentials: { email: string; password: string }) {
  const response = await fetch(BASE_URL + "/api/auth/sign-in/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    return { error: "login failure" };
  }

  return { success: "login success" };
}

export async function signup(credentials: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await fetch(BASE_URL + "/api/auth/sign-up/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    return { error: "signup failure" };
  }

  return { success: "signup success" };
}

export async function getData(url: string, cookie: string) {
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
