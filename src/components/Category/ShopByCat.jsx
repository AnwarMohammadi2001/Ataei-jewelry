import React from "react";

const categories = [
  {
    name: "Rings",
    image: "https://via.placeholder.com/300x200?text=Rings",
  },
  {
    name: "Necklaces",
    image: "https://via.placeholder.com/300x200?text=Necklaces",
  },
  {
    name: "Bracelets",
    image: "https://via.placeholder.com/300x200?text=Bracelets",
  },
  {
    name: "Earrings",
    image: "https://via.placeholder.com/300x200?text=Earrings",
  },
  {
    name: "Bracelets",
    image: "https://via.placeholder.com/300x200?text=Bracelets",
  },
  {
    name: "Earrings",
    image: "https://via.placeholder.com/300x200?text=Earrings",
  },
];

const ShopByCat = () => {
  return (
    <section className="py-10 px-10 bg-gray-50">
      <h2 className="text-2xl font-bold">Shop Jewlary by Category</h2>
      <p className="py-3 text-lg">Thoughtfully designed collections for the big day and every day.</p>

      <div className="grid gap-3 sm:grid-cols-2 mt-5 md:grid-cols-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCat;
