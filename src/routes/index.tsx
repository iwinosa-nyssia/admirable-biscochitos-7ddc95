import { Link, createFileRoute } from '@tanstack/react-router'
import { Droplets, GraduationCap, HeartPulse, ArrowRight } from 'lucide-react'
import programs from '@/data/programs'

export const Route = createFileRoute('/')({
  component: Home,
})

const stats = [
  { value: '48', label: 'wells built' },
  { value: '1,200+', label: 'students supported' },
  { value: '65', label: 'villages reached' },
  { value: '14', label: 'years of work' },
]

const icons = [Droplets, GraduationCap, HeartPulse]

function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-5">
          <Link to="/" className="text-lg font-bold tracking-tight">
            Auxano Dorea
          </Link>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#programs" className="hover:text-stone-900">
              Programs
            </a>
            <a href="#impact" className="hover:text-stone-900">
              Impact
            </a>
            <Link to="/contact" className="hover:text-stone-900">
              Contact
            </Link>
          </nav>
          <a
            href="#donate"
            className="rounded-full bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 hover:bg-emerald-800 transition-colors"
          >
            Donate
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-emerald-700 mb-4 tracking-wide uppercase">
            A nonprofit for lasting change
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
           grow the gift.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            Auxano Dorea partners directly with communities to build wells,
            fund schooling, and run mobile health clinics — with local people
            leading the work long after we've moved on.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#donate"
              className="rounded-full bg-emerald-700 text-white font-semibold px-7 py-3.5 hover:bg-emerald-800 transition-colors"
            >
              Give today
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 font-semibold px-7 py-3.5 hover:border-stone-400 transition-colors"
            >
              See our programs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="impact" className="border-y border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-stone-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our programs
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Every program is designed with the community it serves, and handed
            over to local leadership as soon as it's self-sustaining.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Link
                key={program.id}
                to="/programs/$slug"
                params={{ slug: program.slug }}
                className="group flex flex-col rounded-2xl border border-stone-200 bg-white overflow-hidden hover:border-emerald-700 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Icon className="w-6 h-6 text-emerald-700 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-1">
                    {program.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section
        id="donate"
        className="bg-emerald-800 text-white"
      >
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Your gift goes straight to the field
          </h2>
          <p className="text-emerald-100 max-w-xl mx-auto leading-relaxed mb-8">
            90% of every donation funds programs directly. $35 provides clean
            water access for a family for a year. $120 covers a full year of
            school fees for one child.
          </p>
          <a
            href="mailto:give@wellspringfoundation.org"
            className="inline-block rounded-full bg-white text-emerald-800 font-semibold px-8 py-3.5 hover:bg-emerald-50 transition-colors"
          >
            Donate now
          </a>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-5 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
        <span>&copy; {new Date().getFullYear()} Wellspring Foundation. A registered nonprofit.</span>
        <Link to="/contact" className="font-medium text-stone-700 hover:text-emerald-700">
          Contact us
        </Link>
      </footer>
    </div>
  )
}
