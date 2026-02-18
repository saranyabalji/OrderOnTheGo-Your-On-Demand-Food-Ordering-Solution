import React, { useState } from 'react';

function newitem() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    alert(`Added: ${name} - ₹${price}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Add New Item</h2>
      <input placeholder="Item name" className="border p-2 w-full mb-2" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" className="border p-2 w-full mb-2" onChange={e => setPrice(e.target.value)} />
      <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">Add Item</button>
    </div>
  );
}

export default newitem;
