import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import { CtaBanner } from "@/components/ui/cta-banner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Logo Carousel */}
      <LogoCarousel />
      
      {/* Features Section */}
      <Features />
      
      {/* CTA Banner */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CtaBanner
            variant="gradient"
            title="Ready to transform your workflow?"
            description="Join thousands of companies already scaling with SaasPage. Start your free trial today and experience the difference."
            primaryText="Start Free Trial"
            secondaryText="Book Demo"
            onPrimaryClick={() => console.log("Start trial clicked")}
            onSecondaryClick={() => console.log("Book demo clicked")}
          />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CtaBanner
            variant="glass"
            title="Questions? We're here to help"
            description="Our team of experts is ready to help you get started and make the most of your SaasPage experience."
            primaryText="Contact Support"
            secondaryText="View Documentation"
            onPrimaryClick={() => console.log("Contact support clicked")}
            onSecondaryClick={() => console.log("Documentation clicked")}
          />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
