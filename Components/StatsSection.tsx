import { url } from "inspector"
import { FileText, Globe, Award, Users } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="w-full py-16 bg-[url('/bg-w.png')] bg-cover bg-center" >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-500 text-xl font-bold">Gtis Solutions</h2>
          <h3 className="text-[#7a8a9e] text-4xl font-bold mt-2">RELIABLE EXPERTISE</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#112847]">
              <FileText size={64} strokeWidth={1.5} />
            </div>
            <h4 className="text-[#112847] text-3xl font-bold">+30</h4>
            <h5 className="text-[#112847] text-xl font-medium mb-2">projects</h5>
            <p className="text-[#7a8a9e] text-sm">55 million cubic-meters of built storage capacity</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#112847]">
              <Globe size={64} strokeWidth={1.5} />
            </div>
            <h4 className="text-[#112847] text-3xl font-bold">+5</h4>
            <h5 className="text-[#112847] text-xl font-medium mb-2">countries</h5>
            <p className="text-[#7a8a9e] text-sm">With presence on five continents</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#112847]">
              <Award size={64} strokeWidth={1.5} />
            </div>
            <h4 className="text-[#112847] text-3xl font-bold">+8</h4>
            <h5 className="text-[#112847] text-xl font-medium mb-2">years</h5>
            <p className="text-[#7a8a9e] text-sm">Excellence and commitment with our clients</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#112847]">
              <Users size={64} strokeWidth={1.5} />
            </div>
            <h4 className="text-[#112847] text-3xl font-bold">+150</h4>
            <h5 className="text-[#112847] text-xl font-medium mb-2">professionals</h5>
            <p className="text-[#7a8a9e] text-sm">With state of the art manufacturing facilities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
