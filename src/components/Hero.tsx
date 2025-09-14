import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Heart, Shield, Stethoscope } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Your Trusted AI Health Companion</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Meet{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                CureSight
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Advanced AI-powered health insights, symptom analysis, and personalized wellness guidance. 
              Your journey to better health starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-4 animate-pulse-glow"
                onClick={() => document.getElementById('symptom-checker')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Brain className="w-6 h-6 mr-2" />
                Check Symptoms Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
              >
                <Heart className="w-6 h-6 mr-2" />
                Explore Features
              </Button>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
              <Brain className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Diagnosis</h3>
              <p className="text-blue-100">Advanced symptom analysis with 95% accuracy</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
              <Stethoscope className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Find Doctors</h3>
              <p className="text-blue-100">Connect with verified healthcare professionals</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wellness Hub</h3>
              <p className="text-blue-100">Personalized health and fitness guidance</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;