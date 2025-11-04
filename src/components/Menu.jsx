import React, { useState, useEffect, useRef } from "react";
import menuData from "../data/menu.json";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [selectedSection, setSelectedSection] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...Object.keys(menuData.menu)];
  const lastScrollY = useRef(0);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollUp(current < lastScrollY.current);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCategory =
    selectedCategory === "All" ? menuData.menu : { [selectedCategory]: menuData.menu[selectedCategory] };

  const sections = selectedCategory === "All"
    ? Object.values(menuData.menu).flatMap(Object.keys)
    : ["All", ...Object.keys(menuData.menu[selectedCategory])];

  const items =
    selectedCategory === "All"
      ? Object.values(menuData.menu).flatMap((obj) =>
          Object.values(obj).flat()
        )
      : selectedSection === "All"
      ? Object.values(menuData.menu[selectedCategory]).flat()
      : menuData.menu[selectedCategory][selectedSection];

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="min-h-screen bg-[#0B1211] text-white pt-28 pb-20 px-6">

      <h1 className="text-4xl md:text-5xl font-serif text-[#CBA875] text-center mb-10">
        Our Menu
      </h1>

      {/* 🟨 Main Category Tabs */}
      <div
        className={`bg-[#0B1211]/95 backdrop-blur border-b border-[#CBA875]/20 sticky z-30 shadow-lg transition-all`}
        style={{ top: scrollUp ? "80px" : "0px" }}
      >
        <div className="flex flex-wrap gap-3 justify-center py-4 px-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setSelectedCategory(c);
                setSelectedSection("All");
              }}
              className={`px-4 py-2 rounded-md font-semibold transition-all ${
                selectedCategory === c
                  ? "bg-[#CBA875] text-black"
                  : "bg-transparent border border-[#CBA875]/40 text-[#CBA875] hover:bg-[#CBA875]/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* 🟦 Sub-Sections */}
      <div className="flex flex-wrap gap-2 justify-center my-6">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => setSelectedSection(sec)}
            className={`px-3 py-1 text-sm rounded border transition-all ${
              selectedSection === sec
                ? "bg-[#CBA875] text-black border-[#CBA875]"
                : "border-[#CBA875]/40 text-[#CBA875] hover:bg-[#CBA875]/40"
            }`}
          >
            {sec}
          </button>
        ))}
      </div>

      {/* 🔍 Search */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-black/40 text-white border border-[#CBA875]/30 focus:outline-none focus:ring-2 focus:ring-[#CBA875]"
        />
      </div>

      {/* 🍽 Display Items */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-[#0F1917] border border-[#CBA875]/30 rounded-md 
            hover:border-[#CBA875] hover:shadow-lg hover:shadow-[#CBA875]/20 
            transition-all cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2 text-[#E8D9B5]">{item.name}</h3>
            {item.description && <p className="text-sm text-gray-400 mb-2">{item.description}</p>}

            {item.price && <p className="text-[#CBA875] font-bold text-lg">₹{item.price}</p>}

            {item.options && (
              <div className="mt-2 text-sm text-gray-300 space-y-1">
                {Object.entries(item.options).map(([opt, price]) => (
                  <p key={opt}>• {opt}: <span className="text-[#CBA875]">₹{price}</span></p>
                ))}
              </div>
            )}

            {item.sizes && (
              <div className="mt-2 text-sm text-gray-300 space-y-1">
                {Object.entries(item.sizes).map(([size, price]) => (
                  <p key={size}>• {size}: <span className="text-[#CBA875]">₹{price}</span></p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
