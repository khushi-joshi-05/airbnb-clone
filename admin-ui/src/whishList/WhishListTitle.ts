import { WhishList as TWhishList } from "../api/whishList/WhishList";

export const WHISHLIST_TITLE_FIELD = "id";

export const WhishListTitle = (record: TWhishList): string => {
  return record.id?.toString() || String(record.id);
};
