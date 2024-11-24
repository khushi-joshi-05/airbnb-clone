/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TripService } from "../trip.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TripCreateInput } from "./TripCreateInput";
import { Trip } from "./Trip";
import { TripFindManyArgs } from "./TripFindManyArgs";
import { TripWhereUniqueInput } from "./TripWhereUniqueInput";
import { TripUpdateInput } from "./TripUpdateInput";
import { ListingFindManyArgs } from "../../listing/base/ListingFindManyArgs";
import { Listing } from "../../listing/base/Listing";
import { ListingWhereUniqueInput } from "../../listing/base/ListingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TripControllerBase {
  constructor(
    protected readonly service: TripService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trip })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTrip(@common.Body() data: TripCreateInput): Promise<Trip> {
    return await this.service.createTrip({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        id: true,
        tripInfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Trip] })
  @ApiNestedQuery(TripFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async trips(@common.Req() request: Request): Promise<Trip[]> {
    const args = plainToClass(TripFindManyArgs, request.query);
    return this.service.trips({
      ...args,
      select: {
        createdAt: true,
        id: true,
        tripInfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async trip(
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Trip | null> {
    const result = await this.service.trip({
      where: params,
      select: {
        createdAt: true,
        id: true,
        tripInfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTrip(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() data: TripUpdateInput
  ): Promise<Trip | null> {
    try {
      return await this.service.updateTrip({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          id: true,
          tripInfo: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTrip(
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Trip | null> {
    try {
      return await this.service.deleteTrip({
        where: params,
        select: {
          createdAt: true,
          id: true,
          tripInfo: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/listing")
  @ApiNestedQuery(ListingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async findListing(
    @common.Req() request: Request,
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Listing[]> {
    const query = plainToClass(ListingFindManyArgs, request.query);
    const results = await this.service.findListing(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        listingCreatedBy: {
          select: {
            id: true,
          },
        },

        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmeneties: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,

        trip: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/listing")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async connectListing(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listing: {
        connect: body,
      },
    };
    await this.service.updateTrip({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/listing")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async updateListing(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listing: {
        set: body,
      },
    };
    await this.service.updateTrip({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/listing")
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  async disconnectListing(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() body: ListingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listing: {
        disconnect: body,
      },
    };
    await this.service.updateTrip({
      where: params,
      data,
      select: { id: true },
    });
  }
}