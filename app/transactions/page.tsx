import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionList } from "@/components/TransactionList"
import { TransactionChart } from "@/components/TransactionChart"

export default function TransactionsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Overview of the latest transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionList />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transaction Volume</CardTitle>
            <CardDescription>Daily transaction volume over time</CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
