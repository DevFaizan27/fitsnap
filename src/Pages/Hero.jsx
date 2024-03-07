import React from 'react'
// import Vedio from '../../public/Vedio.mp4'
import ReactPlayer from 'react-player'

const Hero = () => {
  return (
    <>
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full text-left text-sm text-darkslategray-100 font-poppins">
      {/* <img
        className=""
        alt=""
        src="/section--image.svg"
      /> */}
      {/* <video  loop autoPlay>
        <source src='/Vedio.mp4' type='vedio/mp4'/>
      </video> */}
      <ReactPlayer playing={true} loop={true} width={'100%'} height={'697.5px'} className='flex-1 relative overflow-hidden ' url='/Vedio.mp4' />
      <div className="w-[300px] !m-[0] absolute bottom-[27px] left-[-76px] rounded-31xl bg-white shadow-[1px_1px_15px_2px_rgba(0,_0,_0,_0.1)] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 pb-4 pr-0 pl-[31px] box-border z-[1]">
        <div className="flex flex-col items-start justify-start pt-[15px] pb-0 pr-[15px] pl-0">
          <img
            className="w-9 h-[37px] relative object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-814@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px]">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-[37px] pl-0">
              <div className="h-[18px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="mb-[-4px] h-[22px] relative leading-[18px] font-medium flex items-center shrink-0">
                  100+ new users enrolled
                </div>
              </div>
            </div>
            <div className="relative text-xs leading-[18px] font-lato text-lightslategray">
              join now to get 20% instant discount
            </div>
          </div>
        </div>
        <div className="mt-[-5px] mr-[-3px] h-[15px] w-[15px] relative">
          <img
            className="absolute top-[0px] left-[0px] w-[15px] h-[15px] overflow-hidden"
            loading="lazy"
            alt=""
            src="/link--svg.svg"
          />
          <div className="absolute top-[12px] left-[0px] bg-darkslateblue-100 w-[15px] h-px z-[1]" />
        </div>
      </div>
    </div>
     <div className="w-[1154px] flex flex-row items-start justify-start py-0 pr-[15px] pl-0 box-border max-w-full text-left text-base text-darkslategray-300 font-poppins">
     <div className="flex-1 flex flex-col items-center justify-start gap-[61px_0px] max-w-full lg:gap-[30px_0px] mq750:gap-[15px_0px]">
       <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border max-w-full">
         <div className="flex flex-col items-center justify-start gap-[19px_0px] max-w-full">
           <div className="flex flex-row items-end justify-start min-h-[18px] max-w-full [row-gap:20px] mq450:flex-wrap">
             <div className="w-[83px] flex flex-row items-center justify-start py-0 pr-[15px] pl-0 box-border text-center">
               <div className="flex-1 relative leading-[17.6px]">Home</div>
               <img
                 className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
                 loading="lazy"
                 alt=""
                 src="/oouinextltr.svg"
               />
             </div>
             <div className="flex flex-row items-end justify-start py-0 pr-2 pl-0">
               <div className="relative leading-[17.6px]">Exercise</div>
               <img
                 className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
                 loading="lazy"
                 alt=""
                 src="/oouinextltr-1.svg"
               />
             </div>
             <div className="w-[55px] relative leading-[17.6px] flex items-center shrink-0">
               Bicep
             </div>
             <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
               <img
                 className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                 loading="lazy"
                 alt=""
                 src="/oouinextltr-1.svg"
               />
             </div>
             <div className="relative leading-[17.6px]">
               Barbell Bicep Curl
             </div>
           </div>
           <div className="flex flex-col items-center justify-start gap-[2px_0px] max-w-full text-center text-21xl text-darkslateblue-200 font-crimson-text">
             <div className="w-[590px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
               <h1 className="m-0 h-[55px] flex-1 relative text-inherit leading-[42.9px] font-semibold font-inherit flex items-center justify-center max-w-full mq450:text-5xl mq450:leading-[26px] mq1050:text-13xl mq1050:leading-[34px]">
                 Barbell Bicep Curl
               </h1>
             </div>
             <div className="w-[744.7px] relative text-lg leading-[26.4px] font-poppins text-steelblue flex items-center justify-center">
               The barbell curl is a classic and effective bicep exercise that
               targets the muscles in the front of your upper arms,
               specifically the biceps brachii.
             </div>
           </div>
         </div>
       </div>
       {/* chnage */}
       <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-lgi text-navy-100 mq750:flex-wrap">
         <div className="flex flex-col items-start justify-start gap-[45px_0px] mq450:gap-[22px_0px]">
           <div className="flex flex-col items-start justify-start gap-[9px_0px]">
             <div className="w-[248px] h-[27px] relative leading-[20.9px] font-semibold flex items-center shrink-0">
               Bicep Development
             </div>
             <div className="w-[269.6px] relative text-mini leading-[22px] text-darkslategray-300 flex items-center">
               he barbell bicep curl specifically targets the biceps brachii,
               contributing to their development and definition
             </div>
           </div>
           <div className="flex flex-col items-start justify-start gap-[9px_0px] text-navy-200">
             <div className="w-[210.6px] h-[27px] relative leading-[20.9px] font-semibold flex items-center shrink-0">
               Strengthen Building
             </div>
             <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 relative text-mini text-darkslategray-300">
               <div className="h-[109px] w-[276.8px] relative leading-[22px] flex items-center shrink-0">
                 The exercise allows for heavy resistance, promoting strength
                 gains in the biceps and surrounding muscle groups
               </div>
               <div className="h-[400px] w-[1143px] absolute !m-[0] top-[-220px] right-[-864px]">
                 <div className="absolute top-[211px] left-[0px] w-[248px] h-[31px] z-[1] flex items-center justify-center">
                   <img
                     className="w-full h-full z-[1] object-contain absolute left-[97px] top-[23px] [transform:scale(2.465)]"
                     loading="lazy"
                     alt=""
                     src="/section.svg"
                   />
                 </div>
                 <img
                   className="absolute top-[42.4px] left-[0.5px] w-[358px] h-[61px] overflow-hidden z-[1]"
                   alt=""
                   src="/indicatorleftsvg.svg"
                 />
                 <img
                   className="absolute top-[211px] left-[761px] w-[382px] h-[60px] overflow-hidden z-[1]"
                   loading="lazy"
                   alt=""
                   src="/indicatorrightsvg.svg"
                 />
                 <img
                   className="absolute top-[43px] left-[730px] w-[413px] h-[84px] overflow-hidden z-[1]"
                   loading="lazy"
                   alt=""
                   src="/indicatorrightsvg-fill.svg"
                 />
                 <div className="absolute top-[0.4px] left-[352.5px] rounded-[50%] bg-darkslateblue-300 w-[400px] h-[400px] z-[2]" />
                 <img
                   className="absolute top-[31px] left-[335px] w-[453px] h-[366px] object-cover z-[3]"
                   alt=""
                   src="/list-item@2x.png"
                 />
               </div>
             </div>
           </div>
         </div>
         <div className="w-[329px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full text-right text-navy-200">
           <div className="self-stretch flex flex-col items-end justify-start gap-[21px_0px] max-w-full">
             <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border max-w-full">
               <div className="flex-1 flex flex-col items-end justify-start gap-[12px_0px] max-w-full">
                 <div className="self-stretch h-[27px] relative leading-[20.9px] font-semibold flex items-center shrink-0">
                   Increased Muscle Engagement
                 </div>
                 <div className="w-[293px] relative text-mini leading-[22px] text-darkslategray-300 flex items-center">
                   By maintaining strict form and controlling the weight, you
                   ensure that the biceps are doing the majority of the work,
                   leading to better muscle engagement and growth.
                 </div>
                 <div className="h-[27px] relative leading-[20.9px] font-semibold flex items-center shrink-0">
                   Compound Movement
                 </div>
               </div>
             </div>
             <div className="w-[307px] h-[109px] relative text-mini leading-[22px] text-darkslategray-300 flex items-center shrink-0">
               While primarily an isolation exercise for the biceps, the
               barbell curl involves other muscles to a lesser extent, such as
               the forearms, shoulders, and upper back. This makes it a
               compound movement that engages multiple muscle groups
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   </>
  )
}

export default Hero