"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, CheckCircle, Wrench, Cog, Zap, Database, Settings, Shield, Phone, Mail, Award, Users, Calendar } from 'lucide-react'
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
      slug: "flat-bottom",
      title: "Flat-Bottom Grain Silos",
      subtitle: "Assembly & Installation",
      description:
        "GTIS provides full assembly and installation services for flat-bottom grain silos, ideal for high-capacity storage in industrial grain facilities. Our expert teams ensure fast, secure installation aligned with international standards, including integration of aeration, temperature monitoring, and unloading systems.",
      image: "/projects/img1.jpeg",
      icon: <Wrench className="h-8 w-8" />,
      category: "assembly",
      rating: 4.9,
      projects: 50,
      features: ["Precision TIG/MIG welding", "ISO 9001 quality control", "On-site assembly", "24/7 support"],
      price: "From $50/m²",
    },
    {
      id: 2,
      slug: "hopper-bottom",
      title: "Hopper-Bottom Silos",
      subtitle: "Assembly & Installation",
      description:
        "We offer hopper-bottom silo installation (silos on legs with conical bottoms), designed for gravity discharge, bagging systems, or fast, easy emptying. These silos are ideal for short-term storage or continuous feed operations in both industrial and agricultural settings.",
      image: "/projects/img2.jpg",
      icon: <Cog className="h-8 w-8" />,
      category: "installation",
      rating: 4.8,
      projects: 50,
      features: ["Precision alignment", "Performance testing", "Operator training", "Maintenance programs"],
      price: "From $25/hour",
    },
    {
      id: 3,
      slug: "grain-handling-systems",
      title: "Grain Handling Systems",
      subtitle: "Smart Solutions",
      description:
        "GTIS designs and installs complete grain handling systems: chain conveyors, bucket elevators, screw augers, and more. Our solutions ensure smooth and efficient product flow between reception, storage, and shipment points, with full customization to your site layout and needs.",
      image: "/projects/img3.jpeg",
      icon: <Zap className="h-8 w-8" />,
      category: "electrical",
      rating: 4.9,
      projects: 50,
      features: ["SCADA systems", "PLC programming", "Motor control", "Energy monitoring"],
      price: "From $30/point",
    },
    {
      id: 4,
      slug: "complete-grain-storage-solutions",
      title: "Complete Grain Storage Solutions",
      subtitle: "Reliability First",
      description:
        "We deliver turnkey grain storage solutions, integrating silos, intake pits, pre-cleaners, handling equipment, control systems, and outloading structures. Our solutions are tailored to meet local climate, capacity, and logistical requirements, whether for farming cooperatives or industrial clients.",
      image: "/projects/img4.jpeg",
      icon: <Database className="h-8 w-8" />,
      category: "storage",
      rating: 4.7,
      projects: 50,
      features: ["Custom design", "Climate control", "Inventory management", "Safety systems"],
      price: "Custom Quote",
    },
    {
      id: 5,
      slug: "square-silos",
      title: "Square Silos",
      subtitle: "Modular Storage Systems",
      description:
        "GTIS also installs square silos, an excellent choice for interior spaces or where floor area is limited. Their modular design allows easy adaptation to existing production lines or feed systems. These silos are often used in feed mills",
      image: "/projects/img5.jpeg",
      icon: <Settings className="h-8 w-8" />,
      category: "automation",
      rating: 4.8,
      projects: 50,
      features: ["Robotics integration", "Process optimization", "Quality control", "Remote monitoring"],
      price: "Custom Quote",
    },
    {
      id: 6,
      slug: "farm-silos-livestock-housing-units",
      title: "Farm Silos & Livestock Housing Units",
      subtitle: "Zero Compromise",
      description:
        "We specialize in farm silos for feed storage and distribution, as well as the full installation of livestock farms (poultry, cattle, sheep). Our systems are designed to optimize hygiene, feed flow, energy efficiency, and overall farm productivity.",
      image: "/projects/img6.jpg",
      icon: <Shield className="h-8 w-8" />,
      category: "maintenance",
      rating: 4.9,
      projects: 50,
      features: ["Preventive maintenance", "Emergency repairs", "Spare parts", "Performance monitoring"],
      price: "From $40/hour",
    },
    {
      id: 7,
      slug: "milling-plants",
      title: "Milling Plants",
      subtitle: "Agro-Industrial Machinery Installation",
      description:
        "GTIS handles the complete assembly and installation of equipment for flour mills, feed mills, and agro-processing units. We offer turnkey solutions covering grain intake, cleaning, grinding, blending, sifting, storage, and packaging. Our experienced team ensures optimal layout planning, mechanical and electrical installation, and full commissioning of your production lines.",
      image: "/projects/img7.jpeg",
      icon: <Settings className="h-8 w-8" />,
      category: "automation",
      rating: 4.9,
      projects: 50,
      features: ["Layout planning", "Mechanical installation", "Electrical systems", "Full commissioning"],
      price: "Custom Quote",
    },
    {
      id: 8,
      slug: "advanced-pneumatic-unloaders-for-ports",
      title: "Advanced Pneumatic Unloaders for Ports",
      subtitle: "Tailored Solutions",
      description:
        "GTIS installs advanced pneumatic unloading systems, enabling efficient, dust-controlled grain transfer from ships to storage, ensuring minimal losses and enhanced terminal throughput.",
      image: "/projects/img8.jpeg",
      icon: <Zap className="h-8 w-8" />,
      category: "electrical",
      rating: 4.9,
      projects: 50,
      features: ["Dust control systems", "High throughput", "Minimal losses", "Port integration"],
      price: "Custom Quote",
    },
    {
      id: 9,
      slug: "assembly-and-installation-of-cimat-silos",
      title: "Assembly and Installation of CIMAT Silos",
      subtitle: "Cement Industry Solutions",
      description:
        "GTIS specializes in the assembly and installation of silos for the cement industry, including high-capacity CIMAT silos. Our solutions are designed to ensure efficient storage and handling of cement and other bulk materials with dust control, aeration systems, and robust structural integrity.",
      image: "/projects/img9.jpeg",
      icon: <Database className="h-8 w-8" />,
      category: "storage",
      rating: 4.9,
      projects: 50,
      features: ["High-capacity storage", "Dust control", "Aeration systems", "Structural integrity"],
      price: "Custom Quote",
    },
    {
      id: 10,
      slug: "steel-structures",
      title: "Steel Structures",
      subtitle: "Fabrication & Installation",
      description:
        "GTIS designs, fabricates, and installs custom steel structures tailored to the specific needs of agro-industrial and processing facilities. Our services cover catwalks, support towers, service platforms, and industrial buildings built with precision and engineered for strength.",
      image: "/projects/img10.jpeg",
      icon: <Wrench className="h-8 w-8" />,
      category: "assembly",
      rating: 4.9,
      projects: 50,
      features: ["Custom design", "Precision fabrication", "Safety compliance", "Durability guaranteed"],
      price: "Custom Quote",
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
    countries: "12+",
  }

  return (
    <div className="min-h-screen bg-white mt-36">
      {/* Hero Section - Flat Design */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
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

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Complete{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Industrial Solutions
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From grain silos to steel structures, we provide comprehensive industrial services across Africa and the
                Middle East with proven expertise and quality assurance.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stats.totalProjects}+</div>
                  <div className="text-white/70 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stats.averageRating}</div>
                  <div className="text-white/70 text-sm">Average Rating</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stats.totalServices}</div>
                  <div className="text-white/70 text-sm">Service Areas</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1">{stats.countries}</div>
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

      {/* Featured Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Featured Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Most Popular Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our flagship services that have helped hundreds of clients achieve their industrial goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured Service */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={services[0].image || "/placeholder.svg"}
                      alt={services[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mr-4">
                        {services[0].icon}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-medium">{services[0].rating}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{services[0].title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{services[0].description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white">
                        <span className="text-2xl font-bold">{services[0].price}</span>
                      </div>
                      <div className="text-gray-300 text-sm">{services[0].projects}+ projects completed</div>
                    </div>
                    <Link href={`/services/${services[0].slug}`}>
                      <Button className="bg-white text-gray-900 hover:bg-gray-100 w-full rounded-xl">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured Services */}
            {services.slice(1, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                      {service.icon}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-600">{service.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-500 text-sm">{service.projects}+ projects</span>
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-xl">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
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
                    ? "bg-gray-800 text-white shadow-lg"
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
                  <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{service.description}</p>

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
                      <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-xl">
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
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600">15+ years of experience in industrial services across multiple sectors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">ISO certified processes ensuring the highest quality standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with specialized industrial expertise</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
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
