import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  "India imports 55-60% of edible oils despite increased production",
  "Fragmented value chain with poor stakeholder coordination",
  "High post-harvest losses and inefficient logistics",
  "Lack of real-time market, storage, and demand data",
];

const solutions = [
  "Unified AI platform integrating all stakeholders",
  "Predictive analytics for demand, supply & pricing",
  "Satellite & weather-driven crop advisories",
  "Blockchain-based farm-to-fork traceability",
  "Smart logistics with warehouse mapping",
];

export function ProblemSolution() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Card */}
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-destructive/10 p-2 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Current Challenges</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solution Card */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Solution</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
