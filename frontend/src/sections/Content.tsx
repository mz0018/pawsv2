import { motion } from "framer-motion";
import { BookOpenIcon, ClipboardDocumentListIcon, SquaresPlusIcon, RectangleStackIcon } from "../components/HeroIcons";

const Content = () => {
  
  type ProjectItems = {
    label: string;
    icon: React.ReactElement;
    text: string;
  }
  
  const projectOverview: ProjectItems[] = [
    {
      label: "Booking",
      icon: <BookOpenIcon className="h-7 w-7 sm:h-10 sm:w-10 pb-1" />,
      text: "Clients can conveniently book an appointment with their preferred veterinarian online, eliminating the need for walk-ins or phone calls.",
    },
    {
      label: "Scheduling",
      icon: <ClipboardDocumentListIcon className="h-7 w-7 sm:h-10 sm:w-10 pb-1" />,
      text: "Veterinarians can seamlessly view, manage, and organize their upcoming appointments through a centralized scheduling interface.",
    },
    {
      label: "Products",
      icon: <SquaresPlusIcon className="h-7 w-7 sm:h-10 sm:w-10 pb-1" />,
      text: "Veterinarians have the ability to list and manage products such as pet medicines, supplements, and supplies for clients to explore and purchase.",
    },
    {
      label: "Profiling",
      icon: <RectangleStackIcon className="h-7 w-7 sm:h-10 sm:w-10 pb-1" />,
      text: "The system includes detailed patient profiling, allowing vets to maintain complete medical histories and visit records for each pet.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.5 }}
    id="content" 
    className="bg-[#d0ded8] flex items-center justify-center grid sm:grid-cols-3 gap-6 p-5"

    >
      {projectOverview.map((proj, i) => (
        <motion.div key={i} 
        className="bg-white rounded-md p-2 shadow-md hover:shadow-lg/20 text-[#85aa9b]"
        whileHover={{ scale: 1.1 }}
        variants={fadeVariants}
        >
          {proj.icon}<hr />
          <h1 className="text-lg sm:text-xl font-semibold text-[#0a5c36]">{proj.label}</h1>
          <p className="line-clamp-4 text-xs sm:text-sm text-gray-600">{proj.text}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Content
