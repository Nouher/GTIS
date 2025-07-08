"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Star,
  CheckCircle,
  Wrench,
  Cog,
  Zap,
  Database,
  Settings,
  Shield,
  Phone,
  Mail,
  Award,
  Users,
  Calendar,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      id: 1,
      slug: "metallic-assembly",
      title: "Metallic Assembly",
      subtitle: "Precision Industrial Structures",
      description:
        "Comprehensive assembly and installation services for industrial metallic structures with precision welding and quality assurance.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Wrench className="h-8 w-8" />,
      category: "assembly",
      rating: 4.9,
      projects: 500,
      features: ["Precision TIG/MIG welding", "ISO 9001 quality control", "On-site assembly", "24/7 support"],
      price: "From $50/m²",
    },
    {
      id: 2,
      slug: "mechanical-installation",
      title: "Mechanical Installation",
      subtitle: "Industrial Equipment Solutions",
      description:
        "Professional mechanical installation services for complex industrial equipment with precision alignment and optimization.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Cog className="h-8 w-8" />,
      category: "installation",
      rating: 4.8,
      projects: 300,
      features: ["Precision alignment", "Performance testing", "Operator training", "Maintenance programs"],
      price: "From $25/hour",
    },
    {
      id: 3,
      slug: "electrical-systems",
      title: "Electrical Systems",
      subtitle: "Smart Industrial Solutions",
      description:
        "Complete electrical systems including automation, control systems, and smart integration for industrial applications.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Zap className="h-8 w-8" />,
      category: "electrical",
      rating: 4.9,
      projects: 1000,
      features: ["SCADA systems", "PLC programming", "Motor control", "Energy monitoring"],
      price: "From $30/point",
    },
    {
      id: 4,
      slug: "storage-solutions",
      title: "Storage Solutions",
      subtitle: "Industrial Storage Systems",
      description:
        "Advanced storage solutions including silos, warehouses, and material handling systems for various industries.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Database className="h-8 w-8" />,
      category: "storage",
      rating: 4.7,
      projects: 200,
      features: ["Custom design", "Climate control", "Inventory management", "Safety systems"],
      price: "Custom Quote",
    },
    {
      id: 5,
      slug: "industrial-automation",
      title: "Industrial Automation",
      subtitle: "Smart Manufacturing Solutions",
      description:
        "Complete automation solutions including robotics, process control, and intelligent manufacturing systems.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Settings className="h-8 w-8" />,
      category: "automation",
      rating: 4.8,
      projects: 150,
      features: ["Robotics integration", "Process optimization", "Quality control", "Remote monitoring"],
      price: "Custom Quote",
    },
    {
      id: 6,
      slug: "industrial-maintenance",
      title: "Industrial Maintenance",
      subtitle: "Preventive & Corrective Services",
      description:
        "Comprehensive maintenance services ensuring optimal performance and longevity of industrial equipment.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Shield className="h-8 w-8" />,
      category: "maintenance",
      rating: 4.9,
      projects: 800,
      features: ["Preventive maintenance", "Emergency repairs", "Spare parts", "Performance monitoring"],
      price: "From $40/hour",
    },
  ]

  const categories = [
    { id: "all", name: "All Services", count: services.length },
    { id: "assembly", name: "Assembly", count: services.filter((s) => s.category === "assembly").length },
    { id: "installation", name: "Installation", count: services.filter((s) => s.category === "installation").length },
    { id: "electrical", name: "Electrical", count: services.filter((s) => s.category === "electrical").length },
    { id: "storage", name: "Storage", count: services.filter((s) => s.category === "storage").length },
    { id: "automation", name: "Automation", count: services.filter((s) => s.category === "automation").length },
    { id: "maintenance", name: "Maintenance", count: services.filter((s) => s.category === "maintenance").length },
  ]

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  const stats = {
    totalProjects: services.reduce((sum, service) => sum + service.projects, 0),
    averageRating: (services.reduce((sum, service) => sum + service.rating, 0) / services.length).toFixed(1),
    totalServices: services.length,
    countries: "10+",
  }

  return (
    <div className="min-h-screen bg-white mt-32">
      {/* Hero Section with Image Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg1.jpg"
            alt="Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-cyan-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
                <Settings className="h-4 w-4 mr-2" />
                Industrial Services
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Complete Industrial Solutions</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From metallic assembly to electrical systems, we provide comprehensive industrial services across Africa
                and the Middle East with proven expertise and quality assurance.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-white/70 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stats.averageRating}</div>
                  <div className="text-white/70 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stats.totalServices}</div>
                  <div className="text-white/70 text-sm">Service Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">10</div>
                  <div className="text-white/70 text-sm">Countries</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Quote
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl transition-all duration-300 bg-transparent"
                  onClick={() => document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-lg text-gray-600">Filter services by category to find exactly what you need</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-cyan-800 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-600">{service.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-2">{service.subtitle}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {service.projects}+ projects
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Premium service
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button className="w-full bg-cyan-800 hover:bg-cyan-900 text-white rounded-xl">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="px-4 rounded-xl border-gray-300 hover:bg-gray-50 bg-transparent"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose GTIS Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise, quality assurance, and customer focus to deliver exceptional industrial
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600">15+ years of experience in industrial services across multiple sectors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">ISO certified processes ensuring the highest quality standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with specialized industrial expertise</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/bg1.jpg" alt="Contact Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-cyan-950/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Industrial Project?</h2>
            <p className="text-xl text-white/90 mb-12">
              Contact our experts to discuss your requirements and get a customized solution for your industrial needs
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </Link>

              <Link href="mailto:contact@gtis.com">
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Experts
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>24h Response</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
