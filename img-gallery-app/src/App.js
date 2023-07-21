import React, { useState, useEffect } from 'react';
import ImageGallery from './components/imageGallery';
import fetchImages from './data/api';
import './App.css';
import SearchBar from './components/searchBar';


const App = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const imageData = await fetchImages();
        setImages(imageData);
      // Initialize filtered images with all images
        setFilteredImages(imageData); 
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImageData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      // Reset to original images
      setFilteredImages(images); 
    } else {
      const filtered = images.filter((image) =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  };

  return (
    <>
      <div className="hero-container">
        <h1 className='heroTitle'>Image Gallery App</h1>
        <SearchBar handleSearch={handleSearch} />
        <p className='heroPara'>Thanks to Unsplash for the image data</p>
      </div>
      
      <div className='imageContainer'>
        <p className='imgPara'>Images are sorted based on creation date</p>
        {filteredImages.length > 0 ? (
          <ImageGallery images={filteredImages} />
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </>
  );
};

export default App;
