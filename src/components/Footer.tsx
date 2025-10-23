import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-lg">OilSeed AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered platform for India's oilseed self-reliance
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/dashboard" className="hover:text-primary">Dashboard</Link></li>
              <li><Link to="/analytics" className="hover:text-primary">Analytics</Link></li>
              <li><Link to="/supply-chain" className="hover:text-primary">Supply Chain</Link></li>
              <li><Link to="/market" className="hover:text-primary">Market</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Documentation</a></li>
              <li><a href="#" className="hover:text-primary">API Reference</a></li>
              <li><a href="#" className="hover:text-primary">Support</a></li>
              <li><a href="#" className="hover:text-primary">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 OilSeed AI Platform - Smart India Hackathon 2025 | Team: Hacker Squad</p>
        </div>
      </div>
    </footer>
  );
}
