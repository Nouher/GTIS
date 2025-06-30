import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Settings, PenToolIcon as Tool, Wrench, Cpu, Package, Factory } from "lucide-react"
import { ReactNode } from "react";

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen mt-28">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-[#1128479d] z-10" />
        <Image
          src="/bg3.jpg"
          alt="Industrial facility"
          width={1920}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-[#3b82f6]">GTIS</span> Services
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            Comprehensive industrial solutions for optimizing your operations and infrastructure
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            GTIS offers complete solutions for industrial companies, providing expertise in various technical domains to
            optimize your operations and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Wrench className="w-10 h-10 text-[#3b82f6]" />}
            title="Metallic Assembly"
            description="Expert metallic assembly services for industrial structures, equipment, and components with precision engineering."
          />
          <ServiceCard
            icon={<Settings className="w-10 h-10 text-[#3b82f6]" />}
            title="Mechanical Assembly"
            description="Specialized mechanical assembly for industrial machinery, production lines, and equipment installations."
          />
          <ServiceCard
            icon={<Cpu className="w-10 h-10 text-[#3b82f6]" />}
            title="Electrical Assembly"
            description="Comprehensive electrical assembly services for industrial control systems, power distribution, and automation."
          />
          <ServiceCard
            icon={<Factory className="w-10 h-10 text-[#3b82f6]" />}
            title="Automation"
            description="Advanced automation solutions to enhance productivity, efficiency, and quality in industrial processes."
          />
          <ServiceCard
            icon={<Tool className="w-10 h-10 text-[#3b82f6]" />}
            title="Maintenance"
            description="Preventive and corrective maintenance services to ensure optimal performance and longevity of industrial equipment."
          />
          <ServiceCard
            icon={<Package className="w-10 h-10 text-[#3b82f6]" />}
            title="Spare Parts Supply"
            description="Supply of high-quality spare parts specific to various industrial applications, including flour production lines."
          />
        </div>
      </section>

      {/* Specialized Services */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Specialized Industry Solutions</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/bg5.jpg"
                  alt="Flour mill equipment"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 md:w-1/2 md:p-8">
                <h3 className="text-2xl font-bold mb-4">Flour Mill Solutions</h3>
                <p className="text-gray-600 mb-6">
                  GTIS offers complete solutions for optimizing and maintaining flour mills, including the installation
                  of automated systems, preventive and corrective maintenance of production equipment, and the supply of
                  spare parts specific to flour production lines.
                </p>
                <ul className="space-y-2 mb-6">
                  <FeatureItem text="Installation of automated systems" />
                  <FeatureItem text="Preventive maintenance programs" />
                  <FeatureItem text="Corrective maintenance services" />
                  <FeatureItem text="Specialized spare parts supply" />
                </ul>
                <Link href="/contact" className="inline-flex items-center text-[#3b82f6] font-semibold hover:underline">
                  Learn more about our flour mill solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Infrastructure Optimization</h3>
              <p className="text-gray-600 mb-6">
                We support industrial companies in optimizing their infrastructure through expert engineering,
                installation, and maintenance services.
              </p>
              <Link href="/contact" className="inline-flex items-center text-[#3b82f6] font-semibold hover:underline">
                Discover our infrastructure solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Engineering Services</h3>
              <p className="text-gray-600 mb-6">
                Our engineering team provides comprehensive support for industrial projects, from design and planning to
                implementation and optimization.
              </p>
              <Link href="/contact" className="inline-flex items-center text-[#3b82f6] font-semibold hover:underline">
                Explore our engineering capabilities
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0E70B8] text-white py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Industrial Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact GTIS today to discuss how our comprehensive services can support your industrial projects and
            infrastructure optimization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#3b82f6] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ icon, title, description }: { icon: ReactNode; title: string; description: string; }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FeatureItem({ text }:{text:string}) {
  return (
    <li className="flex items-start">
      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  )
}
