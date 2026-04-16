import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface PixelCardProps {
  children: ReactNode;
  icon?: LucideIcon;
  title?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  delay?: number;
}

export function PixelCard({
  children,
  icon: Icon,
  title,
  variant = 'primary',
  className = '',
  delay = 0,
}: PixelCardProps) {
  const colors = {
    primary: {
      border: 'border-primary/30 hover:border-primary/50',
      glow: 'from-primary/10 to-secondary/10',
      iconBg: 'bg-primary/15 border-primary/40',
      iconColor: 'text-primary',
      accent: 'bg-primary',
    },
    secondary: {
      border: 'border-secondary/30 hover:border-secondary/50',
      glow: 'from-secondary/10 to-accent/10',
      iconBg: 'bg-secondary/15 border-secondary/40',
      iconColor: 'text-secondary',
      accent: 'bg-secondary',
    },
    accent: {
      border: 'border-accent/30 hover:border-accent/50',
      glow: 'from-accent/10 to-primary/10',
      iconBg: 'bg-accent/15 border-accent/40',
      iconColor: 'text-accent',
      accent: 'bg-accent',
    },
  };

  const color = colors[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      className={`group relative ${className}`}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${color.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

      <div className={`relative p-6 bg-card/70 backdrop-blur-sm border-2 ${color.border} transition-all duration-500 h-full overflow-hidden`}>
        {/* Animated background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color.glow} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500`} />

        {/* Voxel Corners */}
        <div className={`absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 ${color.accent.replace('bg-', 'border-')}`} />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-secondary" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-accent" />
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 ${color.accent.replace('bg-', 'border-')}`} />

        {/* Pixel accents */}
        <div className={`absolute top-1.5 left-1.5 w-1.5 h-1.5 ${color.accent} opacity-40`} />
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-secondary/40" />

        {/* Header with icon */}
        {(Icon || title) && (
          <div className="relative flex items-center gap-4 mb-6">
            {Icon && (
              <div className={`w-12 h-12 ${color.iconBg} border-2 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                <Icon className={`w-6 h-6 ${color.iconColor}`} />
                <div className={`absolute bottom-0 right-0 w-2 h-2 ${color.accent}`} />
              </div>
            )}
            {title && (
              <h3 className="text-lg font-display">{title}</h3>
            )}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
