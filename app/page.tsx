"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Button = ({ children, className, ...props }) => (
  <button className={`transition-all duration-300 ${className}`} {...props}>{children}</button>
);

const menuData = {
  Biryani: [
    "Chicken Biryani",
    "Mutton Biryani",
    "Veg Biryani"
  ],
  Starters: [
    "Chicken 65",
    "Paneer Tikka",
    "Chilli Chicken"
  ],
  MainCourse: [
    "Butter Chicken",
    "Dal Makhani",
    "Kadai Paneer"
  ],
  Drinks: [
    "Mocktails",
    "Beer",
    "Soft Drinks"
  ]
};

export default function UrbanSambaralu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white font-[Playfair_Display]">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <div className="leading-tight group cursor-pointer">
          <h1 className="text-2xl tracking-wide bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
            Urban Sambaralu
          </h1>
          <p className="text-[10px] text-gray-400 tracking-[0.3em] group-hover:text-yellow-300 transition">
            BAR & KITCHEN
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="hidden md:block text-xs border border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          Reserve
        </button>
      </nav>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555992336-03a23c7b20ee')] bg-cover bg-center scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] -translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >

          <div className="mb-6 leading-tight">
            <p className="text-xs md:text-sm text-yellow-300 tracking-[0.6em] font-semibold">
              URBAN
            </p>

            <div className="relative inline-block">
              <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight
                bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700
                bg-clip-text text-transparent
                drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]
                [text-shadow:0_2px_0_#b8860b,0_4px_0_#996515,0_10px_25px_rgba(0,0,0,0.9)]">
                సంబరాలు
              </h1>

              <div className="absolute inset-0 overflow-hidden">
                <div className="shine absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-7 text-2xl md:text-3xl">
            వంటకం కాదు ఇది - ఒకజ్ఞాపకం
          </p>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => setOpen(true)}
              className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:scale-110 shadow-lg shadow-yellow-500/30"
            >
              Book Table
            </Button>

            <Button
              onClick={() => document.getElementById("menu")?.scrollIntoView()}
              className="border border-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black"
            >
              View Menu
            </Button>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl text-yellow-400 mb-10">Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Premium Dining", "Luxury Ambience", "Finest Taste"].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="bg-[#111] p-10 rounded-3xl border border-gray-800">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-6 text-center">
        <h2 className="text-4xl text-yellow-400 mb-10">Signature Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Biryani", "Starters", "Drinks"].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="bg-[#111] p-10 rounded-3xl border border-gray-800">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKING MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#111] p-8 rounded-2xl w-[90%] max-w-md">
            <h2 className="text-2xl mb-4 text-yellow-400">Book a Table</h2>

            <input placeholder="Name" className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" />
            <input placeholder="Phone" className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" />
            <input type="date" className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" />
            <input type="time" className="w-full mb-3 p-3 bg-black border border-gray-700 rounded" />

            <Button className="w-full bg-yellow-400 text-black py-3 rounded mt-3" onClick={() => window.open("https://wa.me/919398069499")}>
              Confirm Booking
            </Button>

            <button onClick={() => setOpen(false)} className="mt-4 text-gray-400">Close</button>
          </motion.div>
        </div>
      )}

      {/* WHATSAPP */}
      <a href="https://wa.me/919398069499" target="_blank" className="fixed bottom-6 right-4 bg-green-500 px-5 py-4 rounded-full shadow-xl hover:scale-110">
        💬
      </a>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Urban Sambaralu
      </footer>

    </div>
  );
}
