import React from 'react'
import blogData from '../blogData.json';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {blogData.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage