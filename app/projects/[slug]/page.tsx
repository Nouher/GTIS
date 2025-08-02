"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Award,
  Star,
  Clock,
  CheckCircle,
  Eye,
  Share2,
  Download,
  Phone,
  ArrowRight,
  Zap,
  Shield,
  Settings,
  Database,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"

const projects = [
  {
    id: 1,
    slug: "grain-terminal-morocco",
    title: "Grain Terminal Complex - Morocco",
    subtitle: "Port Storage Facility",
    description:
      "Complete installation of a 50,000-ton grain storage terminal at Casablanca Port, including 8 flat-bottom silos, pneumatic unloading systems, and automated handling equipment.",
    fullDescription:
      "This flagship project represents one of our most comprehensive installations in North Africa. The grain terminal complex at Casablanca Port was designed to handle the increasing grain import demands of Morocco while ensuring efficient storage and distribution. The project included the installation of 8 large-capacity flat-bottom silos, each equipped with advanced aeration systems and temperature monitoring. The pneumatic unloading systems allow for rapid ship discharge, reducing port congestion and operational costs. Our team worked closely with port authorities to ensure minimal disruption to ongoing operations while maintaining the highest safety standards.",
    image: "/project/img1.jpeg",
    location: "Casablanca, Morocco",
    client: "Morocco Grain Authority",
    duration: "18 months",
    year: "2023",
    value: "$12.5M",
    category: "port-facilities",
    status: "completed",
    rating: 4.9,
    features: [
      "50,000-ton capacity",
      "8 flat-bottom silos",
      "Pneumatic unloading",
      "Automated systems",
      "Temperature monitoring",
      "Dust control systems",
      "Rail/truck loading",
      "Quality control lab",
    ],
    stats: {
      capacity: "50,000 tons",
      silos: 8,
      timeline: "18 months",
      workers: 45,
      efficiency: "300% increase",
      safety: "Zero incidents",
    },
    gallery: [
      "/project/img1.jpeg",
      "/project/img1.jpeg",
      "/project/img1.jpeg",
      "/project/img1.jpeg",
      "/project/img1.jpeg",
      "/project/img1.jpeg",
    ],
    benefits: [
      {
        title: "Increased Storage Capacity",
        description:
          "The new terminal increased Morocco's grain storage capacity by 50,000 tons, significantly improving food security.",
        icon: <Database className="w-6 h-6" />,
      },
      {
        title: "Enhanced Efficiency",
        description: "Pneumatic unloading systems reduced ship discharge time by 60%, improving port throughput.",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        title: "Quality Preservation",
        description: "Advanced aeration and monitoring systems ensure grain quality throughout storage period.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Automated Operations",
        description: "Fully automated systems reduce labor costs and improve operational reliability.",
        icon: <Settings className="w-6 h-6" />,
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Preparation & Foundation",
        description:
          "Comprehensive site survey, soil analysis, and construction of reinforced concrete foundations for all structures.",
      },
      {
        step: 2,
        title: "Silo Assembly & Erection",
        description:
          "Precision assembly of 8 flat-bottom silos using advanced welding techniques and quality control procedures.",
      },
      {
        step: 3,
        title: "Equipment Installation",
        description: "Installation of pneumatic unloading systems, conveyors, and automated handling equipment.",
      },
      {
        step: 4,
        title: "Systems Integration & Testing",
        description: "Integration of control systems, comprehensive testing, and commissioning of all equipment.",
      },
      {
        step: 5,
        title: "Training & Handover",
        description: "Comprehensive operator training and official handover to client with full documentation.",
      },
    ],
    testimonials: [
      {
        name: "Ahmed Benali",
        position: "Director of Operations",
        company: "Morocco Grain Authority",
        content:
          "GTIS delivered an exceptional project that exceeded our expectations. The terminal has transformed our grain handling capabilities.",
        rating: 5,
        avatar: "/placeholder.svg?height=60&width=60&text=AB",
      },
      {
        name: "Fatima El Mansouri",
        position: "Port Manager",
        company: "Casablanca Port Authority",
        content:
          "The professionalism and expertise of the GTIS team was outstanding. They completed the project on time and within budget.",
        rating: 5,
        avatar: "/placeholder.svg?height=60&width=60&text=FM",
      },
    ],
    technicalSpecs: {
      "Storage Capacity": "50,000 tons",
      "Number of Silos": "8 units",
      "Silo Diameter": "18 meters",
      "Silo Height": "25 meters",
      "Unloading Rate": "500 tons/hour",
      "Power Requirements": "2.5 MW",
      "Foundation Type": "Reinforced concrete",
      "Steel Grade": "S355 structural steel",
    },
  },
  {
    id: 2,
    slug: "feed-mill-tunisia",
    title: "Modern Feed Mill - Tunisia",
    subtitle: "Complete Processing Plant",
    description:
      "Turnkey installation of a 200-ton/day feed mill including grain intake, cleaning, grinding, mixing, pelleting, and packaging systems with full automation.",
    fullDescription:
      "This state-of-the-art feed mill represents the latest in animal feed production technology. Located in Tunis, the facility was designed to meet the growing demand for high-quality animal feed in Tunisia and neighboring countries. The installation includes a complete production line from raw material intake to finished product packaging. Advanced automation systems ensure consistent product quality while minimizing labor requirements. The mill features energy-efficient equipment and dust control systems to meet environmental standards.",
    image: "/placeholder.svg?height=600&width=800&text=Feed+Mill+Tunisia",
    location: "Tunis, Tunisia",
    client: "Tunisia Feed Industries",
    duration: "12 months",
    year: "2023",
    value: "$8.2M",
    category: "feed-mills",
    status: "completed",
    rating: 4.8,
    features: [
      "200 tons/day capacity",
      "Full automation",
      "Quality control",
      "Energy efficient",
      "Dust control",
      "Multi-species production",
      "Pelleting system",
      "Automated packaging",
    ],
    stats: {
      capacity: "200 tons/day",
      silos: 12,
      timeline: "12 months",
      workers: 32,
      efficiency: "95% automation",
      quality: "ISO 22000 certified",
    },
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Feed+Mill+Gallery+1",
      "/placeholder.svg?height=400&width=600&text=Feed+Mill+Gallery+2",
      "/placeholder.svg?height=400&width=600&text=Feed+Mill+Gallery+3",
      "/placeholder.svg?height=400&width=600&text=Feed+Mill+Gallery+4",
      "/placeholder.svg?height=400&width=600&text=Feed+Mill+Gallery+5",
      "/placeholder.svg?height=400&width=600&text=Feed+Mill+Gallery+6",
    ],
    benefits: [
      {
        title: "High Production Capacity",
        description: "200 tons per day production capacity meets regional feed demand efficiently.",
        icon: <Database className="w-6 h-6" />,
      },
      {
        title: "Quality Assurance",
        description: "Advanced quality control systems ensure consistent feed quality and nutritional value.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Energy Efficiency",
        description: "Modern equipment reduces energy consumption by 30% compared to traditional mills.",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        title: "Automated Operations",
        description: "95% automation reduces labor costs and improves production consistency.",
        icon: <Settings className="w-6 h-6" />,
      },
    ],
    process: [
      {
        step: 1,
        title: "Design & Engineering",
        description: "Custom design of the feed mill layout optimized for efficiency and workflow.",
      },
      {
        step: 2,
        title: "Equipment Manufacturing",
        description: "Manufacturing of specialized equipment including mixers, pellet mills, and coolers.",
      },
      {
        step: 3,
        title: "Installation & Assembly",
        description: "Systematic installation of all equipment with precision alignment and calibration.",
      },
      {
        step: 4,
        title: "Automation Integration",
        description: "Integration of control systems and automation for seamless operation.",
      },
      {
        step: 5,
        title: "Commissioning & Training",
        description: "Complete system commissioning and comprehensive operator training program.",
      },
    ],
    testimonials: [
      {
        name: "Mohamed Trabelsi",
        position: "General Manager",
        company: "Tunisia Feed Industries",
        content:
          "The feed mill has revolutionized our production capabilities. GTIS delivered exactly what they promised.",
        rating: 5,
        avatar: "/placeholder.svg?height=60&width=60&text=MT",
      },
    ],
    technicalSpecs: {
      "Production Capacity": "200 tons/day",
      "Raw Material Storage": "2,000 tons",
      "Finished Product Storage": "500 tons",
      "Pellet Mill Power": "250 kW",
      "Mixer Capacity": "2 tons/batch",
      "Automation Level": "95%",
      "Quality Control": "NIR analyzer",
      "Dust Collection": "Baghouse filter",
    },
  },
]

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <Link href="/projects">
            <Button>Back to projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-white mt-30">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to projects
            </Link>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <Badge className="bg-green-600 text-white px-3 py-1">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {project.status === "completed" ? "Project Completed" : "In Progress"}
                  </Badge>
                  <Badge variant="outline" className="border-gray-400 text-gray-300">
                    {project.subtitle}
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{project.title}</h1>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">{project.description}</p>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="font-semibold">{project.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Year</div>
                      <div className="font-semibold">{project.year}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Duration</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Value</div>
                      <div className="font-semibold text-green-400">{project.value}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Team
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Project
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Capacity", value: project.stats.capacity, icon: "📊" },
                  { label: "Duration", value: project.stats.timeline, icon: "⏱️" },
                  { label: "Team", value: `${project.stats.workers} people`, icon: "👥" },
                  { label: "Client Rating", value: `${project.rating}/5`, icon: "⭐" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center text-white"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Full Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Description</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{project.fullDescription}</p>

              {/* Features Grid */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(project.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="font-bold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Benefits</h2>
              <p className="text-lg text-gray-600">Key advantages and improvements delivered by this project</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {project.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white rounded-xl mr-4 shadow-sm">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Implementation Process</h2>
              <p className="text-lg text-gray-600">Step-by-step approach to project execution</p>
            </div>
            <div className="space-y-6">
              {project.process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Gallery</h2>
              <p className="text-lg text-gray-600">Visual documentation of the project implementation</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              {/* Main Image */}
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={project.gallery[selectedImage] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-gray-800" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
              <p className="text-lg text-gray-600">What our clients say about this project</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {project.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <p className="text-gray-800 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Similar <span className="text-gray-800">Projects</span>
                </h2>
                <p className="text-lg text-gray-600">Discover other projects in the same category</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <div
                    key={relatedProject.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative h-48">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="text-gray-600 border-gray-200 mb-3 text-xs">
                        {relatedProject.subtitle}
                      </Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{relatedProject.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-bold text-green-600">{relatedProject.value}</div>
                        <Link href={`/projects/${relatedProject.slug}`}>
                          <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interested in a <span className="text-yellow-400">Similar</span> Project?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Contact our team of experts to discuss your needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl font-semibold bg-transparent"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
