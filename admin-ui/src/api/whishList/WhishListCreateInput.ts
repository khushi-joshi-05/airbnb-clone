import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhishListCreateInput = {
  listing: ListingWhereUniqueInput;
  user: UserWhereUniqueInput;
};
