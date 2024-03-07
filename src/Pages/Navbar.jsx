import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-midnightblue flex flex-row hover:cursor-pointer items-center justify-start py-6 pr-[39px] pl-[659px] sticky gap-[0px_24px] top-[0] z-[99] shrink-0 text-left text-lg text-floralwhite font-lato mq450:pl-5 mq450:box-border mq750:pl-[329px] mq750:box-border">
      <div className="flex flex-row items-start justify-start gap-[0px_24px] mq750:hidden">
        <a className="relative   leading-[18px] uppercase">Home</a>
        <a className="relative leading-[18px] uppercase whitespace-nowrap">
          Workout plan
        </a>
      </div>
      <div className="h-[22px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
        <a className="relative leading-[18px] uppercase whitespace-nowrap">
          Ai tracker
        </a>
      </div>
      <div className="h-[22px] w-[115px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
        <a className="self-stretch relative leading-[18px] uppercase">
          Exercise
        </a>
      </div>
      <div className="w-[196px] flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[0px_19px]">
        <a className="relative leading-[18px] uppercase shrink-0">About</a>
        <button className="cursor-pointer [border:none] pt-[9px] pb-[7px] pr-0 pl-3.5 bg-darkslategray-400 flex-1 rounded-md flex flex-row items-start justify-start gap-[0px_8px] hover:bg-slategray">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/octiconperson24.svg"
          />
          <a className="flex-1 relative text-lg leading-[18px] uppercase font-lato text-whitesmoke text-left">
            Login
          </a>
        </button>
      </div>
      <img
        className="h-[202px] w-[217px] absolute !m-[0] top-[-61px] left-[0px] object-cover z-[1]"
        alt=""
        src="/frame-section-article@2x.png"
      />
    </header>
  );
};

export default Navbar; 