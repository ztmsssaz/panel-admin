// @ts-nocheck

import {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from '../layout/layout'
import FallbackLoading from '../components/ui/fallbackLoading'

const Dashboard = lazy(() => import('../pages/dashboard'))
const Projects = lazy(() => import('../pages/projects'))

const MainRouter = () => {
  // #ignore eslint
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  )
}

export default MainRouter
