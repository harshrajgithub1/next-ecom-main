// utils/api.js
import axios from 'axios';

export const fetchHeaderData = async () => {
  try {
    const response = await axios.get('http://45.79.185.26/trifusa/Trisfusa/public/api/home/header/image');
    return response.data;
  } catch (error) {
    console.error('Error fetching header data:', error);
    throw error;
  }
};
