// @flow strict
"use client";
import { useState, useRef, useEffect } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import TypeIt from "typeit-react";
import styles from "./styles.module.css";

function HeroSection() {
  const [isFirstTypingComplete, setIsFirstTypingComplete] = useState(false);
  const [isSecondTypingComplete, setIsSecondTypingComplete] = useState(false);
  const [isThirdTypingComplete, setIsThirdTypingComplete] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMeasuring, setIsMeasuring] = useState(true);
  const [heightC, setHeightC] = useState();
  const [widthC, setWidthC] = useState();

  // Ref for the container
  const containerRef = useRef(null);

  useEffect(() => {
    if (isMeasuring && containerRef.current) {
      const { height, width } = containerRef.current.getBoundingClientRect();
      setHeightC(height);
      setWidthC(width);
      // Switch to typing mode after measuring
      setIsMeasuring(false);
      setVisible(false);
    }
  }, [isMeasuring, isThirdTypingComplete]);

  const optionsFirst = {
    pauseFor: 0,
    afterComplete: () => {
      setIsFirstTypingComplete(true);
    },
  };

  const optionsSecond = {
    pauseFor: 0,
    afterComplete: () => {
      setIsSecondTypingComplete(true);
    },
  };

  const optionsThird = {
    pauseFor: 0,
    afterComplete: () => {
      setIsThirdTypingComplete(true);
    },
  };

  const fullContent = (
    <>
      <span className="mr-2 text-pink-500">const</span>
      <span className="mr-2 text-white">coder</span>
      <span className="mr-2 text-pink-500">=</span>
      <span className="text-gray-400">{`{`}</span>
      <br />
      <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
      <span className="text-gray-400">{`'`}</span>
      <span className="text-amber-300">Anurag Parashar Sarmah</span>
      <span className="text-gray-400">{`',`}</span>
      <br />
      <div className="ml-4 lg:ml-8 mr-2">
        <span className="text-white">skills:</span>
        <span className="text-gray-400">{` ['`}</span>
        <span className="text-amber-300">React</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">NextJS</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Express</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Recoil</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Redux</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">MongoDB</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">MySql</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Docker</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">AWS</span>
        <span className="text-gray-400">{"'],"}</span>
      </div>
      <span className="ml-4 lg:ml-8 mr-2 text-white">techSavvy:</span>
      <span className="text-orange-400">true</span>
      <span className="text-gray-400">,</span>
      <br />
      <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
      <span className="text-orange-400">true</span>
      <span className="text-gray-400">,</span>
      <br />
      <span className="ml-4 lg:ml-8 mr-2 text-white">documentationReader:</span>
      <span className="text-orange-400">true</span>
      <span className="text-gray-400">,</span>
      <br />
      <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
      <span className="text-orange-400">function</span>
      <span className="text-gray-400">{`() {`}</span>
      <br />
      <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
      <span className="text-gray-400">(</span>
      <br />
      <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
      <span className="mr-2 text-white">problemSolver</span>
      <span className="text-amber-300">&amp;&amp;</span>
      <br />
      <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
      <span className="mr-2 text-white">documentationReader</span>
      <span className="text-amber-300">&amp;&amp;</span>
      <br />
      <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
      <span className="mr-2 text-white">skills.length</span>
      <span className="mr-2 text-amber-300">&gt;=</span>
      <span className="text-orange-400">5</span>
      <br />
      <span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span>
      <br />
      <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
      <br />
      <span className="text-gray-400">{`};`}</span>
    </>
  );

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />I am{" "}
            <span className=" text-pink-500">{personalData.name}</span>
            . <br />
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all transition-all duration-200 ease-out hover:from-pink-500 hover:to-violet-600 hover:scale-105"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2">
                <span>Contact me</span>
                <RiContactsFill size={14} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold hover:scale-105"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div
          ref={containerRef}
          className={`order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] ${styles.customHeight} ${styles.customWidth} justify-between`}
          style={{
            "--custom-height": `${heightC}px`,
            "--custom-width": `${widthC}px`,
          }}
        >
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400 hover:bg-red-600 hover:scale-110 cursor-pointer transition-all duration-200">
                <div></div>
              </div>
              <div className="h-3 w-3 rounded-full bg-orange-300 hover:bg-orange-500 hover:scale-110 cursor-pointer transition-all duration-200">
                <div></div>
              </div>
              <div className="h-3 w-3 rounded-full bg-green-300 hover:bg-green-400 hover:scale-110 cursor-pointer transition-all duration-200">
                <div></div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code
              className="font-mono text-xs md:text-sm lg:text-base"
              style={{ visibility: visible ? "hidden" : "visible" }}
            >
              {isMeasuring ? (
                fullContent
              ) : (
                <>
                  {isFirstTypingComplete ? (
                    <>
                      <span className="mr-2 text-pink-500">const</span>
                      <span className="mr-2 text-white">coder</span>
                      <span className="mr-2 text-pink-500">=</span>
                      <span className="text-gray-400">{`{`}</span>
                      <br />
                      <span className="ml-4 lg:ml-8 mr-2 text-white">
                        name:
                      </span>
                      <span className="text-gray-400">{`'`}</span>
                      <span className="text-amber-300">
                        Anurag Parashar Sarmah
                      </span>
                      <span className="text-gray-400">{`',`}</span>
                    </>
                  ) : (
                    <>
                      <TypeIt options={optionsFirst}>
                        <span className="mr-2 text-pink-500">const</span>
                        <span className="mr-2 text-white">coder</span>
                        <span className="mr-2 text-pink-500">=</span>
                        <span className="text-gray-400">{`{`}</span>
                        <br />
                        <span className="ml-4 lg:ml-8 mr-2 text-white">
                          name:
                        </span>
                        <span className="text-gray-400">{`'`}</span>
                        <span className="text-amber-300">
                          Anurag Parashar Sarmah
                        </span>
                        <span className="text-gray-400">{`',`}</span>
                      </TypeIt>
                    </>
                  )}
                  <br />
                  <div className="ml-4 lg:ml-8 mr-2">
                    {isFirstTypingComplete &&
                      (isSecondTypingComplete ? (
                        <>
                          <span className="text-white">skills:</span>
                          <span className="text-gray-400">{` ['`}</span>
                          <span className="text-amber-300">React</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">NextJS</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">Express</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">Recoil</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">Redux</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">MongoDB</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">MySql</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">Docker</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">AWS</span>
                          <span className="text-gray-400">{"'],"}</span>
                        </>
                      ) : (
                        <TypeIt options={optionsSecond}>
                          <span className="text-white">skills:</span>
                          <span className="text-gray-400">{` ['`}</span>
                          <span className="text-amber-300">React</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">NextJS</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">Express</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">Recoil</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">Redux</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">MongoDB</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">MySql</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">Docker</span>
                          <span className="text-gray-400">{"', '"}</span>
                          <span className="text-amber-300">AWS</span>
                          <span className="text-gray-400">{"'],"}</span>
                        </TypeIt>
                      ))}
                  </div>
                  {isSecondTypingComplete && (
                    <TypeIt options={optionsThird}>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">
                        techSavvy:
                      </span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                      <br />
                      <span className="ml-4 lg:ml-8 mr-2 text-white">
                        problemSolver:
                      </span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                      <br />
                      <span className="ml-4 lg:ml-8 mr-2 text-white">
                        documentationReader:
                      </span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                      <br />
                      <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                        hireable:
                      </span>
                      <span className="text-orange-400">function</span>
                      <span className="text-gray-400">{`() {`}</span>
                      <br />
                      <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                        return
                      </span>
                      <span className="text-gray-400">(</span>
                      <br />
                      <span className="ml-12 lg:ml-24 text-cyan-400">
                        this.
                      </span>
                      <span className="mr-2 text-white">problemSolver</span>
                      <span className="text-amber-300">&amp;&amp;</span>
                      <br />
                      <span className="ml-12 lg:ml-24 text-cyan-400">
                        this.
                      </span>
                      <span className="mr-2 text-white">
                        documentationReader
                      </span>
                      <span className="text-amber-300">&amp;&amp;</span>
                      <br />
                      <span className="ml-12 lg:ml-24 text-cyan-400">
                        this.
                      </span>
                      <span className="mr-2 text-white">skills.length</span>
                      <span className="mr-2 text-amber-300">&gt;=</span>
                      <span className="text-orange-400">5</span>
                      <br />
                      <span className="ml-8 lg:ml-16 mr-2 text-gray-400">
                        );
                      </span>
                      <br />
                      <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                      <br />
                      <span className="text-gray-400">{`};`}</span>
                    </TypeIt>
                  )}
                </>
              )}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
