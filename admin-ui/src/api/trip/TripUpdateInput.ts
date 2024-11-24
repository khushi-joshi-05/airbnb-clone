import { ListingUpdateManyWithoutTripsInput } from "./ListingUpdateManyWithoutTripsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  listing?: ListingUpdateManyWithoutTripsInput;
  tripInfo?: InputJsonValue;
  user?: UserWhereUniqueInput;
};
