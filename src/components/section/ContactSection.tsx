"use client";

// libs
import styled from "@emotion/styled";

const ContactSection = () => {
  return (
    <ContactSectionWrapper className="min-h-screen">
      <h1 className="font-bold text-[32px]">Get in touch</h1>
      <div className="head-line"></div>
      <div className="flex items-center justify-center">
        <iframe
          className="min-h-screen h-full w-full max-w-[600px]"
          allowFullScreen
          src="https://docs.google.com/forms/d/e/1FAIpQLScOHZsVlivNDUgxvhOMRabTyMoW-cCLjnNKxUfR-ZYVES5_Uw/viewform?embedded=true"
        >
          กำลังโหลด…
        </iframe>
      </div>
    </ContactSectionWrapper>
  );
};

export default ContactSection;

const ContactSectionWrapper = styled.section`
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
