"use client";
// libs
import styled from "@emotion/styled";
import { useState } from "react";

// components
import AboutMeSection from "~/components/section/AboutMeSection";
import BlogSection from "~/components/section/BlogSection";
import ContactSection from "~/components/section/ContactSection";
import HomeSection from "~/components/section/HomeSection";
import SkillSection from "~/components/section/SkillSection";

export default function Home() {
  const [currentMenu, setCurrentMenu] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    setCurrentMenu(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickPrev = () => {
    if (currentMenu === "about-me") {
      scrollToSection("home");
    } else if (currentMenu === "skills") {
      scrollToSection("about-me");
    } else if (currentMenu === "blog") {
      scrollToSection("skills");
    } else if (currentMenu === "contact") {
      scrollToSection("blog");
    }
  };

  const handleClickNext = () => {
    if (currentMenu === "home") {
      scrollToSection("about-me");
    } else if (currentMenu === "about-me") {
      scrollToSection("skills");
    } else if (currentMenu === "skills") {
      scrollToSection("blog");
    } else if (currentMenu === "blog") {
      scrollToSection("contact");
    }
  };

  return (
    <PageWrapper>
      <MenuLeftWrapper className="hidden md:flex">
        <a className="menu-header">THINNAKRIT</a>
        <button className="menu-sub" onClick={() => scrollToSection("home")}>
          HOME
        </button>
        <button
          className="menu-sub"
          onClick={() => scrollToSection("about-me")}
        >
          ABOUT ME
        </button>
        <button className="menu-sub" onClick={() => scrollToSection("skills")}>
          SKILLS
        </button>
        <button className="menu-sub" onClick={() => scrollToSection("blog")}>
          BLOG
        </button>
        <button className="menu-sub" onClick={() => scrollToSection("contact")}>
          CONTACT
        </button>
      </MenuLeftWrapper>
      <button
        className="flex md:hidden flex-col justify-center items-center
      fixed bottom-5 left-5 bg-white p-4 shadow-2xl rounded-full cursor-pointer
      font-bold border-1 border-solid border-black
      z-50
      "
        onClick={handleClickPrev}
      >
        Prev
      </button>
      <button
        className="flex md:hidden flex-col justify-center items-center
      fixed bottom-5 right-5 bg-white p-4 shadow-2xl rounded-full cursor-pointer
      font-bold border-1 border-solid border-black
      z-50
      "
        onClick={handleClickNext}
      >
        Next
      </button>
      <ContentWrapper>
        <div id="home">
          <HomeSection />
        </div>
        <div id="about-me">
          <AboutMeSection />
        </div>
        <div id="skills">
          <SkillSection />
        </div>
        <div id="blog">
          <BlogSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
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
  position: relative;
  flex-direction: column;
  width: 100px;
  height: 100dvh;
  box-shadow: 0px 3px 10px 0px rgba(38, 59, 94, 0.29);
  text-align: center;
  font-size: 14px;
  z-index: 9;

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
