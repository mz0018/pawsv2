import { lazy, useState, useRef } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Link } from "react-router-dom"
import { Bars3BottomRightIcon, HomeIcon, EnvelopeIcon, ClipboardIcon, PaperAirplaneIcon } from "../components/HeroIcons"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const Sidebar = lazy(() => import("./Sidebar"))

const Navbar = () => {

  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef<number>(0)

  useMotionValueEvent(scrollY, "change", (currentY: number) => {
    const delta = currentY - lastScrollY.current

    if (delta > 5) setVisible(false)
    if (delta < -5) setVisible(true)

    lastScrollY.current = currentY
  })

  const navLinks = [
    { label: "Home", targetId: "home", icon: <HomeIcon className="w-3 h-3" /> },
    { label: "Services", targetId: "content", icon: <ClipboardIcon className="w-3 h-3" /> },
    { label: "Contact", targetId: "footer", icon: <EnvelopeIcon className="w-3 h-3" /> },
  ]

  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <motion.nav 
    className="flex items-center justify-between bg-[#066839] p-5 sticky top-0 z-50 shadow-xl/30 text-gray-200"
    initial={{ y: 0 }}
    animate={{ y: visible ? 0 : -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <img src="/img/logo.png" alt="Logo" className="h-16 w-16" />
        <span className="font-bold text-sm">PAWS</span>
      </div>
      <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={() => setSideBarOpen(true)} 
      className="block md:hidden ml-auto cursor-pointer">
        <Bars3BottomRightIcon className="h-8 w-8" />
      </motion.button>

      <div className="hidden md:flex items-center gap-4 ml-auto">
        <ul className="flex gap-6 text-xs">
          {navLinks.map((link, i) => (
            <li key={i}>
              <ScrollLink
                smooth={true}
                duration={500}
                to={link.targetId}
                className="relative flex items-center justify-start cursor-pointer p-4 after:content-[''] after:absolute after:bottom-2 after:left-1/4 after:w-1/2 after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.icon}&nbsp;{link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="relative">
          <motion.button
          whileHover={{ scale: 1.1 }}
          className="flex items-center bg-[#d0ded8] text-[#066839] px-4 py-2 rounded text-xs font-semibold hover:bg-gray-100 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <PaperAirplaneIcon className="w-5 h-5 transform rotate-[-60deg]" />
            Get Started
          </motion.button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
            <ul className="text-sm text-gray-700">
              <li>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          )}
        </div>
      </div>

      {isSideBarOpen && (
        <Sidebar
        isOpen={isSideBarOpen}
        onClose={() => setSideBarOpen(false)}
        navLinks={navLinks}
        />
      )}
    </motion.nav>
  )
}

export default Navbar
