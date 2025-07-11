'use client'
import Image from "next/image";
import { ArrowRight, Cable, HandHelping, PencilRuler, Shapes, Workflow, Wrench } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import PowerfulStats from "@/Components/PowerfulStats";
import IndustrialShowcase from "@/Components/IndustrialShowcase";
import { Button } from "@/Components/ui/button";


export default function Home() {
  return (
    <div>
      <div className=" w-full">
        <section className="relative h-[740px] w-full over">
          <div className="w-full h-full ">
            {/* <Image src={bg} alt="silos" className="move w-full" /> */}
            <video src="/vd1.mp4" className="absolute top-0 left-0 w-full h-full object-cover" 
            autoPlay
            loop
            muted
            playsInline />

          </div>
          <div className="h-full absolute top-0 w-full ">
            <div className=" bg-[#1128479d] w-full px-0 lg:px-20 flex flex-col items-center h-full absolute top-0">
              <div className="h-72 text-white text-2xl font-semibold lg:max-w-[1500px] mt-42 lg:mt-60  pb-10 text-center">
                <h1 className="lg:py-10 font-black text-4xl lg:text-6xl">
                  <span className="font-bold bg-gradient-to-b from-blue-500 to-[#8aa7b6] bg-clip-text text-transparent ">
                    GTIS  
                  </span>   
                    &nbsp;Global Technical Industry Services <br />
                </h1>
                <div className="text-lg lg:text-2xl font-normal lg:font-medium mt-6 lg:mt-0 ">
               <Typewriter
                  words={['GTIS is a company specializing in industrial solutions, including metallic, mechanical, and electrical assembly, automation, maintenance, as well as the supply of spare parts and engineering. Its goal is to support industrial companies in their installation and infrastructure optimization projects']}
                  loop={1}
                  typeSpeed={5}
                  />
                  </div>
              </div>
              <div className="flex gap-4 mt-20 lg:mt-0 ">
                <button className="text-white bg-[#0E6FB7] w-52 lg:w-2xs h-14 lg:h-16 rounded-full text-lg lg:text-2xl font-bold">Contact us</button>
                <button className="h-16 w-16 bg-white rounded-full flex justify-center items-center"><ArrowRight size={35} className="text-[#0E6FB7]"/></button>
              </div>
            </div>
            {/* <div className="absolute right-20 top-[410px] h-[360px] w-[600px] overflow-hidden border-16 border-blue-400 z-100">
              <Image src={img1} alt="" className="object-contain w-full "/>
            </div> */}
              {/* <div className="h-64 w-48 bg-sky-500 absolute z-20 top-[470px] right-[590px]"/> */}
          </div>
          {/* <Wave className="w-2/3 h-auto absolute bottom-0 right-0 transform "/>
          <Wave className="w-1/3 h-auto absolute bottom-0 left-0 transform scale-x-[-1]"/> */}
        </section>


        <div className="h-1 bg-blue-500 w-full"/>
        {/* <div className="bg-gray-100 w-full h-40 flex justify-center items-center text-xl text-center px-20 text-[#112847]">
            <p>GTIS offers complete solutions for optimizing and maintaining flour mills, including the installation of automated systems, preventive and corrective maintenance of production equipment, and the supply of spare parts specific to flour production lines.</p>
        </div> */}
        <PowerfulStats/>
        <IndustrialShowcase/>
 
        {/* <section className="h-[500px] flex items-center">
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
        </section> */}

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-[#0E6FB7] mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive industrial solutions to optimize your operations and infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Metallic Assembly",
                  description:
                    "Expert metallic assembly services for industrial applications with precision engineering.",
                  icon: <Shapes size={45}/>,
                },
                {
                  title: "Mechanical Solutions",
                  description: "Comprehensive mechanical solutions for industrial machinery and equipment.",
                  icon: <HandHelping size={45}/>,
                },
                {
                  title: "Electrical Assembly",
                  description: "Professional electrical assembly and installation for industrial facilities.",
                  icon: <Cable size={45}/>,
                },
                {
                  title: "Automation",
                  description: "Cutting-edge automation solutions to improve efficiency and productivity.",
                  icon: <Workflow size={45}/>,
                },
                {
                  title: "Maintenance",
                  description: "Regular maintenance services to ensure optimal performance of your equipment.",
                  icon: <Wrench size={45}/>,
                },
                {
                  title: "Engineering",
                  description: "Custom engineering solutions for complex industrial challenges.",
                  icon: <PencilRuler size={45}/>,
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg  hover:shadow-lg transition-shadow border-1 text-center flex flex-col items-center">
                  <div className="mb-6 text-[#0E6FB7] border-4 rounded-2xl shadow-xl border-[#0E6FB7] p-2 top-[-40px] relative bg-white">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link href="#" className="mt-4 inline-flex items-center text-[#0E6FB7] hover:text-[#49779b]">
                    Learn more
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <section id="projects" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Explore our portfolio of successful industrial projects across various sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((project) => (
                <div key={project} className="group relative overflow-hidden rounded-lg shadow-md">
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/project-${project}.jpeg`}
                      alt={`Industrial Project ${project}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold">Industrial Project {project}</h3>
                    <p className="text-sm opacity-90">Infrastructure optimization and installation</p>
                    <Link href="#" className="mt-2 inline-flex items-center text-blue-300 hover:text-blue-100">
                      View details
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="ghost" size="lg" className="group-hover:bg-blue-400 bg-blue-500 group-hover:text-blue-600 transition-all duration-300 text-white  border-blue-500">
                View All Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
          </div>
        </section> */}

        {/* News Section */}
        <section id="news" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
              <div className="w-20 h-1 bg-[#0E6FB7] mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest developments and news from GTIS
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "GTIS Completes Major Industrial Project",
                  date: "May 10, 2025",
                  excerpt:
                    "GTIS successfully completed a major industrial installation project for a leading manufacturing company.",
                },
                {
                  title: "New Automation Technology Implemented",
                  date: "April 28, 2025",
                  excerpt:
                    "GTIS introduces cutting-edge automation technology to improve efficiency in industrial operations.",
                },
                {
                  title: "GTIS Expands Services to New Region",
                  date: "April 15, 2025",
                  excerpt:
                    "We're excited to announce our expansion into a new region, bringing our industrial solutions to more clients.",
                },
              ].map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image src={`/news-${index + 1}.jpeg`} alt={news.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text[#0E6FB7] mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link href="#" className="inline-flex items-center text[#0E6FB7] hover:text-[#487699]">
                      Read more
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              
               <Button
              variant="outline"
              className="border-2 border-[#0E6FB7] text-[#0E6FB7] hover:bg-[#0E6FB7] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              View All News
            </Button>
            </div>
          </div>
        </section>
        <div className="w-full h-[720px] relative opacit ">
          <div className="absolute  top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent via-blue-950/20 to-blue-950/100"></div>
          <div className="absolute  top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-white via-white/10 to-white/70"></div>
          
          <Image
              src="/map.svg"
              alt="Industrial Project"
              fill
              className="object-cover object-center"
              />
          </div>


      </div>

      
    </div>
  );
}
