"use client";

// libs
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ExperienceSection = () => {
  const [zoomMap, setZoomMap] = useState(15);

  const _handleZoomMap = () => {
    setZoomMap(40);
  };

  useEffect(() => _handleZoomMap(), []);

  return (
    <ExperienceSectionWrapper className="min-h-screen">
      <div className="absolute z-[1] w-full h-full top-0 left-0">
        <iframe
          className="w-full h-full"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=100.55685281753541%2C13.8075704720011%2C100.55910587310792%2C13.809560454736507&amp;layer=mapnik&marker=13.808565465492224%2C100.55797934532166&z=${zoomMap}`}
        />
      </div>
      <div className="z-[2] relative">
        <h1 className="font-bold text-[32px]">MY EXPERIENCE</h1>
        <div className="head-line"></div>
      </div>
      <div className="relative p-0 md:p-10">
        <div className="relative flex flex-row z-20">
          <div className="pulse_circle ml-[-50px]" />
          <div className="bubble-right flex flex-col gap-6 max-w-[420px] md:ml-[50px]">
            <div className="flex flex-col gap-2 font-bold">
              <div className="w-[120px] text-center text-[13px] bg-black text-white rounded-md px-2 py-1 ">
                Currently
              </div>
              <div className="text-[24px]">
                TMBThanachart Bank Public Company Limited
              </div>
            </div>
            <b className="text-[18px]">Fullstack Engineer</b>
            <div>2022 - Present</div>
            <div>
              Dynamic Software Engineer specializing in full-stack development,
              crafting responsive web, mobile, and progressive web applications.
              Proficient in React.js, Next.js, Flutter, Docker, and Kotlin to
              build robust frontend and backend solutions. Experienced in
              leading frontend teams, ensuring collaboration and successful
              project delivery.
              <br />
              <br />
              <b>Responsibilities:</b>
              <br />
              - Develop and maintain high-performance frontend applications with
              React.js, Next.js, and Flutter.
              <br />
              - Design and implement backend APIs using Kotlin for seamless data
              flow.
              <br />
              - Utilize Docker for efficient deployment and application
              portability.
              <br />- Lead and mentor frontend teams, fostering collaboration to
              achieve project goals.
            </div>

            <a
              href="https://www.linkedin.com/in/thinnakrit"
              target="_blank"
              className="text-blue-400"
            >
              View more
            </a>
          </div>
        </div>
      </div>
    </ExperienceSectionWrapper>
  );
};

export default ExperienceSection;

const ExperienceSectionWrapper = styled.section`
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

  .pulse_circle {
    position: absolute;
    z-index: 2;
    width: 40px;
    height: 40px;
    background-color: rgb(255, 95, 122);
    color: white;
    text-align: center;
    line-height: 40px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    border-radius: 50%;
    font-size: 1.3rem;
    &:hover {
      cursor: pointer;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      background: rgba(255, 95, 122, 1);
      border-radius: 50%;
      z-index: -1;
      animation: grow 1s ease-in-out infinite;
    }
    &::after {
      background: rgba(255, 95, 122, 0.4);
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        background: rgb(95, 132, 255);
        border-radius: 50%;
        z-index: -1;
        animation: grow 1s ease-in-out infinite;
      }
    }
    &::before {
      background: rgba(255, 95, 122, 0.6);
      animation-delay: -0.5s;
    }
  }
  @keyframes grow {
    0% {
      transform: scale(1, 1);
      opacity: 1;
    }
    100% {
      transform: scale(1.8, 1.8);
      opacity: 0;
    }
  }

  .bubble-right {
    position: relative;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 20px;

    &:before {
      content: "";
      width: 60px;
      height: 30px;
      border-top: 2px rgba(255, 255, 255, 1) dashed;
      position: absolute;
      z-index: 1;
      left: -60px;
    }
  }
`;
