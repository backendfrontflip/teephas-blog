import { useParams } from 'react-router-dom';
import blogData from '../blogData.json';
import BlogContent from '../components/BlogContent';
import AuthorInfo from '../components/AuthorInfo';
import Tags from '../components/Tags';
import RelatedPosts from '../components/RelatedPosts';
import NotFound from '../components/NotFound';
import BlogArticle from '../components/BlogArticle'

export default function BlogPage() {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) return <NotFound />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img src={blog.coverImage} alt={blog.title} className="w-full rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <Tags tags={blog.tags} />
      <BlogContent content={blog.content} />
      <AuthorInfo author={blog.author} />
      <RelatedPosts relatedIds={blog.relatedIds} />
    </div>
  );
}
