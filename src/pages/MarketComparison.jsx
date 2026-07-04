import React, { useState } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Label
} from "recharts";

import dashboardBg from "../assets/dashboard.jpeg";

export default function MarketComparison() {

    const [crop, setCrop] = useState("");

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const [error, setError] = useState("");

    const handleCompare = async () => {

        if (!crop) {
            alert("Please select a crop.");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {

            const res = await fetch(
                "http://127.0.0.1:5000/market-comparison",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        crop
                    })
                }
            );

            const data = await res.json();

            if (data.error) {
                setError(data.error);
            } else {
                setResult(data);
            }

        } catch (err) {

            console.log(err);

            setError("Unable to connect to backend.");

        }

        setLoading(false);

    };

    return (

        <div
            className="min-h-screen bg-cover bg-center relative p-10"
            style={{
                backgroundImage: `url(${dashboardBg})`
            }}
        >

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative max-w-7xl mx-auto">

                <h1 className="text-4xl font-bold text-white mb-2">

                    📍 Market Comparison

                </h1>

                <p className="text-white/90 mb-8 text-lg">

                    Compare average crop prices and profitability across different markets.

                </p>

                <div className="bg-white/90 rounded-xl shadow-xl p-6">

                    <div className="grid md:grid-cols-4 gap-4">

                        <select

                            value={crop}

                            onChange={(e) => setCrop(e.target.value)}

                            className="border rounded-lg p-3"

                        >

                            <option value="">Select Crop</option>

                            <option>Onion</option>

                            <option>Potato</option>

                            <option>Rice</option>

                            <option>Tomato</option>

                            <option>Wheat</option>

                        </select>

                        <button

                            onClick={handleCompare}

                            className="bg-green-700 hover:bg-green-800 text-white rounded-lg p-3 font-semibold"

                        >

                            Compare Markets

                        </button>

                    </div>

                </div>

                {loading && (

                    <div className="text-center text-white text-xl mt-10">

                        Loading...

                    </div>

                )}

                {error && (

                    <div className="bg-red-100 mt-8 rounded-xl p-5">

                        {error}

                    </div>

                )}

                {result && (

          <>

                        {/* SUMMARY */}

                        <div className="grid md:grid-cols-3 gap-6 mt-8">

                            <div className="bg-white/90 rounded-xl p-6 shadow">

                                <h3 className="text-gray-600">

                                    Highest Average Price

                                </h3>

                                <p className="text-3xl font-bold text-green-700">

                                    ₹ {result.highest_price.toFixed(2)}

                                </p>

                            </div>

                            <div className="bg-white/90 rounded-xl p-6 shadow">

                                <h3 className="text-gray-600">

                                    Lowest Average Price

                                </h3>

                                <p className="text-3xl font-bold text-red-600">

                                    ₹ {result.lowest_price.toFixed(2)}

                                </p>

                            </div>

                            <div className="bg-white/90 rounded-xl p-6 shadow">

                                <h3 className="text-gray-600">

                                    Best Market

                                </h3>

                                <p className="text-3xl font-bold text-blue-700">

                                    {result.best_market}

                                </p>

                            </div>

                        </div>

                        {/* BAR CHART */}

                        <div className="bg-white/90 rounded-xl shadow mt-8 p-6">

                            <h2 className="text-2xl font-semibold mb-6 text-green-700">

                                Average Price Comparison

                            </h2>

                            <div className="h-96">

                                <ResponsiveContainer>

                                    <BarChart

                                        data={result.markets}

                                    >

                                        <CartesianGrid strokeDasharray="3 3" />

                                        <XAxis

                                            dataKey="market"

                                        >

                                            <Label

                                                value="Markets"

                                                offset={-5}

                                                position="insideBottom"

                                            />

                                        </XAxis>

                                        <YAxis>

                                            <Label

                                                value="Average Price (₹)"

                                                angle={-90}

                                                position="insideLeft"

                                            />

                                        </YAxis>

                                        <Tooltip

                                            formatter={(value) =>

                                                `₹ ${Number(value).toFixed(2)}`

                                            }

                                        />

                                        <Bar

                                            dataKey="avg_price"

                                            fill="#16a34a"

                                        />

                                    </BarChart>

                                </ResponsiveContainer>

                            </div>

                        </div>
                                    {/* MARKET TABLE */}

            <div className="bg-white/90 rounded-xl shadow mt-8 p-6">

              <h2 className="text-2xl font-semibold text-green-700 mb-6">

                Market Statistics

              </h2>

              <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="bg-green-700 text-white">

                      <th className="p-3 border">Market</th>

                      <th className="p-3 border">Average Price (₹)</th>

                      <th className="p-3 border">Average Profit (₹)</th>

                    </tr>

                  </thead>

                  <tbody>

                    {result.markets.map((market, index) => (

                      <tr
                        key={index}
                        className="text-center hover:bg-green-50"
                      >

                        <td className="border p-3">

                          {market.market}

                        </td>

                        <td className="border p-3">

                          ₹ {market.avg_price.toFixed(2)}

                        </td>

                        <td className="border p-3">

                          ₹ {market.avg_profit.toFixed(2)}

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* AI INSIGHT */}

            <div className="bg-green-100 rounded-xl shadow mt-8 p-6">

              <h2 className="text-2xl font-semibold text-green-800 mb-3">

                AI Recommendation

              </h2>

              <p className="text-lg text-gray-800 leading-8">

                {result.insight}

              </p>

            </div>

          </>

        )}

      </div>

    </div>

  );

}