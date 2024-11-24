import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhishListServiceBase } from "./base/whishList.service.base";

@Injectable()
export class WhishListService extends WhishListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
