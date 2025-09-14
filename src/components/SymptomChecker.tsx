import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";

const commonSymptoms = [
  { id: "fever", label: "Fever", category: "general" },
  { id: "headache", label: "Headache", category: "neurological" },
  { id: "cough", label: "Cough", category: "respiratory" },
  { id: "fatigue", label: "Fatigue", category: "general" },
  { id: "nausea", label: "Nausea", category: "gastrointestinal" },
  { id: "diarrhea", label: "Diarrhea", category: "gastrointestinal" },
  { id: "muscle-aches", label: "Muscle Aches", category: "musculoskeletal" },
  { id: "sore-throat", label: "Sore Throat", category: "respiratory" },
  { id: "runny-nose", label: "Runny Nose", category: "respiratory" },
  { id: "chest-pain", label: "Chest Pain", category: "cardiac" },
  { id: "dizziness", label: "Dizziness", category: "neurological" },
  { id: "rash", label: "Skin Rash", category: "dermatological" },
];

const mockPredictions = [
  {
    condition: "Common Cold",
    confidence: 87,
    severity: "low",
    description: "Viral upper respiratory infection",
    recommendations: ["Rest and hydration", "OTC pain relievers", "Monitor symptoms"]
  },
  {
    condition: "Seasonal Allergies",
    confidence: 73,
    severity: "low", 
    description: "Allergic reaction to environmental triggers",
    recommendations: ["Avoid allergens", "Antihistamines", "Consider allergy testing"]
  },
  {
    condition: "Viral Gastroenteritis",
    confidence: 65,
    severity: "medium",
    description: "Stomach flu with GI symptoms",
    recommendations: ["Stay hydrated", "BRAT diet", "Seek care if severe"]
  }
];

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const analyzeSymptoms = async () => {
    if (selectedSymptoms.length === 0) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate AI analysis with progress
    for (let i = 0; i <= 100; i += 5) {
      setAnalysisProgress(i);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low": return "severity-low";
      case "medium": return "severity-medium";
      case "high": return "severity-high";
      default: return "severity-low";
    }
  };

  return (
    <section id="symptom-checker" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">AI Symptom Checker</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your symptoms below and let our advanced AI provide personalized health insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-medical mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Select Your Symptoms
              </CardTitle>
              <CardDescription>
                Choose all symptoms you're currently experiencing. The more accurate information you provide, 
                the better our AI can assist you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {commonSymptoms.map((symptom) => (
                  <div
                    key={symptom.id}
                    className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => handleSymptomToggle(symptom.id)}
                  >
                    <Checkbox
                      id={symptom.id}
                      checked={selectedSymptoms.includes(symptom.id)}
                      onChange={() => handleSymptomToggle(symptom.id)}
                    />
                    <label htmlFor={symptom.id} className="font-medium cursor-pointer flex-1">
                      {symptom.label}
                    </label>
                  </div>
                ))}
              </div>

              {selectedSymptoms.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Selected symptoms ({selectedSymptoms.length}):
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSymptoms.map((symptomId) => {
                      const symptom = commonSymptoms.find(s => s.id === symptomId);
                      return (
                        <Badge key={symptomId} variant="secondary" className="px-3 py-1">
                          {symptom?.label}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}

              <Button
                onClick={analyzeSymptoms}
                disabled={selectedSymptoms.length === 0 || isAnalyzing}
                className="w-full btn-hero"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <TrendingUp className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing Symptoms...
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Analyze Symptoms ({selectedSymptoms.length})
                  </>
                )}
              </Button>

              {isAnalyzing && (
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>AI Analysis Progress</span>
                    <span>{analysisProgress}%</span>
                  </div>
                  <Progress value={analysisProgress} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>

          {showResults && (
            <Card className="card-medical animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  AI Analysis Results
                </CardTitle>
                <CardDescription>
                  Based on your symptoms, here are the most likely conditions. 
                  This is not a medical diagnosis - please consult a healthcare professional.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockPredictions.map((prediction, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{prediction.condition}</h3>
                        <div className="flex items-center gap-3">
                          <Badge className={getSeverityColor(prediction.severity)}>
                            {prediction.severity.toUpperCase()}
                          </Badge>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{prediction.confidence}%</div>
                            <div className="text-sm text-muted-foreground">Confidence</div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{prediction.description}</p>
                      
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Recommendations:
                        </h4>
                        <ul className="space-y-1">
                          {prediction.recommendations.map((rec, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-success" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg border-l-4 border-accent">
                  <p className="text-sm">
                    <strong>Medical Disclaimer:</strong> This AI analysis is for informational purposes only 
                    and should not replace professional medical advice. Always consult with a qualified 
                    healthcare provider for proper diagnosis and treatment.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker;