import reseller from '../../public/reseller.png'
import heloEmail from '../../public/heloEmail.jpg'
import heloVerify from '../../public/heloVerify.jpg'
import heloVoice from '../../public/HeloVoice.png'
import {motion} from 'framer-motion'


const projectsList = [
  {
    image: heloVerify, // Replace with your image import or path
    title: "OTP Authentication System",
    description:
      "Built a scalable OTP authentication service supporting SMS, WhatsApp, and email channels. Secured the system with OTP hashing, JWT authentication, and rate limiting. Optimized RabbitMQ, MongoDB, and Redis for high-throughput message handling and low-latency storage. Containerized with Docker for scalable deployment.",
    technologies: ["Node JS", "Express JS", "MongoDB", "Redis", "RabbitMQ", "Docker"],
  },
  {
    image: heloVoice, // Replace with your image import or path
    title: "Voice Communication Platform",
    description:
      "Built a robust voice communication platform supporting IVR calls, patch calls, DTMF-based interactions, and personalized voice messaging. Designed scalable microservices architecture using RabbitMQ for queue handling and MongoDB/Redis for fast data access. Secured the platform with JWT authentication and Dockerized services for deployment. Followed Agile methodologies and CI/CD pipelines for continuous delivery.",
    technologies: ["Node JS", "Express JS", "MongoDB", "Redis", "RabbitMQ", "Docker", "CI/CD"],
  },
  {
    image: heloEmail, // Replace with your image import or path
    title: "Email Platform",
    description:
      "Designed and developed a microservices-based email platform for bulk and transactional messaging. Built five scalable services for email dispatch, tracking, and webhook handling using RabbitMQ. Secured APIs with JWT, Joi validation, and role-based access. Leveraged MongoDB and Redis for fast data handling. Containerized with Docker and automated deployment via CI/CD pipelines, following Agile practices.",
    technologies: ["Node JS", "JavaScript", "Express JS", "MongoDB", "RabbitMQ", "Docker", "Redis"],
  },
  {
    image: reseller, // Replace with your image import or path
    title: "Reseller Platform",
    description:
      "Engineered the backend for a hierarchical reseller platform across SMS, RCS, and WhatsApp. Enabled parent–child reseller management, user activation, and secure onboarding with JWT and 2FA. Implemented DFS-based credit distribution and optimized performance using MongoDB, Redis, and API pagination. Containerized with Docker, managed via Git, and developed following Agile and CI best practices.",
    technologies: ["Node JS", "MongoDB", "Redis", "Docker", "Git"],
  },
];

const ScrollReview = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};


const ProjectsCard = (projects)=>{
  
  return(
    <ScrollReview>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={projects.projects.image} alt="" className='w-full cursor-pointer rounded-2xl translate-all duration-300 hover:scale-105 md:w-[300px]' />
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
      <div className='text-xl font-semibold'>{projects.projects.title}</div>
      <p className='text-gray-400'>{projects.projects.description}</p>
        </div>
        <div className='flex flex-wrap gap-5'>
          {
            projects.projects.technologies.map((tech, index) => (
              <span key={index} className='rounded-1g bg-black p-3'>
                {tech}
              </span>
            ))
          }
        </div>
      </div>
    </div>
    </ScrollReview>
  )
}

const Projects = () => {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-normal gap-16 md:px-14 md:py-24 '>
      <ScrollReview>
      <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
      </ScrollReview>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
            projectsList.map((project , index)=> (
              <ProjectsCard key={index} projects={project} />
            ))
        }
      </div>
    </div>
  )
}

export default Projects