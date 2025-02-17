"use client";

// libs
import styled from "@emotion/styled";

// components
import TypingEffect from "../TypingText";

// hooks
import useWindowDimensions from "~/hooks/useWindowDimensions";

const HomeSection = () => {
  const { height } = useWindowDimensions();

  const messages = ["React", "Nextjs", "Typescript", "Flutter", "Kotlin"];
  return (
    <HomeSectionWrapper height={height ?? 0}>
      <div className="home-section">
        <div className="home-section-left">
          <div className="home-section-left-content">
            <div className="hello-message">Hello there...</div>
            <h1>Thinnakrit Knoo-Aksorn</h1>
            <div>
              <TypingTextContainer>
                <span>I Am Passionate</span>
                <TypingEffect messages={messages} />
              </TypingTextContainer>
            </div>
            <div className="action-with-me">
              <div className="action-header">about me</div>
              <div className="action-content">
                <p>
                  I am a software engineer with a passion for building
                  high-quality software. I have experience in building web and
                  mobile applications.
                </p>
              </div>
              <div className="action-content">
                <button>MY WORK</button>
                <button className="active">HIRE ME</button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-right">
          <img className="me-photo" src="/me.png" />
        </div>
      </div>
    </HomeSectionWrapper>
  );
};

export default HomeSection;

const TypingTextContainer = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
`;

const HomeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  ${({ height }: { height: number }) => `height: ${height}px;`}

  .home-section {
    display: flex;
    flex-direction: row;
    .home-section-right {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: flex-end;
      position: relative;
      overflow: hidden;
      padding-top: 40px;
      padding-left: 40px;
      padding-right: 40px;
      .me-photo {
        position: relative;
        padding: 0px;
        margin: 0px;
      }
    }

    .home-section-left {
      display: flex;
      flex-direction: column;
      flex: 1;

      .home-section-left-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding: 40px;
      }

      .hello-message {
        font-size: 24px;
        font-weight: bold;
      }

      h1 {
        font-size: 36px;
        font-weight: bold;
      }

      .action-with-me {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
        border: 1px solid #333;

        .action-header {
          background-color: #333;
          color: #fff;
          padding: 8px 16px;
        }

        .action-content {
          display: flex;
          flex-direction: row;
          padding: 16px;
          gap: 16px;
          justify-content: center;
          button {
            padding: 8px 16px;
            border: 1px solid #333;
            border-radius: 0px;
            font-weight: bold;
            cursor: pointer;
            color: #333;
            background-color: #fff;

            &.active {
              background-color: #333;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
