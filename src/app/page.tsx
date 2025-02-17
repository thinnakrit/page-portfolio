"use client";
// libs
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";

// components
const HomeSection = dynamic(() => import("~/components/section/HomeSection"), {
  ssr: false,
});

const AboutMeSection = dynamic(
  () => import("~/components/section/AboutMeSection"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <PageWrapper>
      <MenuLeftWrapper>
        <div className="menu-header">THINNAKRIT</div>
        <div className="menu-sub">HOME</div>
        <div className="menu-sub">ABOUT ME</div>
        <div className="menu-sub">SKILLS</div>
        <div className="menu-sub">PORTFOLIO</div>
        <div className="menu-sub">BLOG</div>
        <div className="menu-sub">CONTACT</div>
      </MenuLeftWrapper>
      <ContentWrapper>
        <HomeSection />
        <AboutMeSection />

        <SkillSectionWrapper>
          <h1>SKILLS</h1>
          <div>xxxx</div>
          <div>
            <div>photo</div>
            <div>xxx</div>
          </div>
        </SkillSectionWrapper>

        <WorkSectionWrapper>
          <h1>LATEST WORKS</h1>
          <div>xxxx</div>
          <div>
            <div>photo</div>
            <div>xxx</div>
          </div>
        </WorkSectionWrapper>

        <BlogSectionWrapper>
          <h1>LATEST BLOGS</h1>
          <div>xxxx</div>
          <div>
            <div>photo</div>
            <div>xxx</div>
          </div>
        </BlogSectionWrapper>

        <ContactSectionWrapper>
          <h1>Get in touch</h1>
          <div>xxxx</div>
          <div>
            <div>photo</div>
            <div>xxx</div>
          </div>
        </ContactSectionWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100dvh;
`;

const MenuLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100dvh;
  box-shadow: 0px 3px 10px 0px rgba(38, 59, 94, 0.29);
  text-align: center;
  font-size: 14px;

  .menu-header {
    background-color: #f28500cc;
    color: #ffffff;
    padding-top: 16px;
    padding-bottom: 16px;
    font-weight: 900;
  }

  .menu-sub {
    color: #333333;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }
`;

const ContentWrapper = styled.div`
  overflow: scroll;
  width: 100%;
  max-height: 100dvh;
`;

const SkillSectionWrapper = styled.section``;

const WorkSectionWrapper = styled.section``;

const BlogSectionWrapper = styled.section``;

const ContactSectionWrapper = styled.section``;
