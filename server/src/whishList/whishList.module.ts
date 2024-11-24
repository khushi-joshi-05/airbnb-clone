import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WhishListModuleBase } from "./base/whishList.module.base";
import { WhishListService } from "./whishList.service";
import { WhishListController } from "./whishList.controller";
import { WhishListResolver } from "./whishList.resolver";

@Module({
  imports: [WhishListModuleBase, forwardRef(() => AuthModule)],
  controllers: [WhishListController],
  providers: [WhishListService, WhishListResolver],
  exports: [WhishListService],
})
export class WhishListModule {}
