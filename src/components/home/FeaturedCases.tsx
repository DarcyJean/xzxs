import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, MapPin } from 'lucide-react'
import { getFeaturedCases } from '../../data/cases'
import { getTrackBySlug } from '../../data/tracks'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'

export default function FeaturedCases() {
  const cases = getFeaturedCases()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="真实案例"
          title="看新农人如何找到自己的赛道"
          subtitle="每个案例都完整记录了创业成果、成长路径和可复制的模式"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, index) => {
            const track = getTrackBySlug(c.trackSlug)
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/cases/${c.id}`}
                  className="group block p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-green/20 transition-all duration-300 h-full"
                >
                  {/* Icon + Track Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-2xl">
                      {c.thumbnail}
                    </div>
                    {track && <Badge variant="green">{track.name}</Badge>}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {c.summary}
                  </p>

                  {/* Quick stats */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {c.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-green font-medium">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {c.results.revenue}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-blue font-medium">
                      <Users className="w-3.5 h-3.5" />
                      {c.results.employment}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{c.model}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">
                      查看完整路径
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
          >
            浏览全部案例
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
