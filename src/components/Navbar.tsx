import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Analytics", href: "/analytics" },
  { name: "Supply Chain", href: "/supply-chain" },
  { name: "Market", href: "/market" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-hero bg-clip-text text-transparent">
              OilSeed AI Platform
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="default" size="sm" className="hidden md:inline-flex bg-gradient-cta hover:opacity-90">
              Get Started
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-gradient-cta hover:opacity-90 mt-4">
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
