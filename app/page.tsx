'use client'
import Image from "next/image";
import img1 from '../public/bg1.jpg'
import { ArrowRight, CalendarSyncIcon, ConstructionIcon, OrbitIcon, WrenchIcon } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";


export default function Home() {
  return (
    <div>
      <div className=" w-full">
        <section className="relative h-screen w-full overflow-hidden">
          <div className="w-full h-full ">
            {/* <Image src={bg} alt="silos" className="move w-full" /> */}
            <video src="/vd1.mp4" className="absolute top-0 left-0 w-full h-full object-cover" 
            autoPlay
            loop
            muted
            playsInline />

          </div>
          <div className="h-screen absolute top-0 w-full ">
            <div className=" bg-[#1128479d] w-3/4 px-20 flex flex-col  h-full [clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)] absolute top-0">
              <p className="h-72 text-white text-2xl font-semibold max-w-[1000px] pl-4 mt-86 leading-14 pb-10">
                <span className="text-blue-400 font-bold ">
                  GTIS 
                </span>   
               <Typewriter
                  words={[' is a company specializing in industrial solutions, including metallic, mechanical, and electrical assembly, automation, maintenance, as well as the supply of spare parts and engineering. Its goal is to support industrial companies in their installation and infrastructure optimization projects']}
                  loop={1}
                  typeSpeed={5}
                />
              </p>
              <div className="flex mt-28 gap-4">
                <button className="text-white bg-blue-500 w-2xs  h-16 rounded-full text-2xl font-bold">Contact us</button>
                <button className="h-16 w-16 bg-white rounded-full flex justify-center items-center"><ArrowRight size={35} className="text-sky-500"/></button>
              </div>
            </div>
            <div className="absolute right-0 top-1/3 h-[400px] w-[760px] overflow-hidden border-16 border-white z-30">
              <Image src={img1} alt="" className="object-contain w-full "/>
            </div>
              <div className="h-64 w-48 bg-sky-500 absolute z-20 top-[470px] right-[590px]"/>
          </div>
          {/* <Wave className="w-2/3 h-auto absolute bottom-0 right-0 transform "/>
          <Wave className="w-1/3 h-auto absolute bottom-0 left-0 transform scale-x-[-1]"/> */}
        </section>
        <div className="h-1 bg-blue-500 w-full"/>
        <div className="bg-gray-100 w-full h-40 flex justify-center items-center text-xl text-center px-20 text-[#112847]">
            <p>GTIS offers complete solutions for optimizing and maintaining flour mills, including the installation of automated systems, preventive and corrective maintenance of production equipment, and the supply of spare parts specific to flour production lines.</p>
        </div>
        <section className="h-[500px] flex items-center">
          <div className="w-full flex justify-around items-center font-bold text-2xl px-40 text-[#112847]">
            <div className="flex flex-col justify-center items-center w-68 text-center">
              <CalendarSyncIcon size={110} color="#112847"/>
              <h2 className="pt-5">Mechanical &amp; Electrical Assembly</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-68 text-center">
              <WrenchIcon size={110} color="#112847"/>
              <h2 className="pt-5">Automation Solutions</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-68 text-center">
              <ConstructionIcon size={110} color="#112847"/>
              <h2 className="pt-5"> Preventive &amp; Corrective Maintenance</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-68 text-center">
              <OrbitIcon size={110} color="#112847"/>
              <h2 className="pt-5">Spare Parts Supply</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
