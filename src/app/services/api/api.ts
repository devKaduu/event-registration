import {
  GetRankingPositionResponse,
  GetRankingUrlResponse,
  GetSubscriberInviteClicksResponse,
  GetSubscriberInviteCountResponse,
  SubscribeToEventBody,
  SubscribeToEventResponse,
} from "./types";

export async function subscribeToEvent(subscribeToEventBody: SubscribeToEventBody, options?: RequestInit): Promise<SubscribeToEventResponse> {
  const response = await fetch("http://localhost:3333/subscriptions", {
    ...options,
    method: "POST",
    headers: { "content-type": "application/json", ...options?.headers },
    body: JSON.stringify(subscribeToEventBody),
  });

  const body = [204, 205, 304].includes(response.status) ? null : await response.text();
  const data: SubscribeToEventResponse = body ? JSON.parse(body) : {};

  return data;
}

export async function getSubscriberInviteClicks(subscriberId: string, options?: RequestInit): Promise<GetSubscriberInviteClicksResponse> {
  const response = await fetch(`http://localhost:3333/subscribers/${subscriberId}/ranking/clicks`, {
    ...options,
    method: "GET",
  });

  const body = [204, 205, 304].includes(response.status) ? null : await response.text();
  const data: GetSubscriberInviteClicksResponse = body ? JSON.parse(body) : {};

  return data;
}

export async function getSubscriberInviteCount(subscriberId: string, options?: RequestInit): Promise<GetSubscriberInviteCountResponse> {
  const response = await fetch(`http://localhost:3333/subscribers/${subscriberId}/ranking/count`, {
    ...options,
    method: "GET",
  });

  const body = [204, 205, 304].includes(response.status) ? null : await response.text();
  const data: GetSubscriberInviteCountResponse = body ? JSON.parse(body) : {};

  return data;
}

export async function getSubscriberRankingPosition(subscriberId: string, options?: RequestInit): Promise<GetRankingPositionResponse> {
  const response = await fetch(`http://localhost:3333/subscribers/${subscriberId}/ranking/position`, {
    ...options,
    method: "GET",
  });

  const body = [204, 205, 304].includes(response.status) ? null : await response.text();
  const data: GetRankingPositionResponse = body ? JSON.parse(body) : {};

  return data;
}

export async function getRankingUrl(options?: RequestInit): Promise<GetRankingUrlResponse> {
  const response = await fetch(`http://localhost:3333/ranking`, {
    ...options,
    method: "GET",
  });

  const body = [204, 205, 304].includes(response.status) ? null : await response.text();
  const data: GetRankingUrlResponse = body ? JSON.parse(body) : {};

  return data;
}
