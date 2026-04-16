import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Search, 
  PenTool, 
  Users, 
  BarChart3, 
  Shield, 
  Target,
  Lightbulb,
  Heart,
  Zap,
  Eye,
  TrendingUp
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Développement & IA',
    icon: Zap,
    skills: [
      'Python, JavaScript, HTML/CSS',
      'React & Node.js',
      'Développement logiciel',
      'Prompt Engineering',
      'Claude AI & ChatGPT',
      'Automatisation & IA',
    ],
  },
  {
    title: 'Communication Digitale',
    icon: MessageSquare,
    skills: [
      'Création de contenu photo/vidéo',
      'Stratégie éditoriale',
      'Community management',
      'Storytelling visuel',
      'Multi-plateformes',
      'Planification éditoriale',
    ],
  },
  {
    title: 'Veille & Analyse',
    icon: Search,
    skills: [
      'Veille stratégique',
      'Analyse concurrentielle',
      'E-réputation',
      'Analyse d\'influence',
      'Détection désinformation',
      'OSINT & narratifs',
    ],
  },
  {
    title: 'Gestion de Projet',
    icon: Target,
    skills: [
      'Gestion projet digital',
      'Analyse web',
      'Croissance organique',
      'Analyse performances',
      'Stratégie de contenu',
      'Déploiement solutions',
    ],
  },
];

const tools = [
  'Python',
  'JavaScript',
  'HTML/CSS',
  'React',
  'Node.js',
  'Git',
  'Claude AI',
  'ChatGPT',
  'Midjourney',
  'Curebot',
  'Sindup',
  'Excel',
  'XMind',
  'Gantt',
  'Trello',
  'Notion',
  'Datawrapper',
  'Power Automate Desktop',
  'Adobe Workfront',
  'Canva',
  'Photoshop',
  'CapCut',
  'Adobe Premiere Pro',
  'After Effects',
  'Sony Vegas Pro',
  'WordPress',
];

const softSkills = [
  { name: 'Créativité', icon: Lightbulb },
  { name: 'Rigueur', icon: Target },
  { name: 'Autonomie', icon: Zap },
  { name: 'Adaptabilité', icon: TrendingUp },
  { name: 'Curiosité numérique', icon: Eye },
  { name: 'Polyvalence', icon: Heart },
  { name: 'Esprit d\'analyse', icon: BarChart3 },
  { name: 'Esprit d\'équipe', icon: Users },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 relative bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(91, 229, 132, 0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(91, 229, 132, 0.6) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        imageRendering: 'pixelated',
      }} />

      {/* Floating voxels */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              backgroundColor: i % 3 === 0 ? '#5BE584' : i % 2 === 0 ? '#6FD3FF' : '#A78BFA',
              opacity: 0.1,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm text-primary tracking-widest font-mono relative z-10">COMPÉTENCES</span>
              {/* Pixel corners */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-display">
            Expertise & Savoir-faire
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une palette complète de compétences pour vos projets digitaux
          </p>
        </motion.div>

        {/* Main Skills */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="relative p-6 bg-card/70 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 h-full overflow-hidden group-hover:bg-card/90">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />

                {/* Voxel corners */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-secondary" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />

                {/* Inner pixel accents */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-primary/30" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-secondary/30" />

                <div className="relative flex items-center gap-3 mb-6">
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 border-2 border-primary/40 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-primary" />
                  </div>
                  <h3 className="text-base font-display">{category.title}</h3>
                </div>

                <div className="relative space-y-2.5">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.03 }}
                      className="flex items-center gap-2.5 group/item"
                    >
                      <div className="w-1.5 h-1.5 bg-primary group-hover/item:bg-secondary transition-colors duration-200 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all duration-200 leading-relaxed">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 relative group"
        >
          <div className="relative p-6 bg-card/50 backdrop-blur-sm border-2 border-secondary/30 overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Pixel corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-secondary" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-secondary" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-secondary" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-secondary" />

            <div className="relative flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/15 border-2 border-secondary/40 flex items-center justify-center">
                <PenTool className="w-6 h-6 text-secondary" />
                <div className="absolute top-0 left-0 w-2 h-2 bg-secondary" />
              </div>
              <h3 className="text-base font-display">Outils & Technologies</h3>
            </div>

            <div className="relative flex flex-wrap gap-2.5">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.04 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="relative px-4 py-2 bg-background/70 border-2 border-secondary/25 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 cursor-default group/tool overflow-hidden"
                >
                  <div className="absolute inset-0 bg-secondary/5 translate-x-[-100%] group-hover/tool:translate-x-0 transition-transform duration-300" />
                  <span className="text-sm font-mono relative z-10">{tool}</span>
                  {/* Pixel accent */}
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-secondary opacity-0 group-hover/tool:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group"
        >
          <div className="relative p-6 bg-card/50 backdrop-blur-sm border-2 border-accent/30 overflow-hidden">
            {/* Pixel corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent" />

            <div className="relative flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/15 border-2 border-accent/40 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent" />
              </div>
              <h3 className="text-base font-display">Soft Skills</h3>
            </div>

            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.04 }}
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  className="group/skill relative"
                >
                  <div className="relative p-4 bg-background/60 border-2 border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-center overflow-hidden">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />

                    <skill.icon className="w-6 h-6 text-accent mx-auto mb-2.5 group-hover/skill:scale-110 transition-transform duration-300 relative z-10" />
                    <span className="text-xs relative z-10 block">{skill.name}</span>

                    {/* Pixel accents */}
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-accent opacity-50" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-accent opacity-50" />

                    {/* Animated corner */}
                    <motion.div
                      className="absolute top-1 right-1 w-2 h-2 border-t border-r border-accent opacity-0 group-hover/skill:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
