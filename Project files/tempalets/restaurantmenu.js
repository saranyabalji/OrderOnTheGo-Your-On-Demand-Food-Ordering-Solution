import React from 'react';

const menuItems = [
  { id: 1, name: 'Paneer Biryani', price: 150 },
  { id: 2, name: 'Chicken Biryani', price: 180 }
];

function RestaurantMenu() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Menu</h2>
        {menuItems.map(item => (
          <div key={item.id} className="mb-3 text-lg">
            {item.name} - ₹{item.price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;