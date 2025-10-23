import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Market = () => {
  const commodities = [
    { name: "Mustard Seeds", price: "₹68,500", change: "+2.3%", trend: "up", volume: "12,450 MT" },
    { name: "Sunflower Seeds", price: "₹52,300", change: "-1.2%", trend: "down", volume: "8,230 MT" },
    { name: "Groundnut", price: "₹75,800", change: "+3.8%", trend: "up", volume: "15,670 MT" },
    { name: "Soybean", price: "₹48,900", change: "+0.8%", trend: "up", volume: "18,920 MT" },
    { name: "Sesame", price: "₹125,400", change: "-2.1%", trend: "down", volume: "3,450 MT" },
    { name: "Safflower", price: "₹82,600", change: "+1.5%", trend: "up", volume: "5,670 MT" },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Market Intelligence</h1>
              <p className="text-muted-foreground">Real-time pricing and trading insights</p>
            </div>

            {/* Market Summary */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <DollarSign className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Market Cap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">₹8.5T</div>
                  <p className="text-sm text-primary mt-1">+12.3% YoY</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Trading Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">64.2K MT</div>
                  <p className="text-sm text-primary mt-1">Today</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <TrendingUp className="h-8 w-8 text-highlight mb-2" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Gainers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4</div>
                  <p className="text-sm text-muted-foreground mt-1">Commodities</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <TrendingDown className="h-8 w-8 text-tech mb-2" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Decliners</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2</div>
                  <p className="text-sm text-muted-foreground mt-1">Commodities</p>
                </CardContent>
              </Card>
            </div>

            {/* Live Prices */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Live Market Prices</CardTitle>
                    <CardDescription>Real-time commodity pricing (per metric tonne)</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Refresh
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commodities.map((commodity, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold">{commodity.name}</h4>
                        <p className="text-sm text-muted-foreground">Volume: {commodity.volume}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{commodity.price}</div>
                        <div
                          className={`flex items-center justify-end gap-1 text-sm font-medium ${
                            commodity.trend === "up" ? "text-primary" : "text-destructive"
                          }`}
                        >
                          {commodity.trend === "up" ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          {commodity.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Insights */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Movers</CardTitle>
                  <CardDescription>Highest price changes today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Groundnut</p>
                        <p className="text-sm text-muted-foreground">₹75,800</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-semibold">+3.8%</p>
                        <p className="text-sm text-muted-foreground">+₹2,780</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Mustard Seeds</p>
                        <p className="text-sm text-muted-foreground">₹68,500</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-semibold">+2.3%</p>
                        <p className="text-sm text-muted-foreground">+₹1,540</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">Sesame</p>
                        <p className="text-sm text-muted-foreground">₹125,400</p>
                      </div>
                      <div className="text-right">
                        <p className="text-destructive font-semibold">-2.1%</p>
                        <p className="text-sm text-muted-foreground">-₹2,690</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trading Recommendations</CardTitle>
                  <CardDescription>AI-powered insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Groundnut</span>
                        <span className="text-xs px-2 py-1 bg-primary text-white rounded">BUY</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Strong upward trend expected in Q1</p>
                    </div>
                    <div className="p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Soybean</span>
                        <span className="text-xs px-2 py-1 bg-secondary text-white rounded">HOLD</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Stable market, moderate growth forecast</p>
                    </div>
                    <div className="p-3 bg-muted/50 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Sesame</span>
                        <span className="text-xs px-2 py-1 bg-muted text-foreground rounded">WATCH</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Monitor for potential recovery signals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Market;
