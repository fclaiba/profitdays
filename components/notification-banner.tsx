'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const nombres = [
  "María", "José", "Antonio", "Carmen", "Juan", "Ana", "Francisco", "Isabel", "Manuel", "Dolores",
  "David", "Lucía", "Javier", "Marta", "Carlos", "Laura", "Miguel", "Cristina", "Alejandro", "Elena",
  "Rafael", "Patricia", "Pedro", "Silvia", "Fernando"
]

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentName, setCurrentName] = useState('')

  useEffect(() => {
    const showNotification = () => {
      const randomName = nombres[Math.floor(Math.random() * nombres.length)]
      setCurrentName(randomName)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 5000) // Hide after 5 seconds
    }

    const intervalId = setInterval(() => {
      const delay = Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000 // Random delay between 10 and 25 seconds
      setTimeout(showNotification, delay)
    }, 30000) // Check every 30 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 bg-[#26C6DA] text-black p-3 rounded-lg shadow-lg z-50"
        >
          <p className="text-sm font-medium">
            ¡{currentName} acaba de comprar uno de nuestros servicios!
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}