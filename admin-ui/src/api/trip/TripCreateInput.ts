import { ListingCreateNestedManyWithoutTripsInput } from "./ListingCreateNestedManyWithoutTripsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  listing?: ListingCreateNestedManyWithoutTripsInput;
  tripInfo: InputJsonValue;
  user: UserWhereUniqueInput;
};
