import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";



export default function Navbar() {
    return (
      <div className="h-26 w-full flex items-center justify-between fixed top-[40px] z-50 border-b-1 border-b-gray-300 px-15">
        <div className="absolute inset-0 bg-[#fff]/90 backdrop-blur-lg" />
       <div className="flex justify-start items-center w-auto h-23 z-50 ">
        <Link href="/">
            <Image src={logo} alt="gtis-logo" width={260} className=" "/>
        </Link>
       </div>
       <ul className=" text-black flex justify-between items-center uppercase text-xl">
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/'>Home</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/services'>Services</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/projects'>Projects</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/sectors-of-activity'>SECTORS OF ACTIVITY</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/activity'>ACTIVITY</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/references'>REFERENCES</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/news'>NEWS</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='/contact'>Contact</Link></li>
       </ul>

       <Link href='quet' className=" bg-[#0E70B6] text-white z-50 px-3 py-2 rounded-sm animate-pulse ">
          REQUEST FOR QUOTE
       </Link>

      </div>
    );
  }
  