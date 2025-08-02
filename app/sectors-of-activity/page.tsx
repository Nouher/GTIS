import Image from "next/image"
import { Button } from "@/Components/ui/button"
import Link from "next/link"
import { FileText, Factory, Wheat, Utensils, Building2, Droplet, Trees, Construction } from "lucide-react"

export default function SectorsOfActivityPage() {
  const sectors = [
    {
      id: 1,
      title: "Flour Mills",
      description:
        "GTIS provides complete solutions for flour mills including automation, preventive & corrective maintenance, and spare parts specific to flour production lines.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Wheat className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 2,
      title: "Animal Feed Factories",
      description:
        "We design, install, and maintain systems for mixing, grinding, and packaging. Our team improves process efficiency and reduces waste.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Factory className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 3,
      title: "Pasta & Rice Factories",
      description:
        "GTIS installs and maintains automated lines for pasta (mixing, extrusion, drying) and rice (milling, sorting, packaging), enhancing efficiency and quality.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Utensils className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 4,
      title: "Cement Plants",
      description:
        "From kiln maintenance to mechanical repairs, we optimize cement plant performance with modern equipment and process upgrades.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 5,
      title: "Beverage & Water Filling",
      description:
        "We deliver precise and hygienic filling lines for water, juice, carbonated drinks, and oils – including capping, labeling, and quality control systems.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Droplet className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 6,
      title: "Wood Transformation Plants",
      description:
        "We automate wood processing plants with equipment for cutting, treating, and quality control to ensure efficient, consistent production.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Trees className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 7,
      title: "Metal Structures & Other Industries",
      description:
        "GTIS designs, manufactures, and assembles metal structures for industrial plants, warehouses, and various custom industrial needs.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Construction className="h-8 w-8 text-blue-600" />,
    },
  ]

  const stats = [
    {
      value: "500+",
      label: "Projects",
      description: "Successfully completed industrial projects",
      icon: <FileText className="h-10 w-10 text-blue-600" />,
    },
    {
      value: "20+",
      label: "Countries",
      description: "With presence across multiple regions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
    },
    {
      value: "15+",
      label: "Years",
      description: "Excellence and commitment with our clients",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
    {
      value: "50+",
      label: "Professionals",
      description: "With state of the art technical expertise",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ]

  return (
    <div>
  
          {/* Hero Section */}
            <div className="relative w-full h-[400px] md:h-[500px] mt-0 lg:mt-28">
              <div className="absolute inset-0 bg-[#1128479d] z-10" />
              <Image
                src="/bg5.jpg"
                alt="Industrial facility"
                width={1920}
                height={500}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Sectors of Activity
                </h1>
                <p className="text-white text-lg md:text-xl max-w-3xl py-6">
                  GTIS provides specialized industrial services across various sectors. Our expertise and experience allow us to deliver tailored solutions that address the unique challenges and requirements of each industry.
                  </p>
              </div>
            </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-xl font-semibold text-blue-600 mb-2">{stat.label}</p>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sectors Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Industrial Expertise</h2>
          <p className="text-lg text-gray-600">
            We provide specialized solutions across multiple industrial sectors, leveraging our technical expertise to
            optimize operations and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image src={sector.image || "/placeholder.svg"} alt={sector.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4">{sector.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{sector.title}</h3>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <Link href={`/contact?sector=${encodeURIComponent(sector.title)}`}>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0F71B6] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Industrial Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our specialized industrial services can benefit your specific
            sector and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-[#0F71B6] hover:bg-white hover:scale-105 transition cursor-pointer">Contact Us</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-[#0F71B6] hover:scale-105 transition cursor-pointer">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
