import Link from "next/link";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center bg-coolgray min-h-screen px-6 py-12'>
      {/* Hero Section */}
      <h1 className='text-5xl md:text-7xl font-extrabold text-navy text-center tracking-tight'>
        Welcome to qr-code-challenge
      </h1>
    </div>
  );
}
