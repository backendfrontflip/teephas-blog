import React from 'react'

const BlogContent = ({ content }) => {
  return (
    <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default BlogContent