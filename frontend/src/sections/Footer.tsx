import { MapPinIcon, PhoneIcon, AtSymbolIcon } from "../components/HeroIcons"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css'

const Footer = () => {
  const footer = [
    { label: "Location", icon: <MapPinIcon className="h-4 w-4" />, content: "Aritao Nueva Vizcaya" },
    { label: "Contact", icon: <PhoneIcon className="h-4 w-4" />, content: "+63938 736 4065" },
    { label: "Mail", icon: <AtSymbolIcon className="h-4 w-4" />, content: "proanimal@gmail.com" }
  ]

  const platformAccounts = [
    { icon: <FaFacebook className="h-7 w-7" />, title: "Facebook" },
    { icon: <FaInstagram className="h-7 w-7" />, title: "Instagram" },
    { icon: <FaTwitter className="h-7 w-7" />, title: "Twitter" }
  ]

  const year = new Date().getFullYear()

  return (
    <div id="footer" className="bg-[#212224] gap-4 p-5 text-white">

      {/* Upper */}
      <div className="grid sm:grid-cols-3 gap-3 border-b border-gray-400 pb-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img src="/img/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="font-bold text-sm">PAWS</span>
          </div>

          <ul className="flex gap-2 mt-2">
            {platformAccounts.map((plat) => (
              <li key={plat.title}>
                <Tippy content={plat.title}>
                  <span className="cursor-pointer hover:text-gray-400 transition-all">
                    {plat.icon}
                  </span>
                </Tippy>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <h1 className="uppercase font-semibold p-1">contact us</h1>
          <ul>
            {footer.map(({ label, icon, content }) => (
              <li key={label} className="flex items-center gap-1 text-gray-400 text-xs pb-1">
                {icon}
                {content}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <h1 className="uppercase font-semibold">subscribe</h1>
          <p className="text-xs text-gray-400 capitalize p-1">
            get updates and news in your inbox.
          </p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded bg-gray-600 px-3 py-2 placeholder-gray-400 text-xs cursor-not-allowed"
            disabled
          />
        </div>
      </div>

      {/* Lower */}
      <div className="flex items-center justify-end pt-2">
        <p className="line-clamp-2 text-xs text-gray-400">
          © {year} PAWS. All rights reserved. — Built by{" "}
          <a href="https://hanzportfolio.site" target="_blank" rel="noopener noreferrer">
            Hanz Menzi
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
