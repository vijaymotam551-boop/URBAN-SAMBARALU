"use client";

import { motion } from "framer-motion";

const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>{children}</button>
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
  return (
    <div className="bg-black text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-500">Urban Sambaralu</h1>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#menu" className="hover:text-yellow-500">Menu</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-5xl font-bold mb-6">Explore Our Menu</h1>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => window.open("tel:+916303753990")}
              className="bg-yellow-500 text-black px-6 py-3 rounded-2xl"
            >
              Reserve Table
            </Button>
            <Button
              onClick={() => document.getElementById("menu")?.scrollIntoView()}
              className="border px-6 py-3 rounded-2xl"
            >
              View Menu
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ADVANCED MENU */}
      <section id="menu" className="py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Our Special Menu</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {Object.entries(menuData).map(([category, items], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl text-yellow-500 mb-4">{category}</h3>

              <ul className="space-y-2 text-gray-300">
                {items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item}</span>
                    <span className="text-gray-500">₹---</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl mb-6">Visit Us</h2>
        <p className="text-gray-400">Meerpet, Hyderabad</p>
        <p className="text-gray-500 mb-6">Open: 11 AM – 12 AM</p>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => window.open("https://maps.google.com/?q=Urban+Sambaralu")}
            className="bg-yellow-500 text-black px-6 py-3 rounded-2xl"
          >
            Get Directions
          </Button>

          <Button
            onClick={() => window.open("tel:+916303753990")}
            className="border px-6 py-3 rounded-2xl"
          >
            Call Now
          </Button>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/916303753990?text=Hi%20I%20want%20to%20reserve%20a%20table"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 bg-green-500 px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Urban Sambaralu
      </footer>

    </div>
  );
}
