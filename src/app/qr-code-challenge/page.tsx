import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-evenly bg-slate-300 min-h-screen py-8'>
      {/* Title at the top */}
      <h1 className='text-5xl md:text-7xl font-extrabold text-navy text-center tracking-tight'>
        Welcome to qr-code-challenge
      </h1>

      {/* Card */}
      <div className='mt-12 flex flex-col items-center bg-white w-80 h-[31.1875rem] rounded-2xl shadow-lg p-4'>
        {/* QR Image */}
        <div className='relative w-72 h-72'>
          <Image
            src='/qr-challenge/image-qr-code.png'
            alt='QR code preview'
            fill
            className='object-cover rounded-lg'
            priority
          />
        </div>

        {/* Text */}
        <h2
          className={`mt-6 text-2xl ${outfit} font-bold text-center text-slate-900 leading-tight tracking-normal`}>
          Improve your front-end skills by building projects
        </h2>
        <p
          className={`mt-4 text-sm ${outfit} font-normal text-center text-slate-500 leading-normal tracking-wide`}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
