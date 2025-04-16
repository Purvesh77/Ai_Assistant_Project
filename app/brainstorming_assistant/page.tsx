import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserList } from "@/components/UserList"
import { UserStats } from "@/components/UserStats"

export default function UserManagementPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">User Management</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User List</CardTitle>
            <CardDescription>Manage and view all users</CardDescription>
          </CardHeader>
          <CardContent>
            <UserList />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Statistics</CardTitle>
            <CardDescription>Overview of user growth and activity</CardDescription>
          </CardHeader>
          <CardContent>
            <UserStats />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
