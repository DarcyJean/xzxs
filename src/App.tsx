import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import TrackPage from './pages/TrackPage'
import CasesPage from './pages/CasesPage'
import CaseDetailPage from './pages/CaseDetailPage'
import SystemPage from './pages/SystemPage'
import SubmitPage from './pages/SubmitPage'
import { TestProvider } from './context/TestContext'

function App() {
  const location = useLocation()

  return (
    <TestProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/tracks/:slug" element={<TrackPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/cases/:id" element={<CaseDetailPage />} />
            <Route path="/system" element={<SystemPage />} />
            <Route path="/submit" element={<SubmitPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </TestProvider>
  )
}

export default App
