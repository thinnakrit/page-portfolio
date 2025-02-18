"use client";

// libs
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// components
import TypingEffect from "../TypingText";

interface IBlog {
  url: string;
  comments_count: number;
  cover_image: string;
  created_at: string;
  description: string;
  id: number;
  public_reactions_count: number;
  tag_list: string[];
  title: string;
}

const BlogSection = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [blogList, setBlogList] = useState<IBlog[]>([]);

  const _handleFetchBlog = async () => {
    setIsFetching(true);
    const articles = await fetch(
      `https://dev.to/api/articles?username=thinnakrit`
    ).then((res) => res.json());
    setBlogList(articles);
    setIsFetching(false);
  };

  useEffect(() => {
    _handleFetchBlog();
  }, []);

  return (
    <BlogSectionWrapper className="min-h-screen">
      <h1 className="font-bold text-[32px]">MY BLOGS</h1>
      <div className="head-line"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {isFetching ? (
          <div
            className="
            flex
            items-center
            justify-center
            w-full
            h-full
            text-white
            text-lg
            font-bold
          "
          >
            <TypingEffect messages={["Fetching blogs..."]} />
          </div>
        ) : (
          blogList.map((blog) => (
            <div
              key={blog.id}
              className="
              flex flex-col
              bg-white
              rounded-md
              shadow-lg
              overflow-hidden
              transition-all
              duration-300
              hover:shadow-2xl
            "
            >
              <a
                href={blog.url}
                target="_blank"
                className="flex flex-col gap-4 flex-1"
              >
                <div className="rounded-md overflow-hidden">
                  <img src={blog.cover_image} />
                </div>
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    justify-between
                    gap-4
                    p-4"
                >
                  <div>
                    <div
                      className="
                      font-bold
                      text-lg
                      "
                    >
                      {blog.title}
                    </div>
                    <div
                      className="
                      text-sm
                      text-gray
                      flex
                      flex-1"
                    >
                      {blog.description}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    {blog.tag_list.map((tag) => (
                      <span
                        key={tag}
                        className="
                        text-xs
                        font-bold
                        px-2
                        py-1
                        rounded-md
                      bg-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </BlogSectionWrapper>
  );
};

export default BlogSection;

const BlogSectionWrapper = styled.section`
  position: relative;
  z-index: 2;
  padding: 40px;

  .head-line {
    width: 60px;
    height: 2px;
    background: #f28500cc;
    margin: 20px 0;
  }
`;
