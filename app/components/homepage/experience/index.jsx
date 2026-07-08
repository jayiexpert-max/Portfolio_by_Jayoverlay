// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="section-reveal relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="pointer-events-none absolute -left-12 top-24 h-40 w-40 rounded-full bg-[#16f2b3]/10 blur-3xl section-pulse" />
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full lottie-float">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map((experience, index) => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div
                      className="animated-card group p-3 relative overflow-hidden"
                      style={{ '--reveal-delay': `${index * 120}ms` }}
                    >
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-violet-500/30 bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#16f2b3]/60 group-hover:bg-[#16f2b3]/10 group-hover:text-[#16f2b3]">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className="transition-transform duration-300 group-hover:translate-x-1">
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase transition-colors duration-300 group-hover:text-[#16f2b3]">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base text-[#d3d8e8] transition-colors duration-300 group-hover:text-white">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
