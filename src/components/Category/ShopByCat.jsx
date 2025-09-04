import React from "react";

const categories = [
  {
    name: "Rings",
    image: "shop6.jpg",
  },
  {
    name: "Necklaces",
    image: "shop2.avif",
  },
  {
    name: "Bracelets",
    image: "shop3.webp",
  },
  {
    name: "Earrings",
    image: "shop4.webp",
  },
  {
    name: "Anklets",
    image: "shop5.webp",
  },
  {
    name: "Watches",
    image: "shop1.webp",
  },
];

const ShopByCat = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Shop Jewelry by Category
          Shop Jewelry by Category
          Shop Jewelry by Category
        </h2>
        <p className="mt-2 text-gray-600 text-lg max-w-2xl mx-auto">
          Thoughtfully designed collections for your big day and everyday style.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-200 overflow-hidden group cursor-pointer transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCat;
