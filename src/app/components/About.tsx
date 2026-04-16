import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background">
      {/* Voxel Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(91, 229, 132, 0.5) 0px, transparent 1px, transparent 7px, rgba(91, 229, 132, 0.5) 8px),
            repeating-linear-gradient(90deg, rgba(111, 211, 255, 0.5) 0px, transparent 1px, transparent 7px, rgba(111, 211, 255, 0.5) 8px)
          `,
          backgroundSize: '8px 8px',
          imageRendering: 'pixelated',
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 2) * 40}%`,
              backgroundColor: i % 2 === 0 ? '#5BE584' : '#A78BFA',
              opacity: 0.08,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="relative flex items-center gap-3 px-6 py-3 bg-card/80 border-2 border-primary/40 backdrop-blur-sm overflow-hidden group hover:border-primary/60 transition-all duration-300">
              <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <motion.div
                className="w-3 h-3 bg-primary relative z-10"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="text-sm text-primary tracking-widest font-mono relative z-10">À PROPOS</span>
              <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-display">
            Communication digitale & veille stratégique
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mon approche combine éditorial, analytique et opérationnel pour une communication digitale innovante et stratégique.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group"
        >
          <div className="relative p-8 sm:p-12 bg-card/60 backdrop-blur-md border-2 border-primary/25 overflow-hidden">
            {/* Pixel corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />

            <div className="relative max-w-4xl mx-auto space-y-6">
              <div className="flex items-start gap-6">
                {/* Accent bar with pixel detail */}
                <div className="relative flex-shrink-0">
                  <div className="w-1.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
                  <div className="absolute top-0 left-0 w-3 h-3 bg-primary" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 bg-accent" />
                </div>

                <div className="space-y-5">
                  <p className="text-base leading-relaxed">
                    Mon parcours en <span className="text-primary font-medium">Information-Communication</span> puis en <span className="text-primary font-medium">Master Veille Stratégique et Organisation des Connaissances</span> m'a permis de développer une expertise unique à l'intersection de la communication digitale et de l'analyse stratégique.
                  </p>

                  <p className="text-base leading-relaxed">
                    Je construis des <span className="text-secondary font-medium">lignes éditoriales cohérentes</span>, crée du <span className="text-secondary font-medium">contenu adapté aux plateformes</span>, et analyse les <span className="text-secondary font-medium">environnements numériques</span> pour identifier les opportunités et les tendances.
                  </p>

                  <p className="text-base leading-relaxed">
                    Ma capacité à faire de la <span className="text-accent font-medium">veille informationnelle</span>, à synthétiser l'information et à contribuer à une <span className="text-accent font-medium">stratégie de communication innovante</span> me permet d'apporter une vision globale et analytique aux projets digitaux.
                  </p>

                  <p className="text-base leading-relaxed">
                    Avec plus de <span className="text-primary font-medium">7 ans d'exploration autodidacte</span> des projets numériques, je maîtrise l'écosystème digital, des outils créatifs aux plateformes d'analyse, en passant par les nouvelles technologies comme l'IA.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t-2 border-primary/20">
                {[
                  { value: '7+', label: 'Ans d\'expérience digitale', color: 'primary' },
                  { value: '15+', label: 'Outils maîtrisés', color: 'secondary' },
                  { value: '3', label: 'Langues', color: 'accent' },
                  { value: '100%', label: 'Passion & engagement', color: 'primary' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative text-center group/stat"
                  >
                    <div className={`text-3xl sm:text-4xl font-display mb-2 text-${stat.color} group-hover/stat:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground leading-snug">
                      {stat.label}
                    </div>
                    {/* Pixel accent */}
                    <motion.div
                      className={`absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-${stat.color} opacity-0 group-hover/stat:opacity-100`}
                      initial={{ y: -5 }}
                      whileHover={{ y: 0 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
