import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const THREE = (window as any).THREE
    if (!THREE) return

    // --- 场景初始化 ---
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 50)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // --- 粒子系统 ---
    const particleCount = 1500
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      // 散布在空间中的粒子
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6

      // 青蓝渐变色
      const t = Math.random()
      colors[i * 3] = 0.0 + t * 0.0       // R
      colors[i * 3 + 1] = 0.6 + t * 0.34   // G
      colors[i * 3 + 2] = 0.8 + t * 0.2    // B
    }

    const particleGeom = new THREE.BufferGeometry()
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(particleGeom, particleMat)
    scene.add(particles)

    // --- 悬浮 3D 几何体 ---
    const shapes: THREE.Mesh[] = []
    const shapeGeoms = [
      new THREE.IcosahedronGeometry(0.25, 1),
      new THREE.OctahedronGeometry(0.22),
      new THREE.TorusGeometry(0.3, 0.06, 16, 32),
      new THREE.TetrahedronGeometry(0.22),
      new THREE.TorusKnotGeometry(0.2, 0.05, 64, 16),
    ]

    shapeGeoms.forEach((geom, i) => {
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      })
      const mesh = new THREE.Mesh(geom, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3 - 1
      )
      mesh.userData = {
        rotSpeed: { x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01 },
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.003 + Math.random() * 0.005,
        floatAmp: 0.3 + Math.random() * 0.6,
        baseY: mesh.position.y,
      }
      scene.add(mesh)
      shapes.push(mesh)
    })

    // --- 中心发光球体 ---
    const glowGeom = new THREE.SphereGeometry(0.35, 32, 32)
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.15,
      wireframe: true,
    })
    const glowSphere = new THREE.Mesh(glowGeom, glowMat)
    scene.add(glowSphere)

    // --- 动画循环 ---
    let animationId: number
    const clock = new THREE.Clock()

    function animate() {
      animationId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      // 粒子缓慢旋转
      particles.rotation.y += 0.0003
      particles.rotation.x += 0.0001

      // 几何体旋转 + 浮动
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotSpeed.x
        shape.rotation.y += shape.userData.rotSpeed.y
        shape.position.y = shape.userData.baseY + Math.sin(elapsed * shape.userData.floatSpeed * 10 + shape.userData.floatOffset) * shape.userData.floatAmp
      })

      // 中心球体脉冲
      const pulse = 1 + Math.sin(elapsed * 1.5) * 0.2
      glowSphere.scale.setScalar(pulse)
      glowSphere.rotation.y += 0.005
      glowSphere.rotation.x += 0.003

      renderer.render(scene, camera)
    }
    animate()

    // --- 响应窗口大小 ---
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // --- 清理 ---
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
      scene.remove(particles)
      particleGeom.dispose()
      particleMat.dispose()
      shapes.forEach((s) => {
        s.geometry.dispose()
        ;(s.material as THREE.Material).dispose()
      })
      glowGeom.dispose()
      glowMat.dispose()
      renderer.dispose()
    }
  }, [])

  // 滚动到项目定位
  const scrollToIntro = () => {
    document.getElementById('intro-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 田野背景 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(180deg,
              #4A90D9 0%,
              #87CEEB 15%,
              #B8D4E8 25%,
              #E8D5A3 35%,
              #DAA520 50%,
              #C8A030 65%,
              #8B7D3C 80%,
              #5D6B2F 100%
            )
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* 半透明青蓝渐变蒙版 */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(7,15,30,0.35) 0%, rgba(11,27,48,0.65) 100%)',
          }}
        />
      </div>

      {/* Three.js 画布 */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* 覆盖层内容 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* 标签 */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ boxShadow: '0 0 15px rgba(0, 240, 255, 0.1)' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            乡村OPC创业孵化与经验共享平台
          </motion.div>

          {/* 大标题 */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              background: 'linear-gradient(135deg, #00F0FF 0%, #3B82F6 40%, #a78bfa 70%, #00F0FF 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.4))',
            }}
          >
            乡智新生
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            探索真实新农人案例，学习已经验证的创业路径，让乡村创业从一个人的探索变成可复制的方法。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link to="/test">
              <Button variant="cyan" size="lg">
                开始创业匹配
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/cases">
              <Button variant="outline" size="lg">
                浏览案例库
              </Button>
            </Link>
          </motion.div>

          {/* 数据指标 */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-6 text-sm text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              5大赛道
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              15+真实案例
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              免费匹配
            </span>
          </motion.div>
        </motion.div>

        {/* 底部跳动箭头 */}
        <motion.button
          onClick={scrollToIntro}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          aria-label="向下滚动"
        >
          <span className="text-xs text-white/60 tracking-widest">SCROLL</span>
          <motion.div
            className="w-10 h-10 rounded-full border border-brand-cyan/20 flex items-center justify-center"
            animate={{ boxShadow: ['0 0 5px rgba(0,240,255,0.2)', '0 0 20px rgba(0,240,255,0.4)', '0 0 5px rgba(0,240,255,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-5 h-5 text-brand-cyan" />
            </motion.div>
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
