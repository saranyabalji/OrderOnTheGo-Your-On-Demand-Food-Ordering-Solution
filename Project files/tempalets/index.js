import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  // 🥗 Starters
  { id: 1, name: "Paneer Tikka", category: "Starters", price: 180 },
  { id: 2, name: "Chicken 65", category: "Starters", price: 200 },
  { id: 3, name: "Veg Manchurian", category: "Starters", price: 160 },
  { id: 4, name: "Chilli Gobi", category: "Starters", price: 150 },

  // 🍛 Main Course
  { id: 5, name: "Butter Chicken", category: "Main Course", price: 250 },
  { id: 6, name: "Paneer Butter Masala", category: "Main Course", price: 220 },
  { id: 7, name: "Veg Biryani", category: "Main Course", price: 180 },
  { id: 8, name: "Chicken Biryani", category: "Main Course", price: 230 },

  // 🍰 Desserts
  { id: 9, name: "Gulab Jamun", category: "Desserts", price: 60 },
  { id: 10, name: "Rasgulla", category: "Desserts", price: 55 },
  { id: 11, name: "Ice Cream Sundae", category: "Desserts", price: 90 },
  { id: 12, name: "Chocolate Brownie", category: "Desserts", price: 100 },

  // 🥤 Beverages
  { id: 13, name: "Cold Coffee", category: "Beverages", price: 70 },
  { id: 14, name: "Lassi", category: "Beverages", price: 60 },
  { id: 15, name: "Fresh Lime Soda", category: "Beverages", price: 50 },
  { id: 16, name: "Masala Chai", category: "Beverages", price: 40 },

  // 🍕 Snacks
  { id: 17, name: "Veg Burger", category: "Snacks", price: 90 },
  { id: 18, name: "Chicken Sandwich", category: "Snacks", price: 110 },
  { id: 19, name: "French Fries", category: "Snacks", price: 80 },
  { id: 20, name: "Samosa", category: "Snacks", price: 25 },

  // 🥣 South Indian
  { id: 21, name: "Masala Dosa", category: "South Indian", price: 70 },
  { id: 22, name: "Idli Vada", category: "South Indian", price: 60 },
  { id: 23, name: "Uttapam", category: "South Indian", price: 65 },
  { id: 24, name: "Pongal", category: "South Indian", price: 55 },

  // 🍜 Chinese
  { id: 25, name: "Hakka Noodles", category: "Chinese", price: 130 },
  { id: 26, name: "Chicken Fried Rice", category: "Chinese", price: 150 },
  { id: 27, name: "Veg Spring Rolls", category: "Chinese", price: 100 },
  { id: 28, name: "Chilli Paneer", category: "Chinese", price: 140 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
