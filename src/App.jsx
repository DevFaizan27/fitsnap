import React from 'react'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import ParentSection from './Pages/ParentSection'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div className="w-full relative bg-white box-border flex flex-col items-center justify-start pt-0.5 pb-0 px-0 gap-[20px_0px] tracking-[normal] border-[1px] border-solid border-black">
    <Navbar/>
    <section className="w-[1281px] flex flex-col items-center justify-start pt-0 px-5 pb-[73px] box-border gap-[57px_0px] max-w-full shrink-0 lg:pb-[47px] lg:box-border mq750:gap-[28px_0px] mq750:pb-[31px] mq750:box-border">
      <Hero/>
    </section>
    <ParentSection/>
    <section className="w-[1114px] flex flex-row items-start justify-start pt-0 pb-[51px] pr-0 pl-1 box-border max-w-full shrink-0 text-center text-21xl text-darkslateblue-200 font-crimson-text lg:max-w-[calc(100%_-_4px)] mq450:pb-[21px] mq450:box-border mq1050:pb-[33px] mq1050:box-border">
      <div className="flex-1 flex flex-col items-center justify-start gap-[77px_0px] max-w-full lg:gap-[38px_0px] mq750:gap-[19px_0px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[26px] pl-[17px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-center justify-start gap-[25px_0px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full">
              <h1 className="m-0 h-[65px] w-[1067px] relative text-inherit leading-[42px] font-semibold font-inherit flex items-center justify-center shrink-0 max-w-full mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[34px]">
                Elevate Your Fitness: The AI Workout Plan – Precision,
                Progression, Perfection
              </h1>
              <div className="h-[522px] w-[528px] absolute !m-[0] top-[-483px] right-[-147px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[268px] h-[483px] object-cover z-[2]"
                  alt=""
                  src="/contact-us-list-item-link@2x.png"
                />
                <img
                  className="absolute top-[39px] left-[260px] w-[268px] h-[483px] object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-818@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-mini text-darkslategray-300 font-poppins">
              <div className="w-[753.7px] relative leading-[22px] flex items-center justify-center shrink-0 max-w-full">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum augue. Integer congue, libero nec congue fermentum, neque turpis eleifend libero, sit amet dictum dolor felis quis quam. Sed tincidunt `}</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[44px_0px] max-w-full text-13xl mq750:gap-[22px_0px]">
          <div className="w-[650px] flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border max-w-full mq750:max-w-[calc(100%_-_3px)]">
            <h2 className="m-0 h-9 flex-1 relative text-inherit leading-[28.6px] font-semibold font-inherit flex items-center justify-center max-w-full mq450:text-lgi mq450:leading-[17px] mq1050:text-7xl mq1050:leading-[23px]">
              Discover the other exercise at FitSnap
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start max-w-full text-lgi text-navy-200 font-poppins">
            <div className="self-stretch flex flex-row items-end justify-center gap-[0px_48px] max-w-full mq750:gap-[0px_24px] mq1050:flex-wrap">
              <div className="flex-1 flex flex-row items-end justify-start min-w-[467px] [row-gap:20px] max-w-full mq750:flex-wrap mq750:min-w-full">
                <div className="flex flex-col items-start justify-start gap-[23px_0px] min-w-[345px] max-w-full mq450:min-w-full mq750:flex-1">
                  <div className="w-[310px] flex flex-row items-start justify-start py-0 px-[31px] box-border">
                    <div className="flex-1 flex flex-row items-center justify-center">
                      <div className="h-[250px] flex-1 relative">
                        <div className="absolute top-[0px] left-[-0.65px] rounded-[50%] bg-goldenrod w-full h-full" />
                        <img
                          className="absolute top-[16px] left-[20.75px] w-[205px] h-[217px] object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-813@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[9px_0px]">
                    <div className="w-[162px] h-[27px] flex flex-row items-start justify-start py-0 pr-[17px] pl-0 box-border mq450:max-w-[calc(100%_-_17px)]">
                      <div className="self-stretch flex-1 relative leading-[20.9px] font-semibold flex items-center justify-center">
                        Chest press
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[13px_0px] text-lg text-darkslategray-200">
                      <div className="w-[344.6px] h-[130px] relative leading-[30px] flex items-center justify-center shrink-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nulla facilisi. In hac habitasse platea
                        dictumst. Vivamus eget fermentum
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-[18px] pl-0 text-mini text-darkslateblue-200 mq450:max-w-[calc(100%_-_18px)]">
                        <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                          <div className="relative leading-[22px]">{`Read More `}</div>
                          <img
                            className="h-3.5 w-[13.4px] relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/section--article.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-end justify-start gap-[8px_0px] min-w-[243px] max-w-full ml-[-1px] mq750:ml-0">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                    <div className="w-[351px] flex flex-row items-center justify-center py-0 pr-5 pl-0 box-border max-w-full">
                      <div className="h-[263px] flex-1 relative max-w-full">
                        <div className="absolute top-[0px] left-[72px] rounded-[50%] bg-palegreen w-[248.3px] h-[250px]" />
                        <img
                          className="absolute top-[14px] left-[0px] w-[331px] h-[249px] object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-813-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[27px] flex flex-row items-start justify-start py-0 px-[77px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="self-stretch relative leading-[20.9px] font-semibold flex items-center justify-center">
                      Straight leg deadlift
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start py-0 pr-0 pl-5 box-border gap-[13px_0px] max-w-full text-lg text-darkslategray-200">
                    <div className="w-[344.6px] h-[130px] relative leading-[30px] flex items-center justify-center shrink-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla facilisi. In hac habitasse platea dictumst.
                      Vivamus eget fermentum
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[27px] text-mini text-darkslateblue-200">
                      <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                        <div className="relative leading-[22px]">{`Read More `}</div>
                        <img
                          className="h-3.5 w-[13.4px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/section--article.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[21px_0px] min-w-[345px] max-w-full mq450:min-w-full mq1050:flex-1">
                <div className="flex flex-row items-start justify-start py-0 pr-[29px] pl-7">
                  <div className="w-[250px] flex flex-row items-center justify-center py-0 pr-px pl-0 box-border">
                    <div className="h-[258px] flex-1 relative">
                      <div className="absolute top-[8px] left-[0.3px] rounded-[50%] bg-skyblue w-[248.3px] h-[250px]" />
                      <img
                        className="absolute top-[0px] left-[0px] w-[223px] h-[214px] object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-813-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <div className="w-44 flex flex-row items-start justify-start py-0 pr-[18px] pl-0 box-border mq450:max-w-[calc(100%_-_18px)]">
                    <div className="h-[27px] flex-1 relative leading-[20.9px] font-semibold flex items-center justify-center shrink-0 z-[1]">
                      Crunches
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[22px_0px] text-lg text-darkslategray-200">
                    <div className="w-[344.6px] h-[130px] relative leading-[30px] flex items-center justify-center shrink-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla facilisi. In hac habitasse platea dictumst.
                      Vivamus eget fermentum
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[13px] text-mini text-darkslateblue-200 mq450:max-w-[calc(100%_-_13px)]">
                      <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                        <div className="relative leading-[22px]">{`Read More `}</div>
                        <img
                          className="h-3.5 w-[13.4px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/section--article.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[925px] flex flex-row items-start justify-between py-0 px-5 box-border gap-[20px] max-w-full mt-[-1px] mq450:flex-wrap mq450:justify-center">
              <div className="w-28 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                <div className="self-stretch h-px relative bg-darkslateblue-200 z-[1]" />
              </div>
              <div className="h-px w-[101.9px] relative bg-darkslateblue-200 z-[1]" />
              <div className="h-px w-[101.9px] relative bg-darkslateblue-200 z-[1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
  )
}

export default App