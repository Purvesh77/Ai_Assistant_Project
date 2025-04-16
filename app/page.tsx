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
      employee_id: "EMP1000",
      full_name: "Brandon Juarez",
      department: "IT",
      job_title: "Director",
      salary: 83000,
      date_of_joining: "2015-10-20",
      performance_score: 3.4,
      years_of_experience: 12,
      education_level: "Bachelor's",
      work_location: "Chicago",
      remote_work: "Yes",
      projects_completed: 41,
      last_promotion_date: "2016-01-02",
      attrition_risk: "Low",
      work_hours_per_week:7,
    },
    {
      employee_id: "EMP1001",
      full_name: "Brooke Yoder",
      department: "Sales",
      job_title: "Director",
      salary: 143608,
      date_of_joining: "2021-01-04",
      performance_score: 7.6,
      years_of_experience: 16,
      education_level: "Diploma",
      work_location: "Austin",
      remote_work: "No",
      projects_completed: 39,
      last_promotion_date: "2024-01-14",
      attrition_risk: "High",
      work_hours_per_week:3,
    },
    {
      employee_id: "EMP1002",
      full_name: "Rachel Taylor",
      department: "Customer Support",
      job_title: "Specialist",
      salary: 60861,
      date_of_joining: "2019-09-14",
      performance_score: 2.8,
      years_of_experience: 21,
      education_level: "Bachelor's",
      work_location: "New York",
      remote_work: "No",
      projects_completed: 14,
      last_promotion_date: "2021-09-07",
      attrition_risk: "Medium",
      work_hours_per_week:8,
    },
    {
      employee_id: "EMP1003",
      full_name: "Joseph Anderson",
      department: "Operations",
      job_title: "Consultant",
      salary: 104676,
      date_of_joining: "2023-02-01",
      performance_score: 5.5,
      years_of_experience: 6,
      education_level: "Diploma",
      work_location: "Austin",
      remote_work: "No",
      projects_completed: 29,
      last_promotion_date: "2023-04-21",
      attrition_risk: "High",
      work_hours_per_week:6,
    },
    {
      employee_id: "EMP1004",
      full_name: "Paul Estrada",
      department: "HR",
      job_title: "Consultant",
      salary: 48458,
      date_of_joining: "2021-07-07",
      performance_score: 3.8,
      years_of_experience: 30,
      education_level: "Associate Degree",
      work_location: "New York",
      remote_work: "No",
      projects_completed: 14,
      last_promotion_date: "2025-01-02",
      attrition_risk: "Medium",
      work_hours_per_week:5,
    },
  ];

  return (
    <div className="space-y-4 p-4">
      <section>
        <h1 className="text-3xl font-bold">Employee Data Analysis</h1>
        <p className="text-gray-500">
        Analyze your employee data with powerful AI-driven insights
        </p>
      </section>

      <div className="flex flex-wrap gap-8">
        <div className="w-full">
          <button
            onClick={() => setShowTable(!showTable)}
            className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <h3 className="font-semibold">
              📋 Preview Data
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
                      "Employee ID",
                      "Full Name",
                      "Department",
                      "Job Title",
                      "Salary",
                      "Date of Joining",
                      "Performance Score",
                      "Years of Experience",
                      "Education Level",
                      "Work Location",
                      "Remote Work",
                      "Projects Completed",
                      "Last Promotion Date",
                      "Attrition Risk",
                      "Work Hours Per Week",
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
                      <td className="py-2 px-2">{item.full_name}</td>
                      <td className="py-2 px-2 capitalize">{item.department}</td>
                      <td className="py-2 px-2 capitalize">{item.job_title}</td>
                      <td className="py-2 px-2">${item.salary.toLocaleString()}</td>
                      <td className="py-2 px-2">{item.date_of_joining}</td>
                      <td className="py-2 px-2">{item.performance_score}</td>
                      <td className="py-2 px-2">{item.years_of_experience}</td>
                      <td className="py-2 px-2 capitalize">{item.education_level}</td>
                      <td className="py-2 px-2">{item.work_location}</td>
                      <td className="py-2 px-2 capitalize">{item.remote_work}</td>
                      <td className="py-2 px-2">{item.projects_completed}</td>
                      <td className="py-2 px-2">{item.last_promotion_date}</td>
                      <td className="py-2 px-2 capitalize">{item.attrition_risk}</td>
                      <td className="py-2 px-2 capitalize">{item.work_hours_per_week}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 bg-blue-50 p-4 rounded-lg mx-auto">
          <h3 className="text-blue-700 font-semibold">
            📌 Ask me about your employee data
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>Can you tell me the average salary for each department and compare it with the average performance score?</li>
            <li>Plot a pie chart showing employee distribution by department</li>
            <li>Plot a box plot for salary distribution across departments</li>
          </ul>
        </div>
      </div>

      <section className="mt-10">
        <section className="mt-10">
          {/* Chat Section */}
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            💬 Conversation
            <span className="text-sm text-gray-500">
            Ask a question about your data
            </span>
          </h3>
        </section>
        <Chat/>
      </section>
    </div>
  );
};

export default PlannerDashboard;