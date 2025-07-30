import { Suspense, lazy, useEffect, useRef, useState } from "react"

const Navbar = lazy(() => import("./sections/Navbar"))
const Home = lazy(() => import("./sections/Home"))
const Content = lazy(() => import("./sections/Content"))
const Footer = lazy(() => import("./sections/Footer"))

const App = () => {
  type ComponentItem = {
    id: string
    node: React.ReactElement
    ref: React.RefObject<HTMLDivElement | null>
  }

  const loadingFallback = (
    <div className="h-[500px] flex items-center justify-center bg-[#d0ded8]">
      <div className="w-8 h-8 border-4 border-t-transparent border-[#066839] rounded-full animate-spin"></div>
    </div>
  )

  const footerloadingFallback = (
    <div className="h-[300px] flex items-center justify-center bg-[#212224]">
      <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
    </div>
  )

  const [showHome, setShowHome] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  const homeRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)

  const components: ComponentItem[] = [
    { id: "Home", node: <Home />, ref: homeRef },
    { id: "Content", node: <Content />, ref: contentRef },
    { id: "Footer", node: <Footer />, ref: footerRef },
  ]

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === homeRef.current) setShowHome(true)
          if (entry.target === contentRef.current) setShowContent(true)
          if (entry.target === footerRef.current) setShowFooter(true)
          obs.unobserve(entry.target)
        }
      },
      { 
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.5
       }
    )

    if (homeRef.current) obs.observe(homeRef.current)
    if (contentRef.current) obs.observe(contentRef.current)
    if (footerRef.current) obs.observe(footerRef.current)

    const checkInView = (
      ref: React.RefObject<HTMLDivElement | null>,
      setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      if (!ref.current) return
      const { top, bottom } = ref.current.getBoundingClientRect()

      if (top < window.innerHeight + 100 && bottom > -100) {
        setter(true)
        obs.unobserve(ref.current)
      }
    }

    checkInView(homeRef, setShowHome)
    checkInView(contentRef, setShowContent)
    checkInView(footerRef, setShowFooter)

    return () => obs.disconnect()
  }, []);

  return (
    <>
      <Navbar />
      {components.map((comp, i) => {
        if (comp.id === "Home" && !showHome) {
          return <div ref={homeRef} key={i} className="min-h-[80vh]" />
        }
        if (comp.id === "Content" && !showContent) {
          return <div ref={contentRef} key={i} className="min-h-[80vh]" />
        }
        if (comp.id === "Footer" && !showFooter) {
          return <div ref={footerRef} key={i} className="min-h-[80vh]" />
        }

        return (
          <div ref={comp.ref} key={i}>
            <Suspense fallback={comp.id === "Footer" ? footerloadingFallback : loadingFallback}>
              {comp.node}
            </Suspense>
          </div>
        )
      })}
    </>
  )
}

export default App
