import React from 'react'

const LoadMoreButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block mx-auto mt-8 px-4 py-2 bg-black text-white rounded hover:opacity-90"
    >
      Load More
    </button>
  );
}

export default LoadMoreButton