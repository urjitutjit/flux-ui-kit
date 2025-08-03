import { Zap, Shield, BarChart3, Rocket, Users, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure and edge computing network.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Enterprise Security", 
      description: "Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
      color: "text-secondary"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with real-time analytics, custom dashboards, and predictive intelligence.",
      color: "text-accent"
    },
    {
      icon: Rocket,
      title: "Rapid Scaling",
      description: "Scale seamlessly from startup to enterprise with auto-scaling infrastructure and global CDN.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Streamline teamwork with integrated communication tools, shared workspaces, and real-time sync.",
      color: "text-secondary"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy worldwide with multi-region support, localization features, and 99.9% uptime SLA.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2 mb-6 shadow-glass">
            <span className="text-sm font-medium text-primary">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              accelerate growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to help your team work smarter, move faster, and achieve more with less effort.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-glass hover:shadow-xl transition-all duration-smooth hover:scale-105 animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-smooth blur-xl" />
              
              {/* Icon */}
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md",
                feature.color === "text-primary" && "bg-primary/10",
                feature.color === "text-secondary" && "bg-secondary/10", 
                feature.color === "text-accent" && "bg-accent/10"
              )}>
                <feature.icon className={cn("w-6 h-6", feature.color)} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-smooth">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-smooth transform translate-x-2 group-hover:translate-x-0">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-primary-foreground transform rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Ready to experience the difference?
          </p>
          <div className="inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-surface-elevated shadow-lg"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Join 50,000+ companies</p>
              <p className="text-xs text-muted-foreground">Already scaling with SaasPage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;