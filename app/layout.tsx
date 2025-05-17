import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Topbar from "@/Components/Topbar";
import ContactGroup from "@/Components/ContactGroup";
import Footer from "@/Components/Footer";


const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose the weights you need
  variable: '--font-ubuntu',
  display: 'swap',
})

export const metadata: Metadata = {
  title:{
    default:"GTIS – Global Technical Industry Services",
    template:"%s | GTIS – Global Technical Industry Services",
  },
  description: "Conception et réalisation complètes d'usines agroalimentaires pour répondre à vos besoins industriels. Innovation, Qualité, Efficacité. Contactez nous ...",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        <Topbar/>
        <Navbar/>
        <ContactGroup/>
        {/* <div className="mt-[132px]"> */}
        {children}
        {/* </div> */}
        <Footer/>
      </body>
    </html>
  );
}
