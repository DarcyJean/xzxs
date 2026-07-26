import { motion } from 'framer-motion'
import { BookOpen, Users, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: '真实案例调研',
    desc: '深入一线调研真实乡村创业案例，总结不同农业赛道的成功模式和关键节点',
  },
  {
    icon: Lightbulb,
    title: '模式总结提炼',
    desc: '将成功经验提炼为可复制的创业模式，帮助创业者降低试错成本',
  },
  {
    icon: Users,
    title: '平台共享赋能',
    desc: '搭建创业者交流共享平台，让乡村创业从单打独斗变为协同成长',
  },
]

export default function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-green mb-3 px-3 py-1 rounded-full bg-brand-light">
            关于我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            让乡村创业有方法可循
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            乡智新生是由
            <span className="text-brand-green font-semibold">华南农业大学创新创业学院</span>
            孵化的乡村OPC创业孵化与经验共享平台。我们深入调研真实乡村创业案例，总结不同农业赛道的成功模式，帮助创业者降低试错成本，找到属于自己的乡村创业之路。
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-8 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-brand-light/30 hover:border-brand-green/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
