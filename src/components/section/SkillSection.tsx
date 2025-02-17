"use client";

// libs
import styled from "@emotion/styled";

const SkillSection = () => {
  const skillList = [
    {
      name: "Typescript",
      logo: "/ts.webp",
    },
    {
      name: "React",
      logo: "/react.png",
    },
    {
      name: "Next.js",
      logo: "/nextjs.png",
    },
    {
      name: "Node.js",
      logo: "/nodejs.png",
    },
    {
      name: "Nest.js",
      logo: "/nest.png",
    },
    {
      name: "web3",
      logo: "/web3.jpg",
    },
    {
      name: "Javascript",
      logo: "/js.png",
    },
    {
      name: "React Native",
      logo: "/react-native.png",
    },
    {
      name: "Flutter",
      logo: "/flutter.svg",
    },
    {
      name: "Kotlin",
      logo: "/kotlin.png",
    },
    {
      name: "Sass",
      logo: "/scss.svg",
    },
    {
      name: "Tailwind",
      logo: "/tailwind.png",
    },
  ];

  const softSkillList = [
    {
      name: "Teamwork",
      description:
        "Effectively collaborates with cross-functional teams, fostering a positive and productive work environment to achieve shared goals.",
    },
    {
      name: "Problem Solving",
      description:
        "Analyzes complex issues, identifies root causes, and implements efficient, scalable solutions to drive project success.",
    },
    {
      name: "Communication",
      description:
        "Clearly articulates ideas and technical concepts to both technical and non-technical stakeholders, ensuring alignment and smooth execution.",
    },
    {
      name: "Leadership",
      description:
        "Leads by example, mentors team members, and drives innovation while fostering a supportive and growth-oriented work culture.",
    },
  ];

  return (
    <SkillSectionWrapper className="min-h-screen max-h-screen">
      <h1 className="font-bold text-[32px]">MY SKILLS</h1>
      <div className="head-line"></div>
      <div className="skill-content">
        <div className="skill-content-item">
          <div className="font-bold text-[24px]">Programming skill</div>
          <div className="!grid !grid-cols-12 gap-16 gap-y-4 relative">
            {skillList.map((skill, index) => (
              <div
                key={index}
                className="!col-span-6 flex flex-row p-2 border-2 border-gray-200 rounded-md justify-center
            items-center gap-4 hover:border-[#f28500cc] hover:text-[#a25b05cc] hover:font-bold"
              >
                <div className="flex justify-center items-center skill-item-logo w-[50px] h-[50px]">
                  <img
                    src={skill.logo}
                    className="w-[50px] max-h-[50px] rounded-md"
                  />
                </div>
                <div className="skill-item-name flex flex-1">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-content-item">
          <div className="font-bold text-[24px]">Soft skill</div>
          <div className="!grid !grid-cols-6 gap-16 gap-y-4 relative">
            {softSkillList.map((skill, index) => (
              <div
                key={index}
                className="!col-span-6 flex flex-col p-2 border-2 border-gray-200 rounded-md gap-2 hover:border-[#f28500cc] hover:text-[#a25b05cc]"
              >
                <div className="skill-item-name text-[16px] font-bold">
                  {skill.name}
                </div>
                <div className="skill-item-description">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SkillSectionWrapper>
  );
};

export default SkillSection;

const SkillSectionWrapper = styled.section`
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

  .skill-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;

    .skill-content-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
      text-align: left;
    }
  }
`;
