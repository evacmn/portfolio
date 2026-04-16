import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Formation', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-card/95 backdrop-blur-xl border-b-2 border-primary/20 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        {/* Pixel accent line */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent origin-left"
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                {/* Voxel Logo */}
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 flex items-center justify-center overflow-hidden group-hover:border-primary transition-all duration-300">
                  <div className="w-5 h-5 bg-primary group-hover:scale-110 transition-transform duration-300" style={{
                    boxShadow: '0 0 20px rgba(91, 229, 132, 0.6), inset 0 0 10px rgba(91, 229, 132, 0.3)'
                  }} />
                  {/* Corner pixels */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-secondary" />
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-accent" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-primary" />
                </div>
                <span className="text-primary tracking-widest font-display text-lg group-hover:text-secondary transition-colors duration-300">EC</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Pixel underline */}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  {/* Pixel accent */}
                  <motion.span
                    className="absolute top-1 right-1 w-1 h-1 bg-primary opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative p-2 text-foreground hover:text-primary transition-colors border-2 border-primary/30 hover:border-primary/60 bg-card/50 hover:bg-primary/10 group"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              {/* Corner pixel */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl md:hidden pt-16"
        >
          {/* Pixel grid background */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `
              linear-gradient(rgba(91, 229, 132, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91, 229, 132, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            imageRendering: 'pixelated',
          }} />

          <div className="relative flex flex-col items-center justify-center h-full gap-8 px-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, type: "spring" }}
                className="relative text-3xl text-foreground hover:text-primary transition-all duration-300 group font-display"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Pixel decorations */}
                <motion.div
                  className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-primary opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                />
                <motion.div
                  className="absolute -right-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary opacity-0 group-hover:opacity-100"
                  initial={{ x: 10 }}
                  whileHover={{ x: 0 }}
                />
              </motion.a>
            ))}

            {/* Decorative elements */}
            <motion.div
              className="absolute top-20 left-10 w-6 h-6 border-2 border-primary/30"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-4 h-4 bg-accent/30"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
