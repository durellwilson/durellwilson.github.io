'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-hidden relative selection:bg-purple-500/30">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 right-0 bottom-0"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-[90vh] flex flex-col justify-center items-center text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-8 text-gradient tracking-tight leading-none filter drop-shadow-lg">
              Durell Wilson
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-gray-400 mb-8 font-light tracking-wide leading-relaxed max-w-3xl mx-auto"
            >
              Software Engineer • iOS Developer • Full-Stack Creator
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 flex-wrap justify-center"
          >
            <motion.a
              href="https://durellwilson.contra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="https://github.com/durellwilson"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-card rounded-full text-white font-semibold hover:bg-white/10 transition-all tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-32"
        >
          <h2 className="text-5xl font-bold text-center mb-20 text-gradient tracking-tight">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['Swift', 'SwiftUI', 'React', 'Next.js', 'TypeScript', 'Node.js', 'iOS', 'Full-Stack'].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 glass-card glass-card-hover rounded-2xl text-center group"
              >
                <p className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI Agent Work */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-32"
        >
          <motion.div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-purple-400 font-semibold tracking-wide">🤖 AI-Powered Development</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 text-gradient tracking-tight">
              Building with AI Agents
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Leveraging AI agents and modern tooling to accelerate development and create innovative solutions that push the boundaries of what's possible.
            </p>
          </motion.div>
        </motion.section>

        {/* Projects Preview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-32"
        >
          <h2 className="text-5xl font-bold text-center mb-20 text-gradient tracking-tight">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: 'BEARvsBULL', 
                desc: 'Interactive financial market simulation game built with Swift.', 
                url: 'https://github.com/durellwilson/BEARvsBULL' 
              },
              { 
                title: 'DevRel Hub', 
                desc: 'Centralized resource for Developer Relations professionals.', 
                url: 'https://github.com/durellwilson/devrel-hub' 
              },
              { 
                title: 'Security Awareness', 
                desc: 'Comprehensive course on modern security threats including AI safety.', 
                url: 'https://github.com/durellwilson/security-awareness-course' 
              },
              { 
                title: 'Portfolio V1', 
                desc: 'Previous iteration of my personal portfolio showcasing web skills.', 
                url: 'https://github.com/durellwilson/portfolio' 
              },
            ].map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-10 glass-card glass-card-hover rounded-3xl group"
              >
                <h3 className="text-3xl font-bold mb-4 text-white tracking-tight group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{project.desc}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 text-center text-gray-500 border-t border-white/5"
        >
          <p>© 2025 Durell Wilson. Built with Next.js & Framer Motion.</p>
        </motion.footer>
      </div>
    </main>
  )
}
