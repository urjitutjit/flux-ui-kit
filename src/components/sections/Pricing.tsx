import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups",
      monthlyPrice: 29,
      yearlyPrice: 290,
      badge: null,
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "API access",
        "Mobile apps"
      ],
      cta: "Start Free Trial",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      yearlyPrice: 790,
      badge: "Most Popular",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Advanced API access",
        "Custom integrations",
        "White-label options",
        "Advanced security"
      ],
      cta: "Start Free Trial",
      variant: "primary" as const,
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      badge: "Best Value",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Full API access",
        "Custom development",
        "SSO & SAML",
        "Compliance tools",
        "Custom training",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      variant: "secondary" as const,
      popular: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const period = isYearly ? '/year' : '/month';
    return { price, period };
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (!isYearly) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    const savings = Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
    return savings;
  };

  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2 mb-6 shadow-glass">
            <span className="text-sm font-medium text-accent">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, transparent
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              pricing for everyone
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-full p-1 shadow-glass">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-smooth",
                !isYearly 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-smooth relative",
                isYearly 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const { price, period } = getPrice(plan);
            const savings = getSavings(plan);

            return (
              <div
                key={plan.name}
                className={cn(
                  "relative bg-surface-elevated/80 backdrop-blur-xl border rounded-3xl p-8 shadow-glass transition-all duration-smooth hover:scale-105 animate-fade-in-up",
                  plan.popular 
                    ? "border-primary/50 shadow-glow ring-2 ring-primary/10" 
                    : "border-border/50 hover:border-primary/30"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium shadow-lg",
                      plan.popular 
                        ? "bg-gradient-primary text-primary-foreground" 
                        : "bg-gradient-secondary text-secondary-foreground"
                    )}>
                      {plan.popular && <Star className="w-4 h-4 inline mr-1" />}
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-foreground">
                      ${price}
                    </span>
                    <span className="text-lg text-muted-foreground ml-1">
                      {period}
                    </span>
                  </div>

                  {/* Savings */}
                  {savings && (
                    <div className="text-sm text-success font-medium">
                      Save {savings}% annually
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.variant}
                  size="lg"
                  className="w-full mb-8 group"
                >
                  {plan.cta}
                  {plan.variant !== "outline" && (
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Glow Effect for Popular Plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-5 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-surface-elevated/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-glass max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Need something custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer tailored enterprise solutions with custom features, dedicated support, and flexible deployment options.
            </p>
            <Button variant="outline" size="lg">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;