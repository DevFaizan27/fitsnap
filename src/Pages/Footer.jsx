import React from 'react'

const Footer = () => {
  return (
    <footer className="self-stretch bg-gray-200 flex flex-col items-center justify-start p-14 box-border gap-[12px_0px] min-h-[406px] max-w-full shrink-0 text-left text-xs-4 text-white font-inter lg:pl-7 lg:pr-7 lg:box-border mq450:pt-9 mq450:pb-9 mq450:box-border">
      <div className="w-[18px] h-6 relative overflow-hidden shrink-0 hidden" />
      <div className="w-[1200px] flex flex-row items-start justify-start max-w-full">
        <div className="w-[1105px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="w-[318px] flex flex-row items-start justify-start gap-[0px_100px] mq450:gap-[0px_50px]">
            <div className="w-[104px] flex flex-col items-start justify-start gap-[17px_0px]">
              <b className="self-stretch relative text-base tracking-[1.7px] leading-[20px] uppercase font-crimson-text text-lightsteelblue">
                company
              </b>
              <div className="relative text-xs-3 tracking-[0.5px] leading-[16px]">
                Our story
              </div>
              <div className="relative tracking-[0.5px] leading-[16px]">
                Careers
              </div>
              <div className="w-[73.3px] relative tracking-[0.5px] leading-[16px] flex items-center">
                Blog
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[17px_0px]">
              <b className="w-[82px] relative text-base tracking-[1.7px] leading-[20px] uppercase flex font-crimson-text text-lightsteelblue items-center">
                help
              </b>
              <div className="relative text-xs tracking-[0.5px] leading-[16px]">
                FAQ
              </div>
              <div className="relative tracking-[0.5px] leading-[16px]">{`Terms & Conditions`}</div>
              <div className="relative tracking-[0.5px] leading-[16px]">
                Privacy Policy
              </div>
            </div>
          </div>
          <div className="w-[441px] flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full text-base text-lightsteelblue font-crimson-text">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_34px] mq450:flex-wrap mq450:gap-[0px_17px]">
              <b className="w-[154px] relative tracking-[1.7px] leading-[12px] uppercase flex items-center shrink-0">
                Social media
              </b>
              <b className="flex-1 relative tracking-[1.7px] leading-[12px] uppercase inline-block min-w-[164px]">
                Stay updated with Us
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] flex flex-row flex-wrap items-start justify-start gap-[0px_131px] max-w-full lg:gap-[0px_65px] mq450:gap-[0px_16px] mq750:gap-[0px_33px]">
        <div className="w-[73px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
          <div className="self-stretch relative tracking-[0.5px] leading-[16px]">
            About
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-between min-w-[647px] max-w-full gap-[20px] mq750:flex-wrap mq1050:min-w-full">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="relative tracking-[0.5px] leading-[16px]">
              Contact Us
            </div>
          </div>
          <div className="w-[536px] flex flex-row items-start justify-start gap-[0px_59px] max-w-full text-sm mq750:flex-wrap mq750:gap-[0px_29px]">
            <div className="h-[26px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_9px]">
              <img
                className="h-[25px] w-[25px] relative object-cover"
                loading="lazy"
                alt=""
                src="/group@2x.png"
              />
              <img
                className="h-[25px] w-[25px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[25px] w-[25px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/x-svg.svg"
              />
              <img
                className="h-[25px] w-[25px] relative"
                loading="lazy"
                alt=""
                src="/path-2520.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[226px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                <div className="self-stretch bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-row items-center justify-between pt-[11px] pb-2.5 pr-[22px] pl-[21px] gap-[20px] mq450:flex-wrap">
                  <input
                    className="w-[219px] [border:none] [outline:none] font-medium font-inter text-mini-6 bg-[transparent] h-[19px] relative tracking-[0.5px] leading-[24px] text-gray-100 text-left flex items-center"
                    placeholder="Your email address"
                    type="text"
                  />
                  <img
                    className="h-[34px] w-8 relative overflow-hidden shrink-0"
                    alt=""
                    src="/button--submit.svg"
                  />
                </div>
                <div className="w-[258px] relative tracking-[0.5px] leading-[24px] flex items-center">
                  Copyright © 2023 FitSnap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer