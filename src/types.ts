export type EventType = {
  id: number;
  title: string;
  description: string;
  soldOut: boolean;
  placeID: number;
};

export type PlaceType = {
  id: number;
  email: string;
  address: string;
};

export type ListType<T> = {
  data: T[];
  paging: {
    limit: number;
    offset: number;
    count: number;
  };
};
