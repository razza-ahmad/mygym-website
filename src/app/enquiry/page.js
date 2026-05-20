"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

export default function EnquiryPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    setLoading(false);
  }, [router]);

  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!form.phone.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }

    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      toast.error("Please enter a message (at least 10 characters)");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      toast.success("Enquiry submitted successfully! We'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 pb-10">
      <Toaster />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch 💬</h1>
          <p className="text-gray-400 text-lg">Have questions? We'd love to hear from you. Send us an enquiry and our team will respond shortly.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, label: "Email", value: "support@mygym.com", color: "from-red-600 to-red-700" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210", color: "from-blue-600 to-blue-700" },
            { icon: MessageSquare, label: "Chat", value: "Available 24/7", color: "from-green-600 to-green-700" },
          ].map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${contact.color} p-6 rounded-3xl border border-zinc-800 text-center hover:shadow-lg transition`}
              >
                <Icon className="w-8 h-8 mx-auto mb-4" />
                <p className="text-sm text-gray-100 mb-2">{contact.label}</p>
                <p className="font-bold text-lg">{contact.value}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">
          <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-300">Full Name *</label>
              <div className="relative">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-red-500 outline-none transition text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-300">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-red-500 outline-none transition text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-300">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="tel"
                  placeholder="98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-red-500 outline-none transition text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-300">Message *</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
                <textarea
                  placeholder="Tell us what we can help you with..."
                  rows="6"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-red-500 outline-none transition text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 py-4 rounded-xl font-bold text-lg transition"
            >
              {submitting ? "Sending..." : "Send Enquiry"}
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            * All fields are required. We'll get back to you within 24 hours.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-red-600/10 to-transparent rounded-3xl border border-red-600/30">
          <h3 className="text-2xl font-bold mb-6 text-red-400">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: "How long does it take to get a response?", a: "We typically respond to all enquiries within 24 hours during business hours." },
              { q: "Can I change my membership plan?", a: "Yes, you can upgrade or downgrade your plan anytime. Contact our support team for assistance." },
              { q: "Do you offer personal training?", a: "Yes! We offer personalized training sessions. Enquire for more details and pricing." },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-red-600/20 pb-4 last:border-0">
                <p className="font-semibold text-white mb-2">Q: {faq.q}</p>
                <p className="text-gray-300 ml-4">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
