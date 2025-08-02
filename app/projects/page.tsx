"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Calendar, Users, Award, Star, Filter, Search, Eye, Clock, CheckCircle, Building2, Globe, Banknote } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"
import { Input } from "@/Components/ui/input"


const projects = [
  {
    id: 1,
    slug: "grain-terminal-morocco",
    title: "Grain Terminal Complex - Morocco",
    subtitle: "Port Storage Facility",
    description:
      "Complete installation of a 50,000-ton grain storage terminal at Casablanca Port, including 8 flat-bottom silos, pneumatic unloading systems, and automated handling equipment.",
    image: "/projects/img1.jpeg",
    location: "Casablanca, Morocco",
    client: "Morocco Grain Authority",
    duration: "18 months",
    year: "2023",
    value: "$12.5M",
    category: "port-facilities",
    status: "completed",
    rating: 4.9,
    features: ["50,000-ton capacity", "8 flat-bottom silos", "Pneumatic unloading", "Automated systems"],
    stats: {
      capacity: "50,000 tons",
      silos: 8,
      timeline: "18 months",
      workers: 45,
    },
  },
  {
    id: 2,
    slug: "feed-mill-tunisia",
    title: "Modern Feed Mill - Tunisia",
    subtitle: "Complete Processing Plant",
    description:
      "Turnkey installation of a 200-ton/day feed mill including grain intake, cleaning, grinding, mixing, pelleting, and packaging systems with full automation.",
    image: "/projects/img2.jpeg",
    location: "Tunis, Tunisia",
    client: "Tunisia Feed Industries",
    duration: "12 months",
    year: "2023",
    value: "$8.2M",
    category: "feed-mills",
    status: "completed",
    rating: 4.8,
    features: ["200 tons/day capacity", "Full automation", "Quality control", "Energy efficient"],
    stats: {
      capacity: "200 tons/day",
      silos: 12,
      timeline: "12 months",
      workers: 32,
    },
  },
  {
    id: 3,
    slug: "flour-mill-algeria",
    title: "Industrial Flour Mill - Algeria",
    subtitle: "Wheat Processing Facility",
    description:
      "Installation of a 300-ton/day wheat flour mill with advanced cleaning systems, roller mills, sifters, and automated packaging lines.",
    image: "/projects/img3.jpeg",
    location: "Algiers, Algeria",
    client: "Algerian Milling Corp",
    duration: "15 months",
    year: "2022",
    value: "$15.8M",
    category: "flour-mills",
    status: "completed",
    rating: 4.9,
    features: ["300 tons/day capacity", "Advanced cleaning", "Roller mills", "Automated packaging"],
    stats: {
      capacity: "300 tons/day",
      silos: 16,
      timeline: "15 months",
      workers: 52,
    },
  },
  {
    id: 4,
    slug: "livestock-farm-egypt",
    title: "Modern Livestock Farm - Egypt",
    subtitle: "Poultry & Cattle Facility",
    description:
      "Complete installation of a modern livestock farm with automated feeding systems, climate control, and waste management for 10,000 poultry and 500 cattle.",
    image: "/projects/img4.jpeg",
    location: "Cairo, Egypt",
    client: "Egyptian Livestock Ltd",
    duration: "10 months",
    year: "2022",
    value: "$6.5M",
    category: "livestock",
    status: "completed",
    rating: 4.7,
    features: ["10,000 poultry capacity", "500 cattle capacity", "Climate control", "Automated feeding"],
    stats: {
      capacity: "10,500 animals",
      silos: 8,
      timeline: "10 months",
      workers: 28,
    },
  },
  {
    id: 5,
    slug: "cement-silos-libya",
    title: "Cement Storage Silos - Libya",
    subtitle: "Industrial Storage Complex",
    description:
      "Installation of 6 high-capacity cement silos with dust collection systems, pneumatic conveying, and automated loading systems for a major cement plant.",
    image: "/projects/img5.jpeg",
    location: "Tripoli, Libya",
    client: "Libya Cement Industries",
    duration: "14 months",
    year: "2021",
    value: "$9.8M",
    category: "cement-storage",
    status: "completed",
    rating: 4.8,
    features: ["6 cement silos", "Dust collection", "Pneumatic conveying", "Automated loading"],
    stats: {
      capacity: "30,000 tons",
      silos: 6,
      timeline: "14 months",
      workers: 38,
    },
  },
  {
    id: 6,
    slug: "grain-elevator-senegal",
    title: "Grain Elevator Complex - Senegal",
    subtitle: "Agricultural Storage Hub",
    description:
      "Construction of a modern grain elevator with 25,000-ton capacity, including intake systems, cleaning equipment, and rail/truck loading facilities.",
    image: "/projects/img6.jpeg",
    location: "Dakar, Senegal",
    client: "Senegal Agricultural Board",
    duration: "16 months",
    year: "2021",
    value: "$11.2M",
    category: "grain-elevators",
    status: "completed",
    rating: 4.9,
    features: ["25,000-ton capacity", "Rail loading", "Truck loading", "Grain cleaning"],
    stats: {
      capacity: "25,000 tons",
      silos: 10,
      timeline: "16 months",
      workers: 42,
    },
  },
  {
    id: 7,
    slug: "steel-structures-ghana",
    title: "Industrial Steel Structures - Ghana",
    subtitle: "Manufacturing Complex",
    description:
      "Fabrication and installation of custom steel structures including warehouses, processing buildings, and support structures for an agro-industrial complex.",
    image: "/projects/img6.jpeg",
    location: "Accra, Ghana",
    client: "Ghana Agro Industries",
    duration: "8 months",
    year: "2020",
    value: "$4.8M",
    category: "steel-structures",
    status: "completed",
    rating: 4.6,
    features: ["Custom steel work", "Warehouses", "Processing buildings", "Support structures"],
    stats: {
      capacity: "15,000 m²",
      silos: 0,
      timeline: "8 months",
      workers: 35,
    },
  },
  {
    id: 8,
    slug: "port-unloader-ivory-coast",
    title: "Port Unloader System - Ivory Coast",
    subtitle: "Maritime Terminal Equipment",
    description:
      "Installation of advanced pneumatic unloading systems for bulk grain handling at Abidjan Port, increasing terminal efficiency by 300%.",
    image: "/projects/img8.jpeg",
    location: "Abidjan, Ivory Coast",
    client: "Port Authority of Abidjan",
    duration: "6 months",
    year: "2020",
    value: "$7.5M",
    category: "port-equipment",
    status: "completed",
    rating: 4.8,
    features: ["Pneumatic unloading", "Bulk handling", "300% efficiency increase", "Dust control"],
    stats: {
      capacity: "500 tons/hour",
      silos: 0,
      timeline: "6 months",
      workers: 25,
    },
  },
]

const categories = [
  { id: "all", name: "All Projects", count: projects.length },
  {
    id: "port-facilities",
    name: "Port Facilities",
    count: projects.filter((p) => p.category === "port-facilities").length,
  },
  { id: "feed-mills", name: "Feed Mills", count: projects.filter((p) => p.category === "feed-mills").length },
  { id: "flour-mills", name: "Flour Mills", count: projects.filter((p) => p.category === "flour-mills").length },
  { id: "livestock", name: "Livestock", count: projects.filter((p) => p.category === "livestock").length },
  {
    id: "cement-storage",
    name: "Cement Storage",
    count: projects.filter((p) => p.category === "cement-storage").length,
  },
  {
    id: "grain-elevators",
    name: "Grain Elevators",
    count: projects.filter((p) => p.category === "grain-elevators").length,
  },
  {
    id: "steel-structures",
    name: "Steel Structures",
    count: projects.filter((p) => p.category === "steel-structures").length,
  },
  {
    id: "port-equipment",
    name: "Port Equipment",
    count: projects.filter((p) => p.category === "port-equipment").length,
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredProject = projects[0]
  const secondaryFeatured = projects.slice(1, 3)

  return (
    <div className="min-h-screen bg-white mt-32">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg-projects.jpeg"
            alt="Projects Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-700/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium mb-8">
              <Award className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Completed Projects Portfolio</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="block mb-2">Our</span>
              <span className="block bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Achievements
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover our industrial projects completed across Africa and the Middle East, showcasing our expertise in
              assembly and installation of industrial equipment.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                  { number: "150+", label: "Projets Réalisés", icon: <Building2 className="h-10 w-10 text-white" />, },
                { number: "15+", label: "Pays", icon: <Globe className="h-10 w-10 text-white" /> },
                { number: "$200M+", label: "Valeur Totale", icon: <Banknote className="h-10 w-10 text-white" /> },
                { number: "98%", label: "Satisfaction Client", icon: <Star className="h-10 w-10 text-white" /> },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-2xl mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Exceptional <span className="text-gray-800">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most remarkable projects that showcase our technical expertise and quality
              commitment.
            </p>
          </div>

          {/* Main Featured Project */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full">
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-yellow-500 text-white px-3 py-1 text-sm font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Featured Project
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{featuredProject.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{featuredProject.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge variant="outline" className="text-gray-600 border-gray-200 mb-3">
                      {featuredProject.subtitle}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{featuredProject.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredProject.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-gray-800">{featuredProject.stats.capacity}</div>
                      <div className="text-sm text-gray-600">Capacity</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-gray-800">{featuredProject.value}</div>
                      <div className="text-sm text-gray-600">Value</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/projects/${featuredProject.slug}`} className="flex-1">
                      <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl">
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl bg-transparent"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Contact Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryFeatured.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gray-800 text-white px-3 py-1 text-sm">Featured Project</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="text-xs">{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span className="text-xs">{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="text-gray-600 border-gray-200 mb-3 text-xs">
                    {project.subtitle}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-800">{project.value}</div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore All Our <span className="text-gray-800">Projects</span>
              </h2>
              <p className="text-lg text-gray-600">Filter by category or search for a specific project</p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for a project, location, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-gray-500 focus:ring-0"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gray-800 text-white shadow-lg"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name}
                  <Badge className="ml-2 bg-gray-100 text-gray-600 text-xs">{category.count}</Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white px-3 py-1 text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {project.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="text-xs font-medium">{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1 text-yellow-400" />
                        <span className="text-xs font-medium">{project.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-gray-600 border-gray-200 text-xs">
                      {project.subtitle}
                    </Badge>
                    <div className="text-sm text-gray-500">{project.year}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-bold text-gray-800">{project.stats.capacity}</div>
                      <div className="text-xs text-gray-600">Capacity</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-bold text-gray-800">{project.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-green-600">{project.value}</div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white group-hover:bg-gray-900">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try modifying your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-medium mb-4">
                Excellence Guaranteed
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Our <span className="text-gray-800">Projects</span> Stand Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every project we complete reflects our commitment to excellence, innovation, and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12 text-yellow-600" />,
                  title: "Certified Quality",
                  description:
                    "All our projects comply with international ISO 9001 standards and the most demanding industrial standards.",
                },
                {
                  icon: <Clock className="w-12 h-12 text-green-600" />,
                  title: "On-Time Delivery",
                  description:
                    "98% of our projects are delivered on schedule, thanks to our rigorous planning and expertise.",
                },
                {
                  icon: <Users className="w-12 h-12 text-gray-600" />,
                  title: "Expert Team",
                  description:
                    "Our engineers and technicians have over 15 years of combined experience in the agro-industrial sector.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-yellow-400">Project</span>?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Contact us today to discuss your needs and get a personalized quote for your industrial project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl font-semibold">
                  <Users className="w-5 h-5 mr-2" />
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl font-semibold bg-transparent"
              >
                <Eye className="w-5 h-5 mr-2" />
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
