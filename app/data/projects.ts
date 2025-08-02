import  React from "react"
import { Database, Zap, Shield, Settings } from "lucide-react"

export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  location: string
  client: string
  duration: string
  year: string
  value: string
  category: string
  status: string
  rating: number
  features: string[]
  stats: {
    capacity: string
    silos: number
    timeline: string
    workers: number
    efficiency: string
    safety?: string
    quality?: string
  }
  gallery: string[]
  benefits: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  testimonials: {
    name: string
    position: string
    company: string
    content: string
    rating: number
    avatar: string
  }[]
  technicalSpecs: Record<string, string>
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "grain-terminal-morocco",
    title: "Grain Terminal Complex - Morocco",
    subtitle: "Port Storage Facility",
    description:
      "Complete installation of a 50,000-ton grain storage terminal at Casablanca Port, including 8 flat-bottom silos, pneumatic unloading systems, and automated handling equipment.",
    fullDescription:
      "This flagship project represents one of our most comprehensive installations in North Africa. The grain terminal complex at Casablanca Port was designed to handle the increasing grain import demands of Morocco while ensuring efficient storage and distribution. The project included the installation of 8 large-capacity flat-bottom silos, each equipped with advanced aeration systems and temperature monitoring. The pneumatic unloading systems allow for rapid ship discharge, reducing port congestion and operational costs. Our team worked closely with port authorities to ensure minimal disruption to ongoing operations while maintaining the highest safety standards.",
    image: "/placeholder.svg?height=600&width=800&text=Grain+Terminal+Morocco",
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
      "/placeholder.svg?height=400&width=600&text=Gallery+Image+1",
      "/placeholder.svg?height=400&width=600&text=Gallery+Image+2",
      "/placeholder.svg?height=400&width=600&text=Gallery+Image+3",
      "/placeholder.svg?height=400&width=600&text=Gallery+Image+4",
      "/placeholder.svg?height=400&width=600&text=Gallery+Image+5",
      "/placeholder.svg?height=400&width=600&text=Gallery+Image+6",
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
  {
    id: 3,
    slug: "cement-plant-algeria",
    title: "Cement Plant Expansion - Algeria",
    subtitle: "Industrial Processing Facility",
    description:
      "Major expansion of cement production facility including new kiln installation, raw material handling systems, and cement storage silos with 2,000 tons/day capacity increase.",
    fullDescription:
      "This major industrial project involved the expansion of one of Algeria's largest cement production facilities. The project included the installation of a new rotary kiln, raw material preparation systems, and cement storage infrastructure. Our team managed the complex logistics of installing heavy industrial equipment while maintaining ongoing production operations. The expansion increased the plant's daily production capacity by 2,000 tons, significantly contributing to Algeria's construction industry growth.",
    image: "/placeholder.svg?height=600&width=800&text=Cement+Plant+Algeria",
    location: "Oran, Algeria",
    client: "Algeria Cement Corporation",
    duration: "24 months",
    year: "2022",
    value: "$18.7M",
    category: "industrial-plants",
    status: "completed",
    rating: 4.7,
    features: [
      "2,000 tons/day increase",
      "New rotary kiln",
      "Raw material systems",
      "Cement storage silos",
      "Dust collection systems",
      "Quality control lab",
      "Automated packaging",
      "Environmental controls",
    ],
    stats: {
      capacity: "2,000 tons/day",
      silos: 6,
      timeline: "24 months",
      workers: 65,
      efficiency: "40% increase",
      safety: "Zero incidents",
    },
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Cement+Plant+Gallery+1",
      "/placeholder.svg?height=400&width=600&text=Cement+Plant+Gallery+2",
      "/placeholder.svg?height=400&width=600&text=Cement+Plant+Gallery+3",
      "/placeholder.svg?height=400&width=600&text=Cement+Plant+Gallery+4",
      "/placeholder.svg?height=400&width=600&text=Cement+Plant+Gallery+5",
      "/placeholder.svg?height=400&width=600&text=Cement+Plant+Gallery+6",
    ],
    benefits: [
      {
        title: "Production Expansion",
        description: "Increased daily production capacity by 2,000 tons, meeting growing market demand.",
        icon: <Database className="w-6 h-6" />,
      },
      {
        title: "Energy Optimization",
        description: "New kiln technology reduced energy consumption per ton by 25%.",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        title: "Environmental Compliance",
        description: "Advanced dust collection and emission control systems meet international standards.",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        title: "Process Automation",
        description: "Automated systems improve quality consistency and reduce operational costs.",
        icon: <Settings className="w-6 h-6" />,
      },
    ],
    process: [
      {
        step: 1,
        title: "Project Planning & Design",
        description: "Detailed engineering design and project planning while maintaining existing operations.",
      },
      {
        step: 2,
        title: "Infrastructure Development",
        description: "Construction of foundations and infrastructure for new equipment installation.",
      },
      {
        step: 3,
        title: "Equipment Installation",
        description: "Installation of rotary kiln, raw material systems, and storage infrastructure.",
      },
      {
        step: 4,
        title: "Systems Integration",
        description: "Integration of new systems with existing plant operations and control systems.",
      },
      {
        step: 5,
        title: "Commissioning & Optimization",
        description: "System commissioning, performance optimization, and operator training.",
      },
    ],
    testimonials: [
      {
        name: "Karim Boumediene",
        position: "Plant Manager",
        company: "Algeria Cement Corporation",
        content:
          "The expansion project was completed flawlessly. GTIS managed the complexity of working within an active plant exceptionally well.",
        rating: 5,
        avatar: "/placeholder.svg?height=60&width=60&text=KB",
      },
      {
        name: "Amina Cherif",
        position: "Operations Director",
        company: "Algeria Cement Corporation",
        content: "The new systems have significantly improved our production efficiency and environmental performance.",
        rating: 5,
        avatar: "/placeholder.svg?height=60&width=60&text=AC",
      },
    ],
    technicalSpecs: {
      "Production Increase": "2,000 tons/day",
      "Kiln Diameter": "4.2 meters",
      "Kiln Length": "65 meters",
      "Storage Capacity": "15,000 tons",
      "Power Requirements": "8.5 MW",
      "Dust Collection": "99.5% efficiency",
      "Automation Level": "85%",
      "Environmental Standard": "EU emissions",
    },
  },
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category)
}

export const getAllProjects = (): Project[] => {
  return projects
}
