import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import programs from '@/data/programs'

export const Route = createFileRoute('/programs/$slug')({
  component: ProgramDetail,
  loader: async ({ params }) => {
    const program = programs.find((p) => p.slug === params.slug)
    if (!program) {
      throw notFound()
    }
    return program
  },
})

function ProgramDetail() {
  const program = Route.useLoaderData()

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 mb-8 hover:text-emerald-800"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all programs
        </Link>

        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 mb-8">
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {program.name}
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed mb-8">
          {program.description}
        </p>

        <div className="rounded-2xl border border-stone-200 bg-white p-8 flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-emerald-700">
              {program.stat}
            </div>
            <div className="text-sm text-stone-500">{program.statLabel}</div>
          </div>
          <a
            href="#donate"
            className="rounded-full bg-emerald-700 text-white font-semibold px-6 py-3 hover:bg-emerald-800 transition-colors"
          >
            Support this program
          </a>
        </div>
      </div>
    </div>
  )
}
