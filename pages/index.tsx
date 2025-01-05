'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import Wave from 'react-wavify'

// import '../styles/globals.css'

export default function LogoAnimation() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-black overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 z-0">
        <Wave 
          fill="url(#waveGradient)"
          paused={false}
          style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.3,
            transform: 'translateY(50%)'
          }}
          options={{ 
            height: 40,
            amplitude: 25,
            speed: 0.15,
            points: 3
          }}
        >
          <defs>
            <linearGradient id="waveGradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#ff0000" />
              <stop offset="90%" stopColor="#990000" />
            </linearGradient>
          </defs>
        </Wave>
        <Wave 
          fill="url(#waveGradient2)"
          paused={false}
          style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.2,
            transform: 'translateY(30%)'
          }}
          options={{ 
            height: 30,
            amplitude: 20,
            speed: 0.2,
            points: 4
          }}
        >
          <defs>
            <linearGradient id="waveGradient2" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#ff3333" />
              <stop offset="90%" stopColor="#cc0000" />
            </linearGradient>
          </defs>
        </Wave>
      </div>

      {/* Background Glow Effects */}
      <motion.div 
        className="absolute w-full h-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,0,0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(clamp(50px, 8vw, 100px))'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Logo Container */}
      <div className="relative w-[min(90vw,90vh)] aspect-square flex items-center justify-center z-10">
        {/* Circular Outline with enhanced glow */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            border: 'clamp(2px, 0.4vw, 4px) solid rgba(255,0,0,0.8)',
            borderRadius: '50%',
            boxShadow: `
              0 0 clamp(15px, 3vw, 30px) rgba(255,0,0,0.6),
              0 0 clamp(30px, 6vw, 60px) rgba(255,0,0,0.4),
              0 0 clamp(45px, 9vw, 90px) rgba(255,0,0,0.2),
              inset 0 0 clamp(15px, 3vw, 30px) rgba(255,0,0,0.3)
            `
          }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Multiple Rotating Glow Effects */}
        <motion.div
          className="absolute w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.3) 50%, transparent 100%)',
            filter: 'blur(clamp(10px, 2vw, 20px))'
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

  {/* Logo Container */}
  <div className="relative w-[min(90vw,90vh)] aspect-square flex items-center justify-center">
        {/* Circular Outline with enhanced glow */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            border: 'clamp(2px, 0.4vw, 4px) solid rgba(255,0,0,0.8)',
            borderRadius: '50%',
            boxShadow: `
              0 0 clamp(15px, 3vw, 30px) rgba(255,0,0,0.6),
              0 0 clamp(30px, 6vw, 60px) rgba(255,0,0,0.4),
              0 0 clamp(45px, 9vw, 90px) rgba(255,0,0,0.2),
              inset 0 0 clamp(15px, 3vw, 30px) rgba(255,0,0,0.3)
            `
          }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Multiple Rotating Glow Effects */}
        <motion.div
          className="absolute w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.3) 50%, transparent 100%)',
            filter: 'blur(clamp(10px, 2vw, 20px))'
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Rocket Ship SVG */}
        <motion.svg 
          viewBox="-50 -50 100 100"
          className="absolute w-[clamp(200px,70%,600px)] h-[clamp(200px,70%,600px)] rotate-45 md:w-[70%] md:h-[70%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Rocket Body */}
          <motion.path
            d="M0 -40 C-15 -40 -20 -30 -20 -20 L-20 20 C-20 30 -10 35 0 35 C10 35 20 30 20 20 L20 -20 C20 -30 15 -40 0 -40"
            fill="url(#rocketGradient)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="clamp(0.5,0.1vw,1)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Rocket Window */}
          <motion.circle
            cx="0"
            cy="-10"
            r="8"
            fill="url(#windowGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="clamp(0.5,0.1vw,1)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />

          {/* Rocket Fins */}
          <motion.path
            d="M-20 20 L-40 40 L-20 15 M20 20 L40 40 L20 15"
            fill="url(#finGradient)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="clamp(0.5,0.1vw,1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />

          {/* Enhanced Rocket Flames */}
          <motion.g>
            {/* Main Flames */}
            <motion.path
              d="M-10 35 L-20 60 M0 35 L0 65 M10 35 L20 60"
              stroke="url(#flameGradient)"
              strokeWidth="clamp(2,0.4vw,4)"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1],
                opacity: [0.6, 1]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            {/* Secondary Flames */}
            <motion.path
              d="M-15 35 L-25 55 M5 35 L5 60 M15 35 L25 55"
              stroke="url(#flameGradient2)"
              strokeWidth="clamp(1,0.2vw,2)"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1],
                opacity: [0.4, 0.8]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.1
              }}
            />
          </motion.g>

          {/* Enhanced Gradients */}
          <defs>
            <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3333" />
              <stop offset="50%" stopColor="#FF0000" />
              <stop offset="100%" stopColor="#CC0000" />
            </linearGradient>
            <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#EEEEEE" />
              <stop offset="100%" stopColor="#DDDDDD" />
            </linearGradient>
            <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4444" />
              <stop offset="50%" stopColor="#FF0000" />
              <stop offset="100%" stopColor="#CC0000" />
            </linearGradient>
            <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFF00" />
              <stop offset="50%" stopColor="#FF6600" />
              <stop offset="100%" stopColor="#FF0000" />
            </linearGradient>
            <linearGradient id="flameGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFCC00" />
              <stop offset="50%" stopColor="#FF3300" />
              <stop offset="100%" stopColor="#FF0000" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      </div>
    </div>
  )
}
