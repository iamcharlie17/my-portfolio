import SkillBar from "react-skillbars";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const skills1 = [
    { type: "HTML", level: 95 },
    { type: "CSS", level: 90 },
    { type: "React", level: 95 },
    { type: "NEXT.JS", level: 80 },
    { type: "C", level: 80 },
    { type: "JAVA", level: 75 },
  ];

  const skills2 = [
    { type: "Javascript", level: 95 },
    { type: "NodeJS", level: 87 },
    { type: "Express", level: 85 },
    { type: "MongoDB", level: 90 },
    { type: "C++", level: 79 },
    { type: "OOP", level: 87 },
  ];

  const colors = {
    bar: "gray",
    title: {
      text: "black",
      background: "gray",
    },
  };

  return (
    <div>
      <SectionTitle heading={"Skills"} />
      <div className="flex justify-between gap-8 my-12 mx-4 md:mx-12 lg:mx-24">
        <div className="flex-1">
          <SkillBar skills={skills1} height={20} symbolColor="yellow" colors={colors}></SkillBar>
        </div>
        <div className="flex-1">
          <SkillBar skills={skills2} height={20} symbolColor="yellow" colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
