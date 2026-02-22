'use client'

import { Button } from "./ui/button"
import { useFunnelStore } from '../store/useFunnelStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FunnelCTAButtonProps {
  children: React.ReactNode
  className?: string
}

export function FunnelCTAButton({ children, className = "" }: FunnelCTAButtonProps) {
  const { nextStep, setLoading, isLoading } = useFunnelStore()
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    if (isLoading || isClicked) return
    
    setIsClicked(true)
    setLoading(true)
    
    // Enhanced transition with loading state
    setTimeout(() => {
      nextStep()
      setLoading(false)
      setIsClicked(false)
    }, 600) // Smooth transition timing
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        size="lg"
        onClick={handleClick}
        disabled={isLoading || isClicked}
        className={`h-14 rounded-xl bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
      >
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: isClicked ? 0.7 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {isLoading ? "Carregando..." : children}
        </motion.span>
      </Button>
    </motion.div>
  )
}