import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard';
import { categories } from '../assets/assets';
import { X } from 'lucide-react'; 

const AllProducts = () => {
    const { products, searchQuery } = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        let updatedProducts = products;

        if (searchQuery.length > 0) {
            updatedProducts = updatedProducts.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== "all") {
            updatedProducts = updatedProducts.filter(
                product => product.category?.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        setFilteredProducts(updatedProducts);
    }, [products, searchQuery, selectedCategory]);

    return (
        <div className="mt-16 flex flex-col px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <p className="text-2xl font-semibold uppercase text-gray-800">
                        All Products
                    </p>
                    <div className="w-16 h-0.5 bg-primary rounded-full mt-1"></div>
                </div>

                <div className="flex items-center gap-2">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-2 text-sm font-medium 
                                   shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-100 
                                   transition duration-200 ease-in-out"
                    >
                        <option value="all">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.path}>
                                {category.text}
                            </option>
                        ))}
                    </select>

                    {selectedCategory !== "all" && (
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className="p-2 rounded-full hover:bg-gray-200 transition"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
                {filteredProducts.filter((product) => product.inStock).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default AllProducts;
