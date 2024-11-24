import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WhishListService } from "./whishList.service";
import { WhishListControllerBase } from "./base/whishList.controller.base";

@swagger.ApiTags("whishLists")
@common.Controller("whishLists")
export class WhishListController extends WhishListControllerBase {
  constructor(
    protected readonly service: WhishListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
