import { WhishListWhereInput } from "./WhishListWhereInput";
import { WhishListOrderByInput } from "./WhishListOrderByInput";

export type WhishListFindManyArgs = {
  where?: WhishListWhereInput;
  orderBy?: Array<WhishListOrderByInput>;
  skip?: number;
  take?: number;
};
