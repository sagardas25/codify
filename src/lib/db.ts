// sets up a singleton instance of PrismaClient for database access


import { PrismaClient } from "@prisma/client";


// create a global variable to hold the PrismaClient instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// if the global variable doesn't exist, create a new PrismaClient instance
// otherwise, use the existing instance to avoid multiple instances in development
// this is important for avoiding exhausting database connections in development
export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
