"use client";
import { useState } from "react";
import Image from "next/image";
import launch_vehicle_ls from "@/assets/technology/image-launch-vehicle-landscape.jpg";
import launch_vehicle_pt from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import space_capsule_ls from "@/assets/technology/image-space-capsule-landscape.jpg";
import space_capsule_pt from "@/assets/technology/image-space-capsule-portrait.jpg";
import spaceport_ls from "@/assets/technology/image-spaceport-landscape.jpg";
import spaceport_pt from "@/assets/technology/image-spaceport-portrait.jpg";

export default function Home() {
  const technology = [
    {
      name: "Launch vehicle",
      images: {
        portrait: launch_vehicle_pt,
        landscape: launch_vehicle_ls,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: spaceport_pt,
        landscape: spaceport_ls,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: space_capsule_pt,
        landscape: space_capsule_ls,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  const [currentTech, setCurrentTech] = useState<number>(0);

  const TechnologySwitch = () => {
    return (
      <div className="flex items-center justify-between gap-9 lg:flex-col lg:items-start">
        {technology.map((tech, ind) => (
          <div
            onClick={() => setCurrentTech(ind)}
            className={`withTransition md:text-l flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-500/50 hover:border-white md:h-14 md:w-14 lg:h-20 lg:w-20 lg:text-xl ${currentTech == ind ? "bg-white text-primary" : "bg-transparent text-white"}`}
          >
            {ind + 1}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container lg:px-20">
      <h1 className="subheading-s page-header px-5 md:px-20">
        <span>03</span> space launch 101
      </h1>

      {technology.map((tech, ind) => (
        <div
          className={`flex flex-col items-center gap-10 lg:flex-row lg:items-center ${currentTech !== ind && "hidden"}`}
          key={ind}
        >
          <Image
            className="h-96 md:hidden"
            src={tech.images.portrait}
            alt=""
            width={1000}
            height={1000}
          />
          <Image
            className="hidden h-96 md:block lg:hidden"
            src={tech.images.landscape}
            alt=""
            width={1000}
            height={1000}
          />
          <Image
            className="order-2 hidden h-[500px] w-[500px] lg:block"
            src={tech.images.portrait}
            alt=""
            width={1000}
            height={1000}
          />

          <div className="flex flex-col items-center gap-10 lg:flex-1 lg:flex-row lg:items-start">
            <TechnologySwitch />

            <div className="space-y-4 text-center lg:space-y-8 lg:text-left">
              <div>
                <p className="subheading-l text-gray-200/50">
                  the terminology...
                </p>
                <p className="heading-s">{tech.name}</p>
              </div>
              <p className="body-text">{tech.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
