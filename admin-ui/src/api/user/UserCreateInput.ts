import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { WhishListCreateNestedManyWithoutUsersInput } from "./WhishListCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingWhereUniqueInput | null;
  password: string;
  roles: InputJsonValue;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
  whishLists?: WhishListCreateNestedManyWithoutUsersInput;
};
