const axios = require('axios');

export async function getRestaurantsData() {
    try {
      const response = await axios.get('http://10.0.2.2:3000/getRestaurantData');
      return response.data;
    } catch (error) {
      console.error("yyy",error);
    }
  }