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
  Trip as PrismaTrip,
  Listing as PrismaListing,
  User as PrismaUser,
} from "@prisma/client";

export class TripServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TripCountArgs, "select">): Promise<number> {
    return this.prisma.trip.count(args);
  }

  async trips(args: Prisma.TripFindManyArgs): Promise<PrismaTrip[]> {
    return this.prisma.trip.findMany(args);
  }
  async trip(args: Prisma.TripFindUniqueArgs): Promise<PrismaTrip | null> {
    return this.prisma.trip.findUnique(args);
  }
  async createTrip(args: Prisma.TripCreateArgs): Promise<PrismaTrip> {
    return this.prisma.trip.create(args);
  }
  async updateTrip(args: Prisma.TripUpdateArgs): Promise<PrismaTrip> {
    return this.prisma.trip.update(args);
  }
  async deleteTrip(args: Prisma.TripDeleteArgs): Promise<PrismaTrip> {
    return this.prisma.trip.delete(args);
  }

  async findListing(
    parentId: string,
    args: Prisma.ListingFindManyArgs
  ): Promise<PrismaListing[]> {
    return this.prisma.trip
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .listing(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.trip
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}