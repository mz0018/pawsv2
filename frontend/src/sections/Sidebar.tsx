import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { XCircleIcon } from "../components/HeroIcons";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  navLinks: {
    label: string;
    targetId: string;
    icon: React.ReactNode;
  }[];
};

type ButtonItem = {
  label: string;
  route: string;
};

const button: ButtonItem[] = [
  { label: "Log in", route: "/login" },
  { label: "Sign up", route: "/signup" },
];

const Sidebar = ({ isOpen, onClose, navLinks }: SidebarProps) => {
  useEffect(() => {
    const closeOnScroll = () => isOpen && onClose();
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 right-0 h-full w-48 bg-[#212224] shadow-lg p-5 z-50"
      style={{ backgroundColor: "rgba(33, 34, 36, 0.8)" }}
    >
      <ul className="flex flex-col gap-2">
        <button
          onClick={onClose}
          className="flex items-end justify-end"
        >
          <XCircleIcon className="w-5 h-5" />
        </button>

        {navLinks.map((link, i) => (
          <li key={i}>
            <ScrollLink
              to={link.targetId}
              smooth={true}
              duration={500}
              onClick={onClose}
              className="relative flex items-center justify-start cursor-pointer p-4 after:content-[''] after:absolute after:bottom-2 after:left-1/4 after:w-1/2 after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.icon}&nbsp;
              {link.label}
            </ScrollLink>
          </li>
        ))}

        {button.map((btn, i) => (
          <li key={i}>
            <MotionLink
              to={btn.route}
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-[#d0ded8] text-[#066839] w-full px-4 py-2 rounded text-xs font-semibold hover:bg-gray-100 cursor-pointer"
            >
              {btn.label}
            </MotionLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
