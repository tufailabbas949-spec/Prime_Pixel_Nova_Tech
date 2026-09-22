import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Palette,
  MonitorSmartphone,
  ShoppingCart,
  Layers3,
  Settings,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description:
        "Modern, responsive and high-performance websites designed to represent your business professionally.",
      features: [
        "Business Websites",
        "Landing Pages",
        "Responsive Design",
        "SEO-Friendly Structure",
      ],
    },
    {
      icon: MonitorSmartphone,
      title: "Web Applications",
      description:
        "Custom web applications built around your business requirements, workflows and users.",
      features: [
        "Custom Features",
        "User Authentication",
        "Admin Dashboards",
        "API Integration",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Clean and intuitive interfaces that make your website easier to use and visually professional.",
      features: [
        "Modern UI Design",
        "Responsive Layouts",
        "User-Friendly Experience",
        "Design Systems",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Online stores designed to help businesses showcase products and manage their digital presence.",
      features: [
        "Product Management",
        "Shopping Cart",
        "Order Management",
        "Payment Integration",
      ],
    },
    {
      icon: Layers3,
      title: "Digital Solutions",
      description:
        "Technology solutions tailored to specific business problems, ideas and digital requirements.",
      features: [
        "Custom Platforms",
        "Business Automation",
        "Third-Party Integrations",
        "Scalable Architecture",
      ],
    },
    {
      icon: Settings,
      title: "Website Support",
      description:
        "Ongoing improvements, updates and technical support to keep your website running smoothly.",
      features: [
        "Content Updates",
        "Bug Fixes",
        "Performance Improvements",
        "Technical Support",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We first understand your business, goals, audience and project requirements.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We define the structure, features and development approach for your project.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Our team turns the plan into a responsive and functional digital product.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "After testing and final improvements, your project is ready to go live.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24">
        {/* Background glow */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              <Sparkles size={16} />
              Our Services
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Digital solutions built
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                for your business.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              From modern websites to custom web applications, PPNT helps
              businesses turn ideas into reliable digital experiences.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-gray-300 transition hover:border-blue-500/40 hover:text-white"
              >
                View Services
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              What We Do
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Services that turn ideas into reality.
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              We focus on building practical, modern and scalable digital
              solutions based on your actual business needs.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/10 bg-[#111827] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/30"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-blue-400"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Bottom arrow */}
                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-400">
                    Discuss your project
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= WHY PPNT ================= */}
      <section className="border-y border-white/5 bg-[#0D1424] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Why PPNT
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              We don't just build websites.
              <span className="block text-gray-400">
                We build digital experiences.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Every project is approached with a focus on usability,
              responsiveness, performance and the actual goals of the business.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Learn more about PPNT
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold">
                Responsive
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Designed to work smoothly across mobile, tablet and desktop.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold">
                Modern Stack
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Built using modern technologies and development practices.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold">
                User Focused
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Interfaces designed around real users and business goals.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
              <h3 className="text-lg font-semibold">
                Scalable
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Solutions that can evolve as your business and requirements
                grow.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our Process
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              From idea to launch.
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              A simple and transparent process to take your project from an
              initial idea to a working digital product.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl border border-white/10 bg-[#111827] p-7"
              >
                <span className="text-4xl font-bold text-blue-500/30">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-cyan-500/5 p-8 text-center sm:p-12">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Work Together
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Tell us about your idea and let's explore how we can turn it
              into a professional digital solution.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Services;