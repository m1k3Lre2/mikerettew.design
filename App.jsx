import { motion } from 'framer-motion';

const projects = [
  { title: 'Project One', description: 'A modern web design.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Two', description: 'A sleek mobile UI.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Three', description: 'An intuitive dashboard.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Four', description: 'A cutting-edge SaaS platform.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Five', description: 'A creative e-commerce experience.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Six', description: 'A smooth fintech application.', image: 'https://via.placeholder.com/300' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-12 space-y-16">
      <header className="text-left relative w-full">
        <h1 className="text-5xl font-bold text-green-500 inline-block">MIKE RETTEW</h1>
        <div className="absolute top-1/2 left-[calc(100%+10px)] right-0 h-1 bg-green-500"></div>
        <p className="text-lg text-gray-600 text-right mt-2">Product Designer | UI/UX Specialist</p>
      </header>

      <section className="space-y-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.5 }}>
            <img src={project.image} alt={project.title} className="rounded-lg w-1/3" />
            <div className="w-2/3 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 text-lg">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
