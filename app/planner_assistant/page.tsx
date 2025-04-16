"use client";
import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
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
import Chat from "./chat";
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
      event_id: "2001",
      type: "meeting",
      title: "Weekly Team Standup",
      description: "Regular team update meeting",
      date: "2025-02-24",
      time: "09:00",
      duration: "30",
      participants: "John Smith, Emily Brown, Michael Davis, Sarah Johnson",
      status: "scheduled",
      priority: "medium",
      assigned_to: "Sarah Johnson",
    },
    {
      event_id: "2002",
      type: "meeting",
      title: "Product Review",
      description: "Review new product features",
      date: "2025-02-25",
      time: "14:00",
      duration: "60",
      participants: "Robert Taylor, Jessica Lee, Sarah Johnson, David Wilson",
      status: "scheduled",
      priority: "high",
      assigned_to: "Robert Taylor",
    },
    {
      event_id: "2003",
      type: "task",
      title: "Debug API Issue",
      description: "Fix authentication bug in API endpoint",
      date: "2025-02-26",
      time: "10:00",
      duration: "240",
      participants: "None",
      status: "in_progress",
      priority: "high",
      assigned_to: "Emily Brown",
    },
    {
      event_id: "2004",
      type: "task",
      title: "Update Documentation",
      description: "Update API documentation for v.0",
      date: "2025-02-27",
      time: "13:00",
      duration: "180",
      participants: "None",
      status: "pending",
      priority: "medium",
      assigned_to: "Michael Davis",
    },
    {
      event_id: "2005",
      type: "meeting",
      title: "Client Presentation",
      description: "Present new features to client",
      date: "2025-02-27",
      time: "15:00",
      duration: "90",
      participants: "David Wilson, Robert Taylor, Thomas Wright",
      status: "scheduled",
      priority: "high",
      assigned_to: "David Wilson",
    },
    {
      event_id: "2006",
      type: "task",
      title: "Code Review",
      description: "Review pull requests from dev team",
      date: "2025-02-28",
      time: "09:30",
      duration: "120",
      participants: "None",
      status: "pending",
      priority: "medium",
      assigned_to: "John Smith",
    },
    {
      event_id: "2007",
      type: "meeting",
      title: "Marketing Strategy",
      description: "Discuss Q2 marketing strategy",
      date: "2025-03-01",
      time: "11:00",
      duration: "60",
      participants: "Thomas Wright, Amanda Martin, James Thompson, Mary An",
      status: "scheduled",
      priority: "medium",
      assigned_to: "Thomas Wright",
    },
    {
      event_id: "2008",
      type: "task",
      title: "Expense Reports",
      description: "Submit monthly expense reports",
      date: "2025-03-01",
      time: "14:00",
      duration: "60",
      participants: "None",
      status: "pending",
      priority: "low",
      assigned_to: "All Employees",
    },
    {
      event_id: "2009",
      type: "meeting",
      title: "Board Meeting",
      description: "Monthly board meeting",
      date: "2025-03-02",
      time: "09:00",
      duration: "120",
      participants: "Mary Anderson, David Wilson, Kevin Miller, Patricia Clark",
      status: "scheduled",
      priority: "high",
      assigned_to: "Mary Anderson",
    },
    {
      event_id: "2010",
      type: "meeting",
      title: "Board Meeting",
      description: "Monthly board meeting",
      date: "2025-03-02",
      time: "09:00",
      duration: "150",
      participants: "Mary Anderson, David Wilson, Patricia Clark",
      status: "scheduled",
      priority: "high",
      assigned_to: "David Wilson",
    },
  ];

  const eventTypeData = {
    labels: ["Task", "Meeting"],
    datasets: [
      {
        data: [
          tableData.filter((item) => item.type === "task").length,
          tableData.filter((item) => item.type === "meeting").length,
        ],
        backgroundColor: ["#FBBF24", "#3B82F6"],
      },
    ],
  };

  const statusCounts = ["scheduled", "pending", "in_progress"].map(
    (status) => tableData.filter((item) => item.status === status).length
  );

  const statusData = {
    labels: ["Scheduled", "Pending", "In Progress"],
    datasets: [
      {
        label: "Status",
        data: statusCounts,
        backgroundColor: ["#8B5CF6", "#10B981", "#3B82F6"],
      },
    ],
  };

  const assignedNames = Array.from(
    new Set(tableData.map((item) => item.assigned_to))
  );

  const assignedMeetings = assignedNames.map(
    (name) =>
      tableData.filter(
        (item) => item.assigned_to === name && item.type === "meeting"
      ).length
  );

  const assignedTasks = assignedNames.map(
    (name) =>
      tableData.filter(
        (item) => item.assigned_to === name && item.type === "task"
      ).length
  );

  const assignedEventsData = {
    labels: assignedNames,
    datasets: [
      {
        label: "Meeting",
        data: assignedMeetings,
        backgroundColor: "#3B82F6",
      },
      {
        label: "Task",
        data: assignedTasks,
        backgroundColor: "#FBBF24",
      },
    ],
  };

  return (
    <div className="space-y-4 p-4">
      <section>
        <h1 className="text-3xl font-bold">Planner Assistant</h1>
        <p className="text-gray-500">
          Manage your schedule, tasks, and meetings with AI assistance
        </p>
      </section>

      <div className="flex flex-wrap gap-8">
        <div className="w-full">
          <button
            onClick={() => setShowTable(!showTable)}
            className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <h3 className="font-semibold">
              📋 Preview Tasks and Meetings Data
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
                      "ID",
                      "Type",
                      "Title",
                      "Description",
                      "Date",
                      "Time",
                      "Duration",
                      "Participants",
                      "Status",
                      "Priority",
                      "Assigned To",
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
                      <td className="py-2 px-2">{item.event_id}</td>
                      <td className="py-2 px-2 capitalize">{item.type}</td>
                      <td className="py-2 px-2">{item.title}</td>
                      <td className="py-2 px-2">{item.description}</td>
                      <td className="py-2 px-2">{item.date}</td>
                      <td className="py-2 px-2">{item.time}</td>
                      <td className="py-2 px-2">{item.duration} min</td>
                      <td className="py-2 px-2">{item.participants}</td>
                      <td className="py-2 px-2 capitalize">
                        {item.status.replace("_", " ")}
                      </td>
                      <td className="py-2 px-2 capitalize">{item.priority}</td>
                      <td className="py-2 px-2">{item.assigned_to}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 bg-blue-50 p-4 rounded-lg mx-auto">
          <h3 className="text-blue-700 font-semibold">
            📌 Manage your schedule
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>What meetings do I have this week?</li>
            <li>Show me my pending tasks with high priority</li>
            <li>When is my next deadline?</li>
          </ul>
        </div>
      </div>

      <section>
        <h3 className="text-2xl font-semibold">Dashboard Overview</h3>
        {(() => {
          const totalEvents = tableData.length;
          const meetings = tableData.filter(
            (item) => item.type === "meeting"
          ).length;
          const tasks = tableData.filter((item) => item.type === "task").length;
          const today = new Date();
          const upcoming = tableData.filter(
            (item) => new Date(item.date) > today
          ).length;

          return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-white shadow-md p-4 rounded-lg text-center">
                <p>Total Events</p>
                <p className="text-2xl font-bold">{totalEvents}</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg text-center">
                <p>Meetings</p>
                <p className="text-2xl font-bold">{meetings}</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg text-center">
                <p>Tasks</p>
                <p className="text-2xl font-bold">{tasks}</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg text-center">
                <p>Upcoming Events</p>
                <p className="text-2xl font-bold">{upcoming}</p>
              </div>
            </div>
          );
        })()}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold mb-2">📊 Event Type Distribution</h4>
          <div style={{ width: "250px", height: "250px", margin: "0 auto" }}>
            <Pie data={eventTypeData} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            📈 Event Status Overview
          </h4>
          <div className="flex flex-wrap gap-4 mb-2">
            {statusData.labels.map((label, index) => (
              <div key={index} className="flex items-center gap-1">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      statusData.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            ))}
          </div>
          <Bar data={statusData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow col-span-full">
          <h4 className="font-semibold mb-2">👥 Events Assigned to Team</h4>
          <Bar data={assignedEventsData} />
        </div>
      </section>

      <section className="mt-10">
        <section className="mt-10">
          {/* Chat Section */}
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            💬 Planner Chat
            <span className="text-sm text-gray-500">
              Ask about your schedule
            </span>
          </h3>
        </section>
        <Chat /> {/* Chat section */}
      </section>
    </div>
  );
};

export default PlannerDashboard;
