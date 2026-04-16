import { motion } from 'motion/react';

interface PixelInputProps {
  type?: 'text' | 'email' | 'tel';
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function PixelInput({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
}: PixelInputProps) {
  return (
    <div className="relative group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full px-4 py-3
          bg-input-background/80 backdrop-blur-sm
          border-2 border-primary/20
          text-foreground placeholder:text-muted-foreground
          focus:outline-none focus:border-primary/50
          transition-all duration-300
          hover:border-primary/30
          font-mono text-sm
        "
      />
      {/* Pixel corners */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-primary/30 opacity-0 group-focus-within:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-secondary/30 opacity-0 group-focus-within:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent/30 opacity-0 group-focus-within:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary/30 opacity-0 group-focus-within:opacity-100 transition-opacity" />

      {/* Focus glow */}
      <motion.div
        className="absolute inset-0 border-2 border-primary/0 group-focus-within:border-primary/20 pointer-events-none transition-colors duration-300"
        style={{ margin: '-2px' }}
      />
    </div>
  );
}

interface PixelTextareaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

export function PixelTextarea({
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 5,
}: PixelTextareaProps) {
  return (
    <div className="relative group">
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="
          w-full px-4 py-3
          bg-input-background/80 backdrop-blur-sm
          border-2 border-primary/20
          text-foreground placeholder:text-muted-foreground
          focus:outline-none focus:border-primary/50
          transition-all duration-300
          hover:border-primary/30
          font-mono text-sm
          resize-none
        "
      />
      {/* Pixel corners */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-primary/30 opacity-0 group-focus-within:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-secondary/30 opacity-0 group-focus-within:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent/30 opacity-0 group-focus-within:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary/30 opacity-0 group-focus-within:opacity-100 transition-opacity" />

      {/* Focus glow */}
      <motion.div
        className="absolute inset-0 border-2 border-primary/0 group-focus-within:border-primary/20 pointer-events-none transition-colors duration-300"
        style={{ margin: '-2px' }}
      />
    </div>
  );
}
