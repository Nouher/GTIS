import Image from "next/image";
import bg from '../public/bg2.jpg'
import img1 from '../public/bg1.jpg'
import Wave from "@/Components/Wave";
import { ArrowRight } from "lucide-react";


export default function Home() {
  return (
    <div>
      <div className=" w-full">
        <section className="relative h-screen w-full overflow-hidden">
          <div className="">
            <Image src={bg} alt="silos" className="move"/>
          </div>
          <div className="h-screen absolute top-0 w-full ">
            <div className=" bg-[#0a3d55ce] w-3/4 px-20 flex flex-col  h-full [clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)] absolute top-0">
              <p className="text-white text-2xl max-w-[1030px] border-l-6 border-sky-500 pl-4 mt-64 leading-14">
                <span className="text-sky-500 font-bold">
                  GTIS 
                </span>   is a company specializing in industrial solutions, including metallic, mechanical, and electrical assembly, automation, maintenance, as well as the supply of spare parts and engineering. Its goal is to support industrial companies in their installation and infrastructure optimization projects
              </p>
              <div className="flex mt-30 gap-4">
                <button className="text-white bg-sky-500 w-2xs  h-16 rounded-full text-2xl font-bold">Contact us</button>
                <button className="h-16 w-16 bg-white rounded-full flex justify-center items-center"><ArrowRight size={35} className="text-sky-500"/></button>
              </div>
            </div>
            <div className="absolute right-0 top-1/3 h-96 w-[700px] overflow-hidden border-16 border-white z-30">
              <Image src={img1} alt="" className="object-contain w-full "/>
            </div>
              <div className="h-64 w-48 bg-sky-500 absolute z-20 top-[450px] right-[530px]"/>
          </div>
          <Wave className="w-2/3 h-auto absolute bottom-0 right-0 transform "/>
          <Wave className="w-1/3 h-auto absolute bottom-0 left-0 transform scale-x-[-1]"/>
        </section>
        <section className="h-screen"></section>
      </div>
    </div>
  );
}
