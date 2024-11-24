import { SortOrder } from "../../util/SortOrder";

export type WhishListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
