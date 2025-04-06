import {
  BiLogoDocker,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript
} from 'react-icons/bi';

import rabbitMq from '../../public/rabbitmq-logo.png';
import { motion } from 'framer-motion';

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const icons = [
    { component: <BiLogoTypescript className="text-sky-500" />, name: 'TypeScript' },
    { component: <BiLogoJavascript className="text-orange-500" />, name: 'JavaScript' },
    { component: <BiLogoDocker className="text-blue-800" />, name: 'Docker' },
    { component: <BiLogoTailwindCss className="text-sky-500" />, name: 'Tailwind CSS' },
    { component: <BiLogoNodejs className="text-green-500" />, name: 'Node.js' },
    { component: <BiLogoReact className="text-blue-500" />, name: 'React' },
    { component: <BiLogoMongodb className="text-green-500" />, name: 'MongoDB' },
    { component: <BiLogoPostgresql className="text-blue-500" />, name: 'PostgreSQL' }
  ];

  return (
    <div id="tech" className="flex flex-col items-center justify-center w-full px-4 py-16">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-light text-center text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="cursor-pointer transition-all duration-300 hover:translate-y-3 text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
              {icon.component}
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center"
        >
          <img
            src={rabbitMq}
            alt="RabbitMQ"
            className="cursor-pointer transition-all duration-300 hover:translate-y-3
                       w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px]
                       h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
