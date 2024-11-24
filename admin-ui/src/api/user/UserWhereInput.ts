import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WhishListListRelationFilter } from "../whishList/WhishListListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingWhereUniqueInput;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  whishLists?: WhishListListRelationFilter;
};
