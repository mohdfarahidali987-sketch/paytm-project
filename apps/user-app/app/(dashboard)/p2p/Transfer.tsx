import { P2pTransactions } from "../../../components/P2pTransactions";
import { SendCard } from "../../../components/SendCard";

export function Transfer({
    transactions,
    userId
}: {
    transactions: any;
    userId: number;
}) {
    return (
        <div className="w-full">
            <SendCard />

            <P2pTransactions
                transactions={transactions}
                userId={userId}
            />
        </div>
    );
}