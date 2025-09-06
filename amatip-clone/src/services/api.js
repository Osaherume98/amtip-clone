import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Backend API URL

// Fetch landing page content
export const fetchLandingContent = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contents`);
    return response.data;
  } catch (error) {
    console.error('Error fetching content:', error);
  }
};

// Create new content
export const createContent = async (content, image) => {
  const formData = new FormData();
  formData.append('content', content);
  formData.append('image', image);

  try {
    const response = await axios.post(`${BASE_URL}/content`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating content:', error);
  }
};

// Update content
export const updateContent = async (id, content) => {
  try {
    const response = await axios.put(`${BASE_URL}/content/${id}`, { content });
    return response.data;
  } catch (error) {
    console.error('Error updating content:', error);
  }
};

// Delete content
export const deleteContent = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/content/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting content:', error);
  }
};
