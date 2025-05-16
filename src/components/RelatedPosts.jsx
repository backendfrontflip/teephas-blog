import React from 'react'
import blogData from '../blogData.json';
import BlogCard from './BlogCard';

const RelatedPosts = ({ relatedIds }) => {
  const related = blogData.filter((p) => relatedIds.includes(p.id));
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-4">Related Posts</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {related.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default RelatedPosts