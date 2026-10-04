"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";
export async function getP2pTransactions() {

    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return [];
    }

    const userId = Number(session.user.id);

   const transactions = await prisma.p2pTransfer.findMany({
    where: {
        OR: [
            { fromUserId: userId },
            { toUserId: userId }
        ]
    },
    include: {
        fromUser: true,
        toUser: true
    },
    orderBy: {
        timestamp: "desc"
    }
});

    return transactions;
}