


import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Label
} from "recharts";

import dashboardBg from "../assets/dashboard.jpeg";

export default function Dashboard() {

  const [data, setData] = useState(null);

 

  useEffect(() => {
  fetch("https://agrotrade-intelligence-backend.onrender.com/dashboard")
    .then(res => res.json())
    .then(resData => {
      console.log("DASHBOARD DATA:", resData); // 👈 ADD THIS
      setData(resData);
    })
    .catch(err => console.error("API ERROR:", err));
}, []);

  // ---------------- LOADING STATE ----------------
  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${dashboardBg})` }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🌾 AgroTrade Intelligence Hub
        </h1>

        <p className="text-lg md:text-xl font-semibold text-white/90 mb-10">
          Track market trends, crop performance, and profitability insights.
        </p>

        {/* SUMMARY CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white/90 p-6 shadow rounded-xl border-l-4 border-green-600">
            <h3 className="text-gray-600">Average Crop Price</h3>
            <p className="text-2xl font-bold text-green-700">
              ₹ {data.avg_price?.toFixed(2)}
            </p>
          </div>

          <div className="bg-white/90 p-6 shadow rounded-xl border-l-4 border-green-500">
            <h3 className="text-gray-600">Most Profitable Crop</h3>
            <p className="text-xl font-bold text-green-700">
              {data.most_profitable_crop}
            </p>
          </div>

          <div className="bg-white/90 p-6 shadow rounded-xl border-l-4 border-green-400">
            <h3 className="text-gray-600">High-Risk Crop</h3>
            <p className="text-xl font-bold text-green-700">
              {data.high_risk_crop}
            </p>
          </div>

          <div className="bg-white/90 p-6 shadow rounded-xl border-l-4 border-green-300">
            <h3 className="text-gray-600">Best Season</h3>
            <p className="text-xl font-bold text-green-700">
              {data.best_season}
            </p>
          </div>

        </div>

        {/* CHARTS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LINE CHART */}
          <div className="bg-white/90 p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4 text-green-700">
              Price Trend
            </h2>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.trend}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month">
                    <Label value="Month" position="insideBottom" offset={-5} />
                  </XAxis>

                  <YAxis>
                    <Label
                      value="Price (₹ per Quintal)"
                      angle={-90}
                      position="insideLeft"
                    />
                  </YAxis>

                  <Tooltip
                    formatter={(value) =>
                      value ? `₹ ${Number(value).toFixed(2)}` : "₹ 0"
                    }
                  />

                  <Line
                    type="monotone"
                    dataKey="price_per_quintal"
                    stroke="#16a34a"
                    strokeWidth={3}
                  />

                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* BAR CHART */}
          <div className="bg-white/90 p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4 text-green-700">
              Crop Comparison
            </h2>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.crop_data}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="crop">
                    <Label value="Crop" position="insideBottom" offset={-5} />
                  </XAxis>

                  <YAxis>
                    <Label
                      value="Avg Price (₹)"
                      angle={-90}
                      position="insideLeft"
                    />
                  </YAxis>

                  <Tooltip
                    formatter={(value) =>
                      value ? `₹ ${Number(value).toFixed(2)}` : "₹ 0"
                    }
                  />

                  <Bar
                    dataKey="price_per_quintal"
                    fill="#22c55e"
                  />

                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
