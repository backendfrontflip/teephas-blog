import React from 'react'

const Tags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map(tag => (
        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
          #{tag}
        </span>
      ))}
    </div>
  );
}

export default Tags