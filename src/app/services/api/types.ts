export type SubscribeToEventBody = {
  name: string;
  email: string;
  referrer?: string | null;
};

export type SubscribeToEventResponse = {
  subscriberId: string;
};

export type GetSubscriberInviteClicksResponse = {
  count: number;
};

export type GetRankingPositionResponse = {
  position: number | null;
};

export type GetRanking200RankingItem = {
  id: string;
  name: string;
  score: number;
};

export type GetRankingUrlResponse = {
  ranking: GetRanking200RankingItem[];
};

export type GetSubscriberInviteCountResponse = Pick<GetSubscriberInviteClicksResponse, "count">;
