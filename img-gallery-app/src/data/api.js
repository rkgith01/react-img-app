import axios from 'axios';
// require('dotenv').config();

// const API_KEY = process.env.UNSPLASH_API_KEY;

// const API_KEY = "enter your unsplash api key";
const BASE_URL = 'https://api.unsplash.com/';

const fetchImages = async (page, perPage) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
        'Access-Control-Allow-Origin': '*', 
      },
      params: {
        page: page,
        per_page: perPage,
      },
    });
    // console.log(response.data)
    let newData = response.data

    let sortedData = newData.sort(
      (a, b) => a.created_at.localeCompare(b.created_at)
    )
    // console.log(sortedData, "sorted")

    return sortedData.map((photo) => ({
    // return newData.map((photo) => ({
      id: photo.id,
      url: photo.urls.regular,
      title: photo.alt_description,
      description: photo.description,
    }));   
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export default fetchImages;