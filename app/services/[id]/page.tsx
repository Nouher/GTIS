"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Calendar,
  Award,
  Phone,
  Mail,
  Zap,
  Shield,
  Clock,
  Target,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

export default function ElectricalSystemsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const service = {
    id: 3,
    slug: "electrical-systems",
    title: "Electrical Systems",
    subtitle: "Smart Industrial Solutions",
    description:
      "GTIS designs and installs complete electrical systems including chain conveyors, bucket elevators, screw conveyors, and automated control systems. Our electrical solutions integrate seamlessly with mechanical systems to provide comprehensive industrial automation and control capabilities.",
    heroImage: "/placeholder.svg?height=800&width=1200",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Industrial wiring and power distribution",
      "Motor control centers and VFD installation",
      "SCADA systems and HMI interfaces",
      "PLC programming and automation",
      "Electrical safety systems and protection",
      "Energy monitoring and optimization",
      "Emergency shutdown systems",
      "Preventive maintenance programs",
    ],
    benefits: [
      {
        title: "Electrical Expertise",
        description: "Certified electricians and engineers with extensive industrial electrical experience",
        icon: <Zap className="h-8 w-8" />,
      },
      {
        title: "Safety Compliance",
        description: "Full compliance with electrical codes, safety standards, and regulatory requirements",
        icon: <Shield className="h-8 w-8" />,
      },
      {
        title: "Rapid Installation",
        description: "Efficient electrical installation minimizing production downtime and disruption",
        icon: <Clock className="h-8 w-8" />,
      },
      {
        title: "Smart Integration",
        description: "Advanced automation and control systems for optimal operational efficiency",
        icon: <Target className="h-8 w-8" />,
      },
    ],
    process: [
      {
        step: "01",
        title: "Electrical Design",
        description: "Comprehensive electrical system design, load calculations, and component specification",
      },
      {
        step: "02",
        title: "Panel Fabrication",
        description: "Custom control panel fabrication and testing in our certified electrical workshop",
      },
      {
        step: "03",
        title: "Infrastructure Setup",
        description: "Installation of electrical infrastructure, conduits, and power distribution systems",
      },
      {
        step: "04",
        title: "System Installation",
        description: "Professional installation of electrical equipment, motors, and control systems",
      },
      {
        step: "05",
        title: "Programming & Testing",
        description: "PLC programming, system testing, and performance validation",
      },
      {
        step: "06",
        title: "Commissioning",
        description: "System commissioning, operator training, and documentation handover",
      },
    ],
    stats: {
      projects: "1000+",
      experience: "15+",
      satisfaction: "99%",
      uptime: "99.8%",
    },
    testimonials: [
      {
        name: "Omar Al-Mansouri",
        company: "Yemen Industrial Co",
        position: "Electrical Manager",
        text: "GTIS delivered an exceptional electrical system for our grain storage facility. The SCADA integration and automated controls have significantly improved our operational efficiency and monitoring capabilities.",
        rating: 5,
        project: "Grain Storage Electrical Systems - Yemen",
      },
      {
        name: "Fatima Diallo",
        company: "West Africa Mills",
        position: "Operations Manager",
        text: "Outstanding electrical installation with advanced automation features. The system reliability and energy efficiency have exceeded our expectations. Professional team with excellent technical knowledge.",
        rating: 5,
        project: "Mill Automation Systems - Burkina Faso",
      },
    ],
    relatedServices: [
      { title: "Industrial Automation", slug: "industrial-automation" },
      { title: "Mechanical Installation", slug: "mechanical-installation" },
      { title: "Storage Solutions", slug: "storage-solutions" },
    ],
  }

  return (
    <div className="min-h-screen bg-white mt-32">
      {/* Hero Section with Image Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.heroImage || "/placeholder.svg"}
            alt="Electrical Systems Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
                  <Zap className="h-4 w-4 mr-2" />
                  Smart Solutions
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{service.title}</h1>
                <p className="text-xl text-white/90 mb-6">{service.subtitle}</p>
                <p className="text-lg text-white/80 leading-relaxed mb-8">{service.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{service.stats.projects}</div>
                    <div className="text-white/70 text-sm">Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{service.stats.experience}</div>
                    <div className="text-white/70 text-sm">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{service.stats.satisfaction}</div>
                    <div className="text-white/70 text-sm">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{service.stats.uptime}</div>
                    <div className="text-white/70 text-sm">Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Electrical Capabilities</h2>
              <p className="text-xl text-gray-600">
                Advanced electrical systems and automation solutions for industrial applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="h-6 w-6 text-gray-700 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic electrical system implementation ensuring safety, efficiency, and reliability
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-50 rounded-3xl p-8 h-full border border-gray-200/50 hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-black text-gray-800 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Electrical Systems?</h2>
            <p className="text-xl text-gray-600">The advantages that power your industrial success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow h-full">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Electrical System Success Stories</h2>
            <p className="text-xl text-gray-600">Client experiences with our electrical solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-200/50">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.position}</div>
                      <div className="text-gray-500 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Related Services</h2>
            <p className="text-xl text-gray-600">Explore our integrated industrial solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {service.relatedServices.map((relatedService, index) => (
              <Link key={index} href={`/services/${relatedService.slug}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedService.title}</h3>
                  <div className="flex items-center text-gray-700 font-medium">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Contact Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Power Your Operations with Smart Electrical Systems
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Contact our electrical specialists for advanced automation and control solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
              </Link>

              <Link href="mailto:contact@gtis.com">
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-2xl transition-all duration-300 bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Engineers
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
