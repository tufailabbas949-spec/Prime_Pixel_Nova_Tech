
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              About PPNT
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building digital
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                experiences that matter.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              PPNT is a services-based digital agency focused on building
              modern websites, web applications and digital solutions for
              businesses and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="border-t border-white/5 bg-[#0D1424]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                More than just a web development agency.
              </h2>

              <p className="mt-6 leading-7 text-gray-400">
                At PPNT, we believe a website should do more than simply
                look good. It should communicate your brand, provide a
                smooth user experience and support your business goals.
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                We work with businesses, startups and individuals to turn
                ideas into practical digital experiences using modern web
                technologies.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
              >
                Work With Us
              </Link>
            </div>

            {/* Stats / Visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold text-blue-400">01</p>
                <h3 className="mt-4 font-semibold">
                  User Focused
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  We keep the user experience at the center of our work.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold text-blue-400">02</p>
                <h3 className="mt-4 font-semibold">
                  Modern
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  We use modern technologies and development practices.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold text-blue-400">03</p>
                <h3 className="mt-4 font-semibold">
                  Practical
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  We build solutions around real business requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold text-blue-400">04</p>
                <h3 className="mt-4 font-semibold">
                  Scalable
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Our solutions are designed to grow with your needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT WE BELIEVE ================= */}
      <section className="bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Simple principles behind our work.
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              We focus on creating digital products that are useful,
              understandable and built around the people who use them.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                01
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Design With Purpose
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Every design decision should have a reason and contribute
                to a better user experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                02
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Technology That Helps
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                We choose technology based on the project's actual needs,
                not simply because it is popular.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                03
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Long-Term Thinking
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                We aim to create solutions that can evolve as a business
                grows and its requirements change.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="border-t border-white/5 bg-[#0D1424]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Turning ideas into digital products.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                From a simple business website to a custom web application,
                we help bring ideas from concept to launch.
              </p>
            </div>

            <div className="space-y-4">

              {[
                "Business Websites",
                "Web Applications",
                "UI/UX Design",
                "Responsive Web Development",
                "Custom Digital Solutions",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <span className="text-sm font-semibold text-blue-400">
                    0{index + 1}
                  </span>

                  <span className="font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A simple process. Clear communication.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-4">

            {[
              ["01", "Understand", "We learn about your idea and goals."],
              ["02", "Plan", "We define the right solution and direction."],
              ["03", "Build", "We design and develop the product."],
              ["04", "Deliver", "We launch the final solution."],
            ].map(([number, title, text]) => (
              <div key={number} className="text-center md:text-left">
                <div className="text-3xl font-bold text-blue-500/50">
                  {number}
                </div>

                <h3 className="mt-3 font-semibold">
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
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Have an idea?
            <span className="block text-gray-400">
              Let's build it together.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Tell us about your project and let's explore how PPNT
            can turn your idea into a digital experience.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Start a Project
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
