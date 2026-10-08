import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    Send,
    Clock,
    CheckCircle,
} from "lucide-react";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const service = form.service.value;
        const budget = form.budget.value;
        const message = form.message.value;

        const whatsappMessage = `
Hello PPNT,

I have a project enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Budget: ${budget}

Project Details:
${message}
  `.trim();

        const whatsappUrl = `https://wa.me/919352529855?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank");

        // Backend connect karne ke baad yahan API call kar sakte ho
    };

    return (
        <main className="min-h-screen bg-[#0B1120] text-white">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden px-6 pt-32 pb-20">
                {/* Background glow */}
                <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                            Contact PPNT
                        </p>

                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Let's build something
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                great together.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                            Have a website idea, business project, or digital solution in
                            mind? Tell us about it and let's discuss how PPNT can help.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CONTACT SECTION ================= */}
            <section className="px-6 pb-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">

                    {/* ================= LEFT INFO ================= */}
                    <div className="lg:col-span-2">

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Get in touch
                            </h2>

                            <p className="mt-3 leading-7 text-gray-400">
                                Whether you need a business website, web application, or
                                custom digital solution, we'd love to hear about your project.
                            </p>
                        </div>

                        {/* Contact Items */}
                        <div className="space-y-5">

                            {/* Email */}
                            <a
                                href="mailto:primepixelnovatech@gmail.com?subject=Website%20Project%20Inquiry"
                                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#111827] p-5 transition hover:-translate-y-1 hover:border-blue-500/40"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                    <Mail size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="mt-1 text-sm font-medium text-gray-200 group-hover:text-blue-400">
                                        primepixelnovatech@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+919352529855"
                                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#111827] p-5 transition hover:-translate-y-1 hover:border-blue-500/40"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                    <Phone size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Call us</p>
                                    <p className="mt-1 text-sm font-medium text-gray-200 group-hover:text-blue-400">
                                        +91 9352529855
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#111827] p-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                    <MapPin size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="mt-1 text-sm font-medium text-gray-200">
                                        India
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#111827] p-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                    <Clock size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Working hours</p>
                                    <p className="mt-1 text-sm font-medium text-gray-200">
                                        Mon - Sat · 10:00 AM - 7:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Small trust text */}
                        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
                            <div className="flex gap-3">
                                <CheckCircle
                                    size={20}
                                    className="mt-0.5 shrink-0 text-blue-400"
                                />

                                <p className="text-sm leading-6 text-gray-300">
                                    Tell us what you need, and we'll get back to you with the
                                    next steps for your project.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* ================= FORM ================= */}
                    <div className="lg:col-span-3">
                        <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-2xl shadow-black/20 sm:p-8">

                            <div className="mb-7">
                                <h2 className="text-2xl font-bold">
                                    Start a project
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-gray-400">
                                    Share a few details about your project and we'll contact you.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Name + Phone */}
                                <div className="grid gap-5 sm:grid-cols-2">

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-300">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-300">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 XXXXX XXXXX"
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
                                        />
                                    </div>

                                </div>

                                {/* Email */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        What do you need?
                                    </label>

                                    <select
                                        name="service"
                                        required
                                        defaultValue=""
                                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-gray-300 outline-none transition focus:border-blue-500"
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        <option value="website">Business Website</option>
                                        <option value="web-app">Web Application</option>
                                        <option value="ui-ux">UI/UX Design</option>
                                        <option value="ecommerce">E-Commerce Website</option>
                                        <option value="custom">Custom Digital Solution</option>
                                    </select>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        Approximate Budget
                                    </label>

                                    <select
                                        name="budget"
                                        defaultValue=""
                                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-gray-300 outline-none transition focus:border-blue-500"
                                    >
                                        <option value="" disabled>
                                            Select your budget
                                        </option>
                                        <option value="under-10k">Under ₹10,000</option>
                                        <option value="10k-25k">₹10,000 - ₹25,000</option>
                                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                                        <option value="50k-plus">₹50,000+</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        Tell us about your project
                                    </label>

                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us about your business, website idea, required features, or any questions..."
                                        required
                                        className="w-full resize-none rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                                >
                                    Send Enquiry

                                    <Send
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </button>

                                <p className="text-center text-xs text-gray-500">
                                    We'll review your enquiry and get back to you.
                                </p>

                            </form>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-cyan-500/5 p-8 text-center sm:p-12">

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Have an idea?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Let's turn your idea into a modern digital experience.
                    </p>

                    <Link
                        to="/services"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                    >
                        Explore Services
                        <ArrowRight size={18} />
                    </Link>

                </div>
            </section>

            {/* ================= FLOATING CONTACT BUTTONS ================= */}
            <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">

                {/* WhatsApp */}
                <a
                    href="https://wa.me/919352529855?text=Hello%20PPNT%2C%20I%20want%20to%20discuss%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with PPNT on WhatsApp"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/20 transition hover:scale-110 hover:bg-[#20bd5a]"
                >
                    <MessageCircle size={27} strokeWidth={2.5} />
                </a>

                {/* Call */}
                <a
                    href="tel:+9193525229855"
                    aria-label="Call PPNT"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/20 transition hover:scale-110 hover:bg-blue-500"
                >
                    <Phone size={25} strokeWidth={2.5} />
                </a>

            </div>

        </main>
    );
};

export default Contact;