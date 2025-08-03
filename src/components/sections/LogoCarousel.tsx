import { useEffect, useState } from "react";

const LogoCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('logo-carousel');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateAI", logo: "IA" },
    { name: "CloudScale", logo: "CS" },
    { name: "DataFlow", logo: "DF" },
    { name: "NextGen", logo: "NG" },
    { name: "AutoSync", logo: "AS" },
    { name: "SmartHub", logo: "SH" },
    { name: "FutureOps", logo: "FO" },
  ];

  return (
    <section id="logo-carousel" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase mb-8">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`group flex items-center justify-center transition-all duration-slow ${
                isVisible 
                  ? 'animate-fade-in opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                animationFillMode: 'forwards'
              }}
            >
              {/* Company Logo */}
              <div className="w-16 h-16 bg-gradient-subtle border border-border/30 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-smooth group-hover:bg-surface-elevated">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {company.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;