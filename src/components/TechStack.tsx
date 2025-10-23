import { Database, Cpu, Link2, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techLayers = [
  {
    icon: Database,
    title: "Data Collection Layer",
    items: [
      "Satellite imagery & IoT sensors",
      "Market APIs & price feeds",
      "Warehouse & storage data",
      "Weather & soil monitoring",
    ],
  },
  {
    icon: Cpu,
    title: "AI/ML Processing",
    items: [
      "Yield prediction models",
      "Demand forecasting algorithms",
      "Price trend analysis",
      "Pest & disease detection",
    ],
  },
  {
    icon: Link2,
    title: "Blockchain Layer",
    items: [
      "Immutable transaction records",
      "Smart contract automation",
      "Supply chain verification",
      "Quality assurance tracking",
    ],
  },
  {
    icon: Smartphone,
    title: "Platform Interface",
    items: [
      "Multi-stakeholder dashboards",
      "Mobile-first design",
      "Real-time notifications",
      "Analytics & reporting",
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-24 bg-tech text-tech-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical Architecture
          </h2>
          <p className="text-xl text-tech-foreground/80 max-w-2xl mx-auto">
            Built on cutting-edge technology for scalability, security, and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techLayers.map((layer, index) => (
            <Card key={index} className="bg-card/10 backdrop-blur-sm border-tech-foreground/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-cta flex items-center justify-center mb-4">
                  <layer.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">{layer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {layer.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-tech-foreground/70 flex gap-2">
                      <span className="text-secondary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
