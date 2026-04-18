export type EventType = {
  id: number;
  title: string;
  images:Image[];
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

export type ImageType = {
  id: number;
  image: string;
  createdAt: string;
  eventId: number
};

export type ListType<T> = {
  data: T[];
  paging: {
    limit: number;
    offset: number;
    count: number;
  };
};
