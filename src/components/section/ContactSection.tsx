"use client";

// libs
import styled from "@emotion/styled";

const ContactSection = () => {
  return (
    <ContactSectionWrapper className="min-h-screen max-h-screen">
      <h1 className="font-bold text-[32px]">Get in touch</h1>
      <div className="head-line"></div>
    </ContactSectionWrapper>
  );
};

export default ContactSection;

const ContactSectionWrapper = styled.section`
  background: #ffffff;
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
