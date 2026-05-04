import { useLanguage } from '../context/LanguageContext'
import { Languages } from 'lucide-react'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors border border-primary/30"
      title={language === 'en' ? 'Switch to Hindi' : 'अंग्रेजी में बदलें'}
    >
      <Languages className="w-5 h-5 text-primary" />
      <span className="font-semibold text-primary">
        {language === 'en' ? 'हिंदी' : 'EN'}
      </span>
    </motion.button>
  )
}

export default LanguageSwitcher
