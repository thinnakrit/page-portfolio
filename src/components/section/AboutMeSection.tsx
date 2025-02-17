"use client";

// libs
import styled from "@emotion/styled";

// hooks
import useWindowDimensions from "~/hooks/useWindowDimensions";

const AboutMeSection = () => {
  const { height } = useWindowDimensions();

  return (
    <AboutMeSectionWrapper
      style={{
        height: height ?? "auto",
      }}
    >
      <h1>ABOUT ME</h1>
      <div>xxxx</div>
      <div>
        <div>photo</div>
        <div>xxx</div>
      </div>
    </AboutMeSectionWrapper>
  );
};

export default AboutMeSection;

const AboutMeSectionWrapper = styled.section`
  background: #e1e1e1ff;

  position: relative;
  z-index: 2;
`;
