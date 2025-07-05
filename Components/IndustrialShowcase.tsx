"use client"

// import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Zap, Settings, Wrench, Cog, Factory, Shield, Target, Layers } from "lucide-react"

export default function IndustrialShowcase() {
 
  // const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const industrialServices = [
    {
      id: 1,
      title: "Mechanical Assembly",
      subtitle: "Precision Engineering",
      description: "Advanced mechanical systems and precision assembly for industrial applications",
      image: "/projects/img1.jpeg",
      icon: <Settings className="h-8 w-8" />,
      color: "from-blue-600/80 to-blue-800/0",
      stats: "500+ Projects",
    },
    {
      id: 2,
      title: "Electrical Systems",
      subtitle: "Power & Control",
      description: "Complete electrical installation and control system integration",
      image: "/projects/img2.jpeg",
      icon: <Zap className="h-8 w-8" />,
      color: "from-amber-500/80 to-orange-600/0",
      stats: "1000+ Installations",
    },
    {
      id: 3,
      title: "Industrial Automation",
      subtitle: "Smart Solutions",
      description: "Cutting-edge automation systems for maximum efficiency",
      image: "/projects/img3.jpeg",
      icon: <Cog className="h-8 w-8" />,
      color: "from-blue-600/80 to-blue-800/0",
      stats: "300+ Automated Lines",
    },
    {
      id: 4,
      title: "Maintenance Services",
      subtitle: "Reliability First",
      description: "Preventive and corrective maintenance for optimal performance",
      image: "/projects/img4.jpeg",
      icon: <Wrench className="h-8 w-8" />,
      color: "from-amber-500/80 to-orange-600/0",
      stats: "24/7 Support",
    },
    {
      id: 5,
      title: "Manufacturing Solutions",
      subtitle: "Production Excellence",
      description: "Complete manufacturing solutions from concept to delivery",
      image: "/projects/img1.jpeg",
      icon: <Factory className="h-8 w-8" />,
      color: "from-blue-600/80 to-blue-800/0",
      stats: "200+ Facilities",
    },
    {
      id: 6,
      title: "Quality Assurance",
      subtitle: "Zero Compromise",
      description: "Rigorous quality control and testing procedures",
      image: "/projects/img1.jpeg",
      icon: <Shield className="h-8 w-8" />,
      color: "from-amber-500/80 to-orange-600/0",
      stats: "99.9% Accuracy",
    },
    {
      id: 7,
      title: "Project Management",
      subtitle: "On-Time Delivery",
      description: "End-to-end project management with guaranteed results",
      image: "/projects/img1.jpeg",
      icon: <Target className="h-8 w-8" />,
      color: "from-blue-600/80 to-blue-800/0",
      stats: "95% On-Time",
    },
    {
      id: 8,
      title: "Custom Engineering",
      subtitle: "Tailored Solutions",
      description: "Bespoke engineering solutions for unique industrial challenges",
      image: "/projects/img1.jpeg",
      icon: <Layers className="h-8 w-8" />,
      color: "from-amber-500/80 to-orange-600/0",
      stats: "Unlimited Possibilities",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            <Factory className="h-4 w-4 mr-2" />
            Industrial Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Our Industrial Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of industrial services designed to transform your operations with
            cutting-edge technology and unmatched expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industrialServices.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              // onMouseEnter={() => setHoveredItem(service.id)}
              // onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300 `}
                ></div>

                {/* Icon */}
                <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                  {service.icon}
                </div>

                {/* Plus Icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                  <Plus className="h-6 w-6" />
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {service.stats}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-gray-500 font-medium">{service.subtitle}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Action Button */}
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-2000"></div>
    </section>
  )
}
