import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, Truck, Warehouse, CheckCircle2, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SupplyChain = () => {
  const shipments = [
    { id: "SH2025001", origin: "Punjab Farm Co-op", destination: "Mumbai Processing Unit", status: "In Transit", progress: 65 },
    { id: "SH2025002", origin: "Gujarat FPO", destination: "Delhi Warehouse", status: "Delivered", progress: 100 },
    { id: "SH2025003", origin: "Karnataka Farms", destination: "Bangalore Retail", status: "Processing", progress: 35 },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Supply Chain Tracking</h1>
              <p className="text-muted-foreground">Blockchain-powered transparency from farm to fork</p>
            </div>

            {/* Overview Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <Package className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Shipments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">847</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <Truck className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">In Transit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">523</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <Warehouse className="h-8 w-8 text-highlight mb-2" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Warehouses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">124</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CheckCircle2 className="h-8 w-8 text-tech mb-2" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Delivered Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">89</div>
                </CardContent>
              </Card>
            </div>

            {/* Blockchain Traceability */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Blockchain Traceability</CardTitle>
                <CardDescription>Immutable record of product journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { stage: "Farm Origin", location: "Punjab Co-op #342", date: "Jan 15, 2025", verified: true, icon: MapPin },
                    { stage: "Quality Check", location: "Regional QC Center", date: "Jan 16, 2025", verified: true, icon: CheckCircle2 },
                    { stage: "Processing", location: "Mumbai Processing Unit", date: "Jan 18, 2025", verified: true, icon: Package },
                    { stage: "Distribution", location: "Central Warehouse", date: "Jan 20, 2025", verified: true, icon: Warehouse },
                    { stage: "Retail", location: "Final Destination", date: "Jan 22, 2025", verified: false, icon: Truck },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${item.verified ? 'bg-primary/10' : 'bg-muted'}`}>
                        <item.icon className={`h-5 w-5 ${item.verified ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{item.stage}</h4>
                          {item.verified ? (
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-muted">
                              Pending
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Shipments */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Shipments</CardTitle>
                <CardDescription>Track your orders in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {shipments.map((shipment, idx) => (
                    <div key={idx} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{shipment.id}</h4>
                          <p className="text-sm text-muted-foreground">{shipment.origin} → {shipment.destination}</p>
                        </div>
                        <Badge
                          variant={shipment.status === "Delivered" ? "default" : "outline"}
                          className={
                            shipment.status === "Delivered"
                              ? "bg-primary/10 text-primary border-primary/20"
                              : shipment.status === "In Transit"
                              ? "bg-secondary/10 text-secondary border-secondary/20"
                              : "bg-muted"
                          }
                        >
                          {shipment.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{shipment.progress}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-hero transition-all"
                            style={{ width: `${shipment.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default SupplyChain;
