import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `
        query PostsByPublication($host: String!, $first: Int!) {
          publication(host: $host) {
            posts(first: $first) {
              edges {
                node {
                  title
                  slug
                  subtitle
                  views
                  publishedAt
                  content {
                    markdown
                  }
                }
              }
            }
          }
        }
      `;

      const variables = {
        host: "yashyaks.hashnode.dev",
        first: 20,
      };

      const response = await fetch("https://gql.hashnode.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
      });

      const result = await response.json();
      setPosts(result.data.publication.posts.edges);
    };

    fetchBlogs();
  }, []);

  const calculateReadingTime = (markdown) => {
    const words = markdown?.split(/\s+/).length || 0;
    return Math.ceil(words / 200); // 200 words per minute average reading speed
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-12 pt-12 pb-20">
        <h1 className="text-2xl md:text-3xl font-semibold mb-10 text-white">My Blog Posts</h1>

        <ul className="space-y-10">
          {posts.map(({ node }) => {
            const date = new Date(node.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });

            const readingTime = calculateReadingTime(node.content?.markdown);

            return (
              <li key={node.slug}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                <Link to={`/blog/${node.slug}`} className="link link-underline link-underline-black text-lg md:text-xl text-white">
                    {node.title}
                </Link>
                <span className="hidden md:block text-sm text-gray-400">{date}</span>
                </div>
                <p className="text-gray-300 text-base mt-2">{node.subtitle}</p>
                <p className="text-sm text-gray-500 mt-2">
                <span className="md:hidden">{date} • </span>
                {node.views ?? 0} views • {readingTime} min read
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default BlogList;
