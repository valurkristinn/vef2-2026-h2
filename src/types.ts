export type EventType = {
  id: number;
  title: string;
  description: string;
  soldOut: boolean;
  placeID: number;
};

export type ListType<T> = {
  data: T[];
  paging: {
    limit: number;
    offset: number;
    count: number;
  };
};
