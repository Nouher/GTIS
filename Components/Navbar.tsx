import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";


export default function Navbar() {
    return (
      <div className="bg-[#575759] h-20 w-full flex fixed top-0 z-50">
       <div className="bg-white flex justify-start items-center w-1/4 h-23 unn">
        <Link href="/">
            <Image src={logo} alt="gtis-logo" width={240} className="ml-15"/>
        </Link>
       </div>
       <ul className=" text-white flex justify-between items-center text-xl px-16 uppercase">
        <li className="relative overflow-hidden hover:bg-gray-600 h-full flex items-center px-4 after:content-[''] after:w-[96px] after:h-1 after:bg-sky-500 after:bottom-0 after:left-0 after:absolute"><Link href='home'>Home</Link></li>
        <li className="hover:bg-gray-600 h-full flex items-center px-4 "><Link href='SECTORS-OF-ACTIVITY'>SECTORS OF ACTIVITY</Link></li>
        <li className="hover:bg-gray-600 h-full flex items-center px-4 "><Link href=''>ACTIVITY</Link></li>
        <li className="hover:bg-gray-600 h-full flex items-center px-4 "><Link href=''>REFERENCES</Link></li>
        <li className="hover:bg-gray-600 h-full flex items-center px-4 "><Link href=''>NEWS</Link></li>
       </ul>
      </div>
    );
  }
  