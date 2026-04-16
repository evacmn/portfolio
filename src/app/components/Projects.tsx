import { motion } from 'motion/react';
import { ExternalLink, TrendingUp, Search, Zap, Video, Users, Globe, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: 'Stratégie Social Media',
    category: 'Communication digitale',
    icon: TrendingUp,
    context: 'Développement de la présence digitale d\'une agence créative',
    role: 'Stratège de contenu & Community Manager',
    tools: ['Instagram', 'TikTok', 'LinkedIn', 'Canva', 'Analytics'],
    objective: 'Créer une communauté engagée et développer la notoriété de la marque',
    result: 'Croissance organique de +150% en 6 mois, engagement multiplié par 3',
  },
  {
    title: 'Veille Concurrentielle',
    category: 'Veille & Analyse',
    icon: Search,
    context: 'Analyse du marché et des tendances pour secteur TPE/PME',
    role: 'Chargée de veille stratégique',
    tools: ['Curebot', 'Sindup', 'Excel', 'Google Analytics'],
    objective: 'Identifier les opportunités et menaces du marché digital',
    result: 'Rapport stratégique complet avec recommandations actionnables',
  },
  {
    title: 'Campagne Digitale Territoriale',
    category: 'Communication publique',
    icon: Globe,
    context: 'Campagne de communication pour collectivité locale',
    role: 'Chargée de communication digitale',
    tools: ['Réseaux sociaux', 'Canva', 'CapCut', 'WordPress'],
    objective: 'Renforcer l\'image et l\'engagement citoyen',
    result: 'Portée de +50k personnes, hausse de l\'engagement local',
  },
  {
    title: 'Projet IA pour TPE/PME',
    category: 'Innovation & IA',
    icon: Zap,
    context: 'Accompagnement de petites structures dans l\'adoption de l\'IA',
    role: 'Chargée de projet IA',
    tools: ['ChatGPT', 'Midjourney', 'Notion AI', 'Outils d\'analyse'],
    objective: 'Identifier et déployer des solutions IA adaptées aux besoins',
    result: 'Gain de productivité de 30% pour les clients accompagnés',
  },
  {
    title: 'Contenus Vidéo Multi-plateformes',
    category: 'Création de contenu',
    icon: Video,
    context: 'Production régulière de contenus vidéo créatifs',
    role: 'Créatrice de contenu & monteuse',
    tools: ['CapCut', 'Premiere Pro', 'After Effects', 'Sony Vegas'],
    objective: 'Créer des contenus engageants adaptés à chaque plateforme',
    result: 'Millions de vues cumulées, communauté fidèle',
  },
  {
    title: 'Analyse d\'Influence & E-réputation',
    category: 'Veille stratégique',
    icon: Users,
    context: 'Projet lauréat Cyber Humanum Est 2026',
    role: 'Analyste en veille informationnelle',
    tools: ['Curebot', 'Sindup', 'Outils OSINT', 'Excel'],
    objective: 'Détecter désinformation, analyser narratifs et influence',
    result: 'Prix meilleure équipe L2I, méthodologie innovante',
  },
  {
    title: 'Storytelling Digital',
    category: 'Stratégie éditoriale',
    icon: MessageSquare,
    context: 'Développement de récits de marque immersifs',
    role: 'Stratège éditoriale',
    tools: ['Canva', 'Photoshop', 'WordPress', 'Réseaux sociaux'],
    objective: 'Créer des histoires qui connectent la marque à son audience',
    result: 'Amélioration de la perception de marque et fidélisation',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-sm text-primary tracking-wider">PROJETS</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-6">
            Réalisations & projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des projets variés qui illustrent mon expertise digitale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                {/* Corner Pixels */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">{project.title}</h3>
                      <span className="text-xs text-primary">{project.category}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Contexte</div>
                    <p className="text-sm leading-relaxed">{project.context}</p>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Rôle</div>
                    <p className="text-sm text-primary">{project.role}</p>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Outils</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-xs bg-background/50 border border-primary/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Objectif</div>
                    <p className="text-sm leading-relaxed">{project.objective}</p>
                  </div>

                  <div className="pt-3 border-t border-primary/20">
                    <div className="text-xs text-muted-foreground mb-1">Résultat / Valeur créée</div>
                    <p className="text-sm text-primary leading-relaxed">{project.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
