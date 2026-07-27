import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  TrendingUp,
  Users,
  MapPin,
  Award,
  Clock,
  Target,
  Lightbulb,
  CheckCircle2,
  Hammer,
  Brain,
  Coins,
  Wrench,
  Zap,
} from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { getCaseById } from '../data/cases'
import { getTrackBySlug } from '../data/tracks'

export default function CaseDetailPage() {
  const { id } = useParams<{ id: string }>()
  const caseStudy = getCaseById(id || '')

  if (!caseStudy) {
    return (
      <PageTransition>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">案例未找到</h1>
            <Link to="/cases" className="text-brand-cyan hover:underline">
              返回案例库
            </Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  const track = getTrackBySlug(caseStudy.trackSlug)

  return (
    <PageTransition>
      {/* Header */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            返回案例库
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-3xl">
                {caseStudy.thumbnail}
              </div>
              <div>
                {track && <Badge variant="cyan">{track.name}</Badge>}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              {caseStudy.name}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
              {caseStudy.summary}
            </p>

            <div className="flex items-center gap-2 mt-4 text-sm text-gray-200">
              <MapPin className="w-4 h-4" />
              {caseStudy.location}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Module 1: 创业成果 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-cyan" />
              </div>
              <h2 className="text-2xl font-bold text-white">创业成果</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Coins className="w-6 h-6 text-brand-cyan mb-3" />
                <div className="text-xs text-gray-200 mb-1">年营收规模</div>
                <div className="text-lg font-bold text-white">
                  {caseStudy.results.revenue}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
                <Target className="w-6 h-6 text-brand-blue mb-3" />
                <div className="text-xs text-gray-200 mb-1">产业规模</div>
                <div className="text-lg font-bold text-white">
                  {caseStudy.results.scale}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Users className="w-6 h-6 text-brand-cyan mb-3" />
                <div className="text-xs text-gray-200 mb-1">带动就业</div>
                <div className="text-lg font-bold text-white">
                  {caseStudy.results.employment}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
                <Award className="w-6 h-6 text-brand-blue mb-3" />
                <div className="text-xs text-gray-200 mb-1">荣誉认证</div>
                <div className="text-sm font-semibold text-white space-y-1">
                  {caseStudy.results.awards.map((a, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-brand-blue mt-0.5">•</span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Model */}
            <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-brand-cyan" />
                <span className="text-sm font-semibold text-gray-100">
                  创业模式
                </span>
              </div>
              <p className="text-lg font-medium text-brand-cyan">
                {caseStudy.model}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Module 2: 成长路径 Timeline */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-blue" />
              </div>
              <h2 className="text-2xl font-bold text-white">成长路径</h2>
            </div>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-blue to-brand-cyan" />

              <div className="space-y-8">
                {caseStudy.timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-14"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    {/* Dot */}
                    <div
                      className={`
                        absolute left-[11px] top-1.5 w-4 h-4 rounded-full border-4 bg-brand-dark
                        ${i === 0 ? 'border-brand-cyan' : 'border-brand-blue'}
                      `}
                    />

                    {/* Content */}
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`
                            text-xs font-bold px-2.5 py-1 rounded-full
                            ${i === 0
                              ? 'bg-brand-cyan/10 text-brand-cyan'
                              : 'bg-brand-blue/10 text-brand-blue'
                            }
                          `}
                        >
                          {item.date}
                        </span>
                        <h3 className="font-bold text-white">{item.event}</h3>
                      </div>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Module 3: 可复制模式 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
              </div>
              <h2 className="text-2xl font-bold text-white">可复制模式</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 适合人群 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-brand-cyan" />
                  <h3 className="font-bold text-white">适合人群</h3>
                </div>
                <ul className="space-y-1.5">
                  {caseStudy.replicable.suitableFor.map((item, i) => (
                    <li key={i} className="text-sm text-gray-200 flex items-start gap-2">
                      <span className="text-brand-cyan mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 启动成本 */}
              <div className="p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
                <div className="flex items-center gap-2 mb-3">
                  <Coins className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-bold text-white">启动成本</h3>
                </div>
                <p className="text-sm text-gray-200">{caseStudy.replicable.startupCost}</p>
              </div>

              {/* 核心能力 */}
              <div className="p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-bold text-white">核心能力</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.replicable.coreSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 盈利模式 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-brand-cyan" />
                  <h3 className="font-bold text-white">盈利模式</h3>
                </div>
                <p className="text-sm text-gray-200">{caseStudy.replicable.profitModel}</p>
              </div>
            </div>

            {/* 关键步骤 */}
            <div className="mt-5 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Hammer className="w-5 h-5 text-brand-cyan" />
                <h3 className="font-bold text-white">关键步骤</h3>
              </div>
              <div className="space-y-3">
                {caseStudy.replicable.keySteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand-cyan text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-200 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI工具 */}
            <div className="mt-5 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-brand-blue" />
                <h3 className="font-bold text-white">AI工具推荐</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.replicable.aiTools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-medium"
                  >
                    <Wrench className="w-3.5 h-3.5 inline mr-1.5" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12">
        <div className="max-w-xl mx-auto text-center px-4">
          <h3 className="text-xl font-bold text-white mb-2">
            这个案例适合你吗？
          </h3>
          <p className="text-gray-200 mb-6">
            完成创业匹配测试，发现更多适合你的赛道和案例
          </p>
          <Link to="/test">
            <Button variant="cyan" size="md">
              开始创业匹配
            </Button>
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
