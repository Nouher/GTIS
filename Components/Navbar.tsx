import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'


export default function Navbar() {
    return (
      <div className=" h-26 w-full flex items-center fixed top-[40px] z-50 border-b-1 border-b-gray-300">
        <div className="absolute inset-0 bg-[#fff]/70 backdrop-blur-lg" />
       <div className="flex justify-start items-center w-1/4 h-23 unn">
        <Link href="/">
            <Image src={logo} alt="gtis-logo" width={260} className="ml-15 "/>
        </Link>
       </div>
       <ul className=" text-black flex justify-between items-center text-lg px-16 uppercase">
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='home'>Home</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href='SECTORS-OF-ACTIVITY'>SECTORS OF ACTIVITY</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href=''>ACTIVITY</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href=''>REFERENCES</Link></li>
        <li className="relative px-4 text-sky-950 hover:text-[#0F71B7] transition"><Link href=''>NEWS</Link></li>
       </ul>

       <div className="">

       </div>
       <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
  