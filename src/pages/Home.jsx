
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2">

            {/* Hero Content */}
            <div className="max-w-2xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Web Development & Digital Solutions
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                We Build.
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  You Grow.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                PPNT helps businesses turn their ideas into modern,
                responsive and high-quality digital experiences.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact"
                  className="rounded-xl bg-blue-600 px-6 py-3.5 text-center font-semibold transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  Start a Project
                </Link>

                <Link
                  to="/services"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center font-semibold transition hover:bg-white/10"
                >
                  Explore Services
                </Link>

              </div>

              {/* Small Trust Points */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
                <span>✓ Responsive Design</span>
                <span>✓ Modern UI/UX</span>
                <span>✓ Scalable Solutions</span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-blue-950/40 backdrop-blur">

                <div className="rounded-2xl border border-white/10 bg-[#111827] p-5 sm:p-7">

                  {/* Browser Header */}
                  <div className="mb-7 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />

                    <div className="ml-3 h-7 flex-1 rounded-md bg-white/5" />
                  </div>

                  {/* Fake Dashboard */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-xl bg-blue-600/20" />
                    <div className="h-20 rounded-xl bg-white/5" />
                    <div className="h-20 rounded-xl bg-white/5" />
                  </div>

                  <div className="mt-4 h-32 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-400/10" />

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-16 rounded-xl bg-white/5" />
                    <div className="h-16 rounded-xl bg-white/5" />
                  </div>

                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-3 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl sm:-left-8">
                <p className="text-xs text-gray-500">
                  Digital Solutions
                </p>
                <p className="mt-1 font-semibold text-white">
                  Built for Growth
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="border-t border-white/5 bg-[#0D1424]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Digital solutions built around your business.
            </h2>

            <p className="mt-4 text-gray-400">
              From business websites to custom web applications,
              we help turn ideas into practical digital products.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Web Development",
                text: "Fast, responsive and modern websites for businesses.",
                icon: "01",
              },
              {
                title: "UI/UX Design",
                text: "Clean interfaces designed for better user experiences.",
                icon: "02",
              },
              {
                title: "Web Applications",
                text: "Custom web apps designed around your workflow.",
                icon: "03",
              },
              {
                title: "Digital Solutions",
                text: "Technology solutions that help your business grow.",
                icon: "04",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-sm font-bold text-blue-400">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {service.text}
                </p>

                <Link
                  to="/services"
                  className="mt-5 inline-block text-sm font-medium text-blue-400 transition group-hover:text-blue-300"
                >
                  Learn more →
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY PPNT ================= */}
      <section className="bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Why PPNT
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                We focus on building useful digital experiences.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                Every project starts with understanding the idea,
                the users and the business goal. We then design and
                develop a solution around those needs.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                More About PPNT →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                ["01", "User Focused", "Interfaces designed with the user in mind."],
                ["02", "Responsive", "Experiences that work across devices."],
                ["03", "Modern Stack", "Modern technologies for reliable products."],
                ["04", "Long-Term", "Solutions designed to grow with your business."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="text-sm text-blue-400">
                    {number}
                  </span>

                  <h3 className="mt-4 font-semibold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="border-t border-white/5 bg-[#0D1424]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From idea to launch.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {[
              ["01", "Discover", "We understand your idea and requirements."],
              ["02", "Design", "We create a clean and intuitive experience."],
              ["03", "Develop", "We build the solution using modern technology."],
              ["04", "Launch", "We deploy and help you move forward."],
            ].map(([number, title, text]) => (
              <div key={number} className="relative">
                <div className="mb-4 text-3xl font-bold text-blue-500/40">
                  {number}
                </div>

                <h3 className="text-lg font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#0B1120]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Let's Build Something
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Have an idea?
            <span className="block text-gray-400">
              Let's turn it into reality.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Tell us about your project and let's discuss how
            PPNT can help bring your idea online.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-700"
            >
              Start a Project
            </Link>

            <a
              href="https://wa.me/919352529855?text=Hello%20PPNT%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold transition hover:bg-white/10"
            >
              WhatsApp Us
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

