import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-oilseed.jpg";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Oilseed farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-md">
            <Zap className="h-4 w-4 text-highlight" />
            <span className="text-sm font-medium">AI-Powered Value Chain Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Transforming India's
            <span className="block bg-gradient-to-r from-secondary to-highlight bg-clip-text text-transparent">
              Oilseed Economy
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Unified platform integrating farmers, processors, and retailers with AI-driven insights, 
            blockchain traceability, and real-time market intelligence for oilseed self-reliance.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-white shadow-lg">
              Explore Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <TrendingUp className="h-8 w-8 text-highlight mb-2" />
              <div className="text-2xl font-bold text-foreground">60%</div>
              <div className="text-sm text-muted-foreground">Import Reduction Target</div>
            </div>
            <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Blockchain Traced</div>
            </div>
            <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <Zap className="h-8 w-8 text-secondary mb-2" />
              <div className="text-2xl font-bold text-foreground">AI</div>
              <div className="text-sm text-muted-foreground">Powered Analytics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
