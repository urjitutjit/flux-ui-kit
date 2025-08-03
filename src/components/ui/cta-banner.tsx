import { Button } from "./button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaBannerProps {
  title: string;
  description: string;
  primaryText: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: "default" | "gradient" | "glass";
}

const CtaBanner = ({
  title,
  description,
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  variant = "default"
}: CtaBannerProps) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-primary";
      case "glass":
        return "bg-surface-elevated/80 backdrop-blur-xl border border-border/50";
      default:
        return "bg-surface-elevated";
    }
  };

  const getTextClass = () => {
    switch (variant) {
      case "gradient":
        return "text-primary-foreground";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className={`
      relative overflow-hidden rounded-2xl p-8 sm:p-12 shadow-glass 
      ${getBackgroundClass()}
    `}>
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-mesh opacity-30 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>

        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${getTextClass()}`}>
          {title}
        </h2>

        {/* Description */}
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${
          variant === "gradient" ? "text-primary-foreground/90" : "text-muted-foreground"
        }`}>
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant={variant === "gradient" ? "glass" : "primary"}
            size="lg"
            onClick={onPrimaryClick}
            className="group"
          >
            {primaryText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {secondaryText && (
            <Button
              variant="outline"
              size="lg"
              onClick={onSecondaryClick}
            >
              {secondaryText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export { CtaBanner };