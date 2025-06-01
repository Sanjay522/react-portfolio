import React, { useState } from "react";

interface Product {
  name: string;
  price: string;
  category: string;
  description: string;
  images: string[]; // store image URLs
}

const ProductForm: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { name: "", price: "", category: "", description: "", images: [] },
    { name: "", price: "", category: "", description: "", images: [] },
    { name: "", price: "", category: "", description: "", images: [] },
    { name: "", price: "", category: "", description: "", images: [] },
  ]);

  // Handlers for text inputs
  const handleInputChange = (
    index: number,
    field: keyof Omit<Product, "images">,
    value: string
  ) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  // Handler for image uploads per product
  const handleImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      const updated = [...products];
      updated[index].images = [...updated[index].images, ...newImages];
      setProducts(updated);
    }
  };

  // Delete an image preview per product
  const handleImageDelete = (productIndex: number, urlToDelete: string) => {
    const updated = [...products];
    updated[productIndex].images = updated[productIndex].images.filter(
      (url) => url !== urlToDelete
    );
    setProducts(updated);
    URL.revokeObjectURL(urlToDelete);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Products:", products);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6">
      {products.map((product, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-4">Product {index + 1}</h2>

          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Price"
            value={product.price}
            onChange={(e) => handleInputChange(index, "price", e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Category"
            value={product.category}
            onChange={(e) => handleInputChange(index, "category", e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Description"
            value={product.description}
            onChange={(e) => handleInputChange(index, "description", e.target.value)}
            className="border p-2 w-full"
          />

          {/* Image Upload */}
          <label
            htmlFor={`imageUpload${index}`}
            className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded inline-block mt-2"
          >
            Select Images
          </label>
          <input
            id={`imageUpload${index}`}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleImageChange(index, e)}
            className="hidden"
          />

          {/* Image Previews */}
          <div className="mt-4 flex flex-wrap gap-4">
            {product.images.map((url, imgIndex) => (
              <div key={imgIndex} className="relative inline-block">
                <img
                  src={url}
                  alt={`Product ${index + 1} Image ${imgIndex + 1}`}
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleImageDelete(index, url)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-0.5 text-sm"
                  aria-label="Delete Image"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded-lg mt-6"
      >
        Submit All Products
      </button>
    </form>
  );
};

export default ProductForm;
