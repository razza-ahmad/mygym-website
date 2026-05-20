"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Calendar, Clock, TrendingUp } from "lucide-react";

export default function AttendancePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkedInToday, setCheckedInToday] = useState(false);
  const [attendanceData, setAttendanceData] = useState({
    thisWeek: 0,
    thisMonth: 0,
    total: 0,
    attendanceRate: 0,
  });
  const [recentCheckIns, setRecentCheckIns] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (!token) {
      router.push("/login");
      return;
    }

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Mock data
    setAttendanceData({
      thisWeek: 5,
      thisMonth: 18,
      total: 112,
      attendanceRate: 85,
    });

    setRecentCheckIns([
      { date: "2024-01-15", time: "06:30 AM", duration: "1h 15m" },
      { date: "2024-01-14", time: "06:45 AM", duration: "1h 20m" },
      { date: "2024-01-13", time: "07:00 AM", duration: "1h 10m" },
      { date: "2024-01-12", time: "06:30 AM", duration: "1h 25m" },
      { date: "2024-01-11", time: "07:15 AM", duration: "1h 05m" },
      { date: "2024-01-10", time: "06:20 AM", duration: "1h 30m" },
    ]);

    setLoading(false);
  }, [router]);

  const handleCheckIn = () => {
    toast.success("✓ Checked in successfully!");
    setCheckedInToday(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
        <p className="text-xl">Loading attendance data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 pb-10">
      <Toaster />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-2">Attendance Tracker 📊</h1>
          <p className="text-gray-400">Stay on top of your gym routine</p>
        </div>

        {/* Quick Check-in */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-3xl mb-10 hover:shadow-lg hover:shadow-red-600/50 transition">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Check In Now</h2>
              <p className="text-red-100">
                {checkedInToday ? "✓ Already checked in today" : "Start your workout session"}
              </p>
            </div>
            <button
              onClick={handleCheckIn}
              disabled={checkedInToday}
              className="bg-black hover:bg-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-bold text-red-600 transition text-lg"
            >
              {checkedInToday ? "Checked In ✓" : "Check In Now"}
            </button>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "This Week", value: attendanceData.thisWeek, icon: "📅", color: "from-blue-900 to-blue-800" },
            { label: "This Month", value: attendanceData.thisMonth, icon: "📈", color: "from-purple-900 to-purple-800" },
            { label: "Total Days", value: attendanceData.total, icon: "🎯", color: "from-green-900 to-green-800" },
            { label: "Attendance Rate", value: `${attendanceData.attendanceRate}%`, icon: "⚡", color: "from-yellow-900 to-yellow-800" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${stat.color} p-6 rounded-3xl border border-zinc-800 hover:border-red-600 transition`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">{stat.label}</p>
              <p className="text-4xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Check-ins */}
        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            Recent Check-ins
          </h2>

          <div className="space-y-4">
            {recentCheckIns.map((checkin, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-6 bg-black rounded-2xl border border-zinc-800 hover:border-red-600/50 transition"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">
                      {new Date(checkin.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-gray-400">Check-in at {checkin.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-red-400 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    {checkin.duration}
                  </p>
                  <p className="text-gray-400 text-sm">Duration</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl border border-red-600/30">
            <p className="text-gray-300">
              <span className="text-red-400 font-bold">Keep it up!</span> You're doing great. Your consistency is key to achieving your fitness goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
