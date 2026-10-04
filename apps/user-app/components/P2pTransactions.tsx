import { Card } from "@repo/ui/card"

export const P2pTransactions = ({
    transactions,
    userId
}: {
    transactions: {
        id: number
        amount: number
        timestamp: Date
        fromUserId: number
        toUserId: number
        fromUser: {
            name: string | null
        }
        toUser: {
            name: string | null
        }
    }[]
    userId: number
}) => {

    if (!transactions?.length) {
        return (
            <Card title="Recent Transactions">
                <div className="text-center pb-8 pt-8">
                    No Recent transactions
                </div>
            </Card>
        )
    }

    return (
        <Card title="Recent Transactions">
            <div className="pt-2">
                {transactions.map((t) => {

                    const isReceived = t.toUserId === userId

                    return (
                        <div
                            key={t.id}
                            className="flex justify-between py-3"
                        >
                            <div>
                                <div className="text-sm">
                                    {isReceived
                                        ? `Received from ${t.fromUser.name ?? "User"}`
                                        : `Sent to ${t.toUser.name ?? "User"}`
                                    }
                                </div>

                                <div className="text-slate-600 text-xs">
                                    {t.timestamp.toDateString()}
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                {isReceived ? "+" : "-"} Rs {t.amount / 100}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}