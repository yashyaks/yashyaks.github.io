import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `
        query SinglePostByPublication($slug: String!, $host: String!) {
          publication(host: $host) {
            post(slug: $slug) {
              title
              subtitle
              content { html }
              coverImage { url }
              publishedAt
              views
              author {
                name
                profilePicture
              }
              tags {
                name
                slug
              }
            }
          }
        }
      `;

      const variables = {
        slug,
        host: "yashyaks.hashnode.dev",
      };

      const response = await fetch("https://gql.hashnode.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
      });

      const result = await response.json();
      setPost(result.data.publication.post);
    };

    fetchPost();
  }, [slug]);

  if (!post) return <div className="text-center text-white">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-4 text-white">
        {post.coverImage?.url && (
          <img
            src={post.coverImage.url}
            alt="Cover"
            className="mb-6 rounded-lg w-full object-cover max-h-[400px]"
          />
        )}

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
          {post.subtitle && (
            <p className="text-xl text-gray-300 mb-4">{post.subtitle}</p>
          )}
          <div className="flex items-center justify-center text-sm text-gray-400 space-x-2">
            <span>{post.author.name}</span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{Math.ceil(post.content.html.split(" ").length / 200)} min read</span>
          </div>
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-p:mb-4 prose-img:rounded-lg prose-img:my-6">
          <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </article>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-white mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="bg-gray-700 text-sm text-white px-3 py-1 rounded-full hover:bg-gray-600 transition"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
