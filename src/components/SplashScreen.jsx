import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen({ words, duration = 2200, onComplete }) {
  const wordList = Array.isArray(words) ? words : [words]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  // Word rotation and exit sequence
  useEffect(() => {
    // If single word (Work, About, Contact, Project): display briefly, then start slide-up exit
    if (wordList.length === 1) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true)
      }, Math.max(450, duration - 700))

      return () => clearTimeout(exitTimer)
    }

    // If multiple words (Home: Hello -> Namaste -> Welcome):
    const totalWordDisplayTime = duration - 700
    const perWordTime = totalWordDisplayTime / wordList.length

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev < wordList.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setIsExiting(true)
          return prev
        }
      })
    }, perWordTime)

    return () => clearInterval(interval)
  }, [wordList, duration])

  // Call onComplete after exit slide-up completes
  useEffect(() => {
    if (isExiting) {
      const finishTimer = setTimeout(() => {
        if (onComplete) onComplete()
      }, 750)
      return () => clearTimeout(finishTimer)
    }
  }, [isExiting, onComplete])

  // Lock body scroll while splash is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  const currentWord = wordList[currentWordIndex] || ''
  const hasDot = currentWord.startsWith('•')
  const cleanWord = hasDot ? currentWord.replace(/^•\s*/, '') : currentWord

  return (
    <motion.div
      className="editorial-splash-overlay"
      initial={{ y: 0 }}
      animate={isExiting ? { y: '-100%' } : { y: 0 }}
      transition={{
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1] // Dennis Snellenberg smooth bezier curve
      }}
      aria-hidden="true"
    >
      <div className="editorial-splash-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWordIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="editorial-splash-word-wrap"
          >
            <span className="editorial-splash-text">
              {hasDot && <span className="editorial-splash-dot">•</span>}
              <span className="editorial-splash-word">{cleanWord}</span>
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
