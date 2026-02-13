import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import allimg from "../constant/images";

function Categories() {
  // Products data
  const productsData = [
    {
      id: 1,
      title: "Boxy T-Shirt",
      price: 18,
      category: "Women",
      color: "black",
      size: "M",
      img: allimg.shopItem1,
    },
    {
      id: 2,
      title: "Denim Jacket",
      price: 35,
      category: "Women",
      color: "gray",
      size: "L",
img: allimg.shopItem2,    },
    {
      id: 3,
      title: "Casual Shirt",
      price: 22,
      category: "Men",
      color: "red",
      size: "S",
img: allimg.shopItem3,    },
{
      id: 4,
      title: "Boxy T-Shirt",
      price: 18,
      category: "Women",
      color: "black",
      size: "M",
      img: allimg.shopItem1,
    },
     {
      id: 5,
      title: "Denim Jacket",
      price: 35,
      category: "Women",
      color: "gray",
      size: "L",
img: allimg.shopItem2,    },
 {
      id: 6,
      title: "Casual Shirt",
      price: 22,
      category: "Men",
      color: "red",
      size: "S",
img: allimg.shopItem3,    },

  ];
  const [search, setSearch] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [category, setCategory] = useState("");

  // Handlers
  const handleCheckbox = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // Filter
  const filteredProducts = productsData.filter((product) => {
    // Search
    if (
      search &&
      !product.title.toLowerCase().includes(search.toLowerCase())
    )
      return false;

    // Category
    if (category && product.category !== category) return false;

    // Color
    if (
      selectedColors.length > 0 &&
      !selectedColors.includes(product.color)
    )
      return false;

    // Size
    if (selectedSizes.length > 0 && !selectedSizes.includes(product.size))
      return false;

    // Price
    if (selectedPrices.length > 0) {
      const matchPrice = selectedPrices.some((range) => {
        if (range === "0-20") return product.price <= 20;
        if (range === "20-40")
          return product.price > 20 && product.price <= 40;
        return false;
      });
      if (!matchPrice) return false;
    }

    return true;
  });

  return (
    <div className="w-full h-[140vh] bg-white flex items-center justify-center py-10">
      <div className="w-[90%] flex gap-10">
        <div className="w-[25%] flex flex-col gap-8 text-gray-700">
          {/* Categories */}
          <div>
            <h2 className="font-semibold mb-3">Categories</h2>
            <ul className="space-y-2 text-sm">
              <li
                className="cursor-pointer"
                onClick={() => setCategory("")}
              >
                All
              </li>
              <li
                className="cursor-pointer"
                onClick={() => setCategory("Men")}
              >
                Men
              </li>
              <li
                className="cursor-pointer"
                onClick={() => setCategory("Women")}
              >
                Women
              </li>
            </ul>
          </div>

          {/* Color */}
          <div>
            <h2 className="font-semibold mb-3">Color</h2>
            {["black", "gray", "red"].map((color) => (
              <label key={color} className="flex gap-2 text-sm">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheckbox(color, selectedColors, setSelectedColors)
                  }
                />
                {color}
              </label>
            ))}
          </div>

          {/* Price */}
          <div>
            <h2 className="font-semibold mb-3">Price</h2>
            {["0-20", "20-40"].map((price) => (
              <label key={price} className="flex gap-2 text-sm">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheckbox(price, selectedPrices, setSelectedPrices)
                  }
                />
                {price}
              </label>
            ))}
          </div>

          {/* Size */}
          <div>
            <h2 className="font-semibold mb-3">Size</h2>
            {["S", "M", "L"].map((size) => (
              <label key={size} className="flex gap-2 text-sm">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheckbox(size, selectedSizes, setSelectedSizes)
                  }
                />
                {size}
              </label>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center border px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none h-10  flex-1 text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaMagnifyingGlass className="text-gray-500" />
          </div>
        </div>

        {/* Products */}
        <div className="w-[75%]">
          <div className="grid grid-cols-3 gap-8">
            {filteredProducts.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredProducts.map((item) => (
                <div key={item.id} className="group">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[400px] object-cover"
                    />

                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                      ADD TO CART
                    </button>
                  </div>

                  <div className="mt-2 text-sm">
                    <p>{item.title}</p>
                    <span className="font-semibold">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
