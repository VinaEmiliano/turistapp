import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const museos = await prisma.promuseo.findMany();
  
  res.status(200).json(museos)
}
