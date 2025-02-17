"use client";

// libs
import styled from "@emotion/styled";

const SkillSection = () => {
  return (
    <SkillSectionWrapper>
      <h1>MY SKILLS</h1>
      <div>detail</div>
      <div>
        <div>
          <div>programming skill</div>
          <div>list</div>
        </div>
        <div>
          <div>soft skill</div>
          <div>list</div>
        </div>
      </div>
    </SkillSectionWrapper>
  );
};

export default SkillSection;

const SkillSectionWrapper = styled.section`
  position: relative;
  z-index: 3;
`;
