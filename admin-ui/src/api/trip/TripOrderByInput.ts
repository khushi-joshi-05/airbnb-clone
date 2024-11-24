import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tripInfo?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
