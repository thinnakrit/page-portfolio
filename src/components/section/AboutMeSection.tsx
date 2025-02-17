"use client";

// libs
import styled from "@emotion/styled";

const AboutMeSection = () => {
  return (
    <AboutMeSectionWrapper className="min-h-screen max-h-screen">
      <h1 className="font-bold text-[32px]">ABOUT ME</h1>
      <div className="head-line"></div>
      <div className="about-me-content">
        A FULLSTACK SOFTWARE ENGINEER
        <br />
        WITH A PASSION FOR DESIGN AND DEVELOPMENT
      </div>
      <div className="about-me-detail">
        <div className="about-me-detail-photo">
          <div className="about-me-detail-social">
            <div className="about-me-detail-social-icon">
              <img src="/dev.to.png" />
            </div>
            <div className="about-me-detail-social-icon">
              <img src="/github-logo.png" />
            </div>
            <div className="about-me-detail-social-icon">
              <img src="/linkedin.webp" />
            </div>
          </div>
          <div className="about-me-detail-photo-source">
            <img src="/profile.jpg" className="p-0 m-0" />
          </div>
        </div>
        <div className="about-me-detail-description">
          <h2>I{"'"}M Thinnakrit Knoo-Aksorn</h2>
          <div>
            Software Engineer (Fullstack) | TypeScript Enthusiast Passionate
            about building scalable web and mobile applications. Proficient in
            React, Next.js, Flutter, Nodejs, Nestjs, web3 and Kotlin 🚀
          </div>
          <div className="about-me-detail-description-detail">
            <div>
              <span className="title">Birthday</span>
              <span>29th may 1993</span>
            </div>
            <div>
              <span className="title">Email</span>
              <span>jay.thinnakrit@gmail.com</span>
            </div>
            <div>
              <span className="title">Age</span>
              <span>{new Date().getFullYear() - 1993} Yr</span>
            </div>
            <div>
              <span className="title">Phone</span>
              <span>+6695-464-6362</span>
            </div>
            <div>
              <span className="title">Residence</span>
              <span>Thailand</span>
            </div>
            <div>
              <span className="title">Address</span>
              <span>Bangkok, Thailand</span>
            </div>
          </div>
          <button className="button-download">DOWNLOAD CV</button>
        </div>
      </div>
    </AboutMeSectionWrapper>
  );
};

export default AboutMeSection;

const AboutMeSectionWrapper = styled.section`
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

  .about-me-detail-description-detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    div {
      display: flex;
      flex-direction: row;
      gap: 8px;
      text-align: left;

      .title,
      span {
        display: flex;
        flex: 2;
        text-align: left;
        align-items: flex-start;
      }

      .title {
        font-weight: bold;
        flex: 1;
        border-right: 1px solid #9b9b9bff;
      }
    }
  }

  .about-me-content {
    margin-bottom: 40px;
  }

  .about-me-detail {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 80px;
  }

  .about-me-detail-description {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 32px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  .button-download {
    background: #f28500cc;
    color: white;
    padding: 16px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 140px;
    border-radius: 0px;
  }

  .about-me-detail-photo {
    position: relative;
    background: #ffffff;
    padding: 16px;
    max-width: 400px;
    min-height: 400px;

    .about-me-detail-photo-source {
      position: relative;
      background: #c9c9c9cc;
      width: 100%;
      height: 100%;
      max-height: 400px;
      overflow: hidden;
      z-index: 1;

      img {
        width: 100%;
      }
    }

    .about-me-detail-social {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 2;
      background: #ffffff;
      left: 16;
      top: 40px;
      padding: 8px;

      .about-me-detail-social-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        margin: 0;
        padding: 0;
        img {
          width: 100%;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;
