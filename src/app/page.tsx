"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "./data.json";

type Card = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export default function HomePage() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setCards(data); // ✅ loads JSON data
  }, []);

  return (
    <div className='flex flex-col justify-center items-center bg-coolgray min-h-screen px-6 py-12'>
      {/* Hero Section */}
      <h1 className='text-5xl md:text-7xl font-extrabold text-navy text-center tracking-tight'>
        Welcome to my page
      </h1>
      <h2 className='mt-6 text-2xl md:text-4xl font-semibold text-teal text-center'>
        Here you will find my completed challenges
      </h2>
      <h3 className='mt-4 text-lg md:text-2xl text-sand text-center max-w-2xl'>
        This homepage is in beta and will be improved later
      </h3>

      {/* Cards Section */}
      <div className='mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl'>
        {cards.map((card, idx) => (
          <Link
            key={idx}
            href={card.link}
            className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300'>
            <Image
              src={card.image}
              alt={card.title}
              width={1000}
              height={760}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h4 className='text-xl font-bold text-navy'>{card.title}</h4>
              <p className='mt-2 text-sand'>{card.description}</p>
              <span className='mt-4 inline-block text-coral font-semibold hover:text-teal'>
                View Project →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
