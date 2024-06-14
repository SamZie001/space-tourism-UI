"use client";
import { useState } from "react";
import Image from "next/image";
import douglas from "@/assets/crew/image-douglas-hurley.webp";
import ansari from "@/assets/crew/image-anousheh-ansari.webp";
import mark from "@/assets/crew/image-mark-shuttleworth.webp";
import victor from "@/assets/crew/image-victor-glover.webp";

export default function Home() {
  const crew = [
    {
      name: "Douglas Hurley",
      image: douglas,
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      image: mark,
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      image: victor,
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      image: ansari,
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];
  const [currentCrew, setCurrentCrew] = useState<number>(0);

  const CrewSwitch = () => {
    return (
      <div className="flex h-10 justify-center gap-4 lg:justify-start lg:gap-9">
        {crew.map((crew, ind) => (
          <div
            onClick={() => setCurrentCrew(ind)}
            className={`withTransition h-[12px] w-[12px] cursor-pointer rounded-full hover:bg-white lg:h-[15px] lg:w-[15px] ${currentCrew == ind ? "bg-white" : "bg-gray-500/50"}`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="container px-5 md:px-20">
      <h1 className="subheading-s page-header">
        <span>02</span> meet your crew
      </h1>

      {crew.map((crew, ind) => (
        <div
          className={`flex flex-col items-center gap-10 lg:flex-row lg:items-start ${currentCrew !== ind && "hidden"}`}
          key={ind}
        >
          <div className="lg:w-1/2">
            <div className="mb-14 space-y-4 text-center lg:mb-24 lg:space-y-8 lg:text-left">
              <div>
                <p className="subheading-l text-gray-500">{crew.role}</p>
                <p className="subheading-l">{crew.name}</p>
              </div>
              <p className="body-text">{crew.bio}</p>
            </div>
            <CrewSwitch />
          </div>
          <Image
            className="h-[340px] w-[271.24px] p-5 md:h-[560px] md:w-[446.8px] lg:h-[446.8px] lg:w-[400px] lg:-translate-y-20 lg:p-0"
            src={crew.image}
            alt={crew.name}
            width={1000}
            height={1000}
          />
        </div>
      ))}
    </div>
  );
}
