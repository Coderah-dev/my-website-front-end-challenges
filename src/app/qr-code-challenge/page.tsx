import Image from "next/image";

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
        <div className='relative w-72 h-72 mt-4'>
          <Image
            src='/qr-challenge/image-qr-code.png'
            alt='QR code preview'
            fill
            className='object-cover rounded-lg'
            priority
          />
        </div>

        {/* Text */}
        <h3 className='mt-6 text-xl font-bold text-center text-gray-800'>
          Improve your front-end skills by building projects
        </h3>
        <p className='mt-3 text-center text-gray-500 px-4'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
