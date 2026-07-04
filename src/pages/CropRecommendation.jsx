import React, { useEffect, useState } from "react";
import cropBg from "../assets/crop.jpeg";

export default function CropRecommendation() {

  const [season, setSeason] = useState("");
  const [market, setMarket] = useState("");

  const [markets, setMarkets] = useState([]);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  // ============================================
  // LOAD MARKETS
  // ============================================

  useEffect(() => {

    fetch("http://127.0.0.1:5000/markets")
      .then(res => res.json())
      .then(data => setMarkets(data))
      .catch(err => console.log(err));

  }, []);

  // ============================================
  // RECOMMENDATION
  // ============================================

  const handleRecommendation = async () => {

    if (!season || !market) {
      alert("Please select both Season and Market");
      return;
    }

    setLoading(true);

    try {

      const res = await fetch(
        "http://127.0.0.1:5000/crop-recommendation",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            season,
            market
          })

        }
      );

      const data = await res.json();

      setResult(data);

    }

    catch (err) {

      console.log(err);

    }

    setLoading(false);

  };

  // ============================================
  // UI
  // ============================================

  return (

    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${cropBg})`
      }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white/90 rounded-2xl shadow-xl p-10 w-full max-w-3xl">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-3">

          🌾 Crop Recommendation System

        </h1>

        <p className="text-center text-gray-600 mb-8">

          Select a market and season to discover the most profitable crop.

        </p>

        {/* Season */}

        <div className="mb-5">

          <label className="font-semibold">

            Season

          </label>

          <select

            value={season}

            onChange={(e) => setSeason(e.target.value)}

            className="w-full mt-2 p-3 rounded-lg border"

          >

            <option value="">Select Season</option>

            <option>Rabi</option>

            <option>Kharif</option>

            <option>Zaid</option>

          </select>

        </div>

        {/* Market */}

        <div className="mb-6">

          <label className="font-semibold">

            Market

          </label>

          <select

            value={market}

            onChange={(e) => setMarket(e.target.value)}

            className="w-full mt-2 p-3 rounded-lg border"

          >

            <option value="">Select Market</option>

            {

              markets.map((m, index) => (

                <option key={index}>

                  {m}

                </option>

              ))

            }

          </select>

        </div>

        {/* Button */}

        <button

          onClick={handleRecommendation}

          className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"

        >

          {

            loading

              ? "Finding Best Crop..."

              : "Recommend Crop"

          }

        </button>

        {/* Result */}

        {

          result && !result.error && (

            <div className="mt-8 bg-green-100 rounded-xl p-6 shadow">

              <h2 className="text-2xl font-bold text-green-800 mb-4">

                Recommended Crop

              </h2>

              <div className="space-y-3 text-lg">

                <p>

                  🌾 <strong>Crop :</strong> {result.recommended_crop}

                </p>

                <p>

                  💰 <strong>Expected Price :</strong>

                  ₹ {result.expected_price}

                </p>

                <p>

                  📈 <strong>Expected Profit :</strong>

                  ₹ {result.expected_profit}

                </p>

                <p className="text-blue-700 font-medium">

                  💡 {result.reason}

                </p>

              </div>

            </div>

          )

        }

        {

          result && result.error && (

            <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-lg">

              {result.error}

            </div>

          )

        }

      </div>

    </div>

  );

}