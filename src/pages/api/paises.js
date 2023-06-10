import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const paises = await prisma.catpais.findMany({
    include: {
      museos: true,
    },
  });
  
  res.status(200).json(paises)
}
