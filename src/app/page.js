"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function MyGymFitnessStudio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-red-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Image
            src="/images/logo.jpeg"
            alt="MyGym Logo"
            width={64}
            height={64}
            className="h-16 w-auto"
          />

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-red-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-red-500 transition">
              About
            </a>
            <a href="#gallery" className="hover:text-red-500 transition">
              Gallery
            </a>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </div>

          <button className="md:hidden text-white">
            <Menu size={32} />
          </button>

          <a
            href="https://wa.me/918898111101?text=Hi%20MYGYM,%20I%20want%20to%20join%20the%20gym."
            target="_blank"
            rel="noreferrer noopener"
            className="bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 px-5 py-2 rounded-xl font-semibold transition inline-block"
          >
            Join Now
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            BE THE WITNESS OF FITNESS
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300">
            Premium Fitness Training • Certified Trainers • Modern Equipment
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918898111101?text=Hi%20MYGYM,%20I%20want%20more%20details%20about%20membership."
              target="_blank"
              rel="noreferrer noopener"
              className="bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl transition inline-block"
            >
              Start Today
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 px-8 py-4 rounded-2xl text-lg font-bold transition inline-block"
            >
              Free Trial
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">
          {[
            ["1000+", "Members"],
            ["5+", "Expert Trainers"],
            ["10+", "Programs"],
            ["6 Days", "Open Weekly"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-lg"
            >
              <h2 className="text-4xl font-bold text-red-500">{item[0]}</h2>
              <p className="mt-3 text-gray-400">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1974&auto=format&fit=crop"
              alt="gym"
              width={1200}
              height={800}
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6">About Our Gym</h2>

            <p className="text-gray-400 leading-8 text-lg">
              MyGym Fitness Studio is built to help people transform physically and mentally through structured fitness training, premium equipment, and expert coaching.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                "Certified Trainers",
                "Modern Equipment",
                "Personal Training",
                "Nutrition Support",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800"
                >
                  <p className="font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Programs</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Professional fitness programs designed for every goal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Weight Loss",
              "Muscle Gain",
              "Strength Training",
              "HIIT",
              "Functional Training",
              "Personal Training",
            ].map((program, index) => (
              <div
                key={index}
                className="bg-black p-10 rounded-3xl border border-zinc-800 hover:border-red-600 transition"
              >
                <h3 className="text-2xl font-bold text-red-500 mb-4">{program}</h3>
                <p className="text-gray-400 leading-7">
                  Customized workout plans with expert guidance and performance tracking.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Expert Trainers</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Certified professionals dedicated to your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Raj Kumar",
                title: "Strength Coach",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Priya Sharma",
                title: "Weight Loss Specialist",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Arjun Verma",
                title: "HIIT Coach",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
              },
            ].map((trainer, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600 transition"
              >
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={800}
                  height={600}
                  className="h-96 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{trainer.name}</h3>
                  <p className="text-red-500 mt-2 font-semibold">{trainer.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Member Transformations</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Real results from our dedicated members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lost 15 KG",
                duration: "6 Months Transformation",
                image:
                  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1974&auto=format&fit=crop",
              },
              {
                title: "Gained 8 KG Muscle",
                duration: "4 Months Bulking",
                image:
                  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1974&auto=format&fit=crop",
              },
              {
                title: "Lost 20 KG",
                duration: "8 Months Transformation",
                image:
                  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1974&auto=format&fit=crop",
              },
            ].map((transform, index) => (
              <div
                key={index}
                className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600 transition"
              >
                <Image
                  src={transform.image}
                  alt={transform.title}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-500">{transform.title}</h3>
                  <p className="text-gray-400 mt-2">{transform.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Gallery</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Explore our premium fitness environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1974&auto=format&fit=crop",
            ].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-3xl">
                <Image
                  src={image}
                  alt="gym"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Follow Us On Instagram</h2>
          <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
            Stay updated with our latest workouts, transformations, and fitness tips.
          </p>

          <a
            href="https://instagram.com/mygym_fitness"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 px-8 py-4 rounded-2xl font-bold text-lg transition shadow-xl"
          >
            Visit Instagram
          </a>
        </div>
      </section>

      <section className="py-24 bg-red-600 text-center px-6">
        <h2 className="text-5xl font-extrabold">START YOUR FITNESS JOURNEY TODAY</h2>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Join MyGym Fitness Studio and unlock your full potential with professional guidance and world-class facilities.
        </p>

        <a
          href="https://wa.me/918898111101?text=Hi%20MYGYM,%20I%20want%20to%20book%20a%20free%20trial."
          target="_blank"
          rel="noreferrer noopener"
          className="mt-10 inline-block bg-black hover:bg-zinc-900 hover:scale-105 active:scale-95 px-10 py-5 rounded-2xl font-bold text-lg transition"
        >
          Book Free Trial
        </a>
      </section>

      <div className="flex justify-center mt-12">
        <a
          href="https://wa.me/918898111101"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg shadow-2xl hover:bg-green-600 transition duration-300"
        >
          <span>💬</span>
          WhatsApp Us
        </a>
      </div>

      <section id="contact" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6">
          <div>
            <h2 className="text-5xl font-bold mb-8">Contact Us</h2>

            <div className="space-y-6 text-lg text-gray-300">
              <p>📍New Panvel, Maharashtra</p>
              <p>📞 +91 8898111101</p>
              <p>📧 mygymfitness@gmail.com</p>
              <p>🕒 Monday - Saturday | 5 AM - 11 PM</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.3525788021734!2d73.12033617387277!3d18.997729854427647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e85ccd05f1c1%3A0xcdc23d207210eaf4!2sMY%20GYM!5e1!3m2!1sen!2sin!4v1778931270435!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, marginTop: "2rem" }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl"
            />
          </div>

          <div className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 shadow-xl">
            <form
              action="https://formsubmit.co/ahmad967035@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />

              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 py-4 rounded-2xl font-bold transition"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/918898111101"
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-20 md:bottom-6 right-6 bg-green-500 hover:bg-green-600 hover:scale-110 active:scale-95 p-4 rounded-full shadow-2xl z-40 transition"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </a>

      <div className="fixed bottom-0 left-0 w-full md:hidden bg-black border-t border-zinc-800 flex z-30">
        <a
          href="tel:+918898111101"
          className="w-1/2 text-center py-4 bg-red-600 font-bold hover:bg-red-700 transition"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/918898111101"
          target="_blank"
          rel="noreferrer noopener"
          className="w-1/2 text-center py-4 bg-green-500 font-bold hover:bg-green-600 transition"
        >
          💬 WhatsApp
        </a>
      </div>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-10 text-center">
        <div className="flex justify-center gap-6 text-3xl mb-6">
          <a href="#">
            <FaInstagram className="hover:text-red-500 transition" />
          </a>

          <a href="#">
            <FaWhatsapp className="hover:text-green-500 transition" />
          </a>

          <a href="#">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
        </div>

        <p className="text-gray-500">© 2026 MYGYM Fitness Studio</p>
      </footer>
    </div>
  );
}
