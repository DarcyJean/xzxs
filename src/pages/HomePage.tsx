import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Send, CheckCircle2, FileText, MapPin, User, Sparkles } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import HeroSection from '../components/home/HeroSection'
import IntroSection from '../components/home/IntroSection'
import TrackOverview from '../components/home/TrackOverview'
import FeaturedCases from '../components/home/FeaturedCases'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

export default function HomePage() {
  const location = useLocation()

  // 处理从其他页面导航过来的段落滚动
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [location.state])

  // --- 案例共建表单状态 ---
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    track: '',
    location: '',
    contact: '',
    summary: '',
    results: '',
    timeline: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <HeroSection />

      <section id="intro-section">
        <IntroSection />
      </section>

      <section id="tracks-section">
        <TrackOverview />
      </section>

      <section id="cases-section">
        <FeaturedCases />
      </section>

      {/* 案例共建 — 案例提交表单 */}
      <section id="cta-section" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              className="text-center max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-brand-cyan" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-3">提交成功！</h2>
              <p className="text-gray-400 mb-8">
                感谢你的案例分享。我们会在5个工作日内审核并与你联系。
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false)
                  setForm({ name: '', track: '', location: '', contact: '', summary: '', results: '', timeline: '' })
                }}
              >
                继续提交案例
              </Button>
            </motion.div>
          ) : (
            <>
              <SectionTitle
                label="案例共建"
                title="分享你的创业故事"
                subtitle="你的经验可能会帮助成千上万个正在寻找方向的乡村创业者"
              />

              <motion.form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* 项目名称 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <User className="w-4 h-4 text-brand-cyan" />
                    项目名称 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="例如：阳光玫瑰葡萄品牌化项目"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all"
                  />
                </div>

                {/* 所属赛道 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <Sparkles className="w-4 h-4 text-brand-cyan" />
                    所属赛道 *
                  </label>
                  <select
                    name="track"
                    value={form.track}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all"
                  >
                    <option value="">请选择赛道</option>
                    <option value="planting">🌾 种植业</option>
                    <option value="livestock">🐄 畜牧业</option>
                    <option value="forestry">🌲 林业</option>
                    <option value="aquaculture">🐟 水产养殖业</option>
                    <option value="digital-agri">🤖 数字农业</option>
                  </select>
                </div>

                {/* 项目所在地 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 text-brand-cyan" />
                    项目所在地 *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    placeholder="例如：广东·清远"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all"
                  />
                </div>

                {/* 联系方式 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <Send className="w-4 h-4 text-brand-cyan" />
                    联系方式（不对外展示）*
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    placeholder="手机号或微信号"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all"
                  />
                </div>

                {/* 项目简介 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FileText className="w-4 h-4 text-brand-cyan" />
                    项目简介 *
                  </label>
                  <textarea
                    name="summary"
                    value={form.summary}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="简要描述你的创业项目，包括：做什么、怎么做、取得了什么成果"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all resize-none"
                  />
                </div>

                {/* 创业成果 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FileText className="w-4 h-4 text-brand-cyan" />
                    创业成果
                  </label>
                  <textarea
                    name="results"
                    value={form.results}
                    onChange={handleChange}
                    rows={3}
                    placeholder="例如：年销售额XXX万元、规模XXX亩、带动XX人就业、获得XX奖项"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all resize-none"
                  />
                </div>

                {/* 成长路径 */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <FileText className="w-4 h-4 text-brand-cyan" />
                    成长路径
                  </label>
                  <textarea
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    rows={4}
                    placeholder={`按时间顺序描述你的创业过程，例如：
2020年 - 创业起步：你做了什么
2021年 - 技术突破：有了什么进展
2022年 - 规模扩大：取得了什么成果`}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all resize-none"
                  />
                </div>

                {/* 提交按钮 */}
                <div className="pt-4">
                  <Button type="submit" variant="cyan" size="lg" className="w-full">
                    提交案例
                    <Send className="w-4 h-4" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    提交后我们会在5个工作日内审核，审核通过后将展示在案例库中
                  </p>
                </div>
              </motion.form>
            </>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
