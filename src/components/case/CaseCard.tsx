import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, TrendingUp, Users } from 'lucide-react'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import { getTrackBySlug } from '../../data/tracks'
import type { CaseStudy } from '../../data/cases'

interface CaseCardProps {
  caseStudy: CaseStudy
  index?: number
}

export default function CaseCard({ caseStudy: c, index = 0 }: CaseCardProps) {
  const track = getTrackBySlug(c.trackSlug)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/cases/${c.id}`}>
        <Card className="h-full group">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-2xl">
              {c.thumbnail}
            </div>
            {track && <Badge variant="cyan">{track.name}</Badge>}
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
            {c.name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
            {c.summary}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <MapPin className="w-3.5 h-3.5" />
              {c.location}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-brand-cyan font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              {c.results.revenue}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-brand-blue font-medium">
              <Users className="w-3.5 h-3.5" />
              {c.results.employment}
            </div>
          </div>

          {/* Model */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-gray-400 truncate mr-2">{c.model}</span>
            <span className="flex items-center gap-1 text-sm font-medium text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              查看完整路径
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
