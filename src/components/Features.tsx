import { Brain, Satellite, Link2, TrendingUp, MapPin, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Predictive Analytics",
    description: "Machine learning models for demand, supply, and price forecasting with 95% accuracy.",
    color: "text-highlight",
  },
  {
    icon: Satellite,
    title: "Satellite & IoT Integration",
    description: "Real-time crop monitoring, weather advisories, and pest detection using satellite imagery.",
    color: "text-tech",
  },
  {
    icon: Link2,
    title: "Blockchain Traceability",
    description: "Farm-to-fork transparency ensuring quality and authenticity across the supply chain.",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Live market prices, demand trends, and automated trading recommendations.",
    color: "text-secondary",
  },
  {
    icon: MapPin,
    title: "Smart Logistics",
    description: "Optimized routing, warehouse mapping, and automated inventory management.",
    color: "text-highlight",
  },
  {
    icon: Shield,
    title: "Integrated Credit & Insurance",
    description: "Seamless access to credit facilities and crop insurance based on real-time data.",
    color: "text-tech",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Value Chain
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end platform addressing fragmentation, post-harvest losses, and market inefficiencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-tech flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
