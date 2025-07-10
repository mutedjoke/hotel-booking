import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';

const CreateCard = ({ card }) => (
  <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
    {/* User Info */}
    <div className="flex gap-2 items-center">
      <img className="size-11 rounded-full object-cover" src={card.image} alt={card.name} />
      <div className="flex flex-col">
        <p className="font-medium">{card.name}</p>
        <span className="text-xs text-slate-500">{card.address}</span>
      </div>
    </div>

    {/* Review Text */}
    <p className="text-sm py-4 text-gray-800 italic">
      “{card.review}”
    </p>

    {/* Star Rating */}
    <div className="flex gap-1 text-yellow-400 text-sm">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < card.rating ? "★" : "☆"}</span>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gray-200 pb-20 relative overflow-hidden">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Section Title */}
      <div className="text-center max-w-3xl">
        <Title
          title="What Our Guests Say"
          subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
        />
      </div>

      {/* Marquee 1 */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative mt-10">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-200 to-transparent"></div>
        <div className="marquee-inner flex min-w-[200%] pt-10 pb-5">
          {[...testimonials, ...testimonials].map((card, index) => (
            <CreateCard key={`m1-${index}`} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-200 to-transparent"></div>
      </div>

      {/* Marquee 2 (Reversed) */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-200 to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex min-w-[200%] pt-10 pb-5">
          {[...testimonials, ...testimonials].map((card, index) => (
            <CreateCard key={`m2-${index}`} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-200 to-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonials;
