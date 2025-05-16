import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="text-blue-500 mt-4 block">
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard