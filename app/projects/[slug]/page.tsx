import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Building, ArrowRight } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    

  return {
    title: ``,
    description: 'Custom page description here...',
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'flour-mill-automation' },
    { slug: 'industrial-maintenance' },
    { slug: 'electrical-assembly' },
  ];
}


export default function ProjectDetailPage({ params }: PageProps) {
  // This would normally come from a database or API
  const project = {
    title: "Flour Mill Automation",
    slug: "flour-mill-automation",
    location: "Cairo, Egypt",
    client: "Cairo Milling Company",
    date: "January 2023",
    description: "Installation of automated systems for optimizing flour production lines.",
    fullDescription: `GTIS completed a comprehensive automation project for Cairo Milling Company's flour production facility. The project involved the installation of state-of-the-art automated systems to optimize the entire production process.

    Our team implemented advanced control systems, sensors, and monitoring equipment to ensure precise control over the milling process. This resulted in improved product quality, reduced waste, and increased production efficiency.
    
    The scope of work included:
    
    • Installation of automated dosing and mixing systems
    • Implementation of quality control monitoring equipment
    • Integration of production data analytics
    • Training of facility staff on new systems
    • Ongoing maintenance support
    
    The project was completed on schedule and within budget, resulting in a 30% increase in production efficiency and a significant improvement in product consistency.`,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    results: [
      "30% increase in production efficiency",
      "Reduced waste by 25%",
      "Improved product consistency",
      "Enhanced quality control",
      "Reduced maintenance downtime",
    ],
    relatedProjects: [
      {
        title: "Industrial Maintenance",
        slug: "industrial-maintenance",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Electrical Assembly",
        slug: "electrical-assembly",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  }


  return (
    <div className="flex flex-col min-h-screen mt-10">  

  

      {/* Breadcrumb */}
      {/* <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/projects" className="text-gray-500 hover:text-blue-600">
              Projects
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-blue-600">{project.title}</span>
            <span>{slug}</span>
          </div>
        </div>
      </div> */}

      {/* Project Hero */}
      <div className="relative h-[400px]">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <Link href="/projects" className="text-white mb-4 flex items-center hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 mr-2 text-blue-400" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose max-w-none">
                {project.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Project Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs mr-3 mt-0.5">
                        ✓
                      </div>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Need a Similar Project?</h3>
                  <p className="text-gray-600 mb-4">
                    Contact us to discuss how we can help with your industrial automation needs.
                  </p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Request a Quote</Button>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {project.relatedProjects.map((relatedProject, index) => (
                    <Link key={index} href={`/projects/${relatedProject.slug}`} className="block">
                      <div className="group bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="flex">
                          <div className="relative h-24 w-24">
                            <Image
                              src={relatedProject.image || "/placeholder.svg"}
                              alt={relatedProject.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 flex items-center">
                            <div>
                              <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                                {relatedProject.title}
                              </h4>
                              <div className="text-blue-500 text-sm flex items-center mt-1">
                                View Project <ArrowRight className="ml-1 h-3 w-3" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
          <Button className="bg-white text-[#0E70B8] hover:bg-gray-100">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

 
    </div>
  )
}



