"use client";
// libs
import styled from "@emotion/styled";

// components
import AboutMeSection from "~/components/section/AboutMeSection";
import HomeSection from "~/components/section/HomeSection";
import SkillSection from "~/components/section/SkillSection";

export default function Home() {
  return (
    <PageWrapper>
      <MenuLeftWrapper>
        <a className="menu-header">THINNAKRIT</a>
        <a className="menu-sub">HOME</a>
        <a className="menu-sub">ABOUT ME</a>
        <a className="menu-sub">SKILLS</a>
        <a className="menu-sub">PORTFOLIO</a>
        <a className="menu-sub">BLOG</a>
        <a className="menu-sub">CONTACT</a>
      </MenuLeftWrapper>
      <ContentWrapper>
        <HomeSection />
        <AboutMeSection />
        <SkillSection />

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
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const WorkSectionWrapper = styled.section``;

const BlogSectionWrapper = styled.section``;

const ContactSectionWrapper = styled.section``;
