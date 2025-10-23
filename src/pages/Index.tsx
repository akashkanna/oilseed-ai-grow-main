import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { TechStack } from "@/components/TechStack";
import { Stakeholders } from "@/components/Stakeholders";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <Features />
        <TechStack />
        <Stakeholders />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
