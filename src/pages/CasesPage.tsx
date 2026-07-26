import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle from '../components/ui/SectionTitle'
import { caseStudies } from '../data/cases'
import { tracks } from '../data/tracks'
import CaseCard from '../components/case/CaseCard'

export default function CasesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const activeTrack = searchParams.get('track') || ''

  const filteredCases = useMemo(() => {
    let results = caseStudies

    if (activeTrack) {
      results = results.filter((c) => c.trackSlug === activeTrack)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      results = results.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q)
      )
    }

    return results
  }, [activeTrack, search])

  const handleTrackFilter = (slug: string) => {
    if (activeTrack === slug) {
      setSearchParams({})
    } else {
      setSearchParams({ track: slug })
    }
  }

  return (
    <PageTransition>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-light/50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="案例数据库"
              title="真实创业案例，可复制的成功经验"
              subtitle="每一个案例都完整记录了创业成果、成长路径和可复制模式"
            />
          </motion.div>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Track filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSearchParams({})}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition-all
                  ${
                    !activeTrack
                      ? 'bg-brand-green text-white'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }
                `}
              >
                全部
              </button>
              {tracks.map((track) => (
                <button
                  key={track.slug}
                  onClick={() => handleTrackFilter(track.slug)}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5
                    ${
                      activeTrack === track.slug
                        ? 'bg-brand-green text-white'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }
                  `}
                >
                  {track.icon}
                  {track.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索案例..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 bg-gray-50/30 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCases.length > 0 ? (
            <>
              <p className="text-sm text-gray-400 mb-6">
                共找到 {filteredCases.length} 个案例
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCases.map((c, i) => (
                  <CaseCard key={c.id} caseStudy={c} index={i} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-2">没有找到匹配的案例</p>
              <p className="text-sm text-gray-400">
                试试调整筛选条件或搜索关键词
              </p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
