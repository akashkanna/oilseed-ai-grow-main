import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, Cloud, Droplets, Wind, Sun } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Dashboard Overview</h1>
              <p className="text-muted-foreground">Real-time insights across the oilseed value chain</p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8.5M</div>
                  <p className="text-sm text-muted-foreground mt-1">Metric Tonnes</p>
                  <div className="flex items-center gap-2 mt-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+12.3%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Market Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">₹68,500</div>
                  <p className="text-sm text-muted-foreground mt-1">Per Tonne</p>
                  <div className="flex items-center gap-2 mt-2 text-secondary">
                    <TrendingDown className="h-4 w-4" />
                    <span className="text-sm font-medium">-2.1%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Farmers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">45,230</div>
                  <p className="text-sm text-muted-foreground mt-1">Registered</p>
                  <div className="flex items-center gap-2 mt-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+8.7%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Supply Chain Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">92%</div>
                  <p className="text-sm text-muted-foreground mt-1">Avg. Efficiency</p>
                  <div className="flex items-center gap-2 mt-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+5.2%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Weather Forecast */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Weather Advisory</CardTitle>
                  <CardDescription>5-day forecast for key regions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { day: "Today", temp: "32°C", condition: "Sunny", icon: Sun, color: "text-secondary" },
                    { day: "Tomorrow", temp: "28°C", condition: "Cloudy", icon: Cloud, color: "text-muted-foreground" },
                    { day: "Wed", temp: "25°C", condition: "Rain", icon: Droplets, color: "text-primary" },
                    { day: "Thu", temp: "27°C", condition: "Windy", icon: Wind, color: "text-tech" },
                    { day: "Fri", temp: "30°C", condition: "Sunny", icon: Sun, color: "text-secondary" },
                  ].map((forecast, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <forecast.icon className={`h-5 w-5 ${forecast.color}`} />
                        <span className="font-medium">{forecast.day}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{forecast.temp}</div>
                        <div className="text-sm text-muted-foreground">{forecast.condition}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Crop Health */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Crop Health Status</CardTitle>
                  <CardDescription>AI-powered monitoring across regions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { crop: "Mustard", region: "Punjab", health: 95, status: "Excellent", color: "bg-primary" },
                    { crop: "Sunflower", region: "Karnataka", health: 78, status: "Good", color: "bg-secondary" },
                    { crop: "Groundnut", region: "Gujarat", health: 62, status: "Fair", color: "bg-highlight" },
                    { crop: "Soybean", region: "Madhya Pradesh", health: 88, status: "Good", color: "bg-primary" },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-semibold">{item.crop}</div>
                          <div className="text-sm text-muted-foreground">{item.region}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{item.health}%</div>
                          <div className="text-sm text-muted-foreground">{item.status}</div>
                        </div>
                      </div>
                      <Progress value={item.health} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Alerts & Notifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Alerts</CardTitle>
                  <CardDescription>Critical notifications requiring attention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { type: "warning", message: "Pest detection in Region 3A - Immediate action required", time: "2 hours ago" },
                    { type: "info", message: "New market price update for Sunflower seeds", time: "5 hours ago" },
                    { type: "success", message: "Harvest completed successfully in Zone 12", time: "1 day ago" },
                  ].map((alert, idx) => (
                    <div key={idx} className="flex gap-3">
                      {alert.type === "warning" && <AlertTriangle className="h-5 w-5 text-highlight flex-shrink-0 mt-0.5" />}
                      {alert.type === "success" && <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />}
                      {alert.type === "info" && <TrendingUp className="h-5 w-5 text-tech flex-shrink-0 mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    View Market Prices
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Track Shipment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Generate Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Contact Support
                  </Button>
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

export default Dashboard;
