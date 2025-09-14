import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Search, ShoppingCart, Star, ExternalLink, Pill, Heart, Zap } from 'lucide-react';

const mockMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    genericName: "Acetaminophen",
    category: "Pain Relief",
    manufacturer: "Cipla",
    price: 45,
    mrp: 60,
    discount: 25,
    rating: 4.2,
    reviews: 1847,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    uses: ["Fever", "Headache", "Pain Relief"],
    prescription: false,
    inStock: true,
    fastDelivery: true
  },
  {
    id: 2,
    name: "Vitamin D3 60K",
    genericName: "Cholecalciferol",
    category: "Vitamins",
    manufacturer: "Sun Pharma",
    price: 120,
    mrp: 150,
    discount: 20,
    rating: 4.5,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=300&fit=crop",
    uses: ["Vitamin D Deficiency", "Bone Health"],
    prescription: false,
    inStock: true,
    fastDelivery: true
  },
  {
    id: 3,
    name: "Crocin Advance",
    genericName: "Paracetamol",
    category: "Pain Relief",
    manufacturer: "GSK",
    price: 25,
    mrp: 30,
    discount: 17,
    rating: 4.1,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
    uses: ["Fever", "Cold", "Headache"],
    prescription: false,
    inStock: true,
    fastDelivery: false
  },
  {
    id: 4,
    name: "Azithromycin 500mg",
    genericName: "Azithromycin",
    category: "Antibiotics",
    manufacturer: "Pfizer",
    price: 180,
    mrp: 220,
    discount: 18,
    rating: 4.3,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8bd6?w=300&h=300&fit=crop",
    uses: ["Bacterial Infections", "Respiratory Infections"],
    prescription: true,
    inStock: true,
    fastDelivery: true
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil",
    genericName: "Omega-3 Fatty Acids",
    category: "Supplements",
    manufacturer: "Himalaya",
    price: 299,
    mrp: 399,
    discount: 25,
    rating: 4.4,
    reviews: 1123,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
    uses: ["Heart Health", "Brain Function", "Joint Health"],
    prescription: false,
    inStock: true,
    fastDelivery: true
  },
  {
    id: 6,
    name: "Cetirizine 10mg",
    genericName: "Cetirizine HCl",
    category: "Allergy",
    manufacturer: "Dr. Reddy's",
    price: 35,
    mrp: 45,
    discount: 22,
    rating: 4.0,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=300&h=300&fit=crop",
    uses: ["Allergic Rhinitis", "Urticaria", "Skin Allergies"],
    prescription: false,
    inStock: false,
    fastDelivery: false
  }
];

const categories = [
  "All Categories",
  "Pain Relief", 
  "Vitamins",
  "Antibiotics",
  "Supplements",
  "Allergy",
  "Diabetes Care",
  "Heart Care"
];

const MedicineStore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredMedicines, setFilteredMedicines] = useState(mockMedicines);

  const handleSearch = () => {
    let filtered = mockMedicines;
    
    if (searchQuery) {
      filtered = filtered.filter(medicine => 
        medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.uses.some(use => use.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(medicine => medicine.category === selectedCategory);
    }
    
    setFilteredMedicines(filtered);
  };

  React.useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Pain Relief": return <Zap className="h-4 w-4" />;
      case "Vitamins": return <Heart className="h-4 w-4" />;
      case "Supplements": return <Heart className="h-4 w-4" />;
      default: return <Pill className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-healing-50">
      {/* Header */}
      <div className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-medical-600 hover:text-medical-700 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-bold text-medical-900">Medicine Store</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8 shadow-soft border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-medical-900">Search Medicines</CardTitle>
            <CardDescription>Find medicines, supplements, and healthcare products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medical-400 h-4 w-4" />
                <Input
                  placeholder="Search by medicine name, generic name, or condition"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={handleSearch} className="w-full md:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((medicine) => (
            <Card key={medicine.id} className="shadow-soft hover:shadow-glow transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={medicine.image}
                    alt={medicine.name}
                    className="w-16 h-16 rounded-lg object-cover border border-medical-200"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg text-medical-900">{medicine.name}</CardTitle>
                    <CardDescription className="text-medical-600">{medicine.genericName}</CardDescription>
                    <div className="flex items-center gap-2 mt-1">
                      {getCategoryIcon(medicine.category)}
                      <Badge variant="secondary" className="text-xs">
                        {medicine.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{medicine.rating}</span>
                  <span className="text-sm text-medical-500">({medicine.reviews} reviews)</span>
                </div>

                <div className="text-sm text-medical-600">
                  <span className="font-medium">Uses:</span>{" "}
                  {medicine.uses.join(", ")}
                </div>

                <div className="text-sm text-medical-500">
                  <span className="font-medium">Manufacturer:</span> {medicine.manufacturer}
                </div>

                <div className="flex flex-wrap gap-1">
                  {medicine.prescription && (
                    <Badge variant="destructive" className="text-xs">
                      Prescription Required
                    </Badge>
                  )}
                  {medicine.fastDelivery && (
                    <Badge variant="default" className="text-xs">
                      Fast Delivery
                    </Badge>
                  )}
                  {!medicine.inStock && (
                    <Badge variant="secondary" className="text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-medical-900">₹{medicine.price}</span>
                      <span className="text-sm text-medical-500 line-through">₹{medicine.mrp}</span>
                    </div>
                    <div className="text-xs text-healing-600 font-medium">
                      {medicine.discount}% OFF
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1" 
                    disabled={!medicine.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {medicine.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Buy on 1mg
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <div className="text-medical-400 mb-2">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-medical-900 mb-2">No medicines found</h3>
            <p className="text-medical-600">Try adjusting your search criteria or browse all medicines.</p>
          </div>
        )}

        {/* Disclaimer */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> This is for informational purposes only and is not a substitute for professional medical advice. 
              Always consult with a healthcare provider before taking any medication. Prescription medicines require a valid prescription.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedicineStore;