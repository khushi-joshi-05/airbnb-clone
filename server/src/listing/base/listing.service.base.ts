/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Listing as PrismaListing,
  WhishList as PrismaWhishList,
  User as PrismaUser,
  Trip as PrismaTrip,
} from "@prisma/client";

export class ListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ListingCountArgs, "select">): Promise<number> {
    return this.prisma.listing.count(args);
  }

  async listings(args: Prisma.ListingFindManyArgs): Promise<PrismaListing[]> {
    return this.prisma.listing.findMany(args);
  }
  async listing(
    args: Prisma.ListingFindUniqueArgs
  ): Promise<PrismaListing | null> {
    return this.prisma.listing.findUnique(args);
  }
  async createListing(args: Prisma.ListingCreateArgs): Promise<PrismaListing> {
    return this.prisma.listing.create(args);
  }
  async updateListing(args: Prisma.ListingUpdateArgs): Promise<PrismaListing> {
    return this.prisma.listing.update(args);
  }
  async deleteListing(args: Prisma.ListingDeleteArgs): Promise<PrismaListing> {
    return this.prisma.listing.delete(args);
  }

  async findWhishLists(
    parentId: string,
    args: Prisma.WhishListFindManyArgs
  ): Promise<PrismaWhishList[]> {
    return this.prisma.listing
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .whishLists(args);
  }

  async getListingCreatedBy(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.listing
      .findUnique({
        where: { id: parentId },
      })
      .listingCreatedBy();
  }

  async getTrip(parentId: string): Promise<PrismaTrip | null> {
    return this.prisma.listing
      .findUnique({
        where: { id: parentId },
      })
      .trip();
  }
}
