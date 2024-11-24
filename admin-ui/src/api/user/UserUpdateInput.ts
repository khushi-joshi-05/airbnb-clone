import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WhishListUpdateManyWithoutUsersInput } from "./WhishListUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingWhereUniqueInput | null;
  password?: string;
  roles?: InputJsonValue;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
  whishLists?: WhishListUpdateManyWithoutUsersInput;
};
