"use client";
import { useState } from "react";
import Image from "next/image";
import moon from "@/assets/destination/image-moon.webp";
import mars from "@/assets/destination/image-mars.webp";
import europa from "@/assets/destination/image-europa.webp";
import titan from "@/assets/destination/image-titan.webp";

export default function Home() {
  const destinations = [
    {
      name: "Moon",
      image: moon,
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      image: mars,
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      image: europa,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      image: titan,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];
  const [currentDestination, setCurrentDestination] = useState<number>(0);

  const DestinationTabs = () => {
    return (
      <ul className="nav-text flex h-10 justify-center gap-9 uppercase lg:justify-start">
        {destinations.map((dest, ind) => (
          <li
            onClick={() => setCurrentDestination(ind)}
            className={`withTransition h-full cursor-pointer border-b-4 hover:border-white hover:text-white ${currentDestination == ind ? "border-white text-white" : "border-transparent text-secondary"}`}
            key={ind}
          >
            {dest.name}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container px-5 md:px-20">
      <h1 className="subheading-s page-header">
        <span>01</span> pick your destination
      </h1>
      {destinations.map((destination, ind) => (
        <div
          className={`flex flex-col items-center gap-10 lg:flex-row lg:space-x-20 ${currentDestination !== ind && "hidden"}`}
          key={ind}
        >
          <Image
            className="mb-10 h-[150px] w-[150px] md:h-[300px] md:w-[300px] lg:h-[480px] lg:w-[480px]"
            src={destination.image}
            alt={destination.name}
            width={1000}
            height={1000}
          />

          <div className="space-y-5">
            <DestinationTabs />

            <div className="space-y-4">
              <h1 className="heading-l text-center lg:text-left">
                {destination.name}
              </h1>
              <p className="body-text">{destination.description}</p>
              <div className="h-[1px] w-full bg-gray-500/50"></div>

              <div className="item-center flex flex-col items-center justify-center gap-8 md:flex-row md:space-x-28 lg:justify-start lg:space-x-16">
                <div>
                  <h3 className="subheading-s text-center text-secondary">
                    AVG. DISTANCE
                  </h3>
                  <p className="subheading-l text-center">
                    {destination.distance}
                  </p>
                </div>
                <div>
                  <h3 className="subheading-s text-center text-secondary">
                    EST. TRAVEL TIME
                  </h3>
                  <p className="subheading-l text-center">
                    {destination.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
