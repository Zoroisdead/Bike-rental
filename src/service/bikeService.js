// src/service/bikeService.js

const API_URL = "http://localhost:3000"; // Change this to your backend API URL

// Add a new bike
export const addBike = async (bikeData) => {
  try {
    const response = await fetch(`${API_URL}/addbikes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bikeData),
    });
    if (!response.ok) {
      throw new Error("Failed to add bike");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error adding bike:", error);
    throw error;
  }
};

// Edit an existing bike
export const editBike = async (bikeId, bikeData) => {
  try {
    const response = await fetch(`${API_URL}/editbikes/${bikeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bikeData),
    });
    if (!response.ok) {
      throw new Error("Failed to update bike");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error editing bike:", error);
    throw error;
  }
};

// Fetch bikes
export const getBikes = async () => {
  try {
    const response = await fetch(`${API_URL}/viewbikes`);
    if (!response.ok) {
      throw new Error("Failed to fetch bikes");
    }
    const bikes = await response.json();
    return bikes;
  } catch (error) {
    console.error("Error fetching bikes:", error);
    throw error;
  }
};
