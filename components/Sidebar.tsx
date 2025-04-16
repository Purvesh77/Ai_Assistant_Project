// components/Sidebar.tsx

import Link from "next/link"
import { Home, Code, BarChart2, DollarSign, Users, Settings } from "lucide-react"

const menuItems = [
  { icon: Home, label: "Employee Data Analysis", href: "/" },
  { icon: Code, label: "Email Assistant", href: "/email_assistant" },
  { icon: BarChart2, label: "Planner Assistant", href: "/planner_assistant" },
  { icon: Users, label: "Brainstorming Assistant", href: "/brainstorming_assistant" },
  { icon: Settings, label: "Document Scanner", href: "/document_scanner" },
]

const Sidebar = () => {
  return (
    <div className="bg-secondary w-64 h-full flex flex-col">
      {/* Header Section */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-primary">Corporate Assistant AI</h2>
        <p className="text-sm text-muted-foreground">Your intelligent business companion</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center p-4 hover:bg-primary/10">
                <item.icon className="mr-4" size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar