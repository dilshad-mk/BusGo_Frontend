import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 28 },
  { month: "Feb", revenue: 52 },
  { month: "Mar", revenue: 14 },
  { month: "Apr", revenue: 23 },
];

function RevenueOverview() {
  return (
    
     <div className="bg-[#0b1220] p-6 rounded-2xl shadow-lg w-full ">
      <h2 className="text-white text-lg font-semibold mb-4">
        Revenue Overview
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          
          {/* Grid like your UI */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1f2937"
          />

          {/* X Axis */}
          <XAxis
            dataKey="month"
            stroke="#9ca3af"
            tick={{ fill: "#9ca3af" }}
          />

          {/* Y Axis */}
          <YAxis
            stroke="#9ca3af"
            tick={{ fill: "#9ca3af" }}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          {/* Line */}
          <Line
            type="monotone"   // smooth curve
            dataKey="revenue"
            stroke="#22c55e"  // green line
            strokeWidth={3}
            dot={{
              r: 6,
              fill: "#22c55e",
              stroke: "#22c55e",
            }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueOverview