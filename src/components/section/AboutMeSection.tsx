"use client";

// libs
import styled from "@emotion/styled";

const AboutMeSection = () => {
  return (
    <AboutMeSectionWrapper>
      <h1>ABOUT ME</h1>
      <div>detail</div>
      <div>
        <div>
          <div>social</div>
          <div>photo</div>
        </div>
        <div>
          <div>name</div>
          <div>role</div>
          <div>detail</div>
          <div>contact</div>
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
`;
