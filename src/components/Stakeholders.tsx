import { Users, Factory, Store, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stakeholders = [
  {
    icon: Users,
    title: "Farmers & FPOs",
    benefits: [
      "Real-time market prices",
      "Crop advisories & alerts",
      "Direct buyer connections",
      "Credit & insurance access",
    ],
    color: "bg-primary",
  },
  {
    icon: Factory,
    title: "Processors",
    benefits: [
      "Supply chain visibility",
      "Quality verification",
      "Inventory management",
      "Demand forecasting",
    ],
    color: "bg-secondary",
  },
  {
    icon: Store,
    title: "Retailers",
    benefits: [
      "Transparent sourcing",
      "Price optimization",
      "Quality assurance",
      "Logistics coordination",
    ],
    color: "bg-highlight",
  },
  {
    icon: Building2,
    title: "Policymakers",
    benefits: [
      "Data-driven insights",
      "Policy effectiveness tracking",
      "Market monitoring",
      "Resource allocation",
    ],
    color: "bg-tech",
  },
];

export function Stakeholders() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering All
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Stakeholders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collaborative platform bringing together the entire oilseed ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((stakeholder, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl ${stakeholder.color} flex items-center justify-center mb-4`}>
                  <stakeholder.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{stakeholder.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {stakeholder.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">✓</span>
                      {benefit}
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
