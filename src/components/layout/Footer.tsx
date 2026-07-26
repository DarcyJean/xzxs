import { Link } from 'react-router-dom'
import { Sprout, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 leading-tight">
                  乡智新生
                </span>
                <span className="text-[10px] text-gray-400 font-medium leading-tight tracking-wider">
                  XZXS
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              华南农业大学创新创业学院孵化的乡村OPC创业孵化与经验共享平台
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">快速导航</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/test" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                  创业匹配测试
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                  案例数据库
                </Link>
              </li>
              <li>
                <Link to="/system" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                  1+4+N孵化体系
                </Link>
              </li>
            </ul>
          </div>

          {/* Tracks */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">农业赛道</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/tracks/planting" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                  种植业
                </Link>
              </li>
              <li>
                <Link to="/tracks/livestock" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                  畜牧业
                </Link>
              </li>
              <li>
                <Link to="/tracks/forestry" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                  林业
                </Link>
              </li>
              <li>
                <Link to="/tracks/aquaculture" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                  水产养殖业
                </Link>
              </li>
              <li>
                <Link to="/tracks/digital-agri" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                  数字农业
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
                华南农业大学创新创业学院
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-brand-green flex-shrink-0" />
                xzxs@scau.edu.cn
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} 乡智新生 XZXS. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            华南农业大学创新创业学院 · 乡村振兴 OPC 孵化平台
          </p>
        </div>
      </div>
    </footer>
  )
}
