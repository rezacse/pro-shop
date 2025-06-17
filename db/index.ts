import { PrismaClient } from "@prisma/client";

export const dbContext = new PrismaClient();
