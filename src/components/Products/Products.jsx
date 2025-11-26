import { useEffect, useState } from "react";
import Product from "../Product/Product";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
        setLoading(false);
      });
  }, []);

  const categories = [
    "All",
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? product
      : product.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-[1440px] mx-auto mt-10 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400 my-6">
          OUR PRODUCT
        </h1>

        <div>
          <select
            className="select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          : filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
