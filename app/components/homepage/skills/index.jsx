// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const SkillBadge = ({ skill }) => {
  const icon = skillsImage(skill);
  const iconSrc = icon?.src ?? icon;

  if (!iconSrc) {
    return null;
  }

  return (
    <div className="skill-orbit w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
      <div className="skill-card h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-[#16f2b3] transition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="skill-card-line h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="skill-icon h-8 sm:h-10">
            <Image
              src={iconSrc}
              alt={skill}
              width={40}
              height={40}
              className="!h-full !w-auto rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <p className="text-white text-sm sm:text-lg transition-colors duration-300 group-hover:text-[#16f2b3]">
            {skill}
          </p>
        </div>
      </div>
    </div>
  );
};

function Skills() {
  const splitIndex = Math.ceil(skillsData.length / 2);
  const firstRowSkills = skillsData.slice(0, splitIndex);
  const secondRowSkills = skillsData.slice(splitIndex);

  return (
    <div id="skills" className="section-reveal relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
      <div className="pointer-events-none absolute right-4 top-28 h-32 w-32 rounded-full bg-[#16f2b3]/10 blur-3xl section-pulse" />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12 flex flex-col gap-2">
        <Marquee
          gradient={false}
          speed={70}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {firstRowSkills.map((skill) => (
            <SkillBadge skill={skill} key={skill} />
          ))}
        </Marquee>

        <Marquee
          gradient={false}
          speed={55}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {secondRowSkills.map((skill) => (
            <SkillBadge skill={skill} key={skill} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
