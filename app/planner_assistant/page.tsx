"use client"; // Add this at the very top
import React from "react";
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

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const eventTypeData = {
  labels: ["task", "meeting"],
  datasets: [
    {
      data: [10, 10],
      backgroundColor: ["#FBBF24", "#3B82F6"],
    },
  ],
};

const statusData = {
  labels: ["scheduled", "pending", "in_progress"],
  datasets: [
    {
      label: "Status",
      data: [9, 7, 3],
      backgroundColor: ["#8B5CF6", "#10B981", "#3B82F6"],
    },
  ],
};

const assignedEventsData = {
  labels: [
    "Sarah Johnson",
    "Robert Taylor",
    "Michael Davis",
    "Emily Brown",
    "David Wilson",
    "John Smith",
    "Thomas Wright",
    "All Employees",
    "Mary Anderson",
    "Jessica Lee",
  ],
  datasets: [
    {
      label: "meeting",
      data: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#3B82F6",
    },
    {
      label: "task",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#FBBF24",
    },
  ],
};

const PlannerDashboard = () => {
  return (
    <div className="space-y-4">
      <section>
      <h1 className="text-3xl font-bold">API Management</h1>
        <p className="text-gray-500">Manage your schedule, tasks, and meetings with AI assistance</p>
      </section>
      {/* Chart */}
      <div className="flex flex-wrap gap-8">
        <div className="w-full md:w-1/2 border rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-2">📋 Preview Tasks and Meetings Data</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-1">event_id</th>
                <th className="py-1">type</th>
                <th className="py-1">title</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10).keys()].map((i) => (
                <tr key={i} className="border-b">
                  <td className="py-1">200{i + 1}</td>
                  <td className="py-1">{i % 2 === 0 ? "meeting" : "task"}</td>
                  <td className="py-1">Sample Event {i + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full md:w-1/2 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-blue-700 font-semibold">📌 Manage your schedule</h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>What meetings do I have this week?</li>
            <li>Show me my pending tasks with high priority</li>
            <li>When is my next deadline?</li>
          </ul>
        </div>
      </div>

      <section>
        <h3 className="text-2xl font-semibold">📊 Dashboard Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p>Total Events</p>
            <p className="text-2xl font-bold">20</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p>Meetings</p>
            <p className="text-2xl font-bold">10</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p>Tasks</p>
            <p className="text-2xl font-bold">10</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p>Upcoming</p>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">📈 Visualizations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <h4 className="font-semibold text-center mb-2">Event Type Distribution</h4>
            <Pie data={eventTypeData} />
          </div>
          <div>
            <h4 className="font-semibold text-center mb-2">Events by Assigned Person</h4>
            <Bar data={assignedEventsData} />
          </div>
          <div>
            <h4 className="font-semibold text-center mb-2">Status Distribution</h4>
            <Bar data={statusData} />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold">💬 Planner Chat</h3>
        <p className="text-gray-500 mb-4">Ask about your schedule</p>
        <input
          type="text"
          placeholder="Type your schedule question here..."
          className="w-full border p-3 rounded-lg mb-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          🗑️ Clear Chat
        </button>
      </section>
    </div>
  );
};

export default PlannerDashboard;
