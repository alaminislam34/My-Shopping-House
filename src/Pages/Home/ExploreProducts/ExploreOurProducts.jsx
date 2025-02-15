import { AiOutlineEye } from "react-icons/ai";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const ExploreOurProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const res = axios.get("products.json");
    res.then((data) => setProducts(data.data));
    console.log(products);
  }, []);
  return (
    <div>
      <SectionTitle title={"Our Products"} />
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-4 md:mt-6">
        Explore Our Products
      </h1>
      <section className="flex flex-col justify-center items-center my-6 lg:my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
          {products.slice(0, 8).map((product, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg w-64 relative"
            >
              {/* Wishlist & View Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button className="bg-white p-2 rounded-full shadow-md hover:text-red-500 cursor-pointer">
                  <FaHeart size={18} />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:text-blue-500 cursor-pointer">
                  <AiOutlineEye size={18} />
                </button>
              </div>

              {/* Product Image */}
              <div className="relative  overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square object-cover"
                />
                <div className="absolute -bottom-32 group-hover:bottom-0 duration-500 left-0 w-full">
                  <button className="py-1.5 lg:py-2 bg-black/80 text-white w-full cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 mt-3">{product.product_name}</h3>

              <div className="flex items-center gap-4">
                {/* Price Section */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-red-400 font-medium">
                    ${product.price}
                  </span>
                  {product?.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ${product?.oldPrice}
                    </span>
                  )}
                </div>

                {/* Ratings */}
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-gray-500 text-sm ml-2">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="btn">See All Products</button>
        </div>
      </section>
    </div>
  );
};

export default ExploreOurProducts;
