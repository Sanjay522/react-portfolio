import React, { useState } from "react";

const ImageSelectorGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 3); // max 3 files
      const newImages = filesArray.map((file) => URL.createObjectURL(file));
      setImages(newImages);
      setActiveIndex(0);
          console.log(newImages)

    }
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };


  return (
    <div className="flex flex-col items-center space-y-6">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="mb-6"
      />

      {images.length > 0 && (
        <>
          {/* Main Image */}
          <div className="w-96 h-96 border rounded overflow-hidden shadow-lg">
            <img
              src={images[activeIndex]}
              alt={`Main image ${activeIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-4 mt-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-24 h-24 rounded overflow-hidden border-4 focus:outline-none ${
                  index === activeIndex
                    ? "border-blue-600"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSelectorGallery;
