import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, RefreshCw, Target, CheckCircle2 } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'
import { useTest } from '../context/TestContext'
import {
  resourceOptions,
  directionOptions,
  stageOptions,
  stepTitles,
} from '../data/testQuestions'
import { calculateMatch } from '../utils/matching'

export default function TestPage() {
  const { state, dispatch } = useTest()
  const { currentStep, answers } = state
  const navigate = useNavigate()
  const [showResult, setShowResult] = useState(false)

  const totalSteps = 3

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      dispatch({ type: 'NEXT_STEP' })
    } else {
      setShowResult(true)
    }
  }

  const handlePrev = () => {
    dispatch({ type: 'PREV_STEP' })
  }

  const handleReset = () => {
    dispatch({ type: 'RESET' })
    setShowResult(false)
  }

  const matchResults = useMemo(() => {
    if (!showResult) return []
    return calculateMatch(answers)
  }, [showResult, answers])

  const isStepValid = () => {
    if (currentStep === 0) return answers.resources.length > 0
    if (currentStep === 1) return answers.directions.length > 0
    if (currentStep === 2) return answers.stage !== ''
    return true
  }

  const toggleResource = (id: string) => {
    const newResources = answers.resources.includes(id)
      ? answers.resources.filter((r) => r !== id)
      : [...answers.resources, id]
    dispatch({ type: 'SET_RESOURCES', payload: newResources })
  }

  const toggleDirection = (id: string) => {
    const newDirections = answers.directions.includes(id)
      ? answers.directions.filter((d) => d !== id)
      : [...answers.directions, id]
    dispatch({ type: 'SET_DIRECTIONS', payload: newDirections })
  }

  const stepInfo = stepTitles[currentStep]

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Progress Bar */}
        <div className="sticky top-16 md:top-20 z-30 bg-brand-dark/80 backdrop-blur border-b border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-200">
                步骤 {currentStep + 1} / {totalSteps}
              </span>
              <span className="text-sm text-brand-cyan font-medium">
                {stepInfo?.label}
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentStep + 1) / totalSteps) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Question */}
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-10">
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                    key={stepInfo?.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {stepInfo?.title}
                  </motion.h2>
                  <p className="text-gray-200">{stepInfo?.subtitle}</p>
                </div>

                {/* Step 0: Resources */}
                {currentStep === 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {resourceOptions.map((option, i) => (
                      <motion.div
                        key={option.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <Chip
                          icon={option.icon}
                          selected={answers.resources.includes(option.id)}
                          onClick={() => toggleResource(option.id)}
                        >
                          {option.label}
                        </Chip>
                        {answers.resources.includes(option.id) && (
                          <p className="text-xs text-gray-200 mt-1 ml-2">
                            {option.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Step 1: Directions */}
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {directionOptions.map((option, i) => (
                      <motion.div
                        key={option.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <Chip
                          icon={option.icon}
                          selected={answers.directions.includes(option.id)}
                          onClick={() => toggleDirection(option.id)}
                        >
                          {option.label}
                        </Chip>
                        {answers.directions.includes(option.id) && (
                          <p className="text-xs text-gray-200 mt-1 ml-2">
                            {option.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Step 2: Stage */}
                {currentStep === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {stageOptions.map((option, i) => (
                      <motion.button
                        key={option.id}
                        type="button"
                        onClick={() =>
                          dispatch({ type: 'SET_STAGE', payload: option.id })
                        }
                        className={`
                          text-left p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer
                          ${
                            answers.stage === option.id
                              ? 'border-brand-cyan bg-white/5 shadow-md shadow-brand-cyan/10'
                              : 'border-white/10 bg-white/5 hover:border-brand-cyan/30 hover:bg-brand-cyan/10'
                          }
                        `}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="text-3xl mb-3">{option.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {option.description}
                        </p>
                        {answers.stage === option.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand-cyan font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            已选择
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              /* Results */
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <Target className="w-10 h-10 text-brand-cyan" />
                  </motion.div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    你的创业赛道匹配结果
                  </h2>
                  <p className="text-gray-200">
                    根据你的资源、能力和目标，以下是推荐赛道（按匹配度排序）
                  </p>
                </div>

                <div className="space-y-4">
                  {matchResults.map((result, index) => (
                    <motion.div
                      key={result.track.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.12 }}
                      className={`
                        p-6 rounded-2xl border-2 transition-all
                        ${
                          index === 0
                            ? 'border-brand-cyan bg-brand-light/30 shadow-lg shadow-brand-cyan/10'
                            : 'border-white/10 bg-white/5'
                        }
                      `}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{result.track.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              {result.track.name}
                            </h3>
                            <p className="text-sm text-gray-200">
                              {result.track.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-extrabold text-brand-cyan">
                            {result.score}%
                          </div>
                          <div className="text-xs text-gray-200">匹配度</div>
                        </div>
                      </div>

                      {/* Match reasons */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {result.reasons.map((reason, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200"
                          >
                            {reason}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant={index === 0 ? 'cyan' : 'outline'}
                          size="sm"
                          onClick={() => navigate(`/tracks/${result.track.slug}`)}
                        >
                          查看赛道详情
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Link to={`/cases?track=${result.track.slug}`}>
                          <Button variant="ghost" size="sm">
                            浏览该赛道案例
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-gray-200 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    重新测试
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {!showResult && (
            <motion.div
              className="mt-10 flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors
                  ${
                    currentStep === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <ArrowLeft className="w-4 h-4" />
                上一步
              </button>

              <Button
                variant="cyan"
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                {currentStep < totalSteps - 1 ? '下一步' : '查看匹配结果'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
