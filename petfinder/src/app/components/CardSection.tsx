"use client";

import React from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

// Pet type definition
type Pet = {
  name: string;
  breed: string;
  age: string;
  image: string;
};

// Pet data – billedstier peger korrekt på /public/images
const pets: Pet[] = [
  { name: "Harry", breed: "Yorkshire Terrier", age: "Young", image: "/images/harry.jpg" },
  { name: "Pjercik", breed: "Blandingsrace", age: "2,5 år", image: "/images/pjercik.jpg" },
  { name: "Whitney", breed: "Britisk langhåret kat", age: "2 mdr.", image: "/images/whitney.jpg" },
  { name: "Baggi", breed: "Jack Russell terrier", age: "4 mdr.", image: "/images/baggi.jpg" },
  { name: "Snow", breed: "Samojede", age: "Ukendt", image: "/images/snow.jpg" },
  { name: "Kiwi", breed: "Blandingsrace", age: "1 år", image: "/images/kiwi.jpg" },
];

const CardSection = () => {
  return (
    <section className="grid grid-cols-2 gap-4 px-4 py-4">
      {pets.map((pet, index) => (
        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm relative">
          {/* Billede */}
          <div className="relative w-full h-32">
            <Image src={pet.image} alt={pet.name} fill className="object-cover" sizes="(max-width: 768px) 100vw" />
            {/* Stjerne ikon */}
            <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full">
              <FaRegStar className="text-pink-400 text-sm" />
            </div>
          </div>

          {/* Tekst info */}
          <div className="p-2">
            <div className="font-bold text-sm text-gray-900">{pet.name}</div>
            <div className="text-xs text-gray-500">{pet.breed}</div>
            <div className="text-xs text-gray-400">{pet.age}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardSection;
