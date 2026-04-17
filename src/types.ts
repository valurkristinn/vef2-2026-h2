export type EventType = {
  id: number;
  title: string;
  image:Image;
  description: string;
  soldOut: boolean;
  placeID: number;
};

type Image={
  eventId:number;
  image:string
}

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
