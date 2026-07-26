import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, User, Sparkles, Target, FileText, Map } from 'lucide-react'
import Button from '../ui/Button'

const flowSteps = [
  { icon: User, label: '用户资源', color: 'bg-brand-light text-brand-green' },
  { icon: Sparkles, label: 'AI匹配', color: 'bg-brand-lightBlue text-brand-blue' },
  { icon: Target, label: '创业赛道', color: 'bg-brand-light text-brand-green' },
  { icon: FileText, label: '成功案例', color: 'bg-brand-lightBlue text-brand-blue' },
  { icon: Map, label: '创业路径', color: 'bg-brand-light text-brand-green' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-light/30 to-brand-lightBlue/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/3 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/3 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-green text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              乡村OPC创业孵化与经验共享平台
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              找到你的
              <span className="text-brand-green">乡村创业赛道</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              探索真实新农人案例，学习已经验证的创业路径，让乡村创业从一个人的探索变成可复制的方法。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/test">
                <Button variant="primary" size="lg">
                  开始创业匹配
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/cases">
                <Button variant="outline" size="lg">
                  浏览案例库
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                5大赛道
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                15+真实案例
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                免费匹配
              </span>
            </div>
          </motion.div>

          {/* Right: Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/60 backdrop-blur rounded-3xl border border-gray-100 shadow-xl p-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6 text-center">
                创业赛道匹配流程
              </h3>
              <div className="space-y-0">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="flex items-center gap-4"
                  >
                    {/* Step node */}
                    <div
                      className={`
                        flex items-center gap-3 px-5 py-3.5 rounded-2xl flex-1
                        transition-all duration-300
                        ${step.color}
                      `}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-sm">{step.label}</span>
                    </div>

                    {/* Arrow connector */}
                    {index < flowSteps.length - 1 && (
                      <div className="flex items-center justify-center w-8">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 24 }}
                          transition={{ delay: 0.6 + index * 0.15, duration: 0.3 }}
                          className="w-0.5 bg-gradient-to-b from-brand-green to-brand-blue rounded-full"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
