import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { tracks } from '../../data/tracks'
import SectionTitle from '../ui/SectionTitle'

export default function TrackOverview() {
  return (
    <section className="py-16 md:py-24 bg-[#0B1B30]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="五大创业赛道"
          title="选择适合你的农业赛道"
          subtitle="每个赛道都有其特定的资源要求、能力模型和发展路径，找到最适合你的方向"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {tracks.map((track, index) => (
            <motion.div
              key={track.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/tracks/${track.slug}`}
                className="group block p-6 glass-card"
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {track.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {track.subtitle}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  了解更多
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
