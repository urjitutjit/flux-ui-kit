import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-3d.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2 mb-6 shadow-glass">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm text-muted-foreground">Trusted by 50,000+ companies</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Scale Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Beyond Limits
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              The all-in-one platform that automates your workflows, amplifies your team's productivity, and accelerates growth with intelligent insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="primary" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-foreground">4.9/5</span>
                <span>rating</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-foreground">99.9%</span>
                <span>uptime</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-foreground">SOC 2</span>
                <span>compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 scale-105" />
              
              {/* Main Image */}
              <div className="relative bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-glass">
                <img 
                  src={heroImage} 
                  alt="3D Abstract Illustration" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-primary rounded-lg p-3 shadow-glow animate-float">
                <div className="w-6 h-6 bg-primary-foreground rounded opacity-80" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-secondary rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-6 bg-secondary-foreground rounded opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;