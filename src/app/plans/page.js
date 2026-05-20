"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Download, Eye } from "lucide-react";

export default function PlansPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    setLoading(false);
  }, [router]);

  const workoutPlans = [
    {
      id: 1,
      name: "Beginner's Full Body",
      description: "Perfect for newcomers. 3 days/week focusing on compound movements and building a strong foundation.",
      duration: "4 weeks",
      difficulty: "Beginner",
      sessions: 12,
    },
    {
      id: 2,
      name: "Strength & Power",
      description: "Advanced strength training with periodized progression. Build serious muscle mass and raw strength.",
      duration: "8 weeks",
      difficulty: "Advanced",
      sessions: 24,
    },
    {
      id: 3,
      name: "Fat Loss Accelerator",
      description: "High-intensity interval training combined with metabolic conditioning for maximum fat burning.",
      duration: "6 weeks",
      difficulty: "Intermediate",
      sessions: 18,
    },
    {
      id: 4,
      name: "Lean Muscle Builder",
      description: "Hypertrophy-focused program designed to build lean muscle while maintaining low body fat.",
      duration: "10 weeks",
      difficulty: "Intermediate",
      sessions: 30,
    },
  ];

  const dietPlans = [
    {
      id: 1,
      name: "High-Protein Bulk",
      description: "Designed for muscle gain. 1g protein per lb bodyweight with strategic carbs for energy and growth.",
      calories: "3000-3500",
      macros: "45% Protein, 35% Carbs, 20% Fat",
      meals: 5,
    },
    {
      id: 2,
      name: "Balanced Wellness",
      description: "Sustainable nutrition plan for maintenance and overall health. Perfect for busy professionals.",
      calories: "2000-2500",
      macros: "30% Protein, 45% Carbs, 25% Fat",
      meals: 3,
    },
    {
      id: 3,
      name: "Fat Loss Accelerator",
      description: "Strategic calorie deficit with high protein to preserve muscle during weight loss journey.",
      calories: "1500-1800",
      macros: "50% Protein, 30% Carbs, 20% Fat",
      meals: 4,
    },
    {
      id: 4,
      name: "Performance Fuel",
      description: "Optimized for endurance and athletic performance. High carbs for sustained energy and recovery.",
      calories: "3500-4000",
      macros: "25% Protein, 55% Carbs, 20% Fat",
      meals: 6,
    },
  ];

  const handleViewPlan = (name, type) => {
    toast.success(`Opening ${name}...`);
  };

  const handleDownloadPlan = (name, type) => {
    toast.success(`Downloading ${name}...`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
        <p className="text-xl">Loading plans...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 pb-10">
      <Toaster />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-2">Workout & Diet Plans 💪</h1>
          <p className="text-gray-400">Choose the perfect plan to match your fitness goals</p>
        </div>

        {/* Workout Plans Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-red-600">🏋️ Workout Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workoutPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-zinc-800 hover:border-red-600 transition overflow-hidden group"
              >
                {/* Card Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition">{plan.name}</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm">
                      {plan.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                      {plan.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{plan.description}</p>

                {/* Meta Info */}
                <div className="mb-6 space-y-2 text-sm text-gray-400">
                  <p>📅 <span className="text-white font-semibold">{plan.sessions} sessions</span></p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-zinc-700">
                  <button
                    onClick={() => handleViewPlan(plan.name, "workout")}
                    className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    View Plan
                  </button>
                  <button
                    onClick={() => handleDownloadPlan(plan.name, "workout")}
                    className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diet Plans Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-red-600">🍎 Diet Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dietPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-zinc-800 hover:border-red-600 transition overflow-hidden group"
              >
                {/* Card Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition">{plan.name}</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                      {plan.calories}
                    </span>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {plan.meals} meals
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{plan.description}</p>

                {/* Meta Info */}
                <div className="mb-6 space-y-2 text-sm text-gray-400">
                  <p className="text-white font-semibold">{plan.macros}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-zinc-700">
                  <button
                    onClick={() => handleViewPlan(plan.name, "diet")}
                    className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    View Plan
                  </button>
                  <button
                    onClick={() => handleDownloadPlan(plan.name, "diet")}
                    className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-red-600/10 to-transparent rounded-3xl border border-red-600/30">
          <h3 className="text-2xl font-bold mb-4 text-red-400">Need Help Choosing?</h3>
          <p className="text-gray-300">
            Not sure which plan is right for you? Contact our fitness coaches for a free consultation. We'll assess your goals and current fitness level to recommend the perfect plan tailored to your needs.
          </p>
          <button className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
