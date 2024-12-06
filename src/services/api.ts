import axios from 'axios';

const API_URL = 'https://xeno-canto.org/api/2/recordings?query=cnt:guatemala';

export const getBirdsData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.recordings;
  } catch (error) {
    console.error('Error fetching birds data:', error);
    throw error;
  }
};