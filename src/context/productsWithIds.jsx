import Data from "../Data.json"; // Contains "cosmetics" and "pharmacy" nested objects

// Helper to combine nested data from the JSON file
const getCombinedProducts = () => {
  const { cosmetics, pharmacy, toiletries, household, cereals, kitchen } = Data;
  return [
    ...cosmetics.map((c) => ({ ...c, type: "cosmetics" })),
    ...pharmacy.map((p) => ({ ...p, type: "pharmacy" })),
    ...cereals.map((p) => ({ ...p, type: "cereals" })),
    ...kitchen.map((p) => ({ ...p, type: "kitchen" })),
    ...toiletries.map((t) => ({
      ...t,
      type: "toiletries",
    })),
    ...household.map((h) => ({
      ...h,
      type: "household",
    })),
  ];
};

export const getPersistentProductsWithIds = () => {
  const STORAGE_KEY = "productsWithIds";
  const storedData = localStorage.getItem(STORAGE_KEY);

  // If data exists in localStorage, parse and return it
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (e) {
      console.error("Failed to parse products from localStorage", e);
      // Fallback to fresh generation on parse error
    }
  }

  // If no data in localStorage, generate IDs and store
  const combinedProducts = getCombinedProducts();
  const productsWithIds = combinedProducts.map((product) => ({
    ...product,
    id: crypto.randomUUID(), // Use the native browser API
  }));

  // Store the new data in localStorage for future use
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productsWithIds));

  return productsWithIds;
};

// This function checks for and sets a consistent, unique ID
function setConsistentId() {
  // Define a key for the ID
  const storageKey = "uniqueUserId";

  // Check if an ID already exists in localStorage
  let userId = localStorage.getItem(storageKey);

  // If not, generate a new one and set it
  if (!userId) {
    userId = crypto.randomUUID(); // Recommended for modern browsers
    localStorage.setItem(storageKey, userId);
  }

  return userId;
}

// Call the function to ensure a consistent ID is always available
const myUserId = setConsistentId();
console.log("My consistent User ID is:", myUserId);
