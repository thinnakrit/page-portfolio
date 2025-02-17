"use client";

// libs
import styled from "@emotion/styled";

const BlogSection = () => {
  return (
    <BlogSectionWrapper className="min-h-screen">
      <h1 className="font-bold text-[32px]">MY BLOGS</h1>
      <div className="head-line"></div>
    </BlogSectionWrapper>
  );
};

export default BlogSection;

const BlogSectionWrapper = styled.section`
  background: #e1e1e1ff;
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
