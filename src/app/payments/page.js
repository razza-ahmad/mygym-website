"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { CreditCard, TrendingUp, AlertCircle, Check } from "lucide-react";

export default function PaymentsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [paymentStats, setPaymentStats] = useState({
    totalPaid: 0,
    pending: 0,
    failed: 0,
    thisMonth: 0,
  });
  const [transactions, setTransactions] = useState([]);

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
    setPaymentStats({
      totalPaid: 12500,
      pending: 4999,
      failed: 0,
      thisMonth: 4999,
    });

    setTransactions([
      { id: 1, description: "Monthly Membership", amount: 4999, date: "2024-01-15", status: "success" },
      { id: 2, description: "Monthly Membership", amount: 4999, date: "2023-12-15", status: "success" },
      { id: 3, description: "Personal Training (4 Sessions)", amount: 2000, date: "2023-11-20", status: "success" },
      { id: 4, description: "Monthly Membership", amount: 4999, date: "2023-11-15", status: "success" },
      { id: 5, description: "Monthly Membership", amount: 4999, date: "2023-10-15", status: "success" },
      { id: 6, description: "Nutrition Plan", amount: 1500, date: "2023-10-01", status: "success" },
    ]);

    setLoading(false);
  }, [router]);

  const handleRenewMembership = () => {
    toast.success("Redirecting to payment gateway...");
    setTimeout(() => {
      toast.success("Membership renewal initiated");
    }, 800);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
        <p className="text-xl">Loading payment history...</p>
      </div>
    );
  }

  const stats = [
    {
      label: "Total Paid",
      value: `₹${paymentStats.totalPaid.toLocaleString()}`,
      icon: "💰",
      gradient: "from-green-900 to-green-800",
    },
    {
      label: "Pending",
      value: `₹${paymentStats.pending.toLocaleString()}`,
      icon: "⏳",
      gradient: "from-yellow-900 to-yellow-800",
    },
    {
      label: "Failed",
      value: `₹${paymentStats.failed}`,
      icon: "❌",
      gradient: "from-red-900 to-red-800",
    },
    {
      label: "This Month",
      value: `₹${paymentStats.thisMonth.toLocaleString()}`,
      icon: "📅",
      gradient: "from-blue-900 to-blue-800",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-500/20 text-green-400";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";
      case "failed":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <Check className="w-5 h-5" />;
      case "pending":
        return <AlertCircle className="w-5 h-5" />;
      case "failed":
        return <AlertCircle className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 pb-10">
      <Toaster />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-2">Payment History 💳</h1>
          <p className="text-gray-400">Track your transactions and manage your payments</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${stat.gradient} p-8 rounded-3xl border border-zinc-800 hover:border-red-600 transition`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Renew Membership CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-3xl mb-12 hover:shadow-lg hover:shadow-red-600/50 transition">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your membership expires in 15 days</h2>
              <p className="text-red-100">Don't lose access! Renew your membership now to continue uninterrupted service.</p>
            </div>
            <button
              onClick={handleRenewMembership}
              className="bg-black hover:bg-zinc-900 px-8 py-4 rounded-xl font-bold text-red-600 transition whitespace-nowrap"
            >
              Renew Now
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <CreditCard className="w-8 h-8" />
            Recent Transactions
          </h2>

          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-4 px-4 font-semibold text-gray-300">Description</th>
                  <th className="text-right py-4 px-4 font-semibold text-gray-300">Amount</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-300">Date</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-300">Status</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, idx) => (
                  <tr key={idx} className="border-b border-zinc-800 hover:bg-black/30 transition last:border-0">
                    <td className="py-4 px-4">
                      <p className="font-semibold">{transaction.description}</p>
                      <p className="text-sm text-gray-400">ID: {transaction.id.toString().padStart(6, "0")}</p>
                    </td>
                    <td className="text-right py-4 px-4 font-bold">₹{transaction.amount.toLocaleString()}</td>
                    <td className="text-center py-4 px-4 text-gray-400">
                      {new Date(transaction.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center justify-center gap-2 w-fit mx-auto ${getStatusColor(transaction.status)}`}>
                        {getStatusIcon(transaction.status)}
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <button className="text-red-500 hover:text-red-400 font-semibold">Receipt</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {transactions.map((transaction, idx) => (
              <div
                key={idx}
                className="bg-black p-6 rounded-2xl border border-zinc-800 hover:border-red-600/50 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold">{transaction.description}</p>
                    <p className="text-sm text-gray-400">ID: {transaction.id.toString().padStart(6, "0")}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-gray-400 text-sm">
                    {new Date(transaction.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <div className="text-right">
                    <p className="font-bold text-lg mb-2">₹{transaction.amount.toLocaleString()}</p>
                    <button className="text-red-500 hover:text-red-400 font-semibold text-sm">Receipt</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600/10 to-transparent rounded-3xl border border-blue-600/30">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Saved Payment Methods</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-xl border border-zinc-700 hover:border-blue-600/50 transition cursor-pointer">
              <p className="font-semibold mb-2">Visa Card</p>
              <p className="text-gray-400">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-400 mt-2">Expires 12/25</p>
            </div>
            <button className="bg-black p-4 rounded-xl border border-dashed border-zinc-700 hover:border-blue-600/50 transition text-blue-400 font-semibold">
              + Add New Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
