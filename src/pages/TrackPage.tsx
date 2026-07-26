import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Lightbulb, TrendingUp } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import { getTrackBySlug } from '../data/tracks'
import { getCasesByTrack } from '../data/cases'
import CaseCard from '../components/case/CaseCard'

export default function TrackPage() {
  const { slug } = useParams<{ slug: string }>()
  const track = getTrackBySlug(slug || '')
  const cases = getCasesByTrack(slug || '')

  if (!track) {
    return (
      <PageTransition>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">赛道未找到</h1>
            <Link to="/test" className="text-brand-green hover:underline">
              去做匹配测试，找到你的赛道
            </Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-light/50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">{track.icon}</div>
            <Badge variant="green" size="md">创业赛道</Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              {track.name}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {track.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Track Description */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              {track.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="py-12 md:py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="适合人群"
            subtitle="如果你符合以下条件，这个赛道可能非常适合你"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {track.suitableFor.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Users className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Modes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="典型创业模式"
            title="这个赛道可以怎么做？"
            subtitle="看看已经验证的创业模式，找到适合你的切入方式"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {track.businessModes.map((mode, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {mode.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {mode.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases in this Track */}
      {cases.length > 0 && (
        <section className="py-12 md:py-16 bg-brand-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              label="真实案例"
              title={`${track.name}案例库`}
              subtitle="学习已经成功的创业者是如何在这个赛道取得成绩的"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c, i) => (
                <CaseCard key={c.id} caseStudy={c} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-xl mx-auto text-center px-4">
          <TrendingUp className="w-12 h-12 text-brand-green mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            这个赛道适合你吗？
          </h3>
          <p className="text-gray-500 mb-6">
            完成创业匹配测试，了解你与这个赛道的匹配度
          </p>
          <Link to="/test">
            <Button variant="primary" size="md">
              开始创业匹配
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
