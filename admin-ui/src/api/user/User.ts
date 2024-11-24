import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { WhishList } from "../whishList/WhishList";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Listing | null;
  roles: JsonValue;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
  whishLists?: Array<WhishList>;
};
