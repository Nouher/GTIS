'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { MobileNav } from "./MobileNav";
import { QuoteDialog } from "./QuoteDialog";
// import { useState } from "react";



export default function Navbar() {
  //   const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  //  const openQuoteModal = () => {
  //   setIsQuoteModalOpen(true)
  // }
    return (
      <div className="h-18 lg:h-26 w-full flex  items-center justify-between fixed lg:top-[40px] z-50 border-b-1 border-b-gray-300 px-4 lg:px-15">
        <div className="absolute inset-0 bg-[#fff]/90 backdrop-blur-lg" />
       <div className="flex justify-start items-center w-32 lg:w-auto h-23  z-50 ">
        <Link href="/" >
            <Image src={logo} alt="gtis-logo" width={240} className=""/>
        </Link>
       </div>
       <ul className=" text-black hidden lg:flex justify-between items-center uppercase text-xl">
        {/* <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/'>Home</Link></li> */}
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/services'>Services</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/projects'>Projects</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/sectors-of-activity'>SECTORS OF ACTIVITY</Link></li>
        {/* <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/activity'>ACTIVITY</Link></li> */}
        {/* <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/references'>REFERENCES</Link></li> */}
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/news'>NEWS</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/contact'>Contact</Link></li>
       </ul>

       {/* <button onClick={openQuoteModal} className=" bg-[#0E70B6] text-white z-50 px-3 py-2 rounded-sm animate-pulse ">
          REQUEST FOR QUOTE
       </button> */}

       <QuoteDialog />
       
       <div className="lg:hidden flex z-30">
          <MobileNav />
      </div>

      </div>
    );
  }
  