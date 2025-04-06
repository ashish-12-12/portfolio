import {BiLogoDocker, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript} from 'react-icons/bi'
import rabbitMq from '../../public/rabbitmq-logo.png'

import {motion} from 'framer-motion'

const Tech = () => {

  const variants ={
    hidden :{opacity:0,y:50},
    visible : {opacity:1,y:0}
  }
  return (
    <div id="tech" className="flex min-h-[70vh] w-full
    items-center justify-center gap-16 md:gap-32">
      <motion.h1
      variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}

      
      className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div 
              variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}
        >
          <BiLogoTypescript className='cursor-pointer text-[100px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div 
              variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}
        >
          <BiLogoJavascript className='cursor-pointer text-[100px] text-orange-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div 
              variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}
        >
          <BiLogoDocker className='cursor-pointer text-[100px] text-blue-800 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div 
              variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}
        >
          <BiLogoTailwindCss className='cursor-pointer text-[100px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div 
              variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}
        >
          <BiLogoNodejs className='cursor-pointer text-[100px] text-green-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div 
              variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}
        >
          <BiLogoReact className='cursor-pointer text-[100px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div 
              variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}
        >
          <BiLogoMongodb className='cursor-pointer text-[100px] text-green-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>

        <motion.div 
              variants={variants}
      initial="hidden"
      whileInView='visible'
      transition={{duration:0.5}}
        >
          <BiLogoPostgresql className='cursor-pointer text-[100px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </motion.div>
        
        <motion.div 
  variants={variants}
  initial="hidden"
  whileInView='visible'
  transition={{duration:0.5}}
>
  <img
    src={rabbitMq}
    alt="RabbitMQ"
    className="cursor-pointer text-orange-500 transition-all duration-300 hover:translate-y-5
               w-[40px] sm:w-[80px] md:w-[100px]
               h-[40px] sm:h-[80px] md:h-[100px]"
  />
</motion.div>


      </div>
    </div>
  )
}

export default Tech