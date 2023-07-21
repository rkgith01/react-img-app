import React, { useState, useEffect } from 'react';
import Image from './image';
import fetchImages from '../data/api';
// import SearchBar from './searchBar';


const ImageGallery = ({ images }) => {
  const [filteredImages, setFilteredImages] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const imagesPerPage = 10;

  useEffect(() => {
  // Initialize filtered images with first page
    setFilteredImages(images.slice(0, imagesPerPage)); 
  }, [images, imagesPerPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        const fetchedImages = await fetchImages(currentPage, imagesPerPage);
        // Update filtered images
        setFilteredImages(fetchedImages); 
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImagesData();
  }, [currentPage, imagesPerPage]);

  return (
    <div className="image-gallery">
      <div className="image-grid">
        {filteredImages.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};



export default ImageGallery;


