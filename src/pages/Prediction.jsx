
import { useState } from "react";
import pbg1 from "../assets/pbg1.jpeg";

export default function Prediction() {

  const API = "https://agrotrade-intelligence-backend.onrender.com/";

  const [formData, setFormData] = useState({
    crop: "",
    market: "",
    month: "",
    year: "",
    season: "",
    cost: ""
  });

  const [predictedPrice, setPredictedPrice] = useState(null);
  const [profit, setProfit] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handlePredict = async () => {

    if (
      !formData.crop ||
      !formData.market ||
      !formData.month ||
      !formData.year ||
      !formData.season ||
      !formData.cost
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
        return;
      }

      setPredictedPrice(data.predicted_price);
      setProfit(data.profit);

    } catch (error) {
      console.log(error);
      alert("Backend Connection Failed ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${pbg1})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card */}
      <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-xl border border-green-200">

        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Crop Price Predictor
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Get smart predictions for better farming decisions
        </p>

        <div className="space-y-4">

          {/* CROP */}
          <input
            type="text"
            name="crop"
            value={formData.crop}
            placeholder="Enter Crop (e.g. Wheat, Rice)"
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg"
          />

          {/* MARKET */}
          <input
            type="text"
            name="market"
            value={formData.market}
            placeholder="Enter Market (e.g. Pune)"
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg"
          />

          {/* YEAR */}
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg"
          >
            <option value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>

          {/* MONTH */}
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg"
          >
            <option value="">Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          {/* SEASON */}
          <select
            name="season"
            value={formData.season}
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg"
          >
            <option value="">Select Season</option>
            <option value="Rabi">Rabi</option>
            <option value="Kharif">Kharif</option>
            <option value="Zaid">Zaid</option>
          </select>

          {/* COST */}
          <input
            type="number"
            name="cost"
            value={formData.cost}
            placeholder="Enter Cost per Quintal"
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg"
          />

          {/* BUTTON */}
          <button
            onClick={handlePredict}
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Predicting..." : "Predict Price"}
          </button>

        </div>

        {/* RESULT */}
        {predictedPrice !== null && profit !== null && (
          <div className="mt-6 bg-green-100 border border-green-300 p-5 rounded-xl text-center">

            <h3 className="font-semibold text-green-800 mb-3">
              Prediction Result
            </h3>

            <p className="text-2xl font-bold text-green-700">
              ₹ {predictedPrice.toFixed(2)} / Quintal
            </p>

            <p className={`text-lg mt-3 font-semibold ${
              profit >= 0 ? "text-green-700" : "text-red-600"
            }`}>
              {profit >= 0 ? "Profit" : "Loss"} :
              ₹ {Math.abs(profit).toFixed(2)}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
