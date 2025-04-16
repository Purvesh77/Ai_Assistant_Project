"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import Chat from "../chat";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const PlannerDashboard = () => {
  const [showTable, setShowTable] = useState(false);

  const tableData = [
    {
      employee_id: "1001",
      name: "John Smith",
      email: "johnsmith@company.com",
      department: "Engineering",
      position: "Senior Developer",
      manager: "Sarah Johnson",
    },
    {
      employee_id: "1002",
      name: "Emily Brown",
      email: "emilybrown@company.com",
      department: "Engineering",
      position: "Junior Developer",
      manager: "John Smith",
    },
    {
      employee_id: "1003",
      name: "Michael Davis",
      email: "michaeldavis@company.com",
      department: "Engineering",
      position: "DevOps Engineer",
      manager: "Sarah Johnson",
    },
    {
      employee_id: "1004",
      name: "Sarah Johnson",
      email: "sarahjohnson@company.com",
      department: "Engineering",
      position: "Engineering Manager",
      manager: "David Wilson",
    },
    {
      employee_id: "1005",
      name: "Robert Taylor",
      email: "roberttaylor@company.com",
      department: "Product",
      position: "Product Manager",
      manager: "David Wilson",
    },
    {
      employee_id: "1006",
      name: "Jessica Lee",
      email: "jessicalee@company.com",
      department: "Product",
      position: "UX Designer",
      manager: "Robert Taylor",
    },
    {
      employee_id: "1007",
      name: "David Wilson",
      email: "davidwilson@company.com",
      department: "Executive",
      position: "CTO",
      manager: "Mary Anderson",
    },
    {
      employee_id: "1008",
      name: "Amanda Martin",
      email: "amandamartin@company.com",
      department: "Marketing",
      position: "Marketing Specialist",
      manager: "Thomas Wright",
    },
    {
      employee_id: "1009",
      name: "James Thompson",
      email: "jamesthompson@company.com",
      department: "Marketing",
      position: "Content Writer",
      manager: "Thomas Wright",
    },
    {
      employee_id: "1010",
      name: "Thomas Wright",
      email: "thomaswright@company.com",
      department: "Marketing",
      position: "Marketing Director",
      manager: "Mary Anderson",
    },
  ];

  return (
    <div className="space-y-4 p-4">
      <section>
        <h1 className="text-3xl font-bold">Email Assistant</h1>
        <p className="text-gray-500">
        Compose and send emails to your team members with AI assistance
        </p>
      </section>

      <div className="flex flex-wrap gap-8">
        <div className="w-full">
          <button
            onClick={() => setShowTable(!showTable)}
            className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <h3 className="font-semibold">
              📋 Preview Employee Email Data
            </h3>
            <svg
              className={`w-5 h-5 transition-transform ${
                showTable ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showTable && (
            <div className="mt-2 border rounded-lg p-4 shadow-sm overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    {[
                      "",
                      "employee_id",
                      "name",
                      "email",
                      "department",
                      "position",
                      "manager"
                    ].map((head) => (
                      <th key={head} className="py-2 px-2">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-2">{index}</td>
                      <td className="py-2 px-2">{item.employee_id}</td>
                      <td className="py-2 px-2">{item.name}</td>
                      <td className="py-2 px-2">{item.email}</td>
                      <td className="py-2 px-2">{item.department}</td>
                      <td className="py-2 px-2">{item.position}</td>
                      <td className="py-2 px-2">{item.manager}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 bg-blue-50 p-4 rounded-lg mx-auto">
          <h3 className="text-blue-700 font-semibold">
            📌 Send emails to your team
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>Send an email to John Smith about the upcoming project meeting</li>
            <li>Draft a reminder to the development team about the deadline</li>
            <li>Write an email to Sarah in Engineering about the API issue</li>
          </ul>
        </div>
      </div>

      <section className="mt-10">
        <section className="mt-10">
          {/* Chat Section */}
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            💬 Conversation
            <span className="text-sm text-gray-500">
            Compose your email request
            </span>
          </h3>
        </section>
        <Chat/>
      </section>
    </div>
  );
};

export default PlannerDashboard;