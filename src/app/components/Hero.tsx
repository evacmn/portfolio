import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, Code2, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImageOne from '../../imports/IMG_2633.jpeg';
import heroImageTwo from '../../imports/IMG_3755.jpeg';
import heroImageThree from '../../imports/IMG_3756.jpeg';

const images = [
  heroImageOne,
  heroImageTwo,
  heroImageThree,
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(91, 229, 132, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 229, 132, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          imageRendering: 'pixelated',
        }} />
      </div>

      {/* Voxel Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: i % 3 === 0 ? '4px' : i % 2 === 0 ? '6px' : '8px',
              height: i % 3 === 0 ? '4px' : i % 2 === 0 ? '6px' : '8px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#5BE584' : i % 2 === 0 ? '#6FD3FF' : '#A78BFA',
              opacity: 0.15,
              boxShadow: i % 2 === 0 ? '0 0 20px currentColor' : 'none',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent h-32 opacity-50"
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/30 mb-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-4 h-4 text-primary relative z-10" />
              </motion.div>
              <span className="text-sm text-primary relative z-10 font-mono tracking-wider">Portfolio 2026</span>
              {/* Pixel corners */}
              <motion.div
                className="absolute top-0 left-0 w-2 h-2 bg-primary"
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary" />
              <motion.div
                className="absolute bottom-0 right-0 w-2 h-2 bg-primary"
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <motion.span
                className="block text-2xl sm:text-3xl lg:text-4xl mb-3 font-display relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="relative inline-block">
                  <motion.span
                    className="relative inline-block"
                    style={{
                      background: 'linear-gradient(90deg, #ffffff 40%, #5BE584 50%, #6FD3FF 60%, #ffffff 70%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    animate={{
                      backgroundPosition: ['0% center', '200% center'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Eva Commenne
                  </motion.span>
                  {/* Glow effect on name */}
                  <motion.span
                    className="absolute inset-0 blur-xl"
                    style={{
                      background: 'linear-gradient(90deg, #5BE584, #6FD3FF, #A78BFA)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                    animate={{
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </motion.span>
              <motion.span
                className="block text-base sm:text-lg lg:text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-primary">Chargée de communication digitale & </span>
                <span className="text-accent">veille stratégique</span>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base text-muted-foreground mb-3 leading-relaxed"
            >
              J'accompagne votre projet dans le développement d'une présence digitale cohérente, créative et stratégique.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground mb-8 leading-relaxed"
            >
              Spécialisée en communication digitale, création de contenu et stratégie éditoriale, je mets plus de 10 ans d'expérience autodidacte au service d'identités fortes, de contenus engageants et de stratégies pensées pour générer de la visibilité et de l'impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#experiences"
                onClick={(e) => handleNavClick(e, '#experiences')}
                className="group relative px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 overflow-hidden border-2 border-primary hover:border-primary/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear",
                  }}
                />
                <Code2 className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Voir mes expériences</span>
                {/* Pixel accent */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary-foreground opacity-50" />
              </motion.a>
              <motion.a
                href="#education"
                onClick={(e) => handleNavClick(e, '#education')}
                className="group relative px-6 py-3 bg-card border-2 border-secondary/40 text-foreground hover:bg-secondary/10 hover:border-secondary transition-all duration-300 flex items-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-secondary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                <Users className="w-5 h-5 relative z-10 text-secondary" />
                <span className="relative z-10">Ma formation</span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative px-6 py-3 border-2 border-accent/40 text-foreground hover:bg-accent/10 hover:border-accent transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative z-10">Me contacter</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Holographic Glow */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Layered Pixel Borders */}
              <div className="absolute -inset-4 border-2 border-primary/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)' }} />
              <div className="absolute -inset-2 border-2 border-secondary/20" />
              <div className="absolute -inset-1 border border-accent/30" />

              {/* Main Image Container */}
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-card border-2 border-primary/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{
                      opacity: 0,
                      x: 0,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0.3,
                      x: 0,
                    }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0"
                  >
                    {/* Glitch effect layers */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ x: 0, opacity: 0 }}
                      animate={{ x: 0, opacity: 0 }}
                      exit={{
                        x: [-10, 10, -5, 5, 0],
                        opacity: [1, 1, 1, 1, 0],
                      }}
                      transition={{ duration: 0.3, times: [0, 0.25, 0.5, 0.75, 1] }}
                    >
                      <img
                        src={images[currentImageIndex]}
                        alt="Eva Commenne"
                        className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                        style={{
                          filter: 'grayscale(100%) contrast(1.1) brightness(1.05) hue-rotate(90deg)',
                          mixBlendMode: 'screen',
                          opacity: 0.3,
                        }}
                      />
                    </motion.div>

                    {/* Main image */}
                    <img
                      src={images[currentImageIndex]}
                      alt="Eva Commenne"
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                      style={{
                        filter: 'grayscale(100%) contrast(1.1) brightness(1.05)',
                      }}
                    />

                    {/* Duotone Overlay Effect */}
                    <div
                      className="absolute inset-0 mix-blend-soft-light opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(91, 229, 132, 0.4) 0%, rgba(111, 211, 255, 0.3) 50%, rgba(167, 139, 250, 0.4) 100%)'
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                    {/* Pixel Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                      backgroundImage: `
                        linear-gradient(rgba(91, 229, 132, 0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(91, 229, 132, 0.8) 1px, transparent 1px)
                      `,
                      backgroundSize: '6px 6px',
                      imageRendering: 'pixelated',
                    }} />

                    {/* Glitch scanlines effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(91, 229, 132, 0.03) 2px, transparent 4px)',
                      }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-primary w-6'
                          : 'bg-primary/30 hover:bg-primary/60'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>

              {/* Voxel Corner Accents */}
              <motion.div
                className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-primary"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 4px, 4px 4px, 4px 100%, 0 100%)' }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 border-t-4 border-r-4 border-secondary"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, calc(100% - 4px) 100%, calc(100% - 4px) 4px, 0 4px)' }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-12 h-12 border-b-4 border-l-4 border-accent"
                style={{ clipPath: 'polygon(0 0, 4px 0, 4px calc(100% - 4px), 100% calc(100% - 4px), 100% 100%, 0 100%)' }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-primary"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />

              {/* Animated Pixel Accents */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-primary"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 left-4 w-2 h-2 bg-secondary"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>

            {/* Info Pills with Pixel Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.div
                className="relative px-4 py-2 bg-card/90 border-2 border-primary/30 backdrop-blur-sm group hover:border-primary/60 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="text-sm text-muted-foreground font-mono relative z-10">📍 Nancy, France</span>
                <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary" />
              </motion.div>
              <motion.div
                className="relative px-4 py-2 bg-card/90 border-2 border-secondary/30 backdrop-blur-sm group hover:border-secondary/60 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              >
                <div className="absolute inset-0 bg-secondary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="text-sm text-muted-foreground font-mono relative z-10">24 ans</span>
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-secondary" />
              </motion.div>
              <motion.div
                className="relative px-4 py-2 bg-card/90 border-2 border-accent/30 backdrop-blur-sm group hover:border-accent/60 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <div className="absolute inset-0 bg-accent/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="text-sm text-muted-foreground font-mono relative z-10">Permis B</span>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-accent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-10 h-10 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
