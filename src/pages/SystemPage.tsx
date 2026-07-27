import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe,
  Database,
  GraduationCap,
  Users,
  Rocket,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const pillars = [
  {
    icon: Database,
    title: '乡村机会库',
    desc: '汇聚全国乡村创业机会，涵盖五大农业赛道的产业资源、政策红利和市场空白，精准匹配创业者需求。',
    color: 'bg-brand-cyan/10 text-brand-cyan',
  },
  {
    icon: GraduationCap,
    title: '轻创业训练营',
    desc: '设计轻资产、低门槛的乡村创业课程体系，从模式分析到实操指导，帮助创业者快速验证商业模型。',
    color: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    icon: Users,
    title: '导师体系',
    desc: '链接成功创业者、农业专家、高校教授，建立"1对1+社群陪跑"导师体系，解决创业过程中的关键问题。',
    color: 'bg-brand-cyan/10 text-brand-cyan',
  },
  {
    icon: Rocket,
    title: '全域资源孵化',
    desc: '整合政策、资金、技术、渠道等全域资源，为创业者提供从0到1的全流程孵化支持。',
    color: 'bg-brand-blue/10 text-brand-blue',
  },
]

const individuals = [
  { emoji: '🌾', name: '种植达人', desc: '从30亩到150亩的品牌之路' },
  { emoji: '🐔', name: '养殖能手', desc: '林下养鸡年销450万' },
  { emoji: '🤖', name: '数字农人', desc: 'AI服务覆盖3个县区' },
  { emoji: '📱', name: '农村电商', desc: '80万粉丝带货千万' },
  { emoji: '🍄', name: '林下经济', desc: '300亩林菌基地' },
  { emoji: '🐟', name: '水产创业者', desc: '工厂化养鱼年入350万' },
]

export default function SystemPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="cyan" size="md">
              <Sparkles className="w-3.5 h-3.5 inline mr-1" />
              OPC孵化体系
            </Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-6">
              1+4+N 创业孵化体系
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              以乡智新生平台为核心，构建四大支撑体系，孵化N个乡村超级个体
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1 Platform */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center p-10 md:p-14 rounded-3xl bg-gradient-to-br from-brand-cyan to-brand-blue text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase text-white/70">
              1个平台
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              乡智新生平台
            </h2>
            <p className="text-white/80 max-w-lg mx-auto leading-relaxed">
              乡村OPC创业孵化与经验共享平台。通过创业匹配测试、案例数据库、创业路径学习三大核心功能，帮助创业者降低试错成本，找到可复制的发展模式。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="4大支撑"
            title="全方位创业赋能体系"
            subtitle="从信息、知识、人脉到资源，为乡村创业者提供系统化支撑"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${pillar.color.split(' ')[0]} flex items-center justify-center mb-4`}
                >
                  <pillar.icon className={`w-6 h-6 ${pillar.color.split(' ')[1]}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* N Individuals */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="N个超级个体"
            title="孵化乡村创业标杆"
            subtitle="每一个超级个体都是可复制的样本，用真实成功激励更多人走上乡村创业之路"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {individuals.map((ind, i) => (
              <motion.div
                key={i}
                className="text-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-brand-cyan/10 hover:border-brand-cyan/20 transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="text-3xl mb-2">{ind.emoji}</div>
                <div className="text-sm font-semibold text-white mb-1">
                  {ind.name}
                </div>
                <div className="text-xs text-gray-200">{ind.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/cases">
              <Button variant="outline" size="md">
                浏览全部案例
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="如何加入OPC孵化体系？"
              subtitle="三步开启你的乡村创业孵化之旅"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  step: '01',
                  title: '完成匹配测试',
                  desc: '了解自己的资源禀赋和适合的创业赛道',
                },
                {
                  step: '02',
                  title: '学习真实案例',
                  desc: '研究同赛道案例的成果、路径和可复制模式',
                },
                {
                  step: '03',
                  title: '加入孵化体系',
                  desc: '获得导师指导、资源对接和全流程孵化支持',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl font-extrabold text-brand-cyan/20 mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/test">
                <Button variant="cyan" size="lg">
                  开始第一步
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
