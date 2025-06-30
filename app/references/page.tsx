import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ReferencesPage() {
  const clients = [
    {
      id: 1,
      name: "Industrial Manufacturing Co.",
      logo: "/placeholder.svg?height=200&width=200",
      description:
        "Leading manufacturer in the industrial sector. We provided comprehensive automation and maintenance services for their production facilities.",
    },
    {
      id: 2,
      name: "Global Food Processing",
      logo: "/placeholder.svg?height=200&width=200",
      description:
        "Major player in the food processing industry. Our team implemented specialized solutions for their flour mills and production lines.",
    },
    {
      id: 3,
      name: "Energy Solutions Ltd.",
      logo: "/placeholder.svg?height=200&width=200",
      description:
        "Innovative company in the energy sector. We delivered technical services for their power generation and distribution systems.",
    },
    {
      id: 4,
      name: "Mining Operations Inc.",
      logo: "/placeholder.svg?height=200&width=200",
      description:
        "Leading mining company. Our industrial services helped maintain equipment reliability and optimize processes in challenging environments.",
    },
    {
      id: 5,
      name: "Chemical Processing Group",
      logo: "/placeholder.svg?height=200&width=200",
      description:
        "Major chemical processing company. We provided tailored solutions ensuring safety, reliability, and efficiency in their production facilities.",
    },
    {
      id: 6,
      name: "Infrastructure Development Corp.",
      logo: "/placeholder.svg?height=200&width=200",
      description:
        "Key player in infrastructure projects. Our expertise helped ensure reliable operation of critical infrastructure systems.",
    },
  ]

  const testimonials = [
    {
      id: 1,
      text: "GTIS provided exceptional service for our manufacturing plant. Their team's expertise in automation significantly improved our production efficiency.",
      author: "Technical Director, Industrial Manufacturing Co.",
    },
    {
      id: 2,
      text: "We've been working with GTIS for our flour mill maintenance for years. Their preventive maintenance program has drastically reduced our downtime and increased productivity.",
      author: "Operations Manager, Global Food Processing",
    },
    {
      id: 3,
      text: "The engineering solutions provided by GTIS for our power distribution systems were innovative and highly effective. We continue to rely on their expertise for our technical needs.",
      author: "Chief Engineer, Energy Solutions Ltd.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 mt-28">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Our References</h1>
        <p className="text-lg text-gray-600">
          At GTIS, we take pride in the relationships we've built with our clients across various industries. Our
          commitment to excellence and tailored solutions has made us a trusted partner for numerous companies seeking
          industrial services.
        </p>
      </div>

      {/* Client Logos */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Trusted Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center">
              <div className="relative w-32 h-32">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Case Studies */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.slice(0, 3).map((client) => (
            <div key={client.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="relative w-24 h-24 mb-4 mx-auto">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{client.name}</h3>
              <p className="text-gray-600 mb-4">{client.description}</p>
              <Link href={`/references/${client.id}`}>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Case Study
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Become Our Next Success Story</Button>
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
              <p className="text-sm font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
