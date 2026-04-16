import { motion } from 'motion/react';
import { GraduationCap, Globe } from 'lucide-react';

const education = [
  {
    degree: 'Master Veille Stratégique et Organisation des Connaissances',
    school: 'Université de Lorraine',
    period: '2025 – 2027',
    description: 'Spécialisation en veille stratégique, analyse informationnelle, organisation des connaissances et intelligence économique.',
    status: 'En cours',
  },
  {
    degree: 'Licence Information-Communication',
    school: 'Université de Lorraine',
    period: '2022 – 2025',
    description: 'Formation complète en communication digitale, stratégies éditoriales et médias numériques.',
    status: 'Diplômée',
  },
];

const languages = [
  {
    name: 'Français',
    level: 'Langue maternelle',
    proficiency: 100,
  },
  {
    name: 'Anglais',
    level: 'Bilingue',
    proficiency: 100,
  },
  {
    name: 'Allemand',
    level: 'Notions',
    proficiency: 30,
  },
  {
    name: 'Espagnol',
    level: 'Notions',
    proficiency: 20,
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-card/20 via-background to-card/20">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(111, 211, 255, 0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(111, 211, 255, 0.8) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
        imageRendering: 'pixelated',
      }} />

      {/* Floating voxels */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: i % 2 === 0 ? '4px' : '6px',
              height: i % 2 === 0 ? '4px' : '6px',
              left: `${5 + i * 10}%`,
              top: `${15 + (i % 4) * 20}%`,
              backgroundColor: i % 3 === 0 ? '#5BE584' : i % 2 === 0 ? '#6FD3FF' : '#A78BFA',
              opacity: 0.15,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
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
            <div className="relative flex items-center gap-3 px-6 py-3 bg-card/80 border-2 border-secondary/40 backdrop-blur-sm overflow-hidden group hover:border-secondary/60 transition-all duration-300">
              <div className="absolute inset-0 bg-secondary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <motion.div
                className="w-3 h-3 bg-secondary relative z-10"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm text-secondary tracking-widest font-mono relative z-10">FORMATION &amp; LANGUES</span>
              {/* Pixel corners */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-secondary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-secondary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-display">
            Parcours académique
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Formation spécialisée et compétences linguistiques
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/15 border-2 border-primary/40 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary" />
              </div>
              <h3 className="text-xl font-display">Formation</h3>
            </div>

            <div className="flex flex-col gap-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative p-4 bg-card/70 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />

                    {/* Pixel corners */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-secondary" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />

                    <div className="relative flex items-start justify-between mb-2.5">
                      <div className="flex-1">
                        <h4 className="mb-1.5 text-base">{edu.degree}</h4>
                        <div className="text-primary text-sm mb-1">{edu.school}</div>
                        <div className="text-sm text-muted-foreground">{edu.period}</div>
                      </div>
                      <div className={`relative px-3 py-1 text-xs border-2 ${
                        edu.status === 'En cours'
                          ? 'bg-primary/15 text-primary border-primary/40'
                          : 'bg-background/70 text-muted-foreground border-primary/20'
                      }`}>
                        <span className="relative z-10">{edu.status}</span>
                        {edu.status === 'En cours' && (
                          <motion.div
                            className="absolute top-1 right-1 w-1.5 h-1.5 bg-primary"
                            animate={{
                              opacity: [1, 0.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/15 border-2 border-secondary/40 flex items-center justify-center">
                <Globe className="w-5 h-5 text-secondary" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-secondary" />
              </div>
              <h3 className="text-xl font-display">Langues</h3>
            </div>

            <div className="flex flex-col gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

                  <div className="relative p-4 bg-card/60 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-500">
                    {/* Pixel corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-secondary opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-secondary opacity-50 group-hover:opacity-100 transition-opacity" />

                    <div className="relative flex items-center justify-between mb-2.5">
                      <div>
                        <h4 className="text-base font-medium">{lang.name}</h4>
                        <span className="text-xs text-muted-foreground">{lang.level}</span>
                      </div>
                      <motion.span
                        className="text-sm font-mono text-secondary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {lang.proficiency}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-background/70 border-2 border-secondary/30 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                        className="relative h-full bg-gradient-to-r from-secondary via-accent to-secondary"
                        style={{
                          boxShadow: '0 0 12px rgba(111, 211, 255, 0.6)',
                          backgroundSize: '200% 100%',
                        }}
                      >
                        {/* Animated shine */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>

                      {/* Pixel grid overlay */}
                      <div className="absolute inset-0 pointer-events-none" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(15, 17, 21, 0.4) 3px, rgba(15, 17, 21, 0.4) 4px)',
                      }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* International Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group max-w-3xl mx-auto"
        >
          <div className="relative p-4 bg-gradient-to-br from-accent/10 via-card/60 to-accent/5 border-2 border-accent/40 overflow-hidden backdrop-blur-sm hover:border-accent/50 transition-all duration-500">
            {/* Pixel corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent" />

            <div className="relative flex items-start gap-3">
              <Globe className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                Capacité à intervenir dans des environnements internationaux et multiculturels, avec une maîtrise bilingue permettant d'évoluer avec fluidité auprès d'interlocuteurs variés.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
