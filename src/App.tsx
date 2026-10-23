import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { SmoothScroll } from './motion/SmoothScroll'
import { TransitionProvider } from './motion/PageTransition'
import { Cursor } from './motion/Cursor'
import { ScrollTrigger } from './motion/gsap'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Offerings = lazy(() => import('./pages/Offerings'))
const Offering = lazy(() => import('./pages/Offering'))
const Journal = lazy(() => import('./pages/Journal'))
const Begin = lazy(() => import('./pages/Begin'))
const NotFound = lazy(() => import('./pages/NotFound'))

/** Re-measure every trigger once a new page (and its fonts/images) has laid out. */
function RefreshOnRoute() {
  const { pathname } = useLocation()
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => clearTimeout(t)
  }, [pathname])
  return null
}

export function App() {
  return (
    <SmoothScroll>
      <TransitionProvider>
        <a href="#main" className="t-label fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-forest px-4 py-3 text-paper focus:translate-y-0">
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Suspense fallback={<div className="min-h-screen bg-paper" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/offerings" element={<Offerings />} />
              <Route path="/offerings/:slug" element={<Offering />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/begin" element={<Begin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <RefreshOnRoute />
        <Cursor />
      </TransitionProvider>
    </SmoothScroll>
  )
}
