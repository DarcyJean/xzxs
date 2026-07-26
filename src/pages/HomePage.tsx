import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import HeroSection from '../components/home/HeroSection'
import IntroSection from '../components/home/IntroSection'
import TrackOverview from '../components/home/TrackOverview'
import FeaturedCases from '../components/home/FeaturedCases'
import Button from '../components/ui/Button'

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <IntroSection />
      <TrackOverview />
      <FeaturedCases />

      {/* CTA Banner */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-green to-brand-green-dark p-10 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                准备好找到你的创业赛道了吗？
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                只需3分钟，根据你的资源、能力和目标，找到最适合的乡村创业方向
              </p>
              <Link to="/test">
                <Button variant="secondary" size="lg" className="!bg-white !text-brand-green hover:!bg-brand-light">
                  开始免费匹配
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
