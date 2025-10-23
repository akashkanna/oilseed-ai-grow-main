import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react";

const Analytics = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">AI-Powered Analytics</h1>
              <p className="text-muted-foreground">Predictive insights and data-driven decision making</p>
            </div>

            <Tabs defaultValue="demand" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="demand">Demand</TabsTrigger>
                <TabsTrigger value="price">Price</TabsTrigger>
                <TabsTrigger value="yield">Yield</TabsTrigger>
              </TabsList>

              <TabsContent value="demand" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Demand Forecast
                      </CardTitle>
                      <CardDescription>Next 6 months prediction</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                          <BarChart3 className="h-20 w-20 text-muted-foreground/30" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Current Demand</p>
                            <p className="text-2xl font-bold">2.3M MT</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Projected (6M)</p>
                            <p className="text-2xl font-bold text-primary">2.8M MT</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-secondary" />
                        Regional Distribution
                      </CardTitle>
                      <CardDescription>Demand by state</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                          <PieChart className="h-20 w-20 text-muted-foreground/30" />
                        </div>
                        <div className="space-y-2 pt-4">
                          {[
                            { state: "Maharashtra", percent: 25, color: "bg-primary" },
                            { state: "Gujarat", percent: 20, color: "bg-secondary" },
                            { state: "Rajasthan", percent: 18, color: "bg-highlight" },
                            { state: "Others", percent: 37, color: "bg-tech" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                                <span className="text-sm">{item.state}</span>
                              </div>
                              <span className="text-sm font-semibold">{item.percent}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Model Insights</CardTitle>
                    <CardDescription>Machine learning predictions with 94% accuracy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <p className="text-sm text-muted-foreground mb-2">Peak Demand Month</p>
                        <p className="text-2xl font-bold">December</p>
                        <p className="text-sm text-primary mt-1">+34% from average</p>
                      </div>
                      <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                        <p className="text-sm text-muted-foreground mb-2">Growth Rate</p>
                        <p className="text-2xl font-bold">18.5%</p>
                        <p className="text-sm text-secondary mt-1">Year-over-year</p>
                      </div>
                      <div className="bg-highlight/5 p-4 rounded-lg border border-highlight/20">
                        <p className="text-sm text-muted-foreground mb-2">Model Confidence</p>
                        <p className="text-2xl font-bold">94%</p>
                        <p className="text-sm text-highlight mt-1">Accuracy score</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="price" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-highlight" />
                      Price Trend Analysis
                    </CardTitle>
                    <CardDescription>Historical and predicted pricing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center mb-6">
                      <Activity className="h-24 w-24 text-muted-foreground/30" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Current Price</p>
                        <p className="text-2xl font-bold">₹68,500</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-sm text-muted-foreground mb-1">30-Day Forecast</p>
                        <p className="text-2xl font-bold text-primary">₹71,200</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Volatility</p>
                        <p className="text-2xl font-bold">Low</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="yield" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-tech" />
                      Yield Prediction
                    </CardTitle>
                    <CardDescription>Crop yield forecasting by region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-20 w-20 text-muted-foreground/30" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { crop: "Mustard", current: "1,450", predicted: "1,680", unit: "kg/hectare" },
                          { crop: "Sunflower", current: "1,250", predicted: "1,420", unit: "kg/hectare" },
                          { crop: "Groundnut", current: "1,820", predicted: "2,050", unit: "kg/hectare" },
                          { crop: "Soybean", current: "1,150", predicted: "1,290", unit: "kg/hectare" },
                        ].map((item, idx) => (
                          <div key={idx} className="p-4 border rounded-lg">
                            <h4 className="font-semibold mb-3">{item.crop}</h4>
                            <div className="flex justify-between items-end">
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Current Yield</p>
                                <p className="text-xl font-bold">{item.current}</p>
                                <p className="text-xs text-muted-foreground">{item.unit}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-muted-foreground mb-1">Predicted</p>
                                <p className="text-xl font-bold text-primary">{item.predicted}</p>
                                <p className="text-xs text-primary">+{Math.round((parseInt(item.predicted) - parseInt(item.current)) / parseInt(item.current) * 100)}%</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Analytics;
