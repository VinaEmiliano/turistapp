import { PrismaClient } from "@prisma/client";
import { museos } from "./data/museos";
import { paises } from "./data/paises";

const prisma = new PrismaClient()

const main = async () => {
    try {
        await prisma.catpais.createMany({
            data: paises
        })
        await prisma.promuseo.createMany({
            data: museos
        })
    } catch (error) {
        console.log(error)
    }
}
main()