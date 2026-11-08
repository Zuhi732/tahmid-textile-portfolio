"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Factory,
  Globe2,
  GraduationCap,
  Layers3,
  MapPin,
  Menu,
  Scissors,
  Shirt,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    number: "01",
    title: "Apparel Engineering",
    description:
      "Understanding garment construction, apparel processes and manufacturing workflows.",
    icon: Shirt,
  },
  {
    number: "02",
    title: "Merchandising",
    description:
      "Exposure to sampling, order coordination and buyer-house operations.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Production Follow-up",
    description:
      "Learning production coordination and the flow of garment manufacturing.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Fabrics & Trims",
    description:
      "Developing practical knowledge of textile materials and garment accessories.",
    icon: Scissors,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#F5F3ED] text-[#203A32]"
    >
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#203A32]/10 bg-[#F5F3ED]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="#top" className="text-xl font-bold tracking-tight">
            TH<span className="text-[#C77C4B]">.</span>
            <span className="ml-2 text-[10px] font-normal tracking-[0.25em]">
              PORTFOLIO
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-widest text-[#52645D] transition-colors hover:text-[#C77C4B]"
              >
                {item.label.toUpperCase()}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/8801759099069?text=Hello%20Tahmid%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-[#203A32] px-5 py-3 text-[10px] tracking-[0.2em] transition-all hover:bg-[#203A32] hover:text-white md:block"
          >
            LET'S CONNECT ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#203A32]/10 bg-[#F5F3ED] px-6 py-6 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-[#203A32]/10 py-4 text-sm tracking-widest"
              >
                {item.label.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex w-full items-center justify-between bg-[#203A32] px-5 py-4 text-xs font-semibold tracking-[0.25em] text-[#F5F3ED] transition-colors hover:bg-[#C77C4B]"
            >
              <span>LET'S CONNECT</span>
              <span className="text-lg">↗</span>
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C77C4B]" />
            <p className="text-[10px] tracking-[0.3em] text-[#C77C4B]">
              TEXTILE ENGINEERING PORTFOLIO
            </p>
          </div>

          <p className="mb-4 text-sm tracking-[0.2em] text-[#718078]">
            HELLO, I'M
          </p>

          <h1 className="font-serif text-6xl leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            Tahmid
            <br />
            <span className="italic text-[#C77C4B]">Tasbe.</span>
          </h1>

          <h2 className="mt-8 text-sm font-medium tracking-[0.17em] sm:text-base">
            TEXTILE ENGINEER
          </h2>

          <p className="mt-3 text-xs tracking-[0.12em] text-[#78847D]">
            MAJOR IN APPAREL ENGINEERING
          </p>

          <p className="mt-7 max-w-lg text-sm leading-8 text-[#65736C]">
            Exploring the intersection of textile innovation, apparel
            manufacturing and merchandising. Passionate about understanding the
            processes behind every garment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="flex items-center gap-3 bg-[#203A32] px-7 py-4 text-[10px] tracking-[0.2em] text-white transition-all hover:bg-[#C77C4B]"
            >
              EXPLORE PORTFOLIO
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#experience"
              className="flex items-center gap-3 border border-[#203A32]/30 px-7 py-4 text-[10px] tracking-[0.2em] transition-all hover:border-[#C77C4B] hover:text-[#C77C4B]"
            >
              MY EXPERIENCE
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-10 border-t border-[#203A32]/15 pt-8">
            <div>
              <p className="font-serif text-3xl">3.47</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-[#87918A]">
                CURRENT CGPA / 4.00
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl">6.5</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-[#87918A]">
                IELTS BAND
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl">2021–22</p>
              <p className="mt-2 text-[9px] tracking-[0.2em] text-[#87918A]">
                ACADEMIC SESSION
              </p>
            </div>
          </div>
        </motion.div>

        {/* PROFILE PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -right-5 -top-5 h-full w-full border border-[#C77C4B]/50" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[#D9D5C9]">
            <img
              src="/Tahmid.jpeg"
              alt="Portrait of Tahmid Tasbe"
              className="h-full w-full object-cover object-top"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#152820]/80 to-transparent p-8 pt-24">
              <p className="text-[10px] tracking-[0.3em] text-white/70">
                APPAREL ENGINEERING
              </p>
              <p className="mt-2 font-serif text-2xl text-white">
                Learning. Creating. Growing.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-7 hidden bg-[#C77C4B] p-6 text-white sm:block">
            <p className="font-serif text-3xl">TT.</p>
            <p className="mt-1 text-[9px] tracking-[0.2em]">
              PERSONAL PORTFOLIO
            </p>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        className="scroll-mt-24 bg-[#203A32] px-6 py-24 text-white lg:px-12"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#D99A70]">
              01 / ABOUT ME
            </p>
            <h2 className="mt-7 font-serif text-5xl leading-tight sm:text-6xl">
              Beyond
              <br />
              <span className="italic text-[#D99A70]">the fabric.</span>
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="text-lg leading-9 text-white/85">
              I am a final-year BSc student in Textile Engineering, majoring in
              Apparel Engineering at Textile Engineering College, Noakhali.
            </p>

            <p className="mt-6 text-sm leading-8 text-white/60">
              My academic journey and internship experience have helped me
              develop an understanding of garment manufacturing workflows,
              merchandising operations, fabrics, trims and production
              coordination. I am interested in continuously learning and
              developing my knowledge of the apparel industry.
            </p>

            <div className="mt-12 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-2">
              <div>
                <MapPin className="mb-4 text-[#D99A70]" size={22} />
                <p className="text-xs tracking-widest text-white/50">
                  INSTITUTION
                </p>
                <p className="mt-2 text-sm">Textile Engineering College</p>
                <p className="text-sm text-white/60">Noakhali, Bangladesh</p>
              </div>

              <div>
                <GraduationCap className="mb-4 text-[#D99A70]" size={22} />
                <p className="text-xs tracking-widest text-white/50">
                  SPECIALIZATION
                </p>
                <p className="mt-2 text-sm">Apparel Engineering</p>
                <p className="text-sm text-white/60">Textile Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        id="experience"
        className="scroll-mt-24 px-6 py-24 lg:px-12"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.3em] text-[#C77C4B]">
            02 / PROFESSIONAL JOURNEY
          </p>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-serif text-5xl sm:text-6xl">
              Work <span className="italic text-[#C77C4B]">Experience.</span>
            </h2>
            <BriefcaseBusiness size={30} className="text-[#C77C4B]" />
          </div>

          <div className="mt-14 border-y border-[#203A32]/20 py-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#C77C4B]">
                  SEPTEMBER — OCTOBER 2026
                </p>

                <h3 className="mt-5 font-serif text-3xl">
                  Merchandising Intern
                </h3>

                <p className="mt-3 text-sm font-medium">Renaissance Group</p>
                <p className="text-sm text-[#78847D]">
                  Renaissance Barind Limited
                </p>

                <p className="mt-5 flex items-center gap-2 text-xs text-[#78847D]">
                  <MapPin size={14} />
                  Uttara, Dhaka, Bangladesh
                </p>

                <p className="mt-3 text-xs text-[#78847D]">
                  04 September 2026 – 31 October 2026
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#C77C4B]">
                  INTERNSHIP HIGHLIGHTS
                </p>

                <ul className="mt-7 space-y-6">
                  {[
                    "Gained practical exposure to merchandising operations in a buying-house environment.",
                    "Observed and supported coordination related to sampling, production follow-up and buyer communication.",
                    "Developed practical understanding of garment manufacturing workflows, fabrics, trims and order-related coordination.",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-5">
                      <span className="font-serif text-xl text-[#C77C4B]">
                        0{index + 1}
                      </span>
                      <p className="max-w-xl text-sm leading-8 text-[#65736C]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* EDUCATION SECTION */}
      <motion.section
        id="education"
        className="scroll-mt-24 bg-[#E9E7DE] px-6 py-24 lg:px-12"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.3em] text-[#C77C4B]">
            03 / ACADEMIC BACKGROUND
          </p>

          <h2 className="mt-5 font-serif text-5xl sm:text-6xl">
            Education<span className="text-[#C77C4B]">.</span>
          </h2>

          <div className="mt-12 border border-[#203A32]/15 bg-[#F5F3ED] p-8 sm:p-12">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <GraduationCap size={32} className="text-[#C77C4B]" />

                <h3 className="mt-7 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
                  Bachelor of Science in Textile Engineering
                </h3>

                <p className="mt-4 text-sm tracking-wide text-[#C77C4B]">
                  MAJOR: APPAREL ENGINEERING
                </p>

                <p className="mt-7 text-base font-medium">
                  Textile Engineering College, Noakhali
                </p>

                <p className="mt-2 text-sm text-[#78847D]">
                  Academic Session: 2021–2022
                </p>

                <p className="mt-2 text-sm text-[#78847D]">
                  Final-Year Student
                </p>
              </div>

              <div className="border border-[#C77C4B]/40 p-7">
                <p className="text-[10px] tracking-[0.2em] text-[#78847D]">
                  CURRENT CGPA
                </p>
                <p className="mt-3 font-serif text-5xl text-[#203A32]">3.47</p>
                <p className="mt-2 text-xs text-[#78847D]">OUT OF 4.00</p>
              </div>
            </div>

            {/* HSC & SSC EDUCATION CARDS */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* HSC CARD */}
              <div className="border border-[#203A32]/15 bg-white/50 p-6 sm:p-8">
                <p className="text-[10px] tracking-[0.25em] text-[#C77C4B]">
                  HIGHER SECONDARY CERTIFICATE · 2021
                </p>

                <h3 className="mt-5 font-serif text-2xl text-[#203A32]">
                  Higher Secondary Certificate (HSC)
                </h3>

                <p className="mt-3 text-sm font-medium text-[#203A32]">
                  Noakhali Government College
                </p>

                <div className="mt-7 flex justify-between items-end border-t border-[#203A32]/15 pt-5">
                  <div>
                    <p className="text-[10px] tracking-widest text-[#78847D]">
                      BOARD
                    </p>
                    <p className="mt-2 text-sm text-[#203A32]">Cumilla</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] tracking-widest text-[#78847D]">
                      GPA
                    </p>
                    <p className="mt-1 font-serif text-4xl text-[#203A32]">
                      5.00
                    </p>
                    <span className="text-xs tracking-widest text-[#C77C4B]">
                      A+ · OUT OF 5.00
                    </span>
                  </div>
                </div>
              </div>

              {/* SSC CARD */}
              <div className="border border-[#203A32]/15 bg-white/50 p-6 sm:p-8">
                <p className="text-[10px] tracking-[0.25em] text-[#C77C4B]">
                  SECONDARY SCHOOL CERTIFICATE · 2019
                </p>

                <h3 className="mt-5 font-serif text-2xl text-[#203A32]">
                  Secondary School Certificate (SSC)
                </h3>

                <p className="mt-3 text-sm font-medium text-[#203A32]">
                  Begumganj Government Pilot High School
                </p>

                <div className="mt-7 flex justify-between items-end border-t border-[#203A32]/15 pt-5">
                  <div>
                    <p className="text-[10px] tracking-widest text-[#78847D]">
                      BOARD
                    </p>
                    <p className="mt-2 text-sm text-[#203A32]">Cumilla</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] tracking-widest text-[#78847D]">
                      GPA
                    </p>
                    <p className="mt-1 font-serif text-4xl text-[#203A32]">
                      5.00
                    </p>
                    <span className="text-xs tracking-widest text-[#C77C4B]">
                      A+ · OUT OF 5.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOCUS AREAS */}
      <motion.section
        id="focus"
        className="scroll-mt-24 px-6 py-24 lg:px-12"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.3em] text-[#C77C4B]">
            04 / AREAS OF INTEREST & EXPOSURE
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
            Exploring the world of{" "}
            <span className="italic text-[#C77C4B]">textiles.</span>
          </h2>

          <div className="mt-14 grid gap-px bg-[#203A32]/15 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#F5F3ED] p-7 transition-colors hover:bg-[#E9E7DE]"
                >
                  <p className="text-xs tracking-widest text-[#C77C4B]">
                    {area.number}
                  </p>

                  <Icon size={30} className="mt-10 text-[#203A32]" />

                  <h3 className="mt-7 font-serif text-2xl">{area.title}</h3>

                  <p className="mt-4 text-xs leading-7 text-[#78847D]">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* LANGUAGE SECTION */}
      <motion.section
        className="bg-[#203A32] px-6 py-20 text-white lg:px-12"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#D99A70]">
              05 / COMMUNICATION
            </p>

            <h2 className="mt-5 font-serif text-5xl">
              Language <span className="italic text-[#D99A70]">Skills.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-b border-white/20 pb-6">
              <div className="flex items-center justify-between">
                <p className="text-lg">Bangla</p>
                <span className="text-xs tracking-widest text-[#D99A70]">
                  NATIVE
                </span>
              </div>
            </div>

            <div className="border-b border-white/20 pb-6">
              <div className="flex items-center justify-between">
                <p className="text-lg">English</p>
                <span className="text-xs tracking-widest text-[#D99A70]">
                  PROFESSIONAL WORKING PROFICIENCY
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <Globe2 size={19} className="text-[#D99A70]" />
                  <p className="text-sm">IELTS Academic — Overall 6.5</p>
                </div>

                <div className="mt-5 grid grid-cols-4 gap-3">
                  {[
                    ["Listening", "6.0"],
                    ["Reading", "7.0"],
                    ["Writing", "6.0"],
                    ["Speaking", "6.0"],
                  ].map(([skill, score]) => (
                    <div key={skill} className="bg-white/10 p-3">
                      <p className="font-serif text-2xl">{score}</p>
                      <p className="mt-2 text-[9px] text-white/50">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-28 text-center lg:px-12"
      >
        <p className="text-[10px] tracking-[0.3em] text-[#C77C4B]">
          06 / GET IN TOUCH
        </p>

        <h2 className="mx-auto mt-7 max-w-3xl font-serif text-5xl leading-tight sm:text-7xl">
          Let's create something{" "}
          <span className="italic text-[#C77C4B]">meaningful.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#78847D]">
          Interested in textile engineering, apparel manufacturing or
          merchandising? I welcome opportunities to learn, collaborate and grow
          professionally.
        </p>

        <a
          href="#top"
          className="mt-10 inline-flex items-center gap-3 bg-[#203A32] px-8 py-4 text-[10px] tracking-[0.2em] text-white transition-all hover:bg-[#C77C4B]"
        >
          BACK TO TOP
          <ArrowDown size={15} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#203A32]/15 px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <p className="text-sm font-bold tracking-widest">
            TAHMID TASBE<span className="text-[#C77C4B]">.</span>
          </p>

          <p className="text-[10px] tracking-widest text-[#78847D]">
            TEXTILE ENGINEERING • APPAREL ENGINEERING
          </p>

          <p className="text-[10px] text-[#78847D]">
            © {currentYear} Tahmid Tasbe. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
