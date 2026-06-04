// export default function About() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-6 py-12">

//       {/* Header Section */}
//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h1 className="text-4xl font-bold text-green-800 mb-4">
//           About AgroTrade Analytics 🌾
//         </h1>
//         <p className="text-gray-600 text-lg">
//           Empowering farmers with smart insights, predictive analytics, and
//           data-driven decision making.
//         </p>
//       </div>

//       {/* Main Card */}
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10">
//         <p className="text-gray-700 text-lg leading-relaxed">
//           AgroTrade Analytics is a smart crop price forecasting and profit
//           optimization platform designed to help farmers make better decisions.
//           By combining technology with agriculture, it provides insights that
//           reduce uncertainty and improve productivity.
//         </p>
//       </div>

//       {/* Features Section */}
//       <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             📊 Price Prediction
//           </h3>
//           <p className="text-gray-600">
//             Forecast crop prices to help farmers decide the best time to sell.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             💰 Profit Analysis
//           </h3>
//           <p className="text-gray-600">
//             Analyze costs and returns to maximize farming profits efficiently.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             🌦️ Seasonal Insights
//           </h3>
//           <p className="text-gray-600">
//             Get recommendations based on seasonal trends and historical data.
//           </p>
//         </div>

//       </div>

//       {/* Mission Section */}
//       <div className="max-w-4xl mx-auto mt-12 text-center">
//         <h2 className="text-2xl font-bold text-green-800 mb-3">
//           Our Mission 🚜
//         </h2>
//         <p className="text-gray-600">
//           To bridge the gap between agriculture and technology by providing
//           farmers with intelligent tools that improve decision-making,
//           increase profitability, and create a sustainable future.
//         </p>
//       </div>

//     </div>
//   );
// }

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-6 py-12">

//       {/* Header Section */}
//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h1 className="text-4xl font-bold text-green-800 mb-4">
//           About AgroTrade Analytics 🌾
//         </h1>
//         <p className="text-gray-600 text-lg">
//           Empowering farmers with smart insights, predictive analytics, and
//           data-driven decision making.
//         </p>
//       </div>

//       {/* Main Card */}
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10">
//         <p className="text-gray-700 text-lg leading-relaxed">
//           AgroTrade Analytics is a smart crop price forecasting and profit
//           optimization platform designed to help farmers make better decisions.
//           By combining technology with agriculture, it provides insights that
//           reduce uncertainty and improve productivity.
//         </p>
//       </div>

//       {/* Features Section */}
//       <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             📊 Price Prediction
//           </h3>
//           <p className="text-gray-600">
//             Forecast crop prices to help farmers decide the best time to sell.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             💰 Profit Analysis
//           </h3>
//           <p className="text-gray-600">
//             Analyze costs and returns to maximize farming profits efficiently.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             🌦️ Seasonal Insights
//           </h3>
//           <p className="text-gray-600">
//             Get recommendations based on seasonal trends and historical data.
//           </p>
//         </div>

//       </div>

//       {/* Mission Section */}
//       <div className="max-w-4xl mx-auto mt-12 text-center">
//         <h2 className="text-2xl font-bold text-green-800 mb-3">
//           Our Mission 🚜
//         </h2>
//         <p className="text-gray-600">
//           To bridge the gap between agriculture and technology by providing
//           farmers with intelligent tools that improve decision-making,
//           increase profitability, and create a sustainable future.
//         </p>
//       </div>

//     </div>
//   );
// }


import aboutus from "../assets/aboutus.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
          style={{ backgroundImage: `url(${aboutus})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            🌾 About AgroTrade AI
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Empowering farmers with AI-powered market intelligence and smarter agricultural decision-making.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-3xl shadow-xl p-10 bg-green-100">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
            Smarter Farming Through Data & AI
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed text-center">
            AgroTrade AI is an intelligent agricultural analytics platform designed
            to help farmers make informed decisions. By combining machine learning,
            historical market data, and seasonal insights, the platform provides
            valuable information that helps reduce uncertainty, improve planning,
            and maximize profitability.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto px-6 py-10 bg-green-100">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          How AgroTrade AI Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="font-bold text-green-700 text-lg">
              Enter Crop Details
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Select crop, market, season, and production cost information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="font-bold text-green-700 text-lg">
              Analyze Data
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Historical agricultural data is processed and evaluated.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="font-bold text-green-700 text-lg">
              AI Prediction
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Machine learning models forecast future crop prices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-bold text-green-700 text-lg">
              Better Decisions
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Use insights to optimize profits and improve planning.
            </p>
          </div>

        </div>
      </div>

      {/* Why AgroTrade AI Matters */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-green-100 rounded-3xl p-10 shadow-lg">

          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
            Why AgroTrade AI Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <div className="text-5xl mb-4">📈</div>
              <h3 className="font-semibold text-xl text-green-700 mb-2">
                Reduce Uncertainty
              </h3>
              <p className="text-gray-600">
                Make decisions based on data instead of guesswork.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-semibold text-xl text-green-700 mb-2">
                Increase Profitability
              </h3>
              <p className="text-gray-600">
                Identify the best opportunities to maximize returns.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-semibold text-xl text-green-700 mb-2">
                Sustainable Growth
              </h3>
              <p className="text-gray-600">
                Support smarter and more efficient agricultural practices.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-green-100 rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
            Our Vision
          </h2>

          <p className="text-gray-700 text-lg text-center leading-relaxed">
            We envision a future where every farmer has access to intelligent,
            data-driven tools that simplify decision-making, improve productivity,
            and create a more resilient agricultural ecosystem.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-green-800 py-16 mt-10">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold text-white mb-4">
            🚜 Our Mission
          </h2>

          <p className="text-green-100 text-lg leading-relaxed">
            To bridge the gap between agriculture and artificial intelligence by
            providing accessible, data-driven tools that empower farmers to make
            informed decisions, reduce uncertainty, improve profitability, and
            contribute to a sustainable future.
          </p>

        </div>
      </div>

    </div>
  );
}