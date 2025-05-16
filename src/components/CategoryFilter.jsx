import React from 'react'

const CategoryFilter = () => {
    const categories = ['All', 'Travel', 'Food', 'Tech'];
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {categories.map((cat) => (
        <button key={cat} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter