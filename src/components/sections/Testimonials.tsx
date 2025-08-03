import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      content: "FluxSaaS transformed our entire workflow. We've seen a 300% increase in productivity and our team collaboration has never been better. The platform is intuitive and powerful.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechCorp",
      avatar: "SC",
      rating: 5
    },
    {
      id: 2,
      content: "The analytics capabilities are game-changing. We now have real-time insights that drive our decision-making process. Customer satisfaction has improved by 45% since implementation.",
      author: "Marcus Rodriguez",
      role: "CEO",
      company: "InnovateAI",
      avatar: "MR",
      rating: 5
    },
    {
      id: 3,
      content: "Security was our biggest concern, but FluxSaaS exceeded all expectations. SOC 2 compliance and enterprise-grade protection give us complete peace of mind.",
      author: "Emily Watson",
      role: "CTO",
      company: "CloudScale",
      avatar: "EW",
      rating: 5
    },
    {
      id: 4,
      content: "The scalability is remarkable. We've grown from 50 to 5,000 users seamlessly. The platform adapts to our needs without any performance degradation.",
      author: "David Kim",
      role: "Head of Engineering",
      company: "DataFlow",
      avatar: "DK",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2 mb-6 shadow-glass">
            <span className="text-sm font-medium text-secondary">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What our customers
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-secondary">
              are saying
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how FluxSaaS is transforming businesses across industries.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 sm:p-12 shadow-glass overflow-hidden animate-scale-in">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-secondary/5 rounded-full blur-3xl" />
            
            <div className="relative">
              {/* Rating Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-foreground text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-lg font-bold text-primary-foreground">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="glass"
              size="icon"
              onClick={goToPrev}
              className="shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-smooth",
                    index === currentIndex 
                      ? "bg-primary shadow-glow" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>

            <Button
              variant="glass"
              size="icon"
              onClick={goToNext}
              className="shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "4.9/5", label: "Customer Rating" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;