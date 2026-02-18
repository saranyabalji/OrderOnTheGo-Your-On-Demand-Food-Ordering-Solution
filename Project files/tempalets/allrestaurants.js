import React from 'react';

const allRestaurants = [
  { id: 1, name: 'Tandoori Flames' },
  { id: 2, name: 'Cheesy Crust' }
];

function allrestaurants() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">All Restaurants</h2>
      <ul>
        {allRestaurants.map(r => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default allrestaurants;