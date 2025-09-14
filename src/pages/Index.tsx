import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SymptomChecker from "@/components/SymptomChecker";
import HealthDashboard from "@/components/HealthDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SymptomChecker />
      <HealthDashboard />
    </div>
  );
};

export default Index;
