import Link from "next/link"
import Image from "next/image"
import { ArrowRight} from "lucide-react"
import { Button } from "@/Components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen mt-28">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/bg2.jpg"
          alt="Industrial facility"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-[#1128479d]">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-blue-400">GTIS</span> Projects
            </h1>
            <p className="text-white text-lg md:text-xl max-w-6xl">
              Explore our portfolio of successful industrial projects across various sectors. Our expertise in assembly, automation, maintenance, and engineering has helped numerous clients optimize their operations and infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Project Categories */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCategory
              title="Industrial Assembly"
              description="Metallic, mechanical, and electrical assembly projects for various industrial facilities."
              image="/bg2.jpg"
            />
            <ProjectCategory
              title="Automation Systems"
              description="Implementation of automated systems to optimize industrial processes and increase efficiency."
              image="/bg2.jpg"
            />
            <ProjectCategory
              title="Maintenance Solutions"
              description="Preventive and corrective maintenance projects for production equipment and infrastructure."
              image="/bg2.jpg"
            />
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Flour Mill Automation"
              location="Cairo, Egypt"
              description="Installation of automated systems for optimizing flour production lines."
              image="/bg2.jpg"
            />
            <ProjectCard
              title="Industrial Maintenance"
              location="Casablanca, Morocco"
              description="Comprehensive maintenance program for manufacturing equipment."
              image="/bg2.jpg"
            />
            <ProjectCard
              title="Electrical Assembly"
              location="Tunis, Tunisia"
              description="Complete electrical assembly for a new production facility."
              image="/bg2.jpg"
            />
            <ProjectCard
              title="Spare Parts Supply Chain"
              location="Algiers, Algeria"
              description="Implementation of an optimized spare parts supply chain for industrial equipment."
              image="/bg2.jpg"
            />
            <ProjectCard
              title="Infrastructure Optimization"
              location="Dakar, Senegal"
              description="Optimization of industrial infrastructure to improve efficiency and reduce costs."
              image="/bg2.jpg"
            />
            <ProjectCard
              title="Mechanical Installation"
              location="Lagos, Nigeria"
              description="Installation of mechanical components for a new production line."
              image="/bg2.jpg"
            />
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0E70B8] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            GTIS is ready to support your industrial company in installation and infrastructure optimization projects.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function ProjectCategory({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-blue-500 hover:text-blue-700 font-medium flex items-center"
        >
          View Projects <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  location,
  description,
  image,
}: { title: string; location: string; description: string; image: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-sm text-gray-500 mb-3">{location}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-blue-500 hover:text-blue-700 font-medium flex items-center"
        >
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
