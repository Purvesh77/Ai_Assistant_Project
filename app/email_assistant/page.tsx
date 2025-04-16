import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { APIKeys } from "@/components/APIKeys"
import { APIUsage } from "@/components/APIUsage"

export default function APIManagementPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">API Management</h1>
      <Tabs defaultValue="keys" className="space-y-4">
        <TabsList>
          <TabsTrigger value="keys">API Keys</TabsTrigger>
          <TabsTrigger value="usage">API Usage</TabsTrigger>
        </TabsList>
        <TabsContent value="keys" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for authentication</CardDescription>
            </CardHeader>
            <CardContent>
              <APIKeys />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Usage</CardTitle>
              <CardDescription>Monitor your API usage and limits</CardDescription>
            </CardHeader>
            <CardContent>
              <APIUsage />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
