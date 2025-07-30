import { motion } from "framer-motion";
import { BookOpenIcon } from "../components/HeroIcons";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Home = () => {

  return (
  <div
    id="home"
    className="h-[300px] sm:h-[300px] md:h-[500px] lg:h-screen bg-no-repeat bg-cover bg-center text-white bg-[url(/img/home_bg.jpg)]"
  >
    <div className="h-[300px] sm:h-[300px] md:h-[500px] lg:h-screen bg-[rgba(33,34,36,0.8)] grid sm:grid-cols-2">

      {/* Right */}
      <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
      className="flex flex-col items-center justify-center bg-cover bg-center mask-r-from-55% bg-[url(/img/vet.png)]"
      >
      </motion.div>

      {/* Left */}
      <div className="flex flex-col items-start justify-center m-5 h-[300px]">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Pro Animal Welfare System
        </h1>
        <p className="text-sm sm:text-lg text-[#d0ded8] line-clamp-3 mb-2">
          A web‑based record management system for veterinary clinics in Bayombong, Nueva Vizcaya.
        </p>
        <MotionLink
        to="/appointment"
        type="button"
        className="flex items-center bg-[#0f5132] p-2 sm:p-3 rounded-md cursor-pointer hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        >
          <BookOpenIcon className="w-5 h-5 mr-2" />
          <span className="text-sm md:text-lg">Book Appointment</span>
        </MotionLink>
      </div>

    </div>
  </div>
  )
}

export default Home;
